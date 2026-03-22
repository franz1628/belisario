"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-950">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
        style={{ backgroundImage: "url('/register_bg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black/60" />

      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Back to Home Link */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
      >
        <div className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
          <ArrowLeft size={18} />
        </div>
        <span className="text-sm font-medium tracking-wide">Volver al inicio</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 w-full max-w-md px-6 py-12 m-4"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-10">
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-4 shadow-lg shadow-red-600/20"
              >
                <LogIn className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Bienvenido de nuevo</h1>
              <p className="text-neutral-400">Ingresa a tu cuenta para continuar con tu pedido</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-300 ml-1">Correo Electrónico</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-red-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@correo.com"
                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-medium text-neutral-300">Contraseña</label>
                  <Link href="#" className="text-xs text-red-500 hover:text-red-400 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-red-500 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 bg-white/5 border-white/10 rounded text-red-600 focus:ring-red-500 focus:ring-offset-neutral-900"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-neutral-400">
                  Recordarme en este dispositivo
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group transition-all"
              >
                Iniciar Sesión
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-neutral-400">
                ¿No tienes una cuenta?{" "}
                <Link href="/register" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
