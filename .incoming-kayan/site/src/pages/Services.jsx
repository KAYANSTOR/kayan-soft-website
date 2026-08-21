import { motion } from "framer-motion"
import { Smartphone, Globe, Server, Compass, Palette, LifeBuoy } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "تطبيقات جوال",
    desc: "تطبيقات iOS و Android أصلية أو متعددة المنصات، من الفكرة حتى النشر على المتاجر.",
  },
  {
    icon: Globe,
    title: "مواقع ويب",
    desc: "مواقع تعريفية وتجارية سريعة التحميل، متجاوبة بالكامل، ومبنية لمحركات البحث.",
  },
  {
    icon: Server,
    title: "أنظمة مخصصة",
    desc: "أنظمة داخلية (CRM، مخزون، محاسبة...) تُبنى حول طريقة عمل فريقك تحديدًا.",
  },
  {
    icon: Compass,
    title: "استشارات تقنية",
    desc: "مراجعة فكرة مشروعك واقتراح المسار التقني الأنسب قبل البدء بالتنفيذ.",
  },
  {
    icon: Palette,
    title: "تصميم واجهات (UI/UX)",
    desc: "تصميم تجربة استخدام واضحة، مبنية على هوية بصرية خاصة بمشروعك.",
  },
  {
    icon: LifeBuoy,
    title: "صيانة ودعم",
    desc: "متابعة ما بعد الإطلاق: تحديثات، إصلاح أعطال، وتطوير ميزات جديدة تدريجيًا.",
  },
]

const steps = [
  { title: "الاستكشاف", desc: "جلسة تعريفية نفهم فيها هدف مشروعك والمستخدمين المستهدفين." },
  { title: "التخطيط", desc: "مخطط تقني وتصميمي واضح، مع جدول زمني وتكلفة تقديرية." },
  { title: "البناء", desc: "تطوير على مراحل قابلة للمراجعة، مع تحديثات دورية معك." },
  { title: "الإطلاق والمتابعة", desc: "نشر المشروع، ثم دعم ومتابعة بعد الإطلاق مباشرة." },
]

export default function Services() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-5 md:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-xs text-amber ltr-code">// services</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">خدماتنا</h1>
        <p className="text-muted mt-3 max-w-lg leading-7">
          نغطي دورة المشروع البرمجي كاملة، من التصميم إلى التطوير والدعم بعد الإطلاق.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
            className="rounded-2xl border border-line bg-surface p-6 hover:border-amber-dim transition-colors"
          >
            <Icon size={22} className="text-amber" />
            <h3 className="font-semibold mt-4">{title}</h3>
            <p className="text-sm text-muted mt-2 leading-6">{desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8">كيف نعمل</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-line bg-surface p-6"
            >
              <span className="ltr-code text-xs text-amber-dim">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-semibold mt-3">{s.title}</h3>
              <p className="text-sm text-muted mt-2 leading-6">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
