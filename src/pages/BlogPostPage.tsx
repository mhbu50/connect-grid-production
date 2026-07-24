import React from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, User, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { BLOG_POSTS } from '@/constants';
import { Seo } from '@/components/shared/Seo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
type BlogPostKey = keyof typeof BLOG_POSTS;
interface BlogPostData {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string[];
}
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { t } = useTranslation();
  const sanitizedSlug = slug?.toLowerCase().trim() || "";
  const postStatic = sanitizedSlug ? BLOG_POSTS[sanitizedSlug as BlogPostKey] : undefined;
  // Safely get translation object
  const rawData = t(`blog.posts.${sanitizedSlug}`, { returnObjects: true });
  const postData = (typeof rawData === 'object' && rawData !== null && !Array.isArray(rawData)) 
    ? (rawData as BlogPostData) 
    : null;
  // Redirect only if both the static record and the localized data are missing or empty
  if (!postStatic && (!postData || !postData.title)) {
    return <Navigate to="/blog" replace />;
  }
  const title = postData?.title || "";
  const author = postData?.author || "";
  const date = postData?.date || "";
  const excerpt = postData?.excerpt || "";
  const content = Array.isArray(postData?.content) ? postData.content : [];
  const readTime = postStatic?.readTime || "5 min";
  const image = postStatic?.image || "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop";
  const breadcrumbItems = [
    { label: t('breadcrumbs.home'), href: '/' },
    { label: t('breadcrumbs.blog'), href: '/blog' },
    { label: title },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Connect Grid",
      "logo": {
        "@type": "ImageObject",
        "url": "https://connect-grid.com/logo.png"
      }
    },
    "datePublished": date,
    "description": excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://connect-grid.com/blog/${sanitizedSlug}`
    }
  };
  const pageUrl = `https://connect-grid.com${location.pathname}`;
  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
  };
  return (
    <>
      <Seo
        title={`${title} | Connect Grid Blog`}
        description={excerpt}
        image={image}
        type="article"
        author={author}
        schema={articleSchema}
      />
      <div className="bg-background pt-10">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      <article>
        <header className="py-12 md:py-16 bg-background">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary dark:text-white">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{date ? new Date(date).toLocaleDateString() : ""}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime} {t('blog.readTime')}</span>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <img
            src={image}
            alt={`${title} Hero Visual`}
            className="rounded-2xl shadow-xl w-full aspect-video object-cover"
            loading="lazy"
          />
        </div>
        <div className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose dark:prose-invert max-w-none prose-lg prose-p:text-muted-foreground prose-headings:font-bold prose-headings:text-text-primary prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-foreground">
              {content.map((paragraph: string, index: number) => (
                <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <Separator className="my-12" />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <h3 className="text-lg font-semibold text-foreground">{t('blog.share')}</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild className="rounded-full">
                  <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on X (Twitter)"><Twitter className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full">
                  <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-full">
                  <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><Facebook className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}