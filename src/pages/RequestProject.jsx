import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Smartphone, Globe, Server, HelpCircle, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

const WHATSAPP_NUMBER = "967773303455"

const projectTypeOptions = [
  { id: "app", label: "تطبيق جوال", icon: Smartphone },
  { id: "web", label: "موقع ويب", icon: Globe },
  { id: "system", label: "نظام مخصص", icon: Server },
  { id: "unsure", label: "غير متأكد بعد", icon: HelpCircle },
]

const budgetOptions = ["غير محدد بعد", "أقل من 1,000$", "1,000 – 3,000$", "3,000 – 7,000$", "أكثر من 7,000$"]
const timelineOptions = ["مرن / غير مستعجل", "خلال شهر", "1 – 3 أشهر", "بأسرع وقت ممكن"]

export default function RequestProject() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [types, setTypes] = useState([])
  const [budget, setBudget] = useState(budgetOptions[0])
  const [timeline, setTimeline] = useState(timelineOptions[0])
  const [details, setDetails] = useState("")
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)

  const toggleType = (id) => {
    setTypes((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!name.trim()) nextErrors.name = "الاسم مطلوب"
    if (!contact.trim()) nextErrors.contact = "لازم نقدر نتواصل معك"
    if (!details.trim()) nextErrors.details = "احكيلنا شوي عن فكرة مشروعك"
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const typeLabels = types.map((id) => projectTypeOptions.find((o) => o.id === id)?.label).join("، ")
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
    ].join("\n")

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setOpened(true)
  }

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-5 md:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-xs text-amber ltr-code">// start a project</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-2">اطلب مشروعك</h1>
        <p className="text-muted mt-3 leading-7">
          عبّي التفاصيل، وبنجهزلك رسالة جاهزة تروح مباشرة لواتساب الشركة — نرجع لك خلال يوم عمل.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="mt-10 rounded-2xl border border-line bg-surface p-6 md:p-8 space-y-8"
      >
        {/* معلومات التواصل */}
        <div className="space-y-5">
          <h2 className="text-sm font-medium text-muted">معلومات التواصل</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-muted mb-1.5 block">الاسم</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسمك الكامل"
                className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
              />
              {errors.name && <p className="text-xs text-[#e8635c] mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm text-muted mb-1.5 block">رقم واتساب أو بريد إلكتروني</label>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="كيف نتواصل معك؟"
                className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
              />
              {errors.contact && <p className="text-xs text-[#e8635c] mt-1.5">{errors.contact}</p>}
            </div>
          </div>
        </div>

        {/* نوع المشروع */}
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-muted">نوع المشروع</h2>
          <div className="flex flex-wrap gap-2">
            {projectTypeOptions.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => toggleType(id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border transition-colors ${
                  types.includes(id)
                    ? "bg-amber text-ink border-amber font-medium"
                    : "border-line text-muted hover:text-text hover:border-amber-dim"
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* الميزانية والجدول الزمني */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-muted mb-1.5 block">الميزانية التقريبية</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
            >
              {budgetOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-muted mb-1.5 block">الجدول الزمني المطلوب</label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
            >
              {timelineOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* تفاصيل المشروع */}
        <div>
          <label className="text-sm text-muted mb-1.5 block">تفاصيل المشروع</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={5}
            placeholder="احكيلنا عن فكرتك، والمشكلة اللي بتحلها، وأي مراجع بتعجبك..."
            className="w-full bg-surface-2 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-dim resize-none"
          />
          {errors.details && <p className="text-xs text-[#e8635c] mt-1.5">{errors.details}</p>}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
          <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm">
            إرسال الطلب عبر واتساب
            <Send size={15} />
          </button>
          {opened && (
            <span className="text-sm text-green flex items-center gap-1.5">
              <MessageCircle size={15} /> تم فتح واتساب برسالتك الجاهزة
            </span>
          )}
        </div>
      </motion.form>

      <p className="text-sm text-muted text-center mt-8">
        تفضّل التواصل بطريقة ثانية؟{" "}
        <Link to="/contact" className="text-amber hover:underline">زور صفحة تواصل معنا</Link>
      </p>
    </div>
  )
}
