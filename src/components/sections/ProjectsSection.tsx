import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";
import projectsData from "@/lib/data/projects.json";

interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  previewUrl?: string;
  type: string | string[];
  year: number | string;
}

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const projects: Project[] = projectsData;
  const getProjectTypes = (project: Project) => Array.isArray(project.type) ? project.type : [project.type];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
  };

  return (
    <motion.section
    id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center bg-[#ffba79] px-4 py-16 sm:px-6 md:px-8 md:py-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto my-8 max-w-7xl bg-white p-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-8 md:my-12"
        >
          <motion.h2
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="mb-8 border-b-4 border-black pb-4 text-3xl font-black uppercase sm:text-4xl"
          >
            Selected Works
          </motion.h2>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${currentPage}-${index}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFE4E1] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="relative w-full h-48 border-b-4 border-black">
                  {!loadedImages[project.image] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <span className="text-gray-600 font-bold text-lg">Loading...</span>
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    onLoad={() => handleImageLoad(project.image)}
                    className={`w-full h-48 object-cover ${
                      loadedImages[project.image] ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="break-words text-xl font-bold sm:text-2xl">{project.title}</h3>
                    <span className="text-sm bg-black text-white px-2 py-1">
                      {project.year}
                    </span>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {getProjectTypes(project).map((type) => (
                      <span key={type} className="inline-block text-sm bg-gray-200 px-2 py-1 border-2 border-black">
                        {type}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white px-3 py-1 text-sm border-2 border-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.previewUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-[#4CAF50] text-white px-3 py-1.5 text-sm hover:bg-[#45a049] transition-colors"
                    >
                      <Icon icon="mdi:eye-outline" className="w-4 h-4" />
                      Preview Work
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                ${currentPage === 0 ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#FFB6C1] hover:bg-[#FF69B4]'}`}
            >
              <Icon icon="mdi:chevron-left" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </motion.button>
            <div className="text-sm sm:text-base md:text-lg font-medium">
              Showing {currentPage * 4 + 1}-{Math.min((currentPage + 1) * 4, projects.length)} of {projects.length}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                ${currentPage === totalPages - 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#FFB6C1] hover:bg-[#FF69B4]'}`}
            >
              <Icon icon="mdi:chevron-right" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
