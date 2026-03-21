import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Categories } from "@/components/home/Categories";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Navbar />
      <main className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Categorías
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explora nuestra variedad de platos organizados por categorías para que encuentres lo que más te apetece.
          </p>
        </div>
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
