import { getSettings } from './settings';

/**
 * Returns per-service landing page overrides stored in SiteSettings
 * under key `svc:{slug}` as a JSON blob.
 * Returns {} if not set or invalid JSON.
 */
export async function getServicePageOverrides(slug) {
  const settings = await getSettings();
  const raw = settings[`svc:${slug}`];
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}
