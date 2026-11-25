/** Shared by every app on this template (all are TFrenzy products). Per-app values live in src/apps/. */
export const CONTACT_EMAIL = 'hello@tfrenzy.com';
export const COMPANY_URL = 'https://tfrenzy.com/';
export const PRIVACY_URL = 'https://tfrenzy.com/privacy-policy';

export type Platform = 'android' | 'ios' | 'desktop';

export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent || '';
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'desktop';
}

/** QR codes point here; on an Android phone this URL forwards straight to Google Play. */
export const installLink = (slug: string) => `${window.location.origin}${window.location.pathname}?app=${slug}&install=1`;

/** Analytics hook: every CTA reports where it was clicked (GTM / GA4 ready). */
export function track(event: string, data: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
}
