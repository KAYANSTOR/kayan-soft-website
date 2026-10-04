import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
import { buildWhatsAppUrl, contactInfo, openWhatsApp } from "../data/contact";

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

    openWhatsApp(text);
    setSent(true);
  };

  return (
    <div dir="rtl" className="relative min-h-screen overflow-hidden bg-[#030309] px-6 pb-24 pt-32 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-violet-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[10%] h-[30vw] w-[30vw] rounded-full bg-fuchsia-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }} className="mb-16">
          <span className="mb-4 inline-block rounded-full border border-fuchsia-400/20 bg-fuchsia-400/[0.06] px-4 py-1.5 text-sm font-bold text-fuchsia-300">
            قناة مباشرة لفكرتك
          </span>
          <h1 className="mb-6 text-5xl font-black leading-[1.08] md:text-7xl">
            لنجعل أفكارك <span className="bg-gradient-to-l from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">واقعًا ملموسًا</span>
          </h1>
          <p className="max-w-2xl text-lg leading-9 text-white/50">
            اكتب لنا ما تحتاجه، وسنفتح لك محادثة مباشرة مع فريق كيان سوفت لمناقشة الفكرة والخطوة الأنسب لها.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/50 md:p-10 lg:col-span-3"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 0.45, bounce: 0.18 }}>
                  <CheckCircle2 size={80} className="mb-4 text-cyan-300" />
                </motion.div>
                <h3 className="text-3xl font-black">تم تجهيز رسالتك</h3>
                <p className="max-w-md text-lg leading-8 text-white/50">إذا لم يفتح واتساب تلقائيًا، استخدم زر التواصل المباشر أدناه أو أعد المحاولة.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-5 py-3 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[.97]">فتح واتساب</a>
                  <button type="button" onClick={() => setSent(false)} className="rounded-full border border-white/15 px-5 py-3 font-bold text-white/70 transition-colors hover:border-white/30 hover:text-white">إرسال رسالة أخرى</button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="الاسم الكامل" value={name} onChange={setName} placeholder="أدخل اسمك" autoComplete="name" />
                  <Field label="البريد الإلكتروني (اختياري)" value={email} onChange={setEmail} placeholder="you@example.com" type="email" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="project-type" className="mb-2 block text-sm font-medium text-white/60">ما هو نوع المشروع؟</label>
                  <select id="project-type" value={projectType} onChange={(e) => setProjectType(e.target.value)} className="w-full appearance-none rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all focus:border-fuchsia-500 focus:outline-none">
                    <option className="bg-[#030309]">تطبيق جوال</option>
                    <option className="bg-[#030309]">موقع أو منصة رقمية</option>
                    <option className="bg-[#030309]">متجر إلكتروني</option>
                    <option className="bg-[#030309]">نظام أو أتمتة</option>
                    <option className="bg-[#030309]">تسويق وهوية</option>
                    <option className="bg-[#030309]">غير متأكد بعد</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white/60">رسالتك إلينا</label>
                  <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="كيف يمكننا مساعدتك؟" className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/20 transition-all focus:border-fuchsia-500 focus:bg-white/10 focus:outline-none" />
                </div>
                {error && <p role="alert" className="text-xs text-rose-400">{error}</p>}
                <div className="pt-4">
                  <MagneticButton type="submit" className="w-full rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 px-10 py-4 text-lg font-bold text-white shadow-glow shadow-fuchsia-500/30 sm:w-auto">
                    إرسال عبر واتساب <Send size={18} />
                  </MagneticButton>
                </div>
              </div>
            )}
          </motion.form>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="space-y-6 lg:col-span-2">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="group block">
              <InfoRow icon={MessageCircle} title="واتساب المباشر" value={contactInfo.whatsappDisplay} color="from-green-400 to-green-600" action="ابدأ محادثة" />
            </a>
            <a href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("استفسار جديد من موقع كيان سوفت")}`} className="group block">
              <InfoRow icon={Mail} title="البريد الإلكتروني" value={contactInfo.email} color="from-cyan-400 to-blue-500" action="أرسل بريدًا" />
            </a>
            <a href={`tel:+${contactInfo.whatsappNumber}`} className="group block">
              <InfoRow icon={Phone} title="اتصال مباشر" value={contactInfo.whatsappDisplay} color="from-violet-400 to-fuchsia-600" action="اتصل الآن" />
            </a>
            <InfoRow icon={MapPin} title="الموقع" value={contactInfo.location} color="from-fuchsia-500 to-rose-500" />

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-8">
              <h3 className="mb-4 text-xl font-bold">أوقات العمل</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>الأحد - الخميس</span><span>9:00 ص - 5:00 م</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>السبت</span><span>10:00 ص - 2:00 م</span></li>
                <li className="flex justify-between text-rose-400"><span>الجمعة</span><span>مغلق</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", autoComplete }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/60">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} autoComplete={autoComplete} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/20 transition-all focus:border-fuchsia-500 focus:bg-white/10 focus:outline-none" />
    </div>
  );
}

function InfoRow({ icon: Icon, title, value, color, action }) {
  return (
    <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-lg transition-colors duration-200 group-hover:border-white/20 group-hover:bg-white/[0.065]">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-lg`}><Icon size={24} className="text-white" /></div>
      <div className="min-w-0">
        <div className="mb-1 text-sm text-white/50">{title}</div>
        <div className="truncate text-lg font-bold text-white" dir={title === "واتساب المباشر" || title === "البريد الإلكتروني" || title === "اتصال مباشر" ? "ltr" : "rtl"}>{value}</div>
        {action && <div className="mt-1 text-xs font-bold text-cyan-300">{action} ←</div>}
      </div>
    </div>
  );
}
