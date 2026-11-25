import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { CONTACT_EMAIL, detectPlatform, installLink, track, type Platform } from '../config';
import { useApp } from '../app-context';
import type { AppConfig } from '../apps';
import { InstallQr, PlayBadge } from './ui';
import './Install.css';

/**
 * One "Get the app" behaviour for the whole page. the apps here are Android-only:
 *   Android → straight to Google Play
 *   Desktop → QR hand-off to the phone
 *   iPhone  → honest "send it to an Android phone" dialog (no dead App Store link)
 * Labels always name the destination so nothing surprises the visitor.
 */
function labels(platform: Platform, free?: boolean) {
  if (platform === 'ios') return { long: 'Get the Android app', short: 'Get the app' };
  return { long: free ? 'Get it free on Google Play' : 'Get it on Google Play', short: 'Get the app' };
}

/** Line under the app name in the sticky bar and install dialog. */
export const storeLine = (app: AppConfig) => app.cta?.sub ?? (app.free ? 'Free on Google Play' : 'On Google Play');

/** Demo-request apps: primary buttons open an email instead of the store. */
export const demoMailto = (app: AppConfig) =>
  `mailto:${app.contactEmail ?? CONTACT_EMAIL}?subject=${encodeURIComponent(app.cta?.mailSubject ?? app.name)}`;

interface InstallApi {
  platform: Platform;
  label: string;
  shortLabel: string;
  install: (source: string) => void;
}

const Ctx = createContext<InstallApi | null>(null);

export function InstallProvider({ children }: { children: ReactNode }) {
  const { app } = useApp();
  const platform = useMemo(detectPlatform, []);
  const [open, setOpen] = useState(false);

  const install = useCallback(
    (source: string) => {
      if (app.cta) {
        track('demo_click', { source, app: app.slug });
        window.location.href = demoMailto(app);
        return;
      }
      track('install_click', { source, platform });
      if (platform === 'android' && app.playStoreUrl) window.location.href = app.playStoreUrl;
      else setOpen(true);
    },
    [platform, app],
  );

  const api = useMemo(() => {
    const l = app.cta ? { long: app.cta.label, short: app.cta.short } : labels(platform, app.free);
    return { platform, label: l.long, shortLabel: l.short, install };
  }, [platform, app.cta, app.free, install]);

  return (
    <Ctx.Provider value={api}>
      {children}
      <InstallDialog open={open} onClose={() => setOpen(false)} platform={platform} />
    </Ctx.Provider>
  );
}

export function useInstall() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useInstall must be used inside <InstallProvider>');
  return v;
}

/** Primary CTA — the only orange-filled button style on the page. */
export function InstallButton({ source, size = 'lg', short, label: override, className = '' }: { source: string; size?: 'sm' | 'md' | 'lg'; short?: boolean; label?: string; className?: string }) {
  const { label, shortLabel, install } = useInstall();
  return (
    <button className={`btn btn--primary${size !== 'md' ? ` btn--${size}` : ''} ${className}`} onClick={() => install(source)}>
      {override ?? (short ? shortLabel : label)} {!short && <span aria-hidden="true">→</span>}
    </button>
  );
}

/* Desktop can't install a phone app — hand off to the phone with a QR code. */
function InstallDialog({ open, onClose, platform }: { open: boolean; onClose: () => void; platform: Platform }) {
  const { app } = useApp();
  const ref = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(installLink(app.slug));
      setCopied(true);
      track('install_copy_link');
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — the QR still works */
    }
  };

  return (
    <dialog
      ref={ref}
      className="install"
      aria-labelledby="install-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {open && (
        <>
          <button className="install__close" onClick={onClose} aria-label="Close">
            ×
          </button>
          <p className="eyebrow">{storeLine(app)}</p>
          {platform === 'ios' ? (
            <>
              <h2 id="install-title">{app.name} runs on Android</h2>
              <p className="install__sub">There's no iPhone version yet. Scan this with an Android phone, or copy the link and send it to one.</p>
            </>
          ) : (
            <>
              <h2 id="install-title">Scan with your Android phone</h2>
              <p className="install__sub">It opens {app.name} on Google Play.</p>
            </>
          )}
          <InstallQr large />
          <PlayBadge />
          <button className="install__copy" onClick={copy}>
            {copied ? 'Link copied ✓' : 'Copy install link'}
          </button>
        </>
      )}
    </dialog>
  );
}
