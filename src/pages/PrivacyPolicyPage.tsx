import { Seo } from '@/components/shared/Seo';
import { LegalPageLayout } from '@/components/shared/LegalPageLayout';
export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Connect Grid"
        description="Read the Privacy Policy for Connect Grid to understand how we collect, use, and protect your personal information."
        canonical="https://connect-grid.com/privacy-policy"
      />
      <LegalPageLayout title="Privacy Policy">
        <h2>1. Introduction</h2>
        <p>Welcome to Connect Grid. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        <h2>2. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you contact us through the site.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        </ul>
        <h2>3. Use of Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <ul>
          <li>Respond to your inquiries and offer support.</li>
          <li>Email you regarding your account or order.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
        </ul>
        <h2>4. Disclosure of Your Information</h2>
        <p>We do not share, sell, rent or trade your information with third parties for their commercial purposes.</p>
        <h2>5. Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        <h2>6. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: info@connect-grid.com</p>
      </LegalPageLayout>
    </>
  );
}