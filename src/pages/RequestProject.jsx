import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Smartphone, Globe, Server, HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";

const WHATSAPP_NUMBER = "967773303455";

const projectTypeOptions = [
  { id: "app", label: "تطبيق جوال", icon: Smartphone },
  { id: "web", label: "موقع ويب", icon: Globe },
  { id: "system", label: "نظام مخصص", icon: Server },
  { id: "unsure", label: "غير متأكد بعد", icon: HelpCircle },
];

const budgetOptions = ["غير محدد بعد", "أقل من 1,000$", "1,000 – 3,000$", "3,000 – 7,000$", "أكثر من 7,000$"];
const timelineOptions = ["مرن / غير مستعجل", "خلال شهر", "1 – 3 أشهر", "بأسرع وقت ممكن"];

export default function RequestProject() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [types, setTypes] = useState([]);
  const [budget, setBudget] = useState(budgetOptions[0]);
  const [timeline, setTimeline] = useState(timelineOptions[0]);
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);

  const toggleType = (id) => {
    setTypes((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = "الاسم مطلوب";
    if (!contact.trim()) nextErrors.contact = "لازم نقدر نتواصل معك";
    if (!details.trim()) nextErrors.details = "احكيلنا شوي عن فكرة مشروعك";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const typeLabels = types.map((id) => projectTypeOptions.find((o) => o.id === id)?.label).join("، ");
    const message = [
      "مرحبًا كيان سوفت، أريد طلب مشروع 👋",
      "",
      `الاسم: ${name}`,
      `وسيلة التواصل: ${contact}`,
      `نوع المشروع: ${typeLabels || "غير محدد"}`,
      `الميزانية التقريبية: ${budget}`,
      `الجدول الزمني: ${timeline}`,
      "",
      "تفاصيل المشروع:",
      details,
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  return (
    <div dir="rtl" className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-[#030309] text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center mb-12">
          <span className="inline-block glass-panel px-4 py-1.5 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-glow shadow-cyan-500/20">
            ابدأ رحلتك
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            اطلب <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">مشروعك</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            عبّي التفاصيل، وبنجهزلك رسالة جاهزة تروح مباشرة لواتساب الشركة — نرجع لك خلال يوم عمل لننطلق نحو المستقبل.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-black/50 space-y-10"
        >
          {/* معلومات التواصل */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 flex items-center justify-center text-sm">1</span>
              معلومات التواصل
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-white/60 mb-2 block font-medium">الاسم الكامل</label>
                <input
                  value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="محمد أحمد"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                />
                {errors.name && <p className="text-xs text-rose-400 mt-2">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-medium">كيف نتواصل معك؟ (واتساب / إيميل)</label>
                <input
                  value={contact} onChange={(e) => setContact(e.target.value)}
                  placeholder="+967 77X XXX XXX"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                />
                {errors.contact && <p className="text-xs text-rose-400 mt-2">{errors.contact}</p>}
              </div>
            </div>
          </div>

          {/* نوع المشروع */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 flex items-center justify-center text-sm">2</span>
              ما هو نوع المشروع؟
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {projectTypeOptions.map(({ id, label, icon: Icon }) => (
                <button
                  key={id} type="button" onClick={() => toggleType(id)}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-300 ${
                    types.includes(id)
                      ? "bg-gradient-to-br from-fuchsia-600/20 to-cyan-600/20 border-cyan-400 shadow-glow shadow-cyan-500/20 text-white"
                      : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  <Icon size={28} className={types.includes(id) ? "text-cyan-400" : ""} />
                  <span className="font-bold text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* الميزانية والجدول الزمني */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 flex items-center justify-center text-sm">3</span>
              الميزانية والجدول الزمني
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-white/60 mb-2 block font-medium">الميزانية التقريبية</label>
                <select
                  value={budget} onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all appearance-none"
                >
                  {budgetOptions.map((o) => <option key={o} value={o} className="bg-[#030309]">{o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-medium">الجدول الزمني</label>
                <select
                  value={timeline} onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all appearance-none"
                >
                  {timelineOptions.map((o) => <option key={o} value={o} className="bg-[#030309]">{o}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* تفاصيل المشروع */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 flex items-center justify-center text-sm">4</span>
              أخبرنا عن فكرتك العظيمة
            </h2>
            <div>
              <textarea
                value={details} onChange={(e) => setDetails(e.target.value)}
                rows={6}
                placeholder="صف لنا مشروعك، المشكلة التي يحلها، وأي روابط لتطبيقات مشابهة تعجبك..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none"
              />
              {errors.details && <p className="text-xs text-rose-400 mt-2">{errors.details}</p>}
            </div>
          </div>

          <div className="pt-6 flex flex-col items-center gap-6 border-t border-white/10">
            <MagneticButton type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-12 py-5 rounded-full font-black text-xl shadow-glow shadow-cyan-500/30 text-white w-full sm:w-auto">
              إرسال الطلب عبر واتساب <Send className="w-6 h-6" />
            </MagneticButton>
            {opened && (
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-sm text-cyan-400 flex items-center gap-2 font-bold bg-cyan-900/20 px-6 py-2 rounded-full">
                <MessageCircle size={18} /> تم تحويلك لواتساب بنجاح! نحن بانتظار رسالتك.
              </motion.span>
            )}
          </div>
        </motion.form>

        <p className="text-white/40 text-center mt-12 font-medium">
          تفضل التواصل بطريقة أخرى؟{" "}
          <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors border-b border-cyan-400/30 hover:border-cyan-300">
            قم بزيارة صفحة تواصل معنا
          </Link>
        </p>
      </div>
    </div>
  );
}
