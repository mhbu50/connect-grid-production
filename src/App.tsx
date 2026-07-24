import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout/Layout';
import i18n from '@/lib/i18n';
import useScrollToTop from '@/hooks/useScrollToTop';
import { HreflangLinks } from '@/components/HreflangLinks';
import { initAnalytics, trackPageView } from '@/lib/analytics';
function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}
function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => { initAnalytics(); }, []);
  useEffect(() => {
    // Defer so the page title (set via Helmet) is updated before we report it.
    const id = window.setTimeout(() => trackPageView(location.pathname + location.search), 0);
    return () => window.clearTimeout(id);
  }, [location.pathname, location.search]);
  return null;
}
export default function App() {
  const { i18n: i18nInstance } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18nInstance.language;
    document.documentElement.dir = i18nInstance.dir(i18nInstance.language);
  }, [i18nInstance, i18nInstance.language]);
  return (
    <I18nextProvider i18n={i18n}>
      <ScrollToTopWrapper />
      <AnalyticsTracker />
      <HreflangLinks />
      <Layout>
        <Outlet />
      </Layout>
      <Toaster richColors />
    </I18nextProvider>
  );
}