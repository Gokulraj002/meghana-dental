/**
 * JSON-LD structured data for Meghana Dental Hospital.
 * Implements: Dentist (LocalBusiness) + WebSite schemas.
 * Placed in <head> via Next.js App Router layout.
 */
export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Dentist', 'MedicalBusiness'],
        '@id': 'https://meghanadental.in/#dentist',
        name: 'Meghana Dental Hospital',
        alternateName: [
          'Meghana Dental',
          'Meghana Dental Tirupati',
          'Meghana Multispeciality Dental Hospital',
          'Best Dental Clinic Tirupati',
        ],
        url: 'https://meghanadental.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://meghanadental.in/images/logo.png',
          width: 200,
          height: 80,
        },
        image: [
          'https://meghanadental.in/images/about-clinic.png',
          'https://meghanadental.in/images/dental-clinic-interior.jpg',
          'https://meghanadental.in/images/microscope-use.jpg',
        ],
        description:
          'Meghana Dental Hospital is a super speciality dental centre in Tirupati, Andhra Pradesh with 17+ years of excellence. Expert MDS specialists, dental microscope with 25× magnification dentistry, dental implants, root canal, orthodontics, clear aligners, pediatric dentistry and full mouth rehabilitation.',
        telephone: '+91-98765-43210',
        email: 'info@meghanadental.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'No. 18-2-91B, Ashok Nagar',
          addressLocality: 'Tirupati',
          addressRegion: 'Andhra Pradesh',
          postalCode: '517501',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 13.6288,
          longitude: 79.4192,
        },
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Meghana+Dental+Hospital+Ashok+Nagar+Tirupati',
        sameAs: [
          'https://www.google.com/maps/search/?api=1&query=Meghana+Dental+Hospital+Tirupati',
          'https://www.facebook.com/meghanadental',
          'https://www.instagram.com/meghanadental',
          'https://www.youtube.com/@meghanadental',
          'https://www.justdial.com/Tirupati/Meghana-Dental-Hospital',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-98765-43210',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: ['English', 'Telugu', 'Hindi'],
            contactOption: 'TollFree',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+91-98765-43210',
            contactType: 'reservations',
            areaServed: 'IN',
            availableLanguage: ['English', 'Telugu'],
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '10:00',
            closes: '14:00',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '850',
          bestRating: '5',
          worstRating: '1',
        },
        medicalSpecialty: [
          'Dentistry',
          'Orthodontics',
          'Endodontics',
          'Periodontics',
          'Prosthodontics',
          'Pediatric Dentistry',
          'Oral Surgery',
        ],
        availableService: [
          { '@type': 'MedicalProcedure', name: 'Dental Implants', url: 'https://meghanadental.in/services/dental-implants' },
          { '@type': 'MedicalProcedure', name: 'Root Canal Treatment', url: 'https://meghanadental.in/services/root-canal' },
          { '@type': 'MedicalProcedure', name: 'Orthodontic Treatment', url: 'https://meghanadental.in/services/orthodontics' },
          { '@type': 'MedicalProcedure', name: 'Clear Aligners', url: 'https://meghanadental.in/services/aligners' },
          { '@type': 'MedicalProcedure', name: 'Teeth Whitening', url: 'https://meghanadental.in/services/teeth-whitening' },
          { '@type': 'MedicalProcedure', name: 'Dentures & Prosthetics', url: 'https://meghanadental.in/services/dentures' },
          { '@type': 'MedicalProcedure', name: 'Pediatric Dentistry', url: 'https://meghanadental.in/services/pediatric-dentistry' },
          { '@type': 'MedicalProcedure', name: 'Microscope Dentistry', url: 'https://meghanadental.in/services/microscope-dentistry' },
          { '@type': 'MedicalProcedure', name: 'Laser Dentistry', url: 'https://meghanadental.in/services/laser-dentistry' },
          { '@type': 'MedicalProcedure', name: 'Gum Treatment', url: 'https://meghanadental.in/services/gum-treatment' },
          { '@type': 'MedicalProcedure', name: 'Tooth Extraction', url: 'https://meghanadental.in/services/tooth-extraction' },
          { '@type': 'MedicalProcedure', name: 'Dental Crowns & Bridges', url: 'https://meghanadental.in/services/dental-crowns' },
          { '@type': 'MedicalProcedure', name: 'Full Mouth Rehabilitation', url: 'https://meghanadental.in/services/full-mouth-rehab' },
          { '@type': 'MedicalProcedure', name: 'Smile Makeover', url: 'https://meghanadental.in/services/smile-makeover' },
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
        '@id': 'https://meghanadental.in/#website',
        url: 'https://meghanadental.in',
        name: 'Meghana Dental Hospital',
        description: 'Best Dental Hospital in Tirupati, Andhra Pradesh',
        inLanguage: 'en-IN',
        publisher: { '@id': 'https://meghanadental.in/#dentist' },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://meghanadental.in/services?q={search_term_string}',
          },
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
