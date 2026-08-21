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
  data/projects.js        ← بيانات المشاريع (عدّل/أضف مشاريعك الحقيقية هنا)
  components/              ← Navbar, Footer, ProjectCard, ProjectThumb, TypedCode
  pages/                    ← Home, Portfolio, ProjectDetail, Services, About, Contact
```

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
