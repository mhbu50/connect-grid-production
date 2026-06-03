import { Seo } from '@/components/shared/Seo';
import { HeroSection } from '@/components/homepage/HeroSection';
import { ServicesGrid } from '@/components/homepage/ServicesGrid';
import { TestimonialsCarousel } from '@/components/homepage/TestimonialsCarousel';
import { PortfolioSection } from '@/components/homepage/PortfolioSection';
import { CtaSection } from '@/components/homepage/CtaSection';
import { CONTACT_DETAILS, SOCIAL_LINKS } from '@/constants';
export function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Connect Grid",
    "url": "https://connectgrid.com/",
    "logo": "https://connectgrid.com/logo.png",
    "founder": "Mohammed Abu Khamseen",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_DETAILS.phone,
      "contactType": "customer service",
      "areaServed": "SA",
      "availableLanguage": ["English", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olaya",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "addressCountry": "SA"
    },
    "sameAs": [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.x
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://connectgrid.com/",
    "name": "Connect Grid | Digital Marketing Agency",
    "description": "Leading digital marketing agency in Riyadh specializing in SEO, PPC, and Branding.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://connectgrid.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
      <Seo
        title="Connect Grid | Best Digital Marketing Agency in Riyadh"
        description="Connect Grid drives ROI with expert SEO, PPC, and social media marketing. Partner with Riyadh's leading agency for measurable digital results and growth."
        keywords="digital marketing agency Riyadh, SEO services Saudi Arabia, social media marketing Riyadh, marketing agency Olaya, PPC management SA, Connect Grid marketing"
        type="website"
        schema={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, websiteSchema]
        }}
      />
      <HeroSection />
      <ServicesGrid />
      <TestimonialsCarousel />
      <PortfolioSection />
      <CtaSection />
    </>
  );
}