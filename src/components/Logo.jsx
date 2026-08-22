import { motion, useReducedMotion } from "framer-motion"

// علامة "كيان": ثلاثة أضلاع تلتقي في نقطة عقدة واحدة — من خط بسيط إلى شكل قائم،
// وهي نفس فكرة الشركة: تحويل فكرة مجرّدة إلى كيان رقمي قائم بذاته.
function CoreMark({ animated }) {
  const reduce = useReducedMotion()
  const play = animated && !reduce

  const stroke = {
    stroke: "var(--color-amber, #E8A33D)",
    strokeWidth: 5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }

  if (!play) {
    return (
      <>
        <line x1="22" y1="16" x2="22" y2="48" {...stroke} />
        <line x1="22" y1="32" x2="42" y2="16" {...stroke} />
        <line x1="22" y1="32" x2="42" y2="48" {...stroke} />
        <circle cx="22" cy="32" r="3.4" fill="var(--color-amber-2, #F5C563)" />
      </>
    )
  }

  return (
    <>
      <motion.line
        x1="22" y1="16" x2="22" y2="48" {...stroke}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.line
        x1="22" y1="32" x2="42" y2="16" {...stroke}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.32 }}
      />
      <motion.line
        x1="22" y1="32" x2="42" y2="48" {...stroke}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.55 }}
      />
      <motion.circle
        cx="22" cy="32" r="3.4" fill="var(--color-amber-2, #F5C563)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.9, ease: "backOut" }}
      />
    </>
  )
}

/**
 * علامة كيان سوفت.
 * size: القياس بالبكسل
 * animated: تشغيل حركة "الرسم" مرة واحدة عند الظهور (تُستخدم في الشريط العلوي فقط)
 * bare: بدون خلفية/إطار — تُستخدم للعلامة الكبيرة الشفافة كزخرفة خلفية
 */
export default function Logo({ size = 32, animated = false, bare = false, className = "" }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} className={className} role="img" aria-label="كيان سوفت">
      {!bare && (
        <>
          <defs>
            <linearGradient id="kayanBadgeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A222E" />
              <stop offset="100%" stopColor="#0A0E14" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#kayanBadgeGrad)" stroke="#232C39" />
        </>
      )}
      <CoreMark animated={animated} />
    </svg>
  )
}
