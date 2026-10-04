import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 pt-8 pb-10 px-6 mt-16 bg-[#030309] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
            <img src="/logo.jpg" alt="Kayan Soft Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-black text-lg">كيان سوفت</span>
        </Link>
        
        <div className="flex gap-6 text-white/50 text-sm font-medium">
          <a href="#" className="hover:text-white transition">Twitter / X</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Behance</a>
        </div>
        
        <p className="text-white/30 text-xs">© 2025 Kayan Soft. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
