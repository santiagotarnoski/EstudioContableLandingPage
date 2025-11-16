'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  business: string
  text: string
  rating: number
  delay?: number
}

export default function TestimonialCard({
  name,
  business,
  text,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="card"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-body mb-6 italic">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="font-semibold text-slate-800">{name}</p>
        <p className="text-sm text-slate-600">{business}</p>
      </div>
    </motion.div>
  )
}


