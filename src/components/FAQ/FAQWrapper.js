import { getFaqs } from '@/lib/content';
import FAQSection from './index';

const STATIC_FAQS = [
  { id: 1, question: 'Is root canal treatment painful?', answer: 'No. At Meghana Dental Hospital, we use advanced local anesthesia techniques combined with our dental microscope with 25× magnification for precision. Most patients feel little to no discomfort. We also offer single-sitting RCT.' },
  { id: 2, question: 'How long do dental implants last?', answer: 'Dental implants are designed to be permanent — with proper care, they can last a lifetime. The titanium post fuses with your jawbone creating a stable, natural-feeling tooth.' },
  { id: 3, question: 'At what age can my child get braces?', answer: 'Orthodontic treatment can typically begin around age 10–14. Early consultation at age 7–8 helps identify developing issues. Adults can get braces or clear aligners at any age.' },
  { id: 4, question: 'How often should I visit the dentist?', answer: 'We recommend a dental check-up every 6 months. Regular visits help detect problems early before they become serious.' },
  { id: 5, question: 'Do you offer EMI options?', answer: 'Yes. We offer flexible payment plans and zero-cost EMI on major treatments including implants, orthodontics, and full-mouth rehabilitation.' },
  { id: 6, question: 'What is microscope dentistry?', answer: 'Microscope dentistry uses a dental microscope with up to 25× magnification for far greater precision — better outcomes with minimal damage to healthy tooth structure.' },
];

export default async function FAQWrapper() {
  const rows = await getFaqs();
  const faqs = rows.length > 0 ? rows : STATIC_FAQS;
  return <FAQSection faqs={faqs} />;
}
