import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Formação Page
 * Design: Modernismo Tipográfico
 * - Estrutura visual e menos "cara de currículo"
 * - Organização por áreas
 * - Cards e seções bem definidas
 * - Muito espaço em branco
 */

interface Course {
  title: string;
  institution: string;
  year: number;
  description: string;
}

const formation = {
  artistica: [
    {
      title: 'Mestrado em Artes Cênicas',
      institution: 'Universidade de São Paulo (USP)',
      year: 2015,
      description: 'Pesquisa em direção teatral contemporânea e processos criativos'
    },
    {
      title: 'Graduação em Teatro',
      institution: 'Escola de Artes Dramáticas (EAD)',
      year: 2012,
      description: 'Formação completa em atuação, direção e produção teatral'
    },
    {
      title: 'Certificação em Artes Visuais',
      institution: 'Fundação Armando Álvares Penteado (FAAP)',
      year: 2011,
      description: 'Estudos em fotografia, vídeo e instalação artística'
    }
  ],
  tecnologia: [
    {
      title: 'Especialização em UX/UI Design',
      institution: 'Interaction Design Foundation',
      year: 2022,
      description: 'Design de experiência do usuário e interfaces digitais'
    },
    {
      title: 'Certificação em Desenvolvimento Web',
      institution: 'Coursera - React & Node.js',
      year: 2021,
      description: 'Full-stack development com tecnologias modernas'
    },
    {
      title: 'Bootcamp de Design Digital',
      institution: 'General Assembly',
      year: 2020,
      description: 'Design thinking, prototipagem e desenvolvimento'
    }
  ],
  marketing: [
    {
      title: 'MBA em Marketing Digital',
      institution: 'Fundação Getulio Vargas (FGV)',
      year: 2019,
      description: 'Estratégia de marketing, branding e transformação digital'
    },
    {
      title: 'Certificação em Estratégia de Marca',
      institution: 'American Marketing Association',
      year: 2018,
      description: 'Posicionamento, identidade e comunicação de marca'
    },
    {
      title: 'Curso de Copywriting e Comunicação',
      institution: 'Escola de Comunicação e Artes (ECA)',
      year: 2017,
      description: 'Redação, storytelling e estratégia de conteúdo'
    }
  ]
};

export default function Formacao() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Formação e Desenvolvimento
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Educação contínua e aprimoramento profissional em múltiplas áreas
          </p>
        </div>
      </section>

      {/* Formação Artística */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="text-4xl font-bold text-orange-500">01</div>
            <h2 className="text-4xl font-bold text-charcoal">
              Formação Artística
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formation.artistica.map((course, idx) => (
              <div key={idx} className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300">
                <p className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-3">
                  {course.year}
                </p>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">
                  {course.institution}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formação Tecnológica */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="text-4xl font-bold text-orange-500">02</div>
            <h2 className="text-4xl font-bold text-charcoal">
              Formação Tecnológica
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formation.tecnologia.map((course, idx) => (
              <div key={idx} className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300">
                <p className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-3">
                  {course.year}
                </p>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">
                  {course.institution}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formação em Marketing */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="text-4xl font-bold text-orange-500">03</div>
            <h2 className="text-4xl font-bold text-charcoal">
              Formação em Marketing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formation.marketing.map((course, idx) => (
              <div key={idx} className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300">
                <p className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-3">
                  {course.year}
                </p>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">
                  {course.institution}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-16">
            Competências Principais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Criatividade e Design
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Design Gráfico e Visual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Identidade Visual e Branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Design Editorial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Direção Artística</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Fotografia e Audiovisual</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                Estratégia e Tecnologia
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Estratégia de Marca</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Marketing Digital</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">UX/UI Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Desenvolvimento Web</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span>
                  <span className="text-gray-600">Transformação Digital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
