"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const productCategories = [
  {
    title: "Mulch",
    items: [
      "Black Mulch",
      "Red Mulch",
      "Brown Mulch",
      "Fine Compost Mulch",
      "Premium Dark Hardwood Mulch",
      "Playground Chips",
    ],
  },
  {
    title: "Topsoil",
    items: ["Quality Screened Topsoil", "Garden Mix"],
  },
  {
    title: "Decorative Stone",
    items: [
      '½" Red Landscape Stone',
      '1" Red Landscape Stone',
      '¾" River Jack Stone',
      '1-3" River Jack Stone',
      "Custom sizes available by request",
    ],
  },
  {
    title: "Stone & Sand",
    items: ["Crusher Run Stone", "Stone Dust", '1" Gray Stone', '½" Sand Stone', '1" River Stone', "Fine White Sand"],
  },
]

const additionalProducts = [
  "Roll-Off Dumpster Rentals",
  "Poly Outdoor Furniture",
  "Wood Outdoor Furniture",
  "Poly Birdhouses and Bird Feeders",
  "Some items require special ordering",
]

export function ProductsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-amber-700 to-green-800 bg-clip-text text-transparent">
              Product Line
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Quality landscape materials and outdoor products for your home and garden
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <motion.div
                className="h-full"
                whileHover={{
                  scale: 1.05,
                  rotateY: 3,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="border-2 border-amber-200 hover:border-green-400 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col bg-gradient-to-br from-white to-amber-50">
                  <CardHeader className="bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-t-lg">
                    <CardTitle className="text-2xl md:text-3xl font-bold">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 flex-1">
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="text-muted-foreground text-base md:text-lg flex items-start gap-2"
                        >
                          <span className="text-emerald-600 font-bold mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Removed Poly Outdoor Furniture feature image per request */}

        <ScrollReveal delay={0.3}>
          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <Card className="border-2 border-green-300 shadow-xl max-w-4xl mx-auto hover:shadow-2xl transition-shadow bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-green-700 text-white rounded-t-lg">
                <CardTitle className="text-3xl md:text-4xl font-bold text-center">
                  Additional Product Offerings
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="grid md:grid-cols-2 gap-4">
                  {additionalProducts.map((product, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground text-lg md:text-xl flex items-start gap-3"
                    >
                      <span className="text-emerald-600 font-bold text-2xl">✓</span>
                      <span>{product}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
