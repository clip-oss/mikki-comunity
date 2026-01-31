'use client';

import { motion } from 'framer-motion';

const brands = [
  'NELK Boys',
  'Soft White Underbelly',
  'VladTV',
  'Inked Magazine',
  'Bert Kreischer',
  'Hustler Casino Live',
];

export default function FeaturedIn() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-950 border-y border-zinc-800 py-4 overflow-hidden"
    >
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
        {brands.map((brand, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-zinc-500 font-medium text-sm uppercase tracking-wider">
              {brand}
            </span>
            <span className="text-fuchsia-500">✦</span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {brands.map((brand, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-12">
            <span className="text-zinc-500 font-medium text-sm uppercase tracking-wider">
              {brand}
            </span>
            <span className="text-fuchsia-500">✦</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
