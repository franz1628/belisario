import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans">
      <Navbar />
      <main className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Desde 1985, Belisario ha sido sinónimo de calidad y sabor en el arte del pollo a la brasa.
            Una tradición familiar que se transmite de generación en generación.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Tradición y Sabor
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Belisario nació del sueño de ofrecer el mejor pollo a la brasa de la ciudad. 
              Con una receta secreta que ha pasado por tres generaciones, nuestro compromiso 
              con la calidad nunca ha cambiado.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Cada pollo es marinado durante 24 horas con una mezcla única de especias y hierbas 
              peruanas, y cocido lentamente en brasas de leña para lograr ese sabor inconfundible.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">🍗</div>
              <p className="text-2xl font-bold text-amber-800 dark:text-amber-200">Desde 1985</p>
              <p className="text-amber-600 dark:text-amber-400">Más de 40 años de sabor</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: "🌿", title: "Ingredientes Frescos", desc: "Seleccionamos los mejores insumos cada día para garantizar la frescura de nuestros platos." },
            { icon: "🔥", title: "Cocción Artesanal", desc: "Nuestros pollos se cocinan en brasas de leña siguiendo la tradición de siempre." },
            { icon: "❤️", title: "Con Amor", desc: "Cada plato se prepara con el mismo cariño y dedicación que pondríamos para nuestra propia familia." },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-black dark:bg-white rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40+", label: "Años de experiencia" },
              { value: "500K+", label: "Clientes satisfechos" },
              { value: "3", label: "Generaciones" },
              { value: "1", label: "Receta secreta" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-white dark:text-black mb-2">{stat.value}</div>
                <div className="text-gray-400 dark:text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
