import { useApp } from '../app-context';
import { Icon, SectionHead } from './ui';
import './Sections.css';

/** Three steps, not five — fewer steps reads as "easy". The key step is highlighted. */
export function HowItWorks() {
  const app = useApp().app;
  return (
    <section className="section" id="how">
      <div className="wrap">
        <SectionHead center eyebrow="How it works" title={app.how.title} lead={app.how.lead} />
        <ol className="steps">
          {app.how.steps.map((s, i) => (
            <li key={s.title} className={`step${s.focus ? ' step--focus' : ''}`}>
              <span className="step__icon">
                <Icon name={s.icon} />
              </span>
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.tags && (
                <ul className="tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
