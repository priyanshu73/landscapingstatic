"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <motion.h3
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Gettysburg Landscape Yard
          </motion.h3>
          <p className="text-lg md:text-xl opacity-90">2285 Emmitsburg Road, Gettysburg, PA 17325</p>
          <p className="text-xl md:text-2xl font-semibold">
            <motion.a href="tel:7173343800" whileHover={{ scale: 1.05 }} className="hover:underline inline-block">
              (717) 334-3800
            </motion.a>
          </p>
          <div className="pt-6 border-t border-primary-foreground/20 mt-6">
            <p className="text-base md:text-lg opacity-75">
              &copy; {currentYear} Gettysburg Landscape Yard. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
