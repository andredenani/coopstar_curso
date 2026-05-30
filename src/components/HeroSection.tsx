"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, MapPin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Motoboy profissional realizando entrega"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-secondary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/20 text-brand-primary font-semibold text-sm mb-6 border border-brand-primary/30">
              Serviços de Moto Frete 24h
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Entregas Rápidas e Seguras em <span className="text-brand-primary">São Paulo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Agilidade que o seu negócio precisa. Atuamos há mais de 9 anos no mercado, oferecendo o melhor custo-benefício para entregas e coletas na Capital e Grande São Paulo.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contato" className="bg-brand-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-primary/40 flex items-center gap-2">
                Solicitar Coleta Agora <ArrowRight size={20} />
              </a>
              <a href="#servicos" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all">
                Ver Nossos Serviços
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-primary">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Atendimento 24h</h3>
                <p className="text-gray-400 text-sm">Disponível todos os dias</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Segurança</h3>
                <p className="text-gray-400 text-sm">Mais de 9 anos de mercado</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <div className="bg-brand-primary/20 p-3 rounded-lg text-brand-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Ampla Cobertura</h3>
                <p className="text-gray-400 text-sm">Capital e Grande SP</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
