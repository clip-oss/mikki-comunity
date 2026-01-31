'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Navbar, Footer } from '@/components';

const tableOfContents = [
  { id: 'verified-wins', label: '01 - Verified Wins' },
  { id: 'documented-losses', label: '02 - Documented Losses' },
  { id: 'claimed-unverified', label: '03 - Claimed But Unverified' },
  { id: 'verdict', label: '04 - The Verdict' },
  { id: 'behind-wins', label: '05 - Behind the Wins' },
  { id: 'harassment', label: '06 - Casino Harassment Tactics' },
  { id: 'strategy', label: '07 - Betting Strategy' },
  { id: 'complete-record', label: '08 - Complete Win/Loss Record' },
];

const behindTheWinsStories = [
  {
    id: 'ritual',
    title: 'The $11.5M Win - What Happens After',
    content: `After winning $11.5 million, most people would celebrate. Not Mikki. His ritual is oddly specific: he orders a peanut butter and jelly sandwich, lightly toasted, with sliced banana on it, crusts cut off.

"Every time I do something like that, I actually shut off," he explains. He sends everybody home and acts like nothing happened. It's not celebration—it's emotional regulation. The same calm that lets him bet $250K per hand is the same calm that keeps him from spiraling after a massive win.`,
    quote: "I'll go like the first thing I always do is I order a peanut butter and jelly sandwich lightly toasted with sliced banana on it and the crusts cut off.",
  },
  {
    id: 'security',
    title: 'The Security Block - $7M Held Hostage',
    content: `One night, Mikki had $7 million in chips sitting on the table in front of him. Three security guards approached and pushed his chair against the table. He couldn't stand up. He couldn't reach his chips.

His response? "I ended up jumping up, standing on the chair, screaming at the top of my lungs." Why the dramatic reaction? "Before these three security guards get paid $12 bucks an hour trying to rob me for $7 million."

The tactic is designed to intimidate. For someone who survived juvenile detention, it didn't work.`,
    quote: "Before these three security guards get paid $12 bucks an hour trying to rob me for $7 million.",
  },
  {
    id: 'cheating',
    title: 'Caught Them Cheating - MGM Monitor',
    content: `At MGM, they changed everything for Mikki's session: new table, new felt, new cards, new monitors. On hand #2, Mikki noticed something wrong.

The monitor showed Bank: 7-2 (natural 9). But the felt showed Bank: 5-4 (also natural 9). Both equal 9, but completely different cards. He'd caught them.

"I caught you cheating," he told them. Their response: "You have 30 minutes to pack your bags." The official ban reason? "Throwing a glass and scaring dealers." The real reason? He was dating one of the dealers and saw too much.`,
    quote: "I caught you cheating.",
  },
  {
    id: 'prediction',
    title: 'The 3 of Clubs Prediction with 2 Chainz',
    content: `Playing with rapper 2 Chainz, cameras rolling. Mikki made a bold claim: "I bet you the next card that comes out is the 3 of clubs."

The dealer opens the shoe. 3 of clubs.

2 Chainz: "How the fuck did you know that?"

Mikki: "Because I know they're cheating."

Unedited footage, celebrity witness. Whether it was luck, pattern recognition, or something else—it's documented.`,
    quote: "Because I know they're cheating.",
  },
  {
    id: 'started',
    title: 'How It Started - The $500 Bet',
    content: `Before baccarat, Mikki was the biggest blackjack player in South Florida. Problem: even with a $5 million deposit, table max was $100K—limiting his edge.

A friend suggested: "Just try baccarat. You can bet twice as much."

His first baccarat bet ever: $500, just to learn. He won. Asked the dealer: "Tell me why we won."

Lost the next hand. Asked: "Why did we lose?"

5-6 years later: $11.5M single session, $32M+ total, 150+ bans. From a $500 learning bet to the most banned gambler in casino history.`,
    quote: "Just try baccarat. You can bet twice as much.",
  },
];

