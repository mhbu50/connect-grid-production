import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/constants';
export function ServicesListPage() {
  const { t } = useTranslation();
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };
  return (
    <>
      <Seo
        title="Digital Marketing Services | Connect Grid (CG) Riyadh"
        description="Explore Connect Grid's (CG Marketing) full range of services: SEO, PPC, social media, branding, and web design — all tailored for Saudi businesses."
        keywords="Connect Grid services, CG marketing services, digital marketing services Riyadh, SEO services, PPC advertising Saudi Arabia, social media management, brand design"
        canonical="https://connectgrid.com/services"
      />
      <PageHeader
        title={t('services.listTitle')}
        subtitle={t('services.listSubtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Link to={`/services/${service.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 bg-primary-light/20 text-primary rounded-full p-3 w-fit">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{t(`services.full.${service.slug.replace(/-/g, '')}`)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
                        {t('services.learnMore')} <ArrowRight className="h-4 w-4 ml-2 rtl:mr-2 rtl:ml-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}