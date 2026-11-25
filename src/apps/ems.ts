import type { AppConfig } from './types';

/*
 * Every fact here comes from the EMS (Energy Monitoring System) admin-panel screens:
 *   - Dashboard: Active Power 12.4 kW (+2.5% from last hour), Energy Consumption 1,247.8 kWh (−1.2%),
 *     Power Factor 0.98, Current 45.7 A (+3.1%); Energy Usage, Power Usage, Power Factor and
 *     Current Load charts with a period picker (Monthly)
 *   - Meter Log: All Meters Overview (45 meters: 38 online, 4 offline, 3 maintenance; 8 main, 27 sub,
 *     10 backup); Energy Meters Real-Time Report with auto-refresh (30 seconds), Pause, Refresh Now,
 *     last updated; search by meter name, ID or location; status and type filters; sortable Power,
 *     Energy, Power Factor, Current and Voltage columns; Download. Each meter has its own log with
 *     timestamps and a from / to date filter.
 *   - Settings › Assets: Machines (name/ID, type, subsection, zone, connected meter), Energy Meters
 *     (name, type, location, building, floor, manufacturer, model, mapped sensor, machine ID),
 *     IoT Sensors (name, location, refresh rate in seconds, data format JSON, API URL, threshold alerts
 *     on/off; cards show Energy / Power / PF / Current, building, make, refresh rate, last seen)
 *   - Set Threshold Values: active power (kW), energy consumption (kWh), power factor, current (A).
 *     "System will alert you when values exceed the threshold."
 *   - Users Management: users (username, email, full name, department, role, phone; status, last login)
 *     and roles (Administrator, Manager, Operator) built from 12 permissions in four groups:
 *     Meter Management, Data & Reports, System Management, Alerts & Notifications
 *   - Profile: username can't be changed; role is managed by administrators
 *
 * It's a web admin panel with no Play listing, so `cta` (demo-request mode) replaces the install flow.
 * Left out because nothing in the screens supports them: pain points, outcome stats, price.
 * Hero and role-card figures are the screens' sample data, labelled "Example dashboard".
 */
const NAME = 'EMS';