const harassmentTactics = [
  {
    icon: '📶',
    title: 'Wi-Fi / Signal Jamming',
    description: 'Block phone signal in rooms booked under his name. He tested this: booked two rooms, his = no signal, dad\'s = perfect signal.',
  },
  {
    icon: '🚿',
    title: 'Hot Water Shutoff',
    description: 'Turn off hot water to throw him off his routine and mental preparation.',
  },
  {
    icon: '🛗',
    title: 'Locked in Elevators',
    description: '"Malfunction" elevators when he\'s inside, trapping him for extended periods.',
  },
  {
    icon: '📦',
    title: 'Random Table Disruptions',
    description: 'Staff "accidentally" drops items mid-session. Example: Random person drops box of tissues on table during $M session.',
  },
  {
    icon: '👮',
    title: 'Security Intimidation',
    description: 'Surround with security, push chair against table so he can\'t stand, block access to his own chips.',
  },
  {
    icon: '🃏',
    title: 'Changing Table Equipment',
    description: 'Replace table, felt, cards, shoe, monitors specifically for his session. Potentially introduce rigged equipment.',
  },
];

const completeRecord = [
  { venue: 'The Venetian', game: 'Baccarat', amount: '+$10,000,000', type: 'WIN', period: '2021-2022', verification: 'VERIFIED', verificationNote: 'Jake Ormand' },
  { venue: 'Wynn Las Vegas', game: 'Baccarat', amount: '-$1,500,000', type: 'NET LOSS', period: '2021-2022', verification: 'DOCUMENTED', verificationNote: '' },
  { venue: 'Hustler Casino Live', game: 'Poker', amount: '-$938,950', type: 'NET LOSS', period: '2022-2023', verification: 'DOCUMENTED', verificationNote: '' },
  { venue: 'Biggest Single Loss', game: 'Baccarat', amount: '-$8,000,000', type: 'LOSS', period: 'One Night', verification: 'SELF-REPORTED', verificationNote: '' },
  { venue: 'Total Career', game: 'Baccarat', amount: '+$32,000,000', type: 'TOTAL', period: '2018-2024', verification: 'CLAIMED', verificationNote: '' },
  { venue: 'Biggest Session', game: 'Baccarat', amount: '+$11,526,000', type: 'WIN', period: '7 Days', verification: 'SELF-REPORTED', verificationNote: '' },
  { venue: 'First Million Win', game: 'Baccarat', amount: '+$1,125,000', type: 'WIN', period: 'Single Session', verification: 'SELF-REPORTED', verificationNote: '' },
  { venue: 'Peak Period', game: 'Baccarat', amount: '+$1M/week', type: 'AVERAGE', period: 'Year 3', verification: 'SELF-REPORTED', verificationNote: '' },
];

