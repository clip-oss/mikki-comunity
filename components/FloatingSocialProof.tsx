'use client';

import { motion } from 'framer-motion';

export default function FloatingSocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-fuchsia-500/10 border-b border-fuchsia-500/20 py-2"
    >
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-fuchsia-300">147 people joined this week</span>
        <span className="text-zinc-600">|</span>
        <a
          href="https://t.me/mikkimase"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-medium hover:underline"
        >
          Join Telegram Free →
        </a>
      </div>
    </motion.div>
  );
}
