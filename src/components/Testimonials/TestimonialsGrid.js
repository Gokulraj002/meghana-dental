const testimonials = [
  {
    name: 'Srinivas Reddy',
    occupation: 'Business Owner',
    text: 'Excellent dental care! Dr. Hemanth Kumar performed my root canal treatment with microscope — absolutely painless. The best dental experience I have ever had. The clinic is modern and hygienic, and the staff is very friendly.',
    rating: 5,
    treatment: 'Root Canal Treatment',
  },
  {
    name: 'Lakshmi Devi',
    occupation: 'Teacher',
    text: 'I was terrified of dentists, but the team at Meghana Dental made me feel so comfortable. The modern facility and caring staff made all the difference. My dental implant procedure was smooth and the results are amazing.',
    rating: 5,
    treatment: 'Dental Implants',
  },
  {
    name: 'Ramesh Babu',
    occupation: 'Software Engineer',
    text: 'Got my dental implants done here. The treatment was well-planned and the results are amazing. My new teeth look and feel completely natural. Dr. Rajesh Nair was very thorough with the treatment planning.',
    rating: 5,
    treatment: 'Dental Implants',
  },
  {
    name: 'Anitha Kumari',
    occupation: 'Homemaker',
    text: 'My 5-year-old daughter loves visiting this dental clinic! The pediatric dentist is so patient and makes the visit fun for kids. The fluoride treatment went smoothly. Highly recommend for children.',
    rating: 5,
    treatment: 'Pediatric Dentistry',
  },
  {
    name: 'Venkat Rao',
    occupation: 'Retired Professor',
    text: 'Best orthodontic treatment in the city. Got my braces here and the results exceeded my expectations. The entire team is professional and friendly. My smile has completely transformed.',
    rating: 5,
    treatment: 'Orthodontics',
  },
  {
    name: 'Padma Kumar',
    occupation: 'Retired Professor',
    text: 'Affordable pricing with world-class quality. I got my full mouth rehabilitation done here. The BPS dentures are incredibly comfortable — like natural teeth! Dr. Rajesh is truly an expert.',
    rating: 5,
    treatment: 'BPS Dentures',
  },
  {
    name: 'Sudheer Kumar',
    occupation: 'Government Employee',
    text: 'I had my wisdom tooth removed here. The entire procedure was painless and the recovery was smooth. Dr. Hemanth Kumar is an excellent surgeon. The post-operative care instructions were very helpful.',
    rating: 5,
    treatment: 'Tooth Extraction',
  },
  {
    name: 'Praveena Reddy',
    occupation: 'Entrepreneur',
    text: 'The teeth whitening treatment was amazing! My teeth became several shades brighter in just one sitting. The clinic maintains international standards of hygiene. Truly a premium dental experience.',
    rating: 5,
    treatment: 'Teeth Whitening',
  },
  {
    name: 'Ravi Teja',
    occupation: 'IT Professional',
    text: 'Had a dental crown done here and the precision is outstanding. The zirconia crown looks exactly like my natural tooth. Dr. Rajesh explained everything clearly before the procedure. Highly recommended!',
    rating: 5,
    treatment: 'Dental Crowns',
  },
  {
    name: 'Sarita Devi',
    occupation: 'Bank Manager',
    text: 'I was suffering from gum problems for years. The periodontal treatment at Meghana Dental was thorough and effective. Dr. Suresh Babu is very knowledgeable. My gums are healthy now and I no longer have bleeding issues.',
    rating: 5,
    treatment: 'Gum Treatment',
  },
  {
    name: 'Krishna Murthy',
    occupation: 'Shopkeeper',
    text: 'Got my flexible dentures made here and they fit perfectly. Much more comfortable than my old dentures. The team took precise measurements and the final result is truly natural-looking.',
    rating: 5,
    treatment: 'Flexible Dentures',
  },
  {
    name: 'Divya Rao',
    occupation: 'Student',
    text: 'The clear aligner treatment changed my smile without anyone even noticing I was wearing them! Dr. Priya Sharma guided me through the entire process and the results are beautiful.',
    rating: 5,
    treatment: 'Clear Aligners',
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
