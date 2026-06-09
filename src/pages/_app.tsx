import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Cursor from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/react"
import { Navo } from "@/components/Navo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Zamira Nasywa Udhata's portfolio website, showcasing UI/UX design, visual design, and front-end development projects." />
      <meta name="keywords" content="zamira nasywa udhata, portfolio, UI/UX design, front-end development, visual design, projects" />
      <meta property="og:title" content="Zamira Nasywa Udhata - Portfolio" />
      <meta property="og:description" content="Zamira Nasywa Udhata's portfolio website, showcasing UI/UX design, visual design, and front-end development projects." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://znasywa.vercel.app" />
      <meta property="og:image" content="https://znasywa.vercel.app/og.png" />
      <link rel="canonical" href="https://znasywa.vercel.app" />
    </Head>
    <main className="font-sans text-black dark:text-black">
      <Navo />
      <Header />
      <Analytics />
      <Cursor />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
  );
}
