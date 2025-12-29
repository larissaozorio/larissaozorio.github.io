import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertCircle } from 'lucide-react';

/**
 * Psique Page - Login
 * Design: Modernismo Tipográfico
 * - Página de autenticação simples
 * - Design minimalista e elegante
 * - Usuário e senha padrão
 */

const DEFAULT_USERNAME = 'larissa';
const DEFAULT_PASSWORD = 'psique2025';

export default function Psique() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular delay de autenticação
    setTimeout(() => {
      if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
        // Salvar token no localStorage
        localStorage.setItem('psique_token', 'authenticated');
        localStorage.setItem('psique_user', username);
        setLocation('/dashboard');
      } else {
        setError('Usuário ou senha inválidos. Tente novamente.');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="w-full max-w-md px-4">
          {/* Logo/Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-charcoal mb-2">
              Psique
            </h1>
            <p className="text-gray-600">
              Área restrita
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Erro */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 flex gap-3">
                <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Usuário
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Autenticando...' : 'Entrar'}
            </button>
          </form>

          {/* Informações de Teste */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-3">
              Credenciais de teste:
            </p>
            <div className="bg-gray-50 p-4 space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="font-semibold">Usuário:</span> larissa
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Senha:</span> psique2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
