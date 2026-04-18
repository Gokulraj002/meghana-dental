export default function FacilityCard({ facility }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="fc-card">
        {/* Gradient hover fill */}
        <div className="fc-fill" style={{ background: facility.gradient }} aria-hidden="true" />

        {/* Layout: icon left, content right */}
        <div className="fc-inner">
          <div className="fc-icon" style={{ background: facility.gradient }}>
            <i className={`bi ${facility.icon}`} />
          </div>
          <div className="fc-body">
            <h5 className="fc-title">{facility.title}</h5>
            <p className="fc-desc">{facility.desc}</p>
            <span className="fc-spec" style={{ color: facility.accent }}>
              <i className="bi bi-check-circle-fill" /> {facility.spec}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
