import Image from 'next/image';

export default function DoctorCard({ doctor }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="doctor-card">
        <div className="doctor-image-wrapper">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={400}
            height={300}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div className="doctor-info">
          <h4>{doctor.name}</h4>
          <p className="specialty">{doctor.specialty}</p>
          <p className="qualification">{doctor.qualification}</p>
        </div>
      </div>
    </div>
  );
}
