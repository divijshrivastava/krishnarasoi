# Krishna Rasoi — Design System

**कृष्णा रसोई · Satvik Food, Pure Delight**
Version 1.0 · July 2026 · Derived from 28 uploaded inspiration references + existing brand assets (tiffin-carrier logo with peacock feather, saffron/green identity).

---

## 1. What the inspiration says

Every reference in `inspiration/` follows the same modern "immersive hero" school of web design. The recurring moves, ranked by how often they appear:

1. **One giant word, one giant subject.** An oversized display wordmark fills the viewport edge-to-edge, and the hero subject (fruit can, kiwi shake, bird, mountain, watch) sits *in front of* the type, slicing through the letters (CARIBE, Apple, Kiwiliciously, BLUEBIRD, FROST, HIROSHI). Depth comes from this text-behind-subject layering, not from boxes.
2. **A monochromatic world.** The entire page is graded into one color family taken from the subject: the kiwi page is green everywhere, the cider page is pink everywhere, the frost page is ice blue. Background, type, chips, and photography all live in the same temperature.
3. **Floating garnish.** Small physical elements (fruit slices, leaves, petals) drift around the hero with soft shadows and slight blur, giving airiness and implied motion.
4. **Glassy stat chips.** Frosted-glass rounded cards float over the imagery carrying one big number + a tiny label ("12H battery", "345K+ trips", "42 scenes"). Numbers do the persuading.
5. **Quiet chrome.** Navigation is a thin, wide-tracked strip; buttons are pills (one solid, one ghost) often with a circular arrow affordance; a slide counter ("01 — 05") and a circular "scroll down" badge anchor the corners.
6. **Type contrast by mood.** Luxurious subjects use high-contrast serifs (CRYSTAL LOTUS, CARIBE, hotel); energetic subjects use heavy grotesques (ZEPHYR, OWN THE FIT). Food brands (cider, kiwi) use soft, rounded, friendly weights on flat pastel fields.

**Translation for Krishna Rasoi:** the thali is the hero. One warm, appetizing photograph of home food takes the stage; a giant bilingual word sits behind it; roti, coriander, and steam float around it; frosted chips carry the numbers that matter to a student — ₹100, ₹2,700/माह, रोज़ ताज़ा. The whole page lives in one warm turmeric-cream world with peacock green as the counterpoint.

---

## 2. Brand personality

| Axis | Position |
|---|---|
| Tone | Gharelu (homely) warmth presented with big-city polish |
| Voice | Hindi-first, plainspoken, zero jargon; English as equal partner via toggle |
| Feel | "माँ के हाथ का खाना" meets a modern menu card — never corporate, never cheap |
| Audience lens | Students & bachelors on budget phones; value, trust, and speed to WhatsApp |

Three words to check every design decision against: **Warm. Fresh. Honest.**

---

## 3. Color palette

A monochromatic warm story (like the kiwi/cider references) built from the food itself, with the logo's peacock feather supplying the one cool counterpoint.

### Core palette

| Token | Hex | Name | Role |
|---|---|---|---|
| `saffron-600` | `#E8751A` | Kesar | Primary brand. CTAs, links, highlights. (Existing brand color, kept.) |
| `saffron-700` | `#C9620F` | Kesar Deep | Hover/pressed states, small text on cream. |
| `saffron-100` | `#FBE3CC` | Kesar Milk | Tinted chips, badges, section washes. |
| `turmeric-300` | `#F5B94E` | Haldi | Secondary warmth: garnish accents, star ratings, dividers. |
| `cream-50` | `#FDF8F3` | Malai | Page background. (Existing, kept.) |
| `cream-100` | `#F6EDE1` | Roti | Alternate section background, card fills. |
| `peacock-700` | `#1E4D40` | Morpankh | The cool accent from the logo feather. Footer, deep sections, "veg/satvik" markers, secondary headings. Replaces the old flat green as the hero dark. |
| `peacock-500` | `#2E7360` | Morpankh Light | Icon strokes, tags, success states. |
| `ink-900` | `#2C2416` | Kadhai | Primary text. Warm charcoal-brown, never pure black. (Existing, kept.) |
| `ink-600` | `#6B5D4D` | Chai | Muted text, captions. (Existing, kept.) |
| `border-200` | `#E8DDD0` | Atta | Hairlines, card borders. (Existing, kept.) |

