import Link from 'next/link';
import FooterBrand from './FooterBrand';
import FooterQuickLinks from './FooterQuickLinks';
import FooterServices from './FooterServices';
import FooterContact from './FooterContact';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row g-5">
          <FooterBrand />
          <FooterQuickLinks />
          <FooterServices />
          <FooterContact />
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Meghana Dental Hospital. All Rights Reserved.
            &nbsp;·&nbsp; No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501
          </p>
          <div className="footer-legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
