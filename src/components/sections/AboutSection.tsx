import { motion } from "framer-motion";

const quickBio = [
  "\uD83D\uDCCD Location: Malang, Indonesia",
  "\uD83C\uDF93 Education: Information Systems Student",
  "\uD83D\uDCBC Current Role: UI/UX & Front-End Enthusiast",
  "\uD83C\uDFC0 Hobbies: Reading Comics, Playing Basketball",
];

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center bg-[#E5FFE5] px-4 py-16 sm:px-6 md:px-8 md:py-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto my-8 max-w-4xl bg-white p-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-8 md:my-12"
        >
          <motion.h2
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="mb-8 border-b-4 border-black pb-4 text-3xl font-black uppercase sm:text-4xl"
          >
            About me
          </motion.h2>

          <div className="grid gap-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFE974] p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-6"
            >
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-lg">
                I&apos;m an Information Systems student with a strong interest in UI/UX design, front-end development, and digital creative projects. I enjoy turning ideas into clean, meaningful, and user-friendly interfaces by combining visual design, technology, and storytelling. Through academic projects and organizational experiences, I continue to explore how design can make digital experiences more structured, engaging, and easy to use.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-[#FF9B73] p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-6"
            >
              <h3 className="text-2xl font-bold mb-4">Quick Bio</h3>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg space-y-2"
              >
                {quickBio.map((item) => (
                  <motion.p key={item} whileHover={{ x: 10, transition: { duration: 0.2 } }}>
                    {item}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
