import { useRef, useState } from 'react';
import { track } from '../config';
import { useApp } from '../app-context';
import type { AppConfig, Status } from '../apps';
import './PhoneDemo.css';

const ICON: Record<Status, string> = { ok: '✓', warn: '!', bad: '×' };
const DECISION_ICON: Record<Status, string> = { ok: '✓', warn: '✓', bad: '!' };

/**
 * A working product demo that mirrors the real VizScan flow
 * (scan a card → fields fill in → saved under a category). No animation:
 * picking a sample card shows its result immediately.
 */
export function PhoneDemo({ demo }: { demo: NonNullable<AppConfig['demo']> }) {
  const { app } = useApp();
  const CARDS = demo.items;
  const [index, setIndex] = useState(0);
  const chips = useRef<(HTMLButtonElement | null)[]>([]);
  const v = CARDS[Math.min(index, CARDS.length - 1)];

  const select = (i: number, focus = false) => {
    setIndex(i);
    if (focus) chips.current[i]?.focus();
    track('demo_card', { name: CARDS[i].name });
  };

  return (
    <div className="demo">
      <div className="demo__frame">
        <span className="corner corner--tl" aria-hidden="true" />
        <span className="corner corner--br" aria-hidden="true" />

        <div className="phone" role="img" aria-label={`${app.name} demo for ${v.name}, ${v.title}, ${v.company}: ${v.decision.title}. ${v.decision.sub}.`}>
          <div className="phone__notch" aria-hidden="true" />
          <div className="phone__screen" aria-hidden="true">
            <div className="app__brand">
              <span className="app__wordmark">
                <img src={app.icon} alt="" width={26} height={26} />
                {app.name}
              </span>
              <span className="app__tagline">{app.tagline}</span>
            </div>

            <div className="bizcard">
              <span className="bizcard__corner bizcard__corner--tl" />
              <span className="bizcard__corner bizcard__corner--tr" />
              <span className="bizcard__corner bizcard__corner--bl" />
              <span className="bizcard__corner bizcard__corner--br" />
              <strong className="bizcard__name">{v.name}</strong>
              <span className="bizcard__title">{v.title}</span>
              <span className="bizcard__company">{v.company}</span>
              {v.lines.map((l) => (
                <span key={l} className="bizcard__line">
                  {l}
                </span>
              ))}
            </div>

            <ul className="app__checks">
              {v.checks.map((c) => (
                <li key={c.name} className={`ck--${c.status}`}>
                  <span className="ck__icon">{ICON[c.status]}</span>
                  <span className="ck__name">{c.name}</span>
                  <span className="ck__meta">{c.meta}</span>
                </li>
              ))}
            </ul>

            <div className={`app__decision d--${v.decision.tone}`}>
              <span className="decision__icon">{DECISION_ICON[v.decision.tone]}</span>
              <span className="decision__text">
                <strong>{v.decision.title}</strong>
                <small>{v.decision.sub}</small>
              </span>
            </div>
          </div>
        </div>

        <div className="toast toast--log" aria-hidden="true">
          <span className="toast__dot" /> {demo.toast}
        </div>
      </div>

      <div className="demo__picker">
        <p className="demo__label" id="demo-label">
          {demo.label}
        </p>
        <div
          className="demo__chips"
          role="radiogroup"
          aria-labelledby="demo-label"
          onKeyDown={(e) => {
            if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
            e.preventDefault();
            select((index + (e.key === 'ArrowRight' ? 1 : CARDS.length - 1)) % CARDS.length, true);
          }}
        >
          {CARDS.map((card, i) => (
            <button
              key={card.name}
              ref={(el) => (chips.current[i] = el)}
              className="chip"
              role="radio"
              aria-checked={i === index}
              tabIndex={i === index ? 0 : -1}
              onClick={() => select(i)}
            >
              <span className={`chip__dot chip__dot--${card.checks.some((c) => c.status !== 'ok') ? 'warn' : 'ok'}`} />
              {card.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** For apps without a demo: one real screenshot in the same phone frame. */
export function PhoneShot({ shot }: { shot: NonNullable<AppConfig['heroShot']> }) {
  return (
    <div className="demo">
      <div className="demo__frame">
        <span className="corner corner--tl" aria-hidden="true" />
        <span className="corner corner--br" aria-hidden="true" />
        <div className="phone">
          <div className="phone__notch" aria-hidden="true" />
          <div className="phone__screen phone__screen--shot">
            <img src={shot.src} alt={shot.alt} width={276} height={576} fetchPriority="high" />
          </div>
        </div>
      </div>
    </div>
  );
}
