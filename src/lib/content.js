/**
 * Centralised, cached content fetchers.
 *
 * Caching strategy:
 *  • PRODUCTION  — two layers:
 *      1. unstable_cache  → cross-request, persisted to disk in .next/cache.
 *         Stays fresh because every admin write calls revalidateTag(tag).
 *         Safety-net TTL: 1 h.
 *      2. React cache()   → per-request dedup (single render = 1 DB hit max).
 *  • DEVELOPMENT — React cache() only.
 *      unstable_cache persists stale values across server restarts in dev, making
 *      it feel broken when the DB is edited directly. Skip it in dev so every
 *      request always gets live data.
 *
 * Error handling:
 *   The try/catch is placed INSIDE the cached function (not outside it).
 *   This prevents unstable_cache from logging the error internally before
 *   a wrapper has a chance to catch it. When the DB is unavailable the
 *   cached function quietly returns the fallback value so the build succeeds
 *   and the site renders with the static defaults already in the components.
 *
 * Tags (used by admin write handlers via revalidateTag):
 *   settings · menu · seo · services · doctors · testimonials · faqs ·
 *   gallery · partners · problems · facilities · quotes · about-features ·
 *   hero-stats · marquee
 */
import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import prisma from './prisma';

const IS_DEV = process.env.NODE_ENV === 'development';
const REVALIDATE = 3600; // seconds (production only)

/**
 * In production: wrap with unstable_cache (disk-backed, tag-invalidatable).
 * In dev:        return the function unchanged — React cache() handles dedup.
 */
const withCache = (fn, keys, tag) =>
  IS_DEV
    ? fn
    : unstable_cache(fn, keys, { tags: [tag], revalidate: REVALIDATE });

/* -------------------------------------------------------------------------- */
/*  SETTINGS                                                                  */
/* -------------------------------------------------------------------------- */
export const getSettings = cache(
  withCache(
    async () => {
      try {
        const rows = await prisma.siteSetting.findMany();
        return Object.fromEntries(rows.map(r => [r.settingKey, r.settingValue]));
      } catch {
        return {};
      }
    },
    ['settings:all'],
    'settings'
  )
);

/* -------------------------------------------------------------------------- */
/*  MENU                                                                      */
/* -------------------------------------------------------------------------- */
export const getMenu = cache(
  withCache(
    async (location) => {
      try {
        return await prisma.menuItem.findMany({
          where: { location, isActive: true },
          orderBy: { sortOrder: 'asc' },
        });
      } catch {
        return [];
      }
    },
    ['menu:by-location'],
    'menu'
  )
);

/* -------------------------------------------------------------------------- */
/*  SEO                                                                       */
/* -------------------------------------------------------------------------- */
export const getSeo = cache(
  withCache(
    async (pageKey) => {
      try {
        return await prisma.seoMeta.findUnique({ where: { pageKey } });
      } catch {
        return null;
      }
    },
    ['seo:by-key'],
    'seo'
  )
);

/* -------------------------------------------------------------------------- */
/*  Generic active-list helper                                                */
/* -------------------------------------------------------------------------- */
const list = (model, tag, opts = {}) => {
  const fn = withCache(
    async () => {
      try {
        return await prisma[model].findMany({
          where: { isActive: true },
          orderBy: opts.orderBy || [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
        });
      } catch {
        return [];
      }
    },
    [`${tag}:active`],
    tag
  );
  return cache(fn);
};

export const getServices      = list('service',      'services');
export const getDoctors       = list('doctor',       'doctors');
export const getTestimonials  = list('testimonial',  'testimonials', { orderBy: { createdAt: 'desc' } });
export const getFaqs          = list('faq',          'faqs');
export const getGalleryImages = list('gallery',      'gallery');
export const getPartners      = list('partner',      'partners');
export const getProblems      = list('problem',      'problems');
export const getFacilities    = list('facility',     'facilities');
export const getQuotes        = list('quote',        'quotes');
export const getAboutFeatures = list('aboutFeature', 'about-features');
export const getHeroStats     = list('heroStat',     'hero-stats');
export const getMarqueeItems  = list('marqueeItem',  'marquee');
