import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/portfolio", label: "أعمالنا" },
  { to: "/services", label: "خدماتنا" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "تواصل معنا" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <svg width="28" height="28" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#121821" />
            <path d="M20 14v36M20 32l18-18M20 32l18 18" stroke="#E8A33D" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="font-semibold tracking-tight text-lg">كيان سوفت</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm transition-colors ${
                  isActive ? "text-amber bg-surface" : "text-muted hover:text-text"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-text p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-line px-5 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm ${isActive ? "text-amber bg-surface" : "text-muted"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
