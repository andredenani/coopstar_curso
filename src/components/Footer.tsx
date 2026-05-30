import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-secondary pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-orange-500 bg-clip-text text-transparent">
                Coopstar
              </span>
              <span className="text-2xl font-bold text-white">
                Express
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Soluções completas em moto frete e entregas rápidas na cidade de São Paulo e Grande São Paulo. Agilidade e segurança para o seu negócio.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#quem-somos" className="text-gray-400 hover:text-brand-primary transition-colors">Quem Somos</Link></li>
              <li><Link href="#servicos" className="text-gray-400 hover:text-brand-primary transition-colors">Nossos Serviços</Link></li>
              <li><Link href="#como-funciona" className="text-gray-400 hover:text-brand-primary transition-colors">Como Funciona</Link></li>
              <li><Link href="#contato" className="text-gray-400 hover:text-brand-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Av. Jurucê, 898 - Moema</p>
              <p>São Paulo - SP</p>
              <p className="pt-2">
                <a href="tel:+551150523563" className="hover:text-white transition-colors">(11) 5052-3563</a>
              </p>
              <p>
                <a href="mailto:coopstar_express@hotmail.com" className="hover:text-white transition-colors">coopstar_express@hotmail.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.</p>
          <p>
            Desenvolvimento original por <a href="http://www.estudiocriarte.com.br" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Estúdio Criarte</a>. Refatorado com 🧡.
          </p>
        </div>
      </div>
    </footer>
  );
}
