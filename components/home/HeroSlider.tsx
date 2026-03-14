"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=3270&auto=format&fit=crop",
    title: "El Mejor Pollo a la Brasa",
    subtitle: "Disfruta del verdadero sabor peruano con nuestras crujientes papas fritas y cremas artesanales.",
    buttonText: "Pedir Ahora",
    buttonLink: "/shop/pollos",
    position: "left"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=3270&auto=format&fit=crop",
    title: "Ensaladas Frescas",
    subtitle: "Acompaña tu pedido con nuestras opciones saludables preparadas al instante.",
    buttonText: "Ver Opciones",
    buttonLink: "/shop/ensaladas",
    position: "center"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=3224&auto=format&fit=crop",
    title: "Momentos en Familia",
    subtitle: "Ven y comparte nuestros generosos combos en nuestro acogedor local.",
    buttonText: "Ver Carta",
    buttonLink: "/shop/combos",
    position: "right"
  }
];

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial state
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden group">
      <div className="absolute inset-0 max-w-none" ref={emblaRef}>
        <div className="flex h-full w-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-end pb-32">
                <AnimatePresence mode="wait">
                  {currentIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`max-w-xl ${
                        slide.position === 'center' ? 'mx-auto text-center' :
                        slide.position === 'right' ? 'ml-auto text-right' : 'text-left'
                      }`}
                    >
                      <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4"
                      >
                        {slide.title}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-white/90 text-lg md:text-xl font-medium mb-8 max-w-md"
                        style={{
                           marginLeft: slide.position === 'center' || slide.position === 'right' ? 'auto' : '0',
                           marginRight: slide.position === 'center' || slide.position === 'left' ? 'auto' : '0',
                        }}
                      >
                        {slide.subtitle}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                      >
                        <a 
                          href={slide.buttonLink}
                          className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors group/btn"
                        >
                          <span>{slide.buttonText}</span>
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? "w-8 h-2.5 bg-white" 
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
