import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export function CtaSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-primary dark:bg-gradient-to-br dark:from-primary-dark dark:to-gray-900 rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">{t('cta.title')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">{t('cta.subtitle')}</p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {t('cta.button')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}