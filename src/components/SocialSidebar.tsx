'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSound } from '@/components/SoundContext';

const itemVariants = {
  hidden: { opacity: 0, x: -18, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.15 + index * 0.08,
      type: 'spring' as const,
      stiffness: 260,
      damping: 20,
    },
  }),
};

export default function SocialSidebar() {
  const { playSound } = useSound();

  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      aria-label="Social links"
      className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-7 z-40 pointer-events-auto"
    >
      <motion.div
        className="flex flex-col items-center gap-7"
        initial="hidden"
        animate="visible"
      >
        <motion.div custom={0} variants={itemVariants} whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="mailto:davedominc912@gmail.com"
            className="text-gray-300 hover:text-[color:var(--accent)] transition-colors duration-300"
            onClick={() => playSound('social')}
          >
            <FaEnvelope size={26} />
          </Link>
        </motion.div>

        <motion.div custom={1} variants={itemVariants} whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="https://www.linkedin.com/in/davegoze/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[color:var(--accent)] transition-colors duration-300"
            onClick={() => playSound('social')}
          >
            <FaLinkedin size={26} />
          </Link>
        </motion.div>

        <motion.div custom={2} variants={itemVariants} whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="https://github.com/httpsdave"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[color:var(--accent)] transition-colors duration-300"
            onClick={() => playSound('social')}
          >
            <FaGithub size={26} />
          </Link>
        </motion.div>

        <motion.div
          className="w-[3px] h-32 bg-white/80 mt-2 origin-bottom"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.aside>
  );
}