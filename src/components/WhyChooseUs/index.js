'use client';

import StatsBar from './StatsBar';
import WhyCard from './WhyCard';

const reasons = [
  {
    icon: '🔬',
    title: 'Microscope-Guided',
    desc: 'Carl Zeiss dental microscopes for 25x magnification — see more, treat better, and achieve superior outcomes in root canals and microsurgery.',
  },
  {
    icon: '💉',
    title: 'Painless Procedures',
    desc: 'Advanced anesthesia techniques and gentle procedures ensure a comfortable, anxiety-free dental experience for every patient.',
  },
  {
    icon: '🏆',
    title: 'Award-Winning Care',
    desc: 'Recognized as one of the top dental hospitals in Andhra Pradesh with 4.9★ Google rating from 850+ verified patient reviews.',
  },
  {
    icon: '⏰',
    title: 'Single-Sitting RCT',
    desc: 'Complete your root canal treatment in just one visit with our advanced rotary endodontic technology. Save time without compromising quality.',
  },
  {
    icon: '👨‍⚕️',
    title: 'MDS Specialists',
    desc: 'Every treatment is handled by qualified MDS specialists — not general dentists — for the highest quality and precision.',
  },
  {
    icon: '🛡️',
    title: 'Sterilization Standards',
    desc: 'International-grade sterilization protocols and infection control standards to keep you and your family safe.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section section-padding">
      <div className="container">
        <StatsBar />
        <div className="section-header" style={{ marginTop: '60px' }}>
          <span className="subtitle">WHY CHOOSE US</span>
          <h2>What Sets Us Apart</h2>
          <p>
            At Meghana Dental, we combine clinical excellence with compassionate
            care to deliver dental experiences that exceed expectations.
          </p>
        </div>
        <div className="row g-4">
          {reasons.map((r, i) => (
            <WhyCard key={i} icon={r.icon} title={r.title} desc={r.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
