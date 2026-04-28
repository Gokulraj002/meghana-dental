'use client';
import { SITE } from '@/lib/siteConfig';

export default function FloatingWhatsApp() {
  const msg = encodeURIComponent(
    `Hello! I'd like to book an appointment at ${SITE.name} ${SITE.address.city}.`
  );
  return (
    <a
      href={`https://wa.me/${SITE.phone.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp" style={{ fontSize: '1.6rem' }} />
    </a>
  );
}
