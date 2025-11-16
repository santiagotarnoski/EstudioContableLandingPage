'use client'

import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  width?: number
  height?: number
  className?: string
  gradient?: 'primary' | 'navy'
}

export default function ImagePlaceholder({
  width = 400,
  height = 300,
  className = '',
  gradient = 'primary',
}: ImagePlaceholderProps) {
  const gradientClass = gradient === 'primary' 
    ? 'from-primary-500 to-primary-700' 
    : 'from-navy-600 to-navy-800'

  return (
    <motion.div
      className={`relative bg-gradient-to-br ${gradientClass} rounded-xl overflow-hidden ${className}`}
      style={{ width, height }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <ImageIcon size={48} className="mx-auto mb-4 opacity-80" />
          <p className="text-sm opacity-90">Imagen profesional</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/10" />
    </motion.div>
  )
}



