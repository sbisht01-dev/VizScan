import type { AppConfig, IconName, RoleVisual, Status, DemoItem } from './types';

/*
 * All page copy and demo data in one place.
 * Product facts come from the VizScan Google Play listing and its screenshots:
 *   - Point the camera at a business card; it extracts name, company, job title,
 *     multiple phone numbers and email with zero manual typing
 *   - Voice memos and custom notes on any contact
 *   - Manual entry for people without a card
 *   - Categories: Clients, Vendors, Leads (and Other); filter and search
 *   - Dashboard: total cards, clients, leads
 *   - Cloud sync with Google Contacts; one-tap export of the whole directory
 *   - One-tap call / email from the list
 *   - Data safety: no data shared with third parties, encrypted in transit, deletion on request
 *   - Free, Android, by TFrenzy Private Limited
 */

const TAGLINE = 'Smart Business Card Scanner';

const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#app', label: 'The app' },
  { href: '#checks', label: 'What it captures' },
  { href: '#faq', label: 'FAQ' },
];

const TRUST = ['Free on Google Play', 'Zero manual typing', 'Syncs with Google Contacts'];

const INDUSTRIES = ['Expos & trade shows', 'Conferences', 'Client meetings', 'Sales & business development', 'Founders & consultants', 'Procurement & vendor teams'];

const PAINS: { icon: IconName; title: string; body: string }[] = [
  { icon: 'alert', title: 'Cards pile up and get lost', body: 'After an expo the cards sit in a jacket pocket or a drawer, and the leads go cold before anyone follows up.' },
  { icon: 'clock', title: 'Typing them in takes forever', body: 'Copying names, numbers and emails off cards one by one is slow, and a single wrong digit loses the contact.' },
  { icon: 'file', title: 'You forget where you met', body: "A month later the card says who they are, but not what you talked about or why they mattered." },
];

const STEPS: { icon: IconName; title: string; body: string; tags?: string[]; focus?: boolean }[] = [
  { icon: 'camera', title: 'Scan the card', body: 'Point your phone’s camera at any business card and tap scan. No card? Add the contact manually.' },
  {
    icon: 'shield',
    title: 'Details fill themselves',
    body: 'VizScan reads the card and fills in every field for you — with zero manual data entry.',
    tags: ['Name', 'Company', 'Job title', 'Phones', 'Email'],
    focus: true,
  },
  { icon: 'tag', title: 'Tag, note and sync', body: 'File it under Clients, Vendors or Leads, add a voice memo, and sync it to Google Contacts.' },
];

/** Real app screens from the Play Store listing. */
const SCREENS = [
  { src: '/apps/vizscan/scan.png', alt: 'VizScan Add Contact screen with Scan and Manual tabs and a Start Scanning button', caption: 'Scan cards in seconds', w: 500, h: 1024 },
  { src: '/apps/vizscan/dashboard.png', alt: 'VizScan home dashboard showing total cards, clients and leads with quick actions', caption: 'Your networking command center', w: 500, h: 1024 },
  { src: '/apps/vizscan/contacts.png', alt: 'VizScan saved contacts filtered by Client, Vendor, Lead and Other, with an Export button', caption: 'Sort by Clients, Vendors or Leads', w: 500, h: 1024 },
  { src: '/apps/vizscan/settings.png', alt: 'VizScan settings with Cloud Sync to Google Contacts and Export All Contacts', caption: 'Never lose a connection', w: 500, h: 1024 },
];

const DOCUMENTS: { code: string; title: string; body: string; sample: string; status: Status | 'info' }[] = [
  { code: 'NAME', title: 'Name', body: 'The person’s full name, read straight off the card — no retyping, no misspelt surnames.', sample: 'Auto-filled', status: 'ok' as const },
  { code: 'ORG', title: 'Company', body: 'The company on the card, so you can find everyone you met from the same organization.', sample: 'Auto-filled', status: 'ok' as const },
  { code: 'TITLE', title: 'Job title', body: 'Their designation, so you know at a glance whether you met the decision-maker.', sample: 'Auto-filled', status: 'ok' as const },
  { code: 'TEL', title: 'Multiple phone numbers', body: 'Mobile, office and every other number printed on the card, each one a single tap to call.', sample: '2 numbers found', status: 'ok' as const },
  { code: 'MAIL', title: 'Email', body: 'Email addresses extracted accurately and ready for one-tap email from your contact list.', sample: 'Auto-filled', status: 'ok' as const },
  { code: 'MEMO', title: 'Voice memo & notes', body: 'Record a quick voice note or type details, so you remember where you met and what you discussed.', sample: 'Voice note 0:18', status: 'info' },
];

