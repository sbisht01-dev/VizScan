import { useState } from 'react';
import { APPS } from '../apps';
import { useApp } from '../app-context';
import { track } from '../config';
import './AppSwitcher.css';

/**
 * Bottom-left button for choosing which app's landing page to show.
 * Opens on hover or keyboard focus; tap toggles it on touch screens.
 */
export function AppSwitcher() {
  const { app, setApp } = useApp();
  const [open, setOpen] = useState(false);
  return (
    <div className={`switcher${open ? ' is-open' : ''}`} onMouseLeave={() => setOpen(false)} onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}>
      <ul className="switcher__menu" role="menu" aria-label="Choose app landing page">
        {APPS.map((a) => (
          <li key={a.slug} role="none">
            <button
              role="menuitemradio"
              aria-checked={a.slug === app.slug}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                track('app_switch', { app: a.slug });
                setApp(a.slug);
                setOpen(false);
              }}
            >
              <img src={a.icon} alt="" width={22} height={22} />
              {a.name}
              {a.slug === app.slug && <span aria-hidden="true">✓</span>}
            </button>
          </li>
        ))}
      </ul>
      <button className="switcher__btn" aria-haspopup="menu" aria-expanded={open} onMouseEnter={() => setOpen(true)} onFocus={() => setOpen(true)} onClick={() => setOpen((o) => !o)}>
        <img src={app.icon} alt="" width={20} height={20} />
        <span>{app.name}</span>
        <span aria-hidden="true">▴</span>
      </button>
    </div>
  );
}
