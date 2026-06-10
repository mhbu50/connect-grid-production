import {
  Search,
  Users,
  Briefcase,
  Mail,
  PenTool,
  LayoutGrid,
  Palette,
  LineChart,
  Target,
  Megaphone,
  Settings,
  BarChart,
  Paintbrush,
} from 'lucide-react';
export const CONTACT_DETAILS = {
  email: "info@connect-grid.com",
  phone: "+966565734990",
  phoneFormatted: "+966 56 573 4990",
  whatsapp: "https://wa.me/966565734990",
  calendly: "https://calendly.com/heshama7793/30min",
  address: "Saudi Arabia, Riyadh, Olaya",
};
export const NAV_LINKS = [
  { href: '/#our-work', key: 'ourWork' },
  { href: '/case-studies', key: 'caseStudies' },
  { href: '/packages', key: 'packages' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  // { href: '/careers', key: 'careers' },
  { href: '/contact', key: 'contact' },
];
export const SERVICES = [
    { name: 'Digital Marketing Strategy', slug: 'digital-marketing-strategy', icon: Briefcase },
    { name: 'Social Media Management', slug: 'social-media-management', icon: Users },
    { name: 'Search Engine Optimization (SEO)', slug: 'search-engine-optimization', icon: Search },
    { name: 'Pay-Per-Click Advertising (PPC)', slug: 'pay-per-click-advertising', icon: Megaphone },
    { name: 'Content Marketing', slug: 'content-marketing', icon: PenTool },
    { name: 'Email Marketing', slug: 'email-marketing', icon: Mail },
    { name: 'Web Design & Development', slug: 'web-design-development', icon: LayoutGrid },
    { name: 'Brand Identity & Design', slug: 'brand-identity-design', icon: Palette },
    { name: 'Analytics & Reporting', slug: 'analytics-reporting', icon: LineChart },
    { name: 'Conversion Rate Optimization', slug: 'conversion-rate-optimization', icon: Target },
];
export const HOMEPAGE_SERVICES = [
  { slug: 'digital-marketing-strategy', icon: Settings },
  { slug: 'social-media-management', icon: Users },
  { slug: 'search-engine-optimization', icon: Search },
  { slug: 'pay-per-click-advertising', icon: Megaphone },
  { slug: 'content-marketing', icon: Paintbrush },
  { slug: 'web-design-development', icon: BarChart },
];
export const TESTIMONIAL_AVATARS = [
  { avatar: "https://i.pravatar.cc/150?img=1" },
  { avatar: "https://i.pravatar.cc/150?img=2" },
  { avatar: "https://i.pravatar.cc/150?img=3" },
  { avatar: "https://i.pravatar.cc/150?img=4" },
  { avatar: "https://i.pravatar.cc/150?img=5" },
];
export const PORTFOLIO_ITEMS = [
  {
    slug: "elaf-dental-center",
    title: "Elaf Dental & Aesthetic Center",
    category: "Digital Marketing",
    image: "https://i.ibb.co/4g9whMzF/Elaf-Dental-Aesthetic-Center.webp",
    link: "/case-studies/elaf-dental-center",
  },
  {
    slug: "accurate-system",
    title: "Accurate System Tech",
    category: "Website",
    image: "https://i.ibb.co/bRB9Cd71/Accurate-Systems.webp",
    link: "/case-studies/accurate-system",
  },
  {
    slug: "dr-ihab-elsharkawy",
    title: "Dr. Ihab Elsharkawy Clinic",
    category: "Branding",
    image: "https://i.ibb.co/BVb3KMcY/Dr-Ihab-Elsharkawy.webp",
    link: "/case-studies/dr-ihab-elsharkawy",
  },
  {
    slug: "shifaa-medical-center",
    title: "Shifaa Medical Center",
    category: "Branding",
    image: "https://i.ibb.co/svjkDR4V/Shifaa-Medical-Center.webp",
    link: "/case-studies/shifaa-medical-center",
  },
  {
    slug: "crepe-juice-branding",
    title: "Crepe & Juice",
    category: "Branding",
    image: "https://i.ibb.co/HpD08y5M/Crepe-Juice.webp",
    link: "/case-studies/crepe-juice-branding",
  },
  {
    slug: "flexi-car-rental",
    title: "Flexi Car Rental",
    category: "Website",
    image: "https://i.ibb.co/RpGk4qwg/Flexi-Car.webp",
    link: "/case-studies/flexi-car-rental",
  },
];
export const CASE_STUDIES_DETAILS: Record<string, { image: string }> = {
  'elaf-dental-center': { image: "https://i.ibb.co/4g9whMzF/Elaf-Dental-Aesthetic-Center.webp" },
  'caber-design': { image: "https://i.ibb.co/h190Z86b/Caber.webp" },
  'arwad-branding': { image: "https://i.ibb.co/5XrwjT5F/Arwad.webp" },
  'accurate-system': { image: "https://i.ibb.co/bRB9Cd71/Accurate-Systems.webp" },
  'abu-al-ward-phone': { image: "https://i.ibb.co/XwkHNNK/Abu-elward-Phone.webp" },
  'dr-ihab-elsharkawy': { image: "https://i.ibb.co/BVb3KMcY/Dr-Ihab-Elsharkawy.webp" },
  'devok-branding': { image: "https://i.ibb.co/hJ3jYSM1/Devok.webp" },
  'abo-ali-group': { image: "https://i.ibb.co/NgqNZ6k2/Abo-Ali-Group.webp" },
  'damcon-identity': { image: "https://i.ibb.co/VcDNV4KQ/Damcon.webp" },
  'astiri-luxury': { image: "https://i.ibb.co/XkX61btT/Astiri.webp" },
  'bareq-pixel': { image: "https://i.ibb.co/7tKNSWbs/Bareq-Pixel.webp" },
  'al-sebha-stones': { image: "https://i.ibb.co/0pWSjBpM/Al-Sebha-Stones.webp" },
  'wahj-al-shamal': { image: "https://i.ibb.co/bR130G8J/Wahj-Al-Shamal.webp" },
  'al-tarek-industries': { image: "https://i.ibb.co/gb6Qgg0r/Al-Tarek-Food-Industries.webp" },
  'flexi-car-rental': { image: "https://i.ibb.co/RpGk4qwg/Flexi-Car.webp" },
  'reem-al-sidra': { image: "https://i.ibb.co/xS061Kd8/Reem-Al-Sidra.webp" },
  'shifaa-medical-center': { image: "https://i.ibb.co/svjkDR4V/Shifaa-Medical-Center.webp" },
  'crepe-juice-branding': { image: "https://i.ibb.co/HpD08y5M/Crepe-Juice.webp" }
};
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/connect-grid/",
  facebook: "https://www.facebook.com/profile.php?id=61569420844747",
  instagram: "https://www.instagram.com/connectgrid_/",
  x: "https://x.com/connectgrid_",
};
export const BLOG_POSTS: Record<string, { image: string; readTime: string }> = {
  'the-ultimate-guide-to-seo-in-2024': {
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
  },
  '5-social-media-trends-to-watch': {
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
  },
  'ppc-vs-seo-which-is-right-for-you': {
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
  },
  'how-to-build-a-winning-content-strategy': {
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
  },
  'the-power-of-brand-identity': {
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop',
  },
  'instagram-vs-tiktok-for-business': {
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop',
  },
  'local-seo-for-saudi-businesses': {
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop',
  },
};
export const CLIENT_LOGOS = [
  { name: "Elaf Dental Center", slug: "elaf-dental-center", logo: "https://i.ibb.co/4g9whMzF/Elaf-Dental-Aesthetic-Center.webp" },
  { name: "Accurate System", slug: "accurate-system", logo: "https://i.ibb.co/bRB9Cd71/Accurate-Systems.webp" },
  { name: "Caber Design", slug: "caber-design", logo: "https://i.ibb.co/h190Z86b/Caber.webp" },
  { name: "Dr. Ihab Elsharkawy", slug: "dr-ihab-elsharkawy", logo: "https://i.ibb.co/BVb3KMcY/Dr-Ihab-Elsharkawy.webp" },
  { name: "Abu Al Ward Phone", slug: "abu-al-ward-phone", logo: "https://i.ibb.co/XwkHNNK/Abu-elward-Phone.webp" },
  { name: "Shifaa Medical Center", slug: "shifaa-medical-center", logo: "https://i.ibb.co/svjkDR4V/Shifaa-Medical-Center.webp" },
  { name: "Devok Software", slug: "devok-branding", logo: "https://i.ibb.co/hJ3jYSM1/Devok.webp" },
  { name: "Abo Ali Group", slug: "abo-ali-group", logo: "https://i.ibb.co/NgqNZ6k2/Abo-Ali-Group.webp" },
  { name: "Damcon Construction", slug: "damcon-identity", logo: "https://i.ibb.co/VcDNV4KQ/Damcon.webp" },
  { name: "Astiri Luxury", slug: "astiri-luxury", logo: "https://i.ibb.co/XkX61btT/Astiri.webp" },
  { name: "Bareq Pixel", slug: "bareq-pixel", logo: "https://i.ibb.co/7tKNSWbs/Bareq-Pixel.webp" },
  { name: "Al Sebha Stones", slug: "al-sebha-stones", logo: "https://i.ibb.co/0pWSjBpM/Al-Sebha-Stones.webp" },
  { name: "Wahj Al Shamal", slug: "wahj-al-shamal", logo: "https://i.ibb.co/bR130G8J/Wahj-Al-Shamal.webp" },
  { name: "Al Tarek Industries", slug: "al-tarek-industries", logo: "https://i.ibb.co/gb6Qgg0r/Al-Tarek-Food-Industries.webp" },
  { name: "Flexi Car Rental", slug: "flexi-car-rental", logo: "https://i.ibb.co/RpGk4qwg/Flexi-Car.webp" },
  { name: "Reem Al Sidra", slug: "reem-al-sidra", logo: "https://i.ibb.co/xS061Kd8/Reem-Al-Sidra.webp" },
  { name: "Arwad Branding", slug: "arwad-branding", logo: "https://i.ibb.co/5XrwjT5F/Arwad.webp" },
  { name: "Crepe & Juice", slug: "crepe-juice-branding", logo: "https://i.ibb.co/HpD08y5M/Crepe-Juice.webp" }
];
export const TEAM_MEMBERS = [
  { name: "Mohammed Abu Khamseen", avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Ahmed Hesham", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Namaa Partner", avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "Bassem Elsayed", avatar: "https://i.pravatar.cc/150?img=14" },
];