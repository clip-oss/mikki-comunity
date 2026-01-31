'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const wins = [
  {
    amount: '$10M+',
    amountColor: 'text-green-500',
    title: 'The Venetian',
    location: 'Las Vegas, NV • 2021-2022',
    description:
      'Documented with witness verification from professional poker player Jake Ormand.',
    image: 'https://www.mikki-mase.com/images/mikki-main-1.webp',
    badge: 'VERIFIED',
    badgeColor: 'bg-green-500',
    hoverBorder: 'hover:border-green-500/50',
  },
  {
    amount: '$3M',
    amountColor: 'text-green-500',
    title: 'High Stakes Tables',
    location: 'Las Vegas, NV • 2020-2023',
    description:
      'Combined verified winnings across multiple casino properties.',
    image: 'https://www.mikki-mase.com/images/mikki-main-2.webp',
    badge: 'VERIFIED',
    badgeColor: 'bg-green-500',
    hoverBorder: 'hover:border-green-500/50',
  },
  {
    amount: '-$1.5M',
    amountColor: 'text-red-500',
    title: 'Wynn Las Vegas',
    location: 'Las Vegas, NV • 2022',
    description:
      'Documented loss. Mikki shares both wins AND losses publicly.',
    image: null,
    badge: 'LOSS',
    badgeColor: 'bg-red-500',
    hoverBorder: 'hover:border-red-500/50',
  },
];

export default function Wins() {
  return (
    <section id="wins" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">
            Documented Results
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Wins & Losses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {wins.map((win, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden ${win.hoverBorder} transition`}
            >
              <div className="aspect-video relative overflow-hidden bg-zinc-800">
                {win.image ? (
                  <Image
                    src={win.image}
                    alt={win.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">📉</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`${win.badgeColor} text-white text-xs font-bold px-2 py-1 rounded`}
                  >
                    {win.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className={`text-4xl font-black ${win.amountColor} mb-1`}>
                  {win.amount}
                </p>
                <h3 className="text-white font-bold text-xl mb-1">
                  {win.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-3">{win.location}</p>
                <p className="text-zinc-400 text-sm">{win.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
