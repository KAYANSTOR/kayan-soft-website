import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none will-change-transform"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 pointer-events-auto shadow-xl shadow-black/50">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20">
            <img src="/logo.webp" alt="Kayan Soft Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-white">كيان سوفت</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/70">
          {[
            { name: 'الرئيسية', path: '/' },
            { name: 'من نحن', path: '/about' },
            { name: 'خدماتنا', path: '/services' },
            { name: 'أعمالنا', path: '/portfolio' },
            { name: 'تواصل معنا', path: '/contact' }
          ].map((item, i) => (
            <Link key={i} to={item.path} className="hover:text-white transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </div>
        <MagneticButton onClick={() => navigate("/request")} className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-cyan-500/20 transition-shadow">
          اطلب مشروعك <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </motion.nav>
  );
}
