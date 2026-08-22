import { motion } from "framer-motion"
import { Target, Eye, Gem } from "lucide-react"

const values = [
  { icon: Target, title: "مهمتنا", desc: "نحوّل أفكار عملائنا إلى منتجات رقمية مبنية بعناية وتدوم على المدى الطويل." },
  { icon: Eye, title: "رؤيتنا", desc: "أن نكون الشريك التقني الأول الذي تلجأ له الشركات الناشئة والصغيرة في المنطقة." },
  { icon: Gem, title: "قيمنا", desc: "شفافية في التواصل، جودة في الكود، والتزام بالمواعيد المتفق عليها." },
]

export default function About() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-5 md:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
        <span className="text-xs text-amber ltr-code">// about</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-2">من نحن</h1>
        <p className="text-muted mt-4 leading-8">
          كيان سوفت بيت برمجي صغير متخصص في بناء تطبيقات ومواقع وأنظمة مخصصة. اسمنا مأخوذ من كلمة "كيان" —
          لأننا نؤمن أن كل مشروع برمجي جيد يجب أن يكون كيانًا متكاملًا له هوية وهيكل واضح، لا مجرد شاشات
          متفرقة. نعمل مع عملائنا كشريك تقني، من أول جلسة نقاش حتى ما بعد الإطلاق.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5 mt-14">
        {values.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <Icon size={22} className="text-amber" />
            <h3 className="font-semibold mt-4">{title}</h3>
            <p className="text-sm text-muted mt-2 leading-6">{desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 rounded-3xl border border-line bg-surface blueprint-grid-fine p-10 md:p-14 glow-amber"
      >
        <h2 className="font-display text-2xl font-bold">بالأرقام</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {[
            { n: "+8", l: "مشاريع منجزة" },
            { n: "+6", l: "عملاء عملنا معهم" },
            { n: "3", l: "مجالات تخصص" },
            { n: "2023", l: "سنة الانطلاق" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold text-amber ltr-code">{s.n}</div>
              <div className="text-sm text-muted mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
