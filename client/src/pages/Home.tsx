import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';

/**
 * Home Page
 * Design: Modernismo Tipográfico + Geometria Limpa
 * - Headline impactante
 * - Portfólio em destaque com filtros
 * - CTAs claros
 * - Muito espaço em branco
 * - Tipografia em escala
 */

interface Project {
  id: string;
  title: string;
  category: 'arte' | 'design' | 'marketing' | 'tecnologia';
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Identidade Visual - Marca X',
    category: 'design',
    description: 'Desenvolvimento completo de identidade visual para startup de tecnologia',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Campanha Integrada - Produto Y',
    category: 'marketing',
    description: 'Estratégia de marketing e design de campanha para lançamento de produto',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Montagem Teatral - Metamorfose',
    category: 'arte',
    description: 'Direção e produção de montagem teatral contemporânea',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Plataforma Web - App Z',
    category: 'tecnologia',
    description: 'Design e desenvolvimento de interface para aplicação web',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Branding - Agência W',
    category: 'marketing',
    description: 'Estratégia de branding e posicionamento de marca',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
  },
  {
    id: '6',
    title: 'Instalação Artística - Espaço',
    category: 'arte',
    description: 'Conceito e execução de instalação artística interativa',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
  }
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'arte', label: 'Arte / Teatro' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing / Branding' },
  { id: 'tecnologia', label: 'Tecnologia' }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { user } = useAuth();

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-32 md:py-48 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Criatividade,<br />
              <span className="text-orange-500">Estratégia</span> e<br />
              Multidisciplinaridade
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Profissional com ampla experiência em Teatro, Design Gráfico, Marketing, Branding e Tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/sobre" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Me conheça mais
                <ArrowRight size={20} />
              </Link>
              <a href="#contato" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-charcoal text-charcoal font-semibold hover:bg-charcoal hover:text-white transition-all duration-300">
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio Section */}
      <section className="py-32 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Portfólio
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl">
            Seleção de projetos que refletem minha trajetória criativa e estratégica
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-orange-500 text-white'
                    : 'border-2 border-gray-300 text-charcoal hover:border-orange-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group cursor-pointer fade-in"
              >
                <div className="relative overflow-hidden mb-4 aspect-video bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-orange-500 font-semibold mb-3 uppercase tracking-wide">
                  {categories.find(c => c.id === project.category)?.label}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA para Portfólio Completo */}
          <div className="mt-20 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
              Ver portfólio completo
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                15+
              </div>
              <p className="text-lg text-charcoal font-semibold">
                Anos de Experiência
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                50+
              </div>
              <p className="text-lg text-charcoal font-semibold">
                Projetos Realizados
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                4
              </div>
              <p className="text-lg text-charcoal font-semibold">
                Áreas de Expertise
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                100%
              </div>
              <p className="text-lg text-charcoal font-semibold">
                Dedicação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Tenho interesse em projetos desafiadores que combinem criatividade, estratégia e inovação.
          </p>
          <a
            href="mailto:contato@larissa.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enviar mensagem
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
