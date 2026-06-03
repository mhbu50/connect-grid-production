import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { PackagesPage } from '@/pages/PackagesPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/pages/TermsOfServicePage';
import { ServicesListPage } from '@/pages/ServicesListPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { CaseStudiesListPage } from '@/pages/CaseStudiesListPage';
import { CaseStudyDetailPage } from '@/pages/CaseStudyDetailPage';
import { BlogListPage } from '@/pages/BlogListPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { CareersPage } from '@/pages/CareersPage';
import { ContactPage } from '@/pages/ContactPage';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import App from './App';
import './lib/i18n';
import './index.css';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <RouteErrorBoundary />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'about', element: <AboutPage /> },
    { path: 'packages', element: <PackagesPage /> },
    { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
    { path: 'terms-of-service', element: <TermsOfServicePage /> },
    { path: 'services', element: <ServicesListPage /> },
    { path: 'services/:slug', element: <ServiceDetailPage /> },
    { path: 'case-studies', element: <CaseStudiesListPage /> },
    { path: 'case-studies/:slug', element: <CaseStudyDetailPage /> },
    { path: 'blog', element: <BlogListPage /> },
    { path: 'blog/:slug', element: <BlogPostPage /> },
    { path: 'careers', element: <CareersPage /> },
    { path: 'contact', element: <ContactPage /> }
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);