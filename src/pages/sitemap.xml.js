/**
 * Sitemap generation for VTech website
 * This file generates sitemap.xml for better SEO
 */

export default function Sitemap() {
    return null;
}

export async function getServerSideProps({ res }) {
    const baseUrl = 'https://www.vtechedge.com'; // Update with your actual domain

    // Define all your static pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/rpa',
        '/pharmacy-consultant',
        '/coming-soon',
    ];

    // Define your service pages (if you have dynamic routes)
    const servicePages = [
        '/services/web-development',
        '/services/mobile-app-development',
        '/services/cloud-solutions',
        '/services/it-consulting',
        // Add all your service slugs here
    ];

    const allPages = [...staticPages, ...servicePages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
            .map((page) => {
                return `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `;
            })
            .join('')}
</urlset>
`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}
