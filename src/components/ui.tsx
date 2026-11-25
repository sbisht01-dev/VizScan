import { useEffect, useState, type ReactNode } from 'react';
import QRCode from 'qrcode';
import { installLink, track } from '../config';
import { useApp } from '../app-context';
import type { IconName } from '../apps';

/* ── Section header: "● LABEL" + heading + optional lead ── */
export function SectionHead({ eyebrow, title, lead, center, id }: { eyebrow: string; title: ReactNode; lead?: ReactNode; center?: boolean; id?: string }) {
  return (
    <header className={`section-head${center ? ' section-head--center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {lead && <p>{lead}</p>}
    </header>
  );
}

/* ── Line icons ── */
const PATHS: Record<IconName, ReactNode> = {
  alert: (
    <>
      <path d="M12 3l9 16H3L12 3z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  file: (
    <>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  type: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M7 12h6M17 10v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8z" />
      <path d="M7.5 8.5h.01" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0014 0M12 18v3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11M7 10l5 5 5-5" />
      <path d="M4 19h16" />
    </>
  ),
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
};

export function Icon({ name, className = 'icon-stroke' }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

export function Tick() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="tick">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/* ── Google Play badge ── */
export function PlayBadge() {
  const { app } = useApp();
  if (!app.playStoreUrl) return null;
  return (
    <div className="stores">
      <a className="store" href={app.playStoreUrl} target="_blank" rel="noopener" onClick={() => track('cta_click', { id: 'store_play' })}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.2 2.6c-.3.3-.4.7-.4 1.2v16.4c0 .5.1.9.4 1.2l9.3-9.4-9.3-9.4zm10.4 10.4 2.6 2.6-11 6.3c-.4.2-.8.3-1.1.2l9.5-9.1zm0-2L5.1 1.9c.3-.1.7 0 1.1.2l11 6.3-2.6 2.6zm3.6-.4 2.9 1.7c.8.5.8 1.3 0 1.8l-2.9 1.7-2.8-2.6 2.8-2.6z" />
        </svg>
        <span>
          <small>Get it on</small>
          <b>Google Play</b>
        </span>
      </a>
    </div>
  );
}

/* ── QR code for the install link ── */
export function InstallQr({ large }: { large?: boolean }) {
  const { app } = useApp();
  const link = installLink(app.slug);
  const [src, setSrc] = useState('');
  useEffect(() => {
    QRCode.toDataURL(link, { margin: 0, width: 400, color: { dark: '#15161A', light: '#FFFFFF' }, errorCorrectionLevel: 'M' })
      .then(setSrc)
      .catch(() => setSrc(''));
  }, [link]);
  return (
    <div className={`qr${large ? ' qr--lg' : ''}`}>
      {src ? <img src={src} alt={`QR code — scan to get ${app.name} on Google Play`} /> : <a className="link" href={link}>{link}</a>}
    </div>
  );
}
