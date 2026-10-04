import { Routes, Route, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import SEO from "./components/SEO"

const Home = lazy(() => import("./pages/Home"))
const Portfolio = lazy(() => import("./pages/Portfolio"))
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"))
const Services = lazy(() => import("./pages/Services"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const RequestProject = lazy(() => import("./pages/RequestProject"))
const KayanSoftYemen = lazy(() => import("./pages/KayanSoftYemen"))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div dir="rtl" className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-[#030309] text-white">
      <p className="text-cyan-400 font-bold mb-4">404</p>
      <h1 className="text-4xl md:text-6xl font-black mb-4">الصفحة غير موجودة</h1>
      <p className="text-white/60 mb-8">يبدو أن الرابط الذي فتحته غير صحيح أو أن الصفحة نُقلت.</p>
      <a href="/" className="bg-white text-black px-7 py-3 rounded-full font-bold">العودة للرئيسية</a>
    </div>
  )
}

export default function App() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center bg-[#030309] text-white/60" role="status">جاري تحميل الصفحة…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<RequestProject />} />
            <Route path="/about-kayan-soft-yemen" element={<KayanSoftYemen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {pathname !== "/request" && <FloatingWhatsApp />}
      <Analytics />
    </div>
  )
}
