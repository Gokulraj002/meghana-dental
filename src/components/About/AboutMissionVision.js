import { getSettings } from '@/lib/settings';

export default async function AboutMissionVision() {
  const s = await getSettings();
  const mission = s.mission_text || 'To make world-class dental care accessible and affordable for everyone. We strive to use the latest technology and evidence-based treatments to achieve the best outcomes while ensuring every patient feels comfortable and cared for.';
  const vision = s.vision_text || 'To be the most trusted and preferred dental hospital in South India, recognised for clinical excellence, patient satisfaction, and community service.';

  return (
    <div className="row g-4 mb-5">
      <div className="col-md-6">
        <div className="service-info-card" style={{ height: '100%' }}>
          <h3><i className="bi bi-bullseye"></i> Our Mission</h3>
          <p>{mission}</p>
          <ul>
            <li>Pain-free, anxiety-free dental treatments</li>
            <li>Affordable pricing without compromising quality</li>
            <li>Continuous education and technology adoption</li>
            <li>Building long-term relationships with patients</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="service-info-card" style={{ height: '100%' }}>
          <h3><i className="bi bi-eye-fill"></i> Our Vision</h3>
          <p>{vision}</p>
          <ul>
            <li>Centre of excellence for advanced dental procedures</li>
            <li>Training hub for next-generation dental professionals</li>
            <li>Community outreach and dental awareness programmes</li>
            <li>International standards of care and hygiene</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
