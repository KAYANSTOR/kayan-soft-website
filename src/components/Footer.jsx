import { Link } from "react-router-dom"
import { Mail, MessageCircle, MapPin } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40 mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Logo size={24} />
            <span className="font-display font-semibold text-lg">كيان سوفت</span>
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
            <li><Link to="/request" className="hover:text-amber transition-colors">اطلب مشروعك</Link></li>
            <li><Link to="/contact" className="hover:text-amber transition-colors">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-text mb-4">تواصل</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li className="flex items-center gap-2"><Mail size={15} className="text-amber shrink-0" /> hello@kayan-soft.online</li>
            <li>
              <a
                href="https://wa.me/967773303455"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-amber transition-colors"
              >
                <MessageCircle size={15} className="text-amber shrink-0" />
                <span className="ltr-code" dir="ltr">+967 77 330 3455</span>
              </a>
            </li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-amber shrink-0" /> اليمن — نعمل عن بُعد</li>
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