function StoryCard({ story, index }: { story: typeof behindTheWinsStories[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-800/50 transition"
      >
        <div className="flex items-center gap-4">
          <span className="text-fuchsia-500 font-bold text-lg">0{index + 1}</span>
          <h3 className="text-white font-bold text-lg">{story.title}</h3>
        </div>
        <svg
          className={`w-5 h-5 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-zinc-800">
          <div className="pt-6 space-y-4">
            {story.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-zinc-400 leading-relaxed">{paragraph}</p>
            ))}
            {story.quote && (
              <blockquote className="mt-4 pl-4 border-l-2 border-fuchsia-500">
                <p className="text-white italic">&quot;{story.quote}&quot;</p>
              </blockquote>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function WinsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.mikki-mase.com/images/mikki-main-2.webp"
            alt="Mikki Mase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white">Wins & Losses</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">
              Complete Win/Loss Breakdown
            </p>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Wins & Losses
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl">
              $10M+ verified, $32M claimed. Every documented win and loss with full transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Summary Bar */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-black text-green-500">$10M+</p>
              <p className="text-zinc-500 text-sm">Verified Wins</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-3xl font-black text-zinc-400">$22M+</p>
              <p className="text-zinc-500 text-sm">Claimed Wins</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-3xl font-black text-red-500">$10.4M</p>
              <p className="text-zinc-500 text-sm">Total Losses</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-3xl font-black text-fuchsia-500">$32M+</p>
              <p className="text-zinc-500 text-sm">Net Total (Claimed)</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">

            {/* Sticky Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-4">Contents</p>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-zinc-400 hover:text-fuchsia-400 transition py-1"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-20">

              {/* Section 1: Verified Wins */}
              <section id="verified-wins">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-green-500 text-2xl">✓</span>
                    <div>
                      <p className="text-green-500 font-semibold uppercase tracking-wider text-sm">Verified</p>
                      <h2 className="text-3xl font-black text-white">Independently Confirmed Wins</h2>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-8">
                    These wins have been verified by third-party witnesses, casino staff confirmations, or documented public records.
                  </p>

                  {/* The Venetian Card */}
                  <div className="bg-zinc-900 border border-green-500/30 rounded-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div>
                          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">VERIFIED</span>
                          <h3 className="text-2xl font-bold text-white mt-3">The Venetian</h3>
                          <p className="text-zinc-500">Las Vegas, NV • 2021-2022</p>
                        </div>
                        <p className="text-4xl font-black text-green-500">$10,000,000+</p>
                      </div>

                      <div className="space-y-4 text-zinc-400">
                        <div>
                          <p className="text-white font-semibold mb-1">Witness:</p>
                          <p>Professional poker player Jake Ormand was present at the table and publicly confirmed the win. Ormand is a well-known figure in the poker community with no reason to fabricate the story.</p>
                        </div>

                        <div>
                          <p className="text-white font-semibold mb-1">Casino Response:</p>
                          <p>The Venetian reviewed surveillance footage extensively. They found no evidence of cheating, card counting, or any illegal activity. Despite this, they banned Mikki for life.</p>
                        </div>

                        <div>
                          <p className="text-white font-semibold mb-1">Why This Matters:</p>
                          <p>This is the only win with independent third-party verification. Everything else is either self-reported or unverified.</p>
                        </div>
                      </div>

                      {/* Verification badge */}
                      <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                        <p className="text-green-400 font-semibold">Verification Status: ✓ CONFIRMED</p>
                        <p className="text-zinc-500 text-sm">Third-party witness (Jake Ormand) + Casino investigation (no cheating found)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Section 2: Documented Losses */}
              <section id="documented-losses" className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-red-500 text-2xl">⚠</span>
                    <div>
                      <p className="text-red-500 font-semibold uppercase tracking-wider text-sm">Documented Losses</p>
                      <h2 className="text-3xl font-black text-white">Where He Lost Money</h2>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-8">
                    Transparency matters. These losses are publicly documented and add credibility to his overall story.
                  </p>

                  <div className="space-y-6">

                    {/* Wynn Las Vegas */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NET LOSS</span>
                          <h3 className="text-xl font-bold text-white mt-3">Wynn Las Vegas</h3>
                          <p className="text-zinc-500">Las Vegas, NV • 2021-2022</p>
                        </div>
                        <p className="text-3xl font-black text-red-500">-$1,500,000</p>
                      </div>

                      <div className="space-y-3 text-zinc-400">
                        <p><strong className="text-white">What Happened:</strong> Lost $4 million, won back $2.5 million, walked away net negative $1.5 million.</p>
                        <p><strong className="text-white">The Twist:</strong> The Wynn still banned him despite the net loss. Why? Because casinos saw he was using a systematic approach, not gambling randomly.</p>
                      </div>

                      <div className="mt-4 p-3 bg-zinc-800 rounded-lg">
                        <p className="text-zinc-400 text-sm"><strong className="text-white">Why This Adds Credibility:</strong> If the story was fake, he&apos;d only claim wins. Documenting losses shows honesty.</p>
                      </div>
                    </div>

                    {/* Biggest Single Loss */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="bg-zinc-700 text-white text-xs font-bold px-2 py-1 rounded">SELF-REPORTED</span>
                          <h3 className="text-xl font-bold text-white mt-3">Biggest Single Loss</h3>
                          <p className="text-zinc-500">One Night • Self-Reported</p>
                        </div>
                        <p className="text-3xl font-black text-red-500">-$8,000,000</p>
                      </div>

                      <div className="space-y-3 text-zinc-400">
                        <p><strong className="text-white">What Happened:</strong> Mikki claims his biggest single loss was $8 million in one night. According to him, he figured out the casino was using manual card manipulation.</p>
                        <p><strong className="text-white">The Comeback:</strong> After reverse-engineering their cheating method, he claims he won back $9 million from the same casino, turning an $8M loss into a +$1M net profit.</p>
                      </div>
                    </div>

                    {/* Hustler Casino Live */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">DOCUMENTED</span>
                          <h3 className="text-xl font-bold text-white mt-3">Hustler Casino Live</h3>
                          <p className="text-zinc-500">Poker Livestream • Publicly Tracked</p>
                        </div>
                        <p className="text-3xl font-black text-red-500">-$938,950</p>
                      </div>

                      <div className="space-y-3 text-zinc-400">
                        <p><strong className="text-white">What Happened:</strong> Mikki played poker on Hustler Casino Live, a popular livestreamed poker show. His results are publicly tracked.</p>
                        <p><strong className="text-white">Key Insight:</strong> He&apos;s transparent about not being a poker crusher. His edge is in baccarat pattern recognition, not poker.</p>
                      </div>

                      <div className="mt-4 p-3 bg-zinc-800 rounded-lg">
                        <p className="text-zinc-400 text-sm"><strong className="text-white">Why This Matters:</strong> Shows his edge is specific to baccarat, not all casino games. Adds credibility.</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </section>

              {/* Section 3: Claimed But Unverified */}
              <section id="claimed-unverified" className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-yellow-500 text-2xl">?</span>
                    <div>
                      <p className="text-yellow-500 font-semibold uppercase tracking-wider text-sm">Unverified Claims</p>
                      <h2 className="text-3xl font-black text-white">Self-Reported Wins</h2>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-8">
                    These wins are claimed by Mikki but lack independent third-party verification. They may be true, but should be viewed with appropriate skepticism.
                  </p>

                  <div className="space-y-6">

                    {/* Total Career Winnings */}
                    <div className="bg-zinc-900 border border-yellow-500/30 rounded-2xl p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">UNVERIFIED</span>
                          <h3 className="text-xl font-bold text-white mt-3">Total Career Winnings</h3>
                        </div>
                        <p className="text-3xl font-black text-yellow-500">$32,000,000+</p>
                      </div>

                      <div className="space-y-3 text-zinc-400">
                        <p><strong className="text-white">The Claim:</strong> Mikki states he has won over $32 million total from casino baccarat since 2018.</p>
                        <p><strong className="text-white">What&apos;s Verified:</strong> Only the $10M+ Venetian win is independently confirmed. The remaining ~$22M is self-reported without third-party verification.</p>
                        <p><strong className="text-white">Reality Check:</strong> Given his documented $10M win, business empire sale proceeds, and lifestyle, multi-million dollar total winnings are plausible but not independently verified.</p>
                      </div>
                    </div>

                    {/* Biggest Single Session */}
                    <div className="bg-zinc-900 border border-yellow-500/30 rounded-2xl p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">SELF-REPORTED</span>
                          <h3 className="text-xl font-bold text-white mt-3">Biggest Single Session Win</h3>
                        </div>
                        <p className="text-3xl font-black text-yellow-500">$11,526,000</p>
                      </div>

                      <div className="space-y-3 text-zinc-400">
                        <p><strong className="text-white">The Claim:</strong> Mikki states his largest single session win was $11,526,000 over 7 days of play. He played $250,000 per hand in short bursts, hitting the table strategically rather than grinding for hours.</p>
                        <p><strong className="text-white">The Strategy:</strong> He didn&apos;t sit at tables for extended sessions. Instead, he&apos;d observe patterns, make a few massive bets ($250K/hand), extract millions, then disappear for weeks to avoid casino heat.</p>
                      </div>
                    </div>

                    {/* Peak Earning Period */}
                    <div className="bg-zinc-900 border border-yellow-500/30 rounded-2xl p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">SELF-REPORTED</span>
                          <h3 className="text-xl font-bold text-white mt-3">Peak Earning Period</h3>
                        </div>
                        <p className="text-3xl font-black text-yellow-500">$1M/Week</p>
                      </div>

                      <div className="space-y-3 text-zinc-400">
                        <p><strong className="text-white">Year 3 Performance:</strong> Mikki claims that during his third year of professional baccarat play, he averaged $1 million per week in wins.</p>
                        <p><strong className="text-white">First Million Win:</strong> His first seven-figure session came about 18 months into his gambling career, winning between $1.125M and $1.25M in a single session.</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </section>

              {/* Section 4: The Verdict */}
              <section id="verdict" className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-8 text-center">The Verdict</h2>

                  <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                      <span className="text-green-500 text-2xl">✓</span>
                      <h3 className="text-white font-bold mt-3 mb-2">What&apos;s Definitely True</h3>
                      <p className="text-zinc-400 text-sm">$10M+ win at the Venetian (verified by Jake Ormand), net loss at Wynn, poker losses documented, banned from multiple casinos, real name is Michael David Meiterman.</p>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                      <span className="text-yellow-500 text-2xl">?</span>
                      <h3 className="text-white font-bold mt-3 mb-2">What&apos;s Plausible But Unverified</h3>
                      <p className="text-zinc-400 text-sm">Total of $32M in wins, 150+ casino bans, specific wins at Borgata/Cosmopolitan/Bellagio. These could be true but lack independent verification.</p>
                    </div>

                    <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-2xl p-6">
                      <span className="text-fuchsia-500 text-2xl">!</span>
                      <h3 className="text-white font-bold mt-3 mb-2">What Adds Credibility</h3>
                      <p className="text-zinc-400 text-sm">The documented losses. If the story was fake, he&apos;d only claim wins. Transparency about poker losses and the Wynn loss suggests honesty.</p>
                    </div>

                  </div>

                  <p className="text-zinc-400 text-center mt-8 max-w-2xl mx-auto">
                    The mix of verified wins, documented losses, and unverified claims makes Mikki Mase&apos;s story more credible than typical gambling &quot;gurus&quot; who only show wins. The $10M Venetian win alone, combined with his business empire exit, explains his wealth without requiring belief in every claimed win.
                  </p>
                </motion.div>
              </section>

              {/* Section 5: Behind the Wins */}
              <section id="behind-wins" className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-fuchsia-500 text-2xl">📖</span>
                    <div>
                      <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm">Stories</p>
                      <h2 className="text-3xl font-black text-white">Behind the Wins</h2>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-8">
                    The wins are just numbers. Here are the stories behind them—the rituals, confrontations, and moments that reveal who Mikki Mase really is.
                  </p>

                  <div className="space-y-4">
                    {behindTheWinsStories.map((story, index) => (
                      <StoryCard key={story.id} story={story} index={index} />
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Section 6: Casino Harassment Tactics */}
              <section id="harassment" className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <div>
                      <p className="text-red-500 font-semibold uppercase tracking-wider text-sm">Documented</p>
                      <h2 className="text-3xl font-black text-white">Casino Harassment Tactics</h2>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-8">
                    According to Mikki, casinos use various tactics to throw him off his game. These are the methods he&apos;s publicly described.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {harassmentTactics.map((tactic, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-red-500/30 transition"
                      >
                        <span className="text-2xl">{tactic.icon}</span>
                        <h3 className="text-white font-bold mt-2 mb-1">{tactic.title}</h3>
                        <p className="text-zinc-500 text-sm">{tactic.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Section 7: Betting Strategy */}
              <section id="strategy" className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-fuchsia-500 text-2xl">🎯</span>
                    <div>
                      <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm">Strategy</p>
                      <h2 className="text-3xl font-black text-white">Betting Strategy</h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                      <h3 className="text-white font-bold text-lg mb-4">Bet Sizing</h3>
                      <p className="text-fuchsia-500 text-4xl font-black mb-2">$250,000</p>
                      <p className="text-zinc-500 text-sm mb-4">Per hand</p>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Previous max: $300K (some casinos)</li>
                        <li>• Why $250K? Mathematical exposure calculation</li>
                        <li>• Negotiated based on verified assets</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                      <h3 className="text-white font-bold text-lg mb-4">Flat Betting</h3>
                      <p className="text-green-500 text-4xl font-black mb-2">Same</p>
                      <p className="text-zinc-500 text-sm mb-4">Every bet</p>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Bets same amount regardless of wins/losses</li>
                        <li>• No Martingale, no progressive betting</li>
                        <li>• Edge comes from pattern recognition, not bet sizing</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                      <h3 className="text-white font-bold text-lg mb-4">Session Structure</h3>
                      <p className="text-yellow-500 text-4xl font-black mb-2">Hit & Run</p>
                      <p className="text-zinc-500 text-sm mb-4">Strategic timing</p>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• NOT sitting for 8 hours grinding</li>
                        <li>• Watch patterns, make few massive bets</li>
                        <li>• Extract millions, disappear for weeks</li>
                        <li>• The $11.5M: 7 days total, strategic appearances</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                      <h3 className="text-white font-bold text-lg mb-4">Win Rate Consistency</h3>
                      <p className="text-fuchsia-500 text-4xl font-black mb-2">Stable</p>
                      <p className="text-zinc-500 text-sm mb-4">At any stake</p>
                      <ul className="space-y-2 text-zinc-400 text-sm">
                        <li>• Same win rate at $25K as $11M</li>
                        <li>• Casinos noticed the pattern</li>
                        <li>• &quot;We have a problem here.&quot;</li>
                      </ul>
                    </div>

                  </div>

                  <blockquote className="mt-8 pl-6 border-l-4 border-fuchsia-500">
                    <p className="text-xl text-white italic">
                      &quot;Now it&apos;s $1M, $2M, $3M... $11M and the win rate stayed the same. And they go, &apos;We have a problem here.&apos;&quot;
                    </p>
                    <cite className="text-zinc-500 text-sm mt-2 block">— Mikki Mase</cite>
                  </blockquote>
                </motion.div>
              </section>

              {/* Section 8: Complete Win/Loss Record */}
              <section id="complete-record" className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-zinc-400 text-2xl">📊</span>
                    <div>
                      <p className="text-zinc-400 font-semibold uppercase tracking-wider text-sm">Complete Record</p>
                      <h2 className="text-3xl font-black text-white">Win/Loss Table</h2>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-zinc-800">
                          <th className="text-left text-zinc-500 text-xs uppercase tracking-wider py-3 px-4">Venue</th>
                          <th className="text-left text-zinc-500 text-xs uppercase tracking-wider py-3 px-4">Game</th>
                          <th className="text-right text-zinc-500 text-xs uppercase tracking-wider py-3 px-4">Amount</th>
                          <th className="text-left text-zinc-500 text-xs uppercase tracking-wider py-3 px-4">Period</th>
                          <th className="text-left text-zinc-500 text-xs uppercase tracking-wider py-3 px-4">Verification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {completeRecord.map((record, index) => (
                          <tr key={index} className="border-b border-zinc-800/50 hover:bg-zinc-900/50">
                            <td className="py-4 px-4">
                              <span className="text-white font-medium">{record.venue}</span>
                            </td>
                            <td className="py-4 px-4">
                              <span className="text-zinc-400">{record.game}</span>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <span className={`font-bold ${
                                record.amount.startsWith('+') ? 'text-green-500' :
                                record.amount.startsWith('-') ? 'text-red-500' : 'text-zinc-400'
                              }`}>
                                {record.amount}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <span className="text-zinc-500 text-sm">{record.period}</span>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`text-xs font-bold px-2 py-1 rounded ${
                                record.verification === 'VERIFIED' ? 'bg-green-500/10 text-green-400' :
                                record.verification === 'DOCUMENTED' ? 'bg-green-500/10 text-green-400' :
                                record.verification === 'CLAIMED' ? 'bg-yellow-500/10 text-yellow-400' :
                                'bg-zinc-800 text-zinc-400'
                              }`}>
                                {record.verification}
                                {record.verificationNote && ` (${record.verificationNote})`}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </section>

              {/* Related Pages */}
              <section className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-black text-white mb-6">Related Pages</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link
                      href="/story"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group"
                    >
                      <h3 className="text-white font-bold mb-2 group-hover:text-fuchsia-400 transition">The Full Story</h3>
                      <p className="text-zinc-500 text-sm">From prison to $32M—the complete biography</p>
                    </Link>
                    <Link
                      href="/community"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group"
                    >
                      <h3 className="text-white font-bold mb-2 group-hover:text-fuchsia-400 transition">Join the Community</h3>
                      <p className="text-zinc-500 text-sm">Free Telegram with strategies and updates</p>
                    </Link>
                  </div>
                </motion.div>
              </section>

              {/* CTA Section */}
              <section className="pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-fuchsia-500/10 to-transparent border border-fuchsia-500/30 rounded-2xl p-8 text-center"
                >
                  <h3 className="text-2xl font-black text-white mb-4">Want to Learn the System?</h3>
                  <p className="text-zinc-400 mb-6">
                    Join the free Telegram community for strategy breakdowns and real-time updates.
                  </p>
                  <a
                    href="https://t.me/+9R9kDE-c2UVhMTc0"
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
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
