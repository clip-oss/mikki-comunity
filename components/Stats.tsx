'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '$32M+', label: 'Total Winnings', color: 'text-fuchsia-500' },
  { value: '150+', label: 'Casino Bans', color: 'text-red-500' },
  { value: '$10M+', label: 'Verified Win', color: 'text-green-500' },
  { value: '7,403', label: 'Community Size', color: 'text-white' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p
                className={`text-5xl md:text-6xl font-black ${stat.color} mb-2`}
              >
                {stat.value}
              </p>
              <p className="text-zinc-500 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
