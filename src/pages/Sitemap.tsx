import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentHead } from '@/lib/seo';

const SITE_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/posts', label: 'All Posts' },
  { path: '/business', label: 'Business' },
  { path: '/technology', label: 'Technology' },
  { path: '/podcast', label: 'Podcast' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/terms', label: 'Terms of Use' },
  { path: '/privacy', label: 'Privacy Policy' },
];

const BLOG_SLUGS = [
  { path: '/blog/rise-of-fashion-blogging', label: 'The Rise of Fashion Blogging: The Role of Influencers in the Industry' },
  { path: '/blog/self-driving-cars-everything-you-need-to-know', label: 'Self-Driving Cars: Everything You Need to Know' },
  { path: '/blog/the-importance-of-corporate-social-responsibility', label: 'The Importance of Corporate Social Responsibility' },
  { path: '/blog/mindful-living-finding-balance-in-a-busy-world', label: 'Mindful Living: Finding Balance in a Busy World' },
];

const Sitemap = () => {
  useDocumentHead({
    title: 'Sitemap',
    description: 'Complete sitemap of Blogify blog — all pages and articles.',
    canonicalPath: '/sitemap',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="container-blog py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Sitemap</h1>
          <p className="text-muted-foreground mb-8">
            Browse all pages and articles on Blogify. Search engines can use our{' '}
            <a href="/sitemap.xml" className="text-primary underline underline-offset-2">
              XML sitemap
            </a>
            .
          </p>

          <section className="mb-10" aria-labelledby="pages-heading">
            <h2 id="pages-heading" className="text-xl font-semibold text-foreground mb-4">Pages</h2>
            <ul className="space-y-2">
              {SITE_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="text-primary hover:underline underline-offset-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="text-xl font-semibold text-foreground mb-4">Articles</h2>
            <ul className="space-y-2">
              {BLOG_SLUGS.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="text-primary hover:underline underline-offset-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
