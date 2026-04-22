import TestimonialCard from './TestimonialCard';
import GoogleBadge from './GoogleBadge';

const testimonials = [
  {
    text: 'Excellent dental care! Dr. M. Hemadri performed my root canal treatment with microscope — absolutely painless. The best dental experience I have ever had.',
    name: 'Srinivas Reddy',
    role: 'Business Owner',
    initial: 'S',
  },
  {
    text: 'I was terrified of dentists, but the team at Meghana Dental made me feel so comfortable. The modern facility and caring staff made all the difference.',
    name: 'Lakshmi Devi',
    role: 'Teacher',
    initial: 'L',
  },
  {
    text: 'Got my dental implants done here. The treatment was well-planned and the results are amazing. My new teeth look and feel completely natural.',
    name: 'Ramesh Babu',
    role: 'Software Engineer',
    initial: 'R',
  },
  {
    text: 'My 5-year-old daughter loves visiting this dental clinic! The pediatric dentist is so gentle and makes the visit fun for kids. Highly recommend for children.',
    name: 'Priyanka Rao',
    role: 'Homemaker',
    initial: 'P',
  },
  {
    text: 'Best orthodontic treatment in the city. Got my braces here and the results exceeded my expectations. The entire team is professional and friendly.',
    name: 'Vikram Kumar',
    role: 'College Student',
    initial: 'V',
  },
  {
    text: 'Affordable pricing with world-class quality. I got my full mouth rehabilitation done here. The BPS dentures are incredibly comfortable — like natural teeth!',
    name: 'Padma Kumari',
    role: 'Retired Professor',
    initial: 'P',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">TESTIMONIALS</span>
          <h2>What Our Patients Say</h2>
          <p>Real stories from real patients who trust us with their dental care.</p>
        </div>
        <div className="row g-4 mb-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
        <GoogleBadge />
      </div>
    </section>
  );
}
