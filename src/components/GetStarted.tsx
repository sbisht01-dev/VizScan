import { useApp } from '../app-context';
import { InstallButton, useInstall } from './Install';
import { InstallQr, PlayBadge } from './ui';
import './Sections.css';

/**
 * Answers "how hard is this?" with three concrete steps, then the install.
 * Off-Android (desktop, iPhone) a QR card sits alongside so the hand-off to an
 * Android phone is one scan; on Android it's hidden (you can't scan your own screen).
 */
export function GetStarted() {
  const { platform } = useInstall();
  const app = useApp().app;
  const start = app.start;
  if (!start) return null;
  return (
    <section className="section section--gray" id="start">
      <div className="wrap start">
        <div className="start__copy">
          <p className="eyebrow">Get started</p>
          <h2>{start.title}</h2>
          <ol className="start__list">
            {start.steps.map((s, i) => (
              <li key={s.title}>
                <span>{i + 1}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <InstallButton source="start_install" />
        </div>
        {platform !== 'android' && !app.cta && app.playStoreUrl && (
          <div className="start__qr">
            <p className="start__qr-title">Scan with an Android phone</p>
            <InstallQr />
            <PlayBadge />
          </div>
        )}
      </div>
    </section>
  );
}
