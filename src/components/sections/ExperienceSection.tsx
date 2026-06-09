import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skillGroups = [
  {
    title: "Web Development",
    icon: "mdi:web",
    bgColor: "bg-[#74FFED]",
    accentColor: "bg-[#00C2A8]",
    description: "Building clean, responsive interfaces for web projects.",
    skills: [
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Responsive Design", icon: "mdi:responsive" },
    ],
  },
  {
    title: "Product Design",
    icon: "mdi:palette-outline",
    bgColor: "bg-[#FFE974]",
    accentColor: "bg-[#FFD43B]",
    description: "Designing user flows, wireframes, prototypes, and UI systems.",
    skills: [
      { name: "Figma", icon: "logos:figma" },
      { name: "Wireframing", icon: "mdi:draw" },
      { name: "Prototyping", icon: "mdi:gesture-tap-button" },
      { name: "User Flow", icon: "mdi:transit-connection-variant" },
      { name: "Design System", icon: "mdi:shape-outline" },
      { name: "UI Kit", icon: "mdi:view-grid-outline" },
    ],
  },
  {
    title: "Graphic & Digital Design",
    icon: "mdi:brush-variant",
    bgColor: "bg-[#FFB4E6]",
    accentColor: "bg-[#F25CB5]",
    description: "Creating visual assets for content, social media, and layouts.",
    skills: [
      { name: "Canva", icon: "simple-icons:canva" },
      { name: "Layout Design", icon: "mdi:view-dashboard-outline" },
      { name: "Social Media Design", icon: "mdi:instagram" },
      { name: "Content Design", icon: "mdi:file-document-edit-outline" },
      { name: "Typography", icon: "mdi:format-font" },
      { name: "Color", icon: "mdi:eyedropper-variant" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "mdi:database-cog-outline",
    bgColor: "bg-[#B8F7A0]",
    accentColor: "bg-[#65D46E]",
    description: "Understanding data, backend basics, and simple app integrations.",
    skills: [
      { name: "Laravel", icon: "logos:laravel" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "Supabase", icon: "logos:supabase-icon" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "mdi:tools",
    bgColor: "bg-[#CFC3FF]",
    accentColor: "bg-[#8E79F2]",
    description: "Working with design, code, deployment, and project tools.",
    skills: [
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "mdi:github" },
      { name: "Vercel", icon: "simple-icons:vercel" },
      { name: "Android Studio", icon: "logos:android-studio" },
    ],
  },
];

const certifications = [
  {
    name: "Generative Artificial Intelligence",
    issuer: "Institute for Data Innovation and Artificial Intelligence (IDEA-AI), Australia",
    date: "2025",
    description: "Fundamental Principles and Practical Applications",
    icon: "mdi:certificate-outline",
  },
];

export const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center bg-[#FFE5E5] px-4 py-16 sm:px-6 md:px-8 md:py-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto my-8 max-w-6xl bg-white p-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-8 md:my-12"
        >
          <motion.h2
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="mb-8 border-b-4 border-black pb-4 text-3xl font-black uppercase sm:text-4xl"
          >
            Experience & Skills
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`${group.bgColor} p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-6`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${group.accentColor} grid h-12 w-12 shrink-0 place-items-center border-4 border-black`}>
                    <Icon icon={group.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{group.title}</h3>
                    <p className="text-sm font-medium mt-1">{group.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="bg-white px-3 py-2 border-2 border-black flex items-center gap-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <Icon icon={skill.icon} className="h-4 w-4 shrink-0" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="bg-[#98FF98] p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-6"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-4">Availability Status</h3>
                  <div className="flex items-center gap-3">
                    <span className="h-4 w-4 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-lg font-black sm:text-xl">Available for Work</span>
                  </div>
                </div>
                <div className="md:min-w-[260px]">
                  <p className="text-lg mb-2">Open to:</p>
                  <ul className="list-disc list-inside text-lg space-y-1">
                    <li>Part-time positions</li>
                    <li>Freelance projects</li>
                    <li>Remote work</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 bg-[#FFB6C1] p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-6"
          >
            <div className="flex flex-col gap-2 border-b-4 border-black pb-4 mb-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-2xl font-black">Certifications</h3>
              <span className="w-fit bg-white px-3 py-1 text-sm font-bold border-2 border-black">
                Learning Milestones
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((certificate, index) => (
                <motion.div
                  key={certificate.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#FFE974] border-4 border-black">
                      <Icon icon={certificate.icon} className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <h4 className="text-xl font-black">{certificate.name}</h4>
                        <span className="w-fit bg-black px-3 py-1 text-sm font-bold text-white">
                          {certificate.date}
                        </span>
                      </div>
                      <p className="mt-2 font-bold">{certificate.issuer}</p>
                      <p className="mt-1 text-sm">{certificate.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
