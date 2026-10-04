import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { projects } from "../src/data/projects.js";
import { createSchema, routeMetadata, SITE_URL } from "../src/data/seo.js";

const dist = new URL("../dist/", import.meta.url).pathname;
const site = SITE_URL;
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const canonicalPath = (slug) => slug ? `/${slug}` : "/";
const commonLinks = () => `<nav aria-label="روابط الموقع"><a href="/">الرئيسية</a> · <a href="/services">الخدمات</a> · <a href="/portfolio">الأعمال</a> · <a href="/about">من نحن</a> · <a href="/contact">تواصل معنا</a></nav>`;

function setMeta(html, attr, key, value) {
  const pattern = new RegExp(`<meta\\s+${attr}=["']${key}["'][^>]*>`, "i");
  return html.replace(pattern, `<meta ${attr}="${key}" content="${escapeHtml(value)}">`);
}
function bodyFor(page, path) {
  const projectsHtml = path === "/portfolio" ? `<section><h2>دراسات حالة مختارة</h2><ul>${projects.map((p) => `<li><a href="/portfolio/${p.id}">${escapeHtml(p.title)}</a> — ${escapeHtml(p.summary)}</li>`).join("")}</ul></section>` : "";
  const faqHtml = path === "/about-kayan-soft-yemen" ? `<section><h2>أسئلة شائعة عن كيان سوفت</h2><h3>ما هي كيان سوفت؟</h3><p>كيان سوفت شركة برمجيات وتطوير حلول رقمية في اليمن، متخصصة في بناء المواقع وتطبيقات الجوال والأنظمة المخصصة.</p><h3>أين تقع كيان سوفت؟</h3><p>يعمل فريق كيان سوفت من صنعاء في الجمهورية اليمنية ويخدم العملاء داخل اليمن وخارجها.</p><h3>ما خدمات كيان سوفت؟</h3><p>تشمل الخدمات تطوير التطبيقات والمواقع والأنظمة وCRM وتصميم UI/UX والاستشارات والصيانة.</p></section>` : "";
  return `<main id="seo-content" dir="rtl" lang="ar"><p>كيان سوفت | Kayan Soft</p><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.body)}</p>${projectsHtml}${faqHtml}${commonLinks()}</main>`;
}
function projectPage(project) {
  return { title: `${project.title} | دراسة حالة من كيان سوفت`, description: `${project.summary} تعرّف على تفاصيل المشروع والتقنيات المستخدمة ضمن أعمال كيان سوفت.`, keywords: `${project.title}, مشاريع كيان سوفت, ${project.category === "app" ? "تطوير تطبيقات" : project.category === "web" ? "تصميم مواقع" : "أنظمة مخصصة"}`, heading: project.title, body: `${project.summary} ${project.description}` };
}
function projectBody(project) {
  return `<main id="seo-content" dir="rtl" lang="ar"><p>كيان سوفت | دراسة حالة</p><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.summary)}</p><h2>عن المشروع</h2><p>${escapeHtml(project.description)}</p><h2>التقنيات المستخدمة</h2><ul>${project.stack.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>${commonLinks()}</main>`;
}
async function makePage(template, page, path, body = bodyFor(page, path)) {
  const robots = page.robots || "index,follow";
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "name", "keywords", page.keywords);
  html = setMeta(html, "name", "robots", robots);
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:url", `${site}${path}`);
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?\s*>/i, `<link rel="canonical" href="${site}${path}">`);
  const schema = createSchema({ path, metadata: page });
  html = html.replace("</head>", `<script type="application/ld+json" data-seo="graph">${JSON.stringify(schema)}</script></head>`);
  const rootPattern = /<div id="root">[\s\S]*?<\/div>(?=\s*<\/body>)/i;
  return html.replace(rootPattern, `<div id="root">${body}</div>`);
}
const template = await readFile(join(dist, "index.html"), "utf8");
for (const [slug, page] of Object.entries(routeMetadata)) {
  const path = canonicalPath(slug.replace(/^\//, ""));
  const folder = slug === "/" ? dist : join(dist, slug.slice(1));
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, "index.html"), await makePage(template, page, path));
}
for (const project of projects) {
  const path = `/portfolio/${project.id}`;
  const page = projectPage(project);
  const html = await makePage(template, page, path, projectBody(project));
  const folder = join(dist, "portfolio", project.id);
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, "index.html"), html);
}
const notFound = `<main dir="rtl" lang="ar"><meta name="robots" content="noindex,follow"><h1>الصفحة غير موجودة | كيان سوفت</h1><p>الرابط المطلوب غير موجود.</p><a href="/">العودة إلى الرئيسية</a></main>`;
await writeFile(join(dist, "404.html"), `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><title>الصفحة غير موجودة | كيان سوفت</title></head><body>${notFound}</body></html>`);
console.log(`Generated SEO HTML for ${Object.keys(routeMetadata).length + projects.length} routes plus 404.`);
