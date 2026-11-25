import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { initialApp, findApp, rememberApp, type AppConfig } from './apps';

interface Api {
  app: AppConfig;
  setApp: (slug: string) => void;
}
const Ctx = createContext<Api | null>(null);

function setMeta(sel: string, attr: string, value: string) {
  document.head.querySelector(sel)?.setAttribute(attr, value);
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [app, setCurrent] = useState(initialApp);

  const setApp = useCallback((slug: string) => {
    const next = findApp(slug);
    if (!next) return;
    rememberApp(slug);
    setCurrent(next);
  }, []);

  // Keep the document head (title, share card, icons) in step with the chosen app.
  useEffect(() => {
    document.title = app.meta.title;
    setMeta('meta[name="description"]', 'content', app.meta.description);
    setMeta('meta[name="theme-color"]', 'content', app.themeColor);
    setMeta('meta[property="og:title"]', 'content', app.meta.ogTitle);
    setMeta('meta[property="og:description"]', 'content', app.meta.ogDescription);
    setMeta('meta[property="og:image"]', 'content', app.ogImage);
    setMeta('meta[name="google-play-app"]', 'content', app.packageId ? `app-id=${app.packageId}` : '');
    setMeta('link[rel="icon"]', 'href', app.favicon);
    setMeta('link[rel="apple-touch-icon"]', 'href', app.icon);
  }, [app]);

  const api = useMemo(() => ({ app, setApp }), [app, setApp]);
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp must be used inside <AppProvider>');
  return v;
}

/** Render **bold** segments of a content string. */
export function rich(text: string): ReactNode[] {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}
