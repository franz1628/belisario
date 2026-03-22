"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, Star } from "lucide-react";

const locales = [
  {
    id: 1,
    nombre: "Belisario - Surco",
    direccion: "Av. El Polo 740, Santiago de Surco",
    distrito: "Surco",
    horario: "Lun - Dom: 12:00 PM - 11:00 PM",
    telefono: "(01) 611-3000",
    imagen: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
  },
  {
    id: 2,
    nombre: "Belisario - Miraflores",
    direccion: "Av. Commandante Espinar 240, Miraflores",
    distrito: "Miraflores",
    horario: "Lun - Dom: 12:00 PM - 11:30 PM",
    telefono: "(01) 611-3001",
    imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
  },
  {
    id: 3,
    nombre: "Belisario - San Borja",
    direccion: "Av. Aviación 2540, San Borja",
    distrito: "San Borja",
    horario: "Lun - Dom: 12:00 PM - 11:00 PM",
    telefono: "(01) 611-3002",
    imagen: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    rating: 4.6,
  },
  {
    id: 4,
    nombre: "Belisario - Plaza Norte",
    direccion: "C.C. Plaza Norte, Planta Baja, Independencia",
    distrito: "Independencia",
    horario: "Lun - Dom: 11:30 AM - 10:30 PM",
    telefono: "(01) 611-3003",
    imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
  },
];

export default function LocalesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden mb-16">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center grayscale shadow-inner"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')" }}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              NUESTROS LOCALES
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Donde el sabor se encuentra con la familia. Ven a visitarnos en cualquiera de nuestras sedes.
            </p>
          </motion.div>
        </section>

        {/* Locales Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {locales.map((local, index) => (
              <motion.div
                key={local.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 hover:border-red-500/50 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side */}
                  <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={local.imagen} 
                      alt={local.nombre}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-black dark:text-white flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 text-red-600 fill-current" />
                      {local.rating}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-red-600 font-bold text-xs tracking-widest uppercase mb-2 block">
                        {local.distrito}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-red-600 transition-colors">
                        {local.nombre}
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {local.direccion}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {local.horario}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                            {local.telefono}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                      <button className="flex-1 bg-red-600 hover:bg-black text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn">
                        <Navigation className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                        Ver en Mapa
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
