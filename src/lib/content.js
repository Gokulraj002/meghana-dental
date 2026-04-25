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

/** Wrap fn so it silently returns `fallback` on any error. */
const safe = (fn, fallback) => async (...args) => {
  try { return await fn(...args); } catch { return fallback; }
};

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
  safe(
    withCache(
      async () => {
        const rows = await prisma.siteSetting.findMany();
        return Object.fromEntries(rows.map(r => [r.settingKey, r.settingValue]));
      },
      ['settings:all'],
      'settings'
    ),
    {}
  )
);

/* -------------------------------------------------------------------------- */
/*  MENU                                                                      */
/* -------------------------------------------------------------------------- */
export const getMenu = cache(
  safe(
    withCache(
      async (location) =>
        prisma.menuItem.findMany({
          where: { location, isActive: true },
          orderBy: { sortOrder: 'asc' },
        }),
      ['menu:by-location'],
      'menu'
    ),
    []
  )
);

/* -------------------------------------------------------------------------- */
/*  SEO                                                                       */
/* -------------------------------------------------------------------------- */
export const getSeo = cache(
  safe(
    withCache(
      async (pageKey) => prisma.seoMeta.findUnique({ where: { pageKey } }),
      ['seo:by-key'],
      'seo'
    ),
    null
  )
);

/* -------------------------------------------------------------------------- */
/*  Generic active-list helper                                                */
/* -------------------------------------------------------------------------- */
const list = (model, tag, opts = {}) => {
  const fn = withCache(
    async () =>
      prisma[model].findMany({
        where: { isActive: true },
        orderBy: opts.orderBy || [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
      }),
    [`${tag}:active`],
    tag
  );
  return cache(safe(fn, []));
};

export const getServices       = list('service',       'services');
export const getDoctors        = list('doctor',        'doctors');
export const getTestimonials   = list('testimonial',   'testimonials', { orderBy: { createdAt: 'desc' } });
export const getFaqs           = list('faq',           'faqs');
export const getGalleryImages  = list('gallery',       'gallery');
export const getPartners       = list('partner',       'partners');
export const getProblems       = list('problem',       'problems');
export const getFacilities     = list('facility',      'facilities');
export const getQuotes         = list('quote',         'quotes');
export const getAboutFeatures  = list('aboutFeature',  'about-features');
export const getHeroStats      = list('heroStat',      'hero-stats');
export const getMarqueeItems   = list('marqueeItem',   'marquee');
