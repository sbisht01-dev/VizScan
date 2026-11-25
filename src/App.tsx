import { useEffect, useRef } from 'react';
import { detectPlatform, track } from './config';
import { AppProvider, useApp } from './app-context';
import { AppSwitcher } from './components/AppSwitcher';
import { useInView } from './hooks';
import { InstallProvider } from './components/Install';
import { Footer, Nav, StickyCta } from './components/Layout';
import { Hero } from './components/Hero';
import { IndustryStrip } from './components/IndustryStrip';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Checks } from './components/Checks';
import { Screens } from './components/Screens';
import { Roles } from './components/Roles';
import { Outcomes } from './components/Outcomes';
import { GetStarted } from './components/GetStarted';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { AppCatalog } from './components/AppCatalog';

/**
 * Section order follows how people decide:
 * what is it → is it for me → do they get my problem → is it simple →
 * will it catch what matters → what's in it for my role → is it worth it →
 * how hard is setup → last objections → act → see our other apps.
 */
export default function App() {
  return (
    <AppProvider>
      <Page />
      <AppSwitcher />
    </AppProvider>
  );
}

function Page() {
  const { app } = useApp();
  const heroCta = useRef<HTMLDivElement>(null);
  const finalCta = useRef<HTMLElement>(null);
  const hero = useInView(heroCta);
  const final = useInView(finalCta, { threshold: 0.15 });
  // Sticky bar only between the hero CTA and the final CTA — never two install buttons at once.
  // Also stays hidden once past the final CTA (the app catalogue sits below it).
  const showSticky = hero.above && !final.inView && !final.above;

  // A QR scanned from the install dialog lands with ?install — forward Android phones straight to Google Play.
  useEffect(() => {
    if (app.playStoreUrl && new URLSearchParams(window.location.search).has('install') && detectPlatform() === 'android') {
      track('install_redirect', { platform: 'android' });
      window.location.replace(app.playStoreUrl);
    }
  }, []);

  return (
    <InstallProvider>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav hideCta={showSticky} />
      <main id="main">
        <Hero ref={heroCta} />
        <IndustryStrip />
        <Problem />
        <HowItWorks />
        <Screens />
        <Checks />
        <Roles />
        <Outcomes />
        <GetStarted />
        <Faq />
        <FinalCta ref={finalCta} />
        <AppCatalog />
      </main>
      <Footer />
      <StickyCta visible={showSticky} />
    </InstallProvider>
  );
}
