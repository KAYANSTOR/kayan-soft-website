# كيان سوفت — Kayan Soft
> موقع عربي باتجاه RTL لعرض خدمات كيان سوفت وأعمالها واستقبال طلبات المشاريع عبر واتساب.

## 📖 نظرة عامة

هذا المستودع يحتوي على واجهة الموقع العام لكيان سوفت، وليس خادماً أو لوحة إدارة.
التطبيق مبني كواجهة React تعمل داخل المتصفح مع توجيه client-side عبر `react-router-dom`.
نقطة الدخول هي `src/main.jsx`، وتربط `BrowserRouter` و`MotionConfig` بالمكوّن `App`.
لغة صفحات HTML الافتراضية هي العربية واتجاهها من اليمين إلى اليسار في `index.html`.

الصفحات المعرفة في التطبيق هي:

- الصفحة الرئيسية `/`.
- الأعمال `/portfolio` وتفاصيل العمل `/portfolio/:id`.
- الخدمات `/services`.
- من نحن `/about`.
- تواصل معنا `/contact`.
- طلب مشروع `/request`.
- صفحة الهوية الرسمية `/about-kayan-soft-yemen`.
- صفحة 404 لمسارات React غير المعروفة، كما في `src/App.jsx`.

الموقع المعلن داخل ملفات SEO هو `https://kayan-soft.online` في `src/data/seo.js`.

## 🎯 المشكلة والحل

- المشكلة الموصوفة في واجهة المنتج: يحتاج الزائر إلى معرفة الخدمات، استعراض نماذج الأعمال، ثم إرسال فكرة مشروع.
  مصدر هذا التدفق هو الصفحات `src/pages/Services.jsx` و`src/pages/Portfolio.jsx` و`src/pages/RequestProject.jsx`.
- الحل المنفذ: موقع عربي موحّد يوفر صفحات تعريفية، تصنيفاً للأعمال، صفحات تفاصيل، ونماذج تفتح رسالة واتساب جاهزة.
  التنفيذ موزع بين `src/App.jsx` و`src/pages/Contact.jsx` و`src/pages/RequestProject.jsx`.
- تفاصيل الجمهور التجاري أو متطلبات المنتج غير موثّقة في المستودع.
- وجود خادم API أو تخزين طلبات في الخلفية غير موثّق في المستودع؛ النماذج تفتح واتساب مباشرة من المتصفح.

## ✨ الميزات الرئيسية

- ✅ واجهة عربية RTL مع ضبط `lang="ar"` و`dir="rtl"` في `index.html` و`src/components/SEO.jsx`.
- ✅ توجيه لصفحات الموقع وصفحات تفاصيل المشاريع، مع تحميل كسول للصفحات بواسطة `lazy` و`Suspense` في `src/App.jsx`.
- ✅ صفحة 404 داخل التطبيق، وتحويل معرّف المشروع غير المعروف إلى `/portfolio` في `src/pages/ProjectDetail.jsx`.
- ✅ عرض الخدمات في ستة أقسام: تطبيقات جوال، مواقع ويب، أنظمة مخصصة، استشارات، UI/UX، وصيانة ودعم؛ المصدر `src/pages/Services.jsx`.
- ✅ معرض أعمال بثلاثة تصنيفات قابلة للتصفية: تطبيقات جوال، مواقع ويب، وأنظمة وإدارة؛ المصدر `src/data/projects.js` و`src/pages/Portfolio.jsx`.
- ✅ ستة سجلات مشاريع مع سنة وملخص ووصف وتقنيات وصورة، في `src/data/projects.js`.
- ✅ صفحات ديناميكية للمشاريع تعرض الصورة والملخص والوصف والتقنيات ومشاريع مشابهة، في `src/pages/ProjectDetail.jsx` و`src/components/ProjectCard.jsx`.
- ✅ نموذج تواصل يتحقق من الاسم والرسالة ثم يكوّن رسالة ويفتح رابط واتساب؛ التنفيذ في `src/pages/Contact.jsx`.
- ✅ نموذج طلب مشروع يتحقق من الاسم ووسيلة التواصل والتفاصيل، ويجمع النوع والميزانية والجدول الزمني في رسالة واتساب؛ التنفيذ في `src/pages/RequestProject.jsx`.
- ✅ زر واتساب عائم يظهر خارج مسار `/request`، عبر `src/App.jsx` و`src/components/FloatingWhatsApp.jsx`.
- ✅ عنوان الصفحة ووسوم الوصف والكلمات وOpen Graph وTwitter وcanonical وJSON-LD تُحدّث حسب المسار في `src/components/SEO.jsx` و`src/data/seo.js`.
- ✅ توليد HTML مسبق لمسارات SEO وصفحات المشاريع مع ملف 404 عند تنفيذ build، في `scripts/generate-seo-pages.mjs`.
- ✅ `robots.txt` و`sitemap.xml` ثابتان، ويشيران إلى النطاق المعلن في `public/robots.txt` و`public/sitemap.xml`.
- ✅ تحليلات Vercel مضافة إلى التطبيق في `src/App.jsx` عبر `@vercel/analytics/react`.
- ✅ حركات انتقالية وتفاعلات hover وparallax وmagnetic buttons باستخدام `framer-motion` في `src/pages/Home.jsx` و`src/components/MagneticButton.jsx`.
- ✅ دعم `prefers-reduced-motion` وfocus المرئي في `src/index.css`، مع `MotionConfig reducedMotion="user"` في `src/main.jsx`.

