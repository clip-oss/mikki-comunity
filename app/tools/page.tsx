'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

const tools = [
  {
    href: '/tools/blackjack-calculator',
    title: 'Blackjack Strategy Calculator',
    description: 'Get the mathematically optimal play for any hand. Simple tap interface.',
    tags: ['Basic Strategy', 'Expected Value', 'Live Probability'],
    popular: true,
  },
  {
    href: '/tools/bankroll-calculator',
    title: 'Bankroll Calculator',
    description: 'Calculate session bankroll, stop-loss limits, and win goals.',
    tags: ['Risk Management', 'Win Goals', 'Session Planning'],
    popular: false,
  },
  {
    href: '/tools/roulette-calculator',
    title: 'Roulette Odds Calculator',
    description: 'Compare odds, payouts, and house edge for every bet type.',
    tags: ['All Bet Types', 'House Edge', 'Payout Tables'],
    popular: false,
  },
  {
    href: '/tools/slot-calculator',
    title: 'Slot Bonus Calculator',
    description: 'See average spins and cost to hit bonus on popular slots.',
    tags: ['Bonus Frequency', 'Cost Analysis', 'RTP Calculator'],
    popular: false,
  },
];

export default function ToolsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-6"
          >
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white">Tools</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4"
          >
            Free Professional Tools
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Gambling Tools & Calculators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            Professional-grade tools used by serious players.<br />
            No sign-up. No fees. No bullshit.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-8 text-sm"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-zinc-500">Free Tools</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-zinc-500">Free Forever</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-zinc-500">Ads or Signup</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={tool.href} className="group relative block">
                  {tool.popular && (
                    <div className="absolute -top-3 left-4 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-fuchsia-500/50 transition h-full">
                    <h3 className="text-2xl font-bold text-white mb-3">{tool.title}</h3>
                    <p className="text-zinc-400 mb-6">{tool.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-fuchsia-500 font-semibold group-hover:underline">
                      Try it free →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Coming Soon - Session Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900/50 border border-zinc-800 border-dashed rounded-2xl p-8 opacity-60"
            >
              <span className="bg-zinc-700 text-zinc-400 text-xs px-3 py-1 rounded-full">Coming Soon</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-3">Session Tracker</h3>
              <p className="text-zinc-500 mb-6">Track your wins, losses, and patterns across sessions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-800/50 text-zinc-500 text-xs px-3 py-1 rounded-full">Win/Loss Tracking</span>
                <span className="bg-zinc-800/50 text-zinc-500 text-xs px-3 py-1 rounded-full">Pattern Analysis</span>
                <span className="bg-zinc-800/50 text-zinc-500 text-xs px-3 py-1 rounded-full">Export Data</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why These Tools Section */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-white mb-4">Why These Tools?</h2>
            <p className="text-zinc-400 mb-8">
              I&apos;ve spent $10+ million learning what works and what doesn&apos;t. These tools are the result of that education—built to give you the edge I wish I had starting out.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-white font-bold mb-2">Mathematically Accurate</h3>
                <p className="text-zinc-500 text-sm">Built on proven probability theory and real-world casino rules.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Built for Speed</h3>
                <p className="text-zinc-500 text-sm">Fast calculations, clean interface. Get answers in seconds.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">No Data Collection</h3>
                <p className="text-zinc-500 text-sm">Your sessions stay private. No tracking, no accounts required.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-fuchsia-500/10 to-transparent border border-fuchsia-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-black text-white mb-4">Want More Strategy?</h3>
            <p className="text-zinc-400 mb-6">
              Join the free Telegram community for exclusive strategies and real-time updates.
            </p>
            <a
              href="https://t.me/mikkimase"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-8 py-4 rounded-full text-lg transition transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              Join Telegram Free
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
