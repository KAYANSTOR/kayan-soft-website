import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Smartphone, Monitor, Layers, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";

// --- Optimized 3D Tilt Card Component ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 1000 }}
      className={className}
    >
      <div className="w-full h-full" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

// --- Main Page ---
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const navigate = useNavigate();
  
  // Parallax Values - Optimized mapping
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div dir="rtl" className="bg-[#030309] text-white overflow-hidden selection:bg-fuchsia-600 selection:text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
        * { font-family: 'Tajawal', 'Outfit', sans-serif; }
        .text-outline { -webkit-text-stroke: 1px rgba(255,255,255,0.2); color: transparent; }
        .text-outline:hover { color: white; -webkit-text-stroke: 1px transparent; transition: 0.3s ease; }
        .glow-shadow { box-shadow: 0 0 40px -10px var(--tw-shadow-color); }
        .glass-panel { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
        
        /* Hardware accelerated marquee */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scroll 15s linear infinite;
          will-change: transform;
        }
        /* Optimize images */
        .will-change-transform { will-change: transform; }
      `}</style>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 z-[100] origin-left will-change-transform" style={{ scaleX }} />

      {/* Static Optimized Background Instead of Heavy Animated Blurs */}
      <div className="fixed inset-0 -z-20 bg-[#030309] pointer-events-none">
         {/* Using pseudo elements or static gradients is much faster than animated blurs */}
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
         <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </div>

      {/* Lightweight Grid Pattern */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 1. Ultra Hero Section - Optimized */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yText, opacity: opacityHero }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 text-center flex flex-col items-center will-change-transform">
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 glass-panel px-6 py-2 rounded-full text-sm text-cyan-300 mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            وكالة برمجيات إبداعية حائزة على جوائز
          </motion.div>

          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
              نصمم <span className="text-outline">المستقبل</span>
            </h1>
          </div>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">الرقمي</span> بحب
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10 font-light"
          >
            نحن لا نكتب أكواداً فحسب، بل نصنع تجارب رقمية تأسر القلوب وترفع من قيمة علامتك التجارية في السوق.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex gap-4">
            <MagneticButton onClick={() => navigate("/portfolio")} className="bg-gradient-to-r from-fuchsia-600 to-violet-600 px-8 py-4 rounded-full font-bold text-base shadow-lg">
              استكشف إبداعاتنا
            </MagneticButton>
            <MagneticButton onClick={() => navigate("/contact")} className="glass-panel px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-colors">
              تواصل للإستشارة
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Lightweight Scrolling Marquee using pure CSS */}
      <div className="py-6 bg-white text-black -rotate-2 scale-110 flex overflow-hidden shadow-xl z-20 relative">
        <div className="flex whitespace-nowrap gap-8 font-black text-3xl uppercase items-center animate-scroll-fast w-[200%]">
           {Array(20).fill("DIGITAL EXCELLENCE • KAYAN SOFT • CREATIVE AGENCY • ").map((text, i) => <span key={i}>{text}</span>)}
        </div>
      </div>

      {/* 2. Services - Optimized 3D Cards */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">حلول <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">خارج الصندوق</span></h2>
            </div>
            <p className="max-w-md text-white/50 text-base leading-relaxed">
              نصمم واجهات تأسر العين، ونبني أنظمة تتجاوز توقعات المستخدم، من الفكرة وحتى الإطلاق العالمي.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: <Smartphone className="w-8 h-8" />, title: "تطبيقات الهواتف الذكية", desc: "تجربة مستخدم تفاعلية فائقة السلاسة على منصات iOS و Android.", color: "from-fuchsia-500 to-rose-500", shadow: "shadow-fuchsia-500/20" },
              { icon: <Monitor className="w-8 h-8" />, title: "منصات الويب المعقدة", desc: "تطبيقات ويب متقدمة (SPA) وأنظمة سحابية باستخدام أحدث أطر العمل.", color: "from-cyan-400 to-blue-600", shadow: "shadow-cyan-500/20" },
              { icon: <Layers className="w-8 h-8" />, title: "أنظمة الإدارة (ERP)", desc: "تحول رقمي كامل لعمليات شركتك الداخلية لتوفير الوقت والجهد.", color: "from-violet-500 to-purple-700", shadow: "shadow-violet-500/20" }
            ].map((srv, i) => (
              <TiltCard key={i}>
                <div className={`glass-panel rounded-3xl p-8 h-full relative overflow-hidden group glow-shadow ${srv.shadow} hover:bg-white/[0.04] transition-colors duration-300`}>
                  {/* Subtle static gradient instead of heavy blur */}
                  <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${srv.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${srv.color} flex items-center justify-center mb-6 shadow-lg`}>
                      {srv.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-3">{srv.title}</h3>
                    <p className="text-white/60 text-base leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Portfolio Parallax - Optimized Images */}
      <section className="py-32 relative z-10 bg-[#020205]">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            تحف <span className="text-outline">فنية</span>
          </h2>
          <p className="text-lg text-white/50">تصفح أحدث الجواهر التي صغناها لعملائنا.</p>
        </div>

        <div className="flex flex-col gap-16 px-6 max-w-6xl mx-auto">
          {[
            { img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80", title: "تطبيق بنكي لامركزي", cat: "Fintech App", align: "items-start" },
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", title: "نظام تحليلات ضخم", cat: "Big Data Dashboard", align: "items-end" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", title: "منصة تجارة إلكترونية", cat: "E-Commerce", align: "items-start" },
          ].map((work, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6 }}
              className={`flex flex-col ${work.align} group cursor-pointer`}
            >
              <div className="relative w-full lg:w-[80%] h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-white/5">
                <motion.div className="w-full h-[120%] -top-[10%] will-change-transform" style={{ y: useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]) }}>
                  <img src={work.img} loading="lazy" className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500" alt={work.title} />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-24 h-24 rounded-full bg-violet-600/90 flex items-center justify-center font-bold text-sm shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
                    استكشف
                  </div>
                </div>
              </div>
              <div className="mt-6 px-2 flex justify-between items-center w-full lg:w-[80%]">
                <h3 className="text-3xl md:text-4xl font-black">{work.title}</h3>
                <span className="glass-panel px-4 py-1.5 rounded-full text-cyan-300 font-bold text-xs uppercase tracking-wider">{work.cat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Epic CTA Footer */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden min-h-[70vh] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center flex-1 flex flex-col justify-center items-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              مستعد <br/> <span className="text-outline hover:text-white transition-all duration-300">للإنطلاق؟</span>
            </h2>
          </motion.div>
          <p className="text-lg text-white/60 mb-10 max-w-xl">لا تدع أفكارك العظيمة تنتظر. دعنا نبني لك المنصة التي ستقود سوقك وتذهل منافسيك.</p>
          <MagneticButton onClick={() => navigate("/request")} className="bg-white text-black px-12 py-5 rounded-full font-black text-xl shadow-lg hover:scale-105 transition-transform duration-200">
            ابدأ مشروعك الآن
          </MagneticButton>
        </div>
      </section>

    </div>
  );
}
