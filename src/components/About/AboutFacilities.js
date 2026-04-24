import Image from 'next/image';

const facilities = [
  {
    image: '/images/dental-chair.jpg',
    alt: 'Modern Dental Chair',
    title: '🪑 Modern Treatment Rooms',
    desc: 'Comfortable dental chairs with integrated patient entertainment systems and ergonomic design for painless procedures.',
  },
  {
    image: '/images/microscope.jpg',
    alt: 'Dental Microscope (25× Magnification)',
    title: '🔬 Dental Microscope',
    desc: 'dental operating microscope with 25× magnification for precision root canals, microsurgery, and magnified diagnosis — one of the few in the region.',
  },
  {
    image: '/images/dental-equipment.jpg',
    alt: 'Advanced Dental Equipment',
    title: '⚙️ Digital Equipment',
    desc: 'Digital X-rays, rotary endodontics, laser dentistry units, and advanced sterilisation ensuring highest standards of infection control.',
  },
];

export default function AboutFacilities() {
  return (
    <>
      <div className="section-header animate-fade-up">
        <span className="subtitle">OUR FACILITIES</span>
        <h2>World-Class Infrastructure</h2>
        <p>Experience dental care in a modern, comfortable, and fully-equipped facility.</p>
      </div>
      <div className="row g-4 mb-5">
        {facilities.map((f, i) => (
          <div className="col-md-4" key={i}>
            <div className="service-image-card">
              <Image
                src={f.image}
                alt={f.alt}
                width={400} height={300}
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
            </div>
            <div className="service-info-card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
