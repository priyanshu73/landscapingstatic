"use client"

import { MapPin, Phone, Clock, Truck } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: (
      <>
        2285 Emmitsburg Road
        <br />
        Gettysburg, PA 17325
      </>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <a href="tel:7173343800" className="text-primary hover:underline text-xl md:text-2xl font-semibold">
        (717) 334-3800
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Hours",
    content: (
      <>
        Monday - Friday: 8AM - 5PM
        <br />
        Saturday: 8AM - 3PM
        <br />
        Sunday: Closed
      </>
    ),
  },
  {
    icon: Truck,
    title: "Delivery",
    content: (
      <>
        Available throughout
        <br />
        Gettysburg & surrounding
        <br />
        areas
      </>
    ),
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="relative text-center mb-16 overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/slide-backyardwithwoodchips-1100x500-90.jpg"
                alt="Backyard with woodchips"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>
            <div className="relative px-6 py-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Visit Us Today</h2>
              <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Stop by our yard or give us a call to discuss your landscaping needs
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="text-center p-6"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
                  >
                    <Icon className="h-10 w-10 text-primary" />
                  </motion.div>
                  <h3 className="font-bold text-xl md:text-2xl mb-3">{item.title}</h3>
                  <div className="text-muted-foreground text-lg leading-relaxed">{item.content}</div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 rounded-2xl overflow-hidden border border-border shadow-card h-[420px] md:h-[520px] lg:h-[620px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30377.14898037201!2d-77.265628!3d39.774164000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9ad71c7601d87%3A0x2d82824699720b5d!2sGettysburg%20Landscape%20Yard!5e1!3m2!1sen!2sus!4v1767093714189!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gettysburg Landscape Yard Location"
              className="w-full h-full"
            />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <motion.a
              href="https://www.facebook.com/gettysburglandscapeyard"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block transition-opacity"
            >
              <Image
                src="/images/find-us-on-facebook-findusonfacebook.gif"
                alt="Find us on Facebook"
                width={250}
                height={65}
                className="mx-auto"
              />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
