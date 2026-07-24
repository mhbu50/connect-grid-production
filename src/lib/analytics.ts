// Google Analytics 4 — activates only when VITE_GA4_ID is set at build time.
// Set it in .env, e.g.  VITE_GA4_ID=G-XXXXXXXXXX
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA4_ID: string | undefined = import.meta.env.VITE_GA4_ID;

let loaded = false;

/** Injects the GA4 script once. Safe no-op when no ID is configured. */
export function initAnalytics(): void {
  if (loaded || !GA4_ID || typeof window === 'undefined') return;
  loaded = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // send_page_view: false so we control page_view on route change (SPA)
  window.gtag('config', GA4_ID, { send_page_view: false });
}

/** Records a virtual page view for the given path. No-op without an ID. */
export function trackPageView(path: string): void {
  if (!GA4_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
