import type { ReactNode } from "react";
import { durationPhaseLabels, formatSpan, elapsedPhases } from "@/lib/duration";
import type { DurationRoute, Substance } from "@/lib/types";
import { ElapsedTimingChart } from "@/components/elapsed-timing-chart";
import { TimingMarkerChart } from "@/components/timing-marker-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const unavailableTiming = /^(?:not\s+(?:assessed|established|reported)(?:\b|\s)|the citation identifies the compound rather than reporting|no\s+[^.]+\s+(?:curated|assigned|established)\b)/i;
function curatedTiming(value: string | undefined) {
  const text = value?.trim();
  return text && !unavailableTiming.test(text) ? text : null;
}

function TimingSourceSummary({
  values,
}: {
  values: Array<{ label: string; value: string | null | undefined }>;
}) {
  const available = values.filter((item): item is { label: string; value: string } => Boolean(item.value));
  if (!available.length) return null;
  return (
    <div className="timing-source-summary">
      <dl>
        {available.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
      </dl>
    </div>
  );
}
function RouteTiming({
  route,
  citation,
}: {
  route: DurationRoute;
  citation: ReactNode;
}) {
  const elapsed = elapsedPhases(route);
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          {route.measurement === "plasma"
            ? `Measured plasma timing · ${route.analyte}`
            : route.measurement === "subjective"
              ? "Reported subjective timing"
              : "Measurement type not assessed"}
        </CardDescription>
        <CardTitle>
          {route.route}
          {route.formulation ? ` · ${route.formulation}` : ""}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>{route.population}</p>
        {elapsed.length > 0 ? (
          <>
            <ElapsedTimingChart route={route} />
            <TimingSourceSummary values={[{ label: "Reported window", value: formatSpan(route.total) }]} />
          </>
        ) : <TimingSourceSummary values={[
          ...route.phases.map((phase) => ({ label: durationPhaseLabels[phase.name], value: formatSpan(phase) })),
          { label: "Reported window", value: formatSpan(route.total) },
        ]} />}
        {route.phases.some((phase) => !phase.basis) && <span className="sr-only">Time basis not assessed</span>}
        <p>{route.note}</p>
        <p className="text-sm text-muted-foreground">
          Reported ranges retain the source context. Phase durations are not
          added together to construct a timeline. {citation}
        </p>
      </CardContent>
    </Card>
  );
}
function PublishedTiming({
  kinetics,
  citationFor,
  besideRoutes,
}: {
  kinetics: Substance["kinetics"];
  citationFor: (id: string) => ReactNode;
  besideRoutes: boolean;
}) {
  const markers = kinetics.markers ?? [];
  return (
    <Card>
      <CardHeader>
        <CardTitle>{markers.length ? "Published timing chart" : "Published timing evidence"}</CardTitle>
        <CardDescription>{markers.length ? "Hover a marker to inspect the source wording; horizontal position is elapsed time since exposure." : "The source reports timing terms but does not provide numeric elapsed intervals."}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {markers.length ? (
          <TimingMarkerChart markers={markers} />
        ) : (
          <TimingSourceSummary values={[
            { label: "Onset", value: curatedTiming(kinetics.onset) },
            { label: "Peak", value: curatedTiming(kinetics.peak) },
            { label: "Duration", value: curatedTiming(kinetics.duration) },
          ]} />
        )}
        <p className="text-sm text-muted-foreground">
          {markers.length
            ? "Markers are explicit source observations; they do not establish felt-effect timing or a parent-compound elimination curve."
            : besideRoutes
              ? "Plasma timing and felt effects are distinct measurements."
              : "Not established as a numeric timeline. Plasma timing and felt effects are distinct measurements."} {citationFor(kinetics.sourceId)}
        </p>
      </CardContent>
    </Card>
  );
}

export function DurationTimeline({
  kinetics,
  citationFor,
}: {
  accent?: string;
  kinetics: Substance["kinetics"];
  citationFor: (id: string) => ReactNode;
}) {
  const routes = kinetics.timeline ?? [];
  if (!routes.length) return <PublishedTiming kinetics={kinetics} citationFor={citationFor} besideRoutes={false} />;
  const hasPublishedTiming = Boolean(kinetics.markers?.length)
    || [kinetics.onset, kinetics.peak, kinetics.duration].some((value) => curatedTiming(value) !== null);
  return (
    <div className="flex flex-col gap-4">
      {hasPublishedTiming && <PublishedTiming kinetics={kinetics} citationFor={citationFor} besideRoutes />}
      {routes.map((route) => (
        <RouteTiming
          key={`${route.route}-${route.sourceId}-${route.id ?? route.formulation ?? ""}`}
          route={route}
          citation={citationFor(route.sourceId)}
        />
      ))}
    </div>
  );
}