const ROLES: { id: string; tab: string; title: string; points: string[]; visual: RoleVisual }[] = [
  {
    id: 'events',
    tab: 'At expos & events',
    title: 'Leave the trade show with a contact list, not a pile of cards',
    points: ['Scan each card the moment you get it — details fill in by themselves', 'Add a voice memo before the next conversation starts', 'Tag every new contact as a Lead on the spot'],
    visual: { kind: 'card', badge: 'Lead', tone: 'ok', title: 'Voice memo attached', sub: '“Met at Hall 3 — wants a demo in March”' },
  },
  {
    id: 'sales',
    tab: 'Sales & BD',
    title: 'Know exactly who is a client, a vendor or a lead',
    points: ['Filter contacts into Clients, Vendors, Leads or Other', 'A dashboard with your total cards, clients and leads', 'Call or email any contact in a single tap'],
    visual: {
      kind: 'roles',
      rows: [
        { role: 'Total cards', access: '128' },
        { role: 'Clients', access: '34' },
        { role: 'Leads', access: '61' },
      ],
    },
  },
  {
    id: 'founders',
    tab: 'Founders & consultants',
    title: 'Your whole network, backed up and with you everywhere',
    points: ['Sync contacts with Google Contacts across all your devices', 'Export your full directory anytime to share or back up', 'Search finds anyone in milliseconds'],
    visual: {
      kind: 'log',
      rows: [
        { tag: 'Client', name: 'Sarah Johnson', result: 'Synced', ok: true },
        { tag: 'Vendor', name: 'David Park', result: 'Synced', ok: true },
        { tag: 'Lead', name: 'Priya Nair', result: 'Synced', ok: true },
      ],
    },
  },
];

const STATS = [
  { label: 'Time to save a card', value: 'Seconds', note: 'From camera to saved contact' },
  { label: 'Fields auto-filled', value: '5', note: 'Name, company, title, phones, email' },
  { label: 'Manual typing', value: 'Zero', note: 'The card fills the form for you' },
  { label: 'Price to download', value: '₹0', note: 'Free on Google Play' },
];

const START_STEPS = [
  { title: 'Install VizScan', body: 'Free from Google Play on your Android phone.' },
  { title: 'Scan your first card', body: 'Name, company, title, phones and email appear in seconds.' },
  { title: 'Tag it and sync', body: 'File it as a Client, Vendor or Lead and sync to Google Contacts.' },
];

const FAQ = [
  { q: 'Is VizScan free?', a: 'Yes — VizScan is free to download on Google Play.' },
  { q: 'Which phones does it work on?', a: 'VizScan is available for Android phones on Google Play. There’s no iPhone version yet — if you need one, talk to us.' },
  { q: 'What does it pick up from a card?', a: 'Names, company details, job titles, multiple contact numbers and email addresses — read straight from the card image, with zero manual data entry.' },
  { q: 'What if someone doesn’t have a business card?', a: 'Use manual entry. There are dedicated fields for the person’s details, multiple phone lines and email addresses.' },
  { q: 'Can I get my contacts out of the app?', a: 'Yes. Sync contacts directly with Google Contacts to see them on all your devices, or export your full directory anytime to share or back it up.' },
  { q: 'How is my data handled?', a: 'According to the Google Play data safety section, VizScan shares no data with third parties, data is encrypted in transit, and you can request that your data be deleted.' },
];

