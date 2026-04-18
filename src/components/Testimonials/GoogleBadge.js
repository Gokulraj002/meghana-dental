export default function GoogleBadge() {
  return (
    <div className="text-center">
      <div className="google-review-badge">
        <div className="rating-number">4.9</div>
        <div>
          <div style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>★★★★★</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            850+ Google Reviews
          </div>
        </div>
      </div>
    </div>
  );
}
