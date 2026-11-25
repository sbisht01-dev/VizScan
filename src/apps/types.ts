export type IconName = 'alert' | 'clock' | 'file' | 'type' | 'shield' | 'check' | 'camera' | 'tag' | 'mic' | 'chart' | 'download';
export type Status = 'ok' | 'warn' | 'bad';

export type RoleVisual =
  | { kind: 'card'; badge: string; tone: Status; title: string; sub: string }
  | { kind: 'log'; rows: { tag: string; name: string; result: string; ok: boolean }[] }
  | { kind: 'roles'; rows: { role: string; access: string }[] };

/**
 * Hero dashboard card for web products. Every block is optional and drawn in this order:
 * ring (+ counts) · kpis · trend · fleet · alerts · cameras. Use the blocks your product's
 * own dashboard shows (SafeEye: ring, alerts, cameras; EMS: kpis, trend, fleet).
 */
export interface HeroPanel {
  /** Small label on the card, e.g. "Example dashboard". */
  label: string;
  /** A percentage ring; `counts` sit under it. */
  ring?: { title: string; value: number; target: string; delta: string };
  counts?: { label: string; value: string; tone: Status }[];
  /** Headline readings, two per row. */
  kpis?: { label: string; value: string; unit?: string; note?: string }[];
  /** One line chart. Values only; the y-axis runs from 0 to `max`. */
  trend?: { title: string; period: string; unit: string; max: number; points: { x: string; y: number }[] };
  /** A device fleet's status split, e.g. meters online / offline / in maintenance. */
  fleet?: { title: string; counts: { label: string; value: string; tone: Status }[] };
  alerts?: { title: string; meta: string; tone: Status; action: string }[];
  cameras?: { name: string; online: boolean }[];
}

export interface DemoCheck {
  name: string;
  status: Status;
  meta: string;
}
export interface DemoItem {
  name: string;
  title: string;
  company: string;
  /** Extra lines under the company (e.g. phone, email). */
  lines: string[];
  checks: DemoCheck[];
  decision: { tone: Status; title: string; sub: string };
}

/**
 * Everything that differs between apps. The landing page layout is shared;
 * to add an app, copy `apps/restrix.ts`, fill this in and register it in `apps/index.ts`.
 * In text fields, **double asterisks** render as bold.
 *
 * Sections marked optional are skipped when left out. Leave them out rather than
 * filling them with invented pains, personas, stats or sample data.
 */
export interface AppConfig {
  slug: string;
  name: string;
  /** Upper-case name shown in the header brand. */
  wordmark: string;
  tagline: string;
  /** True only if the listing says the app is free; drives every "Free on Google Play" label. */
  free?: boolean;
  /** Overrides the shared CONTACT_EMAIL for this app's "Talk to an expert" links. */
  contactEmail?: string;
  /** Google Play listing. Leave out (with packageId) for products sold by demo, and set `cta`. */
  playStoreUrl?: string;
  packageId?: string;
  /**
   * Demo-request mode: every primary button opens an email to book a demo instead of
   * installing from Google Play (no QR code, Play badge or install dialog).
   */
  cta?: { label: string; short: string; finalLabel: string; sub: string; mailSubject: string };
  /** Files live in public/apps/<slug>/ */
  icon: string;
  favicon: string;
  ogImage: string;
  themeColor: string;
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  nav: { href: string; label: string }[];
  hero: { eyebrow: string; title: [string, string, string]; sub: string; trust: string[] };
  strip?: { label: string; items: string[] };
  problem?: { eyebrow: string; title: string; lead: string; pains: { icon: IconName; title: string; body: string }[] };
  how: { title: string; lead: string; steps: { icon: IconName; title: string; body: string; tags?: string[]; focus?: boolean }[] };
  /** Phone screenshots by default. When every image is landscape (w > h), they show as desktop screens, two per row. */
  screens?: { title: string; lead: string; list: { src: string; alt: string; caption: string; w: number; h: number }[] };
  checks?: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { code: string; title: string; body: string; sample: string; status: Status | 'info' }[];
  };
  roles?: { eyebrow: string; title: string; list: { id: string; tab: string; title: string; points: string[]; visual: RoleVisual }[] };
  outcomes?: { eyebrow: string; title: string; stats: { label: string; value: string; note: string }[] };
  start?: { title: string; steps: { title: string; body: string }[] };
  faq?: { q: string; a: string }[];
  finalCta: { title: string; body: string; mailSubject: string };
  /** Interactive hero demo. Without it, the hero shows `heroShot` in the phone frame. */
  demo?: { label: string; toast: string; items: DemoItem[] };
  /** A real screenshot for the hero phone, used when there is no `demo`. */
  heroShot?: { src: string; alt: string };
  /** A product-dashboard card for the hero (web products), used when there is no `demo`. */
  heroPanel?: HeroPanel;
}
