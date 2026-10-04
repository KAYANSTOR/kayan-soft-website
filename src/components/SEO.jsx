import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProjectById } from "../data/projects";
import { canonicalPath, createSchema, DEFAULT_IMAGE, routeMetadata, SITE_NAME, SITE_URL } from "../data/seo";

function setMeta(attribute, key, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}
function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}
function setJsonLd(id, data) {
  let script = document.head.querySelector(`script[data-seo="${id}"]`);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seo = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}
export default function SEO({ project }) {
  const { pathname: rawPathname } = useLocation();
  const pathname = canonicalPath(rawPathname);
  const basePath = pathname.startsWith("/portfolio/") ? "/portfolio" : pathname;
  const projectData = project || (pathname.startsWith("/portfolio/") ? getProjectById(pathname.split("/")[2]) : null);
  const baseMetadata = routeMetadata[basePath];
  const metadata = projectData
    ? { title: `${projectData.title} | مشاريع كيان سوفت`, description: projectData.summary, keywords: `${projectData.title}, مشاريع كيان سوفت, ${projectData.category === "app" ? "تطوير تطبيقات" : projectData.category === "web" ? "تصميم مواقع" : "أنظمة مخصصة"}`, heading: projectData.title, type: "article" }
    : baseMetadata || { title: "الصفحة غير موجودة | كيان سوفت", description: "الصفحة المطلوبة غير موجودة. عد إلى الصفحة الرئيسية لموقع كيان سوفت.", keywords: "", heading: "الصفحة غير موجودة", type: "website", robots: "noindex,follow" };
  const isIndexable = Boolean(projectData || baseMetadata) && basePath !== "/request";
  const robots = isIndexable ? "index,follow" : (metadata.robots || "noindex,follow");
  const { description, keywords, title, type, heading } = metadata;
  useEffect(() => {
    const canonical = `${SITE_URL}${pathname}`;
    document.title = title;
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "robots", robots);
    setMeta("property", "og:locale", "ar_YE");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);
    setLink("canonical", canonical);
    setJsonLd("graph", createSchema({ path: pathname, metadata: { description, keywords, title, type, heading }, projectData }));
  }, [description, heading, keywords, pathname, projectData, robots, title, type]);
  return null;
}
