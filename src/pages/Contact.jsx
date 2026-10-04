import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

const WHATSAPP_NUMBER = "967773303455";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("تطبيق جوال");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("الرجاء ملء الاسم والرسالة على الأقل لبدء المحادثة");
      return;
    }
    setError("");
    const text = [
      "مرحبًا كيان سوفت 👋",
      `الاسم: ${name}`,
      email && `البريد: ${email}`,
      `نوع المشروع: ${projectType}`,
      "",
      message,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div dir="rtl" className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-[#030309] text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#35150f]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-[#1e2b0a]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-16">
          <span className="inline-block glass-panel px-4 py-1.5 rounded-full text-[#d6ff3f] text-sm font-bold tracking-widest uppercase mb-4 shadow-glow shadow-[#d6ff3f]/20">
            تواصل معنا
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            لنجعل أفكارك <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54e0a5] to-[#d6ff3f]">واقعاً ملموساً</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            نحن هنا لنستمع إلى كل تفاصيل فكرتك. أرسل لنا رسالة وسنرد عليك خلال يوم عمل واحد لبدء رحلة النجاح معاً.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.form
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-panel p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-black/50"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                  <CheckCircle2 size={80} className="text-[#54e0a5] mb-4" />
                </motion.div>
                <h3 className="font-black text-3xl">تم فتح واتساب برسالتك</h3>
                <p className="text-lg text-white/50">قم بإرسال الرسالة من تطبيق واتساب الخاص بك، وسنرد عليك فوراً.</p>
                <button type="button" onClick={() => setSent(false)} className="text-[#54e0a5] hover:text-white transition-colors border-b border-[#54e0a5] hover:border-white mt-4">
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="الاسم الكامل" value={name} onChange={setName} placeholder="أدخل اسمك" />
                  <Field label="البريد الإلكتروني (اختياري)" value={email} onChange={setEmail} placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block font-medium">ما هو نوع المشروع؟</label>
                  <select
                    value={projectType} onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#d6ff3f] transition-all appearance-none"
                  >
                    <option className="bg-[#030309]">تطبيق جوال</option>
                    <option className="bg-[#030309]">موقع ويب</option>
                    <option className="bg-[#030309]">نظام مخصص</option>
                    <option className="bg-[#030309]">غير متأكد بعد</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block font-medium">رسالتك إلينا</label>
                  <textarea
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    rows={5} placeholder="كيف يمكننا مساعدتك..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#d6ff3f] focus:bg-white/10 transition-all resize-none"
                  />
                </div>
                {error && <p className="text-xs text-[#ff9a83]">{error}</p>}
                <div className="pt-4">
                  <MagneticButton type="submit" className="bg-gradient-to-r from-[#d6ff3f] to-[#ff6b4a] px-10 py-4 rounded-full font-bold text-lg shadow-glow shadow-[#d6ff3f]/30 text-white w-full sm:w-auto">
                    إرسال عبر واتساب <Send size={18} />
                  </MagneticButton>
                </div>
              </div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="block">
              <div className="glass-panel p-6 rounded-3xl flex items-center gap-6 hover:bg-white/5 transition-colors group cursor-pointer shadow-lg">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shrink-0 shadow-glow shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">واتساب المباشر</div>
                  <div className="text-xl font-bold font-sans tracking-wider text-white" dir="ltr">+967 77 330 3455</div>
                </div>
              </div>
            </a>
            
            <InfoRow icon={Mail} title="البريد الإلكتروني" value="hello@kayan-soft.online" color="from-[#54e0a5] to-[#54e0a5]" />
            <InfoRow icon={MapPin} title="الموقع" value="الجمهورية اليمنية — فريق رقمي متكامل" color="from-[#d6ff3f] to-[#ff6b4a]" />
            
            <div className="glass-panel p-8 rounded-3xl mt-8 bg-gradient-to-br from-white/5 to-transparent border-white/5">
              <h3 className="font-bold text-xl mb-4">أوقات العمل</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>الأحد - الخميس</span> <span>9:00 ص - 5:00 م</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>السبت</span> <span>10:00 ص - 2:00 م</span></li>
                <li className="flex justify-between text-[#ff9a83]"><span>الجمعة</span> <span>مغلق</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-sm text-white/60 mb-2 block font-medium">{label}</label>
      <input
        value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#d6ff3f] focus:bg-white/10 transition-all"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, title, value, color }) {
  return (
    <div className="glass-panel p-6 rounded-3xl flex items-center gap-6 shadow-lg">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-lg`}>
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <div className="text-sm text-white/50 mb-1">{title}</div>
        <div className="text-lg font-bold text-white">{value}</div>
      </div>
    </div>
  );
}
