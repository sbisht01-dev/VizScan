import { forwardRef } from 'react';
import { useApp, rich } from '../app-context';
import { InstallButton } from './Install';
import { PhoneDemo, PhoneShot } from './PhoneDemo';
import { HeroPanel } from './HeroPanel';
import { Tick } from './ui';
import './Hero.css';

/**
 * HERO — answers three questions in under five seconds:
 * What is it? (headline) · Why care? (subhead) · What do I do? (one primary CTA).
 * `ctaRef` marks the CTA row so the mobile sticky bar knows when it has scrolled away.
 */
export const Hero = forwardRef<HTMLDivElement>(function Hero(_, ctaRef) {
  const { hero, demo, heroShot, heroPanel } = useApp().app;
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <svg className="skyline" viewBox="0 0 1440 420" preserveAspectRatio="xMaxYMax slice">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#E8621A" stopOpacity="0" />
              <stop offset="1" stopColor="#E8621A" stopOpacity=".18" />
            </linearGradient>
          </defs>
          <rect width="1440" height="420" fill="url(#sky)" />
          <g fill="#15161A" opacity=".08">
            <rect x="760" y="170" width="38" height="250" />
            <rect x="772" y="120" width="14" height="60" />
            <rect x="840" y="230" width="120" height="190" />
            <rect x="860" y="200" width="20" height="40" />
            <rect x="990" y="90" width="26" height="330" />
            <rect x="1030" y="150" width="54" height="270" />
            <rect x="1100" y="250" width="160" height="170" />
            <rect x="1130" y="60" width="22" height="200" />
            <rect x="1280" y="140" width="40" height="280" />
            <rect x="1336" y="210" width="104" height="210" />
            <path d="M1180 250c0-40 20-60 40-60s40 20 40 60z" />
          </g>
        </svg>
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            {hero.title[0]}
            <br />
            <span className="accent">{hero.title[1]}</span>
            <br />
            {hero.title[2]}
          </h1>
          <p className="hero__sub">
            {rich(hero.sub)}
          </p>

          {/* Primary (install) + low-commitment secondary for visitors who aren't ready yet. */}
          <div className="hero__ctas" ref={ctaRef}>
            <InstallButton source="hero_install" />
            <a href="#how" className="btn btn--outline btn--lg">
              See how it works
            </a>
          </div>

          {/* Risk reducers right under the CTA, where hesitation happens. */}
          <ul className="hero__trust" aria-label="Why it's easy to start">
            {hero.trust.map((t) => (
              <li key={t}>
                <Tick />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {demo ? <PhoneDemo key={demo.label} demo={demo} /> : heroPanel ? <HeroPanel panel={heroPanel} /> : heroShot && <PhoneShot shot={heroShot} />}
      </div>
    </section>
  );
});
