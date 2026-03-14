"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "1 Pollo a la Brasa",
    price: 65.00,
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2000&auto=format&fit=crop",
    category: "Promociones",
    badge: "Más Pedido"
  },
  {
    id: 2,
    name: "1/2 Pollo a la Brasa",
    price: 36.50,
    rating: 4.8,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1999&auto=format&fit=crop",
    category: "Pollos",
    badge: "Familiar"
  },
  {
    id: 3,
    name: "1/4 de Pollo a la Brasa",
    price: 22.00,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1544378730-8b51042cc089?q=80&w=2000&auto=format&fit=crop",
    category: "Pollos"
  },
  {
    id: 4,
    name: "Porción de Papas Fritas",
    price: 15.00,
    rating: 4.6,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2069&auto=format&fit=crop",
    category: "Guarniciones",
    badge: "Crujientes"
  }
];

export function FeaturedProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Los Favoritos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Los platos más pedidos por nuestra familia. El sabor que nunca falla.
            </p>
          </div>
          <Link 
            href="/shop" 
            className="group inline-flex items-center text-sm font-semibold text-black dark:text-white transition-opacity hover:opacity-70"
          >
            Ver Toda la Carta
            <span className="block transform transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, variants }: { product: any, variants: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={variants}
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider text-black dark:text-white uppercase z-10">
            {product.badge}
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2.5 bg-white/50 hover:bg-white dark:bg-black/50 dark:hover:bg-black backdrop-blur-md rounded-full text-gray-900 dark:text-white transition-colors z-10 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick Add Overlay */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-in-out ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button className="w-full bg-black/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-black py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-black dark:hover:bg-white transition-colors shadow-lg">
            <ShoppingBag className="w-4 h-4" />
            <span>Añadir al Pedido</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 px-1">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        <Link href={`/product/${product.id}`} className="block group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-lg font-medium text-gray-900 dark:text-white mt-auto">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}
