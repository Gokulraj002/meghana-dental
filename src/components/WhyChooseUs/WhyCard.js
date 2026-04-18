export default function WhyCard({ icon, title, desc }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="wcu-card">
        <div className="wcu-card-icon">{icon}</div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
