"use client";

import type { ChartConfiguration } from "chart.js";
import { useEffect, useMemo, useRef, useState } from "react";
import type { TimingMarker } from "@/lib/types";
import { toMinutes } from "@/lib/duration";
import { loadChartJs } from "./chartjs-runtime";
import { markerTone, timingToneColors, timingToneLabels, type TimingTone } from "./timing-chart-colors";

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

export function TimingMarkerChart({ markers }: { markers: TimingMarker[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const points = useMemo(() => markers.map((marker) => ({ marker, minutes: toMinutes(marker.at, marker.unit) })), [markers]);
  const maximum = Math.max(1, ...points.map((point) => point.minutes));
  const axisMaximum = maximum + Math.max(1, maximum * 0.04);
  const labels = useMemo(() => points.map((point) => {
    if (/early/i.test(point.marker.label)) return "Early peak";
    if (/late/i.test(point.marker.label)) return "Later peak";
    return point.marker.label.length > 18 ? `${point.marker.label.slice(0, 17)}…` : point.marker.label;
  }), [points]);
  const tones = useMemo(() => points.map((point) => markerTone(point.marker.label, point.marker.note)), [points]);
  const hasTone = (tone: TimingTone) => tones.includes(tone);
  const accessibleValues = points.map((point) => `${point.marker.label}: ${formatElapsed(point.minutes)} since exposure. ${point.marker.note}`);

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
    if (!canvas || !points.length || !isVisible) return;

    let cancelled = false;
    let chart: import("chart.js").Chart | undefined;

    void loadChartJs().then(({ Chart }) => {
      if (cancelled) return;
      const datasets = points.map((point, index) => {
        const tone = tones[index];
        const color = timingToneColors[tone];
        return {
          label: point.marker.label,
          data: [{ x: point.minutes, y: index }],
          backgroundColor: color,
          borderColor: "#ffffff",
          borderWidth: 2,
          pointRadius: 7,
          pointHoverRadius: 9,
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
                title: (items) => items[0]?.dataset.label ?? "Timing marker",
                label: (context) => {
                  const point = points[context.datasetIndex];
                  return point ? ` ${formatElapsed(point.minutes)} since exposure · ${point.marker.note}` : "";
                },
              },
            },
          },
          scales: {
            x: {
              type: "linear",
              min: 0,
              max: axisMaximum,
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
              max: Math.max(0.5, points.length - 0.5),
              reverse: true,
              grid: { display: false },
              border: { display: false },
              ticks: { display: false, color: "#334155", stepSize: 1, callback: (value) => labels[Number(value)] ?? "" },
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
  }, [axisMaximum, isVisible, labels, maximum, points, tones]);

  if (!points.length) return null;

  return (
    <figure className="elapsed-timing-chart timing-marker-chart" aria-label="Published timing observations">
      <figcaption className="elapsed-timing-chart-heading">
        <div>
          <strong>Published timing observations</strong>
          <span>Markers show explicit elapsed observations; vertical position has no quantitative meaning.</span>
        </div>
        <div className="elapsed-timing-chart-legend" aria-label="Timing phase legend">
          {(["peak", "decline", "rising", "observed"] as TimingTone[]).filter(hasTone).map((tone) => (
            <span key={tone}><i className={`timing-marker-dot timing-marker-dot-${tone}`} aria-hidden="true" />{timingToneLabels[tone]}</span>
          ))}
        </div>
      </figcaption>
      <div className="elapsed-timing-chart-canvas" data-chart-state={isVisible ? "ready" : "lazy"} style={{ height: `${Math.max(190, points.length * 58 + 72)}px` }}>
        <canvas ref={canvasRef} role="img" aria-label={`Published timing observations: ${accessibleValues.join("; ")}`} />
      </div>
      <ol className="timing-marker-readout">
        {points.map((point, index) => (
          <li key={point.marker.id}>
            <i className={`timing-marker-dot timing-marker-dot-${tones[index]}`} aria-hidden="true" />
            <span><strong>{point.marker.label}</strong><small>{formatElapsed(point.minutes)} since exposure</small></span>
          </li>
        ))}
      </ol>
      <ul className="sr-only" aria-label="Published timing observations">
        {accessibleValues.map((value) => <li key={value}>{value}</li>)}
      </ul>
    </figure>
  );
}
