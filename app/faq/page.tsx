'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

function FAQAccordion({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition"
      >
        <span className="text-white font-semibold pr-4">{question}</span>
        <span className={`text-fuchsia-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqCategories: FAQCategory[] = [
  {
    title: "Identity and Background",
    items: [
      {
        question: "Who is Mikki Mase?",
        answer: "Mikki Mase (real name: Michael David Meiterman, born October 27, 1991) is a high-stakes baccarat player known for winning millions from Las Vegas and Atlantic City casinos. He claims total winnings of over $32 million and has been banned from numerous casinos across the United States. His verified wins include over $10 million at the Venetian Las Vegas (confirmed by poker player Jake Ormand who witnessed the session)."
      },
      {
        question: "What is Mikki Mase's real name?",
        answer: "Mikki Mase's legal name is Michael David Meiterman. He uses 'Mikki Mase' as his public persona for his gambling career and social media presence."
      },
      {
        question: "How old is Mikki Mase?",
        answer: "Mikki Mase was born on October 27, 1991, making him 35 years old as of 2026."
      },
      {
        question: "What is Mikki Mase's background?",
        answer: "Mikki had a troubled early life: drug addiction by age 11, juvenile prison at 15, and roughly six years incarcerated by age 21. After release, he was homeless in New York before landing an $18/hour job at a Miami rehab facility. He studied the business model, bought his first rehab center, expanded into pharmacies (eventually owning 300+ across Florida), and sold the businesses in his mid-20s. He moved to Los Angeles around 2020 and began playing high-stakes baccarat in Las Vegas."
      },
      {
        question: "Did Mikki Mase go to prison?",
        answer: "Yes. Mikki Mase spent approximately six years in juvenile detention and prison between ages 15-21. His early life was marked by drug addiction starting at age 11 and criminal activity that led to incarceration. He credits this period with giving him the discipline and hunger to succeed when he got out."
      },
      {
        question: "Is Mikki Mase married? Does he have a wife?",
        answer: "Mikki Mase keeps his romantic life private. He has not publicly confirmed having a wife or long-term partner."
      }
    ]
  },
  {
    title: "Wins, Losses, and Net Worth",
    items: [
      {
        question: "What is Mikki Mase's biggest verified win?",
        answer: "Mikki Mase's most documented win is over $10 million at the Venetian Las Vegas. Professional poker player Jake Ormand was present and publicly confirmed the win. The casino reviewed surveillance footage, found no evidence of cheating, and banned Mikki anyway."
      },
      {
        question: "How much money has Mikki Mase won total?",
        answer: "Mikki Mase claims total winnings of over $32 million from casino baccarat. However, this figure is self-reported and not independently verified. His documented wins include $10 million+ at the Venetian (verified). He has also documented losses, including a net loss of $1.5 million at the Wynn Las Vegas and $938,950 in poker losses on Hustler Casino Live."
      },
      {
        question: "What is Mikki Mase's net worth?",
        answer: "Mikki Mase's exact net worth is not publicly disclosed. His wealth comes from two main sources: (1) the sale of his business empire (300+ pharmacies and multiple rehab facilities in Florida) in his mid-20s, and (2) claimed casino winnings of $32 million. Estimated to be in the multi-million dollar range."
      },
      {
        question: "Does Mikki Mase lose money gambling?",
        answer: "Yes. Mikki Mase has documented losses, including a net loss of $1.5 million at the Wynn Las Vegas and $938,950 in poker losses on Hustler Casino Live. His poker losses actually add credibility to his story, as they show he doesn't win at every game."
      },
      {
        question: "What was Mikki Mase's first major baccarat win?",
        answer: "Mikki's first seven-figure win came about 18 months into playing baccarat seriously—he won between $1.125 million and $1.25 million in a single session."
      }
    ]
  },
  {
    title: "Casino Bans",
    items: [
      {
        question: "Why do casinos ban Mikki Mase?",
        answer: "Casinos ban Mikki Mase because he wins large amounts consistently. Even when he loses (like his $1.5M net loss at the Wynn), casinos still ban him because they recognize he's using a systematic approach rather than gambling randomly."
      },
      {
        question: "How many casinos has Mikki Mase been banned from?",
        answer: "Mikki Mase claims to be banned from over 150 casinos across the United States. The bans often come with absurd official reasons like 'touching too many forks at the buffet' or 'scaring a pit boss,' when the real reason is simply that he wins too much."
      },
      {
        question: "Has Mikki Mase been accused of cheating?",
        answer: "No. Multiple casino surveillance reviews have found no evidence of cheating. Casinos have extensively analyzed his play and found nothing illegal. He's banned for winning, not for breaking rules."
      },
      {
        question: "Can casinos legally ban winning players?",
        answer: "Yes. Casinos are private businesses and can refuse service to anyone, as long as the refusal isn't based on protected characteristics (race, religion, etc.). Winning too much is a common reason for casino bans."
      }
    ]
  },
  {
    title: "How Mikki Mase Wins at Baccarat",
    items: [
      {
        question: "What is Mikki Mase's baccarat system?",
        answer: "Mikki claims casinos cheat at baccarat and that he reverse-engineered their methods. His approach involves: (1) Watching tables for hours before betting, (2) Playing at $250,000 per hand with $3 million buy-ins, (3) Strategic timing (win $3M, then disappear for weeks), and (4) Using other people's accounts since he's banned from most casinos."
      },
      {
        question: "Does Mikki Mase count cards in baccarat?",
        answer: "No. Card counting is largely ineffective in baccarat (unlike blackjack). Mikki's edge comes from pattern recognition, dealer observation, and what he claims is knowledge of how casinos manipulate outcomes."
      },
      {
        question: "What is Mikki Mase's baccarat algorithm?",
        answer: "Mikki doesn't use a computer algorithm—his 'algorithm' is a pattern recognition system he developed through observation. He claims to identify repeating patterns in dealer shuffles, shoe composition, and hand outcomes."
      },
      {
        question: "Is baccarat actually beatable?",
        answer: "Traditional gambling math says no, baccarat has a built-in house edge of about 1.06% on banker bets. However, Mikki Mase's documented wins suggest he has found an edge. Most professional gamblers remain skeptical that baccarat can be beaten long-term."
      },
      {
        question: "Can I learn to win at baccarat like Mikki Mase?",
        answer: "Mikki shares principles in his free Telegram community, but warns his system requires: (1) Multi-million dollar bankroll, (2) Years of practice, (3) Willingness to get banned from casinos, and (4) Acceptance that you could lose millions. He doesn't promise anyone will replicate his results."
      }
    ]
  },
  {
    title: "Media Appearances and Verification",
    items: [
      {
        question: "Where can I watch Mikki Mase talk about his story?",
        answer: "Mikki gave a detailed interview to Soft White Underbelly on December 15, 2023, where he walked through his entire life story. He also has a YouTube channel (@Mikki_Mase) with videos explaining his approach."
      },
      {
        question: "Has Mikki Mase been on Hustler Casino Live?",
        answer: "Yes. His documented results on the show are a net loss of $938,950. He's transparent about not being a poker crusher; his edge is in baccarat, not poker."
      },
      {
        question: "Is Mikki Mase's story verified or fake?",
        answer: "Partially verified. Confirmed facts: (1) Real name is Michael David Meiterman, born October 27, 1991, (2) $10M+ win at the Venetian verified by Jake Ormand, (3) Net loss of $1.5M at the Wynn documented, (4) Poker losses on Hustler Casino Live documented, (5) Banned from multiple casinos. Unverified claims: Total of $32M in winnings, exact number of casino bans."
      }
    ]
  },
  {
    title: "The Telegram Community",
    items: [
      {
        question: "What is the Mikki Mase Telegram community?",
        answer: "The Telegram community is a free private group where Mikki shares behind-the-scenes stories, strategy insights, and pattern recognition techniques."
      },
      {
        question: "Is the Telegram community free?",
        answer: "Yes. Mikki offers free access to his Telegram community. There are no paid courses or upsells."
      },
      {
        question: "What do I get in the Telegram community?",
        answer: "Members receive: (1) Free guides on baccarat strategy and bankroll management, (2) Pattern recognition cheatsheets, (3) Behind-the-scenes stories from high-stakes sessions, (4) Direct Q&A access to Mikki."
      }
    ]
  },
  {
    title: "Practical Baccarat Questions",
    items: [
      {
        question: "What is baccarat?",
        answer: "Baccarat is a casino card game where players bet on whether the 'Player' or 'Banker' hand will total closer to 9. It's popular with high-stakes gamblers because it has a low house edge (1.06% on Banker bets, 1.24% on Player bets)."
      },
      {
        question: "What bankroll do you need to play baccarat like Mikki Mase?",
        answer: "Mikki plays with $3 million buy-ins and bets up to $250,000 per hand. This requires a massive bankroll most people don't have."
      },
      {
        question: "Should I try to beat baccarat professionally?",
        answer: "No, unless you have: (1) A massive bankroll (millions), (2) Years of pattern recognition training, (3) Willingness to get banned from casinos. Mikki Mase is an extreme outlier. Treat gambling as entertainment, not income."
      },
      {
        question: "Can online baccarat be beaten like live baccarat?",
        answer: "No. Mikki's edge comes from reading live dealers and physical patterns. Online baccarat uses RNG, eliminating the patterns Mikki claims to exploit."
      },
      {
        question: "What does Mikki Mase do after winning millions?",
        answer: "After winning millions, Mikki has an unusual ritual: he orders a peanut butter and jelly sandwich. Not champagne. Not a fancy dinner. Just a PB&J. He says it keeps him grounded."
      },
      {
        question: "Why does Mikki Mase use flat betting instead of progressive betting?",
        answer: "Mikki uses flat betting (consistent bet size) because it limits mathematical exposure. \"If you bet $250,000 every hand, your maximum exposure per shoe is calculable. But if you're chasing losses with $300,000 bets, you're giving the casino more edge per hour.\""
      }
    ]
  },
  {
    title: "Controversy and Skepticism",
    items: [
      {
        question: "Is Mikki Mase real or fake?",
        answer: "Mikki Mase is a real person (legal name: Michael David Meiterman). His $10M+ win at The Venetian was independently verified. The casino bans suggest he was winning enough to be perceived as a threat."
      },
      {
        question: "Did Mikki Mase really win $32 million?",
        answer: "Mikki Mase claims $32M+ in total winnings, but this is self-reported. The only independently verified win is $10M+ at The Venetian."
      },
      {
        question: "Does Mikki Mase cheat at baccarat?",
        answer: "No. Casinos reviewed surveillance footage and found no evidence of cheating. They banned him simply for winning—a legal practice."
      },
      {
        question: "Is Mikki Mase a scam or legit?",
        answer: "Mikki Mase is legit in that he's a real person with verified casino wins. Key legitimacy factors: (1) He doesn't sell courses, (2) He documents losses, (3) He's been banned from 150+ casinos (casinos don't ban people who lose)."
      }
    ]
  },
  {
    title: "2026 Updates",
    items: [
      {
        question: "Is Mikki Mase still gambling in 2026?",
        answer: "As of 2026, Mikki has shifted focus from casino baccarat to sports betting. Being banned from 150+ casinos limits his ability to play live baccarat."
      },
      {
        question: "What happened to Mikki Mase? Where is he now?",
        answer: "Mikki is still active but operating differently. After being banned from virtually every major casino, he transitioned to sports betting and content creation. He lives in Los Angeles, runs his free Telegram community (200,000+ members), and makes occasional media appearances."
      },
      {
        question: "How can I contact Mikki Mase or join his community?",
        answer: "The best way to connect is through his free Telegram community. He's also active on Instagram (@mikki_mase_community) and YouTube (@Mikki_Mase)."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.mikki-mase.com/images/mikki-extra.webp"
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
            Frequently Asked Questions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            FAQ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400"
          >
            Real answers about Mikki, his wins, the baccarat system, and casino bans.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.05 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-fuchsia-500 rounded-full"></span>
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <FAQAccordion key={itemIndex} question={item.question} answer={item.answer} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join Mikki&apos;s free Telegram community and get direct answers. Over 200,000 members asking questions and learning every day.
          </p>
          <a
            href="https://t.me/mikkimase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-8 py-4 rounded-full transition text-lg"
          >
            Ask in the Community
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Related Pages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/the-system" className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-500 transition">The System</h3>
              <p className="text-zinc-500 text-sm">Learn exactly how Mikki claims to beat baccarat</p>
            </Link>
            <Link href="/wins" className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-500 transition">Win/Loss Record</h3>
              <p className="text-zinc-500 text-sm">Documented wins and losses with verification</p>
            </Link>
            <Link href="/timeline" className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-fuchsia-500/50 transition group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-500 transition">Full Timeline</h3>
              <p className="text-zinc-500 text-sm">Chronological journey from prison to pro gambler</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
