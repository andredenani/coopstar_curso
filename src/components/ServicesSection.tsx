"use client";

import { motion } from "framer-motion";
import { Package, Truck, Map, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "moto-frete",
      title: "Serviços Moto Frete",
      description: "Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade, incluindo serviços bancários, cartórios e despachos e retiradas em aeroportos.",
      icon: <Package size={32} className="text-white" />,
      color: "bg-brand-primary"
    },
    {
      id: "delivery",
      title: "Delivery Corporativo",
      description: "Se sua empresa tem um grande volume de documentos ou encomendas leves, implantamos um serviço de delivery com o melhor custo benefício. Ideal para Farmácias, Pizzarias, Restaurantes e Auto Peças.",
      icon: <Truck size={32} className="text-white" />,
      color: "bg-orange-500"
    },
    {
      id: "fora-capital",
      title: "Fora da Capital",
      description: "Oferecemos logística eficiente e tabelas com preços exclusivos para serviços de entregas fora da capital e Grande São Paulo. Consulte-nos para saber mais.",
      icon: <Map size={32} className="text-white" />,
      color: "bg-brand-secondary"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossos Serviços</h2>
          <p className="text-lg text-gray-600">
            Soluções completas de transporte para atender a necessidade e garantir o êxito da sua empresa com máxima agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#contato" className="inline-flex items-center text-brand-primary font-semibold hover:text-orange-600 transition-colors">
                Saiba mais <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
