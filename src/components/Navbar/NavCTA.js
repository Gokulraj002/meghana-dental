import Link from 'next/link';

export default function NavCTA() {
  return (
    <Link href="/contact" className="btn-appointment pulse-btn">
      <i className="bi bi-calendar-check"></i>
      Book Appointment
    </Link>
  );
}
