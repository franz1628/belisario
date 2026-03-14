"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Star,
  Heart,
  Minus,
  Plus,
  ChevronLeft,
  Clock,
  Flame,
  Info,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Mock data extending what we have in FeaturedProducts
const products = [
  {
    id: "1",
    name: "1 Pollo a la Brasa",
    price: 65.00,
    rating: 4.9,
    reviews: 320,
    images: [
      "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Promociones",
    badge: "Más Pedido",
    description: "Nuestro clásico pollo a la brasa entero, marinado con la receta secreta de la casa por 24 horas y horneado lentamente a la leña. Jugoso por dentro y con una piel perfectamente crujiente.",
    prepTime: "25-30 min",
    calories: "1200 kcal",
    includes: [
      "1 Pollo a la brasa entero",
      "Porción grande de papas fritas onduladas",
      "Ensalada clásica (lechuga, tomate, zanahoria, pepino)",
      "Cremas de la casa (ají pollero, mayonesa, vinagreta)"
    ]
  },
  {
    id: "2",
    name: "1/2 Pollo a la Brasa",
    price: 36.50,
    rating: 4.8,
    reviews: 184,
    images: [
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1999&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Pollos",
    badge: "Familiar",
    description: "Medio pollo a la brasa, perfecto para compartir en pareja. Acompañado de nuestras clásicas papas crocantes y ensalada fresca.",
    prepTime: "20-25 min",
    calories: "650 kcal",
    includes: [
      "1/2 Pollo a la brasa",
      "Porción mediana de papas fritas",
      "Ensalada clásica",
      "Cremas de la casa"
    ]
  },
  {
    id: "3",
    name: "1/4 de Pollo a la Brasa",
    price: 22.00,
    rating: 4.7,
    reviews: 210,
    images: [
      "https://images.unsplash.com/photo-1544378730-8b51042cc089?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1999&auto=format&fit=crop"
    ],
    category: "Pollos",
    description: "La porción personal ideal. Un octavo de pechuga o pierna (a elección) con todo el sabor de nuestro aderezo tradicional, papitas y ensalada.",
    prepTime: "15-20 min",
    calories: "450 kcal",
    includes: [
      "1/4 de Pollo a la brasa (pechuga o pierna)",
      "Porción personal de papas fritas",
      "Ensalada personal",
      "Cremas de la casa"
    ]
  },
  {
    id: "4",
    name: "Porción de Papas Fritas",
    price: 15.00,
    rating: 4.6,
    reviews: 56,
    images: [
      "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Guarniciones",
    badge: "Crujientes",
    description: "Nuestras famosas papas fritas de corte ondulado, doradas a la perfección. Crujientes por fuera y suaves por dentro, el acompañante perfecto.",
    prepTime: "10-15 min",
    calories: "380 kcal",
    includes: [
      "Porción generosa de papas fritas",
      "Kétchup y mayonesa"
    ]
  }
];

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first product if not found

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const nextImage = () => setActiveImage(prev => (prev + 1) % product.images.length);
  const prevImage = () => setActiveImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8 pt-4">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-black dark:hover:text-white transition-colors">Menú</Link>
            <span>/</span>
            <span className="text-black dark:text-white font-medium">{product.category}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Image Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-32 lg:h-fit">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 pb-2 md:pb-0 md:pr-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-24 md:w-full md:h-32 flex-shrink-0 rounded-xl overflow-hidden ${activeImage === idx ? 'ring-2 ring-black dark:ring-white opacity-100' : 'opacity-60 hover:opacity-100'} transition-all`}
                  >
                    <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div
                className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl md:rounded-3xl bg-gray-100 dark:bg-zinc-900 overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[activeImage]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold tracking-wider text-black dark:text-white uppercase z-10 shadow-lg">
                    {product.badge}
                  </div>
                )}

                {/* Favorite Button */}
                <button className="absolute top-6 right-6 p-3 bg-white/50 hover:bg-white dark:bg-black/50 dark:hover:bg-black backdrop-blur-md rounded-full text-gray-900 dark:text-white transition-colors z-10 shadow-lg">
                  <Heart className="w-5 h-5" />
                </button>

                {/* Arrows */}
                <div className={`absolute inset-y-0 left-0 flex items-center pl-4 transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0 opacity-100'}`}>
                  <button onClick={prevImage} className="p-2 bg-white/70 hover:bg-white dark:bg-black/70 dark:hover:bg-black backdrop-blur-md rounded-full shadow-lg transition-colors text-black dark:text-white">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                </div>
                <div className={`absolute inset-y-0 right-0 flex items-center pr-4 transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0 opacity-100'}`}>
                  <button onClick={nextImage} className="p-2 bg-white/70 hover:bg-white dark:bg-black/70 dark:hover:bg-black backdrop-blur-md rounded-full shadow-lg transition-colors text-black dark:text-white">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-700'}`}
                    />
                  ))}
                  <span className="text-sm font-medium text-gray-900 dark:text-white ml-2">{product.rating}</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700">
                  {product.reviews} reseñas
                </span>
              </div>

              <div className="text-3xl font-medium text-gray-900 dark:text-white mb-8">
                S/ {product.price.toFixed(2)}
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Nutritional Info / Time */}
              <div className="flex items-center gap-6 mb-10 py-6 border-y border-gray-100 dark:border-zinc-800">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-full text-orange-600 dark:text-orange-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Preparación</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{product.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2.5 rounded-full text-red-600 dark:text-red-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Calorías</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{product.calories}</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="bg-gray-50 dark:bg-zinc-900/50 rounded-2xl p-6 mb-10 border border-gray-100 dark:border-zinc-800">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Quantity */}
                  <div className="flex items-center justify-between bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-zinc-700 p-2 sm:w-1/3">
                    <button
                      onClick={decreaseQuantity}
                      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-400 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-lg font-semibold w-12 text-center text-black dark:text-white">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-400 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Add Button */}
                  <button className="flex-1 bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-medium flex items-center justify-center space-x-3 hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors shadow-xl shadow-black/10 dark:shadow-white/10 active:scale-[0.98] duration-200">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="text-lg">Añadir al Pedido - S/ {(product.price * quantity).toFixed(2)}</span>
                  </button>
                </div>
              </div>

              {/* What's included */}
              <div>
                <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  <Info className="w-5 h-5 mr-2" />
                  ¿Qué incluye?
                </h3>
                <ul className="space-y-3">
                  {product.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black dark:bg-white mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Related Products placeholder - simple line */}
      <section className="py-20 border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            Te podría interesar
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12">
            Combina tu pedido con nuestras opciones favoritas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Just showing next 3 products logically */}
            {products.filter(p => p.id !== product.id).slice(0, 3).map(related => (
              <Link href={`/product/${related.id}`} key={related.id} className="group block text-left">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-zinc-900 shadow-sm transition-all group-hover:shadow-xl group-hover:scale-[1.02] duration-300">
                  <Image src={related.images[0]} alt={related.name} fill className="object-cover" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-gray-500 transition-colors">{related.name}</h4>
                <p className="text-gray-500 dark:text-gray-400">S/ {related.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
