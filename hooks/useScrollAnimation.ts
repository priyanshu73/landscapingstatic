"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1, ...(options || {}) }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, options])

  return { ref, isVisible }
}
