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
        '@type': 'Dentist',
        '@id': 'https://meghanadental.com/#dentist',
        name: 'Meghana Dental Hospital',
        alternateName: ['Meghana Dental', 'Meghana Dental Tirupati'],
        url: 'https://meghanadental.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://meghanadental.com/images/logo.png',
          width: 200,
          height: 80,
        },
        image: 'https://meghanadental.com/images/about-clinic.png',
        description:
          'Meghana Dental Hospital is a super speciality dental centre in Tirupati, Andhra Pradesh with 15+ years of excellence. Expert MDS specialists, Carl Zeiss microscope dentistry, dental implants, root canal, orthodontics, clear aligners, pediatric dentistry and full mouth rehabilitation.',
        telephone: '+91-98765-43210',
        email: 'info@meghanadental.com',
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
          { '@type': 'MedicalProcedure', name: 'Dental Implants', url: 'https://meghanadental.com/services/dental-implants' },
          { '@type': 'MedicalProcedure', name: 'Root Canal Treatment', url: 'https://meghanadental.com/services/root-canal' },
          { '@type': 'MedicalProcedure', name: 'Orthodontic Treatment', url: 'https://meghanadental.com/services/orthodontics' },
          { '@type': 'MedicalProcedure', name: 'Clear Aligners', url: 'https://meghanadental.com/services/aligners' },
          { '@type': 'MedicalProcedure', name: 'Teeth Whitening', url: 'https://meghanadental.com/services/teeth-whitening' },
          { '@type': 'MedicalProcedure', name: 'Dentures & Prosthetics', url: 'https://meghanadental.com/services/dentures' },
          { '@type': 'MedicalProcedure', name: 'Pediatric Dentistry', url: 'https://meghanadental.com/services/pediatric-dentistry' },
          { '@type': 'MedicalProcedure', name: 'Microscope Dentistry', url: 'https://meghanadental.com/services/microscope-dentistry' },
        ],
        areaServed: [
          { '@type': 'City', 'name': 'Tirupati' },
          { '@type': 'City', 'name': 'Tirumala' },
          { '@type': 'City', 'name': 'Chandragiri' },
          { '@type': 'City', 'name': 'Srikalahasti' },
          { '@type': 'State', 'name': 'Andhra Pradesh' },
        ],
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Net Banking',
        foundingDate: '2009',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://meghanadental.com/#website',
        url: 'https://meghanadental.com',
        name: 'Meghana Dental Hospital',
        description: 'Best Dental Hospital in Tirupati, Andhra Pradesh',
        inLanguage: 'en-IN',
        publisher: { '@id': 'https://meghanadental.com/#dentist' },
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
