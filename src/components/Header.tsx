"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-orange-500 bg-clip-text text-transparent">
            Coopstar
          </span>
          <span className={`text-2xl font-bold ${isScrolled ? "text-brand-secondary" : "text-white"}`}>
            Express
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                isScrolled ? "text-gray-600" : "text-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+551150523563"
            className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30"
          >
            <PhoneCall size={18} />
            <span>(11) 5052-3563</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-secondary p-2 bg-white rounded-md shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 font-medium p-2 hover:bg-gray-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+551150523563"
            className="flex justify-center items-center gap-2 bg-brand-primary text-white p-3 rounded-md font-medium"
          >
            <PhoneCall size={18} />
            <span>(11) 5052-3563</span>
          </a>
        </motion.div>
      )}
    </header>
  );
}
