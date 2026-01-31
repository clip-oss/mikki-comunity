'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <Image
                src="https://www.mikki-mase.com/images/mikki-main-1.webp"
                alt="Mikki Mase"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-2xl"
            >
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                Real Name
              </p>
              <p className="text-white font-bold text-lg">Michael Meiterman</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-fuchsia-500 font-semibold uppercase tracking-wider text-sm mb-4">
              The Origin
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              From Rock Bottom
              <br />
              To The Top
            </h2>

            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                Juvenile detention in New Jersey. Federal prison in his
                twenties. When Michael Meiterman got out, he had nothing but
                time spent studying mathematics, probability theory, and game
                mechanics.
              </p>
              <p>
                He didn&apos;t just play baccarat. He{' '}
                <span className="text-white font-semibold">dissected</span> it.
                He developed a systematic approach so effective that casinos
                reviewed thousands of hours of footage looking for cheating.
              </p>
              <p>
                They found nothing illegal.{' '}
                <span className="text-fuchsia-400 font-semibold">
                  So they banned him instead.
                </span>
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-fuchsia-500">
              <p className="text-xl text-white italic">
                &quot;I don&apos;t gamble. I execute a system.&quot;
              </p>
              <cite className="text-zinc-500 text-sm mt-2 block">
                — Mikki Mase
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
