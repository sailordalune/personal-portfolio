import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <motion.section 
    id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center bg-[#FFE5E5] px-4 pb-10 pt-28 sm:px-6 md:px-8 md:pb-8 md:pt-24"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="flex items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[600px]">
            <Image
              src="/hero-zamira.png"
              alt="Illustration of a woman with long hair working at a computer"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center md:mx-0 md:-ml-8 lg:-ml-12"
        >
          <h1 className="mb-2 text-[clamp(2rem,9vw,4rem)] font-bold leading-tight">Zamira Nasywa Udhata</h1>
          <div className="min-h-[2.25rem] text-xl sm:text-2xl md:text-3xl">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                'Product Designer',
                2000,
                'Front-End Learner',
                2000,
                'Graphic Designer',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="inline-block font-semibold"
            />
          </div>
          <p className="mt-4 max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl">Passionate about creating clean, meaningful, and user-friendly digital experiences through UI/UX, visual design, and front-end development.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
