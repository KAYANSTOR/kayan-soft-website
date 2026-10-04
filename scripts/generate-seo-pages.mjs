import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { projects } from "../src/data/projects.js";

const dist = new URL("../dist/", import.meta.url).pathname;
const site = "https://kayan-soft.online";
const pages = [
  {
    slug: "",
    title: "شركة برمجة في اليمن | كيان سوفت لتطوير التطبيقات والمواقع",
    description: "كيان سوفت شركة برمجة في اليمن متخصصة في تطوير تطبيقات الجوال، تصميم المواقع، وبناء الأنظمة السحابية المخصصة للشركات.",
    keywords: "شركة برمجة في اليمن, تطوير تطبيقات الجوال, تصميم مواقع, برمجة مواقع, أنظمة مخصصة, كيان سوفت",
    heading: "حلول رقمية تُبنى لتكبر معك",
    body: "كيان سوفت شريكك التقني لبناء تطبيقات الجوال، منصات الويب، وأنظمة الشركات المخصصة في اليمن والمنطقة.",
  },
  {
    slug: "services",
    title: "خدمات البرمجة وتطوير التطبيقات والمواقع | كيان سوفت",
    description: "خدمات كيان سوفت: تطوير تطبيقات iOS وAndroid، تصميم مواقع الويب، أنظمة CRM وERP، UI/UX، والاستشارات والدعم التقني.",
    keywords: "خدمات البرمجة, تطوير تطبيقات, تصميم مواقع اليمن, أنظمة CRM وERP, UI UX",
    heading: "خدماتنا الرقمية",
    body: "نطوّر تطبيقات iOS وAndroid، نصمم مواقع ومنصات ويب سريعة، ونبني أنظمة CRM وERP وحلولاً داخلية مصممة حسب احتياج كل شركة.",
  },
  {
    slug: "portfolio",
    title: "أعمالنا ومشاريع البرمجة | معرض كيان سوفت",
    description: "استعرض نماذج من مشاريع كيان سوفت في تطبيقات الجوال، منصات الويب، التجارة الإلكترونية، والأنظمة الإدارية.",
    keywords: "أعمال شركة برمجة, مشاريع تطبيقات, مشاريع مواقع, معرض أعمال برمجي",
    heading: "أعمالنا ومشاريعنا",
    body: "نماذج مختارة من مشاريع كيان سوفت في تطبيقات الجوال، منصات الويب، التجارة الإلكترونية، وأنظمة الإدارة.",
  },
  {
    slug: "about",
    title: "من نحن | شركة كيان سوفت للبرمجيات",
    description: "تعرّف على كيان سوفت، شريكك التقني في اليمن لبناء منتجات رقمية وتطبيقات ومواقع وأنظمة مخصصة بجودة عالية.",
    keywords: "كيان سوفت, شركة برمجيات يمنية, فريق تطوير برمجيات, شريك تقني",
    heading: "من نحن",
    body: "كيان سوفت فريق برمجي يركز على تحويل الأفكار إلى منتجات رقمية متينة، بتصميم واضح وكود قابل للتوسع ودعم مستمر.",
  },
  {
    slug: "about-kayan-soft-yemen",
    title: "كيان سوفت في اليمن | شركة برمجيات وحلول رقمية",
    description: "الصفحة الرسمية لكيان سوفت اليمنية: شركة برمجيات في صنعاء لتطوير المواقع وتطبيقات الجوال والأنظمة والحلول الرقمية.",
    keywords: "كيان سوفت اليمن, شركة برمجيات صنعاء, شركة برمجة يمنية, تطوير مواقع اليمن, تطوير تطبيقات اليمن",
    heading: "كيان سوفت في اليمن",
    body: "كيان سوفت شركة برمجيات وحلول رقمية في صنعاء، تقدم تطوير المواقع وتطبيقات الجوال والأنظمة المخصصة للعملاء داخل اليمن وخارجه.",
  },
  {
    slug: "contact",
    title: "تواصل معنا | كيان سوفت شركة برمجة في اليمن",
    description: "تواصل مع كيان سوفت لمناقشة فكرة تطبيق أو موقع أو نظام مخصص. نرد على استفساراتك خلال يوم عمل.",
    keywords: "تواصل مع شركة برمجة, طلب تطوير تطبيق, شركة برمجة اليمن, كيان سوفت واتساب",
    heading: "تواصل معنا",
    body: "لديك فكرة تطبيق أو موقع أو نظام؟ تواصل مع فريق كيان سوفت لمناقشة احتياجك والحصول على توجيه تقني أولي.",
  },
  {
    slug: "request",
    title: "اطلب مشروعك البرمجي | كيان سوفت",
    description: "أرسل تفاصيل مشروعك إلى كيان سوفت للحصول على استشارة أولية لتطوير تطبيق أو موقع أو نظام مخصص.",
    keywords: "طلب مشروع برمجي, تكلفة تطبيق, تطوير موقع, شركة برمجة اليمن",
    heading: "اطلب مشروعك البرمجي",
    body: "صف فكرة مشروعك واحتياجاتك الأساسية، وسيتواصل معك فريق كيان سوفت لمناقشة الخطوات التالية.",
    robots: "noindex,follow",
  },
];

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta\\s+${attr}=["']${key}["'][^>]*>`, "i");
  const replacement = `<meta ${attr}="${key}" content="${escapeHtml(value)}">`;
  return html.replace(pattern, replacement);
}

