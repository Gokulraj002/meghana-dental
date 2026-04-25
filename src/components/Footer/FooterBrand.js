import { getSettings } from '@/lib/settings';

export default async function FooterBrand() {
  const s = await getSettings();
  const name = s.clinic_name || 'Meghana Dental';
  const about = s.footer_about || 'Meghana Dental Hospital is a premier super speciality dental centre dedicated to delivering world-class oral healthcare with the latest technology, expert doctors, and compassionate care.';
  const socials = [
    { icon: 'bi-facebook', label: 'Facebook', url: s.facebook_url },
    { icon: 'bi-instagram', label: 'Instagram', url: s.instagram_url },
    { icon: 'bi-youtube', label: 'YouTube', url: s.youtube_url },
    { icon: 'bi-linkedin', label: 'LinkedIn', url: s.linkedin_url },
    { icon: 'bi-twitter-x', label: 'Twitter', url: s.twitter_url },
  ].filter(x => x.url);

  // Split brand name — first word + rest
  const parts = name.split(' ');
  const head = parts[0];
  const tail = parts.slice(1).join(' ');

  return (
    <div className="col-lg-4">
      <div className="footer-brand">
        <h4>{head} {tail && <span>{tail}</span>}</h4>
      </div>
      <p className="footer-text">{about}</p>
      <div className="footer-social">
        {socials.length > 0 ? socials.map((sl) => (
          <a key={sl.label} href={sl.url} target="_blank" rel="noopener noreferrer" aria-label={sl.label}>
            <i className={`bi ${sl.icon}`}></i>
          </a>
        )) : ['bi-facebook', 'bi-instagram', 'bi-youtube'].map(ic => (
          <a key={ic} href="#" aria-label={ic}><i className={`bi ${ic}`} /></a>
        ))}
      </div>
    </div>
  );
}
