"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quais são as regiões de atendimento?",
      answer: "Atendemos toda a cidade de São Paulo (Capital) e municípios da Grande São Paulo."
    },
    {
      question: "Vocês funcionam de finais de semana?",
      answer: "Sim! Trabalhamos 24 horas por dia, de segunda a segunda-feira. Para horários fora do horário comercial convencional, basta realizar o agendamento prévio com nossa equipe."
    },
    {
      question: "Como funciona o Delivery para empresas?",
      answer: "Temos pacotes especiais para Farmácias, Pizzarias, Restaurantes e outras empresas que precisam de entregas recorrentes. Garantimos o melhor custo-benefício e alocação de motoboys dedicados."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos diversas formas de pagamento, incluindo faturamento mensal para empresas cadastradas, PIX e cartões. Consulte-nos para saber mais."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas rápidas sobre nossos serviços de moto frete.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-brand-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
