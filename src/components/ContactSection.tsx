"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contato e Localização</h2>
          <p className="text-lg text-gray-600">
            Fale conosco agora mesmo para solicitar uma coleta ou tirar dúvidas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Formulário (Design Atualizado) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma mensagem</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input type="text" id="nome" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="text" id="telefone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="mensagem" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-md">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* Info Contato */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary mt-1">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Av. Jurucê, 898 - Moema<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary mt-1">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Telefones</h4>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="tel:+551150523563" className="hover:text-brand-primary transition-colors">(11) 5052-3563</a><br />
                    <a href="tel:+551150514442" className="hover:text-brand-primary transition-colors">(11) 5051-4442</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary mt-1">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">E-mail</h4>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="mailto:coopstar_express@hotmail.com" className="hover:text-brand-primary transition-colors">coopstar_express@hotmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary mt-1">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-600 leading-relaxed">
                    24 Horas<br />
                    Segunda a Segunda-feira (com agendamento)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
