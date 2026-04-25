import FacilityCard from './FacilityCard';
import { getFacilities } from '@/lib/content';

const FALLBACK = [
  { image: '/images/microscope.jpg', title: 'Dental Microscope (25× Magnification)', desc: '25x magnification — precision dentistry' },
  { image: '/images/microscope-use.jpg', title: 'Microscope Treatment', desc: 'Doctor performing microscope-guided procedure' },
  { image: '/images/microscope-treatment.jpg', title: 'Advanced Treatment Room', desc: 'Ergonomic, hygienic treatment suites' },
  { image: '/images/microscope-equipment.jpg', title: 'Precision In Action', desc: 'Magnified view for superior outcomes' },
];

export default async function FacilitiesGallery() {
  const rows = await getFacilities();
  const facilities = rows.length > 0 ? rows : FALLBACK;

  return (
    <section className="facilities-section section-padding">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">OUR FACILITIES</span>
          <h2>State-of-the-Art Infrastructure</h2>
          <p>
            Explore our modern facility equipped with the latest dental technology for superior patient care.
          </p>
        </div>
        <div className="row g-4">
          {facilities.map((f, i) => (
            <FacilityCard key={f.id || i} facility={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
