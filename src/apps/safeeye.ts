import type { AppConfig } from './types';

/*
 * Copy and figures come from the existing SafeEye landing page ("Product Landing Page.pdf"):
 *   - Hero: AI-powered industrial safety monitoring; real-time AI detection, enterprise ready, 24/7 monitoring;
 *     example dashboard (87% compliance vs 95% target, +3%; 156 compliant, 23 warnings, 8 violations;
 *     live alerts for a missing helmet and safety glasses; cameras 1–2 online, camera 3 offline)
 *   - Six features: live AI camera monitoring, real-time alerts, PPE compliance detection,
 *     reports & analytics, employee & group management, multi-sector monitoring
 *   - Surveillance: intelligent detection, instant alerts, continuous monitoring
 *   - Insights: violations by sector, violation types (hard hat 35%, safety glasses 28%,
 *     footwear 20%, gloves 12%, high-vis vest 5%), export PDF / Excel, generate report
 *   - Team management: employee records, groups, role-based access control
 *   - 99.9% monitoring reliability, enterprise security, AI-powered detection, 24/7 support
 *
 * It's sold by demo, not through Google Play, so `cta` replaces the install flow.
 * No FAQ, setup steps or screenshots exist in the source, so those sections are left out.
 */
const NAME = 'SafeEye';

