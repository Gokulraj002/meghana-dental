import { SITE } from '@/lib/siteConfig';
import { SERVICES } from '@/lib/services';

export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Dentist', 'MedicalBusiness'],
        '@id': `${SITE.baseUrl}/#dentist`,
        name: SITE.name,
        alternateName: [
          SITE.shortName,
          'Meghana Dental Tirupati',
          'Meghana Multispeciality Dental Hospital',
          'Best Dental Clinic Tirupati',
        ],
        url: SITE.baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE.baseUrl}${SITE.logo}`,
          width: 200,
          height: 80,
        },
        image: [
          `${SITE.baseUrl}/images/about-clinic.png`,
          `${SITE.baseUrl}/images/dental-clinic-interior.jpg`,
          `${SITE.baseUrl}/images/microscope-use.jpg`,
        ],
        description:
          `${SITE.name} is a super speciality dental centre in ${SITE.address.city}, ${SITE.address.state} with ${SITE.experience} years of excellence. Expert MDS specialists, dental microscope with 25× magnification dentistry, dental implants, root canal, orthodontics, clear aligners, pediatric dentistry and full mouth rehabilitation.`,
        telephone: `+91-${SITE.phone.primary}`,
        email: SITE.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.pincode,
          addressCountry: SITE.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        hasMap: SITE.mapsUrl,
        sameAs: [
          SITE.mapsUrl,
          SITE.social.facebook,
          SITE.social.instagram,
          SITE.social.youtube,
          SITE.social.justdial,
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: `+91-${SITE.phone.primary}`,
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: ['English', 'Telugu', 'Hindi'],
          },
          {
            '@type': 'ContactPoint',
            telephone: `+91-${SITE.phone.primary}`,
            contactType: 'reservations',
            areaServed: 'IN',
            availableLanguage: ['English', 'Telugu'],
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: SITE.hours.weekdaysOpen,
            closes: SITE.hours.weekdaysClose,
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: SITE.hours.sundayOpen,
            closes: SITE.hours.sundayClose,
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: SITE.rating.value,
          reviewCount: SITE.rating.count,
          bestRating: '5',
          worstRating: '1',
        },
        medicalSpecialty: [
          'Dentistry', 'Orthodontics', 'Endodontics',
          'Periodontics', 'Prosthodontics', 'Pediatric Dentistry', 'Oral Surgery',
        ],
        availableService: SERVICES.map((s) => ({
          '@type': 'MedicalProcedure',
          name: s.title,
          url: `${SITE.baseUrl}/services/${s.slug}`,
        })),
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
        foundingDate: SITE.founded,
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.baseUrl}/#website`,
        url: SITE.baseUrl,
        name: SITE.name,
        description: `Best Dental Hospital in ${SITE.address.city}, ${SITE.address.state}`,
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE.baseUrl}/#dentist` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE.baseUrl}/services?q={search_term_string}`,
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
