import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_DETAILS } from '@/constants';
import { cn } from '@/lib/utils';
export function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const year = new Date().getFullYear();
  const getIsActive = (href: string) => {
    const [path, hash] = href.split('#');
    const isHome = path === '/' || path === '';
    const pathMatch = isHome ? location.pathname === '/' : location.pathname === path;
    const hashMatch = hash ? location.hash === `#${hash}` : !location.hash;
    return pathMatch && hashMatch;
  };
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-muted dark:bg-background border-t"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-1">
            <Logo className="h-10 w-auto text-foreground" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-xs">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => {
                const isHash = link.href.includes('#');
                const isActive = getIsActive(link.href);
                if (isHash) {
                  return (
                    <li key={link.key}>
                      <HashLink
                        smooth
                        to={link.href}
                        className={cn("text-sm text-muted-foreground hover:text-primary transition-colors", isActive && "text-primary font-bold")}
                      >
                        {t(`nav.${link.key}`)}
                      </HashLink>
                    </li>
                  );
                }
                return (
                  <li key={link.key}>
                    <Link
                      to={link.href}
                      className={cn("text-sm text-muted-foreground hover:text-primary transition-colors", isActive && "text-primary font-bold")}
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-xs">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary transition-colors">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary transition-colors">
                  {CONTACT_DETAILS.phoneFormatted}
                </a>
              </li>
              <li className="leading-relaxed">
                {t('footer.address')}
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-foreground mb-6 uppercase tracking-wider text-xs">{t('nav.letsTalk')}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{t('cta.subtitle')}</p>
            <Link to="/contact">
              <button className="mt-2 text-sm font-bold text-primary hover:underline">
                {t('contact.title')} →
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t('footer.copyright', { year })}</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary">{t('nav.privacyPolicy')}</Link>
            <Link to="/terms-of-service" className="hover:text-primary">{t('nav.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}