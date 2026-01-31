'use client'

import { useState } from 'react'
import Link from 'next/link'

// ===========================================
// EXACT DATA FROM MIKKI MASE'S ROULETTE CHEATSHEET
// ===========================================

interface BetType {
  name: string
  numbers: number
  payoff: string
  oddsEU: string
  oddsUS: string
  probEU: number
  probUS: number
  delayEU: number
  delayUS: number
}

const BET_TYPES: BetType[] = [
  { name: 'Straight-up', numbers: 1, payoff: '35 to 1', oddsEU: '1 in 37', oddsUS: '1 in 38', probEU: 2.70, probUS: 2.63, delayEU: 143, delayUS: 147 },
  { name: 'Split', numbers: 2, payoff: '17 to 1', oddsEU: '1 in 18.5', oddsUS: '1 in 19', probEU: 5.40, probUS: 5.26, delayEU: 70, delayUS: 72 },
  { name: 'Trio/Street', numbers: 3, payoff: '11 to 1', oddsEU: '1 in 12.3', oddsUS: '1 in 12.7', probEU: 8.10, probUS: 7.89, delayEU: 46, delayUS: 48 },
  { name: 'Corner', numbers: 4, payoff: '8 to 1', oddsEU: '1 in 9.25', oddsUS: '1 in 9.5', probEU: 10.81, probUS: 10.52, delayEU: 34, delayUS: 35 },
  { name: '5 Numbers', numbers: 5, payoff: '6 to 1', oddsEU: 'N/A', oddsUS: '1 in 7.6', probEU: 0, probUS: 13.15, delayEU: 0, delayUS: 28 },
  { name: 'Line', numbers: 6, payoff: '5 to 1', oddsEU: '1 in 7.4', oddsUS: '1 in 6.3', probEU: 16.21, probUS: 15.78, delayEU: 22, delayUS: 23 },
  { name: 'Column', numbers: 12, payoff: '2 to 1', oddsEU: '1 in 3.1', oddsUS: '1 in 3.2', probEU: 32.43, probUS: 31.57, delayEU: 10, delayUS: 11 },
  { name: 'Dozen', numbers: 12, payoff: '2 to 1', oddsEU: '1 in 3.1', oddsUS: '1 in 3.2', probEU: 32.43, probUS: 31.57, delayEU: 10, delayUS: 11 },
  { name: 'Color (Red/Black)', numbers: 18, payoff: '1 to 1', oddsEU: '1 in 2.06', oddsUS: '1 in 2.11', probEU: 48.64, probUS: 47.36, delayEU: 6, delayUS: 7 },
  { name: 'Even/Odd', numbers: 18, payoff: '1 to 1', oddsEU: '1 in 2.06', oddsUS: '1 in 2.11', probEU: 48.64, probUS: 47.36, delayEU: 6, delayUS: 7 },
  { name: 'Low/High', numbers: 18, payoff: '1 to 1', oddsEU: '1 in 2.06', oddsUS: '1 in 2.11', probEU: 48.64, probUS: 47.36, delayEU: 6, delayUS: 7 },
]

const IMPROVED_BETS_EU = [
  { name: 'Red, #6, #22', numbers: 20, prob: 54.0, delay: 5 },
  { name: '2nd 12, #2, #36', numbers: 14, prob: 37.8, delay: 8 },
  { name: 'Black, 3rd Column', numbers: 26, prob: 64.8, delay: 3 },
  { name: 'Red, #28, #29, #30', numbers: 20, prob: 54.0, delay: 5 },
  { name: 'Red, #10, #11, #12, #13, #14', numbers: 21, prob: 56.7, delay: 5 },
  { name: 'Black, #16, #17, #18, #19, #20, #21', numbers: 22, prob: 59.5, delay: 4 },
  { name: 'High, #3, #6', numbers: 20, prob: 54.0, delay: 5 },
]

const IMPROVED_BETS_US = [
  { name: 'Red, #6, #22', numbers: 20, prob: 52.6, delay: 6 },
  { name: '2nd 12, #2, #36', numbers: 14, prob: 36.8, delay: 9 },
  { name: 'Black, 3rd Column', numbers: 26, prob: 63.2, delay: 4 },
  { name: 'Red, #28, #29, #30', numbers: 20, prob: 52.6, delay: 6 },
  { name: 'Red, #10, #11, #12, #13, #14', numbers: 21, prob: 55.2, delay: 6 },
  { name: 'Black, #16, #17, #18, #19, #20, #21', numbers: 22, prob: 57.9, delay: 5 },
  { name: 'High, #3, #6', numbers: 20, prob: 52.6, delay: 6 },
]

