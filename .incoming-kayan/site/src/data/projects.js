// بيانات مبدئية (Placeholder) — استبدلها بمشاريعك الحقيقية وصورك الخاصة لاحقًا
// كل مشروع: نوعه، وصفه، التقنيات، ولون توليد الصورة المصغّرة (thumbColor)

export const categories = [
  { id: "all", label: "الكل" },
  { id: "app", label: "تطبيقات" },
  { id: "web", label: "مواقع" },
  { id: "system", label: "أنظمة" },
]

export const projects = [
  {
    id: "orbit-pay",
    title: "أوربت باي",
    category: "app",
    year: "2025",
    summary: "تطبيق محفظة رقمية للدفع بين الأصدقاء وتقسيم الفواتير بشكل لحظي.",
    description:
      "تطبيق جوال متعدد المنصات لإدارة المدفوعات الشخصية، يتيح تقسيم الفواتير الجماعية، تتبع المصاريف الشهرية، وإرسال تنبيهات فورية عند كل تحويل. صُمم بواجهة بسيطة تركّز على السرعة في إتمام العملية بأقل عدد من النقرات.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Stripe API"],
    thumbColor: "#E8A33D",
    thumbShape: "orbit",
  },
  {
    id: "hive-crm",
    title: "هايف",
    category: "system",
    year: "2025",
    summary: "نظام إدارة علاقات العملاء (CRM) مبني خصيصًا لفرق المبيعات الصغيرة.",
    description:
      "نظام داخلي لإدارة قنوات المبيعات والعملاء المحتملين، يشمل لوحة متابعة الصفقات، أتمتة المتابعات عبر البريد، وتقارير أداء أسبوعية تلقائية. تم بناؤه ليحل مكان جداول Excel المتناثرة داخل فريق المبيعات.",
    stack: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    thumbColor: "#4F8EC2",
    thumbShape: "nodes",
  },
  {
    id: "atlas-menu",
    title: "أطلس مينيو",
    category: "web",
    year: "2024",
    summary: "موقع قوائم طعام تفاعلي للمطاعم مع طلب مباشر عبر الجوال.",
    description:
      "موقع تعريفي وتشغيلي لسلسلة مطاعم، يعرض القائمة بشكل تفاعلي مع صور وتصنيفات، ويتيح للزبون الطلب مباشرة من طاولته عبر مسح رمز QR، مع تحديث لحظي لحالة الطلب في المطبخ.",
    stack: ["Next.js", "Tailwind CSS", "Supabase"],
    thumbColor: "#4FBF8B",
    thumbShape: "grid",
  },
  {
    id: "pulse-fit",
    title: "بلس فِت",
    category: "app",
    year: "2024",
    summary: "تطبيق تتبع تمارين رياضية بخطط أسبوعية مخصصة.",
    description:
      "تطبيق لياقة بدنية يبني خططًا أسبوعية حسب هدف المستخدم، مع تسجيل التمارين، رسوم بيانية للتقدّم، وتذكيرات ذكية مبنية على نمط استخدام المستخدم السابق.",
    stack: ["Flutter", "Firebase", "Cloud Functions"],
    thumbColor: "#E8A33D",
    thumbShape: "pulse",
  },
  {
    id: "ledger-ops",
    title: "ليدجر أوبس",
    category: "system",
    year: "2024",
    summary: "نظام محاسبي داخلي لإدارة الفواتير والمصاريف بين الفروع.",
    description:
      "نظام محاسبة داخلي متعدد الفروع، يوحّد إصدار الفواتير، متابعة المصاريف، والتقارير المالية الشهرية في لوحة تحكم واحدة، مع صلاحيات دقيقة لكل فرع ومستخدم.",
    stack: ["Laravel", "MySQL", "Vue.js"],
    thumbColor: "#4F8EC2",
    thumbShape: "layers",
  },
  {
    id: "northline",
    title: "نورث لاين",
    category: "web",
    year: "2023",
    summary: "موقع تعريفي لشركة لوجستيات مع تتبع شحنات مباشر.",
    description:
      "موقع مؤسسي لشركة شحن وتوصيل، يشمل صفحة تتبع شحنة برقم مرجعي، حاسبة تكلفة شحن تقديرية، ونموذج طلب عرض سعر يصل مباشرة لفريق المبيعات.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    thumbColor: "#4FBF8B",
    thumbShape: "route",
  },
  {
    id: "kiln-inventory",
    title: "كِلن",
    category: "system",
    year: "2023",
    summary: "نظام جرد ومخازن لمصنع صغير مع تنبيهات نفاد المخزون.",
    description:
      "نظام جرد داخلي يربط المخزون بأوامر الإنتاج، يصدر تنبيهات آلية عند اقتراب نفاد أي مادة خام، ويولّد تقرير جرد دوري قابل للتصدير كملف Excel.",
    stack: ["Django", "PostgreSQL", "Celery"],
    thumbColor: "#E8A33D",
    thumbShape: "grid",
  },
  {
    id: "verse-journal",
    title: "فيرس",
    category: "app",
    year: "2023",
    summary: "تطبيق يوميات شخصية بذكاء اصطناعي لتلخيص المزاج الأسبوعي.",
    description:
      "تطبيق يوميات خاص، يتيح كتابة تدوينات يومية صوتًا أو نصًا، ويولّد ملخصًا أسبوعيًا لطبيعة المزاج العام بخصوصية تامة — كل البيانات مشفّرة على الجهاز.",
    stack: ["SwiftUI", "on-device ML", "CloudKit"],
    thumbColor: "#4F8EC2",
    thumbShape: "pulse",
  },
]

export const getProjectById = (id) => projects.find((p) => p.id === id)
