'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { BLOG_POSTS } from '@/constants'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [postId, setPostId] = useState<string>('')
  const [post, setPost] = useState(BLOG_POSTS.find(p => p.id === ''))

  useEffect(() => {
    params.then(resolvedParams => {
      setPostId(resolvedParams.id)
      const foundPost = BLOG_POSTS.find(p => p.id === resolvedParams.id)
      if (!foundPost) {
        router.push('/blog')
      } else {
        setPost(foundPost)
      }
    })
  }, [params, router])

  if (!post || !postId) {
    return null
  }

  return (
    <>
      <section className="bg-gradient-to-br from-navy-50 to-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-navy-600 hover:text-primary-600 mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver al blog
            </Link>
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              <h1 className="heading-1 mb-6">{post.title}</h1>
              <div className="flex items-center space-x-6 text-navy-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{new Date(post.date).toLocaleDateString('es-AR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>{post.readTime} de lectura</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-body space-y-6"
            >
              <p className="text-xl text-navy-700 font-medium">{post.excerpt}</p>
              
              {post.content ? (
                <div 
                  className="blog-content prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    lineHeight: '1.8',
                  }}
                />
              ) : (
                <p>
                  Este es un artículo de ejemplo sobre {post.category.toLowerCase()}. 
                  En un sitio real, aquí encontrarías contenido completo y detallado 
                  sobre el tema, con información útil, ejemplos prácticos y consejos 
                  aplicables para tu negocio.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </article>
    </>
  )
}

