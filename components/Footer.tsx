'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import JoinButton from './JoinButton';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black border-t border-zinc-900 py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">MIKKI</span>
              <span className="text-fuchsia-500">MASE</span>
            </Link>
            <p className="text-zinc-600 text-sm mt-2">From prison to $32M</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/story"
              className="text-zinc-500 hover:text-white text-sm transition"
            >
              Story
            </Link>
            <Link
              href="/wins"
              className="text-zinc-500 hover:text-white text-sm transition"
            >
              Wins
            </Link>
            <Link
              href="/#proof"
              className="text-zinc-500 hover:text-white text-sm transition"
            >
              Proof
            </Link>
            <JoinButton className="text-zinc-500 hover:text-white text-sm transition">
              Telegram
            </JoinButton>
          </div>

          {/* CTA */}
          <JoinButton className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition">
            Join Free
          </JoinButton>
        </div>

        <div className="border-t border-zinc-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2024 Mikki Mase. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs">
            Gambling involves risk. Play responsibly.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
