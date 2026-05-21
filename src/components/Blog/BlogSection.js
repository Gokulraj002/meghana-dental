import Link from 'next/link';
import Image from 'next/image';
import blogsData from '@/data/blogs.json';

export default function BlogSection() {
  const blogs = blogsData.slice(0, 3);

  return (
    <section className="blog-preview-section section-padding">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">OUR BLOG</span>
          <h2>
            Dental Health <span style={{ color: 'var(--primary)' }}>Insights</span>
          </h2>
          <p>Expert advice, treatment guides, and oral health tips from our specialist team.</p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-4">
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--primary-50)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <i
                className="bi bi-pencil-square"
                style={{ fontSize: '2rem', color: 'var(--primary)' }}
              ></i>
            </div>
            <h4 style={{ color: 'var(--text-heading)', marginBottom: '10px' }}>
              New Articles Coming Soon
            </h4>
            <p
              style={{
                color: 'var(--text-muted)',
                maxWidth: '400px',
                margin: '0 auto 24px',
              }}
            >
              We&apos;re crafting expert dental health content for you. Check back soon!
            </p>
            <Link
              href="/blogs"
              className="btn-hero-primary"
              style={{ textDecoration: 'none' }}
            >
              <i className="bi bi-journal-richtext"></i> Visit Our Blog
            </Link>
          </div>
        ) : (
          <>
            <div className="row g-4">
              {blogs.map(blog => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <Link href={`/blogs/${blog.slug}`} className="blog-card-link">
                    <div className="blog-card">
                      <div className="blog-card-img">
                        <Image
                          src={blog.image || '/images/about-clinic.png'}
                          alt={blog.title}
                          width={400}
                          height={220}
                          style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                        />
                        <span className="blog-category-tag">{blog.category}</span>
                      </div>
                      <div className="blog-card-body">
                        <h5 className="blog-title">{blog.title}</h5>
                        <p className="blog-desc">{blog.description}</p>
                        <span className="blog-read-more">
                          Read Article <i className="bi bi-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link
                href="/blogs"
                className="btn-hero-primary"
                style={{ textDecoration: 'none' }}
              >
                <i className="bi bi-journal-richtext"></i> View All Articles
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
