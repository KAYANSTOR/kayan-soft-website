import { motion } from "framer-motion";
import { Compass, Palette, LifeBuoy, Smartphone, Globe, Server } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "تطبيقات جوال",
    desc: "تطبيقات iOS و Android أصلية أو متعددة المنصات، بتجربة مستخدم مذهلة من الفكرة حتى النشر على المتاجر.",
    color: "from-fuchsia-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "مواقع ويب",
    desc: "مواقع تعريفية وتجارية فائقة السرعة، متجاوبة بالكامل، ومبنية لمحركات البحث باستخدام أحدث التقنيات.",
    color: "from-cyan-400 to-blue-600"
  },
  {
    icon: Server,
    title: "أنظمة مخصصة",
    desc: "أنظمة داخلية (CRM، مخزون، سحابية) تُبنى خصيصاً لتواكب طريقة عمل فريقك تحديداً بدقة متناهية.",
    color: "from-violet-500 to-purple-700"
  },
  {
    icon: Compass,
    title: "استشارات تقنية",
    desc: "مراجعة فكرة مشروعك واقتراح المسار التقني الأنسب والأكثر أماناً قبل البدء بالتنفيذ وإهدار الموارد.",
    color: "from-amber-400 to-orange-500"
  },
  {
    icon: Palette,
    title: "تصميم واجهات (UI/UX)",
    desc: "تصميم تجربة استخدام واضحة ومبهرة، مبنية على هوية بصرية خاصة بمشروعك تجذب العملاء.",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: LifeBuoy,
    title: "صيانة ودعم",
    desc: "متابعة مستمرة ما بعد الإطلاق: تحديثات أمنية، إصلاح أعطال، وتطوير ميزات جديدة تدريجياً بثقة.",
    color: "from-blue-400 to-indigo-500"
  },
];

const steps = [
  { title: "الاستكشاف", desc: "جلسة عصف ذهني معمقة نفهم فيها هدف مشروعك الاستراتيجي والمستخدمين المستهدفين بدقة." },
  { title: "التخطيط", desc: "مخطط تقني وتصميمي شامل، مع جدول زمني دقيق وتكلفة تقديرية شفافة تماماً." },
  { title: "البناء والتطوير", desc: "تطوير تفاعلي على مراحل قابلة للمراجعة، لتبقى على اطلاع تام بتقدم مشروعك." },
  { title: "الإطلاق والمتابعة", desc: "نشر المشروع بأعلى معايير الجودة، ثم دعم فني متواصل لضمان استقرار النظام." },
];

export default function Services() {
  return (
    <div dir="rtl" className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-[#030309] text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block glass-panel px-4 py-1.5 rounded-full text-fuchsia-400 text-sm font-bold tracking-widest uppercase mb-4 shadow-glow shadow-fuchsia-500/20">
            ماذا نقدم
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            خدماتنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">الرقمية</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            نغطي دورة حياة المشروع البرمجي بالكامل، من رسم الفكرة المبدئية إلى التطوير المعقد وحتى الدعم الفني بعد الإطلاق المدوّي.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
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
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">آلية <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">العمل</span></h2>
            <p className="text-white/50">خطوات واضحة ومدروسة لضمان نجاح مشروعك من الصفر.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative glass-panel rounded-3xl p-8 border-t-2 border-t-cyan-500/30"
              >
                <div className="absolute -top-5 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  {i + 1}
                </div>
                <h3 className="font-black text-xl mt-4 mb-3">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
