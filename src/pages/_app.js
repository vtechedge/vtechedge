import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>VTechEdge Inc. | Digital Transformation Partners</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="VTechEdge Inc. - Strategic partner in your digital transformation journey. Specializing in Business Solutions, AI Automation, and IT Services." />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
