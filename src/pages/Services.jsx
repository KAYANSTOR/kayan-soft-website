import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  Check,
  Code2,
  Globe2,
  Headphones,
  Layers3,
  Megaphone,
  Palette,
  PlugZap,
  RefreshCw,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "../data/contact";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "تطوير المواقع والمنصات الرقمية",
    desc: "نبني واجهات سريعة ومقنعة، ومنصات رقمية تجعل رحلة العميل أسهل وتمنح نشاطك حضورًا يليق به.",
    points: ["مواقع الشركات والمؤسسات", "المواقع التجارية والخدمية", "المنصات وبوابات العملاء", "الحجز والطلبات والتجارب المتجاوبة"],
    accent: "from-cyan-400 to-blue-600",
    tint: "text-cyan-300",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "تطوير تطبيقات الجوال",
    desc: "نحوّل فكرة التطبيق إلى تجربة عملية قابلة للاستخدام والنمو على Android و iOS.",
    points: ["تطبيقات Android و iOS", "تطبيقات الخدمات والأعمال", "المتاجر والحجوزات", "ربط التطبيقات بالأنظمة والخدمات الخارجية"],
    accent: "from-fuchsia-400 to-rose-500",
    tint: "text-fuchsia-300",
  },
  {
    number: "03",
    icon: Code2,
    title: "تطوير الأنظمة والبرمجيات",
    desc: "حلول مخصصة تنظّم عملياتك وتمنح فريقك صورة أوضح وتحكمًا أكبر في العمل اليومي.",
    points: ["الأنظمة الإدارية وإدارة الأعمال", "المبيعات والمخزون", "CRM والموارد البشرية", "الحسابات والتقارير والبرمجيات الخاصة"],
    accent: "from-violet-400 to-purple-700",
    tint: "text-violet-300",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "المتاجر الإلكترونية",
    desc: "من الواجهة إلى الدفع والشحن، نجهّز متجرًا يسهّل البيع ويصنع تجربة شراء موثوقة.",
    points: ["إنشاء وتصميم المتجر", "المنتجات والتصنيفات", "الطلبات والعملاء", "الدفع والشحن وربط خدمات الطرف الثالث"],
    accent: "from-amber-300 to-orange-600",
    tint: "text-amber-300",
  },
  {
    number: "05",
    icon: Bot,
    title: "حلول الذكاء الاصطناعي",
    desc: "نضع الذكاء الاصطناعي في المكان الذي يصنع فرقًا حقيقيًا: خدمة أسرع، قرارات أذكى، وعمليات أكثر كفاءة.",
    points: ["المساعدات والوكلاء الأذكياء", "روبوتات المحادثة وخدمة العملاء", "معالجة وتحليل البيانات", "دمج الذكاء الاصطناعي في منتجاتك"],
    accent: "from-emerald-300 to-teal-600",
    tint: "text-emerald-300",
  },
  {
    number: "06",
    icon: Megaphone,
    title: "التسويق الرقمي والإعلانات",
    desc: "نربط حضورك الرقمي بأهداف واضحة: محتوى أفضل، وصول أدق، وفرص أكثر للتحويل والنمو.",
    points: ["إدارة Facebook وInstagram وTikTok وSnapchat", "صناعة المحتوى والتصاميم والفيديوهات القصيرة", "Google وMeta وTikTok وSnapchat Ads", "SEO والظهور المحلي وGoogle Business Profile"],
    accent: "from-pink-400 to-fuchsia-600",
    tint: "text-pink-300",
  },
  {
    number: "07",
    icon: Palette,
    title: "الهوية والتصميم الرقمي",
    desc: "هوية متناسقة تعكس شخصية علامتك، من الشعار والألوان حتى آخر شاشة يراها عميلك.",
    points: ["تصميم الشعارات والهوية البصرية", "الألوان والخطوط والمواد الإعلانية", "تصاميم وسائل التواصل", "واجهات المواقع والتطبيقات UI/UX"],
    accent: "from-orange-300 to-red-500",
    tint: "text-orange-300",
  },
  {
    number: "08",
    icon: PlugZap,
    title: "التكامل والربط بين الأنظمة",
    desc: "نوصل أدواتك ببعضها حتى تنتقل البيانات بسلاسة ويقل العمل اليدوي والأخطاء المتكررة.",
    points: ["ربط الأنظمة والمنصات عبر APIs", "الدفع والشحن والرسائل", "WhatsApp Business وخدمات Google", "منصات التواصل وخدمات الذكاء الاصطناعي"],
    accent: "from-blue-300 to-indigo-600",
    tint: "text-blue-300",
  },
  {
    number: "09",
    icon: Workflow,
    title: "الأتمتة والتحول الرقمي",
    desc: "نحلل طريقة عملك ونحوّل العمليات التقليدية إلى مسارات رقمية أسرع وأكثر تنظيمًا.",
    points: ["تحليل العمليات الحالية", "تحديد فرص الأتمتة", "تقليل الوقت والجهد والأخطاء", "تحسين تجربة العميل وسير العمل"],
    accent: "from-lime-300 to-green-600",
    tint: "text-lime-300",
  },
  {
    number: "10",
    icon: Headphones,
    title: "الدعم والتطوير المستمر",
    desc: "لا ينتهي العمل عند الإطلاق؛ نبقى معك لنحافظ على الاستقرار ونطوّر الحل مع نمو أعمالك.",
    points: ["الدعم الفني والصيانة", "إصلاح المشاكل والتحديثات", "تحسين الأداء والحماية", "النسخ الاحتياطي والميزات الجديدة"],
    accent: "from-sky-300 to-cyan-600",
    tint: "text-sky-300",
  },
];

