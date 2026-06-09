import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import { useState } from 'react';

interface CreateWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateWithMeModal = ({ isOpen, onClose }: CreateWithMeModalProps) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [projectIdea, setProjectIdea] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sailordalune', icon: 'mdi:github' },
    { name: 'Figma', url: 'https://www.figma.com/@sailordalune', icon: 'logos:figma' },
    { name: 'Vercel', url: 'https://vercel.com/sailordalune', icon: 'simple-icons:vercel' },
  ];

  const projectTypes = [
    { name: 'UI/UX Project', icon: 'ph:selection-background-bold' },
    { name: 'Front-End Project', icon: 'ph:browser-bold' },
    { name: 'Graphic Design', icon: 'ph:paint-brush-bold' },
    { name: 'Creative Collaboration', icon: 'ph:sparkle-bold' },
  ];

  const categories = [
    { name: 'Website Interface', icon: 'ph:globe-bold' },
    { name: 'Mobile App Interface', icon: 'ph:device-mobile-bold' },
    { name: 'Social Media Design', icon: 'ph:instagram-logo-bold' },
    { name: 'Portfolio Website', icon: 'ph:user-square-bold' },
    { name: 'Design System / UI Kit', icon: 'ph:intersect-square-bold' },
    { name: 'Digital Documentation', icon: 'ph:file-text-bold' },
  ];

  const handleSubmit = () => {
    if (!selectedType || !selectedCategory || !projectIdea.trim() || !contactInfo.trim()) {
      setIsSubmitted(false);
      setSubmitMessage('Please complete all fields before submitting.');
      return;
    }

    setIsSubmitted(true);
    setSubmitMessage('Thank you! Your proposal has been received.');
    setProjectIdea('');
    setContactInfo('');
    setSelectedType('');
    setSelectedCategory('');
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#E5F3FF] p-5 sm:p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFD700] rounded-full border-2 border-black"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF69B4] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#98FB98] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#87CEEB] rounded-full border-2 border-black"></div>

        <button
          onClick={onClose}
          className="sticky top-0 z-20 float-right -mr-1 -mt-1 p-2 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100"
          aria-label="Close create with me modal"
        >
          <Icon icon="carbon:close" className="w-6 h-6" />
        </button>

        <div className="mb-5 pr-12">
          <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold">
            Create With Me!
            <Icon icon="ph:sparkle-bold" className="h-8 w-8" />
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            Share a design, front-end, or creative idea and let&apos;s shape it into something polished.
          </p>
        </div>

        <div className="clear-both space-y-5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">Project Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {projectTypes.map((type) => (
                <motion.button
                  key={type.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedType(type.name);
                    setSubmitMessage('');
                  }}
                  className={`p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    selectedType === type.name ? 'bg-[#4CAF50] text-white' : 'bg-white'
                  }`}
                >
                  <Icon icon={type.icon} className="w-6 h-6 mx-auto mb-1" />
                  <span className="font-bold text-sm">{type.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {selectedType && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Category</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setSubmitMessage('');
                    }}
                    className={`p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                      selectedCategory === category.name ? 'bg-[#4CAF50] text-white' : 'bg-white'
                    }`}
                  >
                    <Icon icon={category.icon} className="w-6 h-6 mx-auto mb-1" />
                    <span className="font-bold text-sm">{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {selectedCategory && (
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="font-bold block mb-2">Project Idea</label>
                <textarea
                  value={projectIdea}
                  onChange={(event) => {
                    setProjectIdea(event.target.value);
                    setSubmitMessage('');
                  }}
                  className="w-full p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  rows={3}
                  placeholder="Tell me about your idea, design request, or creative project..."
                />
              </div>
              <div>
                <label className="font-bold block mb-2">Contact Information</label>
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(event) => {
                    setContactInfo(event.target.value);
                    setSubmitMessage('');
                  }}
                  className="w-full p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="Your email, Instagram, or preferred contact method"
                />
              </div>
            </div>
          )}

          <div className="flex justify-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-white rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                aria-label={link.name}
              >
                <Icon icon={link.icon} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="flex justify-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Submit Proposal
            </motion.button>
          </div>

          {submitMessage && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-lg border-2 border-black bg-white p-3 text-center text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
                isSubmitted ? 'text-[#2E7D32]' : 'text-red-600'
              }`}
            >
              {submitMessage}
            </motion.p>
          )}
        </div>

        <div className="absolute -z-10 w-32 h-32 top-1/2 -translate-y-1/2 -right-16 opacity-10">
          <Icon icon="ph:sparkle-bold" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};
