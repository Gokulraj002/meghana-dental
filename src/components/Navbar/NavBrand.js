import Image from 'next/image';
import Link from 'next/link';

export default function NavBrand() {
  return (
    <Link className="navbar-brand-custom" href="/">
      <Image
        src="/images/meghana-mascot.jpg"
        alt="Meghana Dental"
        width={62}
        height={62}
        style={{ borderRadius: '10px' }}
      />
      <h4>Meghana <span>Dental</span></h4>
    </Link>
  );
}
