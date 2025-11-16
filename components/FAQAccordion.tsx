'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

interface FAQAccordionProps {
  faq: {
    question: string
    answer: string
  }
  index: number
}

export default function FAQAccordion({ faq, index }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-start gap-4 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset rounded-2xl"
      >
        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <HelpCircle size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800 mb-2 pr-8">{faq.question}</h3>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-slate-500 leading-relaxed pt-2">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown size={20} className="text-slate-400" />
        </motion.div>
      </button>
    </motion.div>
  )
}


