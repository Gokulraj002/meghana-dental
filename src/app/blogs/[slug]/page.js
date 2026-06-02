import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import blogsData from '@/data/blogs.json';
import meta from '@/data/blogs-meta.json';

import May07 from '@/components/Blogs/May2026/May07';
import May07b from '@/components/Blogs/May2026/May07b';
import May07c from '@/components/Blogs/May2026/May07c';

const BlogComponents = {
  may07: May07,
  may07b: May07b,
  may07c: May07c,
};

export const dynamicParams = false;

export function generateStaticParams() {
  const params = blogsData.map(post => ({ slug: post.slug }));
  // Ensures the route builds cleanly even before the first blog is added
  return params.length > 0 ? params : [{ slug: '__placeholder__' }];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (slug === '__placeholder__') return {};

  const blog = meta.find(post => post.slug === slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: { canonical: `https://meghanadental.in/blogs/${blog.slug}` },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://meghanadental.in/blogs/${blog.slug}`,
      type: 'article',
      images: [
        {
          url: blog.image || '/images/about-clinic.png',
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      siteName: 'Meghana Multi Speciality Dental Hospital',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image || '/images/about-clinic.png'],
    },
    robots: { index: true, follow: true },
    authors: [{ name: 'Meghana Multi Speciality Dental Hospital' }],
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  // Placeholder route used only to satisfy static-export build requirements
  if (slug === '__placeholder__') return notFound();

  const blog = blogsData.find(post => post.slug === slug);
  if (!blog) return notFound();

  const BlogComponent = BlogComponents[blog.componentKey.toLowerCase()];

  const blogMeta = meta.find(post => post.slug === slug) || {};
  const blogUrl = `https://meghanadental.in/blogs/${blog.slug}`;
  const blogImage = `https://meghanadental.in${blogMeta.image || '/images/about-clinic.png'}`;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': blogUrl },
    headline: blogMeta.title || blog.slug,
    description: blogMeta.description || '',
    image: [blogImage],
    datePublished: blogMeta.date,
    dateModified: blogMeta.date,
    author: {
      '@type': 'Organization',
      name: 'Meghana Multi Speciality Dental Hospital',
      url: 'https://meghanadental.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Meghana Multi Speciality Dental Hospital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://meghanadental.in/images/logo.png',
      },
    },
    articleSection: blogMeta.category,
    keywords: blogMeta.keywords,
    inLanguage: 'en-IN',
  };

  if (!BlogComponent) {
    return (
      <>
        <Navbar />
        <div
          className="container text-center"
          style={{ minHeight: '60vh', paddingTop: '120px' }}
        >
          <h2>Article content not found</h2>
          <p>We could not load the requested article. Please try again later.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <BlogComponent />
      </div>
      <Footer />
    </>
  );
}
