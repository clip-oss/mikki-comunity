'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

// Basic Strategy Chart Data
// H = Hit, S = Stand, D = Double (hit if can't), Ds = Double (stand if can't), P = Split
type ActionKey = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'A';
type ActionValue = 'H' | 'S' | 'D' | 'Ds' | 'P';

const basicStrategy: {
  hard: Record<number, Record<ActionKey, ActionValue>>;
  soft: Record<number, Record<ActionKey, ActionValue>>;
  pairs: Record<string, Record<ActionKey, ActionValue>>;
} = {
  hard: {
    8:  { 2:'H', 3:'H', 4:'H', 5:'H', 6:'H', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    9:  { 2:'H', 3:'D', 4:'D', 5:'D', 6:'D', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    10: { 2:'D', 3:'D', 4:'D', 5:'D', 6:'D', 7:'D', 8:'D', 9:'D', 10:'H', 'A':'H' },
    11: { 2:'D', 3:'D', 4:'D', 5:'D', 6:'D', 7:'D', 8:'D', 9:'D', 10:'D', 'A':'D' },
    12: { 2:'H', 3:'H', 4:'S', 5:'S', 6:'S', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    13: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    14: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    15: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    16: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    17: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
    18: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
    19: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
    20: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
    21: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
  },
  soft: {
    13: { 2:'H', 3:'H', 4:'H', 5:'D', 6:'D', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    14: { 2:'H', 3:'H', 4:'H', 5:'D', 6:'D', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    15: { 2:'H', 3:'H', 4:'D', 5:'D', 6:'D', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    16: { 2:'H', 3:'H', 4:'D', 5:'D', 6:'D', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    17: { 2:'H', 3:'D', 4:'D', 5:'D', 6:'D', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    18: { 2:'Ds', 3:'Ds', 4:'Ds', 5:'Ds', 6:'Ds', 7:'S', 8:'S', 9:'H', 10:'H', 'A':'H' },
    19: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'Ds', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
    20: { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
  },
  pairs: {
    'A,A': { 2:'P', 3:'P', 4:'P', 5:'P', 6:'P', 7:'P', 8:'P', 9:'P', 10:'P', 'A':'P' },
    '10,10': { 2:'S', 3:'S', 4:'S', 5:'S', 6:'S', 7:'S', 8:'S', 9:'S', 10:'S', 'A':'S' },
    '9,9': { 2:'P', 3:'P', 4:'P', 5:'P', 6:'P', 7:'S', 8:'P', 9:'P', 10:'S', 'A':'S' },
    '8,8': { 2:'P', 3:'P', 4:'P', 5:'P', 6:'P', 7:'P', 8:'P', 9:'P', 10:'P', 'A':'P' },
    '7,7': { 2:'P', 3:'P', 4:'P', 5:'P', 6:'P', 7:'P', 8:'H', 9:'H', 10:'H', 'A':'H' },
    '6,6': { 2:'P', 3:'P', 4:'P', 5:'P', 6:'P', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    '5,5': { 2:'D', 3:'D', 4:'D', 5:'D', 6:'D', 7:'D', 8:'D', 9:'D', 10:'H', 'A':'H' },
    '4,4': { 2:'H', 3:'H', 4:'H', 5:'P', 6:'P', 7:'H', 8:'H', 9:'H', 10:'H', 'A':'H' },
    '3,3': { 2:'P', 3:'P', 4:'P', 5:'P', 6:'P', 7:'P', 8:'H', 9:'H', 10:'H', 'A':'H' },
    '2,2': { 2:'P', 3:'P', 4:'P', 5:'P', 6:'P', 7:'P', 8:'H', 9:'H', 10:'H', 'A':'H' },
  }
};

const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const dealerCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];

export default function BlackjackCalculator() {
  const [playerCard1, setPlayerCard1] = useState<string>('');
  const [playerCard2, setPlayerCard2] = useState<string>('');
  const [dealerCard, setDealerCard] = useState<string>('');
  const [result, setResult] = useState<{ action: string; explanation: string } | null>(null);

  const getCardValue = (card: string): number => {
    if (['J', 'Q', 'K'].includes(card)) return 10;
    if (card === 'A') return 11;
    return parseInt(card);
  };

  const calculate = () => {
    if (!playerCard1 || !playerCard2 || !dealerCard) {
      setResult({ action: 'ERROR', explanation: 'Please select all cards' });
      return;
    }

    const val1 = getCardValue(playerCard1);
    const val2 = getCardValue(playerCard2);
    const dealerVal: ActionKey = dealerCard === 'A' ? 'A' : ((['J', 'Q', 'K'].includes(dealerCard)) ? 10 : parseInt(dealerCard)) as ActionKey;

    let action: ActionValue | string = '';
    let explanation = '';

    // Normalize cards for comparison (J, Q, K = 10)
    const card1Normalized = ['J', 'Q', 'K'].includes(playerCard1) ? '10' : playerCard1;
    const card2Normalized = ['J', 'Q', 'K'].includes(playerCard2) ? '10' : playerCard2;

    // Check for pairs
    if (card1Normalized === card2Normalized) {
      const pairKey = `${card1Normalized},${card2Normalized}`;
      if (basicStrategy.pairs[pairKey]) {
        action = basicStrategy.pairs[pairKey][dealerVal];
        explanation = `With a pair of ${card1Normalized}s against dealer ${dealerCard}`;
      }
    }

    // Check for soft hand (has Ace counted as 11)
    if (!action && (playerCard1 === 'A' || playerCard2 === 'A')) {
      const otherCard = playerCard1 === 'A' ? val2 : val1;
      const softTotal = 11 + (otherCard === 11 ? 1 : otherCard);

      if (softTotal <= 20 && basicStrategy.soft[softTotal]) {
        action = basicStrategy.soft[softTotal][dealerVal];
        explanation = `Soft ${softTotal} (Ace + ${otherCard === 11 ? 'A' : otherCard}) against dealer ${dealerCard}`;
      }
    }

    // Hard total
    if (!action) {
      let total = val1 + val2;
      // Adjust for Aces if bust
      if (total > 21 && (playerCard1 === 'A' || playerCard2 === 'A')) {
        total -= 10;
      }

      if (total >= 8 && total <= 21 && basicStrategy.hard[total]) {
        action = basicStrategy.hard[total][dealerVal];
        explanation = `Hard ${total} against dealer ${dealerCard}`;
      } else if (total < 8) {
        action = 'H';
        explanation = `Hard ${total} - always hit on low totals`;
      } else {
        action = 'BUST';
        explanation = `Total ${total} - you've busted!`;
      }
    }

    // Translate action codes
    const actionMap: Record<string, string> = {
      'H': 'HIT',
      'S': 'STAND',
      'D': 'DOUBLE DOWN (or Hit)',
      'Ds': 'DOUBLE DOWN (or Stand)',
      'P': 'SPLIT',
      'BUST': 'BUST'
    };

    setResult({
      action: actionMap[action] || action,
      explanation
    });
  };

  const getActionColor = (action: string) => {
    if (action.includes('HIT')) return 'text-yellow-500';
    if (action.includes('STAND')) return 'text-green-500';
    if (action.includes('DOUBLE')) return 'text-fuchsia-500';
    if (action.includes('SPLIT')) return 'text-blue-500';
    return 'text-red-500';
  };

  const reset = () => {
    setPlayerCard1('');
    setPlayerCard2('');
    setDealerCard('');
    setResult(null);
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
            <span className="text-white">Blackjack Calculator</span>
          </div>

          <h1 className="text-4xl font-black text-white mb-4">
            Blackjack Strategy Calculator
          </h1>
          <p className="text-zinc-400">
            Get the mathematically optimal play for any blackjack hand. Based on basic strategy charts used by professional players.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">

            {/* Your Cards */}
            <div className="mb-8">
              <h3 className="text-white font-bold mb-4">Your Cards</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-zinc-500 text-sm mb-2 block">First Card</label>
                  <div className="grid grid-cols-7 gap-2">
                    {cardValues.map(card => (
                      <button
                        key={`p1-${card}`}
                        onClick={() => setPlayerCard1(card)}
                        className={`p-2 md:p-3 rounded-lg font-bold text-sm md:text-lg transition ${
                          playerCard1 === card
                            ? 'bg-fuchsia-500 text-white'
                            : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                        }`}
                      >
                        {card}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-zinc-500 text-sm mb-2 block">Second Card</label>
                  <div className="grid grid-cols-7 gap-2">
                    {cardValues.map(card => (
                      <button
                        key={`p2-${card}`}
                        onClick={() => setPlayerCard2(card)}
                        className={`p-2 md:p-3 rounded-lg font-bold text-sm md:text-lg transition ${
                          playerCard2 === card
                            ? 'bg-fuchsia-500 text-white'
                            : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                        }`}
                      >
                        {card}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dealer Card */}
            <div className="mb-8">
              <h3 className="text-white font-bold mb-4">Dealer&apos;s Upcard</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {dealerCards.map(card => (
                  <button
                    key={`d-${card}`}
                    onClick={() => setDealerCard(card)}
                    className={`p-2 md:p-3 rounded-lg font-bold text-sm md:text-lg transition ${
                      dealerCard === card
                        ? 'bg-green-500 text-white'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    {card}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Cards Display */}
            {(playerCard1 || playerCard2 || dealerCard) && (
              <div className="mb-6 p-4 bg-zinc-800 rounded-xl flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 text-sm">Your hand:</span>
                  <span className="text-white font-bold">
                    {playerCard1 || '?'} + {playerCard2 || '?'}
                    {playerCard1 && playerCard2 && (
                      <span className="text-zinc-400 ml-2">
                        (= {getCardValue(playerCard1) + getCardValue(playerCard2) > 21 && (playerCard1 === 'A' || playerCard2 === 'A')
                          ? getCardValue(playerCard1) + getCardValue(playerCard2) - 10
                          : getCardValue(playerCard1) + getCardValue(playerCard2)})
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 text-sm">Dealer shows:</span>
                  <span className="text-white font-bold">{dealerCard || '?'}</span>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={calculate}
                className="flex-1 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-4 rounded-xl text-lg transition"
              >
                Get Optimal Play
              </button>
              <button
                onClick={reset}
                className="px-6 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl transition"
              >
                Reset
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-8 p-6 bg-zinc-800 rounded-xl text-center">
                <p className="text-zinc-400 text-sm mb-2">{result.explanation}</p>
                <p className={`text-4xl font-black ${getActionColor(result.action)}`}>
                  {result.action}
                </p>
              </div>
            )}

          </div>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-yellow-500 font-bold">HIT</p>
              <p className="text-zinc-500 text-sm">Take another card</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-green-500 font-bold">STAND</p>
              <p className="text-zinc-500 text-sm">Keep your hand</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-fuchsia-500 font-bold">DOUBLE</p>
              <p className="text-zinc-500 text-sm">Double bet, one card</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
              <p className="text-blue-500 font-bold">SPLIT</p>
              <p className="text-zinc-500 text-sm">Split into two hands</p>
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">About Basic Strategy</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Basic strategy is the mathematically optimal way to play every blackjack hand. It reduces the house edge to approximately 0.5%—the lowest of any casino game.
            </p>
            <p className="text-zinc-500 text-sm">
              This calculator uses standard multi-deck basic strategy. Variations may apply for single/double deck games or specific house rules (dealer hits soft 17, surrender allowed, etc.).
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
