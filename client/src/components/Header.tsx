import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Header Component
 * Design: Modernismo Tipográfico
 * - Logo/marca à esquerda
 * - Menu de navegação centralizado
 * - Botão de login discreto à direita
 * - Responsivo com menu mobile
 */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-charcoal hover:text-orange-500 transition-colors duration-300">
            Larissa
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-charcoal font-medium hover:text-orange-500 transition-colors duration-300">
              Home
            </Link>
            <Link href="/portfolio" className="text-charcoal font-medium hover:text-orange-500 transition-colors duration-300">
              Portfólio
            </Link>
            <Link href="/sobre" className="text-charcoal font-medium hover:text-orange-500 transition-colors duration-300">
              Sobre
            </Link>
            <Link href="/formacao" className="text-charcoal font-medium hover:text-orange-500 transition-colors duration-300">
              Formação
            </Link>
          </nav>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <Link href="/" className="block py-3 text-charcoal font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="block py-3 text-charcoal font-medium hover:text-orange-500 transition-colors">
              Portfólio
            </Link>
            <Link href="/sobre" className="block py-3 text-charcoal font-medium hover:text-orange-500 transition-colors">
              Sobre
            </Link>
            <Link href="/formacao" className="block py-3 text-charcoal font-medium hover:text-orange-500 transition-colors">
              Formação
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
