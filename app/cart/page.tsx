"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, CreditCard, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { items, totalPrice, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-[#050505] font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/shop" 
            className="p-2 bg-white dark:bg-zinc-900 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tu Carrito
          </h1>
          <span className="bg-black dark:bg-white text-white dark:text-black px-2.5 py-0.5 rounded-full text-xs font-bold">
            {totalItems}
          </span>
        </div>

        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl p-16 text-center shadow-sm border border-gray-100 dark:border-zinc-800"
          >
            <div className="bg-gray-100 dark:bg-zinc-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-gray-400 dark:text-zinc-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-500 dark:text-zinc-500 mb-8 max-w-sm mx-auto">
              Parece que aún no has añadido nada a tu pedido. ¡Revisa nuestra carta y encuentra algo delicioso!
            </p>
            <Link 
              href="/shop" 
              className="inline-flex items-center bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity"
            >
              Ver la Carta
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <CartItem key={item.productId} item={item} />
                  ))}
                </AnimatePresence>
              </div>

              {/* Promo Code section */}
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Código de cupón" 
                    className="flex-1 bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                  />
                  <button className="bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                    Aplicar
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Resumen del Pedido</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500 dark:text-zinc-500">
                    <span>Subtotal</span>
                    <span className="text-gray-900 dark:text-white font-medium">S/ {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 dark:text-zinc-500">
                    <span>Envío</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">Gratis</span>
                  </div>
                  <div className="flex justify-between text-gray-500 dark:text-zinc-500">
                    <span>Impuestos (IGV)</span>
                    <span className="text-gray-900 dark:text-white font-medium">S/ {(totalPrice * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-100 dark:bg-zinc-800 my-4" />
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>S/ {(totalPrice + totalPrice * 0.18).toFixed(2)}</span>
                  </div>
                </div>

                <Link 
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-bold hover:opacity-90 transition-opacity mb-4"
                >
                  <CreditCard className="w-5 h-5" />
                  Proceder al Pago
                </Link>
                
                <p className="text-center text-xs text-gray-400 dark:text-zinc-600">
                  Pagos 100% seguros protegidos por cifrado SSL
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col items-center text-center">
                  <div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-amber-600 dark:text-amber-400 text-xs font-bold">45m</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">Entrega Rápida</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col items-center text-center">
                  <div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-2">
                    <ShoppingCart className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">Envío Gratis</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
