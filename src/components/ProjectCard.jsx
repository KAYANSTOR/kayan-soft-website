import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpLeft } from "lucide-react"
import ProjectThumb from "./ProjectThumb"

const categoryLabel = { app: "تطبيق", web: "موقع ويب", system: "نظام" }

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
    >
      <Link
        to={`/portfolio/${project.id}`}
        className="group block rounded-2xl border border-line bg-surface overflow-hidden hover:border-amber-dim transition-colors"
      >
        <div className="relative overflow-hidden">
          <ProjectThumb
            color={project.thumbColor}
            shape={project.thumbShape}
            className="w-full h-40 md:h-44 transition-transform duration-500 group-hover:scale-[1.06]"
          />
          <span className="absolute top-3 right-3 text-[11px] px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur border border-line text-muted">
            {categoryLabel[project.category]}
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-text">{project.title}</h3>
            <ArrowUpLeft size={16} className="text-amber shrink-0 mt-1 -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </div>
          <p className="text-sm text-muted mt-2 leading-6 line-clamp-2">{project.summary}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.slice(0, 3).map((s) => (
              <span key={s} className="ltr-code text-[10.5px] px-2 py-1 rounded-md bg-surface-2 text-muted border border-line">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
