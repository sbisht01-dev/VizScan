import { useApp } from '../app-context';
import { SectionHead } from './ui';
import './Sections.css';

/** Native <details>: accessible and keyboard-friendly. Answers the objections that stop installs. */
export function Faq() {
  const { faq, cta } = useApp().app;
  if (!faq?.length) return null;
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <SectionHead
          eyebrow="FAQ"
          title={cta ? 'Questions before you book a demo' : 'Questions before you install'}
          lead={
            <>
              Can't find your answer?{' '}
              <a href="#contact" className="link">
                Talk to an expert
              </a>
              .
            </>
          }
        />
        <div className="faq__list">
          {faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
