import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Gift, Sparkles, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Package {
  name: string;
  badge: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  commitment: {
    title: string;
    total: string;
    insteadOf: string;
    save: string;
  };
  cta: string;
}

export function PackagesPage() {
  const { t, i18n } = useTranslation();
  const rawPackages = t('packages.items', { returnObjects: true });
  const packages = Array.isArray(rawPackages) ? (rawPackages as Package[]) : [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Social Media Marketing Packages",
    "numberOfItems": packages.length,
    "itemListElement": packages.map((pkg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": pkg?.name || "Package",
        "description": pkg?.description || "",
        "brand": { "@type": "Brand", "name": "Connect Grid" },
        "offers": {
          "@type": "Offer",
          "price": (pkg?.price || "").replace(/[^0-9]/g, ''),
          "priceCurrency": "SAR",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <>
      <Seo
        title="Social Media Marketing Packages Riyadh | Connect Grid"
        description="Transparent pricing for professional social media management in Riyadh. Choose a plan that fits your growth goals."
        keywords="social media pricing Riyadh, marketing packages SA, instagram management cost, social media agency price"
        canonical="https://connectgrid.com/packages"
        schema={schema}
      />
      <PageHeader
        title={t('packages.pageTitle')}
        subtitle={t('packages.pageSubtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Special Offer Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-primary-light/10 dark:bg-primary-dark/10 border-l-4 rtl:border-l-0 rtl:border-r-4 border-primary p-8 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="h-24 w-24" />
            </div>
            <div className="flex justify-center items-center gap-3 relative z-10">
              <Gift className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">{t('packages.specialOffer.title')}</h3>
            </div>
            <p className="mt-2 text-muted-foreground max-w-3xl mx-auto relative z-10 font-medium">
              {t('packages.specialOffer.description')}
            </p>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, index) => {
              const isPopular = pkg.badge?.includes('Popular') || pkg.badge?.includes('شعبية');
              const isValue = pkg.badge?.includes('Value') || pkg.badge?.includes('قيمة');
              const features = Array.isArray(pkg.features) ? pkg.features : [];
              return (
                <motion.div
                  key={pkg.name || index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={cn(
                    "flex flex-col h-full w-full transition-all duration-500 rounded-3xl overflow-hidden border-2",
                    isPopular ? "border-primary shadow-2xl shadow-primary/10 scale-105 z-10" : "border-border/50",
                    isValue && "border-primary-dark shadow-xl shadow-primary-dark/5"
                  )}>
                    {pkg.badge && (
                      <div className={cn(
                        "text-white text-center py-2.5 text-sm font-black uppercase tracking-widest",
                        isPopular ? "bg-primary" : isValue ? "bg-primary-dark" : "bg-muted-foreground/20 text-muted-foreground"
                      )}>
                        {pkg.badge}
                      </div>
                    )}
                    <CardHeader className="text-center pb-8 pt-8">
                      <CardTitle className="text-2xl font-black mb-2">{pkg.name}</CardTitle>
                      <CardDescription className="text-sm font-medium px-4">{pkg.description}</CardDescription>
                      <div className="pt-8 flex flex-col items-center">
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl md:text-6xl font-black text-text-primary dark:text-white tracking-tighter">
                            {pkg.price}
                          </span>
                          <span className="text-muted-foreground font-bold">{pkg.currency}</span>
                        </div>
                        <span className="text-sm font-black text-primary/80 uppercase tracking-widest mt-1">
                          {pkg.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow px-8">
                      <ul className="space-y-4">
                        {features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start">
                            <div className="bg-primary/10 rounded-full p-1 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 mt-0.5">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground text-sm font-medium leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex-col items-stretch gap-6 p-8 bg-muted/30 dark:bg-muted/10">
                      <Button asChild size="lg" className={cn(
                        "w-full rounded-full h-14 text-lg font-black shadow-lg transition-all duration-300",
                        isPopular ? "bg-primary hover:bg-primary-dark hover:shadow-primary/30" : "bg-text-primary hover:bg-primary"
                      )}>
                        <Link to="/contact">{pkg.cta}</Link>
                      </Button>
                      {pkg.commitment && (
                        <div className="space-y-2 text-center">
                          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                            {pkg.commitment.title}
                          </p>
                          <div className="flex items-center justify-center gap-2 flex-wrap">
                            <span className="text-sm font-bold text-foreground">{pkg.commitment.total}</span>
                            {pkg.commitment.insteadOf && (
                              <span className="text-xs text-muted-foreground line-through decoration-destructive/50">
                                {pkg.commitment.insteadOf}
                              </span>
                            )}
                          </div>
                          {pkg.commitment.save && (
                            <Badge variant="outline" className="border-green-500/30 text-green-600 bg-green-500/5 font-black text-[10px] uppercase px-3 py-1">
                              {pkg.commitment.save}
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Ad Note Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-start justify-center gap-2 text-sm text-muted-foreground text-center max-w-2xl mx-auto"
          >
            <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <p>{t('packages.adNote')}</p>
          </motion.div>

        </div>
      </section>
    </>
  );
}