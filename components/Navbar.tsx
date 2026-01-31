'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);

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
            href="/the-system"
            className="text-zinc-400 hover:text-white text-sm transition"
          >
            System
          </Link>
          <Link
            href="/tools"
            className="text-zinc-400 hover:text-white text-sm transition"
          >
            Tools
          </Link>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="text-zinc-400 hover:text-white text-sm transition flex items-center gap-1"
            >
              More
              <svg
                className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl"
                >
                  <Link
                    href="/timeline"
                    className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                  >
                    Timeline
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/community"
                    className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                  >
                    Community
                  </Link>
                  <Link
                    href="/#proof"
                    className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                  >
                    Proof
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://t.me/+9R9kDE-c2UVhMTc0"
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
