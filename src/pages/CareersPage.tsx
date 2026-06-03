import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Send, Ghost } from 'lucide-react';
import { CONTACT_DETAILS } from '@/constants';
interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
}
export function CareersPage() {
  const { t } = useTranslation();
  const rawOpenings = t('careers.openings', { returnObjects: true });
  const openings = Array.isArray(rawOpenings) ? (rawOpenings as JobOpening[]) : [];
  return (
    <>
      <Helmet>
        <title>{t('careers.title')} | Connect Grid</title>
        <meta name="description" content={t('careers.subtitle')} />
      </Helmet>
      <PageHeader
        title={t('careers.title')}
        subtitle={t('careers.subtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white"
            >
              {t('careers.joinUsTitle')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {t('careers.joinUsSubtitle')}
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {openings.length > 0 ? (
              openings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-none bg-muted/30 dark:bg-card/30">
                    <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 pb-4">
                      <div className="space-y-3">
                        <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all">
                        <a href={`mailto:${CONTACT_DETAILS.email}?subject=Job Application: ${job.title}`}>
                          {t('careers.applyNow')}
                          <Send className="ml-2 h-4 w-4 rtl:mr-2 rtl:ml-0" />
                        </a>
                      </Button>
                    </CardHeader>
                    <CardContent className="px-8 pb-8 pt-2">
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {job.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
                <Ghost className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <p className="text-muted-foreground font-medium">
                  {t('careers.noOpenings', 'No open positions at the moment. Please check back later!')}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}