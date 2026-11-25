import { useApp } from '../app-context';
import { Icon, SectionHead } from './ui';
import './Sections.css';

/** Name the pain in the visitor's own words before selling the cure. */
export function Problem() {
  const { problem } = useApp().app;
  if (!problem) return null;
  return (
    <section className="section section--dark" id="problem">
      <div className="dark-bg" aria-hidden="true" />
      <div className="wrap">
        <SectionHead center eyebrow={problem.eyebrow} title={problem.title} lead={problem.lead} />
        <div className="pain-grid">
          {problem.pains.map((p) => (
            <article key={p.title} className="pain">
              <span className="pain__icon">
                <Icon name={p.icon} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