// Roulette wheel numbers with colors
const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
const BLACK_NUMBERS = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

export default function RouletteCalculator() {
  const [wheelType, setWheelType] = useState<'european' | 'american'>('european')
  const [betAmount, setBetAmount] = useState<string>('10')
  const [recentNumbers, setRecentNumbers] = useState<number[]>([])
  const [selectedNumber, setSelectedNumber] = useState<string>('')
  const [activeTab, setActiveTab] = useState<'odds' | 'improved' | 'strategies' | 'tracker'>('odds')

  const bet = parseFloat(betAmount) || 10

  const addNumber = (numStr: string) => {
    if (numStr === '00' && wheelType === 'american') {
      setRecentNumbers(prev => [-1, ...prev].slice(0, 50)) // -1 represents 00
      setSelectedNumber('')
      return
    }
    const num = parseInt(numStr)
    if (!isNaN(num) && num >= 0 && num <= 36) {
      setRecentNumbers(prev => [num, ...prev].slice(0, 50))
      setSelectedNumber('')
    }
  }

  const getNumberColor = (num: number) => {
    if (num === 0 || num === -1) return 'bg-green-600'
    if (RED_NUMBERS.includes(num)) return 'bg-red-600'
    return 'bg-zinc-900'
  }

  const getDisplayNumber = (num: number) => {
    if (num === -1) return '00'
    return num.toString()
  }

  // Calculate hot/cold numbers
  const getNumberStats = () => {
    const counts: Record<number, number> = {}
    recentNumbers.forEach(n => {
      counts[n] = (counts[n] || 0) + 1
    })

    const sorted = Object.entries(counts)
      .map(([num, count]) => ({ num: parseInt(num), count }))
      .sort((a, b) => b.count - a.count)

    return {
      hot: sorted.slice(0, 5),
      cold: Array.from({ length: 37 }, (_, i) => i)
        .filter(n => !counts[n])
        .slice(0, 5)
        .map(num => ({ num, count: 0 }))
    }
  }

  const stats = getNumberStats()

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="py-12 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <span>/</span>
            <span className="text-white">Roulette Calculator</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎰</span>
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">Roulette Odds Calculator</h1>
              <p className="text-zinc-400">Exact data from Mikki Mase&apos;s Cheatsheet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-4 border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Wheel Type */}
            <div className="flex bg-zinc-900 rounded-xl p-1">
              <button
                onClick={() => setWheelType('european')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  wheelType === 'european' ? 'bg-green-500 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                European (Single 0)
              </button>
              <button
                onClick={() => setWheelType('american')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  wheelType === 'american' ? 'bg-green-500 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                American (Double 00)
              </button>
            </div>

            {/* Bet Amount */}
            <div className="flex items-center gap-2 bg-zinc-900 rounded-xl px-4 py-2">
              <span className="text-zinc-400 text-sm">Bet:</span>
              <span className="text-white">$</span>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="bg-transparent border-none text-white w-20 focus:outline-none"
              />
            </div>

            {/* House Edge Display */}
            <div className="ml-auto text-sm">
              <span className="text-zinc-500">House Edge: </span>
              <span className="text-red-500 font-bold">
                {wheelType === 'european' ? '2.70%' : '5.26%'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'odds', label: 'Odds Table' },
              { id: 'improved', label: 'Improved Bets' },
              { id: 'strategies', label: 'Betting Systems' },
              { id: 'tracker', label: 'Number Tracker' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-3 font-semibold text-sm transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-fuchsia-500'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">

          {/* ODDS TABLE TAB */}
          {activeTab === 'odds' && (
            <div className="space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-950">
                        <th className="text-left text-zinc-400 font-medium p-4">Bet Type</th>
                        <th className="text-center text-zinc-400 font-medium p-4"># Numbers</th>
                        <th className="text-center text-zinc-400 font-medium p-4">Payout</th>
                        <th className="text-center text-zinc-400 font-medium p-4">Odds</th>
                        <th className="text-center text-zinc-400 font-medium p-4">Win %</th>
                        <th className="text-center text-zinc-400 font-medium p-4">Avg Delay</th>
                        <th className="text-center text-zinc-400 font-medium p-4">Win Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BET_TYPES.map((betType, i) => {
                        const prob = wheelType === 'european' ? betType.probEU : betType.probUS
                        const odds = wheelType === 'european' ? betType.oddsEU : betType.oddsUS
                        const delay = wheelType === 'european' ? betType.delayEU : betType.delayUS

                        if (prob === 0) return null

                        const payoutMultiplier = parseInt(betType.payoff.split(' ')[0])
                        const winAmount = bet * payoutMultiplier

                        return (
                          <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                            <td className="text-white font-medium p-4">{betType.name}</td>
                            <td className="text-center text-zinc-400 p-4">{betType.numbers}</td>
                            <td className="text-center text-green-500 font-bold p-4">{betType.payoff}</td>
                            <td className="text-center text-zinc-400 p-4">{odds}</td>
                            <td className="text-center p-4">
                              <span className={`font-bold ${prob > 40 ? 'text-green-500' : prob > 20 ? 'text-yellow-500' : 'text-red-500'}`}>
                                {prob.toFixed(2)}%
                              </span>
                            </td>
                            <td className="text-center text-zinc-500 p-4">{delay} spins</td>
                            <td className="text-center text-fuchsia-500 font-bold p-4">${winAmount}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tips */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-green-500 font-bold mb-2">Best Bet</h3>
                  <p className="text-zinc-400 text-sm">
                    {wheelType === 'european'
                      ? 'Even-money bets (Red/Black, Odd/Even) have 48.64% win rate with only 2.70% house edge.'
                      : 'Even-money bets have 47.36% win rate, but house edge is 5.26%. Play European when possible!'}
                  </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h3 className="text-red-500 font-bold mb-2">Worst Bet</h3>
                  <p className="text-zinc-400 text-sm">
                    {wheelType === 'european'
                      ? 'Straight-up bets have only 2.70% win rate. You\'ll wait an average of 143 spins between wins.'
                      : 'The 5 Numbers bet (0,00,1,2,3) has a 7.89% house edge - the worst bet in roulette!'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* IMPROVED BETS TAB */}
          {activeTab === 'improved' && (
            <div className="space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">
                  {wheelType.charAt(0).toUpperCase() + wheelType.slice(1)} Improved Bets
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  Combination bets that cover more numbers for higher win probability
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left text-zinc-400 font-medium p-3">Bet Combination</th>
                        <th className="text-center text-zinc-400 font-medium p-3"># Numbers</th>
                        <th className="text-center text-zinc-400 font-medium p-3">Win Probability</th>
                        <th className="text-center text-zinc-400 font-medium p-3">Avg Delay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(wheelType === 'european' ? IMPROVED_BETS_EU : IMPROVED_BETS_US).map((b, i) => (
                        <tr key={i} className="border-b border-zinc-800/50">
                          <td className="text-white p-3">{b.name}</td>
                          <td className="text-center text-zinc-400 p-3">{b.numbers}</td>
                          <td className="text-center p-3">
                            <span className={`font-bold ${b.prob > 60 ? 'text-green-500' : b.prob > 50 ? 'text-yellow-500' : 'text-zinc-400'}`}>
                              {b.prob}%
                            </span>
                          </td>
                          <td className="text-center text-zinc-500 p-3">{b.delay} spins</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 007 Bet */}
              <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">The 007 Bet</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Made famous by James Bond. Covers 25 numbers for a {wheelType === 'european' ? '67.5%' : '65.7%'} win probability.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-zinc-800 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">007 Bet One</h4>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>14 chips on <span className="text-white">High (19-36)</span></li>
                      <li>5 chips on <span className="text-white">any line from 1-18</span></li>
                      <li>1 chip on <span className="text-white">0</span></li>
                    </ul>
                  </div>
                  <div className="bg-zinc-800 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">007 Bet Two</h4>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>14 chips on <span className="text-white">Low (1-18)</span></li>
                      <li>5 chips on <span className="text-white">any line from 19-36</span></li>
                      <li>1 chip on <span className="text-white">0</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BETTING STRATEGIES TAB */}
          {activeTab === 'strategies' && (
            <div className="space-y-6">
              {/* Martingale */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">Martingale Progressions</h3>
                <p className="text-zinc-500 text-sm mb-4">Double your bet after each loss. From Mikki&apos;s Cheatsheet.</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left text-zinc-400 p-2">Bet Type</th>
                        <th className="text-center text-zinc-400 p-2" colSpan={7}>Spins → Bet Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-zinc-800/50">
                        <td className="text-white p-2">1:1 (Color, Even, etc)</td>
                        <td className="text-center text-zinc-400 p-2">1→1</td>
                        <td className="text-center text-zinc-400 p-2">2→2</td>
                        <td className="text-center text-zinc-400 p-2">3→4</td>
                        <td className="text-center text-zinc-400 p-2">4→8</td>
                        <td className="text-center text-zinc-400 p-2">5→16</td>
                        <td className="text-center text-zinc-400 p-2">6→32</td>
                        <td className="text-center text-red-500 p-2">7→64</td>
                      </tr>
                      <tr className="border-b border-zinc-800/50">
                        <td className="text-white p-2">2:1 (Dozen, Column)</td>
                        <td className="text-center text-zinc-400 p-2">1-2→1</td>
                        <td className="text-center text-zinc-400 p-2">3→2</td>
                        <td className="text-center text-zinc-400 p-2">4→3</td>
                        <td className="text-center text-zinc-400 p-2">5→5</td>
                        <td className="text-center text-zinc-400 p-2">6→7</td>
                        <td className="text-center text-zinc-400 p-2">7→11</td>
                        <td className="text-center text-red-500 p-2">8→16</td>
                      </tr>
                      <tr className="border-b border-zinc-800/50">
                        <td className="text-white p-2">5:1 (Line)</td>
                        <td className="text-center text-zinc-400 p-2">1-5→1</td>
                        <td className="text-center text-zinc-400 p-2">6-8→2</td>
                        <td className="text-center text-zinc-400 p-2">9-11→4</td>
                        <td className="text-center text-zinc-400 p-2">12-13→6</td>
                        <td className="text-center text-zinc-400 p-2">14→8</td>
                        <td className="text-center text-zinc-400 p-2">15→10</td>
                        <td className="text-center text-red-500 p-2">16→12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-500 text-sm">
                    <strong>Stop once you win and start again.</strong> Martingale can wipe out your bankroll in a losing streak.
                  </p>
                </div>
              </div>

              {/* Labouchere */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">Labouchere System</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-zinc-400 text-sm mb-4">Set a sequence of numbers. Bet the sum of first and last.</p>
                    <ul className="text-sm text-zinc-400 space-y-2">
                      <li><span className="text-white">Set sequence:</span> Any numbers you want (e.g., 1,1,1,1,1)</li>
                      <li><span className="text-white">Bet:</span> Sum of first + last (e.g., 1+1=2)</li>
                      <li><span className="text-green-500">If win:</span> Erase first and last</li>
                      <li><span className="text-red-500">If lose:</span> Add bet to end</li>
                      <li><span className="text-white">Done:</span> When all numbers erased</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-800 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Example:</h4>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>Sequence: <span className="text-white">1,2,3,4</span> → bet 1+4=<span className="text-fuchsia-500">5</span></li>
                      <li>Win → erase 1,4 → new: <span className="text-white">2,3</span> → bet <span className="text-fuchsia-500">5</span></li>
                      <li>Lose → add 5 → new: <span className="text-white">1,2,3,4,5</span> → bet <span className="text-fuchsia-500">6</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* D'Alembert */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">D&apos;Alembert System</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-zinc-400 text-sm mb-4">Increase by 1 after loss, repeat initial after win.</p>
                    <ul className="text-sm text-zinc-400 space-y-2">
                      <li><span className="text-white">Set initial bet:</span> e.g., 5</li>
                      <li><span className="text-white">Set profit goal:</span> e.g., 25</li>
                      <li><span className="text-green-500">If win:</span> Repeat initial bet (5)</li>
                      <li><span className="text-red-500">If lose:</span> Add 1 to bet (5+1=6)</li>
                      <li><span className="text-white">Done:</span> When profit goal reached</li>
                    </ul>
                  </div>
                  <div className="bg-zinc-800 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Example:</h4>
                    <p className="text-sm text-zinc-400">Initial=5, Goal=25</p>
                    <ul className="text-sm text-zinc-400 space-y-1 mt-2">
                      <li>Win → bet <span className="text-fuchsia-500">5</span></li>
                      <li>Lose → bet <span className="text-fuchsia-500">6</span></li>
                      <li>Lose → bet <span className="text-fuchsia-500">7</span></li>
                      <li>Win → bet <span className="text-fuchsia-500">5</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mikki Quote */}
              <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/30 rounded-2xl p-6 text-center">
                <p className="text-xl text-white italic">&quot;A timely retreat is a victory.&quot;</p>
                <p className="text-fuchsia-500 mt-2">— Mikki Mase</p>
              </div>
            </div>
          )}

          {/* NUMBER TRACKER TAB */}
          {activeTab === 'tracker' && (
            <div className="space-y-6">
              {/* Add Number */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">Add Spin Result</h3>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={selectedNumber}
                    onChange={(e) => setSelectedNumber(e.target.value)}
                    placeholder={wheelType === 'american' ? '0-36 or 00' : '0-36'}
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-fuchsia-500 outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && addNumber(selectedNumber)}
                  />
                  <button
                    onClick={() => addNumber(selectedNumber)}
                    className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-6 py-3 rounded-xl transition"
                  >
                    Add
                  </button>
                </div>

                {/* Quick Add Grid */}
                <div className="grid grid-cols-10 gap-1">
                  {wheelType === 'american' && (
                    <button
                      onClick={() => addNumber('00')}
                      className="p-2 rounded bg-green-600 text-white text-sm font-bold hover:opacity-80"
                    >
                      00
                    </button>
                  )}
                  <button
                    onClick={() => addNumber('0')}
                    className="p-2 rounded bg-green-600 text-white text-sm font-bold hover:opacity-80"
                  >
                    0
                  </button>
                  {Array.from({ length: 36 }, (_, i) => i + 1).map(num => (
                    <button
                      key={num}
                      onClick={() => addNumber(num.toString())}
                      className={`p-2 rounded ${getNumberColor(num)} text-white text-sm font-bold hover:opacity-80`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Numbers */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">Recent Numbers ({recentNumbers.length})</h3>
                  {recentNumbers.length > 0 && (
                    <button
                      onClick={() => setRecentNumbers([])}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {recentNumbers.length === 0 ? (
                  <p className="text-zinc-500 text-center py-8">No spins recorded yet. Add numbers above.</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {recentNumbers.map((num, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-lg ${getNumberColor(num)} flex items-center justify-center text-white font-bold text-sm ${i === 0 ? 'ring-2 ring-fuchsia-500' : ''}`}
                      >
                        {getDisplayNumber(num)}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hot & Cold Numbers */}
              {recentNumbers.length >= 5 && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                    <h3 className="text-red-500 font-bold mb-4">Hot Numbers</h3>
                    <div className="flex flex-wrap gap-2">
                      {stats.hot.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-2">
                          <div className={`w-8 h-8 rounded ${getNumberColor(item.num)} flex items-center justify-center text-white font-bold text-sm`}>
                            {getDisplayNumber(item.num)}
                          </div>
                          <span className="text-white font-bold">{item.count}x</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                    <h3 className="text-blue-500 font-bold mb-4">Cold Numbers</h3>
                    <div className="flex flex-wrap gap-2">
                      {stats.cold.map((item, i) => (
                        <div key={i} className={`w-10 h-10 rounded-lg ${getNumberColor(item.num)} flex items-center justify-center text-white font-bold text-sm opacity-50`}>
                          {getDisplayNumber(item.num)}
                        </div>
                      ))}
                    </div>
                    <p className="text-zinc-500 text-xs mt-2">Numbers that haven&apos;t appeared</p>
                  </div>
                </div>
              )}

              {/* Statistics */}
              {recentNumbers.length >= 10 && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-4">Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-zinc-800 rounded-xl p-4 text-center">
                      <p className="text-red-500 text-2xl font-bold">
                        {recentNumbers.filter(n => RED_NUMBERS.includes(n)).length}
                      </p>
                      <p className="text-zinc-500 text-sm">Red</p>
                    </div>
                    <div className="bg-zinc-800 rounded-xl p-4 text-center">
                      <p className="text-white text-2xl font-bold">
                        {recentNumbers.filter(n => BLACK_NUMBERS.includes(n)).length}
                      </p>
                      <p className="text-zinc-500 text-sm">Black</p>
                    </div>
                    <div className="bg-zinc-800 rounded-xl p-4 text-center">
                      <p className="text-green-500 text-2xl font-bold">
                        {recentNumbers.filter(n => n === 0 || n === -1).length}
                      </p>
                      <p className="text-zinc-500 text-sm">Green</p>
                    </div>
                    <div className="bg-zinc-800 rounded-xl p-4 text-center">
                      <p className="text-fuchsia-500 text-2xl font-bold">
                        {(() => {
                          const nonZero = recentNumbers.filter(n => n !== 0 && n !== -1)
                          if (nonZero.length === 0) return 0
                          return Math.round((nonZero.filter(n => n % 2 === 0).length / nonZero.length) * 100)
                        })()}%
                      </p>
                      <p className="text-zinc-500 text-sm">Even</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Gambler's Fallacy Warning */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                <p className="text-yellow-500 text-sm">
                  <strong>Remember:</strong> Each spin is independent. Past results don&apos;t affect future outcomes. Hot/cold numbers are for entertainment only—they don&apos;t predict the next spin.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-400 mb-4">Get the full roulette cheatsheet and more in Mikki&apos;s free community</p>
          <a
            href="https://t.me/mikkimase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-6 py-3 rounded-full transition"
          >
            Join Free Community
          </a>
        </div>
      </section>
    </div>
  )
}
