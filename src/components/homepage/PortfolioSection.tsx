import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PORTFOLIO_ITEMS } from '@/constants';
import { ArrowRight, Layers } from 'lucide-react';
export function PortfolioSection() {
  const { t } = useTranslation();
  return (
    <section id="our-work" className="py-16 md:py-24 bg-muted/30 dark:bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary dark:text-white">
              {t('portfolio.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => {
            const rawTranslated = t(`caseStudies.details.${item.slug}`, { returnObjects: true }) as any;
            const services = Array.isArray(rawTranslated?.services) ? rawTranslated.services : [];
            const visibleServices = services.slice(0, 3);
            const extraCount = services.length - 3;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group h-full flex flex-col border-none shadow-soft hover:shadow-glow-lg transition-all duration-500 rounded-2xl bg-white dark:bg-card">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                      {/* Responsive wrapping badges */}
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
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {rawTranslated?.title || item.title}
                      </h3>
                      <div className="mt-auto pt-6 border-t flex items-center justify-between">
                        <Link to={item.link} className="w-full">
                          <Button
                            variant="ghost"
                            className="w-full justify-between p-0 h-auto font-bold text-primary hover:bg-transparent group-hover:gap-4 transition-all"
                          >
                            {t('portfolio.viewCaseStudy')}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-20 text-center">
          <Link to="/case-studies">
            <Button variant="outline" size="lg" className="rounded-full px-12 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold">
              {t('portfolio.viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}