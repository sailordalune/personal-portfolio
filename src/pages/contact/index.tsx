import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Head from 'next/head';

const ContactPage = () => {
  const socialCards = [
    {
      platform: 'GitHub',
      username: '@sailordalune',
      icon: 'mdi:github',
      stats: 'Code & portfolio projects',
      link: 'https://github.com/sailordalune',
      bgColor: '#FFE4E1',
      rotate: -2
    },
    {
      platform: 'Instagram',
      username: '@nasyviie',
      icon: 'mdi:instagram',
      stats: 'Design & daily updates',
      link: 'https://www.instagram.com/nasyviie',
      bgColor: '#E0FFFF',
      rotate: 1
    },
    {
      platform: 'LinkedIn',
      username: 'Zamira Nasywa',
      icon: 'mdi:linkedin',
      stats: 'Professional profile',
      link: 'https://www.linkedin.com/in/zamiranasywa',
      bgColor: '#F0FFF0',
      rotate: -1
    },
    {
      platform: 'TikTok',
      username: '@sailordalune',
      icon: 'ic:baseline-tiktok',
      stats: 'Creative content',
      link: 'https://www.tiktok.com/@sailordalune',
      bgColor: '#FFF0F5',
      rotate: 2
    },
    {
      platform: 'Email',
      username: 'zamiranasywaa@gmail.com',
      icon: 'mdi:email',
      stats: 'Project inquiries',
      link: 'mailto:zamiranasywaa@gmail.com',
      bgColor: '#F0F8FF',
      rotate: -3
    },
    {
      platform: 'Figma',
      username: '@sailordalune',
      icon: 'logos:figma',
      stats: 'Design workspace',
      link: 'https://www.figma.com/@sailordalune',
      bgColor: '#FFE4E6',
      rotate: 1.5
    },
    {
      platform: 'Vercel',
      username: 'sailordalune',
      icon: 'simple-icons:vercel',
      stats: 'Deployment profile',
      link: 'https://vercel.com/sailordalune',
      bgColor: '#E6E6FA',
      rotate: -1.5
    },
    {
      platform: 'Discord',
      username: 'sailordalune',
      icon: 'mdi:discord',
      stats: 'Let&apos;s chat',
      link: 'http://discordapp.com/users/756719692638322728',
      bgColor: '#F5F5DC',
      rotate: 2.5
    }
  ];

  return (
    <>
    <Head>
      <title>Contacts - Zamira Nasywa Udhata</title>
      <meta name="description" content="My contacts" />
    </Head>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#E5E5FF] px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 bg-white p-5 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:mt-16 sm:p-8"
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#FFD700] rounded-full border-2 border-black"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#FF69B4] rounded-full border-2 border-black"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#98FB98] rounded-full border-2 border-black"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#87CEEB] rounded-full border-2 border-black"></div>

          <h1 className="mb-10 text-center text-3xl font-bold text-black sm:mb-12 sm:text-4xl">GET IN TOUCH</h1>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {socialCards.map((social, index) => (
              <motion.a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="block p-5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow sm:p-6"
                style={{ 
                  transform: `rotate(${social.rotate}deg)`,
                  backgroundColor: social.bgColor
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon icon={social.icon} className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{social.platform}</h3>
                  <p className="mb-2 max-w-full break-words text-gray-700">{social.username}</p>
                  <p className="text-sm text-gray-600">{social.stats}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default ContactPage;
