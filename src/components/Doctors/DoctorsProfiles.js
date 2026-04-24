import Image from 'next/image';

const doctors = [
  {
    name: 'Dr. M. Hemadri',
    specialty: 'Conservative Dentistry & Endodontist',
    qualification: 'MDS — Founder & Director, Meghana Dental Hospital',
    image: '/images/dr-hemu.jpg',
    isPhoto: true,
    desc: 'Dr. Hemadri is the founder and director of Meghana Multi-Speciality Dental Hospital. A distinguished endodontist with 17 years of experience, he completed his MDS in Conservative Dentistry & Endodontics from Bapuji Dental College, Davanagere (2007). He is widely acclaimed as an expert in single-visit endodontic treatment and complex re-treatment cases. He has also completed a residency in Clinical Implantology and holds an ICOI (International Congress of Oral Implantologists) Fellowship in Implant Dentistry.',
    expertise: ['Single-Visit Root Canal Treatment', 'Complex RCT Re-Treatment', 'Cosmetic Dentistry & Veneers', 'LASER Dentistry', 'Dental Implants', 'Full Mouth Rehabilitation', 'Ceramic Inlays & Onlays', 'Digital Dentistry'],
  },
  {
    name: 'Dr. Eswar',
    specialty: 'Oral & Maxillofacial Surgeon',
    qualification: 'MDS — Oral Surgery Specialist',
    image: '/doctors/Eswar.jpeg',
    desc: 'Dr. Eswar is an eminent oral & maxillofacial surgeon with over 15 years of experience. He is widely recognised for his expertise in third molar (wisdom tooth) extractions, impacted tooth surgery, and complicated extractions. He also specialises in the management of fractures involving the upper and lower jaw, bringing precision and confidence to every surgical case.',
    expertise: ['Wisdom Tooth Extraction', 'Impacted Tooth Surgery', 'Complicated Extractions', 'Jaw Fracture Management', 'Surgical Implant Placement', 'OPG & CBCT Guided Surgery'],
  },
  {
    name: 'Dr. O.G. Lakshmikar Reddy',
    specialty: 'Orthodontist',
    qualification: 'MDS — Clear Aligner & Braces Specialist',
    image: '/doctors/Lakshmikar.jpeg',
    desc: 'Dr. Lakshmikar Reddy is an orthodontist with over 9 years of experience. He specialises in the full spectrum of orthodontic treatment — from traditional metal braces and ceramic braces to modern Invisalign and clear aligner systems. His expertise also extends to self-ligating brackets, fixed functional appliances, maxillary expansion, and interceptive orthodontics for children.',
    expertise: ['Invisalign & Clear Aligners', 'Self-Ligating Braces', 'Traditional Metal Braces', 'Ceramic Braces', 'Fixed Functional Appliances', 'Interceptive Orthodontics', 'Maxillary Expansion'],
  },
  {
    name: 'Dr. Sandeep Narahari',
    specialty: 'Periodontist & Implantologist',
    qualification: 'MDS — Gum Specialist & Implant Expert',
    image: '/doctors/Sandeep.jpeg',
    desc: 'Dr. Sandeep Narahari is a periodontist and implantologist with over 8 years of experience. He specialises in advanced periodontal flap surgeries, guided bone grafting, and complex implant procedures. He is an expert in full-arch implant solutions — All-on-4 and All-on-6 implant placement — providing patients with permanent, implant-supported smiles and excellent long-term gum health.',
    expertise: ['Periodontal Flap Surgery', 'Guided Bone Grafting', 'All-on-4 Implants', 'All-on-6 Implants', 'Gum Disease Treatment', 'Crown Lengthening', 'Gummy Smile Correction'],
  },
  {
    name: 'Dr. Dinakar Reddy',
    specialty: 'Prosthodontist',
    qualification: 'MDS — Prosthetics & Smile Rehabilitation Specialist',
    image: '/doctors/Dinakar.jpeg',
    desc: 'Dr. Dinakar Reddy is a prosthodontist with over 10 years of experience. He is the specialist behind every precision denture, crown, bridge, and full mouth rehabilitation at Meghana Dental Hospital. He specialises in complete and partial dentures, BPS (Bio-Functional Prosthetic System) precision dentures, over-dentures, fixed bridges, and zirconia crowns — always crafting restorations that combine natural aesthetics with long-term durability.',
    expertise: ['BPS Precision Dentures', 'Complete & Partial Dentures', 'Over-Dentures', 'Fixed Bridges', 'Zirconia Crowns', 'Full Mouth Rehabilitation', 'Implant-Supported Prosthetics'],
  },
];

export default function DoctorsProfiles() {
  return (
    <>
      {doctors.map((doctor, index) => (
        <div
          className="row g-5 align-items-center mb-5 pb-4"
          key={index}
          style={{
            borderBottom: index < doctors.length - 1 ? '1px solid var(--border)' : 'none',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
          <div className="col-lg-5">
            <div className="service-image-card" style={{ marginBottom: 0 }}>
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={500} height={500}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: doctor.isPhoto ? 'cover' : 'contain',
                  padding: doctor.isPhoto ? '0' : '20px',
                  background: doctor.isPhoto ? 'transparent' : '#f8f9fa',
                }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <span className="about-subtitle" style={{ fontSize: '0.75rem' }}>{doctor.specialty}</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '6px', color: 'var(--text-heading)' }}>{doctor.name}</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '20px' }}>
              {doctor.qualification}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'var(--text-body)', marginBottom: '24px' }}>
              {doctor.desc}
            </p>
            <div className="row g-2">
              {doctor.expertise.map((exp, i) => (
                <div className="col-md-6" key={i}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 14px', background: 'var(--primary-50)',
                    borderRadius: '8px', border: '1px solid var(--primary-light)',
                    fontSize: '0.88rem', color: 'var(--text-heading)', fontWeight: '500',
                  }}>
                    <span style={{ color: 'var(--primary)' }}>✓</span> {exp}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
