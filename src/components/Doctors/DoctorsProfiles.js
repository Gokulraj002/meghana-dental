import Image from 'next/image';

const doctors = [
  {
    name: 'Dr. Hemanth Kumar',
    specialty: 'Oral & Maxillofacial Surgeon',
    qualification: 'MDS, PhD — Chief Surgeon',
    image: '/images/dr-hemu.jpg',
    desc: 'Dr. Hemanth Kumar is the founder and chief surgeon of Meghana Dental Hospital. With over 15 years of experience in oral and maxillofacial surgery, he specialises in dental implants, wisdom tooth surgery, jaw surgeries, and trauma management. He is known for his precise surgical technique and compassionate patient care.',
    expertise: ['Dental Implant Surgery', 'Wisdom Tooth Removal', 'Jaw Correction Surgery', 'Facial Trauma Management', 'Microscope-Guided Surgery', 'Full Mouth Rehabilitation'],
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Orthodontist',
    qualification: 'MDS — Clear Aligners Specialist',
    image: '/images/doctor-female.png',
    desc: 'Dr. Priya Sharma is an experienced orthodontist specialising in braces and clear aligner treatments for children, teens, and adults. She brings a patient-friendly approach to teeth straightening, ensuring comfortable and effective treatments with beautiful results.',
    expertise: ['Metal & Ceramic Braces', 'Clear Aligners', 'Self-Ligating Braces', 'Early Orthodontic Intervention', 'Invisible Orthodontics', 'Bite Correction'],
  },
  {
    name: 'Dr. Rajesh Nair',
    specialty: 'Prosthodontist',
    qualification: 'MDS — Implant Specialist',
    image: '/images/doctor-male.png',
    desc: 'Dr. Rajesh Nair specialises in prosthodontics — the art and science of replacing missing teeth. He is an expert in dental crowns, bridges, BPS dentures, and implant-supported prosthetics. His attention to detail ensures natural-looking and long-lasting restorations.',
    expertise: ['BPS Dentures', 'Zirconia Crowns', 'Dental Bridges', 'Implant Prosthetics', 'Smile Design', 'Full Mouth Rehab'],
  },
  {
    name: 'Dr. Meena Reddy',
    specialty: 'Endodontist',
    qualification: 'MDS — Root Canal Specialist',
    image: '/images/doctor-female.png',
    desc: 'Dr. Meena Reddy is a highly skilled endodontist specialising in microscope-guided root canal treatments. She performs painless single-sitting RCTs using the latest rotary instruments, ensuring maximum tooth preservation with minimal discomfort.',
    expertise: ['Microscope Root Canal', 'Single-Sitting RCT', 'Re-Root Canal Treatment', 'Post & Core', 'Pulp Therapy', 'Dental Trauma Management'],
  },
  {
    name: 'Dr. Suresh Babu',
    specialty: 'Periodontist',
    qualification: 'MDS — Gum Specialist',
    image: '/images/doctor-male.png',
    desc: 'Dr. Suresh Babu is our periodontal specialist focusing on gum health and gum disease treatment. He performs advanced procedures including laser gum surgery, bone grafting, and esthetic gum treatments to ensure healthy and beautiful gums.',
    expertise: ['Gum Disease Treatment', 'Laser Gum Surgery', 'Bone Grafting', 'Crown Lengthening', 'Gummy Smile Correction', 'Deep Cleaning'],
  },
  {
    name: 'Dr. Kavitha Rao',
    specialty: 'Pediatric Dentist',
    qualification: 'MDS — Pedodontist',
    image: '/images/doctor-female.png',
    desc: 'Dr. Kavitha Rao is a compassionate pediatric dentist who specialises in making dental visits fun and fear-free for children. She handles everything from baby teeth care to preventive fluoride treatments, ensuring children develop healthy dental habits early.',
    expertise: ['Baby Teeth Care', 'Fluoride Treatment', 'Dental Sealants', 'Space Maintainers', 'Pulpectomy', 'Habit Breaking Appliances'],
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
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
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
