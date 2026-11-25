import { useApp } from '../app-context';
import { InstallButton } from './Install';
import { SectionHead } from './ui';
import './Sections.css';

/**
 * Real screenshots from the Play Store listing — proof that the product
 * exists and looks exactly like this once installed. Placed right after
 * "How it works" so visitors see the steps they just read, for real.
 */
export function Screens() {
  const { screens } = useApp().app;
  if (!screens) return null;
  // Desktop screenshots (web products) get a landscape frame, two per row.
  const wide = screens.list.every((s) => s.w > s.h);
  return (
    <section className="section section--warm" id="app">
      <div className="wrap">
        <SectionHead center eyebrow="The app" title={screens.title} lead={screens.lead} />
        <ul className={`screens${wide ? ' screens--wide' : ''}`}>
          {screens.list.map((s) => (
            <li key={s.src} className="screen">
              <div className="screen__frame">
                <img src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" />
              </div>
              <p className="screen__caption">{s.caption}</p>
            </li>
          ))}
        </ul>
        <div className="screens__cta">
          <InstallButton source="screens_install" />
        </div>
      </div>
    </section>
  );
}
