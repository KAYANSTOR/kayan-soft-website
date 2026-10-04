import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";

const values = [
  { icon: Target, title: "مهمتنا", desc: "نحوّل أفكار عملائنا إلى منتجات رقمية مبنية بعناية وتدوم على المدى الطويل.", color: "from-[#54e0a5] to-[#54e0a5]" },
  { icon: Eye, title: "رؤيتنا", desc: "أن نكون الشريك التقني الأول الذي تلجأ له الشركات في المنطقة لإحداث ثورة رقمية.", color: "from-[#d6ff3f] to-[#ff6b4a]" },
  { icon: Gem, title: "قيمنا", desc: "شفافية مطلقة، كود عالي الجودة، والتزام صارم بالمواعيد المتفق عليها.", color: "from-[#ff6b4a] to-[#ff6b4a]" },
];

export default function About() {
  return (
    <div dir="rtl" className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-[#030309] text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#082d24]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-[20%] w-[30vw] h-[30vw] bg-[#1e2b0a]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-block glass-panel px-4 py-1.5 rounded-full text-[#54e0a5] text-sm font-bold tracking-widest uppercase mb-4 shadow-glow shadow-[#54e0a5]/20">
            قصتنا
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            من <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54e0a5] to-[#54e0a5]">نحن</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            كيان سوفت هي وكالة برمجية إبداعية متخصصة في بناء تطبيقات ومواقع وأنظمة مخصصة. اسمنا مأخوذ من كلمة "كيان" —
            لأننا نؤمن أن كل مشروع برمجي ناجح يجب أن يكون كيانًا متكاملًا له هوية صلبة وهيكل ذكي، وليس مجرد شاشات متفرقة.
            نحن نعمل كشريكك التقني الموثوق، من أول جلسة عصف ذهني وحتى ما بعد الإطلاق العالمي.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {values.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:bg-white/[0.04] transition-colors duration-300 shadow-lg"
            >
              <div className={`absolute -left-10 -top-10 w-32 h-32 bg-gradient-to-br ${color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="font-black text-2xl mb-3">{title}</h3>
              <p className="text-base text-white/60 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 glass-panel rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-[#54e0a5]/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#54e0a5]/5 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">أرقام <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6ff3f] to-[#54e0a5]">نفخر بها</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: "+8", l: "مشاريع منجزة بنجاح" },
              { n: "+6", l: "شركاء نجاح (عملاء)" },
              { n: "3", l: "مجالات تخصص رئيسية" },
              { n: "2023", l: "سنة الانطلاق القوية" },
            ].map((s) => (
              <div key={s.l} className="text-center group">
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent mb-3" dir="ltr">{s.n}</div>
                <div className="text-sm font-bold text-[#54e0a5] uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
