'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

export default function BankrollCalculator() {
  const [totalBankroll, setTotalBankroll] = useState<string>('1000');
  const [sessionLength, setSessionLength] = useState<string>('2');
  const [avgBet, setAvgBet] = useState<string>('25');
  const [handsPerHour, setHandsPerHour] = useState<string>('60');
  const [houseEdge, setHouseEdge] = useState<string>('0.5');

  const [results, setResults] = useState<{
    sessionBankroll: number;
    stopLoss: number;
    winGoal: number;
    expectedLoss: number;
    maxBet: number;
    totalWagered: number;
    totalHands: number;
  } | null>(null);

  const calculate = () => {
    const bankroll = parseFloat(totalBankroll) || 0;
    const hours = parseFloat(sessionLength) || 2;
    const bet = parseFloat(avgBet) || 25;
    const hands = parseFloat(handsPerHour) || 60;
    const edge = parseFloat(houseEdge) || 0.5;

    // Session bankroll: 50x average bet or 20% of total, whichever is lower
    const sessionBankroll = Math.min(bet * 50, bankroll * 0.2);

    // Stop loss: 40% of session bankroll
    const stopLoss = sessionBankroll * 0.4;

    // Win goal: 20% of session bankroll
    const winGoal = sessionBankroll * 0.2;

    // Expected loss per session
    const totalHands = hours * hands;
    const totalWagered = totalHands * bet;
    const expectedLoss = totalWagered * (edge / 100);

    // Max bet: 2% of total bankroll
    const maxBet = bankroll * 0.02;

    setResults({
      sessionBankroll: Math.round(sessionBankroll),
      stopLoss: Math.round(stopLoss),
      winGoal: Math.round(winGoal),
      expectedLoss: Math.round(expectedLoss * 100) / 100,
      maxBet: Math.round(maxBet),
      totalWagered: Math.round(totalWagered),
      totalHands: Math.round(totalHands),
    });
  };

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
            <span>/</span>
            <span className="text-white">Bankroll Calculator</span>
          </div>

          <h1 className="text-4xl font-black text-white mb-4">
            Bankroll Calculator
          </h1>
          <p className="text-zinc-400">
            Calculate your session bankroll, stop-loss limits, and win goals based on professional bankroll management principles.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Inputs */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-white font-bold mb-6">Your Details</h3>

              <div className="space-y-6">
                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Total Bankroll ($)</label>
                  <input
                    type="number"
                    value={totalBankroll}
                    onChange={(e) => setTotalBankroll(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="1000"
                  />
                  <p className="text-zinc-600 text-xs mt-1">Total money you can afford to lose</p>
                </div>

                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Session Length (hours)</label>
                  <input
                    type="number"
                    value={sessionLength}
                    onChange={(e) => setSessionLength(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="2"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Average Bet Size ($)</label>
                  <input
                    type="number"
                    value={avgBet}
                    onChange={(e) => setAvgBet(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="25"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Hands/Spins per Hour</label>
                  <input
                    type="number"
                    value={handsPerHour}
                    onChange={(e) => setHandsPerHour(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="60"
                  />
                  <p className="text-zinc-600 text-xs mt-1">Blackjack: ~60 | Baccarat: ~70 | Roulette: ~40</p>
                </div>

                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">House Edge (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={houseEdge}
                    onChange={(e) => setHouseEdge(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="0.5"
                  />
                  <p className="text-zinc-600 text-xs mt-1">Blackjack: ~0.5% | Baccarat: ~1.06% | Roulette: ~2.7%</p>
                </div>

                <button
                  onClick={calculate}
                  className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-4 rounded-xl text-lg transition"
                >
                  Calculate
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {results ? (
                <>
                  <div className="bg-zinc-900 border border-fuchsia-500/50 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Session Bankroll</p>
                    <p className="text-4xl font-black text-fuchsia-500">${results.sessionBankroll}</p>
                    <p className="text-zinc-600 text-xs mt-1">Bring this much to your session</p>
                  </div>

                  <div className="bg-zinc-900 border border-red-500/50 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Stop-Loss Limit</p>
                    <p className="text-4xl font-black text-red-500">-${results.stopLoss}</p>
                    <p className="text-zinc-600 text-xs mt-1">Walk away if you lose this much</p>
                  </div>

                  <div className="bg-zinc-900 border border-green-500/50 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Win Goal</p>
                    <p className="text-4xl font-black text-green-500">+${results.winGoal}</p>
                    <p className="text-zinc-600 text-xs mt-1">Consider leaving when you hit this</p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Expected Loss</p>
                    <p className="text-2xl font-bold text-yellow-500">~${results.expectedLoss}</p>
                    <p className="text-zinc-600 text-xs mt-1">Statistical average loss per session</p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Maximum Bet Size</p>
                    <p className="text-2xl font-bold text-white">${results.maxBet}</p>
                    <p className="text-zinc-600 text-xs mt-1">Never bet more than 2% of total bankroll</p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-zinc-400 text-sm mb-1">Total Hands</p>
                        <p className="text-xl font-bold text-white">{results.totalHands}</p>
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm mb-1">Total Wagered</p>
                        <p className="text-xl font-bold text-white">${results.totalWagered}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center h-full flex items-center justify-center">
                  <p className="text-zinc-500">Enter your details and click Calculate to see your session plan.</p>
                </div>
              )}
            </div>

          </div>

          {/* Tips */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">The 20% Rule</h4>
              <p className="text-zinc-500 text-sm">
                Never risk more than 20% of your total bankroll in a single session. This ensures you survive losing streaks.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">Stop-Loss Discipline</h4>
              <p className="text-zinc-500 text-sm">
                Set your stop-loss BEFORE you play and stick to it. Chasing losses is how bankrolls disappear.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">Win Goals Work</h4>
              <p className="text-zinc-500 text-sm">
                Locking in profits prevents giving back your wins. Leave when you&apos;re ahead—the house edge never sleeps.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
