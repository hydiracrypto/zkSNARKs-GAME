// Speed Insights initialization for Vercel Speed Insights
// This script initializes Vercel Speed Insights for the application
import { injectSpeedInsights } from './speed-insights/speed-insights.mjs';

// Initialize Speed Insights
// Note: Speed Insights only tracks data in production (when deployed to Vercel)
// It will not track data in development mode
injectSpeedInsights({
  debug: false // Set to true to enable debug logging
});
