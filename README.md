# كيان سوفت — Kayan Soft

موقع الشركة (React + Vite + Tailwind CSS v4 + Framer Motion).

## التشغيل محليًا

```bash
npm install
npm run dev
```

يفتح على `http://localhost:5173`

## البناء للإنتاج

```bash
npm run build
```

الناتج في مجلد `dist/`

## هيكل المشروع

```
src/
  data/projects.js         ← بيانات المشاريع (عدّل/أضف مشاريعك الحقيقية هنا)
  components/               ← Navbar, Footer, ProjectCard, ProjectThumb, TypedCode, Logo, FloatingWhatsApp
  components/icons/         ← أيقونات مخصصة (تطبيقات / مواقع / أنظمة)
  pages/                     ← Home, Portfolio, ProjectDetail, Services, About, Contact, RequestProject
```

## الهوية البصرية

- **الشعار**: `src/components/Logo.jsx` — علامة مرسومة (SVG) بأسلوب "من الخط إلى الشكل القائم"، تتحرك مرة واحدة عند تحميل الصفحة في الشريط العلوي. لتغييرها، عدّل الإحداثيات داخل هذا الملف مباشرة (وحدّث `public/favicon.svg` بنفس الشكل يدويًا لأنه ملف SVG ثابت منفصل).
- **الألوان والخطوط**: كل التوكِنز (الألوان، الخطوط، الظلال) معرّفة في `src/index.css` داخل `@theme`. غيّر القيم هناك وتنعكس على كل الموقع.
- **الأيقونات**: `src/components/icons/ServiceIcons.jsx` يحتوي أيقونات مخصصة لتصنيفات (تطبيقات/مواقع/أنظمة)، وبقية الأيقونات من مكتبة `lucide-react`.

## ميزة "اطلب مشروعك"

صفحة `/request` فورم مفصّل (نوع المشروع، الميزانية، الجدول الزمني، تفاصيل) يبني رسالة واتساب جاهزة ويفتحها تلقائيًا عند الإرسال — بدون أي سيرفر أو باك-إند. نفس الفكرة مطبّقة على فورم صفحة "تواصل معنا". رقم واتساب الشركة معرّف في متغيّر `WHATSAPP_NUMBER` أعلى كل من `src/pages/RequestProject.jsx` و `src/pages/Contact.jsx` و `src/components/FloatingWhatsApp.jsx` — لتغييره، حدّث القيمة في الملفات الثلاثة.

## استبدال الصور المؤقتة بصور حقيقية

حاليًا كل مشروع يعرض صورة مولّدة بـ SVG (component: `ProjectThumb`) بدل صورة حقيقية.
لاستخدام صور فعلية:

1. ضع صور المشاريع داخل `public/projects/` (مثلاً `public/projects/orbit-pay.png`)
2. في `src/data/projects.js` أضف حقل `image: "/projects/orbit-pay.png"` لكل مشروع
3. في `ProjectCard.jsx` و `ProjectDetail.jsx` استبدل `<ProjectThumb .../>` بـ:
   ```jsx
   <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
   ```

## تفعيل نموذج التواصل

نموذج صفحة "تواصل معنا" حاليًا واجهة فقط (لا يرسل بريدًا فعليًا). لتفعيله مجانًا وبدون سيرفر:

1. سجّل في formspree.io أو web3forms.com واحصل على رابط/مفتاح الفورم
2. في `src/pages/Contact.jsx` عدّل دالة `handleSubmit` لترسل البيانات لذلك الرابط عبر `fetch`

## النشر على Vercel عبر GitHub

1. أنشئ مستودع جديد على GitHub وارفع هذا المجلد إليه:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/kayan-soft.git
   git push -u origin main
   ```
2. ادخل vercel.com → Add New Project → اختر المستودع من GitHub
3. Vercel يكتشف Vite تلقائيًا (Build Command: npm run build, Output: dist) → اضغط Deploy
4. من إعدادات المشروع في Vercel → Domains → أضف kayan-soft.online
5. عدّل DNS عند مزود الدومين حسب القيم التي يعرضها Vercel (عادة A record أو CNAME)

بعد هذه الخطوة، أي git push جديد على فرع main ينشر نسخة محدّثة من الموقع تلقائيًا.
