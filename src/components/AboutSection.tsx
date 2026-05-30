import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const benefits = [
    "Mais de 9 anos de atuação no mercado.",
    "Equipe especializada e altamente qualificada.",
    "Agilidade e segurança no transporte.",
    "Foco no melhor custo-benefício para o cliente.",
  ];

  return (
    <section id="quem-somos" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/hero.png" // Reusing hero image or another placeholder
                alt="Equipe Coopstar Express"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-4xl font-bold block">9+</span>
                  <span className="text-lg">Anos de Experiência</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6">
              Quem Somos
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              A <strong className="text-brand-primary">Coopstar Express</strong> é uma empresa especializada no serviço de entregas e coletas que já vem atuando há mais de nove anos no mercado.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Oferecemos ótimos serviços e desempenhamos uma função importante para nossos clientes: agilizar os mais diversos serviços, tornando-nos uma empresa de destaque neste segmento. Atendemos em São Paulo (Capital) e Grande São Paulo.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg"
            >
              Fale com um Representante
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
