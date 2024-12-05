import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://dd74b8abd2a18f9c941f27058b623127@o4508413416833024.ingest.us.sentry.io/4508413417881600",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});