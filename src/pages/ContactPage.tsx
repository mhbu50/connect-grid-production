import React, { useRef, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Seo } from '@/components/shared/Seo';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_DETAILS } from '@/constants';
export function ContactPage() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const formSchema = useMemo(() => z.object({
    name: z.string().min(2, { message: t('contact.validation.name') }),
    email: z.string().email({ message: t('contact.validation.email') }),
    company: z.string().optional(),
    message: z.string().min(10, { message: t('contact.validation.message') }),
  }), [t]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!formRef.current) return;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
      console.log("Demo Mode: Form Values:", values);
      toast.success(t('contact.successMessage'));
      form.reset();
      return;
    }
    const promise = emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_connectgrid',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_connectgrid',
      formRef.current,
      publicKey
    );
    toast.promise(promise, {
      loading: 'Sending message...',
      success: () => {
        form.reset();
        return t('contact.successMessage');
      },
      error: () => t('contact.errorMessage'),
    });
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Connect Grid",
    "image": "https://connectgrid.com/logo.png",
    "@id": "https://connectgrid.com",
    "url": "https://connectgrid.com",
    "telephone": CONTACT_DETAILS.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Olaya",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.x
    ]
  };
  return (
    <>
      <Seo
        title="Contact Connect Grid | Digital Marketing Agency in Riyadh"
        description="Ready to grow? Contact Riyadh's top marketing agency. Visit our Olaya office or send us a message to start your digital transformation today."
        keywords="contact marketing agency Riyadh, marketing office Olaya, digital strategy consultation Riyadh"
        canonical="https://connectgrid.com/contact"
        schema={localBusinessSchema}
      />
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-6">{t('contact.formTitle')}</h2>
              <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formName')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.formNamePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formEmail')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.formEmailPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formCompany')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.formCompanyPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.formMessage')}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t('contact.formMessagePlaceholder')} className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-dark font-bold rounded-full h-12" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "..." : t('contact.formSubmit')}
                  </Button>
                </form>
              </Form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-6">{t('contact.infoTitle')}</h2>
              <div className="grid gap-6">
                <Card className="border-none shadow-sm bg-muted/50 dark:bg-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{t('contact.email')}</h3>
                      <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-muted-foreground hover:text-primary transition-colors">{CONTACT_DETAILS.email}</a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-muted/50 dark:bg-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{t('contact.phone')}</h3>
                      <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{CONTACT_DETAILS.phoneFormatted}</a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-muted/50 dark:bg-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{t('contact.office')}</h3>
                      <p className="text-muted-foreground">{CONTACT_DETAILS.address}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{t('contact.followUs')}</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                  <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all" aria-label="X (Twitter)"><Twitter className="h-5 w-5" /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}