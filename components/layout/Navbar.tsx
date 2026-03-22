"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Carta", href: "/shop" },
    { name: "Categorías", href: "/categories" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              BELISARIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-colors hover:text-black dark:hover:text-white ${
                  isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className={`p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-gray-100"}`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-gray-100"}`}>
              <User className="w-5 h-5" />
            </button>
            <Link 
              href="/cart"
              className={`p-2 relative transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-gray-100"}`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-900 dark:text-gray-100"}`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex border-t border-gray-200 dark:border-gray-800 pt-4 pb-2 px-3 gap-4">
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <Search className="w-5 h-5 mr-2" /> Buscar
              </button>
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <User className="w-5 h-5 mr-2" /> Mi Cuenta
              </button>
              <Link 
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Carrito ({totalItems})
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
