'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import JoinButton from './JoinButton';

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/story', label: 'Story', icon: '📖' },
    { href: '/wins', label: 'Wins', icon: '💰' },
    { href: '/the-system', label: 'The System', icon: '🎯' },
    { href: '/tools', label: 'Tools', icon: '🔧' },
    { href: '/timeline', label: 'Timeline', icon: '📅' },
    { href: '/faq', label: 'FAQ', icon: '❓' },
    { href: '/community', label: 'Community', icon: '👥' },
  ];

  return (
    <>
      {/* Main Navbar - positioned below the floating banner */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-9 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight z-10">
            <span className="text-white">MIKKI</span>
            <span className="text-fuchsia-500">MASE</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/story"
              className="text-zinc-400 hover:text-white text-sm transition"
            >
              Story
            </Link>
            <Link
              href="/wins"
              className="text-zinc-400 hover:text-white text-sm transition"
            >
              Wins
            </Link>
            <Link
              href="/the-system"
              className="text-zinc-400 hover:text-white text-sm transition"
            >
              System
            </Link>
            <Link
              href="/tools"
              className="text-zinc-400 hover:text-white text-sm transition"
            >
              Tools
            </Link>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className="text-zinc-400 hover:text-white text-sm transition flex items-center gap-1"
              >
                More
                <svg
                  className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl"
                  >
                    <Link
                      href="/timeline"
                      className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                    >
                      Timeline
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/community"
                      className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                    >
                      Community
                    </Link>
                    <Link
                      href="/#proof"
                      className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                    >
                      Proof
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side - CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* CTA - Hidden on smallest screens */}
            <JoinButton className="hidden sm:block bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition">
              Join Free
            </JoinButton>

            {/* Mobile Menu Button - ALWAYS visible on mobile with background */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen(true);
              }}
              className="lg:hidden relative z-[60] flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Very high z-index */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[200] lg:hidden">
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-zinc-900 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                <span className="text-white font-bold text-lg">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      pathname === link.href
                        ? 'bg-fuchsia-500/20 text-fuchsia-400'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}

                {/* Divider */}
                <div className="my-4 border-t border-zinc-800" />

                {/* Proof Link */}
                <Link
                  href="/#proof"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl transition"
                >
                  <span className="text-xl">✓</span>
                  <span className="font-medium">Proof</span>
                </Link>
              </div>

              {/* CTA Button */}
              <div className="p-4 border-t border-zinc-800">
                <JoinButton className="flex items-center justify-center gap-2 w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-4 py-4 rounded-xl transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Join Free Community
                </JoinButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
