import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Sobre Page
 * Design: Modernismo Tipográfico
 * - Apresentação detalhada
 * - Abordagem multidisciplinar clara
 * - Linguagem profissional e criativa
 * - Muito espaço em branco
 */

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Me conheça melhor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Uma trajetória multidisciplinar que combina criatividade, estratégia e inovação
          </p>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-8">
                Profissional Multidisciplinar
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Com mais de 15 anos de experiência, tenho dedicado minha carreira a explorar as intersecções entre arte, design, marketing e tecnologia. Minha abordagem integrada permite criar soluções que não apenas resolvem problemas, mas também inspiram e transformam.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acredito que a criatividade, quando combinada com estratégia e conhecimento técnico, gera resultados extraordinários. Cada projeto é uma oportunidade de aprender, inovar e deixar um impacto positivo.
              </p>
            </div>
            <div className="bg-gray-100 aspect-square" />
          </div>
        </div>
      </section>

      {/* Áreas de Expertise */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-16">
            Áreas de Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Arte e Teatro */}
            <div className="pb-12 border-b md:border-b-0 md:border-r border-gray-200 md:pr-12">
              <div className="text-5xl font-bold text-orange-500 mb-4">01</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Arte e Teatro
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Direção artística, produção de montagens teatrais, instalações artísticas e projetos audiovisuais. Combino narrativa, cenografia e tecnologia para criar experiências imersivas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Direção de montagens teatrais</li>
                <li>• Produção audiovisual</li>
                <li>• Instalações artísticas</li>
                <li>• Curadoria de projetos</li>
              </ul>
            </div>

            {/* Design Gráfico */}
            <div className="pb-12 border-b md:border-b-0 border-gray-200 md:pl-12">
              <div className="text-5xl font-bold text-orange-500 mb-4">02</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Design Gráfico
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Identidade visual, design editorial, branding e design de interfaces. Crio soluções visuais que comunicam, engajam e transformam.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Identidade visual e branding</li>
                <li>• Design editorial</li>
                <li>• Design de interfaces</li>
                <li>• Guias de estilos</li>
              </ul>
            </div>

            {/* Marketing e Branding */}
            <div className="pb-12 border-b md:border-b-0 md:border-r border-gray-200 md:pr-12">
              <div className="text-5xl font-bold text-orange-500 mb-4">03</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Marketing e Branding
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Estratégia de marca, posicionamento, campanhas integradas e consultoria em transformação digital. Ajudo marcas a se conectar com seus públicos de forma autêntica.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Estratégia de marca</li>
                <li>• Campanhas integradas</li>
                <li>• Transformação digital</li>
                <li>• Consultoria estratégica</li>
              </ul>
            </div>

            {/* Tecnologia */}
            <div className="pb-12 md:border-b-0 md:pl-12">
              <div className="text-5xl font-bold text-orange-500 mb-4">04</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Tecnologia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Design e desenvolvimento de interfaces web, UX/UI, prototipagem e implementação técnica. Transformo ideias em soluções digitais funcionais e elegantes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Design e desenvolvimento web</li>
                <li>• UX/UI design</li>
                <li>• Prototipagem</li>
                <li>• Consultoria técnica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-charcoal mb-16">
            Minha Metodologia
          </h2>

          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Descoberta e Pesquisa
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Compreendo profundamente o contexto, o público e os objetivos. Pesquiso tendências, concorrentes e oportunidades para fundamentar a estratégia.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Ideação e Conceituação
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gero múltiplas ideias e conceitos, explorando diferentes abordagens. Seleciono as mais promissoras e as desenvolvo em direções estratégicas claras.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Design e Prototipagem
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transformo conceitos em designs refinados e protótipos funcionais. Itero com base em feedback, garantindo qualidade e alinhamento com objetivos.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Implementação e Lançamento
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordeno a implementação técnica, testes e lançamento. Garanto que a solução funcione perfeitamente e atinja os objetivos propostos.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Análise e Otimização
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitoro resultados, coleto feedback e otimizo continuamente. Cada projeto é uma oportunidade de aprender e melhorar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-8">
            Vamos conversar?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Estou sempre aberta a conversar sobre novos projetos, ideias e oportunidades de colaboração.
          </p>
          <a
            href="mailto:contato@larissa.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300"
          >
            Enviar mensagem
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
