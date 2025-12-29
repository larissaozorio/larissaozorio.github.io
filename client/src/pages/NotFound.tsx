import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

/**
 * NotFound Page - 404
 * Design: Modernismo Tipográfico
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-8xl md:text-9xl font-bold text-orange-500 mb-4">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Página não encontrada
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link href="/">
            <a className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300">
              <ArrowLeft size={20} />
              Voltar para Home
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