function canonicalPath(slug) {
  return slug ? `/${slug}` : "/";
}

function commonLinks() {
  return `<nav aria-label="روابط الموقع"><a href="/">الرئيسية</a> · <a href="/services">الخدمات</a> · <a href="/portfolio">الأعمال</a> · <a href="/about">من نحن</a> · <a href="/contact">تواصل معنا</a></nav>`;
}

function makeBody(page) {
  const projectLinks = page.slug === "portfolio"
    ? `<section><h2>دراسات حالة مختارة</h2><ul>${projects.map((project) => `<li><a href="/portfolio/${project.id}">${escapeHtml(project.title)}</a> — ${escapeHtml(project.summary)}</li>`).join("")}</ul></section>`
    : "";
  const faq = page.slug === "about-kayan-soft-yemen"
    ? `<section><h2>أسئلة شائعة عن كيان سوفت</h2><h3>ما خدمات كيان سوفت؟</h3><p>تطوير تطبيقات iOS وAndroid، تصميم مواقع الويب، بناء الأنظمة المخصصة وCRM، تصميم UI/UX، والاستشارات والصيانة.</p><h3>أين تقع كيان سوفت؟</h3><p>يعمل فريق كيان سوفت من صنعاء في الجمهورية اليمنية ويخدم العملاء داخل اليمن وخارجه.</p></section>`
    : "";
  return `<noscript><main dir="rtl" lang="ar"><p>كيان سوفت | Kayan Soft</p><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.body)}</p>${projectLinks}${faq}${commonLinks()}</main></noscript>`;
}

function makeSchema(page, path) {
  const canonical = `${site}${path}`;
  const breadcrumb = [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${site}/` }];
  if (path !== "/") breadcrumb.push({ "@type": "ListItem", position: 2, name: page.heading, item: canonical });
  const graph = [
    { "@type": "Organization", name: "كيان سوفت", alternateName: "Kayan Soft", url: site, logo: `${site}/logo.webp`, areaServed: "YE" },
    { "@type": "BreadcrumbList", itemListElement: breadcrumb },
  ];
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
}

function makePage(template, page, path, extra = {}) {
  const title = extra.title || page.title;
  const description = extra.description || page.description;
  const keywords = extra.keywords || page.keywords;
  const robots = extra.robots || page.robots || "index,follow";
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "name", "keywords", keywords);
  html = setMeta(html, "name", "robots", robots);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?\s*>/i, `<link rel="canonical" href="${site}${path}">`);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", `${site}${path}`);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = html.replace("</head>", `${makeSchema({ ...page, heading: extra.heading || page.heading }, path)}</head>`);
  return html.replace("</body>", `${makeBody({ ...page, ...extra })}</body>`);
}

const template = await readFile(join(dist, "index.html"), "utf8");
for (const page of pages) {
  const path = canonicalPath(page.slug);
  const folder = page.slug ? join(dist, page.slug) : dist;
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, "index.html"), makePage(template, page, path));
}
for (const project of projects) {
  const path = `/portfolio/${project.id}`;
  const page = {
    slug: path.slice(1),
    title: `${project.title} | دراسة حالة من كيان سوفت`,
    description: `${project.summary} تعرّف على تفاصيل المشروع والتقنيات المستخدمة ضمن أعمال كيان سوفت.`,
    keywords: `${project.title}, مشاريع كيان سوفت, ${project.category === "app" ? "تطوير تطبيقات" : project.category === "web" ? "تصميم مواقع" : "أنظمة مخصصة"}`,
    heading: project.title,
    body: `${project.summary} ${project.description}`,
  };
  const folder = join(dist, "portfolio", project.id);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, "index.html"), makePage(template, page, path));
}
console.log(`Generated SEO HTML for ${pages.length + projects.length} routes.`);
