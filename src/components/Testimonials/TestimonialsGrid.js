import { getTestimonials } from '@/lib/content';
import TestimonialsClient from './TestimonialsClient';

const STATIC_TESTIMONIALS = [
  { id: 1, patientName: 'Gunturu Raveendra', service: 'Laser & Root Canal', review: 'Meghna Dental clinic is the best laser & Root canal center in Tirupathi', rating: 5 },
  { id: 2, patientName: 'E Giridhar', service: 'General Dentistry', review: 'Way of treatment is good. Dr. Hemadri sir is having lot of patience and will give reply for all patient queries.', rating: 5 },
  { id: 3, patientName: 'Srivatsava Sharma', service: 'General Dentistry', review: 'I thank Dr Hemadri Sir for his excellent service. He explained about my problem in detail and provided excellent treatment. Highly recommended!', rating: 5 },
  { id: 4, patientName: 'Chaitanya Subba Reddy', service: 'Advanced Treatment', review: 'The treatment provided is excellent and supported by advanced technology. The doctor is highly dedicated and passionate.', rating: 5 },
  { id: 5, patientName: 'P Praveen', service: 'Root Canal Treatment', review: 'Dr Hemadri sir is having plenty of knowledge in his profession. I had root canal treatment from him, I am 100 percent satisfied.', rating: 5 },
  { id: 6, patientName: 'Ratna', service: 'General Dentistry', review: 'Best dental hospital in Tirupati. Treatment and maintenance are so good. Doctor and staff are very friendly!', rating: 5 },
];

export default async function TestimonialsGrid() {
  const rows = await getTestimonials();
  const testimonials = rows.length > 0 ? rows : STATIC_TESTIMONIALS;
  return <TestimonialsClient testimonials={testimonials} />;
}
