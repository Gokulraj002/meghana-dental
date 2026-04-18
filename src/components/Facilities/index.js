import FacilityCard from './FacilityCard';

const facilities = [
  {
    icon: 'bi-search',
    title: 'Carl Zeiss Operating Microscope',
    desc: 'Germany-made 25× magnification microscope for unmatched precision in root canal, implant, and restorative procedures.',
    spec: 'Only clinic in Tirupati with this technology',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    accent: '#4f46e5',
  },
  {
    icon: 'bi-camera-fill',
    title: 'Digital OPG & RVG X-Ray',
    desc: 'Full-jaw panoramic imaging and periapical X-rays with 90% less radiation than conventional films for safer diagnostics.',
    spec: '90% less radiation · Instant digital results',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0d9488 100%)',
    accent: '#0ea5e9',
  },
  {
    icon: 'bi-shield-fill-check',
    title: 'Hospital-Grade Sterilisation',
    desc: 'B-Class autoclave with sealed sterile packs, chemical indicators, and full infection control protocols for every patient.',
    spec: 'ISO sterilisation standards',
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    accent: '#10b981',
  },
  {
    icon: 'bi-person-fill',
    title: '4 Modern Treatment Rooms',
    desc: 'Fully equipped ergonomic dental chairs with LED operating lights, intraoral suction, and individual sterilised instrument packs.',
    spec: 'Strict infection control per room',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)',
    accent: '#a855f7',
  },
  {
    icon: 'bi-camera-video-fill',
    title: 'Intraoral Camera',
    desc: 'Live HD imaging of every tooth and gum tissue — patients can see exactly what the dentist sees in real time on screen.',
    spec: 'Live HD visualisation',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
    accent: '#06b6d4',
  },
  {
    icon: 'bi-heart-pulse-fill',
    title: 'Comfortable & Anxiety-Free',
    desc: 'Air-conditioned, calm clinical environment with patient-friendly décor, gentle handling, and music therapy for anxious patients.',
    spec: 'Anxiety-free zone · All ages welcome',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    accent: '#ec4899',
  },
];

export default function FacilitiesGallery() {
  return (
    <section className="facilities-section section-padding">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">OUR FACILITIES</span>
          <h2>State-of-the-Art Infrastructure</h2>
          <p>
            Equipped with cutting-edge dental technology so every patient in
            Tirupati receives specialist-level care under one roof.
          </p>
        </div>
        <div className="row g-4">
          {facilities.map((f, i) => (
            <FacilityCard key={i} facility={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