export const safeeye: AppConfig = {
  slug: 'safeeye',
  name: NAME,
  wordmark: 'SAFEEYE',
  tagline: 'AI industrial safety monitoring',
  cta: {
    label: 'Start free demo',
    short: 'Book a demo',
    finalLabel: 'Schedule live demo',
    sub: 'Free demo',
    mailSubject: `${NAME} demo request`,
  },
  icon: '/apps/safeeye/icon.png',
  favicon: '/apps/safeeye/favicon.png',
  ogImage: '/apps/safeeye/icon.png',
  themeColor: '#E8621A',
  meta: {
    title: `${NAME} — AI-powered industrial safety monitoring | TFrenzy`,
    description:
      'Monitor workplace safety in real time using intelligent AI surveillance, automated compliance detection, live alerts, and enterprise analytics.',
    ogTitle: `${NAME} — AI-Powered Industrial Safety Monitoring`,
    ogDescription: 'Real-time AI detection of missing PPE and safety violations, live alerts and compliance reporting.',
  },
  nav: [
    { href: '#how', label: 'How it works' },
    { href: '#checks', label: 'Features' },
    { href: '#who', label: 'Alerts & reports' },
    { href: '#contact', label: 'Demo' },
  ],
  hero: {
    eyebrow: 'Industrial safety · AI surveillance',
    title: ['AI-powered', 'industrial safety', 'monitoring.'],
    sub: 'Monitor workplace safety in real time using **intelligent AI surveillance**, **automated compliance detection**, **live alerts** and **enterprise analytics**.',
    trust: ['Real-time AI detection', 'Enterprise ready', '24/7 monitoring'],
  },
  heroPanel: {
    label: 'Example dashboard',
    ring: { title: 'Overall safety compliance', value: 87, target: 'Target: 95%', delta: '+3%' },
    counts: [
      { label: 'Compliant', value: '156', tone: 'ok' },
      { label: 'Warnings', value: '23', tone: 'warn' },
      { label: 'Violations', value: '8', tone: 'bad' },
    ],
    alerts: [
      { title: 'Missing helmet', meta: 'Sector 1 – Station A · 2 mins ago', tone: 'bad', action: 'Acknowledge' },
      { title: 'Safety glasses', meta: 'Sector 2 – Station B · 8 mins ago', tone: 'warn', action: 'Acknowledge' },
    ],
    cameras: [
      { name: 'Camera 1', online: true },
      { name: 'Camera 2', online: true },
      { name: 'Camera 3', online: false },
    ],
  },
  strip: {
    label: 'Built for',
    items: ['Manufacturing floors', 'Assembly lines', 'Welding stations', 'Chemical storage', 'Loading docks'],
  },
  how: {
    title: 'Real-time AI surveillance across every sector',
    lead: 'Monitor every corner of your facility with intelligent AI-powered cameras that detect safety violations in real time.',
    steps: [
      { icon: 'camera', title: 'Intelligent detection', body: 'Advanced AI algorithms identify missing PPE, unsafe behavior and compliance violations automatically.' },
      {
        icon: 'alert',
        title: 'Instant alerts',
        body: 'Get notified immediately when safety issues are detected, with detailed incident information and location.',
        tags: ['Missing PPE', 'Unsafe behavior', 'Incident details', 'Location'],
        focus: true,
      },
      { icon: 'clock', title: 'Continuous monitoring', body: '24/7 surveillance keeps your workplace compliant and safe around the clock.' },
    ],
  },
  checks: {
    eyebrow: 'Features',
    title: 'Everything needed for industrial safety operations',
    lead: 'Powerful AI tools built for large-scale industrial environments. Figures on the cards are from an example dashboard.',
    items: [
      { code: 'CAM', title: 'Live AI camera monitoring', body: 'Real-time surveillance across all sectors with intelligent AI detection and instant visual feedback.', sample: '24/26 cameras', status: 'ok' },
      { code: 'ALRT', title: 'Real-time alerts & notifications', body: 'Instant notifications for violations, compliance issues and critical safety events.', sample: '3 critical', status: 'bad' },
      { code: 'PPE', title: 'PPE compliance detection', body: 'Automated detection of helmets, gloves, safety glasses, vests and proper footwear.', sample: 'Helmets 92%', status: 'ok' },
      { code: 'RPT', title: 'Reports & analytics', body: 'Comprehensive safety analytics, compliance reports and exportable data insights.', sample: '85.7% average', status: 'info' },
      { code: 'TEAM', title: 'Employee & group management', body: 'Manage teams, assign permissions and track employee safety records across departments.', sample: '342 employees', status: 'info' },
      { code: 'SECT', title: 'Multi-sector monitoring', body: 'Monitor multiple work areas, production lines and facilities from a unified dashboard.', sample: '4 sectors', status: 'info' },
    ],
  },
  roles: {
    eyebrow: 'Alerts, reports & teams',
    title: 'Turn safety data into action',
    list: [
      {
        id: 'alerts',
        tab: 'Live alerts',
        title: 'Real-time alerts & notifications',
        points: [
          'Instant notifications for violations, compliance issues and critical safety events',
          'Each alert shows the sector, station and time',
          'Acknowledge alerts as your team handles them',
        ],
        visual: { kind: 'card', badge: 'Critical', tone: 'bad', title: 'Missing helmet', sub: 'Sector 1 – Station A · 2 mins ago' },
      },
      {
        id: 'insights',
        tab: 'Insights & reporting',
        title: 'Actionable insights & compliance reporting',
        points: [
          'Monthly violation counts by sector',
          'A breakdown of violation types',
          'Export PDF or Excel, or generate a report for regulatory compliance and internal review',
        ],
        visual: {
          kind: 'log',
          rows: [
            { tag: '35%', name: 'Missing hard hat', result: 'Violation', ok: false },
            { tag: '28%', name: 'No safety glasses', result: 'Violation', ok: false },
            { tag: '20%', name: 'Improper footwear', result: 'Violation', ok: false },
            { tag: '12%', name: 'Missing gloves', result: 'Violation', ok: false },
            { tag: '5%', name: 'No high-vis vest', result: 'Violation', ok: false },
          ],
        },
      },
      {
        id: 'teams',
        tab: 'Team management',
        title: 'Enterprise team management',
        points: [
          'Employee records with department and status',
          'Groups such as a Manufacturing Floor Team, with supervisors and members',
          'Role-based permissions and page-level access for different user groups',
        ],
        visual: {
          kind: 'log',
          rows: [
            { tag: 'Manufacturing', name: 'John Smith', result: 'Active', ok: true },
            { tag: 'Manufacturing', name: 'Sarah Johnson', result: 'Active', ok: true },
            { tag: 'Welding', name: 'David Chen', result: 'Suspended', ok: false },
            { tag: 'Chemical', name: 'Robert Johnson', result: 'Suspended', ok: false },
          ],
        },
      },
    ],
  },
  outcomes: {
    eyebrow: 'Enterprise ready',
    title: 'Reliable, secure, always on',
    stats: [
      { label: 'Monitoring', value: '99.9%', note: 'Monitoring reliability' },
      { label: 'Security', value: 'Enterprise', note: 'Enterprise security' },
      { label: 'Detection', value: 'AI', note: 'AI-powered detection' },
      { label: 'Support', value: '24/7', note: '24/7 support' },
    ],
  },
  finalCta: {
    title: 'Transform workplace safety with AI intelligence',
    body: 'Reduce compliance violations, monitor operations in real time, and improve industrial safety performance across every facility.',
    mailSubject: `${NAME} demo request`,
  },
};
