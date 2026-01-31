'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

const rouletteBets = [
  { name: 'Straight Up (Single Number)', payout: '35:1', probEuropean: 2.70, probAmerican: 2.63, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Split (2 Numbers)', payout: '17:1', probEuropean: 5.41, probAmerican: 5.26, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Street (3 Numbers)', payout: '11:1', probEuropean: 8.11, probAmerican: 7.89, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Corner (4 Numbers)', payout: '8:1', probEuropean: 10.81, probAmerican: 10.53, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Six Line (6 Numbers)', payout: '5:1', probEuropean: 16.22, probAmerican: 15.79, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Column (12 Numbers)', payout: '2:1', probEuropean: 32.43, probAmerican: 31.58, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Dozen (12 Numbers)', payout: '2:1', probEuropean: 32.43, probAmerican: 31.58, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Red/Black', payout: '1:1', probEuropean: 48.65, probAmerican: 47.37, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Odd/Even', payout: '1:1', probEuropean: 48.65, probAmerican: 47.37, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'High/Low (1-18 / 19-36)', payout: '1:1', probEuropean: 48.65, probAmerican: 47.37, houseEdgeEU: 2.70, houseEdgeUS: 5.26 },
  { name: 'Five Number (0,00,1,2,3)', payout: '6:1', probEuropean: null, probAmerican: 13.16, houseEdgeEU: null, houseEdgeUS: 7.89 },
];

export default function RouletteCalculator() {
  const [wheelType, setWheelType] = useState<'european' | 'american'>('european');
  const [betAmount, setBetAmount] = useState<string>('10');

  const bet = parseFloat(betAmount) || 0;

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
            <span>/</span>
            <span className="text-white">Roulette Calculator</span>
          </div>

          <h1 className="text-4xl font-black text-white mb-4">
            Roulette Odds Calculator
          </h1>
          <p className="text-zinc-400">
            Compare odds, payouts, and house edge for every roulette bet type.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">

          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex bg-zinc-900 rounded-xl p-1">
              <button
                onClick={() => setWheelType('european')}
                className={`px-4 md:px-6 py-3 rounded-lg font-semibold transition text-sm md:text-base ${
                  wheelType === 'european' ? 'bg-fuchsia-500 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                European (Single 0)
              </button>
              <button
                onClick={() => setWheelType('american')}
                className={`px-4 md:px-6 py-3 rounded-lg font-semibold transition text-sm md:text-base ${
                  wheelType === 'american' ? 'bg-fuchsia-500 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                American (Double 00)
              </button>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900 rounded-xl px-4">
              <span className="text-zinc-400">Bet:</span>
              <span className="text-white">$</span>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="bg-transparent border-none text-white w-20 text-lg focus:outline-none"
              />
            </div>
          </div>

          {/* Wheel Info */}
          <div className="mb-8 grid md:grid-cols-2 gap-4">
            <div className={`bg-zinc-900 border rounded-xl p-4 ${wheelType === 'european' ? 'border-green-500/50' : 'border-zinc-800'}`}>
              <h3 className="text-white font-bold mb-2">European Roulette</h3>
              <p className="text-zinc-400 text-sm">37 pockets (0-36). Single zero. House edge: <span className="text-green-500 font-bold">2.70%</span></p>
            </div>
            <div className={`bg-zinc-900 border rounded-xl p-4 ${wheelType === 'american' ? 'border-red-500/50' : 'border-zinc-800'}`}>
              <h3 className="text-white font-bold mb-2">American Roulette</h3>
              <p className="text-zinc-400 text-sm">38 pockets (0, 00, 1-36). Double zero. House edge: <span className="text-red-500 font-bold">5.26%</span></p>
            </div>
          </div>

          {/* Odds Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left text-zinc-400 font-medium p-4 text-sm">Bet Type</th>
                    <th className="text-center text-zinc-400 font-medium p-4 text-sm">Payout</th>
                    <th className="text-center text-zinc-400 font-medium p-4 text-sm">Win Probability</th>
                    <th className="text-center text-zinc-400 font-medium p-4 text-sm">House Edge</th>
                    <th className="text-center text-zinc-400 font-medium p-4 text-sm">Expected Return</th>
                    <th className="text-center text-zinc-400 font-medium p-4 text-sm">Win Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {rouletteBets.map((betType, i) => {
                    const prob = wheelType === 'european' ? betType.probEuropean : betType.probAmerican;
                    const edge = wheelType === 'european' ? betType.houseEdgeEU : betType.houseEdgeUS;

                    if (prob === null) return null; // Skip five number bet for European

                    const payoutMultiplier = parseInt(betType.payout.split(':')[0]);
                    const winAmount = bet * payoutMultiplier;
                    const expectedReturn = bet - (bet * ((edge || 0) / 100));

                    return (
                      <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                        <td className="text-white font-medium p-4 text-sm">{betType.name}</td>
                        <td className="text-center text-green-500 font-bold p-4">{betType.payout}</td>
                        <td className="text-center text-white p-4">{prob.toFixed(2)}%</td>
                        <td className="text-center text-red-500 p-4">{edge?.toFixed(2)}%</td>
                        <td className="text-center text-yellow-500 p-4">${expectedReturn.toFixed(2)}</td>
                        <td className="text-center text-fuchsia-500 font-bold p-4">${winAmount.toFixed(0)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-green-500 font-bold mb-2">✓ Best Bet</h3>
              <p className="text-zinc-400 text-sm">
                European roulette with even-money bets (Red/Black, Odd/Even) has the lowest house edge at 2.70%. Always choose European over American when available.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-red-500 font-bold mb-2">✗ Worst Bet</h3>
              <p className="text-zinc-400 text-sm">
                The Five Number bet (0, 00, 1, 2, 3) on American roulette has a 7.89% house edge—the worst bet in roulette. Never make this bet.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">Understanding the Numbers</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-fuchsia-500 font-semibold mb-2">Payout</h4>
                <p className="text-zinc-400">How much you win relative to your bet. 35:1 means a $1 bet wins $35 (plus your $1 back).</p>
              </div>
              <div>
                <h4 className="text-fuchsia-500 font-semibold mb-2">Win Probability</h4>
                <p className="text-zinc-400">Your actual chance of winning. On European, betting red has a 48.65% chance—not 50%.</p>
              </div>
              <div>
                <h4 className="text-fuchsia-500 font-semibold mb-2">Expected Return</h4>
                <p className="text-zinc-400">What you&apos;ll get back on average per bet over time. Always less than your bet due to house edge.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
