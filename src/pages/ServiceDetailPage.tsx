import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '@/constants';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Seo } from '@/components/shared/Seo';
import { cn } from '@/lib/utils';
interface ProcessStep {
  title: string;
  description: string;
}
interface ServiceDetails {
  subtitle: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  process: ProcessStep[];
}
export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const serviceMeta = SERVICES.find(s => s.slug === slug);
  const detailsKey = `services.details.${slug}`;
  const rawData = t(detailsKey, { returnObjects: true });
  // Defensive check for object structure
  const serviceData = (typeof rawData === 'object' && rawData !== null && !Array.isArray(rawData)) 
    ? (rawData as ServiceDetails) 
    : null;
  if (!serviceMeta || !serviceData || !serviceData.description || serviceData.description === detailsKey) {
    return <Navigate to="/services" replace />;
  }
  // Safe array fallbacks
  const keyFeatures = Array.isArray(serviceData.keyFeatures) ? serviceData.keyFeatures : [];
  const benefits = Array.isArray(serviceData.benefits) ? serviceData.benefits : [];
  const processSteps = Array.isArray(serviceData.process) ? serviceData.process : [];
  const serviceTitle = t(`services.full.${serviceMeta.slug.replace(/-/g, '')}`) || serviceMeta.name || slug || "";
  const breadcrumbItems = [
    { label: t('breadcrumbs.home'), href: '/' },
    { label: t('breadcrumbs.services'), href: '/services' },
    { label: serviceTitle },
  ];
  const timelineItemVariants = {
    hidden: (isRight: boolean) => ({
      opacity: 0,
      x: isRight ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <>
      <Seo
        title={`${serviceTitle} | Connect Grid`}
        description={serviceData.description}
        canonical={`https://connect-grid.com/services/${slug}`}
      />
      <div className="bg-muted dark:bg-background/50 pt-10 pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="text-center mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto bg-primary/10 text-primary rounded-2xl p-4 w-fit mb-6"
            >
              <serviceMeta.icon className="h-10 w-10" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary dark:text-white"
            >
              {serviceTitle}
            </motion.h1>
            {serviceData.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-xl md:text-2xl text-primary font-medium"
              >
                {serviceData.subtitle}
              </motion.p>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg text-muted-foreground leading-relaxed"
            >
              {serviceData.description}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <main className="lg:col-span-2 space-y-20">
            {keyFeatures.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-10 border-l-4 border-primary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                  {t('services.keyFeatures')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground font-medium">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
            {processSteps.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-16 text-center">{t('services.ourProcess')}</h2>
                <div className="relative space-y-12">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-border hidden md:block" />
                  {processSteps.map((step, index) => {
                    const isRight = index % 2 !== 0;
                    return (
                      <motion.div
                        key={index}
                        custom={isRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={timelineItemVariants}
                        className={cn(
                          "relative flex flex-col md:flex-row items-center gap-8",
                          isRight ? "md:flex-row-reverse" : ""
                        )}
                      >
                        <div className="md:w-1/2">
                          <Card className="shadow-soft hover:shadow-lg transition-all border-primary/10">
                            <CardHeader>
                              <CardTitle className="text-xl flex items-center gap-3">
                                <span className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm">
                                  {index + 1}
                                </span>
                                {step.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold z-10 border-4 border-background">
                          {index + 1}
                        </div>
                        <div className="md:w-1/2" />
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
          </main>
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {benefits.length > 0 && (
                <Card className="bg-primary text-white border-none shadow-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Zap className="h-8 w-8" />
                      {t('services.benefits')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-6">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0 mt-1" />
                          <span className="font-medium">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              <div className="bg-muted p-8 rounded-2xl border-2 border-dashed border-border text-center">
                <h3 className="font-bold text-xl mb-4">{t('cta.title')}</h3>
                <p className="text-sm text-muted-foreground mb-6">{t('cta.subtitle')}</p>
                <Button asChild className="w-full rounded-full h-12 font-bold bg-primary hover:bg-primary-dark shadow-md">
                  <a href="/contact">{t('nav.letsTalk')}</a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}