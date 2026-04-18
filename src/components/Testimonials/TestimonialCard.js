export default function TestimonialCard({ testimonial }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="testimonial-card">
        <div className="testimonial-stars">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="bi bi-star-fill"></i>
          ))}
        </div>
        <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">{testimonial.initial}</div>
          <div>
            <h5>{testimonial.name}</h5>
            <p>{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
