'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ===========================================
// EXACT STRATEGY FROM MIKKI MASE'S CHEATSHEET
// ===========================================

// Legend:
// H = Hit
// S = Stand
// D/H = Double if allowed, otherwise Hit
// D/S = Double if allowed, otherwise Stand
// P = Split
// P/H = Split if Double after Split allowed, otherwise Hit
// R/H = Surrender if allowed, otherwise Hit

const HARD_STRATEGY: Record<number, Record<string, string>> = {
  8:  { '2':'H', '3':'H', '4':'H', '5':'H', '6':'H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  9:  { '2':'H', '3':'D/H', '4':'D/H', '5':'D/H', '6':'D/H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  10: { '2':'D/H', '3':'D/H', '4':'D/H', '5':'D/H', '6':'D/H', '7':'D/H', '8':'D/H', '9':'D/H', '10':'H', 'A':'H' },
  11: { '2':'D/H', '3':'D/H', '4':'D/H', '5':'D/H', '6':'D/H', '7':'D/H', '8':'D/H', '9':'D/H', '10':'D/H', 'A':'D/H' },
  12: { '2':'H', '3':'H', '4':'S', '5':'S', '6':'S', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  13: { '2':'S', '3':'S', '4':'S', '5':'S', '6':'S', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  14: { '2':'S', '3':'S', '4':'S', '5':'S', '6':'S', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  15: { '2':'S', '3':'S', '4':'S', '5':'S', '6':'S', '7':'H', '8':'H', '9':'H', '10':'R/H', 'A':'H' },
  16: { '2':'S', '3':'S', '4':'S', '5':'S', '6':'S', '7':'H', '8':'H', '9':'R/H', '10':'R/H', 'A':'R/H' },
  17: { '2':'S', '3':'S', '4':'S', '5':'S', '6':'S', '7':'S', '8':'S', '9':'S', '10':'S', 'A':'S' },
}

const SOFT_STRATEGY: Record<string, Record<string, string>> = {
  'A,2': { '2':'H', '3':'H', '4':'H', '5':'D/H', '6':'D/H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  'A,3': { '2':'H', '3':'H', '4':'H', '5':'D/H', '6':'D/H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  'A,4': { '2':'H', '3':'H', '4':'D/H', '5':'D/H', '6':'D/H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  'A,5': { '2':'H', '3':'H', '4':'D/H', '5':'D/H', '6':'D/H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  'A,6': { '2':'H', '3':'D/H', '4':'D/H', '5':'D/H', '6':'D/H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  'A,7': { '2':'S', '3':'D/S', '4':'D/S', '5':'D/S', '6':'D/S', '7':'S', '8':'S', '9':'H', '10':'H', 'A':'H' },
  'A,8': { '2':'S', '3':'S', '4':'S', '5':'S', '6':'S', '7':'S', '8':'S', '9':'S', '10':'S', 'A':'S' },
}

const PAIR_STRATEGY: Record<string, Record<string, string>> = {
  '2,2': { '2':'P/H', '3':'P/H', '4':'P', '5':'P', '6':'P', '7':'P', '8':'H', '9':'H', '10':'H', 'A':'H' },
  '3,3': { '2':'P/H', '3':'P/H', '4':'P', '5':'P', '6':'P', '7':'P', '8':'H', '9':'H', '10':'H', 'A':'H' },
  '4,4': { '2':'H', '3':'H', '4':'H', '5':'P/H', '6':'P/H', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  '5,5': { '2':'D/H', '3':'D/H', '4':'D/H', '5':'D/H', '6':'D/H', '7':'D/H', '8':'D/H', '9':'D/H', '10':'H', 'A':'H' },
  '6,6': { '2':'P/H', '3':'P', '4':'P', '5':'P', '6':'P', '7':'H', '8':'H', '9':'H', '10':'H', 'A':'H' },
  '7,7': { '2':'P', '3':'P', '4':'P', '5':'P', '6':'P', '7':'P', '8':'H', '9':'H', '10':'H', 'A':'H' },
  '8,8': { '2':'P', '3':'P', '4':'P', '5':'P', '6':'P', '7':'P', '8':'P', '9':'P', '10':'P', 'A':'P' },
  '9,9': { '2':'P', '3':'P', '4':'P', '5':'P', '6':'P', '7':'S', '8':'P', '9':'P', '10':'S', 'A':'S' },
  '10,10': { '2':'S', '3':'S', '4':'S', '5':'S', '6':'S', '7':'S', '8':'S', '9':'S', '10':'S', 'A':'S' },
  'A,A': { '2':'P', '3':'P', '4':'P', '5':'P', '6':'P', '7':'P', '8':'P', '9':'P', '10':'P', 'A':'P' },
}

// Win probability estimates based on dealer upcard and player total
const WIN_PROBABILITIES: Record<string, Record<number, number>> = {
  '2': { 17: 0.64, 18: 0.71, 19: 0.78, 20: 0.85, 21: 0.92 },
  '3': { 17: 0.63, 18: 0.70, 19: 0.77, 20: 0.84, 21: 0.91 },
  '4': { 17: 0.62, 18: 0.69, 19: 0.76, 20: 0.83, 21: 0.90 },
  '5': { 17: 0.61, 18: 0.68, 19: 0.75, 20: 0.82, 21: 0.89 },
  '6': { 17: 0.60, 18: 0.67, 19: 0.74, 20: 0.81, 21: 0.88 },
  '7': { 17: 0.41, 18: 0.65, 19: 0.73, 20: 0.80, 21: 0.87 },
  '8': { 17: 0.38, 18: 0.51, 19: 0.70, 20: 0.79, 21: 0.86 },
  '9': { 17: 0.35, 18: 0.48, 19: 0.60, 20: 0.77, 21: 0.85 },
  '10': { 17: 0.33, 18: 0.45, 19: 0.56, 20: 0.67, 21: 0.83 },
  'A': { 17: 0.31, 18: 0.42, 19: 0.53, 20: 0.64, 21: 0.80 },
}

// Dealer bust probabilities by upcard
const DEALER_BUST_PROB: Record<string, number> = {
  '2': 0.3536, '3': 0.3746, '4': 0.4028, '5': 0.4193, '6': 0.4209,
  '7': 0.2599, '8': 0.2386, '9': 0.2291, '10': 0.2143, 'A': 0.1165
}

interface Card {
  value: string
  display: string
}

const CARDS: Card[] = [
  { value: '2', display: '2' },
  { value: '3', display: '3' },
  { value: '4', display: '4' },
  { value: '5', display: '5' },
  { value: '6', display: '6' },
  { value: '7', display: '7' },
  { value: '8', display: '8' },
  { value: '9', display: '9' },
  { value: '10', display: '10' },
  { value: '10', display: 'J' },
  { value: '10', display: 'Q' },
  { value: '10', display: 'K' },
  { value: 'A', display: 'A' },
]

export default function BlackjackCalculator() {
  // Game state
  const [playerCards, setPlayerCards] = useState<string[]>([])
  const [dealerCard, setDealerCard] = useState<string>('')
  const [gamePhase, setGamePhase] = useState<'initial' | 'playing' | 'result'>('initial')
  const [recommendation, setRecommendation] = useState<{
    action: string
    explanation: string
    winProbability: number
    dealerBustProb: number
    handType: string
  } | null>(null)
  const [handHistory, setHandHistory] = useState<string[]>([])

  // Settings
  const [canDouble, setCanDouble] = useState(true)
  const [canSurrender, setCanSurrender] = useState(true)
  const [canDoubleAfterSplit, setCanDoubleAfterSplit] = useState(true)

  const getCardValue = (card: string): number => {
    if (card === 'A') return 11
    if (['10', 'J', 'Q', 'K'].includes(card)) return 10
    return parseInt(card)
  }

  const calculateHandValue = (cards: string[]): { total: number, isSoft: boolean } => {
    let total = 0
    let aces = 0

    for (const card of cards) {
      if (card === 'A') {
        aces++
        total += 11
      } else {
        total += getCardValue(card)
      }
    }

    // Adjust aces if needed
    while (total > 21 && aces > 0) {
      total -= 10
      aces--
    }

    return { total, isSoft: aces > 0 && total <= 21 }
  }

  const normalizeCard = (card: string): string => {
    if (['J', 'Q', 'K'].includes(card)) return '10'
    return card
  }

  const getRecommendation = () => {
    if (playerCards.length < 2 || !dealerCard) return

    const dealerNorm = normalizeCard(dealerCard)
    const { total, isSoft } = calculateHandValue(playerCards)

    let action = ''
    let handType = ''

    // Check for blackjack
    if (playerCards.length === 2 && total === 21) {
      setRecommendation({
        action: 'BLACKJACK!',
        explanation: 'You have 21! Collect your winnings.',
        winProbability: 100,
        dealerBustProb: DEALER_BUST_PROB[dealerNorm] * 100,
        handType: 'Blackjack'
      })
      setGamePhase('result')
      return
    }

    // Check for bust
    if (total > 21) {
      setRecommendation({
        action: 'BUST',
        explanation: `Your hand totals ${total}. You lose.`,
        winProbability: 0,
        dealerBustProb: 0,
        handType: 'Bust'
      })
      setGamePhase('result')
      return
    }

    // Check for pairs (only on first 2 cards)
    if (playerCards.length === 2) {
      const card1 = normalizeCard(playerCards[0])
      const card2 = normalizeCard(playerCards[1])

      if (card1 === card2) {
        const pairKey = card1 === 'A' ? 'A,A' : `${card1},${card1}`
        if (PAIR_STRATEGY[pairKey]) {
          action = PAIR_STRATEGY[pairKey][dealerNorm]
          handType = `Pair of ${card1}s`
        }
      }
    }

    // Check for soft hands
    if (!action && isSoft && playerCards.length >= 2) {
      const nonAceValue = total - 11
      const softKey = `A,${nonAceValue}`
      if (SOFT_STRATEGY[softKey]) {
        action = SOFT_STRATEGY[softKey][dealerNorm]
        handType = `Soft ${total}`
      }
    }

    // Hard total
    if (!action) {
      if (total >= 17) {
        action = HARD_STRATEGY[17][dealerNorm]
      } else if (total <= 8) {
        action = 'H'
      } else if (HARD_STRATEGY[total]) {
        action = HARD_STRATEGY[total][dealerNorm]
      }
      handType = `Hard ${total}`
    }

    // Process action based on table rules
    let finalAction = action
    let actionExplanation = ''

    switch (action) {
      case 'H':
        finalAction = 'HIT'
        actionExplanation = 'Take another card'
        break
      case 'S':
        finalAction = 'STAND'
        actionExplanation = 'Keep your current hand'
        break
      case 'D/H':
        if (canDouble && playerCards.length === 2) {
          finalAction = 'DOUBLE DOWN'
          actionExplanation = 'Double your bet and take exactly one more card'
        } else {
          finalAction = 'HIT'
          actionExplanation = 'Double not available, so hit instead'
        }
        break
      case 'D/S':
        if (canDouble && playerCards.length === 2) {
          finalAction = 'DOUBLE DOWN'
          actionExplanation = 'Double your bet and take exactly one more card'
        } else {
          finalAction = 'STAND'
          actionExplanation = 'Double not available, so stand instead'
        }
        break
      case 'P':
        finalAction = 'SPLIT'
        actionExplanation = 'Split into two hands'
        break
      case 'P/H':
        if (canDoubleAfterSplit) {
          finalAction = 'SPLIT'
          actionExplanation = 'Split your pair'
        } else {
          finalAction = 'HIT'
          actionExplanation = 'DAS not allowed, so hit instead'
        }
        break
      case 'R/H':
        if (canSurrender && playerCards.length === 2) {
          finalAction = 'SURRENDER'
          actionExplanation = 'Give up half your bet'
        } else {
          finalAction = 'HIT'
          actionExplanation = 'Surrender not available, so hit instead'
        }
        break
    }

    // Calculate win probability
    let winProb = 0
    if (total >= 17 && total <= 21) {
      winProb = (WIN_PROBABILITIES[dealerNorm]?.[total] || 0.5) * 100
    } else if (total < 17) {
      // Estimate based on potential to improve
      winProb = 30 + (total - 8) * 3
    }

    setRecommendation({
      action: finalAction,
      explanation: `${handType} vs Dealer ${dealerCard}: ${actionExplanation}`,
      winProbability: Math.round(winProb),
      dealerBustProb: Math.round(DEALER_BUST_PROB[dealerNorm] * 100),
      handType
    })

    setHandHistory(prev => [...prev, `${handType} vs ${dealerCard} → ${finalAction}`])
    setGamePhase('playing')
  }

  const addCard = (card: string) => {
    if (gamePhase === 'initial') {
      if (playerCards.length < 2) {
        setPlayerCards([...playerCards, card])
      }
    } else if (gamePhase === 'playing' && recommendation?.action === 'HIT') {
      setPlayerCards([...playerCards, card])
    }
  }

  const selectDealerCard = (card: string) => {
    setDealerCard(card)
  }

  const resetGame = () => {
    setPlayerCards([])
    setDealerCard('')
    setGamePhase('initial')
    setRecommendation(null)
    setHandHistory([])
  }

  // Auto-calculate when we have enough cards
  useEffect(() => {
    if (playerCards.length >= 2 && dealerCard && gamePhase === 'initial') {
      getRecommendation()
    }
  }, [playerCards, dealerCard])

  // Recalculate after adding a card during play
  useEffect(() => {
    if (gamePhase === 'playing' && playerCards.length > 2) {
      getRecommendation()
    }
  }, [playerCards.length])

  const getActionColor = (action: string) => {
    if (action.includes('HIT')) return 'bg-yellow-500'
    if (action.includes('STAND')) return 'bg-green-500'
    if (action.includes('DOUBLE')) return 'bg-fuchsia-500'
    if (action.includes('SPLIT')) return 'bg-blue-500'
    if (action.includes('SURRENDER')) return 'bg-orange-500'
    if (action.includes('BLACKJACK')) return 'bg-green-500'
    if (action.includes('BUST')) return 'bg-red-500'
    return 'bg-zinc-500'
  }

  const { total: currentTotal, isSoft: isCurrentSoft } = calculateHandValue(playerCards)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="py-12 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <span>/</span>
            <span className="text-white">Blackjack Calculator</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🃏</span>
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">Blackjack Strategy Calculator</h1>
              <p className="text-zinc-400">Exact strategy from Mikki Mase&apos;s Cheatsheet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Settings */}
      <section className="py-4 border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">
              <input
                type="checkbox"
                checked={canDouble}
                onChange={(e) => setCanDouble(e.target.checked)}
                className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-fuchsia-500 focus:ring-fuchsia-500"
              />
              Double Down Allowed
            </label>
            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">
              <input
                type="checkbox"
                checked={canSurrender}
                onChange={(e) => setCanSurrender(e.target.checked)}
                className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-fuchsia-500 focus:ring-fuchsia-500"
              />
              Surrender Allowed
            </label>
            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">
              <input
                type="checkbox"
                checked={canDoubleAfterSplit}
                onChange={(e) => setCanDoubleAfterSplit(e.target.checked)}
                className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-fuchsia-500 focus:ring-fuchsia-500"
              />
              Double After Split (DAS)
            </label>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Left: Card Selection */}
            <div className="lg:col-span-2 space-y-6">

              {/* Your Hand */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold">Your Hand</h3>
                  {playerCards.length > 0 && (
                    <div className="text-right">
                      <span className="text-2xl font-black text-white">
                        {isCurrentSoft && currentTotal <= 21 ? 'Soft ' : ''}{currentTotal}
                      </span>
                    </div>
                  )}
                </div>

                {/* Selected Cards Display */}
                <div className="flex gap-2 mb-4 min-h-[80px]">
                  {playerCards.length === 0 ? (
                    <div className="text-zinc-600 text-sm">Select your cards below</div>
                  ) : (
                    playerCards.map((card, i) => (
                      <div
                        key={i}
                        className="w-14 h-20 bg-white rounded-lg flex items-center justify-center text-2xl font-bold text-black shadow-lg"
                      >
                        {card}
                      </div>
                    ))
                  )}
                </div>

                {/* Card Selection Grid */}
                <div className="grid grid-cols-13 gap-1">
                  {CARDS.map((card, i) => (
                    <button
                      key={i}
                      onClick={() => addCard(card.display === 'J' || card.display === 'Q' || card.display === 'K' ? '10' : card.display)}
                      disabled={gamePhase === 'result' || (gamePhase === 'playing' && recommendation?.action !== 'HIT')}
                      className={`p-2 rounded-lg font-bold text-sm transition ${
                        gamePhase === 'result' || (gamePhase === 'playing' && recommendation?.action !== 'HIT')
                          ? 'bg-zinc-800/50 text-zinc-600 cursor-not-allowed'
                          : 'bg-zinc-800 text-white hover:bg-fuchsia-500 hover:scale-105'
                      }`}
                    >
                      {card.display}
                    </button>
                  ))}
                </div>

                {gamePhase === 'playing' && recommendation?.action === 'HIT' && (
                  <p className="text-yellow-500 text-sm mt-3 animate-pulse">
                    Select the card you drew
                  </p>
                )}
              </div>

              {/* Dealer's Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">Dealer&apos;s Upcard</h3>

                {/* Selected Dealer Card */}
                <div className="flex gap-2 mb-4 min-h-[80px]">
                  {!dealerCard ? (
                    <div className="text-zinc-600 text-sm">Select dealer&apos;s visible card</div>
                  ) : (
                    <>
                      <div className="w-14 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                        {dealerCard}
                      </div>
                      <div className="w-14 h-20 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-3xl">?</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Dealer Card Selection */}
                <div className="grid grid-cols-10 gap-1">
                  {['2','3','4','5','6','7','8','9','10','A'].map((card) => (
                    <button
                      key={card}
                      onClick={() => selectDealerCard(card)}
                      disabled={gamePhase !== 'initial'}
                      className={`p-2 rounded-lg font-bold text-sm transition ${
                        dealerCard === card
                          ? 'bg-red-500 text-white'
                          : gamePhase !== 'initial'
                          ? 'bg-zinc-800/50 text-zinc-600 cursor-not-allowed'
                          : 'bg-zinc-800 text-white hover:bg-red-500'
                      }`}
                    >
                      {card}
                    </button>
                  ))}
                </div>
              </div>

              {/* New Hand Button */}
              <button
                onClick={resetGame}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition"
              >
                New Hand
              </button>
            </div>

            {/* Right: Recommendation */}
            <div className="space-y-4">

              {/* Main Recommendation */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-zinc-400 text-sm mb-4">OPTIMAL PLAY</h3>

                {recommendation ? (
                  <div className="space-y-4">
                    <div className={`${getActionColor(recommendation.action)} rounded-xl p-4 text-center`}>
                      <p className="text-3xl font-black text-white">{recommendation.action}</p>
                    </div>

                    <p className="text-zinc-400 text-sm">{recommendation.explanation}</p>

                    {/* Probability Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-zinc-800 rounded-lg p-3 text-center">
                        <p className="text-xs text-zinc-500 mb-1">Win Probability</p>
                        <p className="text-xl font-bold text-green-500">{recommendation.winProbability}%</p>
                      </div>
                      <div className="bg-zinc-800 rounded-lg p-3 text-center">
                        <p className="text-xs text-zinc-500 mb-1">Dealer Bust</p>
                        <p className="text-xl font-bold text-yellow-500">{recommendation.dealerBustProb}%</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-zinc-500">Select your cards and dealer&apos;s upcard to get the optimal play</p>
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
                <h4 className="text-white font-bold text-sm mb-3">Legend</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-yellow-500"></div>
                    <span className="text-zinc-400">Hit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span className="text-zinc-400">Stand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-fuchsia-500"></div>
                    <span className="text-zinc-400">Double</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-blue-500"></div>
                    <span className="text-zinc-400">Split</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-orange-500"></div>
                    <span className="text-zinc-400">Surrender</span>
                  </div>
                </div>
              </div>

              {/* Hand History */}
              {handHistory.length > 0 && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
                  <h4 className="text-white font-bold text-sm mb-3">This Hand</h4>
                  <div className="space-y-1 text-xs text-zinc-400 max-h-32 overflow-y-auto">
                    {handHistory.map((h, i) => (
                      <div key={i}>{h}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Chart Reference */}
      <section className="py-8 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-white font-bold mb-4">Quick Reference Chart</h3>
          <p className="text-zinc-500 text-sm mb-4">Based on Mikki Mase&apos;s Blackjack Cheatsheet</p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Hard Totals</h4>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>8 or less: Always Hit</li>
                <li>9: Double vs 3-6, else Hit</li>
                <li>10: Double vs 2-9, Hit vs 10/A</li>
                <li>11: Double vs all</li>
                <li>12: Stand vs 4-6, else Hit</li>
                <li>13-16: Stand vs 2-6, Hit vs 7+</li>
                <li>17+: Always Stand</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Soft Totals</h4>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>A-2, A-3: Double vs 5-6, else Hit</li>
                <li>A-4, A-5: Double vs 4-6, else Hit</li>
                <li>A-6: Double vs 3-6, else Hit</li>
                <li>A-7: Stand/Double vs 2-6, Hit vs 9+</li>
                <li>A-8, A-9: Always Stand</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Pairs</h4>
              <ul className="text-xs text-zinc-400 space-y-1">
                <li>A-A, 8-8: Always Split</li>
                <li>10-10, 5-5: Never Split</li>
                <li>9-9: Split except vs 7, 10, A</li>
                <li>7-7: Split vs 2-7</li>
                <li>6-6: Split vs 2-6</li>
                <li>2-2, 3-3: Split vs 2-7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-zinc-400 mb-4">Get the full strategy cheatsheet and more in Mikki&apos;s free community</p>
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
