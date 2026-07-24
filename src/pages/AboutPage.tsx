import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { CLIENT_LOGOS } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, BarChart3, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';

const WHY_US_ITEMS = [
  { icon: Target,         key: 'resultsDriver'   },
  { icon: Lightbulb,      key: 'creativeStrategy' },
  { icon: BarChart3,      key: 'dataInformed'     },
  { icon: HeartHandshake, key: 'clientFirst'      },
  { icon: Zap,            key: 'fastExecution'    },
  { icon: ShieldCheck,    key: 'transparent'      },
] as const;

export function AboutPage() {
  const { t } = useTranslation();

  const midIndex = Math.ceil(CLIENT_LOGOS.length / 2);
  const firstGroup = CLIENT_LOGOS.slice(0, midIndex);
  const secondGroup = CLIENT_LOGOS.slice(midIndex);
  const marqueeItemsTop = [...firstGroup, ...firstGroup, ...firstGroup];
  const marqueeItemsBottom = [...secondGroup, ...secondGroup, ...secondGroup];

  return (
    <>
      <Seo
        title="About Connect Grid (CG) | Digital Marketing Agency Riyadh"
        description="Learn about Connect Grid (CG), Riyadh's trusted digital marketing agency. Our expert team has been driving results for Saudi businesses since 2020."
        keywords="about Connect Grid, about CG marketing, CG agency Riyadh, digital marketing team Saudi Arabia, Connect Grid story"
        canonical="https://connect-grid.com/about"
      />
      <PageHeader
        title={t('about.pageTitle')}
        subtitle={t('about.pageSubtitle')}
      />
      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-6">
                {t('about.storyTitle')}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.storyParagraph1')}</p>
                <p>{t('about.storyParagraph2')}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                alt="Connect Grid Team"
                className="relative rounded-2xl shadow-2xl aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section: Side-by-Side Desktop Layout */}
      <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/5 overflow-hidden border-y group">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column: Branding Text (33%) */}
            <motion.div
              className="lg:col-span-1 text-center lg:text-left rtl:lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">
                {t('about.clientsTitle')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                {t('about.clientsSubtitle')}
              </p>
            </motion.div>
            {/* Right Column: Dual Ribbon Carousel (66%) */}
            <div className="lg:col-span-2 space-y-4 md:space-y-8 relative">
              {/* Top Carousel: LTR */}
              <div className="w-full overflow-hidden">
                <div className="flex items-center animate-marquee whitespace-nowrap py-4 md:py-6 group-hover:[animation-play-state:paused]">
                  {marqueeItemsTop.map((client, idx) => (
                    <div key={`${client.slug}-top-${idx}`} className="flex-shrink-0 mx-3 w-32 sm:w-40 md:w-48 lg:w-56">
                      <motion.div whileHover={{ scale: 1.05, rotate: 1 }} className="w-full">
                        <Link to={`/case-studies/${client.slug}`} className="group/card block w-full aspect-[3/2]">
                          <div className="w-full h-full bg-white dark:bg-card rounded-2xl border border-transparent shadow-soft group-hover/card:shadow-glow group-hover/card:border-primary/40 transition-all duration-500 flex items-center justify-center p-4 cursor-pointer">
                            <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain transition-transform duration-500" />
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom Carousel: RTL */}
              <div className="w-full overflow-hidden">
                <div className="flex items-center animate-marquee-reverse whitespace-nowrap py-4 md:py-6 group-hover:[animation-play-state:paused]">
                  {marqueeItemsBottom.map((client, idx) => (
                    <div key={`${client.slug}-bottom-${idx}`} className="flex-shrink-0 mx-3 w-32 sm:w-40 md:w-48 lg:w-56">
                      <motion.div whileHover={{ scale: 1.05, rotate: -1 }} className="w-full">
                        <Link to={`/case-studies/${client.slug}`} className="group/card block w-full aspect-[3/2]">
                          <div className="w-full h-full bg-white dark:bg-card rounded-2xl border border-transparent shadow-soft group-hover/card:shadow-glow group-hover/card:border-primary/40 transition-all duration-500 flex items-center justify-center p-4 cursor-pointer">
                            <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain transition-transform duration-500" />
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white">
              {t('whyUs.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_ITEMS.map(({ icon: Icon, key }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none bg-muted/50 dark:bg-card shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary dark:text-white">
                      {t(`whyUs.items.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`whyUs.items.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}