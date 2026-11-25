import { useApp } from '../app-context';
import { SectionHead } from './ui';
import './Sections.css';

/** Big numbers in the reference's orange display style — claims kept to what the product does. */
export function Outcomes() {
  const { outcomes } = useApp().app;
  if (!outcomes) return null;
  return (
    <section className="section section--tight" aria-labelledby="outcomes-title">
      <div className="wrap">
        <SectionHead center id="outcomes-title" eyebrow={outcomes.eyebrow} title={outcomes.title} />
        <div className="stats">
          {outcomes.stats.map((s) => (
            <div key={s.label} className="stat">
              <p className="stat__label">{s.label}</p>
              <p className="stat__value">{s.value}</p>
              <p className="stat__note">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
