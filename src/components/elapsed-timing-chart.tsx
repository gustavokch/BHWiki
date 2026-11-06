"use client";

import type { ChartConfiguration } from "chart.js";
import { useEffect, useMemo, useRef, useState } from "react";
import type { DurationRoute } from "@/lib/types";
import { durationPhaseLabels, elapsedPhases } from "@/lib/duration";
import { loadChartJs } from "./chartjs-runtime";
import { phaseTone, timingToneColors, timingToneLabels, type TimingTone } from "./timing-chart-colors";

type ElapsedTimingChartProps = {
  route: DurationRoute;
};

function formatElapsed(minutes: number) {
  if (minutes >= 60) {
    const hours = minutes / 60;
    return Number.isInteger(hours) ? `${hours} h` : `${hours.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")} h`;
  }
  return `${minutes} min`;
}

function formatAxisTick(minutes: number, maximum: number) {
  if (maximum >= 60 && minutes === 0) return "0 h";
  return formatElapsed(minutes);
}

export function ElapsedTimingChart({ route }: ElapsedTimingChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const phases = useMemo(() => elapsedPhases(route), [route]);
  const maximum = Math.max(1, ...phases.map((phase) => phase.max));
  const labels = useMemo(() => phases.map((phase) => durationPhaseLabels[phase.name]), [phases]);
  const tones = useMemo(() => phases.map((phase) => phaseTone(phase.name)), [phases]);
  const hasTone = (tone: TimingTone) => tones.includes(tone);
  const accessibleValues = useMemo(() => phases.map((phase, index) => `${labels[index]}: ${formatElapsed(phase.min)}–${formatElapsed(phase.max)}`), [labels, phases]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px" });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !phases.length || !isVisible) return;

    let cancelled = false;
    let chart: import("chart.js").Chart | undefined;

    void loadChartJs().then(({ Chart }) => {
      if (cancelled) return;
      const datasets = phases.map((phase, index) => {
        const color = timingToneColors[tones[index]];
        return {
          label: labels[index],
          data: [
            { x: phase.min, y: index },
            { x: phase.max, y: index },
          ],
          backgroundColor: color,
          borderColor: "#ffffff",
          borderWidth: 2,
          pointRadius: phase.min === phase.max ? 7 : 6,
          pointHoverRadius: 8,
          pointBorderWidth: 2,
          showLine: false,
        };
      });

      const config: ChartConfiguration<"scatter"> = {
        type: "scatter",
        data: { datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          interaction: { mode: "nearest", intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: (items) => items[0]?.dataset.label ?? "Timing phase",
                label: (context) => {
                  const phase = phases[context.datasetIndex];
                  return phase ? ` ${formatElapsed(phase.min)}–${formatElapsed(phase.max)} since exposure` : "";
                },
              },
            },
          },
          scales: {
            x: {
              type: "linear",
              min: 0,
              max: maximum,
              grid: { color: "rgba(100, 116, 139, 0.16)" },
              border: { color: "rgba(100, 116, 139, 0.32)" },
              ticks: {
                color: "#64748b",
                count: 5,
                callback: (_value, index, ticks) => formatAxisTick(maximum * (index / Math.max(ticks.length - 1, 1)), maximum),
              },
              title: { display: true, text: "Elapsed since exposure", color: "#475569" },
            },
            y: {
              type: "linear",
              min: -0.5,
              max: Math.max(0.5, phases.length - 0.5),
              reverse: true,
              grid: { display: false },
              border: { display: false },
              ticks: {
                color: "#334155",
                stepSize: 1,
                callback: (value) => labels[Number(value)] ?? "",
              },
            },
          },
        },
      };

      chart = new Chart(canvas, config);
    });

    return () => {
      cancelled = true;
      chart?.destroy();
    };
  }, [isVisible, labels, maximum, phases, tones]);

  if (!phases.length) return null;

  return (
    <figure className="elapsed-timing-chart" aria-label={route.measurement === "subjective" ? "Reported subjective timing since exposure" : `Measured elapsed timing for ${route.analyte ?? "the reported analyte"}`}>
      <figcaption className="elapsed-timing-chart-heading">
        <div>
          <strong>Elapsed timing</strong>
          <span>Each pair of points is an independent reported range; color follows the reported phase.</span>
        </div>
        <span className="elapsed-timing-chart-unit">{maximum >= 60 ? "hours" : "minutes"}</span>
      </figcaption>
      <div className="elapsed-timing-chart-legend" aria-label="Timing phase legend">
        {(["peak", "decline", "rising", "observed"] as TimingTone[]).filter(hasTone).map((tone) => (
          <span key={tone}><i className={`timing-marker-dot timing-marker-dot-${tone}`} aria-hidden="true" />{timingToneLabels[tone]}</span>
        ))}
      </div>
      <div className="elapsed-timing-chart-canvas" data-chart-state={isVisible ? "ready" : "lazy"} style={{ height: `${Math.max(190, phases.length * 58 + 72)}px` }}>
        <canvas ref={canvasRef} role="img" aria-label={`Elapsed timing chart: ${accessibleValues.join("; ")}`} />
      </div>
      <ul className="sr-only" aria-label="Reported elapsed timing ranges">
        {accessibleValues.map((value) => <li key={value}>{value}</li>)}
      </ul>
    </figure>
  );
}
