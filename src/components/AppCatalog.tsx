import { APPS } from '../apps';
import { useApp } from '../app-context';
import { track } from '../config';
import './AppCatalog.css';

/**
 * "More from TFrenzy" — every other app on this template, each opening its own
 * landing page (same switch as the bottom-left switcher, then back to the top).
 * Renders nothing when there is only one app.
 */
export function AppCatalog() {
  const { app, setApp } = useApp();
  const others = APPS.filter((a) => a.slug !== app.slug);
  if (!others.length) return null;

  const open = (slug: string) => {
    track('catalog_open', { from: app.slug, app: slug });
    setApp(slug);
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="section section--gray catalog" id="more-apps" aria-labelledby="catalog-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">App catalogue</p>
          <h2 id="catalog-title">More apps from TFrenzy</h2>
          <p>Other tools we build for work, industry and everyday life.</p>
        </div>
        <ul className="catalog__grid">
          {others.map((a) => (
            <li key={a.slug} className="catalog__card">
              <div className="catalog__top">
                <img src={a.icon} alt="" width={56} height={56} className="catalog__icon" />
                <div>
                  <h3>{a.name}</h3>
                  <p className="catalog__tagline">{a.tagline}</p>
                </div>
              </div>
              <p className="catalog__blurb">{a.meta.ogDescription}</p>
              <div className="catalog__actions">
                <a
                  href={`?app=${a.slug}`}
                  className="btn btn--primary btn--sm"
                  onClick={(e) => {
                    // Plain clicks switch in place; modifier clicks open a new tab via the href.
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
                    e.preventDefault();
                    open(a.slug);
                  }}
                >
                  View {a.name}
                </a>
                {a.playStoreUrl && (
                  <a href={a.playStoreUrl} className="btn btn--ghost btn--sm" target="_blank" rel="noopener" onClick={() => track('catalog_play', { app: a.slug })}>
                    Google Play ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
