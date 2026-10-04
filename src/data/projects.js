export const categories = [
  { id: "all", label: "الكل" },
  { id: "app", label: "تطبيقات جوال" },
  { id: "web", label: "مواقع ويب" },
  { id: "system", label: "أنظمة وإدارة" },
];

export const projects = [
  {
    id: "orbit-pay",
    title: "أوربت باي (Orbit Pay)",
    category: "app",
    year: "2025",
    summary: "تطبيق تقنية مالية (Fintech) للدفع اللامركزي والمحافظ الرقمية.",
    description: "تطبيق جوال فائق الأمان مبني للقطاع المالي، يتيح للمستخدمين تحويل الأموال، تقسيم الفواتير، وإصدار بطاقات افتراضية. يتميز بتجربة مستخدم سلسة جداً مع حركات بصرية متطورة وتقارير مالية لحظية مدعومة بالذكاء الاصطناعي.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Stripe API"],
    image: "/projects/orbit-pay.webp",
    thumbColor: "#0ea5e9", // cyan-500
  },
  {
    id: "hive-crm",
    title: "هايف للشركات (Hive CRM)",
    category: "system",
    year: "2024",
    summary: "نظام إدارة علاقات العملاء (CRM) سحابي متكامل ومبني للفرق الكبيرة.",
    description: "نظام سحابي يربط جميع أقسام الشركة (المبيعات، التسويق، الدعم الفني). يوفر لوحات تحكم (Dashboards) تحليلية معقدة، وأتمتة لرسائل البريد الإلكتروني، وتتبع حي لحالة الصفقات، مما رفع كفاءة مبيعات العميل بنسبة 300%.",
    stack: ["Next.js", "Tailwind CSS", "Redis", "Docker"],
    image: "/projects/hive-crm.webp",
    thumbColor: "#d946ef", // fuchsia-500
  },
  {
    id: "atlas-menu",
    title: "أطلس ماركت (Atlas E-Commerce)",
    category: "web",
    year: "2024",
    summary: "منصة تجارة إلكترونية متطورة للبيع بالتجزئة والجملة.",
    description: "منصة متكاملة للتسوق الإلكتروني، تدعم ملايين المنتجات وسرعة تحميل لا تتجاوز ثانية واحدة بفضل تقنيات الـ SSR. المنصة مرتبطة ببوابات دفع عالمية ومحلية، مع نظام إدارة مخزون معقد للموردين.",
    stack: ["Next.js", "Framer Motion", "Supabase", "Stripe"],
    image: "/projects/atlas-menu.webp",
    thumbColor: "#8b5cf6", // violet-500
  },
  {
    id: "pulse-fit",
    title: "بلس فِت (Pulse Fit)",
    category: "app",
    year: "2023",
    summary: "تطبيق ذكي لتتبع اللياقة البدنية يعمل بتقنية تعلم الآلة.",
    description: "تطبيق صحي متقدم يرصد الحركة والتغذية ويقوم بإنشاء خطط تدريب مخصصة ديناميكياً باستخدام الذكاء الاصطناعي. يتصل بساعات أبل الذكية (Apple Watch) ويتميز بواجهات داكنة فائقة الأناقة.",
    stack: ["Flutter", "Firebase", "Machine Learning"],
    image: "/projects/pulse-fit.webp",
    thumbColor: "#10b981", // emerald-500
  },
  {
    id: "ledger-ops",
    title: "ليدجر بلس (Ledger Plus)",
    category: "system",
    year: "2023",
    summary: "نظام محاسبي ERP مركزي لإدارة سلاسل الإمداد والمخازن.",
    description: "حل رقمي ضخم تم تطويره لشركة لوجستية كبرى لإدارة المخازن والشحنات عبر قارات مختلفة. يدعم قراءة الباركود، تتبع الشحنات عبر الـ GPS، وإصدار تقارير ضريبية معتمدة آلياً.",
    stack: ["Laravel", "Vue.js", "PostgreSQL", "AWS"],
    image: "/projects/ledger-ops.webp",
    thumbColor: "#0284c7", // light blue
  },
  {
    id: "northline",
    title: "نورث لاين (Northline)",
    category: "web",
    year: "2023",
    summary: "موقع تفاعلي لشركة عقارية بتقنيات العرض ثلاثي الأبعاد.",
    description: "واجهة رقمية فخمة لشركة تطوير عقاري تعرض المشاريع السكنية الفاخرة باستخدام تقنيات التجول الافتراضي (3D Virtual Tours) وتأثيرات بصرية تأسر الزائر منذ اللحظة الأولى.",
    stack: ["React", "Three.js", "Tailwind CSS"],
    image: "/projects/northline.webp",
    thumbColor: "#f59e0b", // amber-500
  }
];

export const getProjectById = (id) => projects.find((p) => p.id === id);
