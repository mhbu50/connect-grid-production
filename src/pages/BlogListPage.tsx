import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BLOG_POSTS } from '@/constants';
export function BlogListPage() {
  const { t } = useTranslation();
  const posts = Object.entries(BLOG_POSTS);
  return (
    <>
      <Helmet>
        <title>Blog | Connect Grid</title>
        <meta name="description" content="Insights, trends, and strategies from the world of digital marketing from the experts at Connect Grid." />
      </Helmet>
      <PageHeader
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(([slug, post], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group h-full flex flex-col">
                  <Link to={`/blog/${slug}`} className="block">
                    <img src={post.image} alt={t(`blog.posts.${slug}.title`)} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </Link>
                  <CardHeader>
                    <CardTitle>
                      <Link to={`/blog/${slug}`} className="hover:text-primary transition-colors">{t(`blog.posts.${slug}.title`)}</Link>
                    </CardTitle>
                    <div className="text-sm text-muted-foreground pt-2">
                      <span>{t('blog.by')} {t(`blog.posts.${slug}.author`)}</span> &bull; <span>{new Date(t(`blog.posts.${slug}.date`)).toLocaleDateString()}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{t(`blog.posts.${slug}.excerpt`)}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blog/${slug}`} className="text-primary font-semibold flex items-center group-hover:gap-2 transition-all duration-300">
                      {t('blog.readMore')} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}