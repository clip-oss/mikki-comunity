'use client';

import { motion } from 'framer-motion';

const benefits = [
  { number: '01', title: 'Free Guides', description: 'Strategy breakdowns' },
  { number: '02', title: 'Cheatsheets', description: 'Pattern recognition' },
  { number: '03', title: 'Direct Access', description: 'Behind the scenes' },
];

export default function CTA() {
  return (
    <section
      id="community"
      className="py-24 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            147 people joined this week
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">
            Free Access
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Join The Community
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto"
        >
          No courses. No upsells. Free strategies, cheatsheets, and real-time
          updates from Mikki himself.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4"
            >
              <p className="text-fuchsia-500 font-bold text-lg">
                {benefit.number}
              </p>
              <p className="text-white font-semibold">{benefit.title}</p>
              <p className="text-zinc-500 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="https://t.me/+9R9kDE-c2UVhMTc0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold px-10 py-5 rounded-full text-xl transition transform hover:scale-105 shadow-lg shadow-fuchsia-500/25"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
          </svg>
          Join Free Telegram
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-zinc-600 text-sm mt-6"
        >
          7,403+ members already inside • 100% free
        </motion.p>
      </div>
    </section>
  );
}