### Functional

| Token | Hex | Role |
|---|---|---|
| `whatsapp` | `#25D366` | WhatsApp CTA only. Never used decoratively elsewhere. |
| `error` | `#C0392B` | Form errors, sold-out states. Warm red, fits the palette. |

### Rules

- **80 / 15 / 5:** ~80% cream neutrals, ~15% saffron family, ~5% peacock green. The page should read as one warm field with saffron moments, exactly like the cider page reads pink.
- Saffron on cream must always be `saffron-700`+ for text (contrast ≥ 4.5:1). `saffron-600` is for large type and fills only.
- Peacock green never sits directly next to WhatsApp green — separate them with cream.
- Dark sections (footer, testimonial band) use `peacock-700` background with `cream-50` text — this is the site's "night" register, mirroring the dark heroes in the inspiration (ZEPHYR, FORGED).
- Gradients are allowed only as ultra-subtle radial warmth behind the hero dish (cream → kesar milk), never as button fills.

---

## 4. Typography

The inspiration splits into "elegant serif" and "confident grotesque" camps. Krishna Rasoi is food + trust + tradition → **serif display, sans body**, in matched Devanagari/Latin pairs. Hindi is the default script and must never look like an afterthought.

### Families

| Role | Devanagari | Latin | Rationale |
|---|---|---|---|
| Display / headings | **Tiro Devanagari Hindi** | **Fraunces** (or Playfair Display as fallback) | High-contrast serifs with warmth; Tiro is a true Devanagari serif so hindi headlines carry the same elegance as CARIBE/CRYSTAL LOTUS do in Latin. |
| Body / UI | **Noto Sans Devanagari** (existing) | **Inter** (existing) | Proven legibility on cheap Android screens; already loaded. |
| Numerals / stats | Fraunces (tabular where available) for hero numbers; Inter for tables & prices in running text | | Big soft serif numerals give the "₹100" chip the same charisma as "345K+ trips". |

Maximum two families rendered per script. No third font, ever.

### Scale (desktop → mobile)

Ratio ~1.25 (major third), body base 16px / line-height 1.7 (existing, kept — generous leading suits Devanagari matras).

| Token | Size (desktop) | Size (mobile) | Weight | Use |
|---|---|---|---|---|
| `display-hero` | fluid, ~7–12vw (caps ~96–150px) | ~15vw (caps ~56px) | 600 serif | The one giant word per page ("रसोई" / "GHAR KA KHANA"). May bleed off-canvas and sit behind the dish. |
| `display-1` | 56px | 36px | 600 serif | Section heroes ("कृष्णा रसोई क्यों?") |
| `heading-2` | 40px | 28px | 600 serif | Section titles |
| `heading-3` | 28px | 22px | 600 serif | Card titles, plan names |
| `title` | 20px | 18px | 600 sans | Sub-titles, nav emphasis |
| `body` | 16px | 16px | 400 sans | Running text. Never below 16px for Hindi. |
| `caption` | 14px | 14px | 500 sans | Chips, labels, meta |
| `overline` | 12px | 12px | 600 sans, +8% letterspacing, uppercase (Latin only) | Eyebrows like "KOLAR, BHOPAL". Devanagari never letterspaced or faux-uppercased — use `caption` weight instead. |
| `stat` | 48–64px | 36px | 500 serif | Numbers in glass chips (₹100, 26 दिन) |

### Rules

- One `display-hero` word per page. It is scenery, not a heading — the accessible `h1` remains a normal-size element.
- Hindi headlines are written by a human, not transliterated filler. Line length ≤ 16 words Hindi / 70ch Latin.
- Letterspacing: wide tracking (+6–10%) is reserved for short Latin overlines and nav, echoing the thin spread navs in the references. Devanagari tracking always 0.
- Mixed-script lines (e.g., "₹2,700 / माह") set the numeral in the Latin display font; vertical metrics tuned so the rupee line doesn't jump.

---

## 5. Spacing & layout grid

### Spacing scale

Base unit **4px**, practical rhythm in 8s:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