const process = [
  { icon: Search, step: "01", title: "نفهم الصورة كاملة", desc: "نستمع إلى أهدافك وتحدياتك ونحدد ما الذي سيصنع أكبر أثر." },
  { icon: Layers3, step: "02", title: "نرسم الحل بوضوح", desc: "نحوّل الاحتياج إلى نطاق عمل، تجربة، وأولويات قابلة للتنفيذ." },
  { icon: Sparkles, step: "03", title: "نبني ونطلق بعناية", desc: "تطوير متدرج ومراجعات مستمرة حتى تخرج النتيجة كما ينبغي." },
  { icon: RefreshCw, step: "04", title: "نطوّر معك", desc: "دعم وتحسين مستمر حتى يظل الحل مناسبًا لنمو عملك." },
];

const whatsappMessage = "مرحبًا كيان سوفت 👋\nأرغب في الاستفسار عن خدماتكم الرقمية.";

export default function Services() {
  return (
    <div dir="rtl" className="relative min-h-screen overflow-hidden bg-[#030309] px-6 pb-24 pt-32 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_35%,#000_65%,transparent_100%)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute right-[-12vw] top-20 h-[42vw] w-[42vw] rounded-full bg-fuchsia-900/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-12vw] h-[42vw] w-[42vw] rounded-full bg-cyan-900/15 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="grid gap-10 pb-20 pt-4 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-sm font-bold text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_#67e8f9]" />
              حلول رقمية من الفكرة إلى النمو
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight md:text-7xl">
              كل ما يحتاجه عملك
              <span className="block bg-gradient-to-l from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">ليظهر، يعمل، وينمو.</span>
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-9 text-white/55 md:text-xl">
              في كيان سوفت نجمع التقنية والتصميم والتسويق والحلول الذكية في مكان واحد، لنحوّل احتياجك إلى منتج رقمي عملي يحقق أثرًا ملموسًا.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/request" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 active:scale-[.97]">
                ابدأ مشروعك
                <ArrowLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </Link>
              <a href={buildWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-bold text-white transition-colors duration-200 hover:border-cyan-300/50 hover:bg-cyan-300/[0.08] active:scale-[.97]">
                تحدث مع فريقنا
              </a>
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {[
            ["10", "مجالات متكاملة"],
            ["360°", "رؤية للمشروع"],
            ["01", "فريق واحد"],
            ["∞", "مساحة للنمو"],
          ].map(([value, label]) => (
            <div key={label} className="bg-[#080811]/90 px-5 py-6 text-center sm:px-7 sm:text-right">
              <div className="text-3xl font-black text-white md:text-4xl">{value}</div>
              <div className="mt-1 text-sm text-white/45">{label}</div>
            </div>
          ))}
        </motion.div>

        <section aria-labelledby="services-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-300">ماذا نقدم</p>
              <h2 id="services-heading" className="text-3xl font-black md:text-5xl">خدمات مصممة حول احتياجك</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/45">اختر نقطة البداية، وسنساعدك على جمع القطع في حل واحد متماسك.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ number, icon: Icon, title, desc, points, accent, tint }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.065]"
              >
                <div className={`pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-[0.09] blur-2xl transition-opacity duration-300 group-hover:opacity-20`} />
                <div className="relative flex items-start justify-between gap-5">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg`}>
                    <Icon size={25} className="text-white" strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-sm font-bold text-white/25">{number}</span>
                </div>
                <h3 className="relative mt-7 text-2xl font-black leading-snug">{title}</h3>
                <p className="relative mt-3 min-h-[5.5rem] text-[15px] leading-8 text-white/55">{desc}</p>
                <ul className="relative mt-5 space-y-3 border-t border-white/10 pt-5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-white/70">
                      <Check size={16} className={`mt-1 shrink-0 ${tint}`} strokeWidth={2.5} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-28" aria-labelledby="process-heading">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">كيف نعمل</p>
            <h2 id="process-heading" className="text-3xl font-black md:text-5xl">خطوات واضحة. نتيجة تستحق.</h2>
            <p className="mt-4 leading-8 text-white/50">نقلل التعقيد عنك، ونبقي كل مرحلة مفهومة وقابلة للمراجعة حتى تصل فكرتك إلى المكان الصحيح.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, step, title, desc }, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-[#080811]/80 p-6"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300"><Icon size={20} /></div>
                  <span className="font-mono text-xs text-white/25">{step}</span>
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-28 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/[0.12] via-white/[0.04] to-fuchsia-500/[0.12] p-8 md:p-12"
        >
          <BarChart3 className="pointer-events-none absolute -left-5 -top-7 h-48 w-48 rotate-12 text-cyan-300/[0.08]" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold text-cyan-300">لديك فكرة أو مشروع قائم؟</p>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">خلّنا نكتشف معًا أفضل خطوة تالية.</h2>
              <p className="mt-4 leading-8 text-white/55">أرسل لنا احتياجك، وسنساعدك على اختيار الحل المناسب من البداية حتى الإطلاق.</p>
            </div>
            <Link to="/request" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-black text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 active:scale-[.97]">
              اطلب خدمة
              <ArrowLeft size={19} className="transition-transform duration-200 group-hover:-translate-x-1" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
