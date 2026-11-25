import { forwardRef } from 'react';
import { CONTACT_EMAIL, track } from '../config';
import { useApp } from '../app-context';
import { InstallButton } from './Install';
import './Sections.css';

/**
 * Two audiences, two actions: the individual installs; a team lead
 * wants a conversation. Same primary style as the hero so the page has one
 * consistent "do this" colour.
 */
export const FinalCta = forwardRef<HTMLElement>(function FinalCta(_, ref) {
  const { app } = useApp();
  return (
    <section className="section section--dark final" id="contact" ref={ref}>
      <div className="dark-bg" aria-hidden="true" />
      <div className="wrap final__inner">
        <p className="eyebrow">Let's talk</p>
        <h2>{app.finalCta.title}</h2>
        <p>{app.finalCta.body}</p>
        <div className="final__ctas">
          <InstallButton source="final_install" label={app.cta?.finalLabel} />
          {!app.cta && (
            <a className="btn btn--outline-light btn--lg" href={`mailto:${app.contactEmail ?? CONTACT_EMAIL}?subject=${encodeURIComponent(app.finalCta.mailSubject)}`} onClick={() => track('cta_click', { id: 'final_talk' })}>
              Talk to an expert
            </a>
          )}
        </div>
      </div>
    </section>
  );
});
