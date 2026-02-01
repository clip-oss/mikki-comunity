'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const TELEGRAM_LINK = 'https://t.me/+9R9kDE-c2UVhMTc0'

  const handleClose = useCallback(() => {
    if (!isLoading) {
      setName('')
      setEmail('')
      setError('')
      setSuccess(false)
      onClose()
    }
  }, [isLoading, onClose])

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          source: 'telegram_join'
        })
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSuccess(true)

      setTimeout(() => {
        window.open(TELEGRAM_LINK, '_blank')
        handleClose()
      }, 1500)

    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* Close Button - Outside modal for visibility */}
          <button
            onClick={handleClose}
            disabled={isLoading}
            className="absolute top-4 right-4 z-[10000] p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition disabled:opacity-50"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="relative w-full max-w-md bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-6 text-center relative">
              <div className="text-5xl mb-3">🎰</div>
              <h2 className="text-2xl font-black text-white">Join 7,400+ Members</h2>
              <p className="text-white/80 text-sm mt-1">Free strategies & cheatsheets</p>

              {/* Inner Close Button */}
              <button
                onClick={handleClose}
                disabled={isLoading}
                className="absolute top-3 right-3 p-2 bg-black/30 hover:bg-black/50 text-white rounded-lg transition disabled:opacity-50"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">You&apos;re In!</h3>
                  <p className="text-zinc-400">Opening Telegram...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">First Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-fuchsia-500 outline-none transition"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:border-fuchsia-500 outline-none transition"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded-lg"
                    >
                      {error}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 disabled:bg-fuchsia-500/50 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Free Community
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-zinc-500 text-xs text-center">
                    🔒 No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="bg-zinc-950 px-6 py-4 flex items-center justify-center gap-8 border-t border-zinc-800">
              <div className="text-center">
                <p className="text-white font-bold">7,403</p>
                <p className="text-zinc-500 text-xs">Members</p>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="text-center">
                <p className="text-green-500 font-bold">100%</p>
                <p className="text-zinc-500 text-xs">Free</p>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div className="text-center">
                <p className="text-white font-bold">$0</p>
                <p className="text-zinc-500 text-xs">Upsells</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
