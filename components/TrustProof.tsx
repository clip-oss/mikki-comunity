'use client';

import { motion } from 'framer-motion';

const proofItems = [
  {
    icon: '✓',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-500',
    title: 'Verified $10M Win',
    description:
      'The Venetian, documented with witness testimony from Jake Ormand',
  },
  {
    icon: '📉',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-500',
    title: 'Shows Losses Too',
    description:
      'Unlike fakes, Mikki documents his losses publicly including $1.5M at Wynn',
  },
  {
    icon: '🆓',
    iconBg: 'bg-fuchsia-500/10',
    iconColor: 'text-fuchsia-500',
    title: 'Free Community',
    description:
      'No $997 courses. Free Telegram. Real strategies and cheatsheets.',
  },
  {
    icon: '🚫',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    title: '150+ Casino Bans',
    description:
      "You don't get banned for losing. The bans prove it works.",
  },
];

export default function TrustProof() {
  return (
    <section id="proof" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">
            Why People Trust
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Mikki Mase
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-fuchsia-500/50 transition"
            >
              <div
                className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center ${item.iconColor} text-2xl mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
