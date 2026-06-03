import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CASE_STUDIES_DETAILS } from '@/constants';
import { Seo } from '@/components/shared/Seo';
import { Target, Sparkles, BarChart2, ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const slugKey = slug?.toLowerCase() || '';
  const caseStudyStatic = CASE_STUDIES_DETAILS[slugKey];
  const rawTranslated = t(`caseStudies.details.${slugKey}`, { returnObjects: true });
  const caseStudyTranslated = useMemo(() => {
    return (typeof rawTranslated === 'object' && rawTranslated !== null && !Array.isArray(rawTranslated))
      ? (rawTranslated as any)
      : null;
  }, [rawTranslated]);
  const services = useMemo(() => {
    return Array.isArray(caseStudyTranslated?.services) ? caseStudyTranslated.services : [];
  }, [caseStudyTranslated]);
  const stats = useMemo(() => {
    return Array.isArray(caseStudyTranslated?.stats) ? caseStudyTranslated.stats : [];
  }, [caseStudyTranslated]);
  const relatedProjects = useMemo(() => {
    if (!services.length) return [];
    const currentCategories = services.map((s: any) => s.category);
    return Object.entries(CASE_STUDIES_DETAILS)
      .filter(([key]) => key !== slugKey)
      .map(([key, data]) => {
        const relTrans = t(`caseStudies.details.${key}`, { returnObjects: true }) as any;
        const relServices = Array.isArray(relTrans?.services) ? relTrans.services : [];
        const hasCommonCategory = relServices.some((rs: any) => currentCategories.includes(rs.category));
        return {
          slug: key,
          image: data.image,
          title: relTrans?.title || key,
          category: relServices[0]?.category || 'Project',
          relevance: hasCommonCategory ? 1 : 0
        };
      })
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 3);
  }, [slugKey, services, t]);
  const breadcrumbItems = useMemo(() => [
    { label: t('breadcrumbs.home'), href: '/' },
    { label: t('breadcrumbs.caseStudies'), href: '/case-studies' },
    { label: caseStudyTranslated?.title || slugKey },
  ], [t, caseStudyTranslated, slugKey]);
  if (!caseStudyStatic || !caseStudyTranslated) {
    return <Navigate to="/case-studies" replace />;
  }
  const summary = caseStudyTranslated.results?.summary;
  return (
    <>
      <Seo
        title={`${caseStudyTranslated.title} | Connect Grid Success Story`}
        description={caseStudyTranslated.challenge}
        image={caseStudyStatic.image}
        type="article"
      />
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={caseStudyStatic.image}
            alt={`${caseStudyTranslated.title} Showcase`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        </motion.div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={breadcrumbItems} />
              <div className="mt-8">
                <Badge className="mb-6 bg-primary text-white border-none text-sm px-5 py-1.5 rounded-full uppercase tracking-widest font-bold">
                  {services[0]?.category || 'Marketing'}
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  {caseStudyTranslated.title}
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2 space-y-16">
            <Card className="border-none shadow-soft rounded-3xl overflow-hidden bg-muted/30 dark:bg-card/30">
              <CardHeader className="p-8 pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">{t('caseStudies.challenge')}</h2>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {caseStudyTranslated.challenge}
                </p>
              </CardContent>
            </Card>
            {services.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  {t('caseStudies.solution')}
                </h2>
                <Tabs defaultValue={services[0]?.category} className="w-full">
                  <div className="flex justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
                    <TabsList className="bg-muted/50 p-1 h-auto rounded-full">
                      {services.map((service: any) => (
                        <TabsTrigger
                          key={service.category}
                          value={service.category}
                          className="rounded-full px-6 md:px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold text-sm whitespace-nowrap"
                        >
                          {service.category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <AnimatePresence mode="popLayout">
                    {services.map((service: any) => (
                      <TabsContent key={service.category} value={service.category}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm"
                        >
                          <h3 className="text-2xl font-bold mb-6 text-primary">{service.category}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {service.description}
                          </p>
                          {service.website && (
                            <Button asChild className="rounded-full px-8 h-12 font-bold shadow-lg">
                              <a href={service.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                {t('caseStudies.visitWebsite')} <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </motion.div>
                      </TabsContent>
                    ))}
                  </AnimatePresence>
                </Tabs>
              </section>
            )}
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <Card className="border-none bg-text-primary dark:bg-card text-white dark:text-foreground rounded-3xl overflow-hidden shadow-glass">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <BarChart2 className="h-8 w-8 text-primary-light" />
                    {t('caseStudies.results')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-10">
                  {summary && (
                    <p className="text-lg font-medium leading-relaxed italic border-l-2 border-primary-light pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pr-4">
                      "{summary}"
                    </p>
                  )}
                  <div className="grid grid-cols-1 gap-6">
                    {stats.map((stat: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 bg-white/10 dark:bg-background/50 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm border border-white/5"
                      >
                        <span className="text-4xl font-black text-primary-light mb-1">{stat.value}</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70 dark:text-muted-foreground">{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-primary rounded-3xl p-10 text-white shadow-glow relative overflow-hidden group">
                <h3 className="text-2xl font-bold mb-4 relative z-10">{t('cta.title')}</h3>
                <p className="text-blue-50 text-sm mb-8 leading-relaxed relative z-10">{t('cta.subtitle')}</p>
                <Link to="/contact" className="relative z-10">
                  <Button className="w-full bg-white text-primary hover:bg-gray-100 rounded-full font-bold h-14 text-lg">
                    {t('nav.letsTalk')}
                  </Button>
                </Link>
              </div>
              <Link
                to="/case-studies"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold group"
              >
                <ArrowLeft className={cn(
                  "h-5 w-5 transition-transform",
                  isRtl ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"
                )} />
                {t('breadcrumbs.caseStudies')}
              </Link>
            </div>
          </aside>
        </div>
      </div>
      <section className="bg-muted/50 dark:bg-background/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">{t('portfolio.title')}</h2>
            <Link to="/case-studies" className="text-primary font-bold flex items-center gap-2 hover:underline">
              {t('services.learnMore')} <ChevronRight className={cn("h-5 w-5", isRtl && "rotate-180")} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/case-studies/${item.slug}`} className="group block h-full">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-soft">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  </div>
                  <h4 className="font-bold text-xl group-hover:text-primary transition-colors mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">
                    {item.category}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}