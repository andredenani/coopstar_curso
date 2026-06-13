"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "273ac027-9533-4e99-94fe-1f7a7c947b63");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setStatusMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Erro de conexão. Verifique sua rede e tente novamente.");
    }
  };

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
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input type="text" id="nome" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="text" id="telefone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="mensagem" name="message" required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                </div>
                
                {statusMessage && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${status === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                    {statusMessage}
                  </div>
                )}

                <button type="submit" disabled={status === "submitting"} className="w-full bg-brand-primary hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2">
                  {status === "submitting" ? "Enviando..." : "Enviar Mensagem"}
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
