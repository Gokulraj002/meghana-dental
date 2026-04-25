/**
 * JSON-LD structured data for Meghana Dental Hospital.
 * Implements: Dentist (LocalBusiness) + WebSite schemas.
 * Reads clinic info dynamically from siteSetting; falls back to safe defaults.
 */
import { getSettings } from '@/lib/settings';

export default async function SchemaMarkup() {
  const s = await getSettings();
  const siteUrl = s.site_url || 'https://meghanadental.in';
  const name = s.clinic_name || 'Meghana Dental Hospital';
  const phone = s.phone || '+91-98765-43210';
  const email = s.email || 'info@meghanadental.in';
  const address = s.address || 'No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501';
  const ratingValue = (s.google_rating || '4.9').replace('★', '').trim();
  const reviewCount = (s.reviews_count || '850').replace(/\D/g, '') || '850';
  const sameAs = [
    s.facebook_url, s.instagram_url, s.youtube_url, s.linkedin_url, s.twitter_url, s.google_maps_link,
  ].filter(Boolean);

  // Address parts (best effort split)
  const parts = address.split(',').map(p => p.trim());
  const streetAddress = parts.slice(0, parts.length - 2).join(', ') || address;
  const localityRaw = parts[parts.length - 2] || 'Tirupati';
  const regionPart = parts[parts.length - 1] || 'Andhra Pradesh 517501';
  const postal = (regionPart.match(/\d{6}/) || ['517501'])[0];
  const region = regionPart.replace(/\d{6}/, '').trim() || 'Andhra Pradesh';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Dentist', 'MedicalBusiness'],
        '@id': `${siteUrl}/#dentist`,
        name,
        alternateName: ['Meghana Dental', 'Meghana Dental Tirupati', 'Meghana Multispeciality Dental Hospital', 'Best Dental Clinic Tirupati'],
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: `${siteUrl}${s.logo_url || '/images/logo.png'}`, width: 200, height: 80 },
        image: [
          `${siteUrl}/images/about-clinic.png`,
          `${siteUrl}/images/dental-clinic-interior.jpg`,
          `${siteUrl}/images/microscope-use.jpg`,
        ],
        description: s.about_story || 'Super speciality dental centre in Tirupati with 17+ years of excellence. MDS specialists, microscope dentistry, implants, RCT, orthodontics & more.',
        telephone: phone,
        email,
        address: {
          '@type': 'PostalAddress',
          streetAddress,
          addressLocality: localityRaw,
          addressRegion: region,
          postalCode: postal,
          addressCountry: 'IN',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 13.6288, longitude: 79.4192 },
        hasMap: s.google_maps_link || 'https://www.google.com/maps/search/?api=1&query=Meghana+Dental+Hospital+Ashok+Nagar+Tirupati',
        sameAs: sameAs.length > 0 ? sameAs : [
          'https://www.facebook.com/meghanadental',
          'https://www.instagram.com/meghanadental',
          'https://www.youtube.com/@meghanadental',
        ],
        contactPoint: [
          { '@type': 'ContactPoint', telephone: phone, contactType: 'customer service', areaServed: 'IN', availableLanguage: ['English', 'Telugu', 'Hindi'] },
          { '@type': 'ContactPoint', telephone: phone, contactType: 'reservations', areaServed: 'IN', availableLanguage: ['English', 'Telugu'] },
        ],
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '14:00' },
        ],
        aggregateRating: { '@type': 'AggregateRating', ratingValue, reviewCount, bestRating: '5', worstRating: '1' },
        medicalSpecialty: ['Dentistry', 'Orthodontics', 'Endodontics', 'Periodontics', 'Prosthodontics', 'Pediatric Dentistry', 'Oral Surgery'],
        availableService: [
          { '@type': 'MedicalProcedure', name: 'Dental Implants', url: `${siteUrl}/services/dental-implants` },
          { '@type': 'MedicalProcedure', name: 'Root Canal Treatment', url: `${siteUrl}/services/root-canal` },
          { '@type': 'MedicalProcedure', name: 'Orthodontic Treatment', url: `${siteUrl}/services/orthodontics` },
          { '@type': 'MedicalProcedure', name: 'Clear Aligners', url: `${siteUrl}/services/aligners` },
          { '@type': 'MedicalProcedure', name: 'Teeth Whitening', url: `${siteUrl}/services/teeth-whitening` },
          { '@type': 'MedicalProcedure', name: 'Dentures & Prosthetics', url: `${siteUrl}/services/dentures` },
          { '@type': 'MedicalProcedure', name: 'Pediatric Dentistry', url: `${siteUrl}/services/pediatric-dentistry` },
          { '@type': 'MedicalProcedure', name: 'Microscope Dentistry', url: `${siteUrl}/services/microscope-dentistry` },
          { '@type': 'MedicalProcedure', name: 'Laser Dentistry', url: `${siteUrl}/services/laser-dentistry` },
          { '@type': 'MedicalProcedure', name: 'Gum Treatment', url: `${siteUrl}/services/gum-treatment` },
          { '@type': 'MedicalProcedure', name: 'Tooth Extraction', url: `${siteUrl}/services/tooth-extraction` },
          { '@type': 'MedicalProcedure', name: 'Dental Crowns & Bridges', url: `${siteUrl}/services/dental-crowns` },
          { '@type': 'MedicalProcedure', name: 'Full Mouth Rehabilitation', url: `${siteUrl}/services/full-mouth-rehab` },
          { '@type': 'MedicalProcedure', name: 'Smile Makeover', url: `${siteUrl}/services/smile-makeover` },
        ],
        areaServed: [
          { '@type': 'City', name: 'Tirupati' },
          { '@type': 'City', name: 'Tirumala' },
          { '@type': 'City', name: 'Chandragiri' },
          { '@type': 'City', name: 'Srikalahasti' },
          { '@type': 'City', name: 'Renigunta' },
          { '@type': 'City', name: 'Puttur' },
          { '@type': 'City', name: 'Chittoor' },
          { '@type': 'State', name: 'Andhra Pradesh' },
        ],
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking, EMI',
        foundingDate: '2009',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name,
        description: s.site_tagline || 'Best Dental Hospital in Tirupati, Andhra Pradesh',
        inLanguage: 'en-IN',
        publisher: { '@id': `${siteUrl}/#dentist` },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/services?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
