import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout/Layout';
import i18n from '@/lib/i18n';
import useScrollToTop from '@/hooks/useScrollToTop';
import { HreflangLinks } from '@/components/HreflangLinks';
function ScrollToTopWrapper() {
  useScrollToTop();
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
      <HreflangLinks />
      <Layout>
        <Outlet />
      </Layout>
      <Toaster richColors />
    </I18nextProvider>
  );
}