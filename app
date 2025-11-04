nextjs-movement-for-good-governance/
├─ app/
│ ├─ layout.tsx
│ ├─ globals.css
│ ├─ page.tsx # Home + registration form
│ ├─ about/page.tsx
│ ├─ leadership/page.tsx
│ ├─ manifesto/page.tsx
│ ├─ news/page.tsx
│ ├─ contact/page.tsx
│ └─ admin/page.tsx # Admin dashboard (server)
├─ lib/
│ └─ prisma.ts
├─ prisma/
│ └─ schema.prisma
├─ app/api/members/route.ts # API: POST create member, GET list (admin)
├─ components/
│ ├─ Header.tsx
│ └─ MemberRow.tsx
├─ .env.example
├─ package.json
├─ next.config.js
├─ tailwind.config.js
└─ README.md
