'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: "/gallery/clinic-board1.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 2,
    src: "/gallery/clinic-board2.png",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 3,
    src: "/gallery/clinic-board3.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 4,
    src: "/gallery/clinic-board4.png",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 5,
    src: "/gallery/clinic-board5.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 6,
    src: "/gallery/clinic-board6.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 7,
    src: "/gallery/clinic-board7.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 8,
    src: "/gallery/clinic-board8.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 9,
    src: "/gallery/clinic-board9.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 10,
    src: "/gallery/clinic-board10.png",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 11,
    src: "/gallery/clinic-board11.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 12,
    src: "/gallery/clinic-board12.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 13,
    src: "/gallery/clinic-board13.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 14,
    src: "/gallery/clinic-board14.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 15,
    src: "/gallery/clinic-board15.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 16,
    src: "/gallery/clinic-board16.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 17,
    src: "/gallery/clinic-board17.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },
  {
    id: 18,
    src: "/gallery/clinic-board18.jpg",
    alt: "Meghana Dental Clinic Board",
    title: "Meghana Dental Clinic",
  },

];

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage     = useCallback(() => setLightbox(i => (i - 1 + galleryImages.length) % galleryImages.length), []);
  const nextImage     = useCallback(() => setLightbox(i => (i + 1) % galleryImages.length), []);

  // Lock body scroll when lightbox is open so the overlay covers the full viewport
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const handle = (e) => {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  const current = lightbox !== null ? galleryImages[lightbox] : null;

  return (
    <section className="section-padding">
      <div className="container">

        {/* Section header */}
        <div className="section-header animate-fade-up">
          <span className="subtitle">PHOTO GALLERY</span>
          <h2>Explore Our Gallery</h2>
          <p>
            A glimpse into our modern clinic, advanced technology,
            expert team, and real patient smile transformations.
          </p>
        </div>

        {/* Image grid — all cards fixed same height via objectFit cover */}
        <div className="row g-3">
          {galleryImages.map((img, idx) => (
            <div key={`${img.id}-${idx}`} className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="gallery-card"
                onClick={() => setLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setLightbox(idx)}
                aria-label={`View ${img.title}`}
              >
                <div className="gallery-card-img-wrap">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={480}
                    height={320}
                    style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-zoom">
                      <i className="bi bi-zoom-in" />
                    </div>
                    <p className="gallery-card-title">{img.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {current && (
        <div className="gallery-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image lightbox">
          <button className="gallery-lb-close" onClick={closeLightbox} aria-label="Close">
            <i className="bi bi-x-lg" />
          </button>

          <button
            className="gallery-lb-nav gallery-lb-nav--prev"
            onClick={e => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left" />
          </button>

          <div className="gallery-lb-content" onClick={e => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={1200}
              height={800}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px' }}
              priority
            />
            <div className="gallery-lb-caption">
              <span className="gallery-lb-badge">
                <i className="bi bi-images me-1" />
                Meghana Dental
              </span>
              <p>{current.title}</p>
              <small>{lightbox + 1} / {galleryImages.length}</small>
            </div>
          </div>

          <button
            className="gallery-lb-nav gallery-lb-nav--next"
            onClick={e => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      )}
    </section>
  );
}
