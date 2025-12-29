import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { LogOut, Home } from 'lucide-react';

/**
 * Dashboard Page
 * Design: Modernismo Tipográfico
 * - Área privada para usuários autenticados
 * - Interface limpa e funcional
 * - Informações importantes e conteúdos pessoais
 */

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar autenticação
    const token = localStorage.getItem('psique_token');
    const user = localStorage.getItem('psique_user');

    if (!token || !user) {
      setLocation('/psique');
    } else {
      setUsername(user);
      setIsAuthenticated(true);
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem('psique_token');
    localStorage.removeItem('psique_user');
    setLocation('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-charcoal">
                Psique
              </h1>
              <span className="text-gray-500">|</span>
              <p className="text-gray-600">
                Bem-vindo, <span className="font-semibold">{username}</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-charcoal hover:text-orange-500 transition-colors"
              >
                <Home size={20} />
                Voltar
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                <LogOut size={20} />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Resumo */}
          <div className="bg-gray-50 p-8 border-l-4 border-orange-500">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
              Projetos
            </h3>
            <p className="text-4xl font-bold text-charcoal">50+</p>
            <p className="text-gray-600 mt-2">Projetos realizados</p>
          </div>

          {/* Card 2: Clientes */}
          <div className="bg-gray-50 p-8 border-l-4 border-orange-500">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
              Clientes
            </h3>
            <p className="text-4xl font-bold text-charcoal">30+</p>
            <p className="text-gray-600 mt-2">Clientes satisfeitos</p>
          </div>

          {/* Card 3: Experiência */}
          <div className="bg-gray-50 p-8 border-l-4 border-orange-500">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide mb-2">
              Experiência
            </h3>
            <p className="text-4xl font-bold text-charcoal">15+</p>
            <p className="text-gray-600 mt-2">Anos de carreira</p>
          </div>
        </div>

        {/* Seção: Informações Importantes */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">
            Informações Importantes
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Contato
              </h3>
              <p className="text-blue-800 mb-2">
                Email: <a href="mailto:contato@larissa.com" className="font-semibold hover:underline">contato@larissa.com</a>
              </p>
              <p className="text-blue-800">
                Telefone: <a href="tel:+5511999999999" className="font-semibold hover:underline">+55 (11) 99999-9999</a>
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Localização
              </h3>
              <p className="text-green-800">
                São Paulo, Brasil
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-2">
                Disponibilidade
              </h3>
              <p className="text-purple-800">
                Aberta a novos projetos e oportunidades de colaboração
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Conteúdos Pessoais */}
        <section className="mb-16 border-b border-gray-200 pb-16">
          <h2 className="text-3xl font-bold text-charcoal mb-8">
            Conteúdos Pessoais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">
                Notas e Ideias
              </h3>
              <p className="text-gray-600 mb-6">
                Espaço para guardar notas, ideias e insights sobre projetos e criatividade.
              </p>
              <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Acessar
              </button>
            </div>

            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">
                Documentos
              </h3>
              <p className="text-gray-600 mb-6">
                Acesso a portfólio completo, currículos e documentos profissionais.
              </p>
              <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Acessar
              </button>
            </div>

            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">
                Análises
              </h3>
              <p className="text-gray-600 mb-6">
                Estatísticas e análises sobre visitantes do portfólio.
              </p>
              <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Acessar
              </button>
            </div>

            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">
                Configurações
              </h3>
              <p className="text-gray-600 mb-6">
                Gerenciar preferências e configurações da conta.
              </p>
              <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Acessar
              </button>
            </div>
          </div>
        </section>

        {/* Seção: Mensagens Recentes */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-8">
            Mensagens Recentes
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 p-6 border-l-4 border-orange-500">
              <p className="text-sm text-gray-500 mb-2">
                Há 2 dias
              </p>
              <p className="text-charcoal font-semibold mb-2">
                Novo projeto: Identidade Visual
              </p>
              <p className="text-gray-600">
                Cliente interessado em desenvolvimento de identidade visual completa...
              </p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-orange-500">
              <p className="text-sm text-gray-500 mb-2">
                Há 5 dias
              </p>
              <p className="text-charcoal font-semibold mb-2">
                Feedback do projeto: Campanha Digital
              </p>
              <p className="text-gray-600">
                Cliente enviou feedback positivo sobre a campanha digital...
              </p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-orange-500">
              <p className="text-sm text-gray-500 mb-2">
                Há 1 semana
              </p>
              <p className="text-charcoal font-semibold mb-2">
                Convite para colaboração
              </p>
              <p className="text-gray-600">
                Agência convidando para colaboração em projeto de branding...
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
