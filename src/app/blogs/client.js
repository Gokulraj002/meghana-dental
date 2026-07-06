'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogListClient({ initialBlogs = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const sortedBlogs = [...initialBlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date) || b.id - a.id
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="blogs-listing-page">
      {/* Hero */}
      <div className="blogs-hero">
        <div className="container">
          <div className="section-header mb-0">
            <span
              className="subtitle"
              style={{
                background: 'rgba(255,255,255,0.15)',
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
              }}
            >
              KNOWLEDGE HUB
            </span>
            <h1 style={{ color: '#fff', fontSize: '2.8rem', marginTop: '12px' }}>
              Dental Health{' '}
              <span style={{ color: 'var(--primary-light)' }}>Blog</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              Expert advice, treatment guides, and oral health tips from our specialist team
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Blog Cards */}
        {currentBlogs.length > 0 ? (
          <div className="row g-4">
            {currentBlogs.map(blog => (
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
        ) : (
          <div className="text-center py-5">
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
                className="bi bi-journal-x"
                style={{ fontSize: '2rem', color: 'var(--primary)' }}
              ></i>
            </div>
            <h4 style={{ color: 'var(--text-heading)' }}>No articles found</h4>
            <p style={{ color: 'var(--text-muted)' }}>
              New content is on its way — check back soon!
            </p>
          </div>
        )}

        {/* Pagination */}
        {initialBlogs.length > blogsPerPage && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center gap-2">
              {Array.from({
                length: Math.ceil(initialBlogs.length / blogsPerPage),
              }).map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link blog-page-btn"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
