import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

/**
 * Portfolio Page
 * Design: Modernismo Tipográfico
 * - Grid limpo e editorial
 * - Filtros por categoria
 * - Modal para visualização detalhada
 * - Muito espaço em branco
 */

interface Project {
  id: string;
  title: string;
  category: 'arte' | 'design' | 'marketing' | 'tecnologia';
  description: string;
  longDescription: string;
  image: string;
  year: number;
  client?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Identidade Visual - Marca X',
    category: 'design',
    description: 'Desenvolvimento completo de identidade visual',
    longDescription: 'Projeto de identidade visual completo incluindo logo, paleta de cores, tipografia, guia de estilos e aplicações em diversos materiais. Resultado: marca moderna e memorável que reflete os valores da empresa.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    year: 2023,
    client: 'Startup de Tecnologia'
  },
  {
    id: '2',
    title: 'Campanha Integrada - Produto Y',
    category: 'marketing',
    description: 'Estratégia de marketing e design de campanha',
    longDescription: 'Desenvolvimento de campanha integrada incluindo estratégia, design de materiais, copywriting e coordenação de lançamento. Resultado: aumento de 150% em engajamento e 200+ leads qualificados.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    year: 2023,
    client: 'Empresa de E-commerce'
  },
  {
    id: '3',
    title: 'Montagem Teatral - Metamorfose',
    category: 'arte',
    description: 'Direção e produção de montagem teatral',
    longDescription: 'Montagem de peça teatral contemporânea com direção artística, design de cenografia, iluminação e som. Apresentação em 20 cidades com público de 5.000+ espectadores.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    year: 2022,
    client: 'Produção Independente'
  },
  {
    id: '4',
    title: 'Plataforma Web - App Z',
    category: 'tecnologia',
    description: 'Design e desenvolvimento de interface web',
    longDescription: 'Design de interface e experiência do usuário para plataforma web de gestão de projetos. Implementação com React, Tailwind CSS e backend em Node.js. Resultado: 10.000+ usuários ativos.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    year: 2023,
    client: 'Startup SaaS'
  },
  {
    id: '5',
    title: 'Branding - Agência W',
    category: 'marketing',
    description: 'Estratégia de branding e posicionamento',
    longDescription: 'Projeto completo de branding incluindo pesquisa de mercado, definição de posicionamento, identidade visual, copywriting e estratégia de comunicação.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    year: 2022,
    client: 'Agência de Marketing'
  },
  {
    id: '6',
    title: 'Instalação Artística - Espaço',
    category: 'arte',
    description: 'Conceito e execução de instalação interativa',
    longDescription: 'Instalação artística interativa que combina tecnologia e arte. Projeto exibido em galeria contemporânea com visitação de 2.000+ pessoas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    year: 2021,
    client: 'Galeria de Arte'
  },
  {
    id: '7',
    title: 'Redesign - Portal Corporativo',
    category: 'design',
    description: 'Redesign completo de portal corporativo',
    longDescription: 'Redesign de portal corporativo com foco em usabilidade, acessibilidade e modernização visual. Resultado: aumento de 80% em uso do portal.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    year: 2023,
    client: 'Empresa Multinacional'
  },
  {
    id: '8',
    title: 'Documentário - Histórias de Vida',
    category: 'arte',
    description: 'Direção e produção de documentário',
    longDescription: 'Documentário que explora histórias de vida de empreendedores. Duração: 90 minutos. Exibição em festival de cinema internacional.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    year: 2022,
    client: 'Produção Audiovisual'
  },
  {
    id: '9',
    title: 'Estratégia Digital - Transformação',
    category: 'marketing',
    description: 'Consultoria em transformação digital',
    longDescription: 'Projeto de consultoria em transformação digital incluindo diagnóstico, estratégia, implementação e treinamento. Resultado: aumento de 300% em eficiência operacional.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    year: 2023,
    client: 'Empresa de Serviços'
  }
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'arte', label: 'Arte / Teatro' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing / Branding' },
  { id: 'tecnologia', label: 'Tecnologia' }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Portfólio Completo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Seleção de projetos que representam minha trajetória criativa, estratégica e multidisciplinar.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group cursor-pointer fade-in"
                onClick={() => setSelectedProject(project)}
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
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500">
                  {project.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-charcoal">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-charcoal transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover mb-8"
              />

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-2">
                    {categories.find(c => c.id === selectedProject.category)?.label}
                  </p>
                </div>

                {selectedProject.client && (
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">Cliente</h3>
                    <p className="text-gray-600">{selectedProject.client}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">Ano</h3>
                  <p className="text-gray-600">{selectedProject.year}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">Descrição</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
