"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/slide-landscapedyard-1100x500-85.jpg"
          alt="Beautiful landscaped yard background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text text-transparent">
                Your Local Landscape Yard
              </h2>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg md:text-xl">
                <p>
                  Gettysburg Landscape Yard is your new outlet for locally sourced landscape materials. Specializing in
                  topsoil blends, decorative stone, a variety of mulches, playground chips, landscaping stone and washed
                  mason sand.
                </p>
                <p>
                  All of our products are available for pick-up or delivery directly to your home. We are conveniently
                  located on Emmitsburg Road (Business Route 15), with easy access from U.S. Route 15.
                </p>
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="font-semibold text-primary text-xl md:text-2xl bg-primary/5 p-4 rounded-lg"
                >
                  Stop by today, or call us at (717) 334-3800 to schedule your delivery!
                </motion.p>
              </div>
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }} className="mt-10">
                <Image
                  src="/images/images-pick.jpg"
                  alt="Voted #1 in the 2016 Gettysburg Times Pick of the Counties"
                  width={180}
                  height={240}
                  className="rounded-lg shadow-xl"
                />
                <p className="mt-4 text-base md:text-lg font-medium text-foreground">
                  Voted #1 in the 2016 Gettysburg Times "Pick of the Counties" contest for home and garden, with a
                  second place showing in 2018!
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ duration: 0.3 }} className="space-y-8">
              <div className="bg-gradient-to-br from-green-900/95 to-emerald-800/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl border-2 border-amber-400/50 shadow-2xl">
                <h3 className="font-bold text-3xl md:text-4xl mb-6 text-amber-300">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Locally sourced quality materials",
                    "Professional delivery service",
                    "Competitive pricing on all products",
                    "Conveniently located on Route 15",
                    "Award-winning local business",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-amber-400 font-bold text-2xl">✓</span>
                      <span className="text-lg md:text-xl text-white">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
