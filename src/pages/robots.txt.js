/**
 * robots.txt generation
 */

export default function Robots() {
    return null;
}

export async function getServerSideProps({ res }) {
    const baseUrl = 'https://www.vtechedge.com'; // Update with your actual domain

    const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`;

    res.setHeader('Content-Type', 'text/plain');
    res.write(robots);
    res.end();

    return {
        props: {},
    };
}
