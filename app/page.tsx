"use client"

import { HeroCarousel } from "@/components/hero-carousel"
import FeatureSlider from "@/components/feature-slider"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { DeliverySection } from "@/components/delivery-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroCarousel />
          <ServicesSection />
          <FeatureSlider />
          <AboutSection />
          <ProductsSection />
          <DeliverySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
