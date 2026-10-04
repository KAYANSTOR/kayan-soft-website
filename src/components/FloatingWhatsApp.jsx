import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/967773303455"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.35, ease: "backOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/40"
    >
      <MessageCircle size={26} />
    </motion.a>
  )
}
