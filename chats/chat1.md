# שיפור אתר דרמטי

_Started 2026-05-16 19:43 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "KobiBarak.com"
Current date is now May 16, 2026
</system-info>

<pasted_text name="Pasted text (262 lines)">
# KobiBarak.com — פרומפט מלא ל-Lovable

## הוראות כלליות

בנה אתר אישי-מקצועי בשם KobiBarak.com.
האתר בעברית, כיוון RTL מלא (dir="rtl" על html), פונט Rubik מ-Google Fonts.
עיצוב כהה (רקע שחור/כמעט-שחור), צבע מוביל סגול #4F1AD6, טקסט לבן.
השתמש ב-Framer Motion לאנימציות חלקות.
האתר הוא Single Page עם ניווט חלק (smooth scroll) בין הסקשנים.
רספונסיבי מלא — Desktop, Tablet, Mobile.

## עקרונות עיצוב

- רקע: #000000 עד #0A0A0A
- צבע מוביל: #4F1AD6 (סגול)
- טקסט ראשי: #FFFFFF
- טקסט משני: rgba(255,255,255,0.6)
- שטחים ומסגרות: rgba(255,255,255,0.05) עד rgba(255,255,255,0.08)
- פונט כותרות: Rubik 600 (Semibold)
- פונט גוף: Rubik 400 (Regular)
- Border radius: 16px-24px על כרטיסים
- Gap: 24px בין כרטיסים

## אנימציות (Framer Motion)

כל סקשן: fade-in + slide-up כש-scroll מגיע אליו (whileInView, viewport once)
כותרות: stagger animation — כל מילה מופיעה בזו אחר זו
כרטיסים: stagger — כל כרטיס מופיע עם עיכוב קל אחרי הקודם
Hero: אפקט parallax עדין על הרקע + חלקיקים צפים (particles)
כפתורים: hover scale + glow effect בסגול
Reveal text: טקסט שמתגלה בהדרגה כש-scroll עובר עליו (כל מילה הולכת מאפור-כהה ללבן)
Smooth scroll בין סקשנים

## מבנה הדף

### 1. Navigation (Fixed, שקוף עם blur)

לוגו: "קובי ברק" (טקסט, Rubik 600)
תפריט: בית | אודות | פרויקטים | יצירת קשר
כפתור CTA: "בואו נדבר" (רקע סגול)
מצב מובייל: המבורגר מנו

### 2. Hero Section (גובה מסך מלא)

רקע: גרדיאנט סגול-שחור רדיאלי עם חלקיקים צפים
תגית: "יזם · בונה מערכות AI · מוצרים דיגיטליים"

כותרת H1 (גדולה, 72-86px):
```
קובי ברק
```

תת-כותרת H2 (48-54px):
```
יזם, בונה מערכות AI ומוצרים דיגיטליים.
```

פסקה:
```
לא מתוך טרנד. מתוך צורך אמיתי, תהליך ברור ובנייה שמחזיקה מים גם אחרי הדמו.
```

כפתורים:
- "הכירו את העבודה שלי" → scroll ל-#projects (כפתור עם מסגרת)
- "מעבר ל־Barak AI" → https://barak-ai.co.il (כפתור מלא סגול, נפתח בטאב חדש)

### 3. Positioning Statement (Reveal Text)

רקע: שחור
אנימציה: טקסט שמתגלה מילה-מילה כשגוללים — כל מילה עוברת מ-opacity 0.15 ל-1
גודל: 40-48px, Rubik Regular

טקסט:
```
אני לא מגיע ל־AI מהצד של ההייפ. אני מגיע אליו מהצד של תהליכים, שירות, מערכות, אנשים ובעיות שצריך לפתור.
```

כפתור: "קצת עליי" → scroll ל-#about

### 4. What Drives Me

תגית: "גישה"

כותרת:
```
פחות רעש.
```

גוף:
```
יותר מערכות שעובדות. אני מאמין ש־AI טוב לא צריך להחליף שיקול דעת אנושי, אלא לעזור לעסק להגיב מהר יותר, להבין טוב יותר ולחסוך עבודה ידנית.
```

### 5. Areas of Work (id="services")

תגית: "תחומי עשייה"

כותרת:
```
מה אני בונה
ואיך אני עובד
```

תת-כותרת:
```
קודם להבין את הבעיה, אחר כך לתכנן את המערכת, ורק אז לבחור את הכלים.
```

6 כרטיסים בגריד 3×2 (מובייל: 1 עמודה):

כרטיס 1:
- אייקון: Cpu
- כותרת: מערכות AI
- תיאור: מידע, תהליכים, משתמשים וכלי AI — במערכת אחת שעובדת.

כרטיס 2:
- אייקון: Settings/Gear
- כותרת: אוטומציה עסקית
- תיאור: מה שרץ ידנית — עובר לאוטומט. חיבור בין הכלים שכבר יש.

כרטיס 3:
- אייקון: Phone/Mic
- כותרת: סוכנים קוליים וצ׳אטבוטים
- תיאור: מענה, סינון, איסוף מידע והעברת פניות — בכל ערוץ, 24/7.

כרטיס 4:
- אייקון: Monitor
- כותרת: מוצרים דיגיטליים
- תיאור: דשבורדים, פלטפורמות SaaS ומערכות ניהול — בנויות סביב הצורך.

כרטיס 5:
- אייקון: Car/Wrench
- כותרת: רכב ושירות
- תיאור: ניסיון מעשי מעולם הרכב והשירות — מתורגם למערכות דיגיטליות.

כרטיס 6:
- אייקון: Compass
- כותרת: ליווי ואסטרטגיית AI
- תיאור: מיפוי צרכים, בניית תוכנית עבודה והטמעה — מהשאלה הראשונה ועד מערכת חיה.

תגיות מתחת לכרטיסים (chips/badges קטנים):
צ׳אטבוטים | סוכנים קוליים | אוטומציות | אתרים | CRM | SaaS | Garage-OS | Nadlan-OS

### 6. Process (id="process")

תגית: "איך אני עובד"

כותרת:
```
קודם הבעיה, אחר כך המערכת.
```

