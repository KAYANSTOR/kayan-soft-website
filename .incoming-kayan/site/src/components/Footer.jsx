import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40 mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg width="24" height="24" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="14" fill="#1A222E" />
              <path d="M20 14v36M20 32l18-18M20 32l18 18" stroke="#E8A33D" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="font-semibold text-lg">كيان سوفت</span>
          </div>
          <p className="text-sm text-muted leading-7 max-w-xs">
            نصمم ونبني تطبيقات ومواقع وأنظمة برمجية مخصصة، من الفكرة الأولى إلى الإطلاق.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-text mb-4">روابط</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li><Link to="/portfolio" className="hover:text-amber transition-colors">أعمالنا</Link></li>
            <li><Link to="/services" className="hover:text-amber transition-colors">خدماتنا</Link></li>
            <li><Link to="/about" className="hover:text-amber transition-colors">من نحن</Link></li>
            <li><Link to="/contact" className="hover:text-amber transition-colors">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-text mb-4">تواصل</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li className="flex items-center gap-2"><Mail size={15} className="text-amber shrink-0" /> hello@kayan-soft.online</li>
            <li className="flex items-center gap-2"><Phone size={15} className="text-amber shrink-0" /> ‎+962 00 000 0000</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-amber shrink-0" /> الأردن — عن بُعد</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted">
          <span>© {new Date().getFullYear()} كيان سوفت. جميع الحقوق محفوظة.</span>
          <span className="ltr-code text-[11px] opacity-60">kayan-soft.online</span>
        </div>
      </div>
    </footer>
  )
}
