import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: object;
  image?: string;
  type?: 'website' | 'article' | 'business.business' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  author?: string;
  noIndex?: boolean;
}
const DEFAULT_IMAGE = "https://i.ibb.co/4g9whMzF/Elaf-Dental-Aesthetic-Center.webp";
const SITE_NAME = "Connect Grid";
const BASE_URL = "https://connectgrid.com";
const TWITTER_HANDLE = "@connectgrid_";
export const Seo = ({
  title,
  description,
  keywords,
  canonical,
  schema,
  image = DEFAULT_IMAGE,
  type = 'website',
  twitterCard = 'summary_large_image',
  author,
  noIndex = false,
}: SeoProps) => {
  const location = useLocation();
  const currentUrl = `${BASE_URL}${location.pathname}`;
  const finalCanonical = canonical || currentUrl;
  const absoluteImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalCanonical} />
      {author && <meta name="author" content={author} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};