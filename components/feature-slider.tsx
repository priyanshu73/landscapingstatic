"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"

declare global {
  interface Window {
    gsap?: any
    MotionPathPlugin?: any
  }
}

interface ImageData {
  title: string
  url: string
}

const images: ImageData[] = [
  { title: "Landscape Yard", url: "/images/slide-landscapedyard-1100x500-85.jpg" },
  { title: "Hands with Soil", url: "/images/slide-handssoil-1100x500-85.jpg" },
  { title: "Logo Picture", url: "/images/slide-logopicture-1100x500-90.jpeg" },
  { title: "Vegetable Garden", url: "/images/slide-vegetable-garden-1100x500-90.jpg" },
]

export default function FeatureSlider() {
  const [opened, setOpened] = useState(0)
  const [inPlace, setInPlace] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [gsapReady, setGsapReady] = useState(false)
  const autoplayTimer = useRef<number | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const pointerStart = useRef<number | null>(null)
  const pointerDelta = useRef<number>(0)

  useEffect(() => {
    const loadScripts = () => {
      if (window.gsap && window.MotionPathPlugin) {
        window.gsap.registerPlugin(window.MotionPathPlugin)
        setGsapReady(true)
        return
      }

      const gsapScript = document.createElement("script")
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      gsapScript.onload = () => {
        const motionPathScript = document.createElement("script")
        motionPathScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js"
        motionPathScript.onload = () => {
          if (window.gsap && window.MotionPathPlugin) {
            window.gsap.registerPlugin(window.MotionPathPlugin)
            setGsapReady(true)
          }
        }
        document.body.appendChild(motionPathScript)
      }
      document.body.appendChild(gsapScript)
    }

    loadScripts()
  }, [])

  // preload images to avoid flashes and ensure SVG images scale immediately
  useEffect(() => {
    images.forEach((s) => {
      const img = new window.Image()
      img.src = s.url
    })
  }, [])

  const onClick = (index: number) => {
    if (!disabled) setOpened(index)
  }

  const onInPlace = (index: number) => setInPlace(index)

  const next = useCallback(() => {
    setOpened((currentOpened) => {
      let nextIndex = currentOpened + 1
      if (nextIndex >= images.length) nextIndex = 0
      return nextIndex
    })
  }, [])

  const prev = useCallback(() => {
    setOpened((currentOpened) => {
      let prevIndex = currentOpened - 1
      if (prevIndex < 0) prevIndex = images.length - 1
      return prevIndex
    })
  }, [])

  useEffect(() => setDisabled(true), [opened])
  useEffect(() => setDisabled(false), [inPlace])

  // Autoplay: always run regardless of GSAP so a visible image rotates even before GSAP loads
  useEffect(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current)
    }

    // speed up autoplay to 3000ms for a snappier rotation
    autoplayTimer.current = window.setInterval(next, 3000)

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current)
      }
    }
  }, [next])

  return (
    <div className="flex items-center justify-center w-full">
      <div
        ref={sliderRef}
        onPointerDown={(e) => {
          pointerStart.current = e.clientX
          try {
            ;(e.target as Element).setPointerCapture?.((e as any).pointerId)
          } catch {}
          // disable sticky header while swiping on mobile
          try {
            document.body.classList.add("no-sticky-header")
          } catch {}
        }}
        onPointerMove={(e) => {
          if (pointerStart.current != null) pointerDelta.current = e.clientX - pointerStart.current
        }}
        onPointerUp={(e) => {
          if (pointerStart.current != null) {
            const dx = e.clientX - pointerStart.current
            if (Math.abs(dx) > 40) {
              if (dx < 0) next()
              else prev()
            }
          }
          pointerStart.current = null
          pointerDelta.current = 0
          try {
            document.body.classList.remove("no-sticky-header")
          } catch {}
        }}
        onPointerCancel={() => {
          pointerStart.current = null
          pointerDelta.current = 0
          try {
            document.body.classList.remove("no-sticky-header")
          } catch {}
        }}
        onPointerLeave={() => {
          pointerStart.current = null
          pointerDelta.current = 0
          try {
            document.body.classList.remove("no-sticky-header")
          } catch {}
        }}
        className="relative w-full max-w-4xl h-64 md:h-80 lg:h-96 overflow-hidden rounded-[16px] shadow-lg bg-neutral-900"
      >
        {/* center highlight */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="hidden sm:block w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full ring-4 ring-white/12 backdrop-blur-sm" />
        </div>
        {images.map((image, i) => (
          <div
            key={image.url}
            className="absolute left-0 top-0 h-full w-full"
            style={{ zIndex: inPlace === i ? i : images.length + 1 }}
          >
            {gsapReady ? (
              <GalleryImage
                total={images.length}
                id={i}
                url={image.url}
                title={image.title}
                open={opened === i}
                inPlace={inPlace === i}
                onInPlace={onInPlace}
              />
            ) : (
              <img
                src={image.url}
                alt={image.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${opened === i ? "opacity-100" : "opacity-0"}`}
              />
            )}
          </div>
        ))}

        <div className="absolute left-0 top-0 z-[100] h-full w-full pointer-events-none">
          <div className="hidden sm:block h-full w-full">
            <Tabs images={images} onSelect={onClick} />
          </div>
        </div>

        <button
          className="absolute left-2 sm:left-4 top-1/2 z-[101] -translate-y-1/2 rounded-full bg-white/90 p-3 sm:p-2 shadow-md pointer-events-auto"
          onClick={prev}
          disabled={disabled}
          aria-label="Previous Image"
        >
          <span className="text-lg sm:text-base">‹</span>
        </button>

        <button
          className="absolute right-2 sm:right-4 top-1/2 z-[101] -translate-y-1/2 rounded-full bg-white/90 p-3 sm:p-2 shadow-md pointer-events-auto"
          onClick={next}
          disabled={disabled}
          aria-label="Next Image"
        >
          <span className="text-lg sm:text-base">›</span>
        </button>
      </div>
    </div>
  )
}

interface GalleryImageProps {
  url: string
  title: string
  open: boolean
  inPlace: boolean
  id: number
  onInPlace: (id: number) => void
  total: number
}

function GalleryImage({ url, title, open, inPlace, id, onInPlace, total }: GalleryImageProps) {
  const [firstLoad, setLoaded] = useState(true)
  const clip = useRef<SVGCircleElement>(null)

  const gap = 10
  const circleRadius = 7
  const defaults = { transformOrigin: "center center" }
  const duration = 0.28
  const width = 400
  const height = 400
  const scale = 700

  const bigSize = circleRadius * scale
  const overlap = 0

  const getPosSmall = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height - 30,
    r: circleRadius,
  })
  const getPosSmallAbove = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height / 2,
    r: circleRadius * 2,
  })
  const getPosCenter = () => ({ cx: width / 2, cy: height / 2, r: circleRadius * 7 })
  const getPosEnd = () => ({ cx: width / 2 - bigSize + overlap, cy: height / 2, r: bigSize })
  const getPosStart = () => ({ cx: width / 2 + bigSize - overlap, cy: height / 2, r: bigSize })

  useEffect(() => {
    const gsap = window.gsap
    if (!gsap) return

    setLoaded(false)
    if (clip.current) {
      const flipDuration = firstLoad ? 0 : duration
      const upDuration = firstLoad ? 0 : 0.12
      const bounceDuration = firstLoad ? 0.01 : 0.6
      const delay = firstLoad ? 0 : flipDuration + upDuration

      if (open) {
        gsap
          .timeline()
          .set(clip.current, { ...defaults, ...getPosSmall() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            duration: upDuration,
            ease: "power3.inOut",
          })
          .to(clip.current, {
            ...defaults,
            ...getPosEnd(),
            duration: flipDuration,
            ease: "power4.in",
            onComplete: () => onInPlace(id),
          })
      } else {
        gsap
          .timeline({ overwrite: true })
          .set(clip.current, { ...defaults, ...getPosStart() })
          .to(clip.current, {
            ...defaults,
            ...getPosCenter(),
            delay: delay,
            duration: flipDuration,
            ease: "power4.out",
          })
          .to(clip.current, {
            ...defaults,
            motionPath: {
              path: [getPosSmallAbove(), getPosSmall()],
              curviness: 1,
            },
            duration: bounceDuration,
            ease: "bounce.out",
          })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        <clipPath id={`${id}_circleClip`}>
          <circle className="clip" cx="0" cy="0" r={circleRadius} ref={clip}></circle>
        </clipPath>
        <clipPath id={`${id}_squareClip`}>
          <rect className="clip" width={width} height={height}></rect>
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}${inPlace ? "_squareClip" : "_circleClip"})`}>
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={url}
          className="pointer-events-none"
        ></image>
      </g>
    </svg>
  )
}

interface TabsProps {
  images: ImageData[]
  onSelect: (index: number) => void
}

function Tabs({ images, onSelect }: TabsProps) {
  const gap = 10
  const circleRadius = 7
  const width = 400
  const height = 400

  const getPosX = (i: number) =>
    width / 2 - (images.length * (circleRadius * 2 + gap) - gap) / 2 + i * (circleRadius * 2 + gap)
  const getPosY = () => height - 30

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      {images.map((image, i) => (
        <g key={image.url} className="pointer-events-auto">
          <defs>
            <clipPath id={`tab_${i}_clip`}>
              <circle cx={getPosX(i)} cy={getPosY()} r={circleRadius} />
            </clipPath>
          </defs>
          <image
            x={getPosX(i) - circleRadius}
            y={getPosY() - circleRadius}
            width={circleRadius * 2}
            height={circleRadius * 2}
            href={image.url}
            clipPath={`url(#tab_${i}_clip)`}
            className="pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
          />
          <circle
            onClick={() => onSelect(i)}
            className="cursor-pointer fill-white/0 stroke-white/70 hover:stroke-white/100 transition-all"
            strokeWidth="2"
            cx={getPosX(i)}
            cy={getPosY()}
            r={circleRadius + 2}
          />
        </g>
      ))}
    </svg>
  )
}
