import type { AppConfig } from './types';

/*
 * Product facts come from the RestriX Google Play listing (com.restrix):
 *   - Restricts a phone to only the apps you select; everything else, including Settings, is blocked
 *   - For parents, schools, remote teams, professionals and organisations
 *   - Individual or Organisation user types
 *   - Password-protected controls and scheduling
 *   - App management: search, Blocked Apps / Allowed Apps tabs
 *   - Backup & Restore: import / export app data across devices
 *   - Uses the Accessibility API (not for reading content); no Accessibility data is collected, sold or shared
 *   - Free, Android, Productivity, by TFrenzy Private Limited
 */
export const restrix: AppConfig = {
  slug: 'restrix',
  name: 'RestriX',
  wordmark: 'RESTRIX',
  tagline: 'Focus & screen-time control',
  free: true,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.restrix',
  packageId: 'com.restrix',
  icon: '/apps/restrix/icon.png',
  favicon: '/apps/restrix/icon.png',
  ogImage: '/apps/restrix/app-management.jpg',
  themeColor: '#FF8A12',
  meta: {
    title: 'RestriX — Restrict your phone to only the apps you choose | TFrenzy',
    description:
      'RestriX limits your phone to only the apps you allow. Password-protected controls and scheduling for parents, schools, teams and anyone who wants focused screen habits. Free on Google Play.',
    ogTitle: 'RestriX — Say goodbye to distractions',
    ogDescription: 'Allow only the apps that matter and block the rest. Free on Google Play.',
  },
  nav: [
    { href: '#how', label: 'How it works' },
    { href: '#app', label: 'The app' },
    { href: '#checks', label: 'What it controls' },
    { href: '#faq', label: 'FAQ' },
  ],
  hero: {
    eyebrow: 'Focus & screen-time control · Free on Android',
    title: ['Allow only the apps', 'that matter.', 'Block the rest.'],
    sub: 'RestriX locks a phone to the apps you choose — for **parents**, **schools**, **teams** and anyone who wants mindful screen habits. Password-protected, with scheduling built in.',
    trust: ['Free on Google Play', 'Password-protected controls', 'Import & export your settings'],
  },
  strip: { label: 'Built for focus at', items: ['Homes & families', 'Schools & classrooms', 'Remote teams', 'Organizations & kiosks', 'Professionals', 'Anyone seeking mindful screen habits'] },
  problem: {
    eyebrow: 'The distraction problem',
    title: 'Willpower is not a screen-time plan',
    lead: 'One notification turns into forty minutes. Whether it is a child, a classroom or a work team, the phone wins unless something stops it.',
    pains: [
      { icon: 'alert', title: 'One tap and the focus is gone', body: 'A single social feed or game is all it takes to pull a student, a child or a teammate away from what matters.' },
      { icon: 'clock', title: 'Hours slip into the wrong apps', body: 'Without limits, screen time drifts into apps nobody planned to open, and the day is gone before anyone notices.' },
      { icon: 'shield', title: 'Settings are easy to undo', body: 'If anyone can open Settings, any rule you set can be switched off again in seconds.' },
    ],
  },
  how: {
    title: 'Choose. Lock. Focus.',
    lead: 'Three steps from a distracting phone to a focused one.',
    steps: [
      { icon: 'check', title: 'Pick who it is for', body: 'Choose Individual or Organisation when you set up RestriX, so the app fits how the phone will be used.' },
      {
        icon: 'shield',
        title: 'Choose the allowed apps',
        body: 'Switch on only the apps that should work. Everything else stays blocked, including Settings.',
        tags: ['Allowed apps', 'Blocked apps', 'Search', 'Password'],
        focus: true,
      },
      { icon: 'clock', title: 'Schedule and relax', body: 'Protect the rules with a password, set schedules, and export your setup to reuse on other devices.' },
    ],
  },
  screens: {
    title: 'What you’ll see',
    lead: 'Straight from the RestriX app on Google Play.',
    list: [
      { src: '/apps/restrix/welcome.jpg', alt: 'RestriX welcome screen: Take control of your device', caption: 'Take control of your device', w: 450, h: 800 },
      { src: '/apps/restrix/user-type.jpg', alt: 'RestriX Select User Type screen with Individual and Organisation options', caption: 'Personal use or enterprise', w: 450, h: 800 },
      { src: '/apps/restrix/app-management.jpg', alt: 'RestriX app management with Blocked Apps and Allowed Apps tabs and a search box', caption: 'Custom restrictions, no distractions', w: 540, h: 960 },
      { src: '/apps/restrix/backup.jpg', alt: 'RestriX Backup & Restore with Import app data and Export app data', caption: 'Apply settings across devices', w: 540, h: 960 },
    ],
  },
  checks: {
    eyebrow: 'What it controls',
    title: 'Everything you need to keep a phone on task',
    lead: 'These are the controls RestriX gives you, from the list of allowed apps to the password that protects it.',
    items: [
      { code: 'ALLOW', title: 'Allowed apps', body: 'Pick exactly which apps can be used. Turn each one on or off with a single toggle.', sample: 'You choose', status: 'ok' },
      { code: 'BLOCK', title: 'Blocked apps', body: 'Open an app that is not on your list, Settings included, and RestriX sends the user straight back to its home screen.', sample: 'Auto-blocked', status: 'ok' },
      { code: 'FIND', title: 'Search & tabs', body: 'Search your installed apps and flip between the Blocked Apps and Allowed Apps tabs.', sample: 'Two tabs', status: 'info' },
      { code: 'LOCK', title: 'Password protection', body: 'Secure, password-protected controls so the rules cannot be quietly changed.', sample: 'Protected', status: 'ok' },
      { code: 'TIME', title: 'Scheduling', body: 'Set schedules so restrictions apply when focus matters most.', sample: 'Scheduled', status: 'info' },
      { code: 'SYNC', title: 'Backup & restore', body: 'Import and export your app data to apply the same settings across devices.', sample: 'Import / Export', status: 'info' },
    ],
  },
  roles: {
    eyebrow: 'Who it’s for',
    title: 'One app, whoever holds the phone',
    list: [
      {
        id: 'parents',
        tab: 'Parents & families',
        title: 'Give your child a phone that stays on task',
        points: ['Allow only the apps your child needs', 'Password-protected, so settings cannot be changed', 'Schedule restrictions around homework and bedtime'],
        visual: { kind: 'card', badge: 'Active', tone: 'ok', title: 'Restrictions are on', sub: 'Everything outside your list is blocked' },
      },
      {
        id: 'schools',
        tab: 'Schools & classrooms',
        title: 'Keep digital learning focused',
        points: ['Choose Organisation when you set up', 'Limit devices to the learning apps you approve', 'Apply the same settings to every device with import and export'],
        visual: {
          kind: 'roles',
          rows: [
            { role: 'Allowed apps', access: 'Your list' },
            { role: 'Other apps', access: 'Blocked' },
            { role: 'Settings', access: 'Locked' },
          ],
        },
      },
      {
        id: 'teams',
        tab: 'Teams & professionals',
        title: 'Boost productivity, minimise distraction',
        points: ['Turn a phone into a focused work device', 'Keep Settings and unapproved apps out of reach', 'Export your setup once and import it on every device'],
        visual: {
          kind: 'log',
          rows: [
            { tag: 'Allowed', name: 'Chrome', result: 'Open', ok: true },
            { tag: 'Allowed', name: 'WhatsApp', result: 'Open', ok: true },
            { tag: 'Blocked', name: 'Settings', result: 'Locked', ok: false },
          ],
        },
      },
    ],
  },
  outcomes: {
    eyebrow: 'Why people choose it',
    title: 'Less scrolling, more focus',
    stats: [
      { label: 'Apps that work', value: 'Yours', note: 'Only the ones you allow' },
      { label: 'Settings access', value: 'Locked', note: 'Blocked apps send users home' },
      { label: 'Across devices', value: 'Import', note: 'Export once, apply anywhere' },
      { label: 'Price to download', value: '₹0', note: 'Free on Google Play' },
    ],
  },
  start: {
    title: 'Your first restriction in minutes',
    steps: [
      { title: 'Install RestriX', body: 'Free from Google Play on your Android phone.' },
      { title: 'Choose your apps', body: 'Select Individual or Organisation, then switch on the apps to allow.' },
      { title: 'Turn on Accessibility access', body: 'RestriX needs it to keep the phone limited to your allowed apps.' },
    ],
  },
  faq: [
    { q: 'Is RestriX free?', a: 'Yes — RestriX is free to download on Google Play.' },
    { q: 'Which phones does it work on?', a: 'RestriX is available for Android phones on Google Play. There’s no iPhone version yet — if you need one, talk to us.' },
    { q: 'Who is it for?', a: 'Parents managing a child’s screen time, schools keeping learning focused, remote teams and organisations, and individuals who want healthier screen habits. You pick Individual or Organisation when you set up.' },
    { q: 'Why does RestriX need the Accessibility API?', a: 'RestriX is a restriction and kiosk app. It uses Android’s Accessibility events to see which app is on screen and, if it is not on your allowed list, sends the user back to the RestriX home screen. It is not used for reading, captions or other accessibility assistance.' },
    { q: 'Does it read my messages or passwords?', a: 'No. RestriX does not read the text, passwords, messages or personal content on your screen, and it does not collect, sell or share Accessibility data with third parties.' },
    { q: 'Can I use the same settings on another device?', a: 'Yes. Use Backup & Restore to export your app data, then import it on another device to apply the same settings.' },
  ],
  finalCta: {
    title: 'Take back control of your screen time',
    body: 'Free on Google Play. Install it today — or talk to us about rolling it out across a school or organisation.',
    mailSubject: 'RestriX for our team',
  },
  demo: {
    label: 'Try a sample profile',
    toast: 'Restrictions applied',
    items: [
      {
        name: 'Study mode',
        title: 'Individual',
        company: 'Password protected',
        lines: ['Sample profile'],
        checks: [
          { name: 'Chrome', status: 'ok', meta: 'Allowed' },
          { name: 'WhatsApp', status: 'ok', meta: 'Allowed' },
          { name: 'Games', status: 'bad', meta: 'Blocked' },
          { name: 'Settings', status: 'bad', meta: 'Blocked' },
        ],
        decision: { tone: 'ok', title: 'Restrictions on', sub: 'Everything else is blocked' },
      },
      {
        name: 'Classroom',
        title: 'Organisation',
        company: 'Password protected',
        lines: ['Sample profile'],
        checks: [
          { name: 'Learning app', status: 'ok', meta: 'Allowed' },
          { name: 'Chrome', status: 'ok', meta: 'Allowed' },
          { name: 'Social media', status: 'bad', meta: 'Blocked' },
          { name: 'Settings', status: 'bad', meta: 'Blocked' },
        ],
        decision: { tone: 'ok', title: 'Restrictions on', sub: 'Apply to more devices with Import' },
      },
      {
        name: 'Focused work',
        title: 'Individual',
        company: 'Password protected',
        lines: ['Sample profile'],
        checks: [
          { name: 'Email', status: 'ok', meta: 'Allowed' },
          { name: 'Chrome', status: 'ok', meta: 'Allowed' },
          { name: 'Video apps', status: 'bad', meta: 'Blocked' },
          { name: 'Settings', status: 'bad', meta: 'Blocked' },
        ],
        decision: { tone: 'ok', title: 'Restrictions on', sub: 'Back to RestriX if a blocked app opens' },
      },
    ],
  },
};
