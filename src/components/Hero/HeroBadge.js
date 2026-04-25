import { getSettings } from '@/lib/settings';

export default async function HeroBadge() {
  const s = await getSettings();
  const text = s.hero_badge_text || 'Rated 4.9 on Google — 850+ Reviews';
  return (
    <div className="hero-badge">
      <i className="bi bi-shield-check"></i>⭐ {text}
    </div>
  );
}
