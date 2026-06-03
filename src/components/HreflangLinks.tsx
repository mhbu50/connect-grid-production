import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://connectgrid.com';

/**
 * HREFLANG — KNOWN LIMITATION
 *
 * This site switches language client-side via i18next (stored in a cookie).
 * There is no URL differentiation between languages — /about is the same URL
 * in both English and Arabic. As a result, all three hreflang tags below point
 * to the same canonical URL.
 *
 * What this means in practice:
 * - The tags are NOT wrong per the hreflang spec, but they give Google no signal
 *   to serve a language-specific result to Arabic vs. English searchers.
 * - Google will always surface the same URL regardless of the searcher's language,
 *   and the displayed language will depend on the user's cookie, not the URL.
 * - Social sharing crawlers (LinkedIn, WhatsApp, etc.) that don't run JS also
 *   cannot determine the language from the URL.
 *
 * Recommended fix (future refactor):
 * Implement URL-based language routing using subdirectories:
 *   connectgrid.com/en/about  →  hrefLang="en"
 *   connectgrid.com/ar/about  →  hrefLang="ar"
 *
 * This would allow Google to index and serve each language version independently,
 * significantly improving organic reach for Arabic-language searches in the GCC.
 * It requires updating react-router routes, the i18n language detector order,
 * and all internal links and canonical URLs.
 *
 * Until that refactor, x-default covers the canonical and the lang tags are
 * present for spec compliance — they do no harm but deliver limited SEO benefit.
 */
export const HreflangLinks = () => {
  const location = useLocation();
  const { pathname } = location;
  const canonicalUrl = `${BASE_URL}${pathname}`;
  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};