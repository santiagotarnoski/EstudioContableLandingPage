import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 to-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-navy-900 mb-4">404</h1>
        <h2 className="heading-2 mb-4">Página no encontrada</h2>
        <p className="text-body mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center">
          <ArrowLeft size={20} className="mr-2" />
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}



