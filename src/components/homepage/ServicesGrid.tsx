import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HOMEPAGE_SERVICES, SERVICES } from '@/constants';
export function ServicesGrid() {
  const { t } = useTranslation();
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  const servicesToDisplay = HOMEPAGE_SERVICES.map(hpService => {
    const fullService = SERVICES.find(s => s.slug === hpService.slug);
    return {
      ...hpService,
      name: fullService ? t(`services.full.${fullService.slug.replace(/-/g, '')}`) : hpService.slug,
    };
  });
  return (
    <section id="services" className="py-16 md:py-24 bg-muted dark:bg-background/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">{t('services.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="h-full text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary-light/20 text-primary rounded-full p-4 w-fit">
                    <service.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}