import type { AppConfig } from './types';

/*
 * Refractory monitoring with computer vision. A web product sold by demo, like SafeEye and EMS.
 *
 * The content follows the structure and topics of the reference article
 * (ripik.ai › real-time-refractory-monitoring-with-computer-vision), rewritten in our own words:
 *   - What a refractory lining is, its purpose, and why monitoring matters        → problem + FAQ
 *   - How computer vision changes monitoring (real-time, early detection, thermal
 *     imaging, non-intrusive, hazardous areas, predictive maintenance, safety)      → how + checks
 *   - Applications: ladle, kiln, blast furnace, electric arc furnace                → checks
 *   - Ten benefits                                                                   → roles (three tabs)
 *   - Future of refractory monitoring + conclusion                                  → FAQ + final CTA
 *
 * Industry figures (both are industry-wide, not our results):
 *   - A severe refractory breakout can cost $2M–$10M.
 *   - Heat loss through furnace walls can reach 10–12% of total heat input (Bureau of Energy Efficiency, India).
 * Left out: the reference's case study (25–50% longer refractory life). It's another company's client result.
 *
 * Still to confirm: the product name (NAME below), the hero / tab figures (illustrative, labelled
 * "Example dashboard"), the setup steps, and the icon (placeholder flame in public/apps/refractory/).
 */
const NAME = 'RMS';

