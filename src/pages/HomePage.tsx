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
    "@id": "https://connect-grid.com/#organization",
    "name": "Connect Grid",
    "alternateName": ["CG", "CG Marketing", "Connect Grid Marketing", "CG Digital Agency"],
    "url": "https://connect-grid.com/",
    "logo": "https://connect-grid.com/logo.png",
    "founder": "Mohammed Abu Khamseen",
    "foundingDate": "2020",
    "description": "Connect Grid (CG) is a leading digital marketing agency in Riyadh, Saudi Arabia. We specialize in SEO, PPC, social media management, branding, and web design.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_DETAILS.phone,
      "contactType": "customer service",
      "areaServed": ["SA", "AE", "KW", "BH", "QA", "OM"],
      "availableLanguage": ["English", "Arabic"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olaya",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "addressCountry": "SA"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "knowsAbout": [
      "Digital Marketing",
      "Search Engine Optimization",
      "Pay Per Click Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Brand Identity Design",
      "Web Design",
      "Email Marketing"
    ],
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
    "url": "https://connect-grid.com/",
    "name": "Connect Grid | Digital Marketing Agency",
    "description": "Leading digital marketing agency in Riyadh specializing in SEO, PPC, and Branding.",
    "inLanguage": ["en", "ar"],
    "publisher": { "@id": "https://connect-grid.com/#organization" }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Connect Grid (CG)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Connect Grid, also known as CG or CG Marketing, is a leading digital marketing agency based in Riyadh, Saudi Arabia. We provide SEO, PPC, social media marketing, branding, and web design services."
        }
      },
      {
        "@type": "Question",
        "name": "What services does CG Marketing offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Connect Grid (CG) offers a full suite of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, social media management, content marketing, brand identity design, web design & development, email marketing, and analytics & reporting."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Connect Grid located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Connect Grid is located in Olaya, Riyadh, Saudi Arabia. We serve clients across Saudi Arabia and the GCC region."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Connect Grid as your marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Connect Grid (CG) combines data-driven strategies with creative excellence to deliver measurable ROI. Our team of experts has helped numerous businesses across Saudi Arabia grow their digital presence since 2020."
        }
      }
    ]
  };

  return (
    <>
      <Seo
        title="Connect Grid (CG) | Best Digital Marketing Agency in Riyadh"
        description="Connect Grid (CG Marketing) drives ROI with expert SEO, PPC, and social media marketing. Partner with Riyadh's leading agency for measurable digital results and growth."
        keywords="Connect Grid, CG marketing, CG digital agency, CG, digital marketing agency Riyadh, SEO services Saudi Arabia, social media marketing Riyadh, marketing agency, marketing agency Olaya, PPC management SA, connect grid, CG marketing Riyadh"
        type="website"
        schema={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, websiteSchema, faqSchema]
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