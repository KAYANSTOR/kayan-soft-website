import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutGrid } from "lucide-react"
import ProjectCard from "../components/ProjectCard"
import { AppIcon, WebIcon, SystemIcon } from "../components/icons/ServiceIcons"
import { projects, categories } from "../data/projects"

const categoryIcons = { all: LayoutGrid, app: AppIcon, web: WebIcon, system: SystemIcon }

export default function Portfolio() {
  const [active, setActive] = useState("all")

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-5 md:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-xs text-amber ltr-code">// portfolio</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-2">أعمالنا</h1>
        <p className="text-muted mt-3 max-w-lg leading-7">
          مجموعة من المشاريع التي عملنا عليها — تطبيقات، مواقع، وأنظمة مخصصة لعملاء مختلفين.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mt-8">
        {categories.map((c) => {
          const Icon = categoryIcons[c.id]
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border transition-colors ${
                active === c.id
                  ? "bg-amber text-ink border-amber font-medium"
                  : "border-line text-muted hover:text-text hover:border-amber-dim"
              }`}
            >
              <Icon size={14} />
              {c.label}
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-16">لا يوجد مشاريع في هذا التصنيف بعد.</p>
      )}
    </div>
  )
}
