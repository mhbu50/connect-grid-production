import { PageHeader } from '@/components/shared/PageHeader';
interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}
export const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <>
      <PageHeader title={title} subtitle={`Last updated: ${new Date().toLocaleDateString()}`} />
      <div className="bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-a:text-primary hover:prose-a:text-primary-dark">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};