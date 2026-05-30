"use client";

import { motion } from "framer-motion";
import { PhoneCall, Bike, CheckCircle } from "lucide-react";

export function WorkProcessSection() {
  const steps = [
    {
      title: "Solicite a Coleta",
      description: "Entre em contato via telefone ou whatsapp e informe os endereços de coleta e entrega.",
      icon: <PhoneCall size={32} className="text-brand-primary" />,
      delay: 0.1
    },
    {
      title: "Coleta Rápida",
      description: "Nosso motoboy mais próximo é acionado e chega rapidamente ao ponto de partida.",
      icon: <Bike size={32} className="text-brand-primary" />,
      delay: 0.2
    },
    {
      title: "Entrega Garantida",
      description: "Sua encomenda chega ao destino com segurança, dentro do prazo estipulado.",
      icon: <CheckCircle size={32} className="text-brand-primary" />,
      delay: 0.3
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Como Funciona</h2>
          <p className="text-lg text-gray-600">
            Processo simples, rápido e transparente para você não perder tempo.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-4 lg:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="relative z-10 flex flex-col items-center text-center max-w-[280px]"
            >
              <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center shadow-lg mb-6 text-brand-primary">
                {step.icon}
              </div>
              <div className="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm absolute top-0 right-10 md:right-16 shadow-md border-2 border-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
