import { useParams, Link, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Layers } from "lucide-react"
import ProjectThumb from "../components/ProjectThumb"
import ProjectCard from "../components/ProjectCard"
import { getProjectById, projects } from "../data/projects"

const categoryLabel = { app: "تطبيق", web: "موقع ويب", system: "نظام" }

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) return <Navigate to="/portfolio" replace />

  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-5 md:px-8">
      <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-amber transition-colors">
        <ArrowRight size={14} /> الرجوع لكل الأعمال
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="px-2.5 py-1 rounded-full border border-line bg-surface text-amber">
            {categoryLabel[project.category]}
          </span>
          <span className="flex items-center gap-1"><Calendar size={13} /> {project.year}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">{project.title}</h1>
        <p className="text-muted mt-3 max-w-xl leading-7">{project.summary}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-10 rounded-2xl border border-line overflow-hidden bg-surface"
      >
        <ProjectThumb color={project.thumbColor} shape={project.thumbShape} className="w-full h-64 md:h-80" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        <div className="md:col-span-2">
          <h2 className="font-semibold text-lg mb-3">عن المشروع</h2>
          <p className="text-muted leading-8">{project.description}</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3 flex items-center gap-2"><Layers size={16} className="text-amber" /> التقنيات</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="ltr-code text-xs px-2.5 py-1.5 rounded-md bg-surface-2 text-muted border border-line">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="text-xl font-bold mb-6">مشاريع مشابهة</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
