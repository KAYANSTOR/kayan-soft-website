import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProjectById } from "../data/projects";

export const SITE_URL = "https://kayan-soft.online";
export const SITE_NAME = "كيان سوفت | Kayan Soft";
export const DEFAULT_IMAGE = `${SITE_URL}/logo.webp`;

const routeMetadata = {
  "/": {
    title: "شركة برمجة في اليمن | كيان سوفت لتطوير التطبيقات والمواقع",
    description: "كيان سوفت شركة برمجة في اليمن متخصصة في تطوير تطبيقات الجوال، تصميم المواقع، وبناء الأنظمة السحابية المخصصة للشركات.",
    keywords: "شركة برمجة في اليمن, تطوير تطبيقات الجوال, تصميم مواقع, برمجة مواقع, أنظمة مخصصة, كيان سوفت",
    type: "website",
  },
  "/about": {
    title: "من نحن | شركة كيان سوفت للبرمجيات",
    description: "تعرّف على كيان سوفت، شريكك التقني في اليمن لبناء منتجات رقمية وتطبيقات ومواقع وأنظمة مخصصة بجودة عالية.",
    keywords: "كيان سوفت, شركة برمجيات يمنية, فريق تطوير برمجيات, شريك تقني",
    type: "website",
  },
  "/services": {
    title: "خدمات البرمجة وتطوير التطبيقات والمواقع | كيان سوفت",
    description: "خدمات كيان سوفت: تطوير تطبيقات iOS وAndroid، تصميم مواقع الويب، أنظمة CRM وERP، UI/UX، والاستشارات والدعم التقني.",
    keywords: "خدمات البرمجة, تطوير تطبيقات, تصميم مواقع اليمن, أنظمة CRM, أنظمة ERP, UI UX",
    type: "website",
  },
  "/portfolio": {
    title: "أعمالنا ومشاريع البرمجة | معرض كيان سوفت",
    description: "استعرض نماذج من مشاريع كيان سوفت في تطبيقات الجوال، منصات الويب، التجارة الإلكترونية، والأنظمة الإدارية.",
    keywords: "أعمال شركة برمجة, مشاريع تطبيقات, مشاريع مواقع, معرض أعمال برمجي",
    type: "website",
  },
  "/contact": {
    title: "تواصل معنا | كيان سوفت شركة برمجة في اليمن",
    description: "تواصل مع كيان سوفت لمناقشة فكرة تطبيق أو موقع أو نظام مخصص. نرد على استفساراتك خلال يوم عمل.",
    keywords: "تواصل مع شركة برمجة, طلب تطوير تطبيق, شركة برمجة اليمن, كيان سوفت واتساب",
    type: "website",
  },
  "/request": {
    title: "اطلب مشروعك البرمجي | كيان سوفت",
    description: "أرسل تفاصيل مشروعك إلى كيان سوفت للحصول على استشارة أولية لتطوير تطبيق أو موقع أو نظام مخصص.",
    keywords: "طلب مشروع برمجي, تكلفة تطبيق, تطوير موقع, شركة برمجة اليمن",
    type: "website",
  },
};

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
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
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
  const location = useLocation();
  const pathname = location.pathname;
  const basePath = pathname.startsWith("/portfolio/") ? "/portfolio" : pathname;
  const projectData = project || (pathname.startsWith("/portfolio/") ? getProjectById(pathname.split("/")[2]) : null);
  const metadata = projectData
    ? {
        title: `${projectData.title} | مشاريع كيان سوفت`,
        description: projectData.summary,
        keywords: `${projectData.title}, مشاريع كيان سوفت, ${projectData.category === "app" ? "تطوير تطبيقات" : projectData.category === "web" ? "تصميم مواقع" : "أنظمة مخصصة"}`,
        type: "article",
      }
    : routeMetadata[basePath] || {
        title: "الصفحة غير موجودة | كيان سوفت",
        description: "الصفحة المطلوبة غير موجودة. عد إلى الصفحة الرئيسية لموقع كيان سوفت.",
        keywords: "",
        type: "website",
      };

  useEffect(() => {
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    document.title = metadata.title;
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    setMeta("name", "description", metadata.description);
    setMeta("name", "keywords", metadata.keywords);
    setMeta("name", "robots", routeMetadata[basePath] || projectData ? "index,follow" : "noindex,follow");
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", metadata.type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);
    setLink("canonical", canonical);

    setJsonLd("organization", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      email: "hello@kayan-soft.online",
      telephone: "+967773303455",
      areaServed: "YE",
      address: { "@type": "PostalAddress", addressLocality: "صنعاء", addressCountry: "YE" },
      contactPoint: { "@type": "ContactPoint", telephone: "+967773303455", contactType: "customer service", availableLanguage: ["ar", "en"] },
    });
    setJsonLd("breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL }, ...(pathname !== "/" ? [{ "@type": "ListItem", position: 2, name: metadata.title.split("|")[0].trim(), item: canonical }] : [])],
    });
  }, [basePath, metadata.description, metadata.keywords, metadata.title, metadata.type, pathname, projectData]);

  return null;
}
