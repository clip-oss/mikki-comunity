'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TheSystemPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.mikki-mase.com/images/mikki-main-1.webp"
            alt="Mikki Mase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white">The System</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4"
          >
            The Controversial Method
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            The System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400"
          >
            How Mikki Mase claims to beat baccarat—and why casinos banned him for it.
          </motion.p>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold text-white mb-4">How does Mikki Mase&apos;s baccarat system work?</h2>
            <p className="text-zinc-400 mb-6">
              Mikki Mase claims to beat baccarat through pattern recognition, dealer observation, and strategic timing—not card counting. He watches tables for hours without betting, identifies patterns in dealer shuffling and card distribution, then places massive bets ($100K-$250K per hand) only when conditions align. Traditional gambling math says baccarat is unbeatable, but Mikki has verifiably won millions and been banned from 150+ casinos for his methods.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-black text-fuchsia-500">$100K-$250K</p>
                <p className="text-zinc-500 text-sm">Bet Size</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-black text-white">Pattern Recognition</p>
                <p className="text-zinc-500 text-sm">Method</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-green-500">$32M+</p>
                <p className="text-zinc-500 text-sm">Claimed Wins</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-red-500">150+ Bans</p>
                <p className="text-zinc-500 text-sm">Result</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Section 1: Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
            <div className="prose prose-invert prose-zinc max-w-none">
              <p className="text-zinc-400 text-lg leading-relaxed">
                Mikki Mase doesn&apos;t call it gambling. He calls it <strong className="text-white">execution</strong>. Over five years, he claims to have won $32 million from casinos using a system based on pattern recognition, dealer observation, and strategic timing. The result? Banned from 150+ casinos—not for cheating, but for winning.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mt-4">
                This page breaks down exactly what Mikki claims to do, why traditional gambling math says it shouldn&apos;t work, and what the evidence suggests about whether baccarat is truly beatable.
              </p>
            </div>
          </motion.div>

          {/* Section 2: What Is Baccarat? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">What Is Baccarat?</h2>
            <div className="prose prose-invert prose-zinc max-w-none">
              <p className="text-zinc-400 text-lg leading-relaxed">
                Baccarat is a casino card game where you bet on one of three outcomes: Banker, Player, or Tie. Two hands are dealt (Player and Banker), and whichever is closer to 9 wins. You don&apos;t play the hand—you just bet on which side will win.
              </p>
            </div>

            <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">House Edge by Bet Type</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Banker Bet</span>
                  <span className="text-green-500 font-bold">1.06% house edge (best odds)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Player Bet</span>
                  <span className="text-yellow-500 font-bold">1.24% house edge</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-300">Tie Bet</span>
                  <span className="text-red-500 font-bold">14.36% house edge (never bet this)</span>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed mt-6">
              Unlike blackjack (where card counting works) or poker (where skill matters), baccarat is considered a pure probability game. The house edge is small, but it&apos;s built in mathematically. Over time, the casino always wins.
            </p>
          </motion.div>

          {/* Section 3: Why Casinos Say Baccarat Is Unbeatable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Casinos Say Baccarat Is Unbeatable</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Professional gamblers and mathematicians agree: baccarat cannot be beaten long-term through traditional advantage play techniques. Here&apos;s why:
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">1. Card Counting Doesn&apos;t Work</h3>
                <p className="text-zinc-400">
                  In blackjack, counting cards gives you a 1-2% edge. In baccarat, even perfect card counting gives you less than 0.1% edge—and only on specific hands. It&apos;s mathematically useless.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">2. Past Results Don&apos;t Affect Future Outcomes</h3>
                <p className="text-zinc-400">
                  The &quot;Banker won 7 times in a row&quot; pattern means nothing. Each hand is independent. This is basic probability theory—the gambler&apos;s fallacy.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">3. The House Edge Never Disappears</h3>
                <p className="text-zinc-400">
                  Even if you bet perfectly, the 1.06% edge grinds you down over time. Bet $100M lifetime? You&apos;ll lose $1.06M on average. Math doesn&apos;t care about &quot;systems.&quot;
                </p>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-yellow-500 font-semibold mb-2">⚠️ Industry Consensus</p>
              <p className="text-zinc-400">
                Every professional gambling expert—from Stanford Wong to Ed Thorp—agrees baccarat is unbeatable through pattern recognition. If Mikki has found an edge, it&apos;s not through traditional advantage play.
              </p>
            </div>
          </motion.div>

          {/* Section 4: What Mikki Mase Claims */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">What Mikki Mase Claims: The 4-Step Process</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Mikki&apos;s system rejects traditional gambling theory. He claims casinos actively cheat at baccarat through dealer manipulation, and that he reverse-engineered their methods to beat them.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-transparent border-l-4 border-fuchsia-500 rounded-r-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center text-white font-bold">1</span>
                  <h3 className="text-xl font-bold text-white">Observe Without Betting</h3>
                </div>
                <p className="text-zinc-400 ml-14">
                  Mikki watches tables for HOURS before placing a single bet. He&apos;s looking for:
                </p>
                <ul className="text-zinc-400 ml-14 mt-3 space-y-2">
                  <li>• <strong className="text-white">Dealer tells:</strong> Physical movements, card placement timing, shuffling patterns</li>
                  <li>• <strong className="text-white">Shoe flows:</strong> Statistical deviations from expected Banker/Player distributions</li>
                  <li>• <strong className="text-white">Pit boss behavior:</strong> How staff react to wins and losses</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-fuchsia-500/10 to-transparent border-l-4 border-fuchsia-500 rounded-r-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center text-white font-bold">2</span>
                  <h3 className="text-xl font-bold text-white">Pattern Recognition</h3>
                </div>
                <p className="text-zinc-400 ml-14">
                  Unlike traditional &quot;pattern betting&quot; (which doesn&apos;t work), Mikki claims to identify exploitable dealer errors and mechanical predictability in how shoes are shuffled. This is distinct from the gambler&apos;s fallacy—he&apos;s not betting on streaks, he&apos;s betting on human execution flaws.
                </p>
              </div>

              <div className="bg-gradient-to-r from-fuchsia-500/10 to-transparent border-l-4 border-fuchsia-500 rounded-r-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center text-white font-bold">3</span>
                  <h3 className="text-xl font-bold text-white">Massive, Strategic Bets</h3>
                </div>
                <p className="text-zinc-400 ml-14">
                  When patterns align, Mikki bets $100,000 to $250,000 per hand. This isn&apos;t gradual grinding—it&apos;s surgical execution. He doesn&apos;t play for hours. He plays for MINUTES, extracting $1-3M, then leaves.
                </p>
                <div className="ml-14 mt-4 bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <p className="text-sm text-zinc-500 mb-2">Example Session:</p>
                  <p className="text-white font-mono">
                    $3M buy-in → 12 hands at $250K each → +$2.5M profit → Walk away. <span className="text-fuchsia-500">Total time: 18 minutes.</span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-fuchsia-500/10 to-transparent border-l-4 border-fuchsia-500 rounded-r-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-10 h-10 rounded-full bg-fuchsia-500 flex items-center justify-center text-white font-bold">4</span>
                  <h3 className="text-xl font-bold text-white">Disappear Before Detection</h3>
                </div>
                <p className="text-zinc-400 ml-14">
                  After winning, Mikki doesn&apos;t return for WEEKS. This prevents casinos from studying his play or adjusting their procedures. He rotates between casinos, using different buy-in methods, and now plays under other people&apos;s accounts since he&apos;s banned from 150+ properties.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 5: The Bankroll Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Bankroll Strategy</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Mikki&apos;s approach requires MASSIVE capital. Here&apos;s why:
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Minimum Requirements</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-zinc-800 rounded-lg">
                  <p className="text-2xl font-black text-fuchsia-500">$3,000,000</p>
                  <p className="text-zinc-500 text-sm">Buy-in per session</p>
                </div>
                <div className="text-center p-4 bg-zinc-800 rounded-lg">
                  <p className="text-2xl font-black text-white">$100K-$250K</p>
                  <p className="text-zinc-500 text-sm">Bet size per hand</p>
                </div>
                <div className="text-center p-4 bg-zinc-800 rounded-lg">
                  <p className="text-2xl font-black text-green-500">$10,000,000+</p>
                  <p className="text-zinc-500 text-sm">Total bankroll needed</p>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Why so much? <strong className="text-white">VARIANCE.</strong> Even with an edge, you can lose millions in a single session. Mikki&apos;s documented $1.5M loss at the Wynn shows this isn&apos;t risk-free. You need enough capital to survive losing streaks until patterns align again.
            </p>

            <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <p className="text-red-500 font-semibold mb-2">⚠️ Why This Isn&apos;t Replicable for Most People</p>
              <p className="text-zinc-400">
                If you don&apos;t have $10M+ in liquid capital, this system is irrelevant. Trying to replicate it with $50K or even $500K will result in ruin the first time variance goes against you.
              </p>
            </div>
          </motion.div>

          {/* Section 6: Does It Actually Work? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Does It Actually Work?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              The evidence is mixed. Let&apos;s separate what&apos;s proven from what&apos;s claimed:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-500 mb-4">✓ What&apos;s Proven</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>$10M+ win at The Venetian (verified by poker player Jake Ormand)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Casino bans (Venetian, Wynn, and others confirmed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>No cheating found (casinos reviewed footage, found nothing illegal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Documented losses ($1.5M at Wynn, $938K in poker) proving transparency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-500 mb-4">? What&apos;s Unverified</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">?</span>
                    <span>$32M total winnings claim (only $10M+ verified)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">?</span>
                    <span>Casino cheating allegations (casinos deny this)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">?</span>
                    <span>Specific pattern recognition methods (not disclosed in detail)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">The Bottom Line</h3>
              <p className="text-zinc-400">
                Mikki has demonstrably won millions from casinos using legal methods. Whether it&apos;s through exploiting dealer errors, extreme variance luck, or something else entirely remains debated. The fact that casinos banned him despite finding no cheating suggests they believe he has some edge—even if they don&apos;t understand it.
              </p>
            </div>
          </motion.div>

          {/* Section 7: Can You Replicate This? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Can You Replicate This?</h2>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
              <p className="text-red-500 font-semibold mb-2">⚠️ Honest Answer: Probably Not</p>
              <p className="text-zinc-400 mb-4">
                Even if Mikki&apos;s system works, you likely can&apos;t execute it. Here&apos;s why:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• You don&apos;t have $10M+ in capital (required to survive variance)</li>
                <li>• You don&apos;t have 5+ years of pattern recognition training</li>
                <li>• You don&apos;t have casino host relationships to negotiate $250K/hand limits</li>
                <li>• You&apos;ll get banned immediately if you try to replicate this at scale</li>
              </ul>
            </div>

            <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-fuchsia-500 mb-4">What You CAN Learn</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">→</span>
                  <span><strong className="text-white">Bankroll management principles</strong> (bet sizing, risk of ruin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">→</span>
                  <span><strong className="text-white">When to walk away</strong> (most gamblers don&apos;t quit when ahead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">→</span>
                  <span><strong className="text-white">How casinos think</strong> (why they ban winners, how they track play)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fuchsia-500 mt-1">→</span>
                  <span><strong className="text-white">Transparency matters</strong> (Mikki shows losses, not just wins)</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Learn More in the Free Community
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Mikki shares pattern recognition techniques, behind-the-scenes stories, and strategy insights in his free Telegram group.
          </p>
          <a
            href="https://t.me/mikkimase"
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
    </main>
  );
}
