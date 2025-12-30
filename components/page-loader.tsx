"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sprout, Leaf } from "lucide-react"

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 border-8 border-amber-500 border-t-transparent rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-4 border-6 border-green-400 border-b-transparent rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    <Sprout className="w-12 h-12 text-amber-400" />
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-2 -right-2"
                    >
                      <Leaf className="w-6 h-6 text-green-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white mb-6 drop-shadow-lg"
            >
              Gettysburg Landscape Yard
            </motion.h2>
            <div className="max-w-sm mx-auto mb-4">
              <div className="h-3 bg-green-950/50 rounded-full overflow-hidden backdrop-blur-sm border-2 border-green-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-amber-500 via-green-400 to-emerald-500 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-amber-200 text-xl font-semibold"
            >
              Growing Your Dreams... {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
