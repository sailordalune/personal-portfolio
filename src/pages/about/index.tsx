import { AboutSection } from "@/components/sections/AboutSection";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About - Zamira Nasywa Udhata</title>
        <meta
          name="description"
          content="About Zamira Nasywa Udhata, an Information Systems student interested in UI/UX design, front-end development, and digital creative projects."
        />
      </Head>
      <AboutSection />
    </>
  );
};

export default AboutPage;
