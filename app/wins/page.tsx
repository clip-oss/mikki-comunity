'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

const wins = [
  {
    id: 'venetian',
    title: 'The Venetian',
    amount: '$10M+',
    status: 'verified',
    location: 'Las Vegas, NV',
    period: '2021-2022',
    image: 'https://www.mikki-mase.com/images/mikki-main-1.webp',
    description: 'The verified win. Professional poker player Jake Ormand witnessed Mikki extract over $10 million at a single baccarat table. Casino reviewed thousands of hours of footage. Found nothing illegal. Banned him anyway.',
    verification: 'Jake Ormand testimony, casino surveillance review',
    isLoss: false,
  },
  {
    id: 'highstakes',
    title: 'High Stakes Tables',
    amount: '$3M+',
    status: 'verified',
    location: 'Las Vegas, NV',
    period: '2020-2023',
    image: 'https://www.mikki-mase.com/images/mikki-main-2.webp',
    description: '$3 million buy-ins. $250,000 per hand. Strategic timing: win big, disappear for weeks, come back. Averaging $1M/week during peak runs.',
    verification: 'Casino records shown on Money Buys Happiness podcast',
    isLoss: false,
  },
  {
    id: 'streak',
    title: '7-Day Winning Streak',
    amount: '$11.5M',
    status: 'claimed',
    location: 'Multiple casinos',
    period: 'Peak era',
    image: null,
    description: 'Mikki\'s biggest documented winning streak. Won $11,526,000 over 7 days playing short sessions of 3-15 minutes each. Betting $250K per hand.',
    verification: 'Self-reported, not independently verified',
    isLoss: false,
  },
  {
    id: 'wynn',
    title: 'Wynn Las Vegas',
    amount: '-$1.5M',
    status: 'verified',
    location: 'Las Vegas, NV',
    period: '2021-2022',
    image: null,
    description: 'Not every session was a win. Lost $4M, won back $2.5M, net loss $1.5M. The Wynn still banned him. Why? Because they saw the system.',
    verification: 'Documented casino records',
    isLoss: true,
    note: 'Transparency builds trust. Unlike fake gurus, Mikki documents his losses publicly.',
  },
  {
    id: 'hcl',
    title: 'Hustler Casino Live',
    amount: '-$938,950',
    status: 'verified',
    location: 'Los Angeles, CA',
    period: '2022-2023',
    image: null,
    description: 'Poker is not Mikki\'s game. His edge is in baccarat. Documented net loss of nearly $1M on the popular poker stream.',
    verification: 'Public stream records',
    isLoss: true,
    note: 'If he claimed to crush every game, it would sound fake. Losing at poker but winning at baccarat suggests a real, specific edge.',
  },
  {
    id: 'biggest-loss',
    title: 'Biggest Single Loss',
    amount: '-$8M',
    status: 'claimed',
    location: 'Undisclosed',
    period: 'Undisclosed',
    image: null,
    description: 'Mikki\'s largest single-session loss. He attributes it to casino cheating. Casinos deny this.',
    verification: 'Self-reported',
    isLoss: true,
  },
];

const sources = [
  'Jake Ormand testimony (2021-2022)',
  'Soft White Underbelly interview (Dec 2023)',
  'VladTV interviews (2023-2024)',
  'Hustler Casino Live records',
  'Money Buys Happiness podcast (casino account reveal)',
];

export default function WinsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
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

            <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">Documented Results</p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Wins & Losses
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              The documented results. Verified wins, public losses, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wins Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wins.map((win, index) => (
              <motion.div
                key={win.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-zinc-900 border rounded-2xl overflow-hidden transition-all hover:shadow-xl ${
                  win.isLoss
                    ? 'border-zinc-800 hover:border-red-500/50'
                    : 'border-zinc-800 hover:border-green-500/50'
                }`}
              >
                {/* Image or Placeholder */}
                <div className="aspect-video relative overflow-hidden bg-zinc-800">
                  {win.image ? (
                    <>
                      <Image
                        src={win.image}
                        alt={win.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">{win.isLoss ? '📉' : '📈'}</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-white text-xs font-bold px-2 py-1 rounded ${
                      win.status === 'verified'
                        ? win.isLoss ? 'bg-red-500' : 'bg-green-500'
                        : 'bg-yellow-500'
                    }`}>
                      {win.status === 'verified' ? (win.isLoss ? 'VERIFIED LOSS' : 'VERIFIED') : 'CLAIMED'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className={`text-4xl font-black mb-1 ${win.isLoss ? 'text-red-500' : 'text-green-500'}`}>
                    {win.amount}
                  </p>
                  <h3 className="text-white font-bold text-xl mb-1">{win.title}</h3>
                  <p className="text-zinc-500 text-sm mb-3">{win.location} • {win.period}</p>
                  <p className="text-zinc-400 text-sm mb-4">{win.description}</p>

                  {win.note && (
                    <div className="bg-zinc-800/50 rounded-lg p-3 mb-4">
                      <p className="text-zinc-500 text-xs italic">{win.note}</p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-zinc-600 text-xs uppercase tracking-wider mb-1">Verification</p>
                    <p className="text-zinc-400 text-sm">{win.verification}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Totals Summary */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-white text-center mb-12">Summary</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Claimed Total Wins</p>
                <p className="text-fuchsia-500 text-4xl font-black">$32M+</p>
              </div>
              <div className="bg-zinc-900 border border-green-500/30 rounded-2xl p-6 text-center">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Verified Wins</p>
                <p className="text-green-500 text-4xl font-black">$10M+</p>
                <p className="text-zinc-600 text-xs mt-1">Venetian only</p>
              </div>
              <div className="bg-zinc-900 border border-red-500/30 rounded-2xl p-6 text-center">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Documented Losses</p>
                <p className="text-red-500 text-4xl font-black">$2.4M+</p>
                <p className="text-zinc-600 text-xs mt-1">Wynn + HCL</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Casino Bans</p>
                <p className="text-white text-4xl font-black">150+</p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center max-w-2xl mx-auto">
              <p className="text-zinc-400 text-sm">
                <strong className="text-white">Note:</strong> Total winnings figure is self-reported.
                $10M+ at Venetian is the only independently verified large win.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* How We Verify */}
              <div>
                <h2 className="text-2xl font-black text-white mb-6">How We Verify</h2>
                <div className="space-y-4">
                  {[
                    'Third-party witnesses (Jake Ormand)',
                    'Casino surveillance reviews',
                    'Public poker stream records (HCL)',
                    'Casino rewards account records shown on camera',
                    'IRS records (Mikki claims these are public)',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 text-sm">✓</span>
                      <span className="text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sources */}
              <div>
                <h2 className="text-2xl font-black text-white mb-6">Sources</h2>
                <div className="space-y-3">
                  {sources.map((source, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-fuchsia-500 rounded-full" />
                      <span className="text-zinc-400">{source}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-white mb-4">Want to Learn the System?</h2>
            <p className="text-zinc-400 mb-8">
              Join the free Telegram community for strategy breakdowns and real-time updates.
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
