import { useApp } from '../app-context';
import { SectionHead } from './ui';
import './Sections.css';

/** A concrete list builds credibility; the sample statuses show why each check matters. */
export function Checks() {
  const { checks } = useApp().app;
  if (!checks) return null;
  return (
    <section className="section section--gray" id="checks">
      <div className="wrap">
        <SectionHead eyebrow={checks.eyebrow} title={checks.title} lead={checks.lead} />
        <div className="checks-grid">
          {checks.items.map((d) => (
            <article key={d.code} className="doc">
              <header>
                <span className="doc__code">{d.code}</span>
                <span className={`pill pill--${d.status}`}>{d.sample}</span>
              </header>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
