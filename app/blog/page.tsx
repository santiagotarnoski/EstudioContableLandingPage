'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { BLOG_POSTS } from '@/constants'
import Wave from '@/components/Wave'

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-900 via-indigo-800 to-purple-700 text-white overflow-hidden pt-24 md:pt-28 pb-32 md:pb-40">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={16} className="text-purple-300" />
              <span className="text-sm font-semibold text-purple-200">BLOG Y RECURSOS</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 leading-tight">
              Blog y{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 font-semibold">
                Recursos
              </span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed font-sans">
              Información útil sobre impuestos, contabilidad y gestión empresarial 
              para ayudarte a tomar{' '}
              <span className="font-semibold text-green-300">mejores decisiones financieras</span>.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Wave */}
        <div className="pointer-events-none -mb-px">
          <Wave className="text-white" height="120" />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl bg-white shadow-md md:shadow-lg border border-slate-100 p-0 group overflow-hidden transition-all duration-300"
              >
                <a 
                  href={post.externalUrl || `#`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
                    <Image
                      src={`/images/blog/${post.id}.jpg`}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="heading-3 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-navy-600 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('es-AR')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-2 gap-1">
                      Leer más
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

