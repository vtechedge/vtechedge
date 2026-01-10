import Head from "next/head";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { organizationSchema, websiteSchema, injectSchema } from "@/utils/structuredData";
import Landing from "@/components/Landing/Landing";
import About from "@/components/Landing/About";
import Brands from "@/components/Landing/Brands";
import Service from "@/components/Landing/Service";
import Why from "@/components/Landing/Why";

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
      <div>
        <main className="">
          <Landing />
          <div data-animate><About /></div>
          <div data-animate><Brands /></div>
          <div data-animate><Service /></div>
          <div data-animate><Why /></div>
        </main>
      </div>
    </>
  );
}
