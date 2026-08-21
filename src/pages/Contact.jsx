import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

// ملاحظة: هذا النموذج واجهة فقط حاليًا (لا يرسل بريدًا فعليًا).
// لتفعيله بدون سيرفر خاص، اربطه بخدمة مجانية مثل Formspree أو Web3Forms:
// 1) سجّل بريدك في formspree.io وخذ رابط الفورم الخاص بك
// 2) غيّر onSubmit بحيث يرسل fetch(FORM_URL, { method: "POST", body: new FormData(e.target) })

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-5 md:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="text-xs text-amber ltr-code">// contact</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">تواصل معنا</h1>
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
              <h3 className="font-semibold text-lg">تم استلام رسالتك</h3>
              <p className="text-sm text-muted">رح نرجعلك قريبًا على البريد اللي حطيته.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="الاسم" name="name" placeholder="اسمك الكامل" required />
                <Field label="البريد الإلكتروني" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="text-sm text-muted mb-1.5 block">نوع المشروع</label>
                <select
                  name="project_type"
                  className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
                >
                  <option>تطبيق جوال</option>
                  <option>موقع ويب</option>
                  <option>نظام مخصص</option>
                  <option>غير متأكد بعد</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted mb-1.5 block">تفاصيل المشروع</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="احكيلنا شوي عن فكرتك..."
                  className="w-full bg-surface-2 border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-dim resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-ink font-medium text-sm hover:brightness-110 transition"
              >
                إرسال الرسالة
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
          <InfoRow icon={Mail} title="البريد الإلكتروني" value="hello@kayan-soft.online" />
          <InfoRow icon={Phone} title="الهاتف" value="+962 00 000 0000" ltr />
          <InfoRow icon={MapPin} title="الموقع" value="الأردن — نعمل عن بُعد" />
        </motion.div>
      </div>
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-muted mb-1.5 block">{label}</label>
      <input
        {...props}
        className="w-full bg-surface-2 border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-dim"
      />
    </div>
  )
}

function InfoRow({ icon: Icon, title, value, ltr }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center shrink-0">
        <Icon size={17} className="text-amber" />
      </div>
      <div>
        <div className="text-xs text-muted">{title}</div>
        <div className={`text-sm mt-0.5 ${ltr ? "ltr-code" : ""}`}>{value}</div>
      </div>
    </div>
  )
}