| Token | Value | Use |
|---|---|---|
| `space-xs` | 8 | Icon-to-label, chip padding |
| `space-sm` | 16 | Inside cards, between related lines |
| `space-md` | 24 | Card padding, grid gutters |
| `space-lg` | 48 | Between component groups |
| `space-xl` | 96 (64 mobile) | Between sections |
| `space-2xl` | 128 (80 mobile) | Around the hero, before footer |

### Grid

- **12-column, 24px gutters, max content width 1200px** (raise from current 1100 to give the display type room), fluid margins ≥ 20px.
- **Hero is a stage, not a grid:** full-bleed canvas where type, dish, and chips overlap freely — the only section allowed to break the grid, matching every reference.
- Below the hero, content sections snap back to calm grid order: cards in 3-up (desktop) / 1-up (mobile), plans in 2-up.
- **One idea per section.** Each scroll-stop has a single subject and a single message, like each inspiration frame. No section carries two competing focal points.
- Corners: `radius-md` 16px for cards/chips, `radius-full` (pill) for all buttons and nav capsule, `radius-lg` 24px for hero imagery. Slightly softer than the current 12px — everything in the references is visibly rounded.
- Z-depth recipe for the hero (back → front): tinted background wash → giant display word → dish photograph → floating garnish → glass stat chips → CTAs.

---

## 6. Image style

The single most important asset class. The references succeed because the subject photography is impeccable and color-managed into the page.

### Photography direction

