/**
 * Footer Component
 * Design: Modernismo Tipográfico
 * - Informações de contato
 * - Links úteis
 * - Muito espaço em branco
 * - Tipografia clara e legível
 */

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-32">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-6">Larissa</h3>
            <p className="text-gray-600 leading-relaxed">
              Profissional multidisciplinar com experiência em Teatro, Design, Marketing e Tecnologia.
            </p>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/formacao" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Formação
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-6">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@larissa.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                  contato@larissa.com
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="text-gray-600 hover:text-orange-500 transition-colors">
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="text-gray-600">
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Larissa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
