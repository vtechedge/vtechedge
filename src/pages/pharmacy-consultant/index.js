import Head from "next/head";
import { serviceSchema, injectSchema } from "@/utils/structuredData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Clamp from "@/utils/Clamp";
import { pharmaData, otherOfferingsData } from "@/static/pharmaData";

const Index = () => {
  const pharmaSchema = serviceSchema('Pharmacy IT Consulting', 'Specialized IT consulting for pharmacies. HIPAA-compliant solutions, AI integration, and 24/7 IT support to keep your pharmacy running smoothly.');
  const [openFAQ, setOpenFAQ] = useState(1); // First FAQ open by default

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>Pharmacy IT Consulting - VTech</title>
        <meta name="description" content="Specialized IT consulting for pharmacies. HIPAA-compliant solutions, AI integration, and 24/7 IT support to keep your pharmacy running smoothly." />
        <meta name="keywords" content="pharmacy IT, healthcare technology, HIPAA compliance, pharmacy automation" />
        {injectSchema(pharmaSchema)}
      </Head>
      {/* New Section: Two-column layout with left content and right image */}
      <div className="flex flex-col xl:flex-row items-center justify-between py-[50px] padding-x bg-white gap-8 mt-28">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start mb-8 xl:mb-0 gap-4">
          <h2 className="text-[24px] xl:text-4xl font-light mb-4 xl:mb-6" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
            IT Consulting Services for Modern Pharmacies
          </h2>
          <p className="text-[14px] xl:text-lg text-gray-700 mb-6 xl:mb-8 max-w-xl">
            We help pharmacies and healthcare providers stay ahead with smart, secure, and scalable IT solutions. From setting up pharmacy software to integrating it seamlessly
            with your existing systems, we ensure everything works together smoothly. Our team builds cloud-based IT infrastructure tailored for performance, flexibility, and
            future growth.
          </p>
          <p className="text-[14px] xl:text-lg text-gray-700 mb-6 xl:mb-8 max-w-xl">
            Security and compliance are at the core of our services. We implement robust data protection strategies and ensure your systems align with HIPAA, HL7, and industry
            regulations. With advanced backup solutions and real-time cybersecurity, your critical data stays safe—always.
          </p>
          <p className="text-[14px] xl:text-lg text-gray-700 mb-6 xl:mb-8 max-w-xl">
            And because your pharmacy can&apos;t afford downtime, we provide ongoing IT maintenance and dedicated support to keep your operations running smoothly, 24/7.
          </p>
          <Link href="/contact" className="inline-block bg-accent hover:bg-accent-hover transition-all duration-300 text-white font-semibold py-3 px-6 xl:px-8 rounded-lg">Discover</Link>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center relative h-[300px] xl:h-[700px] w-full">
          <Image src="/images/pharma.jpg" alt="RPA Illustration" fill className="object-cover rounded-[20px]" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-[50px] padding-x bg-[#ececec]">
        <h2 className="text-[24px] xl:text-3xl font-light py-2 text-center" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
          AI & RPA Bot Solutions
        </h2>
        <p className="text-[14px] xl:text-lg text-gray-700 py-2 text-center mb-8 xl:mb-12">
          Enhance your pharmacy&apos;s productivity with intelligent automation tools designed for healthcare operations.
        </p>
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4">
          {pharmaData.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-md p-6 xl:p-8 flex flex-col items-start justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-[20px] xl:text-[24px] font-light mb-2">{benefit.title}</h3>
              <p className="text-[14px] xl:text-gray-600 mb-4 xl:mb-6">{benefit.description}</p>
              <Link href="/contact" className="flex items-center text-primary-500 font-semibold cursor-pointer hover:underline">
                Explore{" "}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 xl:w-5 xl:h-5 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-[50px] padding-x bg-white">
        {/* <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2> */}
        {/* First Row: Left content, right image */}
        <div className="flex flex-col xl:flex-row items-center justify-between mb-12 xl:mb-16 gap-8">
          <div className="flex-1 flex flex-col items-start mb-8 xl:mb-0 gap-4">
            <h3 className="text-[20px] xl:text-3xl font-light mb-4 xl:mb-6" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
              Web & Mobile Development
            </h3>
            <p className="text-[14px] xl:text-lg text-gray-700 max-w-xl">
              We help pharmacies and healthcare providers build a strong digital presence with modern, user-friendly web and mobile solutions. Whether you need a custom pharmacy
              website, an online prescription portal, or a full-featured e-commerce platform—we deliver responsive designs that reflect your brand and meet industry standards.
            </p>
            <p className="text-[14px] xl:text-lg text-gray-700 max-w-xl">
              Our team also develops telehealth apps and online booking systems that make it easy for patients to connect and schedule care remotely. With secure login portals and
              patient dashboards, we ensure HIPAA-compliant access to health records, prescriptions, and personal information.
            </p>
            <p className="text-[14px] xl:text-lg text-gray-700 max-w-xl">
              All our solutions are fast, mobile-optimized, and built for performance—ensuring your digital platforms are not only functional, but future-ready.
            </p>
          </div>
          <div className="flex-1 flex justify-start relative h-[300px] xl:h-[500px] w-full">
            <Image src="/images/deve.jpg" alt="Finance Automation" fill className="object-cover rounded-[20px]" />
          </div>
        </div>
        {/* Second Row: Left image, right content */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-start order-2 xl:order-1 relative h-[300px] xl:h-[500px] w-full">
            <Image src="/images/social.jpg" alt="HR Automation" fill className="object-cover rounded-[20px]" />
          </div>
          <div className="flex-1 flex flex-col items-start order-1 xl:order-2 mb-8 xl:mb-0 gap-4">
            <h3 className="text-[20px] xl:text-3xl font-light mb-4 xl:mb-6" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
              Branding & Digital Marketing
            </h3>
            <p className="text-[14px] xl:text-lg text-gray-700 max-w-xl">
              We help pharmacies and healthcare businesses build a strong, recognizable brand with our end-to-end digital marketing services. From custom logo design and brand
              identity to pharmacy-focused SEO, we position your business to stand out online. Our team manages targeted social media campaigns, Google Ads, and email marketing
              strategies that drive traffic and build patient trust. Whether you&apos;re launching a new pharmacy or growing your digital presence, we provide the tools to attract
              and retain customers effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Meeting Section */}
      <div className="relative w-full py-12 xl:py-16 mt-8 xl:mt-14">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image src="/images/banner.jpg" alt="Background" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 padding-x flex flex-col xl:flex-row items-center justify-between">
          {/* Left Side: Heading and Content */}
          <div className="flex-1 text-white mb-8 xl:mb-0">
            <h2 className="text-[24px] xl:text-4xl font-light mb-4" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
              Let&apos;s Transform Your Pharmacy or Clinic
            </h2>
            <p className="text-[14px] xl:text-xl opacity-90 max-w-xl">
              Ready to upgrade your digital capabilities? Whether you&apos;re starting fresh or scaling your operations, we&apos;re here to support your pharmacy or healthcare
              business every step of the way.
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="flex-shrink-0">
            <Link href="/contact" className="inline-block bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 xl:py-4 px-6 xl:px-8 rounded-lg transition-colors">Schedule a Free Call</Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-[50px] padding-x">
        <h2 className="text-[24px] xl:text-3xl font-light py-2" style={{ fontSize: `${Clamp(1.5, 2.5)}` }}>
          Frequently Asked Questions
        </h2>
        <p className="text-[14px] xl:text-lg text-gray-700 py-2 mb-8 xl:mb-12">Get answers to common questions about our pharmacy and healthcare IT consulting services.</p>

        <div className="max-w-4xl mx-auto">
          {otherOfferingsData.map((offering) => (
            <div key={offering.id} className="mb-4 last:mb-0">
              <button onClick={() => toggleFAQ(offering.id)} className="w-full text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                <div className="flex items-center justify-between p-6 xl:p-8">
                  <h3 className="text-[18px] xl:text-2xl font-light pr-4" style={{ fontSize: `${Clamp(1.0, 1.5)}` }}>
                    {offering.title}
                  </h3>
                  <div className={`transform transition-transform duration-500 ease-in-out ${openFAQ === offering.id ? "rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === offering.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="bg-white border-t border-gray-100 px-6 xl:px-8 pb-6 xl:pb-8">
                  <p className="text-[14px] xl:text-lg text-gray-700 pt-4">{offering.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
