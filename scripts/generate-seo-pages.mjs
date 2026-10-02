import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
const site = "https://ye.kayan-soft.online";
const pages = [
  ["services", "خدمات البرمجة وتطوير التطبيقات والمواقع | كيان سوفت", "خدمات كيان سوفت: تطوير تطبيقات iOS وAndroid، تصميم مواقع الويب، أنظمة CRM وERP، UI/UX، والاستشارات والدعم التقني.", "خدمات البرمجة، تطوير تطبيقات، تصميم مواقع اليمن، أنظمة CRM وERP"],
  ["portfolio", "أعمالنا ومشاريع البرمجة | معرض كيان سوفت", "استعرض نماذج من مشاريع كيان سوفت في تطبيقات الجوال، منصات الويب، التجارة الإلكترونية، والأنظمة الإدارية.", "أعمال شركة برمجة، مشاريع تطبيقات، مشاريع مواقع، معرض أعمال برمجي"],
  ["about", "من نحن | شركة كيان سوفت للبرمجيات", "تعرّف على كيان سوفت، شريكك التقني في اليمن لبناء منتجات رقمية وتطبيقات ومواقع وأنظمة مخصصة بجودة عالية.", "كيان سوفت، شركة برمجيات يمنية، فريق تطوير برمجيات، شريك تقني"],
  ["contact", "تواصل معنا | كيان سوفت شركة برمجة في اليمن", "تواصل مع كيان سوفت لمناقشة فكرة تطبيق أو موقع أو نظام مخصص. نرد على استفساراتك خلال يوم عمل.", "تواصل مع شركة برمجة، طلب تطوير تطبيق، شركة برمجة اليمن"],
  ["request", "اطلب مشروعك البرمجي | كيان سوفت", "أرسل تفاصيل مشروعك إلى كيان سوفت للحصول على استشارة أولية لتطوير تطبيق أو موقع أو نظام مخصص.", "طلب مشروع برمجي، تكلفة تطبيق، تطوير موقع، شركة برمجة اليمن", "noindex,follow"],
];
const projects = ["orbit-pay", "hive-crm", "atlas-menu", "pulse-fit", "ledger-ops", "northline"];

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta\\s+${attr}=["']${key}["'][^>]*>`, "i");
  const replacement = `<meta ${attr}="${key}" content="${value.replaceAll('"', "&quot;")}">`;
  return html.replace(pattern, replacement);
}

function makePage(template, path, title, description, keywords, robots = "index,follow") {
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "name", "keywords", keywords);
  html = setMeta(html, "name", "robots", robots);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${site}${path}">`);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", `${site}${path}`);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  const body = `<noscript><main dir="rtl" lang="ar"><h1>${title.split("|")[0].trim()}</h1><p>${description}</p><p>كيان سوفت شركة برمجة في اليمن لتطوير التطبيقات والمواقع والأنظمة المخصصة.</p><nav><a href="/">الرئيسية</a> · <a href="/services">الخدمات</a> · <a href="/portfolio">الأعمال</a> · <a href="/contact">تواصل معنا</a></nav></main></noscript>`;
  return html.replace("</body>", `${body}</body>`);
}

const template = await readFile(join(dist, "index.html"), "utf8");
for (const [slug, title, description, keywords, robots] of pages) {
  const html = makePage(template, `/${slug}`, title, description, keywords, robots);
  const folder = join(dist, slug);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, "index.html"), html);
}
for (const id of projects) {
  const title = `${id} | مشاريع كيان سوفت`;
  const description = `مشروع ${id} ضمن أعمال كيان سوفت في تطوير التطبيقات والمواقع والأنظمة الرقمية.`;
  const html = makePage(template, `/portfolio/${id}`, title, description, `مشاريع كيان سوفت، ${id}, تطوير تطبيقات ومواقع`);
  const folder = join(dist, "portfolio", id);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, "index.html"), html);
}
console.log(`Generated SEO HTML for ${pages.length + projects.length} routes.`);
