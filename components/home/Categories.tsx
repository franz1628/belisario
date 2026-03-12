"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "pollos",
    name: "Pollos a la Brasa",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=3270&auto=format&fit=crop",
    link: "/shop/pollos"
  },
  {
    id: "guarniciones",
    name: "Guarniciones",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/guarniciones"
  },
  {
    id: "bebidas",
    name: "Bebidas",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=2940&auto=format&fit=crop",
    link: "/shop/bebidas"
  }
];

export function Categories() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Nuestras Especialidades
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Descubre nuestra variedad de platos preparados con los mejores ingredientes peruanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link 
                href={category.link}
                className="group relative flex h-96 md:h-[500px] w-full items-end overflow-hidden rounded-2xl bg-black"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-60"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative w-full p-8 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center text-white/80 font-medium space-x-2 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100">
                    <span>Ver Menú</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
