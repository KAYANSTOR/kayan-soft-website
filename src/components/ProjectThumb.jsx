// صورة مصغّرة مولّدة إجرائيًا بأسلوب "مخطط هندسي" بدل صور حقيقية
// استبدل هذا لاحقًا بلقطة شاشة فعلية من المشروع عبر خاصية image في بيانات المشروع
export default function ProjectThumb({ color = "#E8A33D", shape = "grid", className = "" }) {
  const shapes = {
    orbit: (
      <>
        <circle cx="100" cy="70" r="46" stroke={color} strokeWidth="1.2" fill="none" opacity="0.55" />
        <circle cx="100" cy="70" r="30" stroke={color} strokeWidth="1.2" fill="none" opacity="0.35" />
        <circle cx="146" cy="70" r="4" fill={color} />
        <circle cx="70" cy="40" r="3" fill={color} opacity="0.7" />
        <path d="M20 70h30M150 70h30" stroke={color} strokeWidth="1" opacity="0.4" />
      </>
    ),
    nodes: (
      <>
        <circle cx="40" cy="30" r="4" fill={color} />
        <circle cx="100" cy="60" r="4" fill={color} />
        <circle cx="160" cy="25" r="4" fill={color} />
        <circle cx="60" cy="95" r="4" fill={color} />
        <circle cx="150" cy="100" r="4" fill={color} />
        <path d="M40 30L100 60L160 25M100 60L60 95M100 60L150 100" stroke={color} strokeWidth="1" opacity="0.5" fill="none" />
      </>
    ),
    grid: (
      <>
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect key={`${r}-${c}`} x={20 + c * 34} y={20 + r * 26} width="20" height="14" stroke={color} strokeWidth="1" opacity={(r + c) % 3 === 0 ? 0.7 : 0.25} fill="none" />
          ))
        )}
      </>
    ),
    pulse: (
      <polyline
        points="10,70 45,70 58,30 72,110 86,45 100,70 190,70"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
        opacity="0.7"
      />
    ),
    layers: (
      <>
        <rect x="35" y="25" width="130" height="20" stroke={color} strokeWidth="1" opacity="0.7" fill="none" />
        <rect x="50" y="55" width="130" height="20" stroke={color} strokeWidth="1" opacity="0.45" fill="none" />
        <rect x="30" y="85" width="130" height="20" stroke={color} strokeWidth="1" opacity="0.3" fill="none" />
      </>
    ),
    route: (
      <>
        <path d="M15 100C60 100 45 30 100 30S150 100 185 40" stroke={color} strokeWidth="1.3" fill="none" opacity="0.6" strokeDasharray="4 3" />
        <circle cx="15" cy="100" r="3.5" fill={color} />
        <circle cx="185" cy="40" r="3.5" fill={color} />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 200 130" className={className} preserveAspectRatio="xMidYMid meet">
      <rect x="0.5" y="0.5" width="199" height="129" rx="10" fill="var(--color-surface-2, #1A222E)" stroke="var(--color-line, #232C39)" />
      <g>{shapes[shape] || shapes.grid}</g>
    </svg>
  )
}
