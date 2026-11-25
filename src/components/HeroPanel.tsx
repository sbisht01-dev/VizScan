import type { HeroPanel as Panel } from '../apps';
import './HeroPanel.css';

/**
 * Hero visual for web products: a static dashboard card drawn from the config.
 * Each block renders only when the app provides it (see `HeroPanel` in apps/types.ts). No animation.
 */
export function HeroPanel({ panel }: { panel: Panel }) {
  const { ring, counts, kpis, trend, fleet, alerts, cameras } = panel;
  return (
    <div className="demo">
      <div className="demo__frame">
        <span className="corner corner--tl" aria-hidden="true" />
        <span className="corner corner--br" aria-hidden="true" />

        <figure className="hpanel" aria-label={summary(panel)}>
          <figcaption className="hpanel__label">{panel.label}</figcaption>

          {ring && (
            <section className="hpanel__card">
              <header className="hpanel__head">
                <h3>{ring.title}</h3>
                <span className="hpanel__delta">{ring.delta}</span>
              </header>
              <div className="hpanel__ring" style={{ ['--pct' as string]: clampPct(ring.value) }}>
                <div>
                  <strong>{clampPct(ring.value)}%</strong>
                  <small>{ring.target}</small>
                </div>
              </div>
              {counts && <Counts counts={counts} />}
            </section>
          )}

          {kpis && (
            <section className="hpanel__card hpanel__card--flush">
              <ul className="hpanel__kpis">
                {kpis.map((k) => (
                  <li key={k.label}>
                    <span className="kpi__label">{k.label}</span>
                    <span className="kpi__value">
                      <strong>{k.value}</strong>
                      {k.unit && <small>{k.unit}</small>}
                    </span>
                    {k.note && <span className="kpi__note">{k.note}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {trend && (
            <section className="hpanel__card">
              <header className="hpanel__head">
                <h3>
                  {trend.title} <span className="hpanel__unit">({trend.unit})</span>
                </h3>
                <span className="hpanel__period">{trend.period}</span>
              </header>
              <TrendLine trend={trend} />
            </section>
          )}

          {fleet && (
            <section className="hpanel__card">
              <header className="hpanel__head">
                <h3>{fleet.title}</h3>
              </header>
              <Counts counts={fleet.counts} flush />
            </section>
          )}

          {alerts && (
            <section className="hpanel__card">
              <header className="hpanel__head">
                <h3>Live alerts</h3>
                <span className="hpanel__live" aria-hidden="true" />
              </header>
              <ul className="hpanel__alerts">
                {alerts.map((a) => (
                  <li key={a.title} className={`al--${a.tone}`}>
                    <span className="al__icon" aria-hidden="true">!</span>
                    <span className="al__text">
                      <b>{a.title}</b>
                      <small>{a.meta}</small>
                    </span>
                    <span className="al__action">{a.action}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {cameras && (
            <ul className="hpanel__cams">
              {cameras.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  <em className={c.online ? 'on' : 'off'}>{c.online ? 'Online' : 'Offline'}</em>
                </li>
              ))}
            </ul>
          )}
        </figure>
      </div>
    </div>
  );
}

const clampPct = (v: number) => Math.max(0, Math.min(100, v));

/** One sentence for screen readers, built from whichever blocks the panel has. */
function summary(p: Panel) {
  const parts: string[] = [];
  if (p.ring) parts.push(`${p.ring.title} ${clampPct(p.ring.value)}%, ${p.ring.target}`);
  if (p.kpis) parts.push(p.kpis.map((k) => `${k.label} ${k.value}${k.unit ? ` ${k.unit}` : ''}`).join(', '));
  if (p.trend?.points.length) parts.push(`${p.trend.title} chart, ${p.trend.points[0].x} to ${p.trend.points[p.trend.points.length - 1].x}`);
  if (p.fleet) parts.push(`${p.fleet.title}: ${p.fleet.counts.map((c) => `${c.value} ${c.label}`).join(', ')}`);
  return `${p.label}: ${parts.join('. ')}.`;
}

/** Status counts. The dot + word carry the state, so colour is never the only cue. */
function Counts({ counts, flush }: { counts: NonNullable<Panel['counts']>; flush?: boolean }) {
  return (
    <ul className={`hpanel__counts${flush ? ' hpanel__counts--flush' : ''}`}>
      {counts.map((c) => (
        <li key={c.label}>
          <strong className={`t--${c.tone}`}>{c.value}</strong>
          <span>
            {flush && <i className={`hpanel__dot hpanel__dot--${c.tone}`} aria-hidden="true" />}
            {c.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* Single-series line: 2px stroke, soft area fill, two recessive gridlines, first / middle / last x labels. */
const W = 340;
const H = 120;
const PAD = { top: 8, right: 8, bottom: 22, left: 26 };

function TrendLine({ trend }: { trend: NonNullable<Panel['trend']> }) {
  const pts = trend.points;
  const n = pts.length;
  if (!n) return null;
  const iw = W - PAD.left - PAD.right;
  const ih = H - PAD.top - PAD.bottom;
  const x = (i: number) => PAD.left + (n > 1 ? (i / (n - 1)) * iw : iw / 2);
  const y = (v: number) => PAD.top + ih - (Math.max(0, Math.min(trend.max, v)) / trend.max) * ih;
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(p.y).toFixed(1)}`).join(' ');
  const area = `${line} L${x(n - 1).toFixed(1)} ${y(0)} L${x(0).toFixed(1)} ${y(0)} Z`;
  const grid = [trend.max / 2, trend.max];
  const ticks = [...new Set([0, Math.floor((n - 1) / 2), n - 1])];

  return (
    <svg
      className="trend"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`${trend.title} in ${trend.unit}, ${trend.period}: ${pts.map((p) => `${p.x} ${p.y}`).join(', ')}`}
    >
      {grid.map((g) => (
        <g key={g}>
          <line className="trend__grid" x1={PAD.left} x2={W - PAD.right} y1={y(g)} y2={y(g)} />
          <text className="trend__axis" x={PAD.left - 6} y={y(g) + 3} textAnchor="end">
            {g}
          </text>
        </g>
      ))}
      <line className="trend__base" x1={PAD.left} x2={W - PAD.right} y1={y(0)} y2={y(0)} />
      <path className="trend__area" d={area} />
      <path className="trend__line" d={line} />
      <circle className="trend__dot" cx={x(n - 1)} cy={y(pts[n - 1].y)} r={4} />
      {ticks.map((i) => (
        <text key={i} className="trend__axis" x={x(i)} y={H - 6} textAnchor={i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'}>
          {pts[i].x}
        </text>
      ))}
    </svg>
  );
}
