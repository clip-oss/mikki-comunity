'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-9 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">MIKKI</span>
          <span className="text-fuchsia-500">MASE</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/story"
            className="text-zinc-400 hover:text-white text-sm transition"
          >
            Story
          </Link>
          <Link
            href="/wins"
            className="text-zinc-400 hover:text-white text-sm transition"
          >
            Wins
          </Link>
          <Link
            href="/#proof"
            className="text-zinc-400 hover:text-white text-sm transition"
          >
            Proof
          </Link>
          <Link
            href="/community"
            className="text-zinc-400 hover:text-white text-sm transition"
          >
            Community
          </Link>
        </div>

        {/* CTA */}
        <a
          href="https://t.me/mikkimase"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition"
        >
          Join Free
        </a>
      </div>
    </motion.nav>
  );
}