const CARDS: DemoItem[] = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director',
    company: 'Digital Dynamics',
    lines: ['+1 (555) 987-6543', 'sarah.j@digitaldynamics.com'],
    checks: [
      { name: 'Name', status: 'ok', meta: 'Sarah Johnson' },
      { name: 'Company', status: 'ok', meta: 'Digital Dynamics' },
      { name: 'Job title', status: 'ok', meta: 'Marketing Director' },
      { name: 'Phones', status: 'ok', meta: '2 numbers' },
      { name: 'Email', status: 'ok', meta: 'sarah.j@…' },
    ],
    decision: { tone: 'ok', title: 'Saved as Client', sub: 'Voice memo attached' },
  },
  {
    name: 'David Park',
    title: 'Product Manager',
    company: 'CloudWorks Inc',
    lines: ['+1 (555) 214-0987', 'david@cloudworks.io'],
    checks: [
      { name: 'Name', status: 'ok', meta: 'David Park' },
      { name: 'Company', status: 'ok', meta: 'CloudWorks Inc' },
      { name: 'Job title', status: 'ok', meta: 'Product Manager' },
      { name: 'Phones', status: 'ok', meta: '1 number' },
      { name: 'Email', status: 'ok', meta: 'david@…' },
    ],
    decision: { tone: 'ok', title: 'Saved as Vendor', sub: 'Synced to Google Contacts' },
  },
  {
    name: 'Priya Nair',
    title: 'Head of Procurement',
    company: 'Coastline Exports',
    lines: ['+91 98450 12345', 'priya.nair@coastline.in'],
    checks: [
      { name: 'Name', status: 'ok', meta: 'Priya Nair' },
      { name: 'Company', status: 'ok', meta: 'Coastline Exports' },
      { name: 'Job title', status: 'ok', meta: 'Head of Procurement' },
      { name: 'Phones', status: 'ok', meta: '3 numbers' },
      { name: 'Email', status: 'ok', meta: 'priya.nair@…' },
    ],
    decision: { tone: 'ok', title: 'Saved as Lead', sub: 'Met at the trade show — note added' },
  },
  {
    name: 'Arjun Mehta',
    title: 'Founder',
    company: 'Mehta Design Studio',
    lines: ['+91 99000 54321'],
    checks: [
      { name: 'Name', status: 'ok', meta: 'Arjun Mehta' },
      { name: 'Company', status: 'ok', meta: 'Mehta Design Studio' },
      { name: 'Job title', status: 'ok', meta: 'Founder' },
      { name: 'Phones', status: 'ok', meta: '1 number' },
      { name: 'Email', status: 'warn', meta: 'Not on card — add it' },
    ],
    decision: { tone: 'ok', title: 'Saved as Lead', sub: 'Add the email any time' },
  },
];

export const vizscan: AppConfig = {
  slug: 'vizscan',
  name: 'VizScan',
  wordmark: 'VIZSCAN',
  tagline: TAGLINE,
  free: true,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vizscan',
  packageId: 'com.vizscan',
  icon: '/apps/vizscan/icon.png',
  favicon: '/apps/vizscan/favicon.png',
  ogImage: '/apps/vizscan/scan.png',
  themeColor: '#15161A',
  meta: {
    title: 'VizScan — Smart business card scanner & contact organizer | TFrenzy',
    description:
      'VizScan scans business cards and fills in name, company, job title, phone numbers and email in seconds. Tag contacts as Clients, Vendors or Leads, add voice memos and sync to Google Contacts. Free on Google Play.',
    ogTitle: 'VizScan — Smart Business Card Scanner',
    ogDescription: 'Scan business cards instantly, organize contacts, and sync. Free on Google Play.',
  },
  nav: NAV_LINKS,
  hero: {
    eyebrow: 'Card scanner · Free on Android',
    title: ['Scan any card.', 'Save the contact.', 'In seconds.'],
    sub: 'Point your camera at a business card and VizScan fills in the name, company, job title, phone numbers and email — then files it under **Clients**, **Vendors** or **Leads** and syncs it to Google Contacts.',
    trust: TRUST,
  },
  strip: { label: 'Built for networking at', items: INDUSTRIES },
  problem: { eyebrow: 'The networking problem', title: "Paper cards don't follow up on their own", lead: "You meet the right people. Then the card goes in a pocket, and that's where the deal gets lost.", pains: PAINS },
  how: { title: 'Scan. Extract. Organize.', lead: 'Three steps, and the card in your hand is a contact in your phone.', steps: STEPS },
  screens: { title: 'What you’ll see', lead: 'Straight from the VizScan app on Google Play.', list: SCREENS },
  checks: { eyebrow: 'What it captures', title: 'Everything on the card, without typing a word', lead: 'These are the details VizScan fills in from every card you scan — plus the context only you know.', items: DOCUMENTS },
  roles: { eyebrow: 'Who it’s for', title: 'One app for every handshake', list: ROLES },
  outcomes: { eyebrow: 'Why people switch', title: 'Less typing, more follow-ups', stats: STATS },
  start: { title: 'Your first card saved in under a minute', steps: START_STEPS },
  faq: FAQ,
  finalCta: {
    title: 'Turn your next stack of cards into contacts',
    body: 'Free on Google Play. Install it before your next expo or meeting — or talk to us about rolling it out to your sales team.',
    mailSubject: 'VizScan for our team',
  },
  demo: {
    label: 'Try a sample business card',
    toast: 'Synced to Google Contacts',
    items: CARDS,
  },
};
