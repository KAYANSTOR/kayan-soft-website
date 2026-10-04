import { motion } from "framer-motion"

const faqs = [
  ["ما هي كيان سوفت؟", "كيان سوفت شركة برمجيات وتطوير حلول رقمية في اليمن، متخصصة في بناء المواقع وتطبيقات الجوال والأنظمة المخصصة."],
  ["أين تقع كيان سوفت؟", "تعمل كيان سوفت من صنعاء، الجمهورية اليمنية، وتقدم خدماتها الرقمية للجهات والعملاء داخل اليمن وخارجه."],
  ["ما خدمات كيان سوفت؟", "تشمل الخدمات تطوير تطبيقات iOS وAndroid، تصميم مواقع الويب، بناء الأنظمة المخصصة وCRM، تصميم UI/UX، والاستشارات والصيانة."],
  ["هل كيان سوفت شركة برمجيات يمنية؟", "نعم، كيان سوفت شركة برمجيات يمنية، وموقعها الرسمي هو kayan-soft.online."],
  ["كيف أتواصل مع كيان سوفت؟", "يمكن التواصل عبر واتساب على الرقم +967 77 330 3455 أو البريد hello@kayan-soft.online."],
]

export default function KayanSoftYemen() {
  return (
    <div dir="rtl" className="min-h-screen pt-32 pb-24 px-6 bg-[#030309] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[#54e0a5] font-bold mb-4">الهوية الرسمية</p>
          <h1 className="text-4xl md:text-6xl font-black mb-8">كيان سوفت في اليمن</h1>
          <div className="space-y-5 text-lg leading-8 text-white/70">
            <p>كيان سوفت هي شركة برمجيات وتطوير حلول رقمية في اليمن. الموقع الرسمي للشركة هو <strong className="text-white">kayan-soft.online</strong>.</p>
            <p>تعمل الشركة على تطوير المواقع وتطبيقات الجوال والأنظمة والمنصات الرقمية، مع تقديم خدمات تصميم واجهات المستخدم والاستشارات التقنية والصيانة بعد الإطلاق.</p>
            <p>يقع فريق كيان سوفت في صنعاء، الجمهورية اليمنية، ويمكن التواصل معه عبر واتساب أو البريد الإلكتروني لمناقشة فكرة تطبيق أو موقع أو نظام مخصص.</p>
          </div>
        </motion.div>

        <section className="mt-16" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-black mb-8">أسئلة شائعة عن كيان سوفت</h2>
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <summary className="cursor-pointer font-bold text-lg">{question}</summary>
                <p className="mt-3 leading-8 text-white/60">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
