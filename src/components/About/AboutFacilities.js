import Image from 'next/image';

const facilities = [
  {
    image: '/images/about-itero-scanner.jpg',
    alt: 'iTero Intraoral Scanner — Digital Impressions at Meghana Dental',
    title: '📡 iTero Digital Scanner',
    desc: 'We use the iTero intraoral scanner for fast, accurate, mess-free digital impressions — essential for clear aligners, crowns, and smile makeovers.',
  },
  {
    image: '/images/microscope.jpg',
    alt: 'Dental Microscope (25× Magnification)',
    title: '🔬 Dental Microscope',
    desc: 'dental operating microscope with 25× magnification for precision root canals, microsurgery, and magnified diagnosis — one of the few in the region.',
  },
{
  image: '/images/about-itero.jpeg',
  alt: 'iTero Digital Scanner — Advanced 3D Dental Scanning at Meghana Dental Tirupati',
  title: '🖥️ Digital Smile Scanning',
  desc: 'Meghana Dental uses the advanced iTero Element® Scanner in Tirupati — providing fast, accurate 3D dental scans for comfortable, mess-free impressions and precise treatment planning.',
}
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
