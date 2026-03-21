import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Navbar />
      <main className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Nuestra Carta
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Descubre todos nuestros platos, desde pollos a la brasa hasta deliciosas guarniciones y bebidas.
          </p>
        </div>
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