## 🛠️ التقنيات

| المجال | التقنية | دليلها |
|---|---|---|
| واجهة المستخدم | React 19 | `package.json` و`src/main.jsx` |
| التوجيه | `react-router-dom` 7 | `package.json` و`src/App.jsx` |
| البناء والتطوير | Vite 8 | `package.json` و`vite.config.js` |
| CSS | Tailwind CSS 4 مع Vite plugin | `package.json` و`vite.config.js` و`src/index.css` |
| الحركة | Framer Motion 13 | `package.json` وملفات `src/` |
| الأيقونات | `lucide-react` | `package.json` وملفات الصفحات والمكوّنات |
| التحليلات | `@vercel/analytics` | `package.json` و`src/App.jsx` |
| التحقق البرمجي | Oxlint | `package.json` و`.oxlintrc.json` |
| JavaScript modules | ESM عبر `"type": "module"` | `package.json` |
| TypeScript | إعدادات TypeScript وملف UI واحد `.tsx` | `tsconfig.json` و`components/ui/button.tsx` |
| إدارة الحزم | npm lockfile وpnpm lockfile | `package-lock.json` و`pnpm-lock.yaml` |
| الخطوط | Google Fonts و`El Messiri` و`IBM Plex Sans Arabic` و`IBM Plex Mono` | `index.html` و`src/index.css` |

لا توجد في manifest تقنية backend أو قاعدة بيانات أو إطار Next.js مستخدم كاعتماد تشغيل.
القيم الموجودة في `components.json` و`tsconfig.json` لا تثبت تشغيل Next.js، و`next.config.*` غير موجود.

## 🏗️ هيكل المشروع

```text
.
├── package.json                 # scripts والاعتمادات
├── package-lock.json            # قفل npm
├── pnpm-lock.yaml               # قفل pnpm
├── vite.config.js               # Vite وTailwind plugin
├── tsconfig.json                # إعدادات TypeScript
├── vercel.json                  # ترويسات التخزين والأمان
├── index.html                   # القالب العربي وmetadata الأساسية
├── public/
│   ├── logo.jpg وlogo.webp      # أصول الهوية
│   ├── projects/*.webp          # صور المشاريع الستة
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manus-routes.json
├── scripts/
│   └── generate-seo-pages.mjs   # صفحات HTML المسبقة و404
├── src/
│   ├── main.jsx وApp.jsx        # bootstrap والتوجيه
│   ├── index.css                # theme وCSS العام
│   ├── data/                    # المشاريع والتواصل وSEO
│   ├── pages/                   # صفحات الموقع
│   └── components/              # Navbar وFooter وSEO والنماذج والمكوّنات
├── components/ui/button.tsx     # زر Base UI مع variants
├── lib/utils.ts                 # cn وtailwind-merge
├── components.json              # metadata لمكوّنات UI
└── .oxlintrc.json               # قواعد Oxlint
```

لا توجد مجلدات `app/` أو `pages/` في الجذر؛ صفحات التطبيق الفعلية داخل `src/pages/`.

## 🚀 التشغيل المحلي

### المتطلبات المثبتة من المشروع

- Node.js وnpm مطلوبان لتشغيل أوامر `package.json`؛ الإصدار المحدد غير موثّق في المستودع.
- الاعتمادات مقفلة في `package-lock.json` و`pnpm-lock.yaml`.
- ملف `.env.example` أو `.env.*.example` غير موجود.

### الخطوات والأوامر

```bash
npm install
npm run dev
```

الأمر `npm install` استُخدم لتثبيت الاعتمادات من manifest وlockfile أثناء التحقق.
الأمر `npm run dev` ينفذ script `vite` المعرفة في `package.json`.
عنوان المضيف أو المنفذ المخصص غير موثّق في إعدادات المشروع؛ يستخدم Vite الإعداد الافتراضي عند غياب override.

