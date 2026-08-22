import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles } from "lucide-react"
import TypedCode from "../components/TypedCode"
import ProjectCard from "../components/ProjectCard"
import Logo from "../components/Logo"
import { AppIcon, WebIcon, SystemIcon } from "../components/icons/ServiceIcons"
import { projects } from "../data/projects"

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 blueprint-grid grain overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 relative grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-line bg-surface text-amber ltr-code">
              kayan-soft.online
            </span>
            <h1 className="font-display text-balance text-4xl md:text-5xl font-bold leading-[1.25] mt-5">
              نبني كيانات رقمية <span className="text-gradient-amber">تدوم</span>، لا مجرد منتجات تُطلق
            </h1>
            <p className="text-muted text-base md:text-lg leading-8 mt-5 max-w-lg">
              كيان سوفت بيت برمجي متخصص في تصميم وتطوير التطبيقات، المواقع، والأنظمة المخصصة — من أول رسمة مخطط إلى آخر سطر كود.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/request" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                اطلب مشروعك
                <ArrowLeft size={16} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-text font-medium text-sm hover:border-amber-dim transition"
              >
                شاهد أعمالنا
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center md:justify-start"
          >
            <TypedCode />
          </motion.div>
        </div>
      </section>

      {/* Services strip */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 -mt-6 md:-mt-10 relative">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { Icon: AppIcon, title: "تطبيقات", desc: "iOS و Android بتجربة استخدام سلسة" },
            { Icon: WebIcon, title: "مواقع ويب", desc: "مواقع تعريفية وتجارية سريعة وحديثة" },
            { Icon: SystemIcon, title: "أنظمة مخصصة", desc: "أنظمة داخلية تُبنى حول طريقة عملك" },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <Icon size={22} className="text-amber" />
              <h3 className="font-semibold mt-4">{title}</h3>
              <p className="text-sm text-muted mt-1.5 leading-6">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-28">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs text-amber ltr-code">
              <Sparkles size={13} /> selected work
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-2">أعمال مختارة</h2>
          </div>
          <Link to="/portfolio" className="hidden sm:flex items-center gap-1.5 text-sm text-muted hover:text-amber transition-colors">
            كل المشاريع <ArrowLeft size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <Link to="/portfolio" className="sm:hidden flex items-center gap-1.5 text-sm text-muted mt-6">
          كل المشاريع <ArrowLeft size={14} />
        </Link>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface blueprint-grid-fine p-10 md:p-14 text-center glow-amber">
          <Logo bare size={420} className="absolute -left-16 -top-16 opacity-[0.06] pointer-events-none select-none" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-balance">عندك فكرة مشروع؟ خلّينا نبنيها سوا</h2>
            <p className="text-muted mt-3 max-w-md mx-auto leading-7">
              نبدأ بجلسة تعريفية قصيرة نفهم فيها فكرتك، ونطلع بخطة تنفيذ واضحة قبل أي التزام.
            </p>
            <Link
              to="/request"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm mt-7"
            >
              اطلب مشروعك الآن
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
