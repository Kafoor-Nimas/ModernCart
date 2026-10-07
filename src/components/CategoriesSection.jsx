import { useApp } from "../context/AppContext";

const CATEGORIES = [
  {
    title: "Electronics",
    count: "140+ items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBosIl29gsjHmncl_hBc-ZHXvauYIcUhMKk3G8dKDXj6oXUVgOvVlWXeI-M8K5ORqnzb8d5yz3mICtDapLWRa_W9q73Q5hfd7EwLyXbcKi5L7yv-PVDBnHk4I2970efWgdc8J6McaIz7lzH-obGijbippSYjDplpoKq7TsIFVLKuIfKsOSD6_lomNeZl6WAMrsJg0Y70Q8CHBxd1BGAwyV0--FijWSMI6UnOX4s4J88rY4kGFkWTRut",
    filterKey: "Tech",
  },
  {
    title: "Fashion & Apparel",
    count: "320+ items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMmZ_2sFaAqQnizyrK8tFymJi_iymkZGr9xfEsfDartDjXL1KkVv7iwUlxOFpiUYbbezjd7Ub95ctHbTG__j0C55Of-42x9zJv7uImpHC7A04XRG6y9feB1FIpPFDMYkHfd7Fcv9TdvmP1Jqc7ogAIH8xW9QpJAQsQ6P8cPti60cHiYDT9DJdujIOLjvVGCr869fMl868kz-C8h0V1Hbbc0UsajHMGrQ50wxX9iiXWUgfN4d8z3aiK",
    filterKey: "Apparel",
  },
  {
    title: "Beauty & Care",
    count: "95 items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFVMGO88wlAmPnzl9BFtizk0SF_3gMrij5vr0Ul9M4gzvw9Gw5dxzZBXnM4st3LGRkhK44GVutKkF1LSwpghcLK4f2oVeg9geekl5W9YC8M_uDAlmtE6hybmXza0yu4aTimKQqWA7fPzGrxeJE6Gm6g3zg_TK08tsEugAbUFdEzTBQT_T3JS6UZdhh3cE6hK1gHMelsIiYb71WGc4ITW2uZjxzSs56VpzieXVcNtbs40BXQzdQnlAs",
    filterKey: "Lifestyle",
  },
  {
    title: "Home & Living",
    count: "210+ items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBd9ZahxjYdYoK0jLqhPTGyfTuXTRXXRnTCILA1O0c83OBtSQMI0SC-NWxlMtHA5DKvJ-iS8F7bmcaClD2nQxETbFhCiT6HcwxWcEtQoXGYm3txEhS2U-dHPN0_vjUUecu-02TfFC427ZS6tB2pTiAFe_CHCG5vBcy5U2ueyaRMojLVA9sA4j1BlGVQQ0j-9kv-HdBfHQ8nLo2MJky131y69qJCg5DtFDAzYtTivNXPKYlaQuTzuzmk",
    filterKey: "Lifestyle",
  },
  {
    title: "Sports & Fitness",
    count: "85 items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBynwNhbCj2nnCegoAWMTayXiqeyM_wBZdUolNMW0kaGavnXu_IkuHc5LY9_U7drR40nltVOD6rZFkCchk6pGLUChnspEPmZChtVlFNsluxnJK6JB6GaBZghuRoEMpQmjiNK7znAFzLJvuZUfA6POmlA81BBC7GvXhfYn9q0k7cOmHQW-aSrxC-PZxKURt1jBmAZWPTyvFsRLLgFAqbvURTqCGfTALTgVFtpEXu2o1ozOMeP_oxr5I-",
    filterKey: "Lifestyle",
  },
  {
    title: "Accessories",
    count: "170 items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUE7tXA2lNwMJtGWpbuTFsCdjtFlSb_jIW9rjnNx1ysnaOK9Vkzhe8myUnCsUZpaOn-fKP9840Z8_CRUU9PQ60EC0AAeoFPrk52UpfpQmb_UAwsJffPkDWFFA5LpvDNBOT3hxc0P6VN8Y-8Y3EtzYT9Nv9lswQKV-AW57QlqT4giiSG5j5w_iro85PTwR9Ob1Qf3Bw9gqXa1A7cQjEjmG6ZkZjmqdH_d2JcfmzX6X2FphnsrRcP18B",
    filterKey: "Lifestyle",
  },
];

export default function CategoriesSection({ onSelectCategory }) {
  const { isDarkMode } = useApp();

  return (
    <section className="w-full px-6 py-12 max-w-[1700px] mx-auto" id="categories">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div
            className="text-xs font-semibold tracking-wider uppercase mb-1"
            style={{ color: isDarkMode ? "#60A5FA" : "#2563EB" }}
          >
            Curated Catalog
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold ${
              isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
            }`}
          >
            Browse by Category
          </h2>
        </div>
        <a
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group"
          href="#featured"
          style={{ color: isDarkMode ? "#60A5FA" : "#2563EB" }}
        >
          <span>View all 18 departments</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            east
          </span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat, idx) => (
          <a
            key={idx}
            className={`group rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3 ${
              isDarkMode
                ? "bg-[#1E293B] border border-[#334155]"
                : "bg-white border border-slate-100"
            }`}
            href="#featured"
            onClick={() => onSelectCategory && onSelectCategory(cat.filterKey)}
          >
            <div
              className={`relative w-full aspect-square rounded-xl overflow-hidden ${
                isDarkMode ? "bg-[#0F172A]" : "bg-slate-100"
              }`}
            >
              <img
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                src={cat.image}
              />
            </div>
            <div className="px-1 pb-1">
              <h3
                className={`text-base font-semibold group-hover:text-blue-600 transition-colors leading-tight ${
                  isDarkMode ? "text-[#F8FAFC]" : "text-slate-900"
                }`}
              >
                {cat.title}
              </h3>
              <span className="inline-block mt-1 text-xs" style={{ color: "#94A3B8" }}>
                {cat.count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}