'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "I've been playing professional poker for 15 years. When Mikki walked into the Venetian that night and won $10M, I watched every hand. No tricks, no cheating—just the most disciplined pattern-reading I've ever seen.",
    name: 'Jake Ormand',
    title: 'Professional Poker Player',
  },
  {
    quote:
      "Most advantage players hide. Mikki's the first one I've met who doesn't care if the casinos know his face. That's either crazy or the ultimate flex—probably both.",
    name: 'Casino Industry Source',
    title: 'Former Pit Boss, Las Vegas',
  },
  {
    quote:
      "When someone gets banned from 150 casinos, they're either cheating or winning too much. Mikki proved it was the latter. They couldn't find anything illegal.",
    name: 'Gaming Law Expert',
    title: 'Nevada Gaming Consultant',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">
            What They Say
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Industry Insiders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
            >
              <div className="text-4xl text-fuchsia-500 mb-4">&quot;</div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-zinc-500 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
