const testimonials = [
  {
    name: 'Gunturu Raveendra',
    occupation: 'Google Review',
    text: 'Meghna Dental clinic is the best laser & Root canal center in Tirupathi',
    rating: 5,
    treatment: 'Laser & Root Canal',
  },
  {
    name: 'E Giridhar',
    occupation: 'Google Review',
    text: 'Way of treatment is good. Dr. Hemadri sir is having lot of patience and will give reply for all patient queries. At reception also good follow up with patient.',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    name: 'Srivatsava Sharma',
    occupation: 'Google Review',
    text: 'I thank Dr Hemadri Sir for his excellent service. When I had dental issues I approached Meghana dental clinic, Dr Hemadri Sir explained about my problem in detail, the process involved and provided excellent treatment. Highly recommended',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    name: 'Chaitanya Subba Reddy Tetala',
    occupation: 'Google Review',
    text: 'The treatment provided is excellent and supported by advanced technology. The doctor is highly dedicated and passionate about delivering the best care. The reception staff is also very cooperative, efficiently coordinating appointments and assisting patients well.',
    rating: 5,
    treatment: 'Advanced Treatment',
  },
  {
    name: 'P Praveen',
    occupation: 'Google Review',
    text: 'In my view Dr Hemadri sir is having plenty of knowledge in his profession. I had root canal treatment from him I am 100 percent satisfied with his treatment. ECHS People from Tirupati and all around can opt this hospital for Dental treatment after reference from Chittoor',
    rating: 5,
    treatment: 'Root Canal Treatment',
  },
  {
    name: 'Siddu Siddu',
    occupation: 'Google Review',
    text: 'Dr. Hemadri is excellent dentist in Tirupati because his working style like treatment method and consulting with patients is really appreciable. Thank you Doctor',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    name: 'Bhimpalli Haarika',
    occupation: 'Google Review',
    text: 'The doctor is very gentleman. He handles patients with care and attention. And the staff too was very sweet. Definitely a recommended hospital for dental issues.',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    name: 'Ratna',
    occupation: 'Google Local Guide',
    text: 'Best dental hospital in Tirupati. Treatment and maintenance are so good. Never ever a complication to face after. Doctor and staff are very friendly!',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    name: 'Raghavendra Rao',
    occupation: 'Google Review',
    text: 'Dr Hemadri garu provides quality treatment at Meghana dental clinic. He is an expert in doing RCT. I am very happy with the quality of work done by Dr. Hemadri.',
    rating: 5,
    treatment: 'Root Canal Treatment',
  },
  {
    name: 'Naveen Reddy',
    occupation: 'Google Local Guide',
    text: 'Dr. Hemadri is a skilled doctor; he treats well without any complications. I\'m completely satisfied by his treatment.',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    name: 'Umesh Kumar Singh',
    occupation: 'Google Review',
    text: 'Very responsive and caring. We are able to get treatment as per our manageable timing.',
    rating: 5,
    treatment: 'General Dentistry',
  },
  {
    name: 'Anand NV',
    occupation: 'Google Local Guide',
    text: 'Got a crown placed at Meghana Dental Clinic. Dr. Hemadri is quite experienced and good at his work.',
    rating: 5,
    treatment: 'Dental Crown',
  },
  {
    name: 'Abhisek Nayak',
    occupation: 'Google Review',
    text: 'I had an amazing experience at this dental clinic. The entire procedure went smoothly, and I felt at ease throughout. The doctor was very interactive, taking the time to explain everything clearly and ensuring I was comfortable every step of the way. Highly recommend this clinic for anyone looking for top-notch dental care.',
    rating: 5,
    treatment: 'General Dentistry',
  },
];

export default function TestimonialsGrid() {
  return (
    <>
      <div className="section-header animate-fade-up">
        <span className="subtitle">PATIENT STORIES</span>
        <h2>What Our Patients Say</h2>
        <p>Each review reflects our commitment to providing exceptional dental care and patient satisfaction.</p>
      </div>

      <div className="row g-4">
        {testimonials.map((t, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="testimonial-card" style={{ height: '100%' }}>
              <div style={{
                display: 'inline-block', padding: '4px 12px', borderRadius: 'var(--radius-full)',
                background: 'var(--primary-50)', border: '1px solid var(--primary-light)',
                fontSize: '0.75rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '14px',
              }}>
                {t.treatment}
              </div>
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <h5>{t.name}</h5>
                  <p>{t.occupation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
