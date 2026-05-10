@AGENTS.md

# Sunridge Dental Group

Family dental practice in Twin Falls, Idaho. Next.js 16 App Router + TypeScript + Tailwind v4.

## Commands (from /Users/drive/sunridge-dental)
```bash
npm run dev    # localhost:3000
npm run build
npm run lint
```

## Color System
- Sky blue: #0EA5E9 (primary, trust)
- Teal: #0D9488 (secondary, care)
- White: #FFFFFF
- Light gray: #F8FAFC

## Typography
- Headings: Nunito (700, 800) — friendly, approachable
- Body: Open Sans (400, 600)

## Style Rules
- Hero h1 >= text-5xl font-extrabold
- Section headings >= text-4xl
- All Framer Motion whileInView must use viewport={{ once: true, amount: 0 }}
- All custom CSS inside @layer base or @layer utilities — never unlayered

## Supabase Clients
- lib/supabase/client.ts — browser only
- lib/supabase/server.ts — Server Components / Route Handlers
- lib/supabase/admin.ts — service role only, never import client-side

## HIPAA
HIPAA notice in every footer. Privacy Policy link required.
