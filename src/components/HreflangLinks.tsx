import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
const BASE_URL = 'https://connectgrid.com';
export const HreflangLinks = () => {
  const location = useLocation();
  const { pathname } = location;
  // The language is switched via cookie/localStorage, not a URL path prefix in this SPA setup.
  // Both hreflang links should point to the same canonical path.
  const canonicalUrl = `${BASE_URL}${pathname}`;
  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};