'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

const popularSlots = [
  { name: 'Mega Moolah', rtp: 88.12, avgBonusSpins: 180 },
  { name: 'Starburst', rtp: 96.09, avgBonusSpins: 120 },
  { name: 'Book of Dead', rtp: 96.21, avgBonusSpins: 150 },
  { name: 'Gonzo\'s Quest', rtp: 95.97, avgBonusSpins: 160 },
  { name: 'Sweet Bonanza', rtp: 96.51, avgBonusSpins: 200 },
  { name: 'Gates of Olympus', rtp: 96.50, avgBonusSpins: 250 },
  { name: 'Big Bass Bonanza', rtp: 96.71, avgBonusSpins: 170 },
  { name: 'Wolf Gold', rtp: 96.01, avgBonusSpins: 140 },
];

export default function SlotCalculator() {
  const [betPerSpin, setBetPerSpin] = useState<string>('1');
  const [rtp, setRtp] = useState<string>('96');
  const [bonusFrequency, setBonusFrequency] = useState<string>('150');
  const [budget, setBudget] = useState<string>('100');

  const [results, setResults] = useState<{
    expectedSpins: number;
    costToBonus: number;
    expectedReturn: number;
    houseEdge: number;
    bonusesWithBudget: number;
    expectedLoss: number;
  } | null>(null);

  const calculate = () => {
    const bet = parseFloat(betPerSpin) || 1;
    const rtpPct = parseFloat(rtp) || 96;
    const freq = parseFloat(bonusFrequency) || 150;
    const budgetAmt = parseFloat(budget) || 100;

    const costToBonus = bet * freq;
    const expectedSpins = Math.floor(budgetAmt / bet);
    const bonusesWithBudget = Math.floor(expectedSpins / freq);
    const houseEdge = 100 - rtpPct;
    const expectedReturn = budgetAmt * (rtpPct / 100);
    const expectedLoss = budgetAmt - expectedReturn;

    setResults({
      expectedSpins,
      costToBonus: Math.round(costToBonus * 100) / 100,
      expectedReturn: Math.round(expectedReturn * 100) / 100,
      houseEdge,
      bonusesWithBudget,
      expectedLoss: Math.round(expectedLoss * 100) / 100,
    });
  };

  const selectSlot = (slot: typeof popularSlots[0]) => {
    setRtp(slot.rtp.toString());
    setBonusFrequency(slot.avgBonusSpins.toString());
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
            <span className="text-white">Slot Calculator</span>
          </div>

          <h1 className="text-4xl font-black text-white mb-4">
            Slot Bonus Calculator
          </h1>
          <p className="text-zinc-400">
            Calculate average cost to hit bonus features and expected returns based on RTP.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Inputs */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-white font-bold mb-6">Slot Details</h3>

              <div className="space-y-6">
                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Bet Per Spin ($)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={betPerSpin}
                    onChange={(e) => setBetPerSpin(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="1"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">RTP (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={rtp}
                    onChange={(e) => setRtp(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="96"
                  />
                  <p className="text-zinc-600 text-xs mt-1">Return to Player - find this in game info</p>
                </div>

                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Avg Spins to Bonus</label>
                  <input
                    type="number"
                    value={bonusFrequency}
                    onChange={(e) => setBonusFrequency(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="150"
                  />
                  <p className="text-zinc-600 text-xs mt-1">Typical range: 100-300 spins</p>
                </div>

                <div>
                  <label className="text-zinc-400 text-sm mb-2 block">Your Budget ($)</label>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg focus:border-fuchsia-500 outline-none transition"
                    placeholder="100"
                  />
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
                    <p className="text-zinc-400 text-sm mb-1">Cost to Hit Bonus</p>
                    <p className="text-4xl font-black text-fuchsia-500">${results.costToBonus}</p>
                    <p className="text-zinc-600 text-xs mt-1">Average cost to trigger bonus feature</p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Expected Spins with Budget</p>
                    <p className="text-3xl font-bold text-white">{results.expectedSpins} spins</p>
                    <p className="text-zinc-600 text-xs mt-1">How many spins your budget allows</p>
                  </div>

                  <div className="bg-zinc-900 border border-green-500/50 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Expected Bonuses</p>
                    <p className="text-3xl font-bold text-green-500">{results.bonusesWithBudget}x</p>
                    <p className="text-zinc-600 text-xs mt-1">Average bonus triggers with your budget</p>
                  </div>

                  <div className="bg-zinc-900 border border-yellow-500/50 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Expected Return</p>
                    <p className="text-3xl font-bold text-yellow-500">${results.expectedReturn}</p>
                    <p className="text-zinc-600 text-xs mt-1">Statistical average return from ${budget}</p>
                  </div>

                  <div className="bg-zinc-900 border border-red-500/50 rounded-2xl p-6">
                    <p className="text-zinc-400 text-sm mb-1">Expected Loss</p>
                    <p className="text-3xl font-bold text-red-500">-${results.expectedLoss}</p>
                    <p className="text-zinc-600 text-xs mt-1">House edge: {results.houseEdge.toFixed(2)}%</p>
                  </div>
                </>
              ) : (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center h-full flex items-center justify-center">
                  <p className="text-zinc-500">Enter slot details and click Calculate.</p>
                </div>
              )}
            </div>

          </div>

          {/* Popular Slots Quick Select */}
          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">Quick Select: Popular Slots</h3>
            <p className="text-zinc-500 text-sm mb-4">Click a slot to auto-fill its RTP and average bonus frequency.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {popularSlots.map((slot) => (
                <button
                  key={slot.name}
                  onClick={() => selectSlot(slot)}
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-fuchsia-500/50 rounded-xl p-3 text-left transition"
                >
                  <p className="text-white font-medium text-sm">{slot.name}</p>
                  <p className="text-zinc-500 text-xs mt-1">RTP: {slot.rtp}%</p>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">What is RTP?</h4>
              <p className="text-zinc-500 text-sm">
                Return to Player (RTP) is the percentage of wagered money a slot returns to players over time. A 96% RTP means the slot keeps 4% as profit on average.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">Bonus Frequency</h4>
              <p className="text-zinc-500 text-sm">
                This is the average number of spins between bonus triggers. Higher volatility slots have less frequent but larger bonuses.
              </p>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <h4 className="text-red-500 font-bold mb-2">Important: Variance is High</h4>
            <p className="text-zinc-400 text-sm">
              These are statistical averages. In reality, you might hit 3 bonuses in 50 spins or go 500 spins without one. Slots are high-variance games—never bet money you can&apos;t afford to lose.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
