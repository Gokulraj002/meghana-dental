import Image from 'next/image';
import Link from 'next/link';

export default function NavBrand() {
  return (
    <Link className="navbar-brand-custom" href="/" style={{ cursor: 'pointer' }}>
      <Image
        src="/images/meghana-mascot.jpg"
        alt="Meghana Multi Speciality Dental Hospital"
        width={82}
        height={66}
        priority
        style={{ borderRadius: '10px', cursor: 'pointer', height: 'auto' }}
      />
      <h4>Meghana <span>Dental</span></h4>
    </Link>
  );
}
