import { Link } from 'react-router-dom';

const categories = [
  { label: 'Fashion', to: '/posts' },
  { label: 'Technology', to: '/technology' },
  { label: 'Business', to: '/business' },
  { label: 'Lifestyle', to: '/posts' },
];

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
];

const connectLinks = [
  { label: 'Facebook',  ariaLabel: 'Follow us on Facebook' },
  { label: 'Twitter', ariaLabel: 'Follow us on Twitter' },
  { label: 'Instagram', ariaLabel: 'Follow us on Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border" role="contentinfo">
      <div className="container-blog py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Blogify</h2>
            <p className="text-sm text-muted-foreground">
              A personal blog exploring fashion, technology, business, and lifestyle trends.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map(({ label, to }) => (
                <li key={to + label}><Link to={to} className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">{label}</Link></li>
              ))}
            </ul>
          </div>
          
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map(({ label, to }) => (
                  <li key={to}><Link to={to} className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">{label}</Link></li>
                ))}
              </ul>
            </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Connect</h3>
            <div className="flex space-x-4">
              {connectLinks.map(({ label, ariaLabel }) => (
                <a key={label} href="#" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded" aria-label={ariaLabel}>
                  <span className="sr-only">{label}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Blogify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;