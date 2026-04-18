import Link from 'next/link';
import DoctorCard from './DoctorCard';

const doctors = [
  {
    name: 'Dr. Hemanth Kumar',
    specialty: 'Oral & Maxillofacial Surgeon',
    qualification: 'MDS, PhD — Chief Surgeon',
    image: '/images/dr-hemu.jpg',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Orthodontist',
    qualification: 'MDS — Clear Aligners Specialist',
    image: '/images/doctor-female.png',
  },
  {
    name: 'Dr. Rajesh Nair',
    specialty: 'Prosthodontist',
    qualification: 'MDS — Implant Specialist',
    image: '/images/doctor-male.png',
  },
];

export default function DoctorsSection() {
  return (
    <section className="doctors-section section-padding" id="doctors">
      <div className="container position-relative">
        <div className="section-header animate-fade-up">
          <span className="subtitle">OUR EXPERTS</span>
          <h2>Meet Our Specialists</h2>
          <p>
            Our experienced team of MDS-qualified dental specialists is dedicated
            to providing the highest standard of oral healthcare.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {doctors.map((doc, index) => (
            <DoctorCard key={index} doctor={doc} />
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link href="/doctors" style={{ textDecoration: 'none' }} className="btn-hero-secondary">
            View All 6 Specialists <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
