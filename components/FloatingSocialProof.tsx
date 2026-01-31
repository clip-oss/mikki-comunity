'use client';

import { motion } from 'framer-motion';
import JoinButton from './JoinButton';

export default function FloatingSocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[40] bg-fuchsia-500/10 border-b border-fuchsia-500/20 py-2"
    >
      <div className="flex items-center justify-center gap-2 text-sm px-4">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
        <span className="text-fuchsia-300 hidden sm:inline">147 people joined this week</span>
        <span className="text-fuchsia-300 sm:hidden">147 joined</span>
        <span className="text-zinc-600 hidden sm:inline">|</span>
        <JoinButton className="text-white font-medium hover:underline whitespace-nowrap">
          Join Free →
        </JoinButton>
      </div>
    </motion.div>
  );
}
