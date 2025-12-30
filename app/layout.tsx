import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gettysburg Landscape Yard | Mulch, Topsoil, Stone & Landscaping Materials Delivery",
  description:
    "Gettysburg Landscape Yard - Your outlet for locally sourced landscape materials. Specializing in topsoil blends, decorative stone, mulch varieties, playground chips, and landscaping stone. Home delivery available throughout Gettysburg, PA and surrounding areas. Call (717) 334-3800.",
  keywords: [
    "landscape materials Gettysburg PA",
    "mulch delivery Gettysburg",
    "topsoil Gettysburg",
    "decorative stone",
    "playground chips",
    "landscaping stone",
    "river jack stone",
    "mason sand",
    "bulk mulch",
    "garden mix",
    "Gettysburg landscape yard",
    "Adams County landscaping",
  ],
  authors: [{ name: "Gettysburg Landscape Yard" }],
  openGraph: {
    title: "Gettysburg Landscape Yard | Quality Landscaping Materials & Delivery",
    description:
      "Locally sourced mulch, topsoil, decorative stone, and landscaping materials. Professional delivery service throughout Gettysburg and surrounding areas.",
    url: "https://gettysburglandscapeyard.com",
    siteName: "Gettysburg Landscape Yard",
    locale: "en_US",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-greentea.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