export const refractory: AppConfig = {
  slug: 'refractory',
  name: NAME,
  wordmark: 'RMS',
  tagline: 'Refractory Monitoring System',
  cta: {
    label: 'Book a demo',
    short: 'Book a demo',
    finalLabel: 'Schedule a live demo',
    sub: 'Vision AI · demo on request',
    mailSubject: `${NAME} refractory monitoring demo request`,
  },
  icon: '/apps/refractory/icon.png',
  favicon: '/apps/refractory/favicon.png',
  ogImage: '/apps/refractory/icon.png',
  themeColor: '#E8621A',
  meta: {
    title: 'Real-Time Refractory Monitoring with Computer Vision | TFrenzy',
    description:
      'Monitor refractory linings in ladles, kilns, blast furnaces and electric arc furnaces in real time. Thermal and optical cameras with AI detect hotspots, cracks, spalling and wear early, without stopping production.',
    ogTitle: 'Real-Time Refractory Monitoring with Computer Vision',
    ogDescription: 'IR cameras and AI watch your refractory linings around the clock, flag hotspots and wear early, and help you plan relining before a breakout.',
  },
  nav: [
    { href: '#how', label: 'How it works' },
    { href: '#checks', label: 'Applications' },
    { href: '#who', label: 'Benefits' },
    { href: '#faq', label: 'FAQ' },
  ],
  hero: {
    eyebrow: 'Refractory monitoring · Computer vision',
    title: ['Real-time', 'refractory monitoring', 'with computer vision.'],
    sub: 'Refractory linings protect your ladles, kilns and furnaces, and they wear out of sight. Thermal and optical cameras with AI **watch every lining around the clock**, **flag hotspots, cracks and spalling early**, and help you **plan maintenance before a breakout**.',
    trust: ['Non-intrusive, no shutdown to inspect', '24/7 thermal monitoring', 'Instant hotspot alerts'],
  },
  heroPanel: {
    label: 'Example dashboard',
    kpis: [
      { label: 'Max shell temp', value: '342', unit: '°C', note: 'Ladle 07 · slag line' },
      { label: 'Active hotspots', value: '3', note: '1 recurring' },
      { label: 'Kiln shell avg', value: '268', unit: '°C', note: 'Burning zone' },
      { label: 'Vessels monitored', value: '14' },
    ],
    trend: {
      title: 'Ladle 07 max shell temp',
      period: 'Last 10 heats',
      unit: '°C',
      max: 360,
      points: [
        { x: 'H1', y: 281 },
        { x: 'H2', y: 286 },
        { x: 'H3', y: 284 },
        { x: 'H4', y: 293 },
        { x: 'H5', y: 299 },
        { x: 'H6', y: 304 },
        { x: 'H7', y: 312 },
        { x: 'H8', y: 321 },
        { x: 'H9', y: 333 },
        { x: 'H10', y: 342 },
      ],
    },
    alerts: [
      { title: 'Recurring hotspot', meta: 'Ladle 07 · slag line · 2 mins ago', tone: 'bad', action: 'Acknowledge' },
      { title: 'Shell temp rising', meta: 'Kiln 2 · burning zone · 14 mins ago', tone: 'warn', action: 'Acknowledge' },
    ],
    cameras: [
      { name: 'Ladle bay', online: true },
      { name: 'Kiln 2', online: true },
      { name: 'EAF 1', online: true },
    ],
  },
  strip: {
    label: 'Built for',
    items: ['Steel ladles', 'Cement kilns', 'Blast furnaces', 'Electric arc furnaces', 'Reactors & boilers'],
  },
  problem: {
    eyebrow: 'Why refractory monitoring matters',
    title: 'Linings wear out of sight, until they fail',
    lead: 'Refractory linings take heat, thermal shock, slag attack and abrasion every day. Most plants still check them by hand, only at planned shutdowns. By then, damage has often gone too far.',
    pains: [
      {
        icon: 'clock',
        title: 'Inspections come too late',
        body: 'Manual checks happen at shutdowns, so wear, corrosion and thinning build up unseen for the rest of the campaign.',
      },
      {
        icon: 'alert',
        title: 'Breakouts are costly',
        body: 'A severe refractory breakout can cost $2 million to $10 million, and it puts crews near molten metal, fire and structural collapse.',
      },
      {
        icon: 'flame',
        title: 'Heat leaks through the walls',
        body: 'In industrial furnaces, heat lost through the walls can reach 10–12% of total heat input. Worn linings make it worse.',
      },
    ],
  },
  how: {
    title: 'How computer vision transforms refractory monitoring',
    lead: 'Thermal sensors, IR cameras and AI work together to find damage early, predict failures and extend campaign life.',
    steps: [
      {
        icon: 'camera',
        title: 'Watch without stopping',
        body: 'IR and optical cameras scan the outer shell of each vessel continuously. Nothing touches the process, so production never pauses for an inspection.',
      },
      {
        icon: 'flame',
        title: 'Detect damage early',
        body: 'AI reads the heat pattern on every surface. Hotspots and unusual cooling zones point to wear or heat leakage long before a lining fails.',
        tags: ['Hotspots', 'Cracks', 'Spalling', 'Thinning', 'Corrosion'],
        focus: true,
      },
      {
        icon: 'chart',
        title: 'Alert and predict',
        body: 'Operators get an instant alert on a problem. Real-time and historical data show trends, so you can predict when a lining needs service.',
      },
    ],
  },
  checks: {
    eyebrow: 'Applications',
    title: 'Refractory monitoring across high-temperature operations',
    lead: 'The same vision AI adapts to each vessel and its wear pattern. Labels on the cards show what each one watches.',
    items: [
      {
        code: 'LADLE',
        title: 'Ladle refractory monitoring',
        body: 'Assess lining health in real time on every heat. Track hotspots, get an instant alert when one keeps coming back, and keep each thermal image for later analysis.',
        sample: 'Recurring hotspots',
        status: 'bad',
      },
      {
        code: 'KILN',
        title: 'Kiln refractory monitoring',
        body: 'Get an early warning of a likely breakout in cement and lime kilns. A visual historian stores kiln images for post-mortems, cutting unplanned downtime and wasted energy.',
        sample: 'Breakout warning',
        status: 'warn',
      },
      {
        code: 'BF',
        title: 'Blast furnace lining monitoring',
        body: 'High-resolution and IR cameras capture images and temperature profiles. Machine learning finds cracks, spalling and unusual temperature changes in the lining.',
        sample: 'Thermal profile',
        status: 'info',
      },
      {
        code: 'EAF',
        title: 'Electric arc furnace monitoring',
        body: 'EAFs face intense heat, rapid cycling and aggressive slag. Watch the sidewall, roof, slag line and hearth to catch wear and the risk of a breakthrough.',
        sample: 'Slag line wear',
        status: 'warn',
      },
      {
        code: 'HAZ',
        title: 'Hazardous area monitoring',
        body: 'Cameras and sensors watch zones too dangerous to patrol, flagging heat leaks, structural damage and containment breaches with automatic alerts.',
        sample: 'Auto alerts',
        status: 'ok',
      },
      {
        code: 'HIST',
        title: 'Thermal history & trends',
        body: 'Every thermal image, hotspot and wear reading is stored. Compare campaigns, spot zones that wear faster, and back maintenance decisions with data.',
        sample: 'Full campaign record',
        status: 'info',
      },
    ],
  },
  roles: {
    eyebrow: 'Benefits',
    title: 'What computer vision brings to refractory monitoring',
    list: [
      {
        id: 'life',
        tab: 'Longer campaign life',
        title: 'Catch wear early, and make linings last',
        points: [
          'Early detection of wear, corrosion, hotspots, cracks and spalling',
          'See which zones wear fastest, so you repair them in time and extend campaign life',
          'Spot the temperature patterns caused by corrosive slag, oxidation and thermal cycling',
          'In EAFs, track the sidewall, roof, slag line and hearth to protect melt rate and campaign life',
        ],
        visual: {
          kind: 'log',
          rows: [
            { tag: 'Slag line', name: 'Ladle 07', result: 'Fast wear', ok: false },
            { tag: 'Bottom', name: 'Ladle 07', result: 'Normal', ok: true },
            { tag: 'Barrel', name: 'Ladle 03', result: 'Normal', ok: true },
            { tag: 'Sidewall', name: 'EAF 1', result: 'Watch', ok: false },
          ],
        },
      },
      {
        id: 'safety',
        tab: 'Safety & reliability',
        title: 'Safer operations, sturdier equipment',
        points: [
          'Find abnormal conditions early, before they lead to a breakout or an incident',
          'Automatic alerts warn operators while there is still time to act',
          'Protect the furnace wall, hearth, lining and steel shell, and keep equipment reliable',
          'Keep people out of hazardous zones: the cameras do the watching',
        ],
        visual: { kind: 'card', badge: 'Critical', tone: 'bad', title: 'Recurring hotspot · 342 °C', sub: 'Ladle 07 · slag line · 2 mins ago' },
      },
      {
        id: 'cost',
        tab: 'Energy, cost & planning',
        title: 'Lower costs and better-planned maintenance',
        points: [
          'Move from fixed-interval relining to condition-based maintenance',
          'Fewer unplanned outages and lower maintenance costs. Preventing one breakout can save millions',
          'Less heat lost through the shell, for steadier process and better energy efficiency',
          'A record of every thermal image, hotspot and wear trend for engineering review',
        ],
        visual: {
          kind: 'log',
          rows: [
            { tag: 'Kiln 2', name: 'Burning zone', result: 'Plan in 3 wks', ok: false },
            { tag: 'Ladle 03', name: 'Full lining', result: 'Healthy', ok: true },
            { tag: 'BF 1', name: 'Hearth', result: 'Healthy', ok: true },
          ],
        },
      },
    ],
  },
  outcomes: {
    eyebrow: 'Why it pays',
    title: 'The cost of not watching your linings',
    stats: [
      { label: 'Breakout cost', value: '$2–10M', note: 'Cost of one severe refractory breakout (industry estimate)' },
      { label: 'Heat loss', value: '10–12%', note: 'Of furnace heat input that can escape through the walls' },
      { label: 'Monitoring', value: '24/7', note: 'Continuous thermal watch on every vessel' },
      { label: 'Downtime to inspect', value: 'Zero', note: 'Non-intrusive: no shutdown needed to check a lining' },
    ],
  },
  start: {
    title: 'From reactive to proactive in three steps',
    steps: [
      { title: 'Book a demo', body: 'We’ll walk you through the system and talk through your ladles, kilns and furnaces.' },
      { title: 'Connect your vessels', body: 'Thermal and optical cameras are set up to cover each vessel, and the AI learns its normal heat pattern.' },
      { title: 'Get alerts and trends', body: 'Your team sees live shell temperatures, hotspot alerts and wear trends, and plans maintenance with them.' },
    ],
  },
  faq: [
    {
      q: 'What is a refractory lining?',
      a: 'A heat-resistant layer that lines high-temperature equipment such as blast furnaces, electric arc furnaces, cement kilns, ladles, reactors and boilers. It withstands extreme heat, thermal shock, chemical attack, abrasion and mechanical stress, and often works alongside water-cooled panels.',
    },
    {
      q: 'What does a refractory lining do?',
      a: 'It acts as a thermal barrier. It cuts heat loss, shields the steel shell from extreme temperatures, keeps the process temperature stable and extends the life of the equipment.',
    },
    {
      q: 'Why does refractory monitoring matter?',
      a: 'Linings degrade over time through wear, corrosion and oxidation. When inspections are manual and reactive, that damage leads to heat loss, unplanned downtime, safety hazards and expensive repairs. Continuous monitoring detects problems early, so you can time maintenance properly.',
    },
    {
      q: 'How does computer vision monitor a refractory lining?',
      a: 'IR cameras and thermal sensors measure the temperature across the outside of each vessel. AI analyses that heat pattern in real time. Hotspots, unusual cooling zones and changes over time reveal cracks, spalling, thinning and corrosion inside the lining.',
    },
    {
      q: 'Does monitoring interrupt production?',
      a: 'No. The cameras work from outside the vessel, without contact, while it runs. Unlike manual inspections, you don’t have to wait for a planned shutdown to see the lining’s condition.',
    },
    {
      q: 'Which equipment can it monitor?',
      a: 'Steel ladles, cement and lime kilns, blast furnaces and electric arc furnaces, plus reactors, boilers and other high-temperature vessels with a refractory lining.',
    },
    {
      q: 'How does it help with maintenance planning?',
      a: 'Historical and real-time data show how fast each zone is wearing. That lets you predict when a lining will need service and move from fixed-interval relining to condition-based maintenance.',
    },
    {
      q: 'Where is refractory monitoring heading?',
      a: 'As plants go digital and AI and machine learning improve, diagnostics keep getting more precise: from spotting a hotspot today to predicting remaining lining life and planning a whole campaign.',
    },
  ],
  finalCta: {
    title: 'Move refractory maintenance from reactive to proactive',
    body: 'Book a demo to see how computer vision keeps watch over your linings, so you can run more safely, spend less on repairs and use less energy.',
    mailSubject: `${NAME} refractory monitoring demo request`,
  },
};
