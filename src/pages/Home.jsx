import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Smartphone, Monitor, Layers, Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";

const SERVICES = [
  { icon: Smartphone, title: "تطبيقات الهواتف الذكية", desc: "تجارب جوال سريعة وموثوقة على iOS وAndroid، من واجهة المستخدم حتى البنية الخلفية." },
  { icon: Monitor, title: "منصات الويب", desc: "منصات ومواقع احترافية قابلة للتوسع، مصممة لتخدم العملاء وتدعم نمو أعمالك." },
  { icon: Layers, title: "أنظمة الشركات", desc: "أنظمة إدارة وERP وحلول داخلية توحّد العمليات والبيانات في تجربة واحدة واضحة." },
];

const WORKS = [
  { img: "/projects/orbit-pay.webp", title: "تطبيق بنكي لامركزي", cat: "Fintech App", align: "items-start" },
  { img: "/projects/hive-crm.webp", title: "نظام تحليلات وإدارة", cat: "Business Platform", align: "items-end" },
  { img: "/projects/atlas-menu.webp", title: "منصة تجارة إلكترونية", cat: "E-Commerce", align: "items-start" },
];

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const springRotateX = useSpring(rotateX, { stiffness: 260, damping: 28 });
  const springRotateY = useSpring(rotateY, { stiffness: 260, damping: 28 });

  function handleMouseMove(event) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 1000 }}
      className={className}
    >
      <div className="h-full w-full" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yWork = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const navigate = useNavigate();

  return (
    <div dir="rtl" className="overflow-hidden bg-ink text-text">
      <motion.div className="fixed inset-x-0 top-0 z-[100] h-1 origin-left bg-amber" style={{ scaleX }} aria-hidden="true" />

      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-ink">
        <div className="absolute -right-[18vw] -top-[10vw] h-[42vw] w-[42vw] rounded-full bg-amber/10 blur-[110px]" />
        <div className="absolute -bottom-[15vw] -left-[12vw] h-[38vw] w-[38vw] rounded-full bg-steel/10 blur-[110px]" />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70 blueprint-grid" />

      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:min-h-[92vh] lg:px-12 lg:pb-24">
        <motion.div style={{ opacity: opacityHero }} className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="glass-panel mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-amber-2 sm:text-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            شركة برمجيات وحلول رقمية في اليمن
          </motion.div>

          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.12] tracking-tight text-text sm:text-6xl lg:text-8xl">
            نبني كيانات رقمية
            <span className="text-gradient-amber block">تدوم وتنمو معك</span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            كيان سوفت تطوّر تطبيقات الجوال، منصات الويب، وأنظمة الشركات بعناية في التصميم والهندسة، من الفكرة الأولى حتى الإطلاق والتوسع.
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <MagneticButton onClick={() => navigate("/request")} className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm sm:text-base">
              ابدأ مشروعك
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton onClick={() => navigate("/portfolio")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface/70 px-7 text-sm font-medium text-text transition hover:border-amber-dim hover:text-amber-2 sm:text-base">
              استعرض أعمالنا
            </MagneticButton>
          </div>

          <div className="mt-11 grid w-full max-w-4xl gap-3 sm:grid-cols-3">
            {["تجربة استخدام مدروسة", "هندسة قابلة للتوسع", "دعم من الفكرة إلى الإطلاق"].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 rounded-2xl border border-line bg-surface/55 px-4 py-3 text-xs font-medium text-muted sm:text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 overflow-hidden border-y border-line bg-surface/95 py-4">
        <div className="flex w-max animate-scroll-fast items-center gap-8 whitespace-nowrap font-display text-xl font-bold text-amber-2 sm:text-2xl">
          {Array.from({ length: 8 }, (_, i) => (
            <React.Fragment key={i}>
              <span>كيان سوفت</span><span className="text-muted">•</span><span>برمجة تطبيقات</span><span className="text-muted">•</span>
              <span>منصات ويب</span><span className="text-muted">•</span><span>أنظمة شركات</span><span className="text-muted">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className="relative z-10 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-3 ltr-code text-xs text-amber">{"// services"}</p>
              <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                حلول تقنية <span className="text-gradient-amber">تخدم العمل</span> قبل أن تخدم الشكل
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-muted sm:text-base">
              نختار التقنية بما يخدم المنتج والعميل، ونبني تجربة متوازنة بين الجمال، الأداء، وسهولة الإدارة.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <TiltCard key={service.title} className="min-h-[270px]">
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface/90 p-7 transition duration-300 hover:border-amber-dim hover:bg-surface">
                    <div className="absolute inset-x-0 top-0 h-px bg-amber/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-dim/40 bg-amber/10 text-amber-2">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-text">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{service.desc}</p>
                    </div>
                  </article>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-line bg-ink/80 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 ltr-code text-xs text-amber">{"// portfolio"}</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              أعمال نصنعها <span className="text-gradient-amber">بفكر هندسي</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted sm:text-base">
              مجموعة من المنتجات والمنصات التي تمثل طريقتنا في الجمع بين التصميم، الهندسة، والنتيجة العملية.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {WORKS.map((work) => (
              <motion.div key={work.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.55 }} className={"group flex flex-col " + work.align}>
                <div className="relative w-full overflow-hidden rounded-[2rem] border border-line bg-surface lg:w-[82%]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={work.img}
                      alt={work.title + " — مشروع من كيان سوفت"}
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="750"
                      style={{ y: yWork }}
                      className="h-[112%] w-full object-cover object-center brightness-75 transition duration-700 group-hover:scale-[1.03] group-hover:brightness-100"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70" />
                </div>
                <div className="mt-5 flex w-full flex-col gap-3 px-1 sm:flex-row sm:items-center sm:justify-between lg:w-[82%]">
                  <div>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{work.title}</h3>
                    <p className="mt-1 text-xs text-muted sm:text-sm">دراسة حالة / مشروع من كيان سوفت</p>
                  </div>
                  <span className="self-start rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-2 sm:self-auto">{work.cat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-amber-dim/50 bg-surface p-8 text-center sm:p-12 lg:p-16">
          <p className="ltr-code text-xs text-amber">{"// start"}</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">لديك فكرة تستحق أن تُبنى؟</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted sm:text-base">
            أخبرنا عن مشروعك، وسنحوّل الفكرة إلى منتج رقمي واضح وقابل للتنفيذ والتوسع.
          </p>
          <MagneticButton onClick={() => navigate("/request")} className="btn-primary mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-8 text-base">
            اطلب مشروعك الآن
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
