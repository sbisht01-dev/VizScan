import type { AppConfig } from './types';

/*
 * Every fact here comes from the DataVue app screens (no Play listing text yet):
 *   - Dashboard with four areas: Data Monitor, Trends, Report, Consumption
 *   - Data Monitor: Grid Parameters (Set MD, Running MD, Grid kVA) and
 *     CPP Parameters (Island Gen. Set kW, 10MW CPP kW, CPP kVAr, CPP frequency, CPP Aux kW)
 *   - Trends: Current or Historical; pick parameters from a checklist (Set MD, Running MD, Grid kW,
 *     10MW CPP kW, CPP Aux kW, MT 10T Furnace 1–4 kW, RM kW, SMS Aux kW, Furnace available /
 *     running power, Grid kVAr, 10MW CPP kVAr, …); Historical takes a start and end date and time
 *   - Report: 15 Min, Hourly, Daily, Monthly, Yearly; start and end date and time; Download
 *   - Consumption: values for a date, e.g. Grid Import kWh
 *   - Registration: "Your registration was successful. Our team will reach you soon."
 *     with tfrenzy.com/contact-us, contactus@tfrenzy.com, +91-6296405137
 *
 * Deliberately left out (nothing in the screens supports them): industry strip, pain points,
 * roles, outcome stats, the sample demo, and any claim about price.
 *
 * TODO: playStoreUrl / packageId are placeholders until the real listing link is confirmed.
 */
const NAME = 'DataVue';

