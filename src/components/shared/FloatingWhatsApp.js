'use client';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Meghana%20Dental%20Hospital%20Tirupati."
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-whatsapp" style={{ fontSize: '1.6rem' }} />
    </a>
  );
}
