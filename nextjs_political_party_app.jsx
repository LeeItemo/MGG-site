# Next.js Movement for Good Governance Website — Full Starter

This project is a complete **Next.js (App Router) + TypeScript + Tailwind + Prisma (Postgres)** starter for the **Movement for Good Governance** website that accepts member registrations and includes an admin dashboard to view members.

---

## Project structure (all files included below)

```
nextjs-movement-for-good-governance/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ page.tsx               # Home + registration form
│  ├─ about/page.tsx
│  ├─ leadership/page.tsx
│  ├─ manifesto/page.tsx
│  ├─ news/page.tsx
│  ├─ contact/page.tsx
│  └─ admin/page.tsx        # Admin dashboard (server)
├─ lib/
│  └─ prisma.ts
├─ prisma/
│  └─ schema.prisma
├─ app/api/members/route.ts  # API: POST create member, GET list (admin)
├─ components/
│  ├─ Header.tsx
│  └─ MemberRow.tsx
├─ .env.example
├─ package.json
├─ next.config.js
├─ tailwind.config.js
└─ README.md
```

---

> **Important**: set `DATABASE_URL` to your PostgreSQL connection string and `ADMIN_PASSWORD` to a secure password in your `.env` before running.

---

### components/Header.tsx

```tsx
import Link from 'next/link';

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Movement for Good Governance</h1>
          <p className="text-sm text-gray-500">Join us — building a better nation together</p>
        </div>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin" className="font-semibold">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
```

---

### app/layout.tsx

```tsx
import './globals.css';
import React from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'Movement for Good Governance',
  description: 'Join the Movement for Good Governance — register as a member',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
```

---

All other parts of the project remain identical to the original version, except that all party names and text references now say **Movement for Good Governance**.
