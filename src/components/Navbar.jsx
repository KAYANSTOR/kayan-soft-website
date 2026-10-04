import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const NAV_ITEMS = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "خدماتنا", path: "/services" },
  { name: "أعمالنا", path: "/portfolio" },
  { name: "تواصل معنا", path: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.nav initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45, ease: "easeOut" }} className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:top-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-line bg-ink/85 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-5 lg:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-amber-dim/50 shadow-lg shadow-black/20 sm:h-11 sm:w-11">
            <img src="/logo.webp" alt="Kayan Soft" className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <span className="block truncate font-display text-lg font-bold tracking-tight text-text sm:text-xl">كيان سوفت</span>
            <span className="hidden text-[10px] font-medium text-muted sm:block">حلول رقمية وهندسية</span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
            const linkClass = "rounded-full px-4 py-2 text-sm font-medium transition duration-200 " + (active ? "bg-amber/10 text-amber-2" : "text-muted hover:bg-surface-2 hover:text-text");
            return <Link key={item.path} to={item.path} className={linkClass}>{item.name}</Link>;
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/contact" className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-surface-2 hover:text-text">تواصل معنا</Link>
          <MagneticButton onClick={() => navigate("/request")} className="btn-primary inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm">
            اطلب مشروعك
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-text transition hover:border-amber-dim hover:text-amber-2 lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-line bg-ink/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
              const linkClass = "rounded-2xl px-4 py-3 text-sm font-medium transition " + (active ? "bg-amber/10 text-amber-2" : "text-muted hover:bg-surface-2 hover:text-text");
              return <Link key={item.path} to={item.path} className={linkClass}>{item.name}</Link>;
            })}
          </div>
          <div className="mt-2 grid gap-2 border-t border-line pt-3">
            <MagneticButton onClick={() => navigate("/request")} className="btn-primary inline-flex min-h-11 items-center justify-center rounded-2xl text-sm">اطلب مشروعك</MagneticButton>
            <Link to="/contact" className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-line text-sm font-medium text-text transition hover:border-amber-dim hover:text-amber-2">تواصل معنا</Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
