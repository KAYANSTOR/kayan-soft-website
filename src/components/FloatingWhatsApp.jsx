import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { buildWhatsAppUrl } from "../data/contact"

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppUrl("مرحبًا كيان سوفت 👋")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40"
    >
      <MessageCircle size={26} />
    </motion.a>
  )
}