תת-כותרת:
```
הגישה שלי מחברת בין הבנה עמוקה של שטח לבין בנייה טכנולוגית פרקטית.
```

3 כרטיסים בשורה:

1. אייקון: Search | כותרת: להבין את הבעיה | תיאור: ניתוח המצב הקיים, מיפוי תהליכים, זיהוי צווארי בקבוק והגדרת מטרות ברורות.
2. אייקון: Blueprint | כותרת: לתכנן את המערכת | תיאור: אדריכלות פתרון, בחירת טכנולוגיות, תכנון ממשקים וזרימת מידע.
3. אייקון: Wrench | כותרת: לבנות ולהטמיע | תיאור: פיתוח, בדיקות, הדרכה והשקה — עם ליווי צמוד עד שהמערכת רצה חלק.

### 7. Projects (id="projects")

תגית: "פרויקטים"

כותרת:
```
מה שבניתי.
```

תת-כותרת:
```
כל פרויקט נבנה בהתאמה מלאה. בלי תבניות גנריות, בלי פתרונות מדף.
```

5 כרטיסי פרויקטים (גריד או רשימה):

פרויקט 1:
- שם: Barak AI
- תיאור: מערכות AI לעסקים, אוטומציות, סוכנים קוליים ואתרים חכמים.
- תגיות: AI | אוטומציות | סוכנים קוליים | צ׳אטבוטים | SaaS
- לינק: https://barak-ai.co.il

פרויקט 2:
- שם: Garage-OS
- תיאור: מערכת ייעודית לעולמות השירות והרכב.
- תגיות: Vertical AI | מוסכים | ניהול שירות | רכב

פרויקט 3:
- שם: Nadlan-OS
- תיאור: מערכת לניהול לידים, נכסים ותהליכי עבודה עבור אנשי נדל״ן.
- תגיות: Vertical AI | נדל״ן | CRM | לידים

פרויקט 4:
- שם: MultiX Simulator
- תיאור: סימולטור אינטראקטיבי לממשקי מולטימדיה וחוויות דיגיטליות בעולם הרכב.
- תגיות: רכב | סימולציה | UX

פרויקט 5:
- שם: Ale Zahav LIVE
- תיאור: פלטפורמה דיגיטלית לפעילות מקוונת, שידורים חיים ותוכן עבור הגיל השלישי.
- תגיות: קהילה | וידאו | CMS | ניהול

כפתור: "לכל הפרויקטים" → /portfolio

### 8. About (id="about")

תגית: "אודות"

כותרת:
```
הרקע שלי מהשטח, הבנייה מהראש.
```

גוף:
```
הרקע שלי מגיע מעולמות השירות, הרכב, הדיגיטל והטכנולוגיה — מקומות שבהם תהליך לא טוב הופך מהר מאוד לבעיה עסקית אמיתית.
```

3 כרטיסי ערכים:

1. מספר: 01 | כותרת: התאמה, לא תבנית | תיאור: כל מערכת נבנית סביב העסק הספציפי. אין העתק-הדבק.
2. מספר: 02 | כותרת: טכנולוגיה בגובה העיניים | תיאור: אני מסביר בעברית פשוטה. בלי ז׳רגון מיותר, בלי באזוורדס.
3. מספר: 03 | כותרת: תוצאות מדידות | תיאור: לידים, חיסכון בזמן, שביעות רצון לקוחות. מספרים, לא הבטחות.

### 9. CTA / Soft Referral

רקע: גרדיאנט סגול עדין

כותרת:
```
מחפשים פתרון AI?
```

גוף:
```
את העבודה המסחרית שלי אני מרכז דרך Barak AI — שם אפשר לראות שירותים, פתרונות ודרכי התקשרות.
```

כפתור: "מעבר ל־Barak AI" → https://barak-ai.co.il (נפתח בטאב חדש)

### 10. Footer

שם: קובי ברק
תיאור: יזם, בונה מערכות AI ומוצרים דיגיטליים.
לינקים: Barak-AI.co.il | SkyMarketing.co.il | WhatsApp (https://wa.me/972505552007)
ניווט: בית | אודות | פרויקטים | יצירת קשר
שנה: 2026

## דגשים טכניים

- dir="rtl" על אלמנט html
- פונט: @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap')
- כל text-align: right
- Framer Motion לאנימציות
- Lucide React לאייקונים
- Tailwind CSS
- רספונסיבי: sm, md, lg breakpoints
- Smooth scroll: scroll-behavior: smooth
- שימוש ב-intersection observer לאנימציות scroll
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design. Follow the instructions about design in your system prompt, particularly the 'How to do design work' section. Use the design_canvas starter component, or make a full-bleed prototype and offer options via Tweaks.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>

<attached-skill name="Barak AI Design System (design system)">
[Design System] This project uses the **Barak AI Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.
    
    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/019ddb06-8056-7b5c-bc39-3914fe67bfa9/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Barak AI — Design System

> **מערכות AI לעסקים — בניית SaaS, אתרים וצ׳אטבוטים**
> _AI Systems for Businesses — building SaaS, websites and chatbots._
> A studio building AI products for itself and its clients — voice agents, SaaS, websites, chatbots, and automation tools. Hero positioning on the live site: _"הופכים עסקים למכונות צמיחה עם SaaS, אתרים ו-AI"_ — "Turning businesses into growth machines with SaaS, websites and AI."

### Personas are voice-agents inside vertical SaaS products
**Noa, Daniel, Michal** are the **names of the voice agents** — not real team members.

| Agent | Lives in | Vertical | Live URL |
|---|---|---|---|
| **נועה (Noa)** | The Barak AI flagship demo | General — calls the founder back from any landing page | `barak-ai.co.il` |
| **דניאל (Daniel)** | **Garage-OS** | Auto-shops / mechanics — schedules service appointments, sends reminders | `garage-os.co.il` |
| **מיכל (Michal)** | **Nadlan-OS** | Real estate — qualifies buyer leads, books viewings | `nadlan-os.co.il` |

Garage-OS and Nadlan-OS are **separate vertical SaaS products** that Barak AI builds and operates. Each has its own marketing site, dashboard product, and brand mark, but all three share the Barak AI typographic + gradient system.

The portrait photos used in launch posters are stock / generative imagery — they're voice-agent personas, not employees.

This folder is the canonical brand kit for Barak AI: tokens, type, voice, logos, illustrations, and a UI kit replicating the marketing/landing surface so you can prototype on-brand work end-to-end.

---

## Sources & inputs

The system was built from a set of brand assets the founder provided directly — there is no live codebase or Figma file attached at this time. **Inputs:**

- **Logos** — `Barak-AI logo.png` (white wordmark on black), `Barak-AI logo-black.png` (black wordmark on white), `Barak-AI logo-clear.png` (mark-only, transparent), `favicon.png`, plus assorted Open Graph variants for social.
- **Marketing posters** (`d1.png` … `d10.png`, `1.png` … `6.png`, `10.png`) — a sequence of vertical 4:5 social posts in both light and dark / "neon" treatments featuring the same headline and three AI-employee personas (Noa / Daniel / Michal). Used as the source of truth for color, type, layout language, and voice.
- **Product mock-ups** — `2X4sp3YKUEYSS0nbXDMDH_Fe13FW8z.webp` (laptop + monitor dashboard), `BQSRikWczKiNrHIQMi8qo_mTn1d5Ix.webp` (phone chat). These define the in-product visual language.
- **Brand-line URL** referenced in posters: `https://barak-ai.co.il`.

> _If a Figma file or codebase becomes available, this README should be re-grounded against them — screenshots are lossy._

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography. |
| `SKILL.md` | Cross-compatible Agent-Skill descriptor for Claude Code. |
| `colors_and_type.css` | All design tokens (color, type, spacing, radius, shadow, motion). |
| `assets/` | Logos, brand marks, product mock-ups, sample posters. |
| `preview/` | One HTML card per token-cluster for the Design System tab. |
| `ui_kits/marketing/` | Recreation of the Barak AI poster / landing language (dark surface). |
| `ui_kits/website/` | Light-surface website matching `barak-ai.co.il`. |
| `ui_kits/nadlan-os-site/` | Marketing landing for **Nadlan-OS** (real-estate vertical, agent: מיכל). |
| `ui_kits/nadlan-os-app/` | The actual **Nadlan-OS dashboard product** — leads, voice inbox, KPIs. |
| `ui_kits/garage-os-site/` | Marketing landing for **Garage-OS** (auto-shop vertical, agent: דניאל). |
| `ui_kits/_shared/` | Shared mini-site components used by Garage-OS / Nadlan-OS landings. |

---

## Brand essence

**Tagline — Voice-Agents product ONLY** (always shown spaced, dotted, RTL):

> **קול · חכם · אנושי · עסקי**
> _Voice · Smart · Human · Business_

> ⚠️ **Scoping rule.** This tagline is reserved for the **AI Voice Agents** product line — landing pages, posters, OG cards, decks where the subject is the voice-agent capability. **Do not use it on other Barak AI surfaces** (general consultancy, dashboards, chat-only products, automation tooling). For those, lead with the headline + buyer outcome and skip the tagline.

Those four words are the voice-agents positioning. Every artefact should feel like _at least three of them_ at once. "Voice" because Barak's flagship is voice agents that pick up the phone. "Smart" because it's AI. "Human" because the agents have names, faces, and personalities (Noa, Daniel, Michal). "Business" because the buyer is an Israeli SMB owner — automotive shops, real-estate agencies, service businesses.

**Buyer**: Hebrew-speaking Israeli small/medium business owners. RTL is the default; English is a secondary surface.

**Promise**: _"העובדים החדשים שלכם כבר כאן — והם לא צריכים הפסקת קפה"_ — _"Your new employees are already here, and they don't need a coffee break."_ Friendly, slightly cheeky, but framed as a serious operational upgrade.

---

## CONTENT FUNDAMENTALS

### Language & address
- **Hebrew first**, English as accent (product names, "AI", domain).
- **Plural "you"** (לכם / שלכם / אתם) — addresses the business owner and their team together. Never the singular "אתה."
- **First-person founder voice** in the larger headlines: _"החלטתי להציג…"_ / _"אני נרגש להשיק…"_ — feels like a personal launch announcement, not corporate copy.
- **Code-mixing is fine and intentional**: "Barak AI" stays in Latin, "AI" stays uppercase Latin, "WhatsApp" / "CRM" stay in English. Hebrew wraps around them.

### Tone
- **Confident, founder-pitch energy** — short declarative sentences, exclamations, rockets 🚀, gift boxes 🎁.
- **Warm and slightly cheeky** — coffee-break joke; the agents have personalities ("הסוכנת האישית שלי", "המקצוען של המוסכים", "הכוכבת של עולם הנדל"ן").
- **Outcome-led, not feature-led** — "80% Automated Resolution", "60% CRM Efficiency", "5 עסקים ראשונים יקבלו מחיר הקמה מיוחד".
- **Never apologetic, never hedged.** No "we think" / "perhaps." Always "כבר כאן."

### Casing & punctuation
- Hebrew titles: sentence case, never SHOUTY-CAPS.
- English in headlines: **Title Case** for product names ("Barak AI", "Growth Engine Dashboard"); ALL-CAPS only for the eyebrow / bullet tagline.
- Tagline gets **periods between words**, wide letter-spacing: _"קול. חכם. אנושי. עסקי."_
- Numbers ALWAYS as digits ("5 עסקים", "24/7", "80%") — never spelled out.
- One-liner CTAs end with the action: _"בואו לדבר עם נועה"_, _"בואו לראות איך זה עובד"_.

### Emoji & symbols
- **Yes, used.** But narrowly: 🚀 (launch / "I'm excited"), 🎁 (offer / discount), ☕ (the coffee-break joke), 💬 / 📞 / 🔧 / 🏠 (icon-coded for the three personas — chat, phone, wrench, house). WhatsApp green logo for "send to WhatsApp."
- **Never** as decoration in body copy. Always **anchored to a meaningful object** in the message.

### Voice samples to copy
- _"העובדים החדשים שלכם כבר כאן."_
- _"במקום רק לדבר על AI, החלטתי להציג את הצוות החדש שגייסתי לעסק שלכם."_
- _"5 עסקים ראשונים יקבלו מחיר הקמה מיוחד."_
- _"בואו לדבר עם נועה ולראות איך זה עובד."_
- _"קול. חכם. אנושי. עסקי."_

### Words to avoid
- "פתרונות" alone (cliché Israeli B2B word) — prefer concrete: "סוכנת", "מקצוען", "מערכת."
- Generic AI buzzwords: "מהפכני", "פורץ דרך", "המתקדם בעולם." Barak AI sells through specificity, not adjectives.
- English marketing fluff like "innovative", "cutting-edge."

---

## VISUAL FOUNDATIONS

### The two surfaces
Barak AI lives in **two paired moods** that share the same gradient ramp and type:

1. **Light / Day — DEFAULT for the product/website.** Soft white-to-lavender (`#F7F8FF`) backgrounds, navy headlines, blue→indigo CTA pills. The live site (`barak-ai.co.il`) uses this surface throughout. Use this for landing, product, dashboards, docs.
2. **Dark / Neon — for SOCIAL POSTERS and OG.** Near-black navy (`#050615`) with the lightning-bolt mark glowing cyan, neon-violet card borders, magenta/cyan accents. This is the hype/launch surface seen in the d-series posters. Don't use it as the primary website surface.

### Color
- Brand ramp: cyan `#6FD3FF` → blue `#5B7BF7` → indigo `#4D3BD8`. Used as a **vertical or 135° gradient** across the wordmark, the lightning bolt cutout in the "b", primary CTA buttons, persona-icon tiles, and the sparkle accents.
- A second neon layer adds violet `#6C3FE0` and magenta `#C04CE8` for glow ONLY on dark backgrounds. Don't bring magenta into light surfaces.
- Neutrals are **lavender-tinted** on light (`#EEF1FB`, not pure grey) and **indigo-tinted** on dark (`#0B0E2E`, not pure black). Pure greys feel off-brand.

### Typography
- **Heebo** is the workhorse — it has full Hebrew + Latin coverage and matches the geometric sans look of the posters. Rubik is an acceptable fallback.
- **Hebrew display** is HEAVY: 800–900 weight, tight leading, the standout phrase ("כבר כאן", "Barak AI") rendered in **gradient fill** while the rest stays solid navy/white.
- **Body** runs 400–500, ~1.5 leading, comfortable.
- **Tagline** ("קול. חכם. אנושי. עסקי.") is always wide-tracked (~`0.12em`) at body size — its rhythm IS the layout element.

### Backgrounds
- Light: faint diagonal sparkle / wave lines in the corners (very subtle, ~6% opacity), occasionally a dotted-grid corner. Never busy.
- Dark: deep navy with a **fine network/constellation grid** at the bottom, occasional radial-glow halos behind the logo or persona portraits. Sometimes an **animated audio-waveform** behind the chat-agent persona — that motif is core when "voice" is being sold.

### Logo / mark behaviour
- The mark is a stylized lowercase **"b"** with a lightning-bolt negative-space cutout. The ramp runs top-to-bottom: cyan crown → blue body → indigo tail.
- On dark, the mark **glows** — a soft cyan halo behind it, sometimes a subtle reflection.
- Wordmark "Barak AI" is set in a heavy geometric sans with normal tracking. "Barak" and "AI" are weight-equal.
- Minimum clear-space = the height of the lightning-bolt cutout on all sides.
- **Never rotate, recolor, or outline the mark.** The gradient is part of the identity.

### Layout & rhythm
- Posters are **4:5 vertical** (1080 × 1350-ish). Landing surfaces are stacked vertical sections.
- A typical hero structure: small logo lockup (top), big multi-line headline with one gradient word, one sentence of body, then three persona cards in a row, then a promo strip, then a single pill CTA, then the URL + tagline footer.
- **Three-up persona cards** are the brand's signature element — circular portrait, name, role, two-line description. Always three. Always the same three names if it's the launch comms.
- Sections breathe — generous vertical spacing, never edge-to-edge dense.

### Cards
- Light: white background, `12-16px` padding, `20px` radius, soft shadow `0 4px 12px rgba(74,108,247,0.10)`, occasional 1px hairline border `#E1E6F5`.
- Dark: `#0B0E2E` fill, `1px` cyan/violet stroke (`#3D3FA0` ish), outer glow `0 0 28px rgba(108,63,224,0.5)`, `20-28px` radius. The glow is the brand.

### Buttons (CTA)
- **Primary pill** with the brand `135°` gradient fill, white text, ~52-60px tall, ~999px radius. Has a subtle inner highlight (1px white at 20% along top edge). Often paired with a chevron or icon inside a small white circle.
- **Outline pill** on dark — 1px stroke in the gradient (using border-image), transparent fill, white text.
- **Hover**: gradient shifts ~5% darker; the glow grows ~20%.
- **Press**: scale `0.97`, glow shrinks.
- **Disabled**: drops to flat `#9099B8`, no gradient.

### Iconography
See `ICONOGRAPHY` section below.

### Animation
- **Fade + 8px rise** on entrance (200-300ms, ease-out).
- **Glow pulse** on the lightning bolt — 2-3s loop, 0.8 → 1.0 opacity.
- **Audio waveform** behind voice-agent personas — animated bars, brand-gradient fill.
- **CTA hover** = gentle 1.02 scale + glow expansion, NOT bouncy spring. The brand is "smart business," not playful.
- No skeuomorphic shimmer, no parallax, no floating 3D blobs.

### Hover & press states
- Hover on cards: lift +2px translate, shadow grows ~30%, border-color shifts toward primary.
- Press on cards / buttons: scale `0.97`, shadow shrinks. 120ms.
- Links: brand blue, underline appears on hover.

### Borders & shadows
- Light: hairline `1px` borders in `#E1E6F5`, soft blue-tinted shadows.
- Dark: thin `1px` strokes in indigo (`#2A2F66` to `#3D3FA0`) layered with **outer glow** rgba color from the brand ramp. The glow IS the depth — there's no traditional drop shadow on dark.

### Transparency & blur
- Used **rarely**: glassy bottom-sheet on the marketing site for the navbar (white-90% + 12px backdrop-blur), and inside chat-bubble overlays in product mockups.
- No frosted-everything aesthetic. Solid surfaces are the default.

### Imagery treatment
- AI personas: studio-portrait headshots, cool-toned (slightly desaturated, blue/violet tint pulled into shadows on dark posters).
- Product environments: bright corporate offices, marble desks, modern hardware. Always crisp, never grainy or filtered.
- 3D illustration: occasional gift-box / rocket icons rendered with a metallic-blue plastic look — used as small accents, not centerpieces.
- **No stock photography of "diverse smiling team in office,"** even though the personas LOOK like that — they're explicitly framed as AI characters with persona icons (chat, wrench, house) overlaid on the avatar.

### Corner radii
- Cards: `20px` (`--radius-lg`) is the default.
- Pills / CTAs: `999px` (`--radius-pill`).
- Inputs: `14px` (`--radius-md`).
- Persona avatars: full circle.

### Use of the lightning bolt as a motif
The bolt cutout in the logo is reused at multiple scales: as a **decorative sparkle** in poster backgrounds (small white-on-dark or blue-on-light), as the **divider** between sections in some layouts, and as the **active state** on icons (the icon glows / electrifies on hover). When in doubt, the lightning is the visual hook.

---

## ICONOGRAPHY

Barak AI uses **two coexisting icon systems**:

### 1. Hand-rolled persona icons (brand-critical)
The three AI personas are always tagged with the same three icons, used as a navigational shorthand across all assets:
- **💬 Chat bubble** — Noa, the personal assistant.
- **🔧 Wrench** — Daniel, the auto-shop pro.
- **🏠 House** — Michal, the real-estate star.

These appear as **icon-tile overlays** on the persona avatars. On dark posters they are line-art with cyan/violet glow; on light posters they are filled white-on-blue tiles with the brand gradient. **Always those three for the launch comms.** New verticals get their own icon paired to a new persona.

### 2. UI icons — Lucide
For everything else (nav, controls, status indicators, dashboard icons), use **[Lucide](https://lucide.dev)** — load via CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

**Why Lucide:** rounded-but-not-soft 1.75-2px stroke geometric icons that match Heebo's character; same family as the icons hinted in the dashboard mockups (chevrons, bell, search, filter). **Stroke width: 2px. Color: currentColor.** Icons inherit text color.

> _Substitution flag: We do not have a confirmed icon set from the codebase. Lucide is a substitution chosen to match the visual weight of the icons present in the provided mockups. **Replace if/when the actual icon set is provided.**_

### Emoji
Used **narrowly and on-purpose** in marketing copy — see the Content Fundamentals "Emoji & symbols" section. Never used as nav or UI affordance. Never decorative.

### SVG sparkles & geometric accents
The four-pointed "sparkle" glyph (✦, ✧) appears around hero headlines as a brand accent — usually rendered in the brand gradient at 12-16px, ~2-3 per layout, asymmetric placement.

### File naming convention
Icons in `assets/icons/` (when added) follow `kebab-case.svg`. Persona-tagged icons: `persona-noa-chat.svg`, `persona-daniel-wrench.svg`, `persona-michal-house.svg`.

---

## Caveats / known gaps

- **No codebase, no Figma.** Everything here is reverse-engineered from poster + mock-up images. Color hex values are eyedropped; the actual Barak AI website (`Barak-AI.co.il`) was not crawled and may reveal additional tokens.
- **Font confirmed: Heebo.** The user does not have a custom licensed font; Heebo (Google Fonts) is the official choice for this system, matching what `barak-ai.co.il` uses.
- **No iconography source.** Lucide is a stand-in.
- **The product itself isn't documented here** — only the marketing surface. Dashboards (`dashboard-mockup.webp`) and the chat product (`mobile-chat-mockup.webp`) are referenced as illustrative but not fully recreated as UI kits in this pass.

---

## How to use this kit

1. Pull in `colors_and_type.css` at the top of any HTML file.
2. Set `<html dir="rtl" lang="he">` for Hebrew surfaces, `<html dir="ltr" lang="en">` for English.
3. Use semantic type classes (`.t-display-1`, `.t-h1`, etc) instead of styling headings ad-hoc.
4. For headlines, wrap **one** standout word in `<span class="t-grad">…</span>` to get the brand gradient text.
5. Pull logo from `assets/` — pick the right one for your background (`logo-on-black.png`, `logo-on-white.png`, `logo-mark.png`).
6. Lean on the persona-card three-up pattern when introducing AI capabilities.
7. End **voice-agent** layouts with the dotted tagline: _"קול · חכם · אנושי · עסקי"_ in `.t-tagline`. **Skip it on non-voice-agent surfaces.**

When in doubt, look at `assets/sample-poster-dark.png` and `assets/sample-poster-light.png` — those two posters define the brand more than any token list.

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/019ddb06-8056-7b5c-bc39-3914fe67bfa9/colors_and_type.css`). The 105 custom properties it defines are:

--accent, --b-blue-400, --b-blue-500, --b-blue-600, --b-cyan-300, --b-cyan-400, --b-indigo-600, --b-indigo-700, --b-magenta-500, --b-violet-600, --bg, --bg-card, --bg-elevated, --bg-subtle, --border, --border-strong, --danger, --dark-bg, --dark-stroke, --dark-stroke-2, --dark-surface, --dark-surface-2, --dark-text, --dark-text-2, --dark-text-3, --dur-base, --dur-fast, --dur-slow, --ease-in-out, --ease-out, --ease-spring, --fg, --fg-2, --fg-3, --fg-4, --fg-on-brand, --font-body, --font-display, --font-mono, --fs-2xl, --fs-3xl, --fs-4xl, --fs-5xl, --fs-6xl, --fs-base, --fs-lg, --fs-md, --fs-sm, --fs-xl, --fs-xs, --glow-brand, --glow-cyan, --glow-violet, --grad-brand, --grad-brand-h, --grad-cta, --grad-cta-soft, --grad-neon, --info, --lh-loose, --lh-normal, --lh-snug, --lh-tight, --neutral-0, --neutral-100, --neutral-200, --neutral-300, --neutral-400, --neutral-50, --neutral-500, --neutral-600, --neutral-700, --neutral-800, --neutral-900, --primary, --primary-hover, --primary-soft, --radius-2xl, --radius-lg, --radius-md, --radius-pill, --radius-sm, --radius-xl, --radius-xs, --shadow-lg, --shadow-md, --shadow-sm, --shadow-xl, --space-1, --space-10, --space-12, --space-16, --space-2, --space-20, --space-3, --space-4, --space-5, --space-6, --space-8, --success, --tracking-normal, --tracking-tight, --tracking-wide, --tracking-wider, --warning

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/019ddb06-8056-7b5c-bc39-3914fe67bfa9/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

## Assistant

_[tool: update_todos]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: view_image]_

_[tool: update_todos]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: update_todos]_

Now I have all the design context I need. Let me build the site — I'll split it into clean component files for maintainability.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now let me write the main HTML file that ties everything together:

_[tool: write_file]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

האתר מוכן! 🎉

**KobiBarak.com** — אתר אישי-מקצועי כהה עם כל הסקשנים שביקשת:

- **ניווט קבוע** עם blur, תפריט המבורגר במובייל
- **Hero** עם חלקיקים צפים, פרלקס, ואנימציות כניסה מדורגות
- **Reveal Text** — הטקסט מתגלה מילה-מילה בגלילה
- **6 כרטיסי תחומי עשייה** + **3 כרטיסי תהליך** + **5 פרויקטים**
- **אודות** עם 3 ערכים ממוספרים
- **CTA** עם הפניה ל-Barak AI
- **Footer** עם לינקים וניווט

**התאמות (Tweaks)** — הפעל מהטולבר כדי לשנות:
- צבע מוביל (4 אפשרויות)
- סגנון כרטיסים (glass / outlined / solid)
- הצגת/הסתרת חלקיקים

**הערות:**
- האנימציות מבוססות Intersection Observer + CSS transitions (תוצאה זהה ל-Framer Motion)
- האייקונים נטענים מ-Lucide CDN
- רספונסיבי מלא — Desktop, Tablet, Mobile

## User

תשפר את האתר שיהיה וואו, אני רוצה ליפול לרצפה, יש לך יד חופשית

## Assistant

_[tool: update_todos]_

I'll take the site from good to jaw-dropping. Full creative freedom — let's go.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the main HTML with all the premium CSS — aurora keyframes, animated gradient borders, shimmer effect, noise texture:

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

הגרסה המשודרגת מוכנה! הנה מה שנוסף:

**אפקטים חדשים:**
- 🌌 **Aurora Background** — גרדיאנטים אורגניים צפים שנעים בעדינות
- ✨ **Constellation Particles** — חלקיקים מחוברים בקווים + אינטראקציה עם העכבר
- 🔮 **Mouse Glow** — זוהר סגול עדין שעוקב אחרי הסמן
- 💎 **Shimmer Name** — אפקט ברק שעובר על "קובי ברק" בהירו
- 🎨 **Animated Gradient Borders** — קו גרדיאנט עליון מופיע על כרטיסים ב-hover
- 📍 **Section Dividers** — קווים זוהרים בין סקשנים

**שיפורים ויזואליים:**
- רקע כהה יותר (#060606) עם טקסטורת noise עדינה
- פרויקטים עם צבע ייחודי לכל אחד + פס אקסנט
- תהליך כ-timeline עם קו מחבר אנימטיבי
- מספרים בגרדיאנט בסקשן אודות
- Nav links עם אנדרליין אנימטיבי
- כפתורים עם inner highlight ו-glow

**Tweaks חדש:** זוהר עכבר (הפעלה/כיבוי)

ממתין לאימות מהרקע — אם יש בעיות אתקן מיד.

## User

,בדוק כי לא קיימים כל אלו

## Assistant

_[tool: fork_verifier_agent]_

בודק עכשיו את כל האפקטים אחד-אחד — ממתין לתוצאות האימות.

## User

Verifier agent check completed

## Assistant

✅ **אימות עבר בהצלחה — כל האפקטים קיימים ועובדים:**

1. ✅ Aurora Background — גרדיאנטים צפים מונפשים
2. ✅ Constellation Particles — קנבס עם חלקיקים וקווי חיבור
3. ✅ Mouse Glow — זוהר עוקב אחרי העכבר
4. ✅ Shimmer Name — אפקט ברק על "קובי ברק"
5. ✅ Animated Gradient Borders — קו עליון ב-hover על כרטיסים
6. ✅ Section Dividers — קווים זוהרים בין סקשנים
7. ✅ Noise Texture — טקסטורת רעש על כל הדף
8. ✅ Project Accent Stripes — פס צבעוני בכל כרטיס פרויקט
9. ✅ Timeline Line — קו מחבר מונפש בסקשן תהליך
10. ✅ Nav Underline Animation — אנדרליין אנימטיבי בלינקים

הכל חי ובועט 🔥

## User

אתה יכול ממש להתפרע, בלי קשר לטקסט ותו אתה גם יכול לשנות או להוסיף וגם אולי תשנה לגמרי את המבנה

## Assistant

_[tool: update_todos]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the main HTML with all the premium CSS:

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: snip]_

הגרסה השלישית מוכנה — שדרוג מקצה לקצה! 🔥

**מבנה חדש לגמרי:**
1. **Hero** — שם ענק עם stagger reveal + gradient text + צורות גיאומטריות צפות + constellation + aurora
2. **Statement** — טקסט scroll-reveal עם blur → sharp
3. **Bento Grid** — כרטיסי תחומי עשייה בגריד אסימטרי עם 3D tilt
4. **Marquee Ticker** — שני פסים אינסופיים של טכנולוגיות
5. **Projects** — כרטיס featured ל-Barak AI + גריד לשאר
6. **Process** — 3 שלבים עם קו מחבר אנימטיבי
7. **Stats** — מספרים אנימטיביים (counters) גדולים
8. **CTA** — כפתור מגנטי זוהר
9. **Footer** — נקי ומינימלי

**אפקטים:**
- Scroll progress bar צבעוני
- Magnetic hover על כפתורים
- 3D perspective tilt על כרטיסים
- Stagger word reveal animation
- Floating geometric wireframes
- Constellation particles + mouse interaction
- Aurora gradient blobs
- Animated counters
- Noise texture
- Nav underline animation

ממתין לאימות ברקע.

## User

לא רואים את השם שלי

## Assistant

_[tool: read_file]_

The issue is that `background-clip: text` on the parent span doesn't clip through to nested child spans properly. Let me fix by applying the gradient on each word directly:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

תוקן — הגרדיאנט מוחל עכשיו על כל מילה בנפרד במקום על ה-span החיצוני. ממתין לאימות שהשם נראה כמו שצריך.

## User

הטקסט הרץ לא ממוקם באמצע

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

תוקן — הוספתי `direction: ltr` על סקשן המרקי כדי שהטקסט הרץ יתנהג נכון ויהיה ממורכז. ממתין לאימות.

## User

מה זה הקוביה הזאת?

## Assistant

_[tool: str_replace_edit]_

זו אחת מהצורות הגיאומטריות הצפות — יותר מדי בולטת. אמחק אותה ואעדן את השאר:

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

תוקן — הסרתי את הצורות הבולטות (ריבוע, פלוס) והעדנתי את שאר הצורות הצפות לנקודות וטבעות עדינות מאוד. עכשיו הן כמעט בלתי נראות ורק מוסיפות עומק עדין לרקע.

_[tool: str_replace_edit]_

הכפתור ענק מדי עם glow מוגזם. מתקן:

_[tool: done]_

תוקן — הכפתור עכשיו בגודל רגיל, ללא גלישת שורה וללא glow מוגזם.

## User

Send this design to Canva: KobiBarak.com v3.html

## Assistant

_[tool: show_to_user]_

_[tool: tool_search_tool_bm25]_

Canva is connected. Let me prepare the bundled file for import.

_[tool: copy_files]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now add the bundler thumbnail:

_[tool: str_replace_edit]_

Now bundle it:

_[tool: super_inline_html]_

_[tool: show_html]_

The `#n` warning is from the SVG filter reference inside the data URI noise texture — it's self-contained and not a real missing asset. Let me verify the bundle works:

_[tool: show_html]_

_[tool: get_webview_logs]_

Bundle looks clean — just the expected Babel warning. Now let me get a public URL and send to Canva:

_[tool: get_public_file_url]_

_[tool: str_replace_edit]_

_[tool: done]_

הלוגו בנאב שונה ל-**KOBIBARAK.COM** — באותיות גדולות, עם letter-spacing ומשקל 800 + gradient.

עדיין רוצה שאשלח לקנבה?

## User

תחודא שהכל נןראי מעולה בנייד

## Assistant

_[tool: fork_verifier_agent]_

בודק עכשיו את כל הנראות במובייל (375px) — Hero, Bento, פרויקטים, תהליך, סטטיסטיקות, CTA ופוטר. ממתין לתוצאות.

## User

Verifier agent check completed

## User

<attached_files>
- uploads/Screenshot 2026-05-16 at 23.43.19.png
</attached_files>

## User



## Assistant

_[tool: str_replace_edit]_

הטקסט בכרטיס 01 נחתך — `overflow: hidden` חותך את התוכן. מתקן:

_[tool: done]_

תוקן — הסרתי את `overflow: hidden` מכרטיסי הערכים כך שהטקסט לא ייחתך. עכשיו כל הכרטיסים מציגים את כל התוכן.

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "KobiBarak.com"
User is viewing file: KobiBarak.com v3.html
Current date is now May 16, 2026
</system-info>

<attached_files>
- uploads/Screenshot 2026-05-16 at 23.45.07.png
</attached_files>

## Assistant

_[tool: str_replace_edit]_

הסטטיסטיקות נחתכות בצד ימין — ה-24/7 יוצא מהמסך. הבעיה היא שה-`stats-row` לא מוגבל ברוחב. מתקן:

_[tool: str_replace_edit]_

_[tool: done]_

Actually, let me also check — the counter might be rendering the suffix wrong. The stat font size is also very large. Let me also reduce it slightly and ensure proper RTL handling:תוקן — הוספתי `direction: ltr` על המספרים (כדי שה-24/7 לא יתהפך), הקטנתי קצת את הגודל, והגבלתי את הרוחב עם padding כדי שלא ייחתך. עכשיו כל הסטטיסטיקות אמורות להיות ממורכזות ומוצגות נכון.

## User

<attached_files>
- uploads/Screenshot 2026-05-16 at 23.46.03.png
- uploads/Screenshot 2026-05-16 at 23.43.19-f57967e6.png
</attached_files>

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

שתי בעיות — הכפתור נשבר לשתי שורות, והטקסט בכרטיס 01 עדיין נחתך. מתקן:Now fix the value card — the TiltCard has `overflow: hidden` built into its container behavior. Let me check and fix:

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

תוקן:
- **כפתורים** — `white-space: nowrap` כדי שלא יישברו לשתי שורות
- **כרטיס 01** — `overflow: visible` + `align-items: start` על הגריד כדי שכל כרטיס יהיה בגובה הטבעי שלו ולא ייחתך

## User

יש לך הרבה מקום בצד שמאל תרווח את זה אולי זה יסתדר

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

אני רואה — הסטטיסטיקות והכרטיסים צפופים מדי ומשאירים חלל גדול בצד שמאל. צריך לפרוס אותם על כל הרוחב:

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add the theme toggle button to the nav:

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now update the Hero and other sections to respect the dark prop for text colors:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the footer to also respect the dark prop:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

מצב יום/לילה הוטמע! 🌓

- **כפתור שמש/ירח** בנאב — לחיצה מעבירה בין המצבים
- **מעבר fade חלק** (0.5s) על כל האלמנטים — רקע, טקסט, כרטיסים, בורדרים
- **מצב יום**: רקע לבנדר (#F7F8FF), טקסט כהה, כרטיסים לבנים עם צל עדין
- **מצב לילה**: הרקע הכהה המקורי עם כל האפקטים (aurora, particles, constellation)
- במצב יום החלקיקים/aurora מוסתרים לטובת גרדיאנט עדין

ממתין לאימות.

## User

לא רואים את הטקסטים במצב אור יום

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

The problem is that inline styles use `rgba(255,255,255,...)` which CSS classes can't override. I need a comprehensive approach using CSS custom properties:

_[tool: str_replace_edit]_

_[tool: done]_

הבעיה — כרטיסי הפרויקטים קובעים רקע ב-inline style שדורס את ה-CSS. צריך `!important`:

_[tool: fork_verifier_agent]_

תוקן — כל כרטיסי הפרויקטים עכשיו עם רקע לבן ברור וטקסט כהה במצב יום. ממתין לאימות שאין עוד טקסט בלתי נראה.

## User

הוסף קישורים - live.ale-zahav.co.il multix.barak-ai.co.il Nadlan-os.co.il garage-os.co.il

## Assistant

_[tool: str_replace_edit]_

_[tool: read_file]_

Now I need to add link support to ProjectCard too (it currently has no links). Let me update it:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: str_replace_edit]_

_[tool: done]_

עודכן ✓

**לפני:** "מתוך צורך אמיתי, תהליך ברור ובנייה שמחזיקה מים גם אחרי הדמו."

**אחרי:** "מתוך הבנה עמוקה של שטח, חשיבה מערכתית ובנייה שעובדת — גם אחרי שהדמו נגמר."

יותר חד, מקצועי, ועם פאנץ׳ בסוף.

## User

ללא דמו נגמר - תשפר

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

עודכן ✓ — "מתוך הבנה עמוקה של שטח, חשיבה מערכתית ובנייה שמייצרת תוצאות אמיתיות."

## User

<system-info comment="Only acknowledge these if relevant">
Current date is now May 17, 2026
User adjusted these values via the in-page Tweaks panel (already saved to disk):
KobiBarak.com v3.html:
  darkMode: false
</system-info>

<attached_files>
- uploads/Screenshot 2026-05-17 at 0.00.30.png
</attached_files>

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

הכרטיס של Ale Zahav LIVE נראה לא אחיד — האייקון צף באמצע. מתקן את הלייאאוט:תוקן — אייקון הלינק עכשיו צמוד לפינה העליונה ליד הכותרת, והלייאאוט של כל הכרטיסים אחיד.

## User

https://barak-ai.co.il/contact - תפנה את היצירת קשר בפוטר וגם את הכפתור בהדר - כדאי לא?

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the nav links and footer to point there too:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the footer nav too:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

עודכן ✓

- **"בואו נדבר"** בנאב + במובייל → `barak-ai.co.il/contact` (נפתח בטאב חדש)
- **"יצירת קשר"** בתפריט הניווט + בפוטר → אותו לינק חיצוני
- כל הלינקים החיצוניים נפתחים בטאב חדש עם `rel="noopener"`

## User

Send this design to Canva: KobiBarak.com v3.html

## Assistant

_[tool: copy_files]_

_[tool: tool_search_tool_bm25]_

Canva is connected. Let me prepare the bundle:

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

The `%23n` is the SVG filter `#n` inside the data URI noise texture — it's self-contained and not a real issue. Let me verify and send to Canva:

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Clean — just the expected Babel warning. Now get the public URL and import to Canva:

_[tool: get_public_file_url]_

_[tool: canva__import-design-from-url]_

העיצוב הועלה בהצלחה לקנבה! 🎉

**[פתח את העיצוב בקנבה →](https://www.canva.com/d/wi4MZ7alGZMXRzj)**

שם העיצוב: **KobiBarak.com**

## User

איזה פונט הקובי ברק

## Assistant

הפונט של "קובי ברק" הוא **Rubik** — משקל 800 (Extra Bold).

זה הפונט שמשמש לכל האתר, כמו שהגדרת בפרומפט המקורי. הכותרת הראשית בהירו משתמשת בגודל `clamp(60px, 12vw, 110px)` עם `letter-spacing: -0.04em` ואפקט gradient text.

## User

צבעים

## Assistant

הנה פלטת הצבעים של האתר:

**צבע מוביל:**
- `#4F1AD6` — סגול (ברירת מחדל, ניתן לשנות ב-Tweaks)

**אפשרויות נוספות ב-Tweaks:**
- `#6C3FE0` — סגול בהיר
- `#5B7BF7` — כחול
- `#1BB78A` — ירוק
- `#C04CE8` — מג'נטה

**רקעים:**
- `#050505` — מצב לילה
- `#F7F8FF` — מצב יום (לבנדר)

**טקסט (מצב כהה):**
- `#fff` — ראשי
- `rgba(255,255,255,0.7)` — משני
- `rgba(255,255,255,0.35-0.45)` — עמום

**טקסט (מצב בהיר):**
- `#0F1140` — ראשי (כחול-כהה)
- `rgba(15,17,64,0.65)` — משני
- `rgba(15,17,64,0.45)` — עמום

**כרטיסים (כהה):**
- `rgba(255,255,255,0.025)` — רקע
- `rgba(255,255,255,0.055)` — בורדר

**כרטיסים (בהיר):**
- `#fff` — רקע
- `rgba(15,17,64,0.08)` — בורדר

**צבעי פרויקטים:**
- Barak AI: `#4F1AD6`
- Garage-OS: `#5B7BF7`
- Nadlan-OS: `#6FD3FF`
- MultiX: `#C04CE8`
- Ale Zahav: `#1BB78A`

## User

Send this design to Canva: KobiBarak.com v3.html

## Assistant

_[tool: show_to_user]_

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

The `%23n` is the SVG filter inside a data URI — not a real missing asset. Sending to Canva:

_[tool: get_public_file_url]_

_[tool: canva__import-design-from-url]_

הועלה בהצלחה לקנבה! 🎉

**[פתח את העיצוב בקנבה →](https://www.canva.com/d/aE8X4WlLGtUUY4C)**

שם: **KobiBarak.com v3** — כולל את כל העדכונים האחרונים (לינקים, קופי, מצב יום/לילה, תיקוני רספונסיב).