- **Subject:** real Krishna Rasoi thali/tiffin — dal, sabzi, roti, rice — shot top-down (90°) for hero, 45° for cards. The steel tiffin carrier itself is a recurring prop (it's the logo).
- **Light:** warm, directional, natural window light; visible steam wisps welcomed. No blue-toned or clinical studio light.
- **Surfaces:** cream/terracotta/wood backgrounds so photos melt into `cream-50`. No white seamless, no marble.
- **Grade:** every image passed through the same warm grade (lifted warm shadows, saffron-leaning highlights) so the site reads monochromatic like the kiwi/cider pages.
- **People:** occasional honest shots — a hand tearing roti, a dabba being packed. No stock-smiling models; students should see themselves.

### Cutouts & garnish

- PNG/AVIF cutouts of single ingredients — coriander sprig, green chili, roti, cumin scatter, steel katori — float around the hero with soft drop shadows (y-offset 24px, high blur, warm-tinted, ~15% opacity).
- 2–4 garnish elements max per viewport; slight blur on the farthest one to create depth of field, exactly like the kiwi slices.
- Replace all remaining Unsplash placeholders with owned photography as soon as possible; until then, only warm, top-down Indian home-food images that accept the grade.

### Illustration

- Only one illustrative motif: the **peacock feather** from the logo, used as a thin line ornament (section dividers, list bullets in the "satvik promise" block). No generic doodles, no 3D blobs — Krishna Rasoi's texture is real food, not CGI.

---

## 7. Iconography

- **Style:** line icons, 1.75px stroke, rounded caps and joins, on a 24px grid — matching the soft pill-and-glass component language.
- **Color:** `ink-900` default, `peacock-500` for satvik/veg/quality markers, `saffron-600` only for the active/highlight state.
- **Set:** food & service domain — tiffin dabba, roti stack, steam curl, scooter (delivery), calendar (monthly plan), rupee, leaf (pure veg), clock, map pin, WhatsApp (the one filled/brand icon).
- **Kill the emoji.** Current 💰-style emoji icons are replaced by this set; emoji render inconsistently across the budget Android devices this audience uses.
- Icons never appear without a label except in the nav and the WhatsApp FAB.
- Decorative micro-glyphs from the references (tiny sparkle ✦, slide-counter numerals "01 — 04", circular scroll-down badge) are welcomed as *typographic* ornaments in `ink-600`, used sparingly (one per viewport).

---

## 8. Components language (visual grammar, not code)

| Component | Treatment |
|---|---|
| **Nav** | Slim capsule, cream glass over the hero; logo left, 4–5 links wide-tracked, language toggle EN/हिंदी right. Collapses to logo + toggle + menu pill on mobile. |
| **Primary CTA** | Solid pill, WhatsApp green with white icon+label — the single loudest element on the page. One per viewport. |
| **Secondary CTA** | Ghost pill, `ink-900` 1.5px border, paired to the primary's left/right with a small circular-arrow chip, mirroring the "Reserve / Explore" pairs in the references. |
| **Stat chips** | Frosted glass (blurred cream, 60–70% opacity, 1px `border-200` hairline), `stat` serif numeral + `caption` label: "₹100 / टिफिन", "26 दिन / माह", "रोज़ सुबह ताज़ा". Float over hero imagery. |
| **Plan cards** | `cream-100` fill, 16px radius, price in serif numerals, peacock tick-list, one saffron "recommended" card with `saffron-100` wash — never inverted dark. |
| **Menu / thali of the day** | Horizontal snap-scroll cards on mobile (thumb-first), each card a 45° dish photo with day label; slide counter "01 — 07" as ornament. |
| **Testimonials** | The dark register: `peacock-700` band, cream serif pull-quote, student name + area (Kolar) in caption. |
| **Footer** | `peacock-700`, dark logo variant, feather divider, WhatsApp repeated. |

---

## 9. Motion philosophy

**"भाप की तरह" — like steam.** Everything moves the way warm food behaves: gently rising, softly settling, never snapping or spinning. Motion is seasoning, not the dish.

### Principles

1. **Rise & settle.** Elements enter with a small upward drift (16–24px) + fade, like steam off dal. No slides from screen edges, no zooms, no rotation.
2. **The dish is calm, the garnish breathes.** The hero photograph itself barely moves (≤ 8px parallax); floating garnish gets a slow 6–8s idle bob (±6px) with staggered phases — this is the "floating fruit" effect from the references, tuned down.
3. **Type reveals once.** The giant display word fades/rises on first paint only. Text is never continuously animated; Hindi must be readable instantly.
4. **Micro-feedback everywhere, spectacle nowhere.** Buttons lift 2px + deepen shadow on hover/press (120ms); chips tilt ≤ 1° on hover; the WhatsApp FAB gets one soft pulse 3s after load, then stays still.

### Timing tokens

| Token | Duration | Easing | Use |
|---|---|---|---|
| `motion-instant` | 120ms | ease-out | Hovers, presses, toggles |
| `motion-quick` | 240ms | ease-out | Chips, cards, menu items entering |
| `motion-soft` | 400ms | cubic-bezier(0.22, 1, 0.36, 1) ("settle") | Hero elements, section reveals |
| `motion-idle` | 6–8s | sine in-out, infinite | Garnish bob, steam wisp |

Stagger children by 60–80ms, max 5 staggered items per group.

### Hard rules

- **No scroll-jacking, no horizontal hijack, no autoplaying video.** Students on Jio data and 6-year-old phones are the audience; the site must feel faster than a native app.
- Everything animates with GPU-cheap properties only (opacity/transform); layout never shifts during entrance animations (reserve space).
- `prefers-reduced-motion`: all idle loops off, entrances become simple fades.
- Total motion budget: if the page feels animated, it's over-animated. A first-time visitor should remember the food, not the transitions.

---

## 10. Accessibility & localisation baseline

- Contrast ≥ 4.5:1 for all text (the display-hero word behind the dish may drop to 3:1 since it is decorative and duplicated by the real `h1`).
- Hindi is the source language; every string exists in both languages with equal typographic care — the EN toggle changes script pairing (Fraunces↔Tiro) seamlessly.
- Touch targets ≥ 44px; the WhatsApp CTA reachable within one thumb-stretch on every viewport.
- All meaning carried by color (e.g., veg marker) is doubled with an icon or label.

---

## 11. What this changes vs. the current site (summary)

| Area | Today | This system |
|---|---|---|
| Hero | Standard two-column text + stock photo | Full-bleed stage: giant bilingual serif word behind an owned thali photo, floating garnish, glass stat chips |
| Display type | Same sans as body | Fraunces + Tiro Devanagari serif display layer |
| Green | Flat olive `#2d5016` | Richer peacock `#1E4D40` tied to the logo feather; owns the dark register |
| Icons | Emoji | Custom 1.75px line set |
| Radius | 12px | 16/24 + full pills |
| Motion | None defined | "Steam" language: rise-and-settle, idle garnish bob, strict reduced-motion support |
| Photography | Unsplash | Owned, warm-graded, top-down thali + cutout ingredients |
