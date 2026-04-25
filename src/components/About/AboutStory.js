import Image from 'next/image';
import { getSettings, getAboutFeatures } from '@/lib/content';

const FEATURES_FALLBACK = [
  { icon: 'bi-hospital', title: 'Modern Facility', desc: 'State-of-the-art equipment and sterilization' },
  { icon: 'bi-person-badge-fill', title: 'Expert Team', desc: 'MDS qualified specialists in every field' },
  { icon: 'bi-lightbulb-fill', title: 'Latest Technology', desc: 'Microscope-guided precision treatments' },
  { icon: 'bi-heart-fill', title: 'Patient First', desc: 'Compassionate, pain-free dental care' },
];

export default async function AboutStory() {
  const s = await getSettings();
  const subtitle = s.about_subtitle || 'OUR STORY';
  const title = s.about_title || 'Your Trusted Partner in Oral Healthcare';
  const story = s.about_story || 'Meghana Dental Hospital was founded with a vision to provide comprehensive, affordable, and pain-free dental care to the people of Tirupati and surrounding areas. Over 17+ years, we have grown into one of the most trusted dental hospitals in Andhra Pradesh, serving over 50,000 happy patients.';
  const aboutImage = s.about_image || '/images/about-clinic.png';
  const yearsExp = s.years_experience || '17+';

  // Title — split last 2 words into colored span
  const words = title.split(' ');
  const headTxt = words.slice(0, -2).join(' ');
  const tailTxt = words.slice(-2).join(' ');

  const featureRows = await getAboutFeatures();
  const features = featureRows.length > 0 ? featureRows : FEATURES_FALLBACK;

  return (
    <div className="row g-5 align-items-center mb-5">
      <div className="col-lg-6">
        <div className="about-image-wrapper">
          <Image
            src={aboutImage}
            alt="Meghana Dental Hospital Clinic"
            width={600} height={480}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
          <div className="about-experience-badge">
            <span className="number">{yearsExp}</span>
            <span className="label">Years Experience</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <span className="about-subtitle">{subtitle}</span>
        <h2 className="about-title">{headTxt} <span>{tailTxt}</span></h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-body)', marginBottom: '24px' }}>
          {story}
        </p>
        <div className="about-features">
          {features.map((f, i) => (
            <div className="about-feature" key={f.id || i}>
              <div className="about-feature-icon"><i className={`bi ${f.icon || 'bi-check-circle'}`} /></div>
              <div>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
