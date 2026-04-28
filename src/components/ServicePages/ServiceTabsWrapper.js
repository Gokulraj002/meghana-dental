import ServicePageLayout from './ServicePageLayout';

export default function ServiceTabsWrapper({ tabs }) {
  return (
    <div className="spt-root">

      {/* ── Tab Navigation Bar ── */}
      <div className="spt-nav-wrap">
        <div className="container">
          <ul className="spt-nav" id="serviceTabNav" role="tablist">
            {tabs.map((tab, i) => (
              <li key={tab.id} role="presentation">
                <button
                  className={`spt-nav-btn ${i === 0 ? 'active' : ''}`}
                  id={`${tab.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={String(i === 0)}
                  style={{ '--tab-accent': tab.data.accent }}
                >
                  <span className="spt-btn-icon">
                    <i className={`bi ${tab.icon}`} />
                  </span>
                  <span className="spt-btn-label">{tab.label}</span>
                  {tab.badge && (
                    <span className="spt-badge" style={{ background: tab.data.accent }}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Tab Content Panels ── */}
      <div className="tab-content">
        {tabs.map((tab, i) => (
          <div
            className={`tab-pane fade ${i === 0 ? 'show active' : ''}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            key={tab.id}
          >
            <ServicePageLayout data={tab.data} />
          </div>
        ))}
      </div>

    </div>
  );
}
