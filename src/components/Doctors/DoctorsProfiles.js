import Image from 'next/image';
import { getDoctors } from '@/lib/content';

const STATIC_DOCTORS = [
  { id: 1, name: 'Dr. M. Hemadri', speciality: 'Conservative Dentistry & Endodontist', qualification: 'MDS — Founder & Director, Meghana Dental Hospital', photo: '/images/dr-hemu.jpg', bio: 'Dr. Hemadri is the founder and director of Meghana Multi-Speciality Dental Hospital. A distinguished endodontist with 17 years of experience, he completed his MDS from Bapuji Dental College, Davanagere (2007). Expert in single-visit endodontic treatment and ICOI Fellowship in Implant Dentistry.' },
  { id: 2, name: 'Dr. Eswar', speciality: 'Oral & Maxillofacial Surgeon', qualification: 'MDS — Oral Surgery Specialist', photo: '/doctors/Eswar.jpeg', bio: 'Dr. Eswar is an eminent oral & maxillofacial surgeon with over 15 years of experience. Expert in wisdom tooth extractions, impacted tooth surgery, and jaw fracture management.' },
  { id: 3, name: 'Dr. O.G. Lakshmikar Reddy', speciality: 'Orthodontist', qualification: 'MDS — Clear Aligner & Braces Specialist', photo: '/doctors/Lakshmikar.jpeg', bio: 'Dr. Lakshmikar Reddy specialises in the full spectrum of orthodontic treatment from traditional metal braces to modern Invisalign and clear aligner systems.' },
  { id: 4, name: 'Dr. Sandeep Narahari', speciality: 'Periodontist & Implantologist', qualification: 'MDS — Gum Specialist & Implant Expert', photo: '/doctors/Sandeep.jpeg', bio: 'Dr. Sandeep Narahari specialises in advanced periodontal flap surgeries, guided bone grafting, and complex implant procedures including All-on-4 and All-on-6.' },
  { id: 5, name: 'Dr. Dinakar Reddy', speciality: 'Prosthodontist', qualification: 'MDS — Prosthetics & Smile Rehabilitation Specialist', photo: '/doctors/Dinakar.jpeg', bio: 'Dr. Dinakar Reddy specialises in complete dentures, BPS precision dentures, over-dentures, fixed bridges, and zirconia crowns for natural aesthetics.' },
];

export default async function DoctorsProfiles() {
  const rows = await getDoctors();
  const doctors = rows.length > 0 ? rows : STATIC_DOCTORS;

  return (
    <>
      {doctors.map((doctor, index) => (
        <div
          className="row g-5 align-items-center mb-5 pb-4"
          key={doctor.id || index}
          style={{
            borderBottom: index < doctors.length - 1 ? '1px solid var(--border)' : 'none',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
          <div className="col-lg-5">
            <div className="service-image-card" style={{ marginBottom: 0 }}>
              <Image
                src={doctor.photo || '/images/dr-hemu.jpg'}
                alt={doctor.name}
                width={500} height={500}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <span className="about-subtitle" style={{ fontSize: '0.75rem' }}>{doctor.speciality}</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '6px', color: 'var(--text-heading)' }}>{doctor.name}</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '20px' }}>
              {doctor.qualification}
            </p>
            {doctor.experience && (
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '16px' }}>
                <i className="bi bi-clock me-1" />{doctor.experience} Experience
              </p>
            )}
            <p style={{ fontSize: '1rem', lineHeight: '1.85', color: 'var(--text-body)', marginBottom: '24px' }}>
              {doctor.bio}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
