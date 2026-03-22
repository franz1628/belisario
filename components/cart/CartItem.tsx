"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface CartItemProps {
  item: any;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex items-center py-6 border-b border-gray-100 dark:border-gray-900 last:border-0"
    >
      {/* Product Image */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
        <Image
          src={item.imageUrl}
          alt={item.productName}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="ml-6 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.productName}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              S/ {item.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => removeItem(item.productId)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
              className="px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400 disabled:opacity-30"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center text-sm font-medium text-gray-900 dark:text-white">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
              className="px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            S/ {(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
