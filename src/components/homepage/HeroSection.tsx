import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-background to-background dark:from-primary-dark/20"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary dark:text-white">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}