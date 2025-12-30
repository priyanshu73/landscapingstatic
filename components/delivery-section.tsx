"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { MapPin, DollarSign } from "lucide-react"

const deliveryZones = [
  { zone: "Local Campgrounds / 2 Mile Ridge Road", charge: "$35", color: "from-green-500 to-emerald-500" },
  { zone: "Gettysburg", charge: "$50", color: "from-emerald-500 to-teal-500" },
  {
    zone: "Biglerville, Bonneauville, Cashtown, Emmitsburg, Hunterstown",
    charge: "$55",
    color: "from-teal-500 to-cyan-500",
  },
  { zone: "Abbottstown, Fairfield, Littlestown, New Oxford", charge: "$60", color: "from-cyan-500 to-blue-500" },
  {
    zone: "Arendtsville, Carroll Valley, Taneytown, Thurmont",
    charge: "$65",
    color: "from-blue-500 to-indigo-500",
  },
  { zone: "East Berlin, Orrtanna", charge: "$70", color: "from-indigo-500 to-purple-500" },
  { zone: "Chambersburg, Dover, Hanover, Spring Grove", charge: "$85", color: "from-purple-500 to-pink-500" },
  { zone: "Thomasville, York Springs", charge: "$90", color: "from-pink-500 to-rose-500" },
  { zone: "York", charge: "$105", color: "from-rose-500 to-red-500" },
]

export function DeliverySection() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-gray-900">Local Delivery Charges</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Delivery around Gettysburg and nearby towns. Simple, straightforward pricing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliveryZones.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.04}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative overflow-hidden rounded-lg bg-gray-50 border border-gray-200 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-600 flex-shrink-0 mt-1" />
                    <h3 className="text-sm md:text-base font-medium text-gray-900 leading-tight">{item.zone}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-semibold text-gray-800">{item.charge}</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-8 text-center p-4 bg-slate-50 border border-gray-200 rounded-lg"
          >
            <p className="text-base md:text-lg text-gray-900">
              Call us at <span className="font-semibold">(717) 334-3800</span> to schedule your delivery today!
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
