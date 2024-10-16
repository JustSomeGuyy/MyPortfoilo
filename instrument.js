// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
const Sentry = require('@sentry/node');
const { nodeProfilingIntegration } = require('@sentry/profiling-node');

Sentry.init({
	dsn: 'https://741f18daf58b059a0470ea34f9fc1cb4@o4506392064819200.ingest.us.sentry.io/4506420325646336',
	integrations: [nodeProfilingIntegration()],
	// Tracing
	tracesSampleRate: 1.0, //  Capture 100% of the transactions

	// Set sampling rate for profiling - this is relative to tracesSampleRate
	profilesSampleRate: 1.0
});
