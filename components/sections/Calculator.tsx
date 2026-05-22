"use client";

import { motion } from "framer-motion";
import { FitnessCalculator } from "@/components/sections/FitnessCalculator";

export function Calculator() {
  return (
    <section id="kalkulacka" className="py-20 sm:py-28 bg-ink">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-semibold text-display-lg text-bone"
          >
            Spočítej si reálný čas k cíli
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[1.0625rem] text-bone/65 leading-relaxed"
          >
            Žádné marketingové sliby. Vidíš rovnou orientační časový horizont,
            denní příjem a co spálíš za den. Pomáhá ti zorientovat se dřív, než
            do toho půjdeme spolu naplno.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FitnessCalculator ctaHref="#kontakt" />
        </motion.div>
      </div>
    </section>
  );
}
