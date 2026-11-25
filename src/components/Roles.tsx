import { useRef, useState } from 'react';
import { track } from '../config';
import { useApp } from '../app-context';
import type { AppConfig, RoleVisual } from '../apps';
import { SectionHead } from './ui';
import './Sections.css';

/**
 * Tabs instead of three stacked blocks: each visitor opens the one that
 * matches their role, so the page stays short for everyone.
 * Follows the WAI-ARIA tabs pattern (arrow keys, Home/End).
 */
export function Roles() {
  const { roles } = useApp().app;
  // Keyed by list so switching apps resets the active tab.
  return roles ? <RoleTabs key={roles.title} roles={roles} /> : null;
}

function RoleTabs({ roles }: { roles: NonNullable<AppConfig['roles']> }) {
  const ROLES = roles.list;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus = false) => {
    setActive(i);
    if (focus) tabs.current[i]?.focus();
    track('role_tab', { role: ROLES[i].id });
  };

  const onKey = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: ROLES.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    select((map[e.key] + ROLES.length) % ROLES.length, true);
  };

  return (
    <section className="section" id="who">
      <div className="wrap">
        <SectionHead center eyebrow={roles.eyebrow} title={roles.title} />
        <div className="roles">
          <div className="roles__tabs" role="tablist" aria-label="Choose your role" onKeyDown={onKey}>
            {ROLES.map((r, i) => (
              <button
                key={r.id}
                ref={(el) => (tabs.current[i] = el)}
                role="tab"
                id={`tab-${r.id}`}
                aria-controls={`panel-${r.id}`}
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
              >
                {r.tab}
              </button>
            ))}
          </div>
          {ROLES.map((r, i) => (
            <div key={r.id} className="role" role="tabpanel" id={`panel-${r.id}`} aria-labelledby={`tab-${r.id}`} hidden={i !== active}>
              <div>
                <h3>{r.title}</h3>
                <ul className="ticks">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="role__visual" aria-hidden="true">
                <RoleCard visual={r.visual} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ visual }: { visual: RoleVisual }) {
  if (visual.kind === 'roles')
    return (
      <div className="mini mini--log">
        {visual.rows.map((row) => (
          <span key={row.role}>
            <b>{row.role}</b>
            <em className="ok">{row.access}</em>
          </span>
        ))}
      </div>
    );
  if (visual.kind === 'log')
    return (
      <div className="mini mini--log">
        {visual.rows.map((row) => (
          <span key={row.name}>
            <b>{row.tag}</b> {row.name} <em className={row.ok ? 'ok' : 'bad'}>{row.result}</em>
          </span>
        ))}
      </div>
    );
  return (
    <div className="mini">
      <span className={`mini__badge mini__badge--${visual.tone}`}>{visual.badge}</span>
      <strong>{visual.title}</strong>
      <small>{visual.sub}</small>
    </div>
  );
}
