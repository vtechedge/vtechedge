import Head from "next/head";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { organizationSchema, websiteSchema, injectSchema } from "@/utils/structuredData";
import Landing from "@/components/Landing/Landing";
import About from "@/components/Landing/About";
import Stats from "@/components/Landing/Stats";
import Brands from "@/components/Landing/Brands";
import Service from "@/components/Landing/Service";
import Process from "@/components/Landing/Process";
import Why from "@/components/Landing/Why";
import Testimonials from "@/components/Landing/Testimonials";
import FAQ from "@/components/Landing/FAQ";
import FloatingCTA from "@/components/Landing/FloatingCTA";
import ScrollProgress from "@/components/Landing/ScrollProgress";

export default function Home() {
  useScrollAnimation('fade-in-up', 0.15);

  return (
    <>
      <Head>
        <title>VTech - IT Solutions & Automation Services</title>
        <meta name="description" content="Professional IT consulting, RPA implementation, and automation services. Transform your business with cutting-edge technology solutions tailored to your needs." />
        <meta name="keywords" content="IT consulting, RPA, automation, business solutions, digital transformation" />
        <meta property="og:title" content="VTech - IT Solutions & Automation" />
        <meta property="og:description" content="Professional IT consulting and automation services" />
        <meta property="og:type" content="website" />
        {injectSchema(organizationSchema)}
        {injectSchema(websiteSchema)}
      </Head>

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <div>
        <main className="">
          <Landing />
          <div data-animate><About /></div>
          <div data-animate><Stats /></div>
          <div data-animate><Brands /></div>
          <div data-animate><Service /></div>
          <div data-animate><Process /></div>
          <div data-animate><Why /></div>
          <div data-animate><Testimonials /></div>
          <div data-animate><FAQ /></div>
        </main>
      </div>

      {/* Floating Contact Widget */}
      <FloatingCTA />
    </>
  );
}
