import Image from 'next/image';
import Link from 'next/link';

export default function NavBrand() {
  return (
    <Link className="navbar-brand-custom" href="/" style={{ cursor: 'pointer' }}>
      <Image
        src="/images/meghana-mascot.jpg"
        alt="Meghana Dental"
        width={82}
        height={62}
        style={{ borderRadius: '10px', cursor: 'pointer' }}
      />
      <h4>Meghana <span>Dental</span></h4>
    </Link>
  );
}
