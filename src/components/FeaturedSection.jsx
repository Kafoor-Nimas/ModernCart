import { useApp } from '../context/AppContext';
import ProductCard from './ProductCard'

const FeaturedSection = ({filteredFeatured,activeCategory,setActiveCategory}) => {

    const {  isDarkMode } = useApp();

  return (
  <section
          className="w-full px-6 py-16 max-w-[1700px] mx-auto"
          id="featured"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-1">
                Handpicked Selections
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ?"text-white":"text-slate-900"}  `}>
                Featured Products
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Exceptional craft, tested durability, and transparent pricing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["All", "Tech", "Lifestyle", "Apparel"].map((cat) => (
                <button
                  key={cat}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFeatured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
  )
}

export default FeaturedSection