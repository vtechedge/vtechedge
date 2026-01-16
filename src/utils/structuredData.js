/**
 * Structured Data (JSON-LD) for VTech
 * Add this to _app.js or individual pages
 */

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VTech",
    "url": "https://www.vtechedge.com",
    "logo": "https://www.vtechedge.com/images/logo.png",
    "description": "Professional IT consulting, RPA implementation, and automation services",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "US" // Update with actual country
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contact@vtechedge.com" // Update with actual email
    },
    "sameAs": [
        // Add your social media URLs
        "https://www.facebook.com/vtechedge/",
        "https://www.pinterest.com/vtechedge/",
        "https://www.linkedin.com/company/vtechedge",
        "https://twitter.com/vtechedge"
    ]
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VTech",
    "url": "https://www.vtechedge.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.vtechedge.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

export const serviceSchema = (serviceName, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
        "@type": "Organization",
        "name": "VTech"
    },
    "description": description,
    "areaServed": {
        "@type": "Country",
        "name": "United States" // Update as needed
    }
});

// Helper function to inject schema into page
export const injectSchema = (schema) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// Example usage in a page:
/*
import Head from 'next/head';
import { organizationSchema, injectSchema } from '@/utils/structuredData';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>VTech - IT Solutions</title>
        {injectSchema(organizationSchema)}
      </Head>
      ...
    </>
  );
}
*/
