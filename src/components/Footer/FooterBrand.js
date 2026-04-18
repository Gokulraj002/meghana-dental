const socialLinks = [
  { icon: 'bi-facebook',  label: 'Facebook' },
  { icon: 'bi-instagram', label: 'Instagram' },
  { icon: 'bi-youtube',   label: 'YouTube' },
  { icon: 'bi-linkedin',  label: 'LinkedIn' },
  { icon: 'bi-twitter-x', label: 'Twitter' },
];

export default function FooterBrand() {
  return (
    <div className="col-lg-4">
      <div className="footer-brand">
        <h4>Meghana <span>Dental</span></h4>
      </div>
      <p className="footer-text">
        Meghana Dental Hospital is a premier super speciality dental centre
        dedicated to delivering world-class oral healthcare with the latest
        technology, expert doctors, and compassionate care.
      </p>
      <div className="footer-social">
        {socialLinks.map((s) => (
          <a key={s.label} href="#" aria-label={s.label}>
            <i className={`bi ${s.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