export const ems: AppConfig = {
  slug: 'ems',
  name: NAME,
  wordmark: 'EMS',
  tagline: 'Energy Monitoring System',
  cta: {
    label: 'Book a demo',
    short: 'Book a demo',
    finalLabel: 'Schedule a live demo',
    sub: 'Web app · demo on request',
    mailSubject: `${NAME} demo request`,
  },
  icon: '/apps/ems/icon.png',
  favicon: '/apps/ems/favicon.png',
  ogImage: '/apps/ems/og.jpg',
  themeColor: '#FD8436',
  meta: {
    title: `${NAME} — Energy Monitoring System for meters, machines and IoT sensors | TFrenzy`,
    description: `${NAME} brings live power, energy, power factor, current and voltage from every meter into one web dashboard, with a real-time meter log, threshold alerts and role-based access for your team.`,
    ogTitle: `${NAME} — Energy Monitoring System`,
    ogDescription: 'Live readings from every meter, a real-time meter log, threshold alerts and role-based access in one web dashboard.',
  },
  nav: [
    { href: '#how', label: 'How it works' },
    { href: '#app', label: 'The app' },
    { href: '#checks', label: 'Features' },
    { href: '#faq', label: 'FAQ' },
  ],
  hero: {
    eyebrow: 'Energy Monitoring System · Web app',
    title: ['Every meter.', 'Every machine.', 'One dashboard.'],
    sub: `${NAME} brings **live power, energy, power factor and current** from every meter in your facility into one place, with a **real-time meter log**, **threshold alerts** and **role-based access** for your team.`,
    trust: ['Real-time meter log', 'Threshold alerts', 'Role-based access'],
  },
  heroPanel: {
    label: 'Example dashboard',
    kpis: [
      { label: 'Active power', value: '12.4', unit: 'kW', note: '+2.5% vs last hour' },
      { label: 'Energy consumption', value: '1,247.8', unit: 'kWh', note: '−1.2% vs last hour' },
      { label: 'Power factor', value: '0.98' },
      { label: 'Current', value: '45.7', unit: 'A', note: '+3.1% vs last hour' },
    ],
    trend: {
      title: 'Energy usage',
      period: 'Monthly',
      unit: 'kWh',
      max: 50,
      points: [
        { x: 'Dec', y: 11 },
        { x: 'Jan', y: 21 },
        { x: 'Feb', y: 35 },
        { x: 'Mar', y: 41 },
        { x: 'Apr', y: 24 },
        { x: 'May', y: 19 },
        { x: 'Jun', y: 21 },
        { x: 'Jul', y: 24 },
        { x: 'Aug', y: 25.5 },
        { x: 'Sep', y: 27 },
      ],
    },
    fleet: {
      title: 'All meters · 45',
      counts: [
        { label: 'Online', value: '38', tone: 'ok' },
        { label: 'Offline', value: '4', tone: 'bad' },
        { label: 'Maintenance', value: '3', tone: 'warn' },
      ],
    },
  },
  strip: {
    label: 'Monitor meters in',
    items: ['Factory floors', 'Production lines', 'Warehouses', 'Electrical rooms', 'Generator rooms'],
  },
  how: {
    title: 'Map it. Monitor it. Get alerted.',
    lead: 'Your machines, meters and sensors, connected in one web app.',
    steps: [
      {
        icon: 'tag',
        title: 'Map your assets',
        body: 'Add machines, energy meters and IoT sensors. Link each meter to the sensor that feeds it and the machine it supplies.',
      },
      {
        icon: 'chart',
        title: 'Watch live readings',
        body: 'Power, energy, power factor, current and voltage update on the dashboard and in the real-time meter log, on the refresh interval you choose.',
        tags: ['kW', 'kWh', 'PF', 'A', 'V'],
        focus: true,
      },
      {
        icon: 'alert',
        title: 'Get alerted',
        body: 'Set thresholds for power, energy, power factor and current. The system alerts you when a reading goes over.',
      },
    ],
  },
  screens: {
    title: 'What you’ll see',
    lead: `Screens from the ${NAME} admin panel. The readings are sample data.`,
    list: [
      {
        src: '/apps/ems/dashboard.jpg',
        alt: `${NAME} dashboard with Active Power 12.4 kW, Energy Consumption 1,247.8 kWh, Power Factor 0.98 and Current 45.7 A, above monthly Energy Usage and Power Usage charts`,
        caption: 'Live dashboard',
        w: 1600,
        h: 1250,
      },
      {
        src: '/apps/ems/meters.jpg',
        alt: 'All Meters Overview with 38 online, 4 offline and 3 in maintenance, above the real-time report of every meter with auto-refresh, search, and status and type filters',
        caption: 'Real-time meter report',
        w: 1600,
        h: 1250,
      },
      {
        src: '/apps/ems/meter-log.jpg',
        alt: 'Log for Main Building Meter, online, in Building A – Main Electrical Room, with timestamped power, energy, power factor, current and voltage readings and a date-range filter',
        caption: 'One meter’s log',
        w: 1600,
        h: 1250,
      },
      {
        src: '/apps/ems/sensors.jpg',
        alt: 'Settings, Assets, IoT Sensors: sensors S-001 and S-002 online, each with its parameters, alert status, building, make, refresh rate and last-seen time',
        caption: 'IoT sensors',
        w: 1600,
        h: 1250,
      },
    ],
  },
  checks: {
    eyebrow: 'Features',
    title: 'Everything you need to watch your facility’s energy',
    lead: `What each part of ${NAME} does, as it appears in the app. Figures on the cards are sample data.`,
    items: [
      {
        code: 'DASH',
        title: 'Live dashboard',
        body: 'Active power, energy consumption, power factor and current at a glance, each with its change since the last hour, plus usage charts by period.',
        sample: 'PF 0.98',
        status: 'ok',
      },
      {
        code: 'LOG',
        title: 'Real-time meter report',
        body: 'Power, energy, power factor, current and voltage for every meter in one table. Auto-refresh on the interval you pick, pause it, or refresh now.',
        sample: '30 s refresh',
        status: 'info',
      },
      {
        code: 'FIND',
        title: 'Search, filter, sort',
        body: 'Find a meter by name, ID or location, filter by status and meter type, and sort any reading. Open a meter for its own log and filter it by date.',
        sample: '45 meters',
        status: 'info',
      },
      {
        code: 'ALRT',
        title: 'Threshold alerts',
        body: 'Set limits for active power, energy consumption, power factor and current. The system alerts you when a value exceeds one.',
        sample: 'Alerts on',
        status: 'ok',
      },
      {
        code: 'IOT',
        title: 'IoT sensor feeds',
        body: 'Connect each sensor by its API URL, with a refresh rate and a data format such as JSON. Sensor cards show status, building, make and when it was last seen.',
        sample: 'S-001 online',
        status: 'ok',
      },
      {
        code: 'ASSET',
        title: 'Machines & meters',
        body: 'Register main, sub and backup meters with location, building, floor, manufacturer and model, and link each one to the machine it supplies.',
        sample: 'Main · Sub · Backup',
        status: 'info',
      },
    ],
  },
  roles: {
    eyebrow: 'Alerts, logs & access',
    title: 'From live readings to the right people',
    list: [
      {
        id: 'alerts',
        tab: 'Thresholds & alerts',
        title: 'Know when a reading crosses the line',
        points: [
          'Set thresholds for active power (kW), energy consumption (kWh), power factor and current (A)',
          'The system alerts you when a value exceeds its threshold',
          'Switch threshold alerts on or off for each IoT sensor',
          'The Receive Alerts permission decides which roles get them',
        ],
        visual: {
          kind: 'log',
          rows: [
            { tag: 'S-001', name: 'Building A', result: 'Alerts on', ok: true },
            { tag: 'S-002', name: 'Building A', result: 'Alerts off', ok: false },
          ],
        },
      },
      {
        id: 'log',
        tab: 'Meter log & reports',
        title: 'Every meter, live and on record',
        points: [
          'A real-time report of every meter: power, energy, power factor, current and voltage',
          'Online, offline and maintenance counts across the facility',
          'Each meter’s own log, with timestamps and a date-range filter',
          'Download the report',
        ],
        visual: {
          kind: 'log',
          rows: [
            { tag: '12.62 kW', name: 'Warehouse Sub Meter 25', result: 'Online', ok: true },
            { tag: '18.07 kW', name: 'Warehouse Sub Meter 14', result: 'Online', ok: true },
            { tag: '5.57 kW', name: 'Warehouse Backup Meter 40', result: 'Online', ok: true },
          ],
        },
      },
      {
        id: 'access',
        tab: 'Users & roles',
        title: 'The right access for every person',
        points: [
          'Add users with username, email, full name, department, role and phone number',
          'Build roles from 12 permissions in four groups: meter management, data & reports, system management, and alerts',
          'Start from the Administrator, Manager and Operator roles and change their permissions any time',
          'See active users, administrators, who can add meters and who has full reports access at a glance',
        ],
        visual: {
          kind: 'roles',
          rows: [
            { role: 'Administrator', access: '1 user' },
            { role: 'Manager', access: '2 users' },
            { role: 'Operator', access: '1 user' },
          ],
        },
      },
    ],
  },
  start: {
    title: 'Up and running in three steps',
    steps: [
      { title: 'Book a demo', body: `We’ll show you ${NAME} and talk through your meters and machines.` },
      { title: 'Add your assets', body: 'Register machines, energy meters and IoT sensors, then map each meter to its sensor and machine.' },
      { title: 'Invite your team', body: 'Add users, give each one a role, and set your alert thresholds.' },
    ],
  },
  faq: [
    {
      q: `What does ${NAME} measure?`,
      a: 'Active power (kW), energy consumption (kWh), power factor, current (A) and voltage (V) for every meter you add. The dashboard charts energy, power, power factor and current load over the period you choose.',
    },
    {
      q: `How does meter data get into ${NAME}?`,
      a: 'Through IoT sensors. Each sensor is added with the API URL of its data feed, a refresh rate in seconds and a data format such as JSON. You then map the sensor to an energy meter, and the meter to the machine it supplies.',
    },
    {
      q: 'What kinds of meters can I add?',
      a: 'Main, sub and backup meters. Each one records its location, building, floor, manufacturer and model, plus an optional description.',
    },
    {
      q: 'How do alerts work?',
      a: 'Set thresholds for active power, energy consumption, power factor and current. When a reading exceeds its threshold, the system alerts you. Alerts can be switched on or off for each sensor, and the Receive Alerts permission decides which roles get them.',
    },
    {
      q: 'Can I control what each person can do?',
      a: 'Yes. Roles are built from 12 permissions in four groups: Meter Management (add, edit, delete and view all meters), Data & Reports (historical reports, download data, real-time data, executive dashboard), System Management (manage users, manage settings, set thresholds) and Alerts & Notifications (receive alerts).',
    },
    {
      q: 'Can I export the data?',
      a: 'Yes. Download the real-time meter report from the meter log. Download Data is a permission, so you choose which roles can export.',
    },
  ],
  finalCta: {
    title: 'See every meter in your facility on one screen',
    body: `Book a demo and we’ll walk you through ${NAME}: the live dashboard, the real-time meter log, threshold alerts and role-based access.`,
    mailSubject: `${NAME} demo request`,
  },
};
