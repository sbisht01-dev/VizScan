import { useMemo } from 'react';
import { COMPANY_URL, PRIVACY_URL } from '../config';
import { useApp } from '../app-context';
import { useActiveSection, useScrolled } from '../hooks';
import { InstallButton, storeLine, useInstall } from './Install';
import './Layout.css';

function Brand({ small }: { small?: boolean }) {
  const { app } = useApp();
  return (
    <a href="#top" className={`brand${small ? ' brand--small' : ''}`} aria-label={`${app.name} by TFrenzy — back to top`}>
      <img src={app.icon} alt="" width={small ? 28 : 36} height={small ? 28 : 36} className="brand__icon" />
      <span className="brand__text">
        <span className="brand__name">{app.wordmark}</span>
        <span className="brand__by">by TFrenzy</span>
      </span>
    </a>
  );
}

/**
 * Sticky nav — "Get the app" is always one tap away. Only four anchor links:
 * on a single-goal page, navigation is for orientation, not exploration.
 * `hideCta` lets the mobile sticky bar take over so only one primary button shows.
 */
export function Nav({ hideCta }: { hideCta: boolean }) {
  const scrolled = useScrolled();
  const { nav: NAV_LINKS, cta } = useApp().app;
  const ids = useMemo(() => NAV_LINKS.map((l) => l.href.slice(1)), [NAV_LINKS]);
  const active = useActiveSection(ids);
  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${hideCta ? ' nav--cta-hidden' : ''}`}>
      <div className="wrap nav__inner">
        <Brand />
        <nav className="nav__links" aria-label="Page sections">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href.slice(1) ? 'is-active' : undefined} aria-current={active === l.href.slice(1) ? 'true' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__cta">
          {!cta && (
            <a href="#contact" className="btn btn--ghost btn--sm nav__secondary">
              Talk to an expert
            </a>
          )}
          <InstallButton source="nav_install" size="sm" short />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { app } = useApp();
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <Brand small />
        <nav className="footer__links" aria-label="Footer">
          {app.nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#more-apps">More apps</a>
          <a href={PRIVACY_URL} target="_blank" rel="noopener">
            Privacy
          </a>
        </nav>
        <p className="footer__copy">
          {app.name} is a product of{' '}
          <a href={COMPANY_URL} className="link" target="_blank" rel="noopener">
            TFrenzy Private Limited
          </a>
          . © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

/**
 * Mobile sticky CTA — shown only between the hero CTA and the final CTA,
 * so there's never two "install" buttons saying the same thing at once.
 */
export function StickyCta({ visible }: { visible: boolean }) {
  const { app } = useApp();
  const { install, shortLabel } = useInstall();
  return (
    <div className={`sticky-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <div className="sticky-cta__text">
        <strong>{app.name}</strong>
        <span>{storeLine(app)}</span>
      </div>
      <button className="btn btn--primary" tabIndex={visible ? 0 : -1} onClick={() => install('sticky_install')}>
        {shortLabel}
      </button>
    </div>
  );
}
