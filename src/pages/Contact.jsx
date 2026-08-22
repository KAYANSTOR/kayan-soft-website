import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react"

const WHATSAPP_NUMBER = "967773303455"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("تطبيق جوال")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError("عبّي الاسم والرسالة على الأقل")
      return
    }
    setError("")
    const text = [
      "مرحبًا كيان سوفت 👋",
      `الاسم: ${name}`,
      email && `البريد: ${email}`,
      `نوع المشروع: ${projectType}`,
      "",
      message,
    ].filter(Boolean).join("\n")

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer")
    setSent(true)
  }

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-5 md:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-xs text-amber ltr-code">// contact</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-2">تواصل معنا</h1>
        <p className="text-muted mt-3 max-w-lg leading-7">
          احكيلنا عن فكرة مشروعك، ونرجع لك خلال يوم أو يومين عمل بأقصى تقدير.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 mt-10">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 rounded-2xl border border-line bg-surface p-6 md:p-8 space-y-5"
        >
          {sent ? (
            <div className="flex flex-col items-center text-center py-12 gap-3">
              <CheckCircle2 size={40} className="text-green" />
              <h3 className="font-semibold text-lg">تم فتح واتساب برسالتك</h3>
              <p className="text-sm text-muted">أكمل الإرسال من هناك، وبنرجعلك بأسرع وقت.</p>
              <button onClick={() => setSent(false)} className="text-sm text-amber hover:underline mt-2">
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="الاسم" value={name} onChange={setName} placeholder="اسمك الكامل" />
                <Field label="البريد الإلكتروني (اختياري)" value={email} onChange={setEmail} placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-muted mb-1.5 block">نوع المشروع</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
                >
                  <option>تطبيق جوال</option>
                  <option>موقع ويب</option>
                  <option>نظام مخصص</option>
                  <option>غير متأكد بعد</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted mb-1.5 block">رسالتك</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="احكيلنا شوي عن فكرتك..."
                  className="w-full bg-surface-2 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-dim resize-none"
                />
              </div>
              {error && <p className="text-xs text-[#e8635c]">{error}</p>}
              <button type="submit" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                إرسال عبر واتساب
                <Send size={15} />
              </button>
            </>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="md:col-span-2 space-y-4"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-line bg-surface p-5 flex items-center gap-4 hover:border-amber-dim transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center shrink-0">
              <MessageCircle size={17} className="text-amber" />
            </div>
            <div>
              <div className="text-xs text-muted">واتساب</div>
              <div className="text-sm mt-0.5 ltr-code" dir="ltr">+967 77 330 3455</div>
            </div>
          </a>
          <InfoRow icon={Mail} title="البريد الإلكتروني" value="hello@kayan-soft.online" />
          <InfoRow icon={MapPin} title="الموقع" value="اليمن — نعمل عن بُعد" />
        </motion.div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-sm text-muted mb-1.5 block">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
      />
    </div>
  )
}

function InfoRow({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center shrink-0">
        <Icon size={17} className="text-amber" />
      </div>
      <div>
        <div className="text-xs text-muted">{title}</div>
        <div className="text-sm mt-0.5">{value}</div>
      </div>
    </div>
  )
}
