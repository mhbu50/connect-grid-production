import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, MessageSquare } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from '@/hooks/use-theme';
import { NAV_LINKS, SERVICES, CONTACT_DETAILS } from '@/constants';
import { cn } from '@/lib/utils';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinkClasses = "text-sm font-medium transition-colors hover:text-primary";
  const getIsActive = (href: string) => {
    const [path, hash] = href.split('#');
    const isHome = path === '/' || path === '';
    const pathMatch = isHome ? location.pathname === '/' : location.pathname === path;
    const hashMatch = hash ? location.hash === `#${hash}` : !location.hash;
    return pathMatch && hashMatch;
  };
  const navItems = (isMobile = false) => (
    <>
      {isMobile ? (
        <div className="flex flex-col gap-4">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t('nav.services')}</p>
          <div className="grid grid-cols-1 gap-2 pl-2 border-l rtl:border-l-0 rtl:border-r">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                onClick={() => setIsOpen(false)}
                className={cn("text-sm py-1 hover:text-primary", location.pathname === `/services/${service.slug}` && "text-primary font-bold")}
              >
                {t(`services.full.${service.slug.replace(/-/g, '')}`)}
              </Link>
            ))}
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-sm py-1 text-primary font-semibold">
              {t('services.learnMore')}...
            </Link>
          </div>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(navLinkClasses, "flex items-center gap-1 outline-none", location.pathname.startsWith('/services') && "text-primary font-bold")}>
            {t('nav.services')} <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-2 shadow-xl border-primary/10">
            <div className="grid gap-1">
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link to={`/services/${service.slug}`} className="cursor-pointer">
                    {t(`services.full.${service.slug.replace(/-/g, '')}`)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {NAV_LINKS.map((link) => {
        const isHash = link.href.includes('#');
        const isActive = getIsActive(link.href);
        if (isHash) {
          return (
            <HashLink
              key={link.key}
              smooth
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(navLinkClasses, isActive && "text-primary font-bold")}
            >
              {t(`nav.${link.key}`)}
            </HashLink>
          );
        }
        return (
          <Link
            key={link.key}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className={cn(navLinkClasses, isActive && "text-primary font-bold")}
          >
            {t(`nav.${link.key}`)}
          </Link>
        );
      })}
    </>
  );
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Logo className="h-12 md:h-14 w-auto text-foreground transition-transform hover:scale-105 duration-300" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems()}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:inline-flex rounded-full" aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
            <motion.div initial={false} animate={{ rotate: isDark ? 180 : 0 }}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </Button>
          <Button variant="ghost" onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} className="hidden md:inline-flex text-sm font-semibold rounded-full px-4" aria-label="Change Language">
            {t('nav.language')}
          </Button>
          <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <Button variant="ghost" size="icon" className="text-green-500 hover:text-green-600 rounded-full">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </a>
          <a href={CONTACT_DETAILS.calendly} target="_blank" rel="noopener noreferrer" className="hidden lg:block ml-2">
            <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 h-11 font-bold shadow-md hover:shadow-lg transition-all">
              {t('nav.letsTalk')}
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t overflow-hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6 p-6">
              {navItems(true)}
              <div className="flex flex-col gap-4 pt-6 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full">
                      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <Button variant="outline" onClick={() => { changeLanguage(i18n.language === 'en' ? 'ar' : 'en'); setIsOpen(false); }} className="text-sm font-semibold rounded-full">
                      {t('nav.language')}
                    </Button>
                  </div>
                  <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="text-green-500 rounded-full">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <a href={CONTACT_DETAILS.calendly} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary-dark text-white rounded-full py-6 font-bold text-lg">
                    {t('nav.letsTalk')}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}