import { StrictMode, Suspense, lazy, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import App from './App';
import './lib/i18n';
import './index.css';

// Eager: homepage (first paint). Everything else is code-split into its own chunk.
import { HomePage } from '@/pages/HomePage';
const AboutPage = lazy(() => import('@/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const PackagesPage = lazy(() => import('@/pages/PackagesPage').then(m => ({ default: m.PackagesPage })));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const ServicesListPage = lazy(() => import('@/pages/ServicesListPage').then(m => ({ default: m.ServicesListPage })));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const CaseStudiesListPage = lazy(() => import('@/pages/CaseStudiesListPage').then(m => ({ default: m.CaseStudiesListPage })));
const CaseStudyDetailPage = lazy(() => import('@/pages/CaseStudyDetailPage').then(m => ({ default: m.CaseStudyDetailPage })));
const BlogListPage = lazy(() => import('@/pages/BlogListPage').then(m => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
// const CareersPage = lazy(() => import('@/pages/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then(m => ({ default: m.ContactPage })));

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="h-10 w-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" aria-label="Loading" />
  </div>
);

const withSuspense = (node: ReactNode) => <Suspense fallback={<PageFallback />}>{node}</Suspense>;

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <RouteErrorBoundary />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'about', element: withSuspense(<AboutPage />) },
    { path: 'packages', element: withSuspense(<PackagesPage />) },
    { path: 'privacy-policy', element: withSuspense(<PrivacyPolicyPage />) },
    { path: 'terms-of-service', element: withSuspense(<TermsOfServicePage />) },
    { path: 'services', element: withSuspense(<ServicesListPage />) },
    { path: 'services/:slug', element: withSuspense(<ServiceDetailPage />) },
    { path: 'case-studies', element: withSuspense(<CaseStudiesListPage />) },
    { path: 'case-studies/:slug', element: withSuspense(<CaseStudyDetailPage />) },
    { path: 'blog', element: withSuspense(<BlogListPage />) },
    { path: 'blog/:slug', element: withSuspense(<BlogPostPage />) },
    // { path: 'careers', element: withSuspense(<CareersPage />) },
    { path: 'contact', element: withSuspense(<ContactPage />) }
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
