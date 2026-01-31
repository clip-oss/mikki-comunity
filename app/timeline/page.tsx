'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface TimelineEvent {
  year: string;
  age?: string;
  title: string;
  description: string;
  quote?: string;
  verified?: boolean;
}

interface Era {
  id: string;
  name: string;
  emoji: string;
  years: string;
  color: string;
  bgColor: string;
  borderColor: string;
  events: TimelineEvent[];
}

const eras: Era[] = [
  {
    id: 'early-life',
    name: 'Early Life',
    emoji: '🎲',
    years: '1991-2006',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    events: [
      {
        year: '1991',
        title: 'Born Michael David Meiterman',
        description: 'October 27, 1991. The beginning of a story that would lead to $32M in casino wins.',
        verified: true
      },
      {
        year: '1994',
        age: 'Age 3',
        title: 'Grandparents Teach Him Cards',
        description: 'Foundation of pattern recognition begins. Learning card games as education, not entertainment. His grandparents taught him card games from age 3 until they passed away when he was 8.',
        verified: true
      },
      {
        year: '1999',
        age: 'Age 8',
        title: 'Grandparents Pass Away',
        description: 'Lost the family members who taught him cards. By this point, cards were already a language he spoke fluently.',
        verified: true
      },
      {
        year: '2002',
        age: 'Age 11',
        title: 'Drug Addiction Begins',
        description: 'Became addicted to drugs. Life trajectory spirals. This period marked the beginning of the darker chapter of his youth.',
        verified: true
      },
      {
        year: '2003-2006',
        age: 'Age 12-15',
        title: 'Neighborhood Gambling 5 Days/Week',
        description: 'Playing cards with mobsters and wealthy players decades older. They thought he was 18-20 years old.',
        quote: "I was gambling five days a week in my neighborhood... with mobsters and rich Jews. They thought I was 18, 20 years old.",
        verified: true
      },
      {
        year: '2003-2009',
        age: 'Age 12-18',
        title: 'Atlantic City with Fake ID',
        description: '"I was 21 for seven years." Regular trips to Atlantic City casinos with fake identification.',
        quote: "I was 21 for seven years... We'd go to Atlantic City. The Jersey Shore. I'd be a kid with a fake ID walking into casinos.",
        verified: true
      }
    ]
  },
  {
    id: 'dark-years',
    name: 'The Dark Years',
    emoji: '⚠️',
    years: '2006-2012',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    events: [
      {
        year: '2006',
        age: 'Age 15',
        title: 'Juvenile Detention Begins',
        description: 'Entered the juvenile justice system. Would spend roughly 6 years incarcerated by age 21.',
        quote: "Juvenile detention was the worst jail I've ever been to. With kids, there's no consequences.",
        verified: true
      },
      {
        year: '2006-2012',
        age: 'Age 15-21',
        title: 'Mom Becomes Bail Bondsman',
        description: 'His mother became a licensed bail bondsman to navigate the system and help her son.',
        verified: true
      },
      {
        year: '2006-2012',
        age: 'Age 15-21',
        title: '~6 Years Total Incarceration',
        description: 'Between juvenile detention and prison. Got GED, took SATs, accepted to 5 universities—never attended.',
        verified: true
      },
      {
        year: '2012',
        age: 'Age 21',
        title: 'Released: Homeless in New York',
        description: 'No money, no job, no plan. Lived on the actual streets. Got sober alone with no formal program.',
        verified: true
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Empire',
    emoji: '💼',
    years: '2012-2020',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    events: [
      {
        year: '2012',
        age: 'Early 20s',
        title: 'Day Laborer at $100/Day',
        description: 'First job after release. Saved every single dollar. Lived in cheapest conditions possible.',
        verified: true
      },
      {
        year: '2013',
        age: 'Early 20s',
        title: 'Rehab Facility Job: $18/Hour',
        description: 'Friend got him a job at Miami rehab facility. Studied the business operations, insurance billing, patient intake.',
        verified: true
      },
      {
        year: '2014',
        age: 'Early-Mid 20s',
        title: 'First Rehab Center Purchase',
        description: 'Bought his first rehab center with saved money. Then another. Then expanded into pharmacies.',
        verified: true
      },
      {
        year: '2015-2018',
        age: 'Mid 20s',
        title: 'Built Empire: 300+ Pharmacies',
        description: 'Owned 300+ pharmacies and multiple rehab facilities across Florida by mid-20s.',
        verified: true
      },
      {
        year: '2018-2019',
        age: 'Late 20s',
        title: 'Sold Businesses & Retired',
        description: 'Sold pharmacy/rehab empire while still in his 20s. Exact sale price undisclosed but substantial.',
        verified: true
      },
      {
        year: '2019',
        age: 'Late 20s',
        title: 'Personal Tragedy Strikes',
        description: 'Business partner murdered. Another partner disappeared. Split with girlfriend. Alone again, but this time with money and no direction.',
        verified: true
      }
    ]
  },
  {
    id: 'discovery',
    name: 'Discovery of Baccarat',
    emoji: '🎰',
    years: '2019-2020',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30',
    events: [
      {
        year: '2020',
        age: 'Late 20s',
        title: 'Moved to Los Angeles',
        description: 'Relocated from Florida to LA. Started traveling to Las Vegas to observe casino operations.',
        verified: true
      },
      {
        year: '2020',
        age: 'Late 20s',
        title: 'The $500 Bet: Learning Baccarat',
        description: 'First baccarat bet ever. $500 minimum table. Asked dealer to explain the game. Learned in 2 hands.',
        quote: "I had never played a hand of baccarat in my life. I sat down at a $500-minimum table and asked the dealer to explain it to me in two hands.",
        verified: true
      },
      {
        year: '2020-2021',
        age: 'Late 20s',
        title: '18 Months of Grinding',
        description: 'Studied patterns. Practiced system. Lost money. Refined approach. Then everything clicked.',
        verified: true
      },
      {
        year: '2021',
        age: '~30',
        title: 'First Big Win: $1.125M-$1.25M',
        description: '18 months into playing baccarat seriously. First seven-figure win in a single session. System validation.',
        quote: "My first big win was around $1.125 million to $1.25 million. That was about 18 months into playing baccarat seriously.",
        verified: true
      }
    ]
  },
  {
    id: 'high-stakes',
    name: 'The High Stakes Era',
    emoji: '👑',
    years: '2021-2023',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    events: [
      {
        year: '2021-2022',
        age: '~30-31',
        title: 'The Venetian: $10M+ Win (VERIFIED)',
        description: 'Biggest verified win. Over $10 million at single baccarat table. Confirmed by poker pro Jake Ormand.',
        quote: "Jake Ormand: 'I personally witnessed Mikki win over $10 million at The Venetian.'",
        verified: true
      },
      {
        year: '2021-2022',
        age: '~30-31',
        title: 'Peak Earnings: ~$1M Per Week',
        description: 'At his peak, averaged around $1 million per week. Strategic timing: win $3M, disappear for 3 weeks, return.',
        verified: false
      },
      {
        year: '2021-2022',
        age: '~30-31',
        title: 'The Wynn: $1.5M Net Loss (VERIFIED)',
        description: 'Lost $4M, won back $2.5M, net loss $1.5M. Still got banned despite losing money.',
        verified: true
      },
      {
        year: '2022',
        age: '~31',
        title: 'MGM Monitor Cheating Proof',
        description: 'Monitor showed 7-2, felt showed 5-4. Caught casino manipulation on hand #2 with all-new equipment.',
        quote: "There's a 5 and a 4 on the board but the monitor says 7 and a 2. I caught you cheating.",
        verified: true
      },
      {
        year: '2022',
        age: '~31',
        title: 'The 3 of Clubs Prediction',
        description: 'With 2 Chainz watching, predicted exact card before it was dealt. Camera caught everything.',
        quote: "I bet you the next card that comes out is the 3 of clubs. [Card opens] Yeah, it's correct.",
        verified: true
      },
      {
        year: '2022',
        age: '~31',
        title: 'The $11.526M Win',
        description: 'Biggest single session. $11,526,000 over 7 days. $250K per hand, flat betting. Then ordered a PB&J sandwich.',
        quote: "The first thing I always do after a massive win is order a peanut butter and jelly sandwich with banana. Crusts cut off.",
        verified: false
      },
      {
        year: '2022',
        age: '~31',
        title: 'Security Block: $7M Hostage',
        description: 'Three guards pushed his chair against table so he couldn\'t reach his $7M in chips. Jumped on chair and screamed.',
        quote: "Before these three security guards get paid $12 bucks an hour trying to rob me for $7 million.",
        verified: true
      },
      {
        year: '2022-2023',
        age: '~31-32',
        title: 'Hustler Casino Live Poker',
        description: 'Played poker on popular livestream. Documented net loss: $938,950. Not a poker crusher—edge is in baccarat.',
        verified: true
      },
      {
        year: '2023',
        age: '~32',
        title: '150+ Casino Bans',
        description: 'Banned from over 150 casinos. Reasons ranged from \'touching forks\' to \'scaring pit boss\' to fabricated incidents.',
        verified: false
      },
      {
        year: '2023',
        age: '~32',
        title: 'Proved Success to Parents',
        description: 'Rented villa, threw party, bought dad a Maybach, made him VP of new company. Parents finally believed him.',
        verified: true
      }
    ]
  },
  {
    id: 'current',
    name: 'Current Reality',
    emoji: '🌐',
    years: '2023-Present',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/30',
    events: [
      {
        year: 'Dec 2023',
        age: 'Age 32',
        title: 'Soft White Underbelly Interview',
        description: 'Gave detailed on-camera interview walking through entire life story from prison to pro gambler.',
        verified: true
      },
      {
        year: '2024',
        age: 'Age 33',
        title: '$1.9M in Community Payouts',
        description: 'Claims to have paid out $1.9 million to fans and community members following his strategies.',
        verified: false
      },
      {
        year: '2024-Present',
        age: 'Age 33+',
        title: 'Runs Free Telegram Community',
        description: 'Shares pattern recognition techniques, behind-the-scenes stories. No courses, no upsells. 100% free.',
        verified: true
      },
      {
        year: '2026',
        age: 'Age 35',
        title: 'The Legend Continues',
        description: 'From juvenile detention at 15 to $32M+ in wins by 35. Banned from 150+ casinos. The most feared player in baccarat history.',
        verified: true
      }
    ]
  }
];

export default function TimelinePage() {
  const [activeEra, setActiveEra] = useState<string | null>(null);

  const scrollToEra = (eraId: string) => {
    setActiveEra(eraId);
    const element = document.getElementById(eraId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.mikki-mase.com/images/mikki-main-2.webp"
            alt="Mikki Mase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4"
          >
            Complete Chronological Journey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            The Timeline
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400"
          >
            From learning cards at age 3 to winning $32M+ and getting banned from 150+ casinos. Every major event, chronologically mapped.
          </motion.p>
        </div>
      </section>

      {/* Era Navigation */}
      <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-xl border-b border-zinc-800 py-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap gap-2">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => scrollToEra(era.id)}
              className={`px-4 py-2 rounded-full text-sm ${era.bgColor} ${era.color} ${era.borderColor} border transition hover:scale-105`}
            >
              {era.emoji} {era.name} {era.years}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          {eras.map((era, eraIndex) => (
            <div key={era.id} id={era.id} className="mb-20 scroll-mt-32">
              {/* Era Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${era.bgColor} ${era.borderColor} border rounded-2xl p-6 mb-8`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{era.emoji}</span>
                  <div>
                    <h2 className={`text-2xl font-bold ${era.color}`}>{era.name}</h2>
                    <p className="text-zinc-400">{era.years}</p>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Events */}
              <div className="relative">
                {/* Vertical Line */}
                <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${era.bgColor}`}></div>

                <div className="space-y-8">
                  {era.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: eventIndex * 0.05 }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-4 top-2 w-5 h-5 rounded-full ${era.bgColor} ${era.borderColor} border-2 flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full ${era.color.replace('text-', 'bg-')}`}></div>
                      </div>

                      {/* Event Card */}
                      <div className={`bg-zinc-900 border ${era.borderColor} rounded-xl p-6`}>
                        {/* Year/Age Badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${era.bgColor} ${era.color}`}>
                            {event.year}
                          </span>
                          {event.age && (
                            <span className="text-zinc-500 text-sm">{event.age}</span>
                          )}
                          {event.verified && (
                            <span className="px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-500 border border-green-500/30">
                              ✓ VERIFIED
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>

                        {/* Description */}
                        <p className="text-zinc-400">{event.description}</p>

                        {/* Quote */}
                        {event.quote && (
                          <blockquote className={`mt-4 pl-4 border-l-2 ${era.borderColor} italic text-zinc-500`}>
                            &quot;{event.quote}&quot;
                          </blockquote>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/30 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">The Journey By Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-red-500">6</p>
                <p className="text-zinc-500 text-sm">Years in Prison</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-green-500">300+</p>
                <p className="text-zinc-500 text-sm">Pharmacies Built</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-fuchsia-500">$32M+</p>
                <p className="text-zinc-500 text-sm">Casino Winnings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-amber-500">150+</p>
                <p className="text-zinc-500 text-sm">Casino Bans</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Be Part of the Next Chapter
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join Mikki&apos;s free community and learn from someone who went from prison to pro gambler. No courses. No upsells. Just real stories and strategies.
          </p>
          <a
            href="https://t.me/+9R9kDE-c2UVhMTc0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-8 py-4 rounded-full transition text-lg"
          >
            Join Free Community
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/the-system" className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-500 transition">The System</h3>
              <p className="text-zinc-500 text-sm">How Mikki claims to beat baccarat</p>
            </Link>
            <Link href="/wins" className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-500 transition">Win/Loss Record</h3>
              <p className="text-zinc-500 text-sm">Complete documented wins and losses</p>
            </Link>
            <Link href="/faq" className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-500 transition">FAQ</h3>
              <p className="text-zinc-500 text-sm">Common questions answered</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
