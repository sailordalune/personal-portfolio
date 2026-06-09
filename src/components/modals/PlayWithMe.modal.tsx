import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

interface PlayWithMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlayWithMeModal = ({ isOpen, onClose }: PlayWithMeModalProps) => {
  const games = [
    { name: 'Mobile Legends', id: 'UID: 556974505 (8241)', icon: 'mdi:sword-cross' },
    { name: 'Roblox', id: 'Username: amatheiia', icon: 'simple-icons:roblox' },
  ];

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
        className="relative w-full max-w-2xl bg-[#FFE5E5] p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto"
      >
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFD700] rounded-full border-2 border-black"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF69B4] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#98FB98] rounded-full border-2 border-black"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#87CEEB] rounded-full border-2 border-black"></div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="flex items-center gap-3 text-3xl font-bold">
            Play Games With Me!
            <Icon icon="game-icons:gamepad" className="h-8 w-8" />
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close play games modal"
          >
            <Icon icon="carbon:close" className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon icon={game.icon} className="h-6 w-6" />
                <h3 className="text-xl font-bold">{game.name}</h3>
              </div>
              <p className="text-gray-700">{game.id}</p>
            </div>
          ))}
        </div>

        <div className="absolute -z-10 w-32 h-32 top-1/2 -translate-y-1/2 -right-16 opacity-10">
          <Icon icon="game-icons:game-console" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};
