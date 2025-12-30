"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { src: "/images/slide-landscapedyard-1100x500-85.jpg", alt: "Gettysburg Landscape Yard" },
  { src: "/images/slide-handssoil-1100x500-85.jpg", alt: "Hands with soil" },
  { src: "/images/slide-logopicture-1100x500-90.jpeg", alt: "Equipment and delivery" },
  { src: "/images/slide-vegetable-garden-1100x500-90.jpg", alt: "Vegetable garden" },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full bg-muted overflow-hidden">
      <div className="relative h-[48vh] md:h-[62vh] lg:h-[80vh]">
        <div className="absolute inset-0">
          <Image src="/images/slide-landscapedyard-1100x500-85.jpg" alt="Gettysburg Landscape Yard" fill className="object-cover" priority />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.65),rgba(0,0,0,0.15)_60%,transparent_100%)]" />
            </div>
          </div>
        </div>

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-3xl px-4"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
              <span className="block">Home Delivery Available</span>
              <span className="block mt-2 text-xl md:text-4xl lg:text-5xl font-semibold text-amber-300">Quality Landscape Materials</span>
            </h1>
            <p className="mt-3 text-base md:text-2xl lg:text-3xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Your local source for premium <span className="text-amber-300 font-medium">mulch</span>, <span className="text-amber-300 font-medium">topsoil</span>, decorative stone, and more. Serving Gettysburg and surrounding areas with locally sourced materials.
            </p>
            <div className="mt-4">
              <a
                href="tel:7173343800"
                aria-label="Call Gettysburg Landscape Yard"
                className="inline-block bg-amber-300 text-black px-4 py-2 rounded-md text-base md:text-xl lg:text-2xl font-semibold shadow-lg"
              >
                (717) 334-3800
              </a>
            </div>
          </motion.div>

          {/* slider removed from hero — use `components/feature-slider.tsx` to place elsewhere */}
      </div>
    </section>
  )
}

export default HeroCarousel
