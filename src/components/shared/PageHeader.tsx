import { motion } from 'framer-motion';
interface PageHeaderProps {
  title: string;
  subtitle: string;
}
export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative bg-muted dark:bg-background/50 py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-background to-background dark:from-primary-dark/10"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary dark:text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};