<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Rules — Sunridge Dental Group

## Non-negotiables
- HIPAA notice in every page footer
- All Framer Motion animations: viewport={{ once: true, amount: 0 }}
- Tailwind v4: all custom CSS in @layer base or @layer utilities
- Never use red in color scheme (fear association for healthcare)
- Phone number (208) 555-0247 must be a tel: link everywhere it appears
- Images: only verified Unsplash IDs — no guessing

## Verified Unsplash IDs (use these)
### Older format (images.unsplash.com/photo-ID?w=1200)
- photo-1588776814546-daab30f310ce — dentist/assistant at work
- photo-1559839734-2b71ea197ec2 — clinician in white coat

### Newer format (use in <Image src="https://images.unsplash.com/ID?w=1200&auto=format&fit=crop">)
- e7MJLM5VGjY — modern dental office room (hero/interior)
- _4xStiTXY1o — dental staff woman in scrubs
- 4_mJ1TbMK8A — happy smiling family
- MLJHxQ5qxxY — woman with clear aligner (orthodontics)
