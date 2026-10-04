import { Link } from "react-router-dom";

const SOCIALS = [
  ["LinkedIn", "#"],
  ["Instagram", "#"],
  ["Behance", "#"],
  ["Twitter / X", "#"],
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-ink px-6 pb-10 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-7">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border border-line">
              <img src="/logo.webp" alt="Kayan Soft" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="block font-display text-lg font-bold">كيان سوفت</span>
              <span className="text-xs text-muted">حلول رقمية وهندسية</span>
            </div>
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-muted sm:text-sm">
            {SOCIALS.map(([label, href]) => <a key={label} href={href} className="transition hover:text-amber-2">{label}</a>)}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-5 text-xs leading-6 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 كيان سوفت. جميع الحقوق محفوظة.</p>
          <p>شركة برمجيات وتطوير حلول رقمية — اليمن</p>
        </div>
      </div>
    </footer>
  );
}
