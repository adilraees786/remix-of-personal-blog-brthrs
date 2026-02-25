import { useEffect } from 'react';

/**
 * Base URL for canonical links and Open Graph. Update when deploying to production.
 */
export const SITE_URL = 'https://personal-blog-brthrs.netlify.app';

export interface SeoOptions {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const defaultDescription =
  'Explore the latest in fashion trends, technology insights, business strategies, and lifestyle inspiration on Blogify personal blog.';
const defaultOgImage =
  'https://storage.googleapis.com/gpt-engineer-file-uploads/8jp6KAG7qJZgRp4lIs04ZYXqlhL2/social-images/social-1758609028260-download.jpg';

function getOrCreateMeta(name: string, attribute: 'name' | 'property'): HTMLMetaElement {
  const key = attribute === 'name' ? 'name' : 'property';
  let el = document.querySelector<HTMLMetaElement>(`meta[${key}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  return el;
}

function applyDocumentHead(options: SeoOptions): void {
  const {
    title,
    description = defaultDescription,
    canonicalPath = '',
    ogImage = defaultOgImage,
    noIndex = false,
  } = options;

  const fullTitle = title.includes('Blogify') ? title : `${title} | Blogify Blog`;
  document.title = fullTitle;

  const desc = getOrCreateMeta('description', 'name');
  desc.setAttribute('content', description);

  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) {
    canonical.href = canonicalPath ? `${SITE_URL}${canonicalPath.startsWith('/') ? '' : '/'}${canonicalPath}` : `${SITE_URL}/`;
  }

  getOrCreateMeta('og:title', 'property').setAttribute('content', fullTitle);
  getOrCreateMeta('og:description', 'property').setAttribute('content', description);
  getOrCreateMeta('og:url', 'property').setAttribute('content', `${SITE_URL}${canonicalPath ? (canonicalPath.startsWith('/') ? '' : '/') + canonicalPath : '/'}`);
  getOrCreateMeta('og:image', 'property').setAttribute('content', ogImage);

  getOrCreateMeta('twitter:title', 'name').setAttribute('content', fullTitle);
  getOrCreateMeta('twitter:description', 'name').setAttribute('content', description);
  getOrCreateMeta('twitter:image', 'name').setAttribute('content', ogImage);

  let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (noIndex) {
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
  } else if (robots) {
    robots.remove();
  }
}

/**
 * React hook: updates document title and meta tags for SEO. Use in page components.
 */
export function useDocumentHead(options: SeoOptions): void {
  useEffect(() => {
    applyDocumentHead(options);
  }, [options.title, options.description, options.canonicalPath, options.ogImage, options.noIndex]);
}
