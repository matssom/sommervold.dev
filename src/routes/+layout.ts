import { injectAnalytics } from '@vercel/analytics/sveltekit'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

export const prerender = true;

injectAnalytics();
injectSpeedInsights();
