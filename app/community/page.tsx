'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

const benefits = [
  {
    icon: '📚',
    title: 'Free Strategy Guides',
    description: 'Step-by-step breakdowns of baccarat strategy and bankroll management',
  },
  {
    icon: '📊',
    title: 'Pattern Recognition Cheatsheets',
    description: 'The same tools Mikki uses to identify opportunities at the table',
  },
  {
    icon: '💬',
    title: 'Direct Updates',
    description: 'Behind-the-scenes stories and real-time updates from Mikki',
  },
  {
    icon: '🎯',
    title: 'Community Discussion',
    description: 'Connect with 7,400+ members sharing strategies and results',
  },
];

export default function CommunityPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Full Page CTA */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/20 via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-8 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">7,403 members online</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Join the Free Community
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-zinc-400 mb-10"
          >
            No courses. No upsells. Just free strategies, cheatsheets, and real-time updates from Mikki himself.
          </motion.p>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4 mb-10 text-left"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition"
              >
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h3 className="text-white font-bold">{benefit.title}</h3>
                  <p className="text-zinc-500">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href="https://t.me/+9R9kDE-c2UVhMTc0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-8 py-5 rounded-xl text-xl transition shadow-lg shadow-fuchsia-500/25 transform hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              Join Telegram Free
            </a>

            <p className="text-zinc-600 text-sm mt-6">
              100% free · No credit card · Instant access
            </p>
          </motion.div>

          {/* Trust elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 pt-8 border-t border-zinc-800"
          >
            <p className="text-zinc-500 text-sm mb-4">Why it&apos;s free:</p>
            <p className="text-zinc-400 italic">
              &quot;I&apos;m not selling a course. I don&apos;t promise a magic system. I just show people what I see.
              The community is free because I already made my money from the casinos.&quot;
            </p>
            <p className="text-zinc-600 text-sm mt-2">— Mikki Mase</p>
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 grid grid-cols-3 gap-4"
          >
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4">
              <p className="text-fuchsia-500 text-2xl font-black">7,403</p>
              <p className="text-zinc-500 text-xs">Members</p>
            </div>
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4">
              <p className="text-green-500 text-2xl font-black">147</p>
              <p className="text-zinc-500 text-xs">Joined This Week</p>
            </div>
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4">
              <p className="text-white text-2xl font-black">$0</p>
              <p className="text-zinc-500 text-xs">Cost</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
