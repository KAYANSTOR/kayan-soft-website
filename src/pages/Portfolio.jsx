import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Smartphone, Globe, Server, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, categories } from "../data/projects";

const categoryIcons = { all: LayoutGrid, app: Smartphone, web: Globe, system: Server };

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div dir="rtl" className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-[#030309] text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-[20%] w-[40vw] h-[40vw] bg-[#082d24]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block glass-panel px-4 py-1.5 rounded-full text-[#54e0a5] text-sm font-bold tracking-widest uppercase mb-4 shadow-glow shadow-[#54e0a5]/20">
            أعمالنا
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            تحف <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54e0a5] to-[#d6ff3f]">فنية</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            استكشف مجموعة من أبرز المشاريع التي قمنا بصياغتها بشغف لعملائنا في مختلف القطاعات.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((c) => {
            const Icon = categoryIcons[c.id] || LayoutGrid;
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#54e0a5] to-[#54e0a5] text-white shadow-glow shadow-[#54e0a5]/30"
                    : "glass-panel text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon size={16} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/portfolio/${p.id}`} className="block">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel mb-6">
                    {/* Img Fallback if p.image is missing, we use a cool gradient */}
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover filter brightness-75 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center group-hover:scale-105 transition-all duration-700">
                        <span className="font-black text-6xl text-white/5">{p.title.charAt(0)}</span>
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#54e0a5] text-white flex items-center justify-center shadow-glow shadow-[#54e0a5]/50 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-black text-white group-hover:text-[#54e0a5] transition-colors">{p.title}</h3>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#d6ff3f] bg-[#d6ff3f]/10 px-3 py-1 rounded-full">
                        {categories.find(c => c.id === p.category)?.label || "مشاريع"}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm line-clamp-2">{p.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-xl font-medium">لم نقم بإضافة مشاريع في هذا التصنيف بعد.</p>
          </div>
        )}
      </div>
    </div>
  );
}
