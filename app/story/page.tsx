'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

const timelineEvents = [
  { year: '1991', title: 'Born', description: 'Michael David Meiterman born in New York' },
  { year: '2002', age: '11', title: 'Drug addiction begins', description: 'Started down a dark path at a young age' },
  { year: '2006-2012', age: '15-21', title: 'Incarceration', description: 'Spent ~6 years locked up, earned GED, took SATs' },
  { year: '2012', title: 'Released', description: 'Became homeless in New York, got sober alone' },
  { year: '2013', title: 'Day laborer', description: 'Worked for $100/day, saved every dollar' },
  { year: '2014', title: 'Miami rehab job', description: 'Got job at rehab facility ($18/hour), studied business' },
  { year: '2016', title: 'Built empire', description: 'Owned 300+ pharmacies and rehab facilities' },
  { year: '2018', title: 'Sold businesses', description: 'Retired in his 20s after selling everything' },
  { year: '2019', title: 'Personal tragedy', description: 'Business partner murdered, another disappeared' },
  { year: '2020', title: 'Moved to LA', description: 'Started visiting Vegas to study baccarat' },
  { year: '2021', title: 'High-stakes wins begin', description: 'Averaged ~$1M/week at peak' },
  { year: '2021-2022', title: 'The Venetian Win', description: '$10M+ win VERIFIED by Jake Ormand', verified: true },
  { year: '2021-2022', title: 'Wynn Loss', description: '$1.5M net loss (VERIFIED) - still got banned', verified: true, loss: true },
  { year: '2022-2023', title: 'Hustler Casino Live', description: '$938,950 net LOSS documented on poker stream', loss: true },
  { year: '2023', title: 'Mass bans', description: 'Banned from 150+ casinos worldwide' },
  { year: 'Today', title: 'Free community', description: 'Runs free Telegram community, doesn\'t sell courses' },
];

const tableOfContents = [
  { id: 'timeline', label: '01 - Timeline' },
  { id: 'gambling-early', label: '02 - Gambling Started Early' },
  { id: 'prison', label: '03 - Prison Years' },
  { id: 'business', label: '04 - Business Empire' },
  { id: 'baccarat', label: '05 - Discovering Baccarat' },
  { id: 'venetian', label: '06 - The Venetian Win' },
  { id: 'wynn', label: '07 - The Wynn Loss' },
  { id: 'bans', label: '08 - The Bans' },
  { id: 'verified', label: '09 - What\'s Verified' },
];

export default function StoryPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[70vh] relative flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://www.mikki-mase.com/images/mikki-main-1.webp"
            alt="Mikki Mase"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
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

            <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">The Full Story</p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              From Prison<br />to $32M
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              How one man went from the darkest moments of his life to becoming the most feared player in every casino.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Real Name</p>
              <p className="text-white font-bold">Michael Meiterman</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Born</p>
              <p className="text-white font-bold">Oct 27, 1991</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Total Wins</p>
              <p className="text-fuchsia-500 font-bold">$32M+</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Casino Bans</p>
              <p className="text-red-500 font-bold">150+</p>
            </div>
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
            <div className="space-y-16">

              {/* Quick Answer Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Who is Mikki Mase?</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Mikki Mase (real name Michael David Meiterman, born October 27, 1991) is a professional
                  gambler who claims to have won over $32 million playing baccarat. After spending 6 years
                  in prison as a teenager, he built a pharmacy business empire, then transitioned to
                  high-stakes gambling. He has been banned from 150+ casinos worldwide for winning too much.
                </p>
              </motion.div>

              {/* Section 1: Timeline */}
              <section id="timeline">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-8">Timeline</h2>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800" />
                    <div className="space-y-6">
                      {timelineEvents.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="relative pl-12"
                        >
                          <div className={`absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 ${
                            event.verified ? 'bg-green-500 border-green-500' :
                            event.loss ? 'bg-red-500 border-red-500' :
                            'bg-zinc-900 border-zinc-700'
                          }`} />
                          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="text-fuchsia-500 font-bold text-sm">{event.year}</span>
                              {event.age && <span className="text-zinc-600 text-sm">(Age {event.age})</span>}
                              {event.verified && (
                                <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded-full">VERIFIED</span>
                              )}
                              {event.loss && (
                                <span className="bg-red-500/10 text-red-400 text-xs px-2 py-0.5 rounded-full">LOSS</span>
                              )}
                            </div>
                            <h3 className="text-white font-bold mb-1">{event.title}</h3>
                            <p className="text-zinc-500 text-sm">{event.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Section 2: Gambling Started Early */}
              <section id="gambling-early">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-6">Gambling Started Early</h2>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      Mikki&apos;s grandparents taught him how to play cards starting at age 3. By the time they
                      passed away when he was 8 years old, the foundation was already laid.
                    </p>
                    <p>
                      By his teenage years, he was gambling five days a week with what he describes as
                      &quot;mobsters and rich Jews.&quot; The other players thought he was 18-20 years old.
                      In reality, he was only 12-15.
                    </p>
                    <p>
                      &quot;I had a fake ID,&quot; Mikki has said. &quot;I was 21 for seven years.&quot; He made
                      trips to Atlantic City as a teenager, not to gamble recklessly, but to study how casinos work.
                    </p>
                  </div>
                  <blockquote className="mt-8 pl-6 border-l-4 border-fuchsia-500">
                    <p className="text-xl text-white italic">
                      &quot;My grandparents taught me how to play cards... from three years old till they passed away when I was eight.&quot;
                    </p>
                    <cite className="text-zinc-500 text-sm mt-2 block">— Mikki Mase</cite>
                  </blockquote>
                </motion.div>
              </section>

              {/* Section 3: Prison Years */}
              <section id="prison">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-6">Prison Years</h2>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      Mikki left his parents&apos; house in 10th grade. Italian mafia members took him in and
                      essentially raised him. At 15, he went to juvenile prison. He stayed incarcerated until
                      around age 21—roughly 6 years total.
                    </p>
                    <p>
                      During that time, he got his GED and took the SATs while behind bars. Five universities
                      accepted him, but he never attended any of them.
                    </p>
                    <p>
                      When he was released, he had no money, no job, and no plan. He became homeless in New York.
                      He got sober alone—no program, no support system.
                    </p>
                  </div>
                  <blockquote className="mt-8 pl-6 border-l-4 border-fuchsia-500">
                    <p className="text-xl text-white italic">
                      &quot;Juvenile detention was the worst jail I&apos;ve ever been to. With kids, there&apos;s no consequences.
                      You can hit a CO in the face and go to your room for three days.&quot;
                    </p>
                    <cite className="text-zinc-500 text-sm mt-2 block">— Mikki Mase</cite>
                  </blockquote>
                  <div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-2">Why it matters:</h4>
                    <p className="text-zinc-400 text-sm">
                      The &quot;no consequences&quot; mindset later helped him stay calm when millions were on the line.
                      Casino intimidation tactics don&apos;t work on someone who survived juvenile detention.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 4: Business Empire */}
              <section id="business">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-6">Business Empire</h2>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      A friend got him a job at a Miami rehab facility for $18/hour. Before that, he was a day
                      laborer making $100/day and saving every dollar.
                    </p>
                    <p>
                      At the rehab facility, he studied the operations obsessively—insurance billing, patient
                      intake, the business model. He used that knowledge to buy his first rehab center.
                    </p>
                    <p>
                      He expanded rapidly, eventually owning over 300 pharmacies and multiple rehab facilities
                      across Florida. He sold everything while still in his 20s. The sale price was never disclosed
                      but was substantial.
                    </p>
                    <p>
                      Then tragedy struck: his business partner was murdered, another disappeared, and he split
                      with his girlfriend. The empire was gone, and he needed a new direction.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 5: Discovering Baccarat */}
              <section id="baccarat">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-6">Discovering Baccarat</h2>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      Mikki moved to LA around 2020 and started visiting Vegas—not as a tourist, but as a student.
                      He would watch tables for hours before placing a single bet, looking for patterns.
                    </p>
                    <p>
                      His first baccarat hand was at a $500 minimum table. He asked the dealer to explain the game.
                      She explained it in two hands. He&apos;s been playing baccarat ever since.
                    </p>
                  </div>
                  <blockquote className="mt-8 pl-6 border-l-4 border-fuchsia-500">
                    <p className="text-xl text-white italic">
                      &quot;I had never played a hand of baccarat in my life. I sat down at a $500-minimum table.
                      I asked the dealer, &apos;Can you explain the game to me?&apos; She explained it to me in two hands...
                      I&apos;ve been playing baccarat ever since.&quot;
                    </p>
                    <cite className="text-zinc-500 text-sm mt-2 block">— Mikki Mase</cite>
                  </blockquote>
                  <div className="mt-8 grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                      <h4 className="text-white font-bold mb-2">Why baccarat over blackjack?</h4>
                      <ul className="text-zinc-400 text-sm space-y-2">
                        <li>• Blackjack max bet: $50K-$75K</li>
                        <li>• Baccarat: Can negotiate $250K-$300K per hand</li>
                        <li>• Simpler game—pure pattern recognition</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                      <h4 className="text-white font-bold mb-2">First Big Win</h4>
                      <p className="text-fuchsia-500 text-2xl font-bold">$1.125M - $1.25M</p>
                      <p className="text-zinc-500 text-sm mt-1">18 months into playing baccarat</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-4">The High Roller Life</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-fuchsia-500 text-xl font-bold">$3M</p>
                        <p className="text-zinc-500 text-xs">Buy-ins</p>
                      </div>
                      <div>
                        <p className="text-fuchsia-500 text-xl font-bold">$250K</p>
                        <p className="text-zinc-500 text-xs">Per hand</p>
                      </div>
                      <div>
                        <p className="text-fuchsia-500 text-xl font-bold">~$1M</p>
                        <p className="text-zinc-500 text-xs">Weekly average</p>
                      </div>
                      <div>
                        <p className="text-fuchsia-500 text-xl font-bold">3 weeks</p>
                        <p className="text-zinc-500 text-xs">Cooldown period</p>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-sm mt-4">
                      Strategy: Win $3M, disappear for 3 weeks, let heat die down, come back.
                      Didn&apos;t play like a gambler—played like executing a system.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 6: The Venetian Win */}
              <section id="venetian">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-3xl font-black text-white">The Venetian Win</h2>
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">VERIFIED</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-2xl p-8">
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Amount</p>
                        <p className="text-green-500 text-3xl font-black">$10M+</p>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Location</p>
                        <p className="text-white font-bold">The Venetian, Las Vegas</p>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Period</p>
                        <p className="text-white font-bold">2021-2022</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-zinc-400">
                      <p>
                        <strong className="text-white">Verification:</strong> Jake Ormand, a professional poker player,
                        was present and testified that Mikki won over $10M at a single baccarat table.
                      </p>
                      <p>
                        The casino reviewed all footage. They found NO cheating, NO card counting.
                        Just pattern recognition and flawless execution.
                      </p>
                      <p className="text-white font-semibold">
                        Result: Banned anyway.
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-8 pl-6 border-l-4 border-green-500">
                    <p className="text-xl text-white italic">
                      &quot;I&apos;ve been playing professional poker for 15 years. When Mikki walked into the Venetian
                      that night and won $10M, I watched every hand. No tricks, no cheating—just the most
                      disciplined pattern-reading I&apos;ve ever seen.&quot;
                    </p>
                    <cite className="text-zinc-500 text-sm mt-2 block">— Jake Ormand, Professional Poker Player</cite>
                  </blockquote>
                </motion.div>
              </section>

              {/* Section 7: The Wynn Loss */}
              <section id="wynn">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-3xl font-black text-white">The Wynn Loss</h2>
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">VERIFIED</span>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-8">
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Net Loss</p>
                        <p className="text-red-500 text-3xl font-black">-$1.5M</p>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Location</p>
                        <p className="text-white font-bold">Wynn Las Vegas</p>
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Period</p>
                        <p className="text-white font-bold">2021-2022</p>
                      </div>
                    </div>
                    <div className="space-y-4 text-zinc-400">
                      <p>
                        Lost $4 million. Won back $2.5 million. Net loss: $1.5 million.
                      </p>
                      <p className="text-white font-semibold">
                        The Wynn STILL banned him.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-2">Why ban a losing player?</h4>
                    <p className="text-zinc-400">
                      Because casinos saw the system. They knew that over time, execution beats house edge.
                      They couldn&apos;t afford to let him keep playing.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Section 8: The Bans */}
              <section id="bans">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-6">The Bans Spread</h2>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      By 2023, Mikki was banned from over 150 casinos. The reasons casinos gave were often absurd:
                    </p>
                  </div>
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                      <p className="text-red-500 text-2xl mb-2">🍴</p>
                      <p className="text-white font-bold text-sm">&quot;Touching too many forks&quot;</p>
                      <p className="text-zinc-500 text-xs mt-1">At the buffet</p>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                      <p className="text-red-500 text-2xl mb-2">😨</p>
                      <p className="text-white font-bold text-sm">&quot;Scared a pit boss&quot;</p>
                      <p className="text-zinc-500 text-xs mt-1">Official reason given</p>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                      <p className="text-red-500 text-2xl mb-2">🚗</p>
                      <p className="text-white font-bold text-sm">&quot;Fought a valet&quot;</p>
                      <p className="text-zinc-500 text-xs mt-1">He wasn&apos;t even in the state</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                    <p className="text-zinc-400">
                      <strong className="text-white">Real reason:</strong> He won too much, too consistently.
                      Casinos are businesses—they don&apos;t owe anyone the right to play.
                    </p>
                  </div>
                  <blockquote className="mt-8 pl-6 border-l-4 border-fuchsia-500">
                    <p className="text-xl text-white italic">
                      &quot;When someone gets banned from 150 casinos, they&apos;re either cheating or winning too much.
                      Mikki proved it was the latter. The casinos couldn&apos;t find anything illegal—they just
                      couldn&apos;t afford to let him play.&quot;
                    </p>
                    <cite className="text-zinc-500 text-sm mt-2 block">— Gaming Law Expert</cite>
                  </blockquote>
                </motion.div>
              </section>

              {/* Section 9: What's Verified */}
              <section id="verified">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-6">What&apos;s Verified vs. Claimed</h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Verified */}
                    <div className="bg-green-500/5 border border-green-500/30 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-green-500 text-xl">✓</span>
                        <h3 className="text-white font-bold">VERIFIED</h3>
                      </div>
                      <ul className="space-y-3 text-sm">
                        <li className="text-zinc-400">
                          <span className="text-white font-semibold">Real name:</span> Michael David Meiterman
                        </li>
                        <li className="text-zinc-400">
                          <span className="text-white font-semibold">Born:</span> October 27, 1991
                        </li>
                        <li className="text-zinc-400">
                          <span className="text-white font-semibold">Venetian win:</span> $10M+ (Jake Ormand)
                        </li>
                        <li className="text-zinc-400">
                          <span className="text-white font-semibold">Wynn net loss:</span> $1.5M
                        </li>
                        <li className="text-zinc-400">
                          <span className="text-white font-semibold">Poker losses:</span> $938,950 (HCL)
                        </li>
                        <li className="text-zinc-400">
                          <span className="text-white font-semibold">Casino bans:</span> Numerous (documented)
                        </li>
                      </ul>
                    </div>

                    {/* Claimed */}
                    <div className="bg-yellow-500/5 border border-yellow-500/30 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-yellow-500 text-xl">⚠</span>
                        <h3 className="text-white font-bold">CLAIMED</h3>
                      </div>
                      <ul className="space-y-3 text-sm text-zinc-400">
                        <li>Total winnings: $32 million</li>
                        <li>150+ casino bans (exact number not independently confirmed)</li>
                        <li>Specific wins at Borgata, Cosmopolitan, Bellagio</li>
                      </ul>
                      <p className="text-zinc-500 text-xs mt-4">
                        Self-reported, not independently verified
                      </p>
                    </div>

                    {/* Contested */}
                    <div className="bg-red-500/5 border border-red-500/30 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-red-500 text-xl">✗</span>
                        <h3 className="text-white font-bold">CONTESTED</h3>
                      </div>
                      <ul className="space-y-3 text-sm text-zinc-400">
                        <li>Whether casinos cheat</li>
                        <li>Whether Mikki reverse-engineered their methods</li>
                      </ul>
                      <p className="text-zinc-500 text-xs mt-4">
                        Casinos deny this, Mikki maintains it&apos;s true
                      </p>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Psychology Section */}
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-white mb-6">The Psychology</h2>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      According to Mikki, the edge isn&apos;t in the cards or the patterns—it&apos;s in emotional regulation.
                      Staying calm when $3M is on the table. Having the discipline to walk away after a win.
                    </p>
                    <p>
                      He&apos;s watched players with better pattern recognition lose millions due to tilt. Prison taught
                      him that expressing aggression outwardly means losing control. Channeling it inward means
                      power and focus.
                    </p>
                  </div>
                  <blockquote className="mt-8 pl-6 border-l-4 border-fuchsia-500">
                    <p className="text-xl text-white italic">
                      &quot;The calmer I can keep my brain and the clearer I can make decisions... that&apos;s where
                      the edge is. Not in the cards. In the clarity.&quot;
                    </p>
                    <cite className="text-zinc-500 text-sm mt-2 block">— Mikki Mase</cite>
                  </blockquote>
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
                  <h3 className="text-2xl font-black text-white mb-4">Want the Full Story?</h3>
                  <p className="text-zinc-400 mb-6">
                    Join the Telegram community for exclusive stories and strategy breakdowns.
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
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
