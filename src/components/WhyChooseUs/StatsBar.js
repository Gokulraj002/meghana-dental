import Counter from './Counter';

export default function StatsBar() {
  return (
    <div className="wcu-stats-bar">
      <div className="wcu-stat-item">
        <div className="wcu-stat-number"><Counter target={50} suffix="K+" /></div>
        <div className="wcu-stat-label">Patients Treated</div>
      </div>
      <div className="wcu-stat-divider"></div>
      <div className="wcu-stat-item">
        <div className="wcu-stat-number"><Counter target={15} suffix="+" /></div>
        <div className="wcu-stat-label">Years of Trust</div>
      </div>
      <div className="wcu-stat-divider"></div>
      <div className="wcu-stat-item">
        <div className="wcu-stat-number"><Counter target={6} /></div>
        <div className="wcu-stat-label">MDS Specialists</div>
      </div>
      <div className="wcu-stat-divider"></div>
      <div className="wcu-stat-item">
        <div className="wcu-stat-number"><Counter target={4} suffix=".9" /></div>
        <div className="wcu-stat-label">Google Rating</div>
      </div>
    </div>
  );
}
