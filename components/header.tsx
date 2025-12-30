"use client"

import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="site-header bg-white border-b border-border shadow-sm backdrop-blur-sm bg-white/95"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-auto flex justify-center lg:justify-start"
          >
            <Image
              src="/images/logo-webheaderlogo-971x236-24t2.png"
              alt="Gettysburg Landscape Yard - 2285 Emmitsburg Road, Gettysburg, PA 17325 - (717) 334-3800"
              width={971}
              height={236}
              className="h-auto w-full max-w-2xl"
              priority
            />
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:7173343800"
              className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-xl shadow-md"
            >
              <Phone className="h-6 w-6" />
              <span>(717) 334-3800</span>
            </motion.a>
            <motion.a
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-secondary/80 transition-colors font-semibold text-xl shadow-md border border-border"
            >
              <MapPin className="h-6 w-6" />
              <span>Visit Us</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
