import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const activities = [
  {
    role: "Staff DDM - Mahasiswa Mengajar",
    period: "March 2026 - May 2026",
    description: "Contributing to documentation, publication, and visual content needs for student activity programs.",
    tags: ["Documentation", "Publication", "Visual Content", "Teamwork"],
    icon: "mdi:book-open-page-variant-outline",
    bgColor: "bg-[#FFE974]",
  },
  {
    role: "Staff DDM - Filkom Mengajar",
    period: "April 2026 - Present",
    description: "Supporting event documentation and digital media content for educational and social activities.",
    tags: ["Event Documentation", "Digital Media", "Content", "Teamwork"],
    icon: "mdi:school-outline",
    bgColor: "bg-[#74FFED]",
  },
  {
    role: "Staff DDM - FILAFEST (FILKOM Awarding Festival)",
    period: "May 2026 - Present",
    description: "Supporting documentation, publication, and visual content needs for FILKOM Awarding Festival, an awarding event that highlights appreciation, achievements, and student contributions within the FILKOM environment.",
    tags: ["Documentation", "Publication", "Visual Content", "Event Support"],
    icon: "mdi:trophy-outline",
    bgColor: "bg-[#FFB4E6]",
  },
  {
    role: "Staff DDM - HOLOGY (House of Technology)",
    period: "May 2026 - Present",
    description: "Contributing to event documentation and digital media content for HOLOGY, a technology-focused event that involves publication, activity coverage, and creative visual documentation.",
    tags: ["Event Documentation", "Digital Media", "Creative Content", "Teamwork"],
    icon: "mdi:laptop",
    bgColor: "bg-[#CFC3FF]",
  },
  {
    role: "Class Social Media Manager",
    period: "2024 - 2025",
    description: "Managed class social media by editing, uploading, and organizing visual content for class activities.",
    tags: ["Social Media", "Content Editing", "Visual Layout", "Digital Content"],
    icon: "mdi:instagram",
    bgColor: "bg-[#98FF98]",
  },
  {
    role: "Staff DDM - School Art Exhibition",
    period: "February 2025",
    description: "Handled documentation and supported creative publication needs for the school art exhibition.",
    tags: ["Documentation", "Creative Publication", "Event Support", "Visual Content"],
    icon: "mdi:palette-outline",
    bgColor: "bg-[#FFE974]",
  },
  {
    role: "Staff DDM - Class Meeting",
    period: "2023",
    description: "Contributed to event documentation and publication during school class meeting activities.",
    tags: ["Documentation", "Publication", "Event Support", "Teamwork"],
    icon: "mdi:account-group-outline",
    bgColor: "bg-[#74FFED]",
  },
];

export const OrganizationSection = () => {
  return (
    <motion.section
      id="organization"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center bg-[#E5E5FF] px-4 py-16 sm:px-6 md:px-8 md:py-20"
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
            Organization & Activities
          </motion.h2>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {activities.map((activity, index) => (
              <motion.article
                key={`${activity.role}-${activity.period}`}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`${activity.bgColor} p-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-6 ${
                  index === activities.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="grid h-12 w-12 shrink-0 place-items-center bg-white border-4 border-black">
                    <Icon icon={activity.icon} className="h-7 w-7" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="break-words text-lg font-black leading-tight sm:text-xl">{activity.role}</h3>
                      <span className="w-fit shrink-0 bg-black text-white px-3 py-1 text-sm font-bold">
                        {activity.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed sm:text-base">{activity.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {activity.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white px-3 py-1 text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
