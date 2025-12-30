"use client"

import Image from "next/image"
import { Truck, Trees, Shovel, Sprout } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const services = [
  {
    icon: Truck,
    title: "Home Delivery Available",
    description:
      "Quality bulk mulch, topsoil, decorative stone, and landscaping materials delivered directly to your property.",
  },
  {
    icon: Trees,
    title: "Decorative Stone & River Jack",
    description:
      "Beautiful decorative stones, river jack stone, crusher run, and various sizes for all your landscaping needs.",
  },
  {
    icon: Shovel,
    title: "Mulch Varieties",
    description: "Black, red, brown, fine compost, premium dark hardwood mulch, and playground wood chips available.",
  },
  {
    icon: Sprout,
    title: "Quality Topsoil & Garden Mix",
    description: "Screened topsoil, garden mix, and soil amendments perfect for gardens, lawns, and planting beds.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-emerald-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
              Our Products & Services
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
              Gettysburg Landscape Yard is your new outlet for locally sourced landscape materials
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="border-2 border-green-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 h-full bg-gradient-to-br from-white to-green-50">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 mb-4 shadow-lg"
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <h3 className="font-bold text-xl md:text-2xl mb-3 text-green-900">{service.title}</h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/images/landscaped-yard-mulch-main.jpg"
                alt="Professional landscaping with decorative red mulch"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold drop-shadow-lg">Decorative Mulch Designs</h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/images/landscaped-island-landscapedisland-main.jpg"
                alt="Beautiful landscaped island with ornamental trees"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold drop-shadow-lg">Island Landscaping</h3>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