لإنشاء نسخة الإنتاج والتحقق من المصدر:

```bash
npm run lint
npm run build
```

نتيجة التحقق في هذه المراجعة: `npm run lint` نجح دون warnings أو errors.
ونجح `npm run build`، وبنى Vite الأصول ثم ولّد 13 مساراً وملف 404 وفق رسالة `generate-seo-pages.mjs`.

## 🔐 متغيرات البيئة

لم يعثر الفحص على `.env.example` أو أي ملف `.env.*.example`.
لذلك لا توجد أسماء متغيرات بيئة يمكن مطابقتها، والغرض أو الإلزام غير موثّق في المستودع.
القيم الثابتة لقنوات التواصل موجودة في المصدر وليست متغيرات بيئة؛ لا تُنقل إلى هذا README.

| الاسم | الغرض المثبت | مطلوب/اختياري |
|---|---|---|
| غير موثّق في المستودع | غير موثّق في المستودع | غير موثّق في المستودع |

## 📜 الأوامر المتاحة

| الأمر | ما يفعله وفق التعريف/الملفات |
|---|---|
| `npm run dev` | يشغّل Vite للتطوير، وفق `scripts.dev` في `package.json`. |
| `npm run build` | ينفذ `vite build` ثم `node scripts/generate-seo-pages.mjs`، وفق `scripts.build`. |
| `npm run lint` | ينفذ `oxlint`، وفق `scripts.lint` و`.oxlintrc.json`. |
| `npm run preview` | ينفذ `vite preview` لمعاينة مخرجات البناء، وفق `scripts.preview`. |
| `npm install` | تثبيت اعتمادات `package.json`؛ لا يوجد له script داخل manifest، لكنه استُخدم للتحقق المحلي مع `package-lock.json`. |

لا توجد scripts للاختبار أو النشر أو تشغيل backend في `package.json`.

## 🌐 النشر

- إعداد Vercel موجود في `vercel.json`، ويعرّف ترويسات `sitemap.xml` و`robots.txt`، وترويسات عامة للأمان، وتخزيناً طويل الأجل للأصول الثابتة.
- أمر build المخصص للنشر هو `npm run build` وفق `package.json`؛ مجلد الخرج `dist/` ناتج من Vite والسكربت اللاحق.
- السكربت `scripts/generate-seo-pages.mjs` ينشئ HTML لمسارات metadata، وصفحات المشاريع، و`dist/404.html`.
- النطاق المنشور المعلن داخل `src/data/seo.js` و`public/sitemap.xml` هو [kayan-soft.online](https://kayan-soft.online).
- لا توجد ملفات GitHub Actions أو Docker أو `docker-compose.yml` أو إعداد Netlify/Firebase في المستودع.
- روابط `vercel.app` و`netlify.app` و`firebaseapp.com` غير موجودة بنتيجة البحث المطلوب؛ رابط Demo منفصل غير موثّق في المستودع.

## 🔒 الأمان

- يضيف `vercel.json` الترويسة `X-Content-Type-Options: nosniff` و`Referrer-Policy: strict-origin-when-cross-origin`.
- يمرر فتح واتساب عبر `target="_blank"` مع `rel="noopener noreferrer"` في `src/components/FloatingWhatsApp.jsx` و`src/pages/Contact.jsx`.
- توجد حماية من بعض إدخالات HTML في توليد صفحات SEO عبر `escapeHtml` في `scripts/generate-seo-pages.mjs`.
- توجد ترويسات cache للأصول، لكن لا توجد سياسة CSP أو HSTS موثقة في `vercel.json`.
- نماذج التواصل لا تستخدم backend أو قاعدة بيانات؛ البيانات تُركب في URL واتساب داخل المتصفح، كما في `src/pages/Contact.jsx` و`src/pages/RequestProject.jsx`.
- المصادقة والتفويض وRLS وFirestore rules وmiddleware غير موثقة في المستودع؛ لا توجد ملفات `api/` أو `functions/` أو `firestore.rules`.
- لا توجد اختبارات أو إعداد اختبار معرّف في المشروع، ولذلك تغطية الأمان والاختبارات غير موثقة في المستودع.
- لا تُستخدم متغيرات بيئة أو أسرار من ملفات example؛ ملفات الأسرار الحقيقية غير موجودة ضمن الفحص.

## 📄 الترخيص

ملف `LICENSE` وملفات الترخيص البديلة غير موجودة في المستودع.
نوع الترخيص وحقوق إعادة الاستخدام غير موثّق في المستودع.