export const datavue: AppConfig = {
  slug: 'datavue',
  name: NAME,
  wordmark: 'DATAVUE',
  tagline: 'Plant power monitoring',
  contactEmail: 'contactus@tfrenzy.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.datavue',
  packageId: 'com.datavue',
  icon: '/apps/datavue/icon.png',
  favicon: '/apps/datavue/favicon.png',
  ogImage: '/apps/datavue/data-monitor.jpg',
  themeColor: '#FB9B5C',
  meta: {
    title: `${NAME} — Grid, CPP and consumption data on your phone | TFrenzy`,
    description: `${NAME} shows live grid and captive power plant parameters, trends for the parameters you pick, reports from 15 minutes to yearly, and daily consumption. On Google Play.`,
    ogTitle: `${NAME} — Your plant’s power data on your phone`,
    ogDescription: 'Live grid and CPP readings, trends, reports and consumption in one app.',
  },
  nav: [
    { href: '#how', label: 'How it works' },
    { href: '#app', label: 'The app' },
    { href: '#checks', label: 'Features' },
    { href: '#faq', label: 'FAQ' },
  ],
  hero: {
    eyebrow: 'Plant power monitoring · Android',
    title: ['Your plant’s', 'power data,', 'on your phone.'],
    sub: `${NAME} brings **grid** and **captive power plant** readings, parameter **trends**, interval **reports** and **consumption** together in one app.`,
    trust: ['Grid & CPP parameters', 'Reports from 15 min to yearly', 'Consumption in kWh'],
  },
  heroShot: {
    src: '/apps/datavue/data-monitor.jpg',
    alt: `${NAME} Data Monitor screen with Grid Parameters (Set MD, Running MD, Grid kVA) and CPP Parameters (Island Gen. Set kW, 10MW CPP kW, kVAr, frequency, CPP Aux kW)`,
  },
  how: {
    title: 'Register. Monitor. Report.',
    lead: 'Everything starts from one dashboard.',
    steps: [
      { icon: 'check', title: 'Register', body: `Install ${NAME} and register. Our team will reach you after you sign up.` },
      {
        icon: 'chart',
        title: 'Watch and trend',
        body: 'See grid and CPP parameters in Data Monitor, then pick the parameters you want to follow in Trends — current or historical.',
        tags: ['Data Monitor', 'Trends', 'Current', 'Historical'],
        focus: true,
      },
      { icon: 'download', title: 'Report and download', body: 'Choose an interval and a time range, submit, and download the report. Check consumption in kWh by date.' },
    ],
  },
  screens: {
    title: 'What you’ll see',
    lead: `Screens from the ${NAME} app.`,
    list: [
      { src: '/apps/datavue/dashboard.jpg', alt: `${NAME} dashboard with Data Monitor, Trends, Report and Consumption`, caption: 'One dashboard', w: 600, h: 1298 },
      { src: '/apps/datavue/trends.jpg', alt: `${NAME} Trends screen with a checklist of parameters such as Set MD, Running MD, Grid kW and furnace kW`, caption: 'Pick parameters to trend', w: 600, h: 1298 },
      { src: '/apps/datavue/report.jpg', alt: `${NAME} Report screen with 15 Min, Hourly, Daily, Monthly and Yearly tabs and start and end date and time`, caption: '15 min to yearly reports', w: 600, h: 1298 },
      { src: '/apps/datavue/consumption.jpg', alt: `${NAME} Consumption screen listing Grid Import kWh for a date`, caption: 'Consumption by date', w: 600, h: 1298 },
    ],
  },
  checks: {
    eyebrow: 'Features',
    title: 'Four screens, one place for your power data',
    lead: `What each part of ${NAME} does, as it appears in the app.`,
    items: [
      { code: 'MON', title: 'Data Monitor', body: 'Grid parameters — Set MD, Running MD, Grid kVA — and CPP parameters — Island Gen. Set kW, 10MW CPP kW, kVAr, frequency and CPP Aux kW — on one screen.', sample: 'Grid + CPP', status: 'info' },
      { code: 'TRD', title: 'Trends', body: 'Tick the parameters you need — grid kW, CPP kW, furnace kW, RM kW, SMS Aux kW, furnace available and running power, kVAr — and view them together.', sample: 'Multi-select', status: 'info' },
      { code: 'HST', title: 'Historical trends', body: 'Switch from Current to Historical and set a start and end date and time.', sample: 'Date & time range', status: 'info' },
      { code: 'RPT', title: 'Reports', body: 'Run a report at 15 Min, Hourly, Daily, Monthly or Yearly intervals for the time range you choose.', sample: '5 intervals', status: 'info' },
      { code: 'DL', title: 'Download', body: 'Download the report straight from the Report screen.', sample: 'Download', status: 'ok' },
      { code: 'KWH', title: 'Consumption', body: 'See consumption values for a date, such as Grid Import kWh.', sample: 'kWh by date', status: 'info' },
    ],
  },
  start: {
    title: 'Up and running in three steps',
    steps: [
      { title: `Install ${NAME}`, body: 'Get it from Google Play on your Android phone.' },
      { title: 'Register', body: 'Sign up in the app. Our team will reach you.' },
      { title: 'Open the dashboard', body: 'Data Monitor, Trends, Report and Consumption, one tap each.' },
    ],
  },
  faq: [
    { q: `What does ${NAME} show?`, a: 'Four areas from one dashboard: Data Monitor for grid and CPP parameters, Trends for the parameters you pick, Report for interval reports you can download, and Consumption for values by date.' },
    { q: 'Which parameters can I trend?', a: 'Pick from a checklist that includes Set MD, Running MD, Grid kW, 10MW CPP kW, CPP Aux kW, MT 10T Furnace 1–4 kW, RM kW, SMS Aux kW, Furnace available and running power, Grid kVAr and 10MW CPP kVAr. Select as many as you need, then view Current or Historical.' },
    { q: 'What report intervals are there?', a: '15 Min, Hourly, Daily, Monthly and Yearly. Choose a start and end date and time, submit, and download the report.' },
    { q: 'What happens after I register?', a: 'You’ll see a confirmation in the app, and our team will reach you.' },
    { q: 'How do I contact TFrenzy?', a: 'Through tfrenzy.com/contact-us, at contactus@tfrenzy.com, or on +91-6296405137.' },
  ],
  finalCta: {
    title: 'See your plant’s power data on your phone',
    body: `Get ${NAME} on Google Play and register, and our team will reach you. Questions first? Talk to us.`,
    mailSubject: `${NAME} for our plant`,
  },
};
