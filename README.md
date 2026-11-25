# App landing page template (React) — VizScan, RestriX, DataVue, SafeEye, EMS

A single-page site that gets people to install VizScan, TFrenzy's business card scanner and contact organizer.
It's the same build as the CertiFit landing page (`../Certifit`) with VizScan's content.
Built with React, Vite and TypeScript. It has no animations by design.

```bash
cd VizScan
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs dist/ — upload to any static host
```

## Template: one layout, many apps

The page layout is shared; each app is one config file.

- `src/apps/vizscan.ts`, `src/apps/restrix.ts`, `src/apps/datavue.ts`, `src/apps/safeeye.ts`, `src/apps/ems.ts`: all copy, FAQ, Play Store link, image paths and the hero demo data for one app.
- `src/apps/types.ts`: the `AppConfig` shape (every field the layout reads).
- `src/apps/index.ts`: the registry. **To add an app:** copy `restrix.ts`, edit it, drop images in `public/apps/<slug>/` (`icon.png`, screenshots), and add it to `APPS`.
- A button at the bottom left (hover, focus or tap) switches the app. The choice is saved in `?app=<slug>` and localStorage, so `/?app=restrix` is a shareable link.
- `src/config.ts`: shared company links, platform detection and the analytics hook.
- `src/components/`: one component per section; they read the active app through `useApp()`.
- `src/styles/base.css`: design tokens (colors, type). Both apps currently share the orange theme.

## Content source

Everything is taken from the Google Play listing (`com.vizscan`): card scanning with auto-extraction
(name, company, job title, multiple phones, email), voice memos and notes, manual entry,
Clients / Vendors / Leads categories, the dashboard, Google Contacts sync, one-tap export,
search with one-tap call/email, and the data-safety statements. Free, Android only, by TFrenzy Private Limited.

**Still to confirm:**
- `CONTACT_EMAIL` in `src/config.ts` (set to `hello@tfrenzy.com`, as on CertiFit; the listing's support email is different).
- The four sample cards in the hero demo and the numbers in the "Sales & BD" tab are illustrative.
- Add a Terms link to the footer when one exists.

**DataVue** (`src/apps/datavue.ts`) is the minimal version: copy comes only from the app screens, so the industry strip,
pain points, roles, stats and sample demo are left out (those config fields are optional and their sections are skipped),
and the hero shows the real Data Monitor screenshot. Price isn't stated anywhere, so it says "On Google Play", not "Free".
Still to confirm for DataVue: `playStoreUrl` / `packageId` (placeholder `com.datavue`), and the icon (a simple placeholder in
`public/apps/datavue/`; drop the real `icon.png` / `favicon.png` over it).

**SafeEye** (`src/apps/safeeye.ts`) is a web product sold by demo, with copy taken from its earlier landing page.
Setting `cta` switches the page to demo-request mode: every primary button opens an email to book a demo, and the
Play badge, QR code and install dialog are hidden. The hero shows `heroPanel`, a dashboard card labelled "Example dashboard".
There's no FAQ, set-up steps or screenshots in the source, so those sections are left out. The icon is a placeholder.

**EMS** (`src/apps/ems.ts`, Energy Monitoring System) is a web admin panel sold by demo, like SafeEye, with copy taken only
from its admin-panel screens. The hero `heroPanel` uses the energy blocks (`kpis`, `trend`, `fleet`), filled with the dashboard's
own sample readings. The screenshots in `public/apps/ems/` are landscape, so the screens section shows them two per row.
Left out: pain points and outcome stats. The icon is a placeholder lightning bolt (`public/apps/ems/icon.svg`); drop the real
`icon.png` / `favicon.png` over it. Still to confirm for EMS: the product name to show publicly, the contact address for demo
requests (it uses the shared `CONTACT_EMAIL`), and that Administrator, Manager and Operator are the roles every customer starts with.

**RMS** (`src/apps/refractory.ts`, Refractory Monitoring System) is a web product sold by demo. Its content follows the structure and
topics of the reference article on real-time refractory monitoring with computer vision, rewritten in our own words: why linings
fail, how computer vision monitors them, applications (ladle, kiln, blast furnace, EAF), benefits, and an FAQ built from the
article's background sections. The industry figures ($2–10M per severe breakout, 10–12% wall heat loss) are industry-wide, not our
results. The reference's case study is left out because it's another company's client result. Still to confirm: the product name, the hero and
tab figures (illustrative, labelled "Example dashboard"), the setup steps, and the icon (placeholder flame in `public/apps/refractory/`).

**Analytics:** every button pushes `{ event, … }` to `window.dataLayer`, ready for Google Tag Manager or GA4.
