import { useEffect, useState } from "react"

const LINES = [
  { indent: 0, text: "const kayan = {" },
  { indent: 1, text: 'اسم: "كيان سوفت",' },
  { indent: 1, text: 'التخصص: ["تطبيقات", "مواقع", "أنظمة"],' },
  { indent: 1, text: 'المبدأ: "نبني كيانات رقمية تدوم",' },
  { indent: 0, text: "}" },
]

export default function TypedCode() {
  const [shown, setShown] = useState([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= LINES.length) return
    const current = LINES[lineIdx].text
    if (charIdx <= current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 26 + Math.random() * 22)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setShown((s) => [...s, current])
        setLineIdx((l) => l + 1)
        setCharIdx(0)
      }, 260)
      return () => clearTimeout(t)
    }
  }, [charIdx, lineIdx])

  const activeText = lineIdx < LINES.length ? LINES[lineIdx].text.slice(0, charIdx) : ""

  return (
    <div className="rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40 overflow-hidden w-full max-w-md">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-surface-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#e8635c]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e8b13d]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#4fbf8b]" />
        <span className="ltr-code text-[11px] text-muted mr-3">kayan.config.js</span>
      </div>
      <div className="ltr-code text-[13px] leading-7 p-5 min-h-[190px]">
        {shown.map((line, i) => (
          <div key={i} style={{ paddingRight: LINES[i].indent * 20 }} className="text-muted">
            <span className="text-steel">{i === 0 ? "" : ""}</span>
            <span className={LINES[i].indent === 0 ? "text-amber" : "text-text"}>{line}</span>
          </div>
        ))}
        {lineIdx < LINES.length && (
          <div style={{ paddingRight: LINES[lineIdx].indent * 20 }}>
            <span className={LINES[lineIdx].indent === 0 ? "text-amber" : "text-text"}>{activeText}</span>
            <span className="inline-block w-[7px] h-[15px] bg-amber ml-0.5 align-middle animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
