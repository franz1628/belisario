"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              BELISARIO
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              El mejor pollo a la brasa y parrillas. Disfruta de una experiencia inolvidable con la familia y amigos.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Nuestra Carta</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/shop/promos" className="hover:text-black dark:hover:text-white transition-colors">Promociones</Link></li>
              <li><Link href="/shop/pollos" className="hover:text-black dark:hover:text-white transition-colors">Pollos a la Brasa</Link></li>
              <li><Link href="/shop/parrillas" className="hover:text-black dark:hover:text-white transition-colors">Parrillas</Link></li>
              <li><Link href="/shop/guarniciones" className="hover:text-black dark:hover:text-white transition-colors">Guarniciones</Link></li>
              <li><Link href="/shop/bebidas" className="hover:text-red-500 transition-colors">Bebidas</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Soporte</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/faq" className="hover:text-black dark:hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/shipping" className="hover:text-black dark:hover:text-white transition-colors">Zonas de Reparto</Link></li>
              <li><Link href="/tracking" className="hover:text-black dark:hover:text-white transition-colors">Rastrear Pedido</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contáctanos</Link></li>
              <li><Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Políticas de Privacidad</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Suscríbete</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Suscríbete para recibir promociones exclusivas y descuentos especiales.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} Belisario. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-500">
            <span>Powered by Next.js</span>
            <span className="hidden sm:inline">&bull;</span>
            <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
