// أيقونات مخصّصة (بدل أيقونات عامة) لتصنيفات العمل الثلاثة الأساسية للشركة.
// أسلوب موحّد: خطوط رفيعة (stroke) بدل أشكال معبّأة، بما يتماشى مع طابع "المخطط الهندسي".

export function AppIcon({ size = 22, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="20" rx="2.2" />
      <line x1="10.3" y1="19" x2="13.7" y2="19" />
    </svg>
  )
}

export function WebIcon({ size = 22, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4.5" width="20" height="15" rx="2" />
      <line x1="2" y1="8.5" x2="22" y2="8.5" />
    </svg>
  )
}

export function SystemIcon({ size = 22, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3.5" width="16" height="4.2" rx="1" />
      <rect x="4" y="9.9" width="16" height="4.2" rx="1" />
      <rect x="4" y="16.3" width="16" height="4.2" rx="1" />
      <circle cx="7" cy="5.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="18.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}
