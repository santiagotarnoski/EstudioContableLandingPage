'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  id: string
  title: string
  shortDescription: string
  icon: string
  image?: string
  delay?: number
}

export default function ServiceCard({
  id,
  title,
  shortDescription,
  icon,
  image,
  delay = 0,
}: ServiceCardProps) {
  const IconComponent = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.BarChart3

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="card group overflow-hidden"
    >
      {image ? (
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback si la imagen no existe
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-medium">
            <IconComponent size={24} className="text-emerald-600" />
          </div>
        </div>
      ) : (
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          <IconComponent size={32} />
        </div>
      )}
      <h3 className="heading-3 mb-3">{title}</h3>
      <p className="text-muted mb-6">{shortDescription}</p>
      <Link
        href={`/servicios#${id}`}
        className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group-hover:gap-2 gap-1"
      >
        Ver más
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

