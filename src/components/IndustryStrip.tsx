import { useApp } from '../app-context';
import './Sections.css';

/** "Is this for someone like me?" — answered by industry, without inventing customer logos. */
export function IndustryStrip() {
  const { strip } = useApp().app;
  if (!strip) return null;
  return (
    <section className="strip" aria-label="Industries">
      <div className="wrap strip__inner">
        <span className="strip__label">{strip.label}</span>
        <ul>
          {strip.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
