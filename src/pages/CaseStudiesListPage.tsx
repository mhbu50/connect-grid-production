import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Layers } from 'lucide-react';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CASE_STUDIES_DETAILS } from '@/constants';
import { cn } from '@/lib/utils';
export function CaseStudiesListPage() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');
  const isRtl = i18n.dir() === 'rtl';
  const caseStudies = useMemo(() => {
    return Object.entries(CASE_STUDIES_DETAILS).map(([slug, data]) => {
      const translated = t(`caseStudies.details.${slug}`, { returnObjects: true });
      const studyData = (typeof translated === 'object' && translated !== null) ? translated as any : {};
      return {
        slug,
        image: data.image,
        translated: studyData,
        services: Array.isArray(studyData.services) ? studyData.services : []
      };
    });
  }, [t]);
  const categories = useMemo(() => {
    const catSet = new Set<string>();
    caseStudies.forEach(cs => {
      cs.services.forEach((s: any) => {
        if (s.category) catSet.add(s.category);
      });
    });
    return ['All', ...Array.from(catSet).sort()];
  }, [caseStudies]);
  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return caseStudies;
    return caseStudies.filter(cs =>
      cs.services.some((s: any) => s.category === activeFilter)
    );
  }, [activeFilter, caseStudies]);
  return (
    <>
      <Seo
        title="Success Stories | Connect Grid"
        description="Browse through our portfolio of 18+ successful digital transformations, branding excellence, and marketing growth stories."
        canonical="https://connect-grid.com/case-studies"
      />
      <PageHeader
        title={t('caseStudies.listTitle')}
        subtitle={t('caseStudies.listSubtitle')}
      />
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "rounded-full px-8 h-11 transition-all duration-300 font-bold",
                  activeFilter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "hover:border-primary/50 text-muted-foreground hover:text-primary"
                )}
              >
                {cat === 'All' ? t('caseStudies.filterAll') : cat}
              </Button>
            ))}
          </div>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((item, index) => {
                const visibleServices = item.services.slice(0, 3);
                const extraCount = item.services.length - 3;
                return (
                  <motion.div
                    key={item.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden group h-full flex flex-col border-none shadow-soft hover:shadow-glow-lg transition-all duration-500 rounded-2xl bg-white dark:bg-card">
                      <CardContent className="p-0 flex-grow flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.translated?.title || item.slug}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                          {/* Sync badge logic with homepage */}
                          <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5 pointer-events-none">
                            {visibleServices.map((service: any, sIdx: number) => (
                              <Badge
                                key={sIdx}
                                className="bg-white/95 backdrop-blur text-[10px] uppercase tracking-wider font-bold text-primary border-none px-2 py-0.5 whitespace-nowrap"
                              >
                                {service.category}
                              </Badge>
                            ))}
                            {extraCount > 0 && (
                              <Badge className="bg-primary/90 text-white border-none text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 whitespace-nowrap flex items-center gap-1">
                                <Layers className="h-2.5 w-2.5" />
                                +{extraCount}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {item.translated?.title || item.slug}
                          </h3>
                          <p className="text-muted-foreground mt-4 text-sm line-clamp-2 leading-relaxed">
                            {item.translated?.challenge || ""}
                          </p>
                          <div className="mt-auto pt-6 border-t flex items-center justify-between">
                            <Link to={`/case-studies/${item.slug}`} className="w-full">
                              <Button
                                variant="ghost"
                                className="w-full justify-between p-0 h-auto font-bold text-primary hover:bg-transparent group-hover:gap-4 transition-all"
                              >
                                {t('portfolio.viewCaseStudy')}
                                <ArrowRight className={cn("h-5 w-5 transition-transform group-hover:translate-x-2", isRtl ? "rotate-180 group-hover:-translate-x-2" : "")} />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">{t('caseStudies.noResults')}</p>
              <Button
                variant="link"
                onClick={() => setActiveFilter('All')}
                className="mt-2 text-primary font-bold"
              >
                {t('caseStudies.clearFilters')}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}