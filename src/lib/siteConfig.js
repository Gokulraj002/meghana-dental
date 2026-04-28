/**
 * ─────────────────────────────────────────────────────
 *  SITE CONFIG — Single source of truth for clinic info
 *  Edit this ONE file to update phone / address / hours
 *  across the entire website.
 * ─────────────────────────────────────────────────────
 */

export const SITE = {
  /* ── Clinic identity ── */
  name:      'Meghana Dental Hospital',
  shortName: 'Meghana Dental',
  tagline:   'Best Dental Clinic in Tirupati',
  founded:   '2009',
  experience: '17+',
  patients:  '50,000+',

  /* ── Contact ── */
  phone: {
    primary:          '7893327036',
    primaryFormatted: '+91 7893327036',
    primaryTel:       '+917893327036',     // tel: href value
    landline:         '08772248330',
    landlineTel:      '08772248330',
    whatsapp:         '917893327036',      // wa.me value (no +)
  },
  email: 'info@meghanadental.in',

  /* ── Address ── */
  address: {
    street:  'No. 18-2-91B, Ashok Nagar',
    city:    'Tirupati',
    state:   'Andhra Pradesh',
    pincode: '517501',
    country: 'IN',
    full:    'No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501',
  },

  /* ── Opening hours ── */
  hours: {
    weekdays:      'Mon–Sat: 9:00 AM – 8:00 PM',
    sunday:        'Sunday: 10:00 AM – 2:00 PM',
    weekdaysOpen:  '09:00',
    weekdaysClose: '20:00',
    sundayOpen:    '10:00',
    sundayClose:   '14:00',
  },

  /* ── Location ── */
  geo: { lat: 13.6288, lng: 79.4192 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Meghana+Dental+Hospital+Ashok+Nagar+Tirupati',

  /* ── Online presence ── */
  baseUrl: 'https://meghanadental.in',
  logo:    '/images/logo.png',
  ogImage: '/images/about-clinic.png',

  /* ── Ratings ── */
  rating: { value: '4.9', count: '850' },

  /* ── Social links ── */
  social: {
    facebook:  'https://www.facebook.com/meghanadental',
    instagram: 'https://www.instagram.com/meghanadental',
    youtube:   'https://www.youtube.com/@meghanadental',
    justdial:  'https://www.justdial.com/Tirupati/Meghana-Dental-Hospital',
  },
};
