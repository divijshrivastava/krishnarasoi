# Krishna Rasoi — Homepage Design

Applies `DESIGN-SYSTEM.md` v1.0. This is the full page blueprint with the reasoning behind every creative decision. No code — a builder should be able to implement this without asking questions.

---

## 0. The one-sentence brief

A hungry student in Kolar lands on this page on a ₹10,000 Android phone and, within 30 seconds, believes the food is fresh and homely, sees it costs ₹100, and taps one green button to order on WhatsApp.

Every decision below is judged against that sentence.

---

## 1. Page architecture

Twelve stops, in this exact order:

```
 1. Nav capsule (sticky)
 2. HERO — the stage                          [cream]
 3. Trust strip                               [cream, hairline-bound]
 4. आज का मेनू — this week's thalis            [cream]
 5. कृष्ण रसोई क्यों? — three reasons           [roti cream-100]
 6. Plans & pricing                           [cream]
 7. कैसे शुरू करें — three steps                [roti cream-100]
 8. Testimonials                              [peacock-700 · dark register]
 9. Delivery area & timings                   [cream]
10. FAQ (5 questions)                         [cream]
11. Final CTA band                            [saffron-100 wash]
12. Footer                                    [peacock-700]
 +  WhatsApp FAB (mobile, appears after hero)
```

**Why this order.** It is the conversation a student actually has: *What is this? → Can I see the food? → Why you? → What does it cost? → How do I start? → Can I trust you? → Do you deliver to me? → Doubts → OK, order.* Food proof (menu) deliberately comes **before** price (plans): the inspiration references sell desire first, specs second — nobody falls in love with ₹2,700, they fall in love with dal-roti and then find out it's affordable.

**Why the background rhythm** (cream → cream-100 → cream → cream-100 → dark → cream…). Alternating warm neutrals give scroll rhythm without borders, and the single dark peacock band at testimonials creates the page's one dramatic register shift — the same trick the ZEPHYR/FORGED references use, but held back until social proof, where gravitas helps most. Two dark bands would make the page heavy; zero would make it flat.

---

## 2. Nav capsule

```
┌──────────────────────────────────────────────────────────────┐
│ (logo)      मेनू   प्लान   कैसे काम करता है   संपर्क    EN|हिंदी │
└──────────────────────────────────────────────────────────────┘
```

- Slim floating capsule (pill radius), cream glass at 70% opacity with hairline `border-200`, hovering 16px below the top edge over the hero. Sticky on scroll, gaining a soft shadow only once content passes beneath it.
- Left: full-color logo at 40px height. Center: four links in `caption` weight, Latin links wide-tracked, Hindi links tracked at 0 (system rule). Right: the EN|हिंदी toggle.
- Mobile: logo + toggle + a "मेनू" pill that opens a full-screen cream sheet with the four links in `heading-3` size.

**Why a floating capsule, not a full-width bar.** Every reference (hotel, ATMOS, Kiwiliciously) uses detached, rounded chrome so the hero image runs edge-to-edge behind it — the page feels like a stage, not a document. It also miniaturizes gracefully on mobile.

**Why the language toggle is in the nav, not a footer setting.** Bilingual choice is a first-class identity decision for this audience, and the toggle doubles as a signal: "we speak your language, whichever it is."

**Why only four links.** The page has one job (WhatsApp). Navigation is a courtesy, not a strategy; each extra link is a leak.

---

## 3. Hero — the stage

The only section allowed to break the grid. Composition, back to front: warm radial wash → giant word → thali → garnish → chips → text/CTAs.

### Desktop composition

```
╭──────────────────────────────────────────────────────────────────╮
│   [nav capsule]                                                   │
│                                                                   │
│  KOLAR, BHOPAL ·······            ╭────────────╮                  │
│                              र    │            │   सो     ई       │
│  घर जैसा खाना,                    │   (thali    │                  │
│  रोज़ ताज़ा                        │  top-down,  │  ┌╌╌╌╌╌╌╌╌╌┐    │
│                                   │   round)    │  ╎ ₹100     ╎    │
│  कोलर में छात्रों और बैचलर्स       │            │  ╎ प्रति टिफिन╎    │
│  के लिए घर की रसोई से टिफिन        ╰────────────╯  └╌╌╌╌╌╌╌╌╌┘    │
│                                 (coriander)  (steam)              │
│  ┌──────────────────┐ ┌────────────┐○                             │
│  │ ▶ WhatsApp पर     │ │ प्लान देखें │→        ┌╌╌╌╌╌╌╌╌╌╌╌┐       │
│  │   ऑर्डर करें      │ └────────────┘         ╎ रोज़ सुबह  ╎       │
│  └──────────────────┘                         ╎ ताज़ा बनता ╎       │
│                                               └╌╌╌╌╌╌╌╌╌╌╌┘       │
│  (रोज़ ताज़ा) (शुद्ध शाकाहारी) (समय पर)          ⊙ scroll नीचे      │
╰──────────────────────────────────────────────────────────────────╯
```

*(The giant word "रसोई" spans the full width behind everything, its letters interrupted by the thali.)*

### Element-by-element decisions

**The giant word is "रसोई", in Tiro Devanagari serif, cream-on-cream.**
- *Why "रसोई" and not "KRISHNA" or a tagline:* it's the emotional half of the brand name — the kitchen, the mother's domain — and a single word reads as scenery. The system allows exactly one display-hero word; this is the one a hungry person feels.
- *Why Devanagari and not Latin:* Hindi-first is the brand's core promise. Every inspiration reference does this move in Latin (CARIBE, FROST); doing it in a Devanagari serif is instantly distinctive — nobody in the tiffin market looks like this.
- *Why tone-on-tone (ink at ~8% opacity on cream) rather than a loud color:* the word is decorative depth, not a message. At low contrast it layers *behind* the thali without fighting the real h1, and it passes the system's "decorative may drop to 3:1" rule by staying deliberately below legibility duty — the accessible h1 carries the content.

**The thali photograph: round, top-down, center-right, cropped by nothing.**
- *Why top-down:* a thali is a circle full of color — shot at 90° it becomes a natural mandala that slices through the display word exactly the way the cider can slices "Apple." The circle also softens the layout without any drawn shape.
- *Why center-right, not center:* Hindi reads left-to-right; the message column (h1 → subtext → CTA) owns the left, and the eye lands on food immediately after reading the promise. Centering the dish would force the text into cramped symmetry.
- *Why one dish, not a spread:* the system's "one giant subject" rule. Three dishes = zero heroes.

**Floating garnish: one coriander sprig (upper area, blurred), one steam wisp rising off the dal, one roti pair lower-left.**
- *Why exactly three:* the system caps garnish at 2–4; three gives triangulated depth without clutter. The blurred sprig is the "farthest" element, creating the depth-of-field trick from the kiwi reference.
- *Why steam:* it's the brand's motion metaphor ("भाप की तरह") made literal — the only idle animation in the hero, a 7s rise-and-fade loop. Steam says *fresh, hot, today* faster than any copy.

**Two glass stat chips: `₹100 / प्रति टिफिन` and `रोज़ सुबह ताज़ा बनता है`.**
- *Why these two facts:* price and freshness are the two objections a student has before tapping. Rent the inspiration's "12H battery / 8K display" pattern, but load it with the numbers this audience screens for.
- *Why chips on the photo rather than bullets under the h1:* floating glass over food borrows credibility — the number feels *observed on the dish*, not claimed in copy. Serif `stat` numerals give ₹100 the same charisma "345K+ trips" had.
- *Why not three chips:* the third fact (delivery) already lives in the trust chips; duplicating it dilutes both.

**Headline block:** overline `KOLAR, BHOPAL` → h1 `घर जैसा खाना, रोज़ ताज़ा` → one-line subtext → CTA pair → trust chips.
- *Why the location is the overline, first thing read:* hyper-local is the business. A student in Indrapuri should bounce in two seconds; a student in Kolar should feel *this is for me* in the same two seconds.
- *Why the h1 stays at `display-1` size, not gigantic:* the giant word does the spectacle; the h1 does the promise. Two competing display sizes is the most common way this style collapses.

**CTA pair: solid WhatsApp pill + ghost "प्लान देखें" pill with a circular arrow chip.**
- *Why WhatsApp is the primary and not "Order now" into a form:* the audience already lives on WhatsApp; a form is friction and a server we don't have (static site). The green pill is the single loudest element on the page — and the *only* WhatsApp-green object in the viewport, per the 80/15/5 rule, so the eye can't miss it.
- *Why the ghost secondary goes to #plans, not the menu:* users who don't order immediately are price-checking. Send them straight to the answer.

**Corner ornaments:** a circular "नीचे देखें ⊙" scroll badge bottom-right.
- *Why:* every reference anchors a corner with a quiet circular affordance; it signals "this page continues" without an arrow-bouncing cliché. One ornament only — the slide counter idiom is saved for the menu section where it means something.

### Mobile hero

Stacks vertically: nav → overline → h1 → subtext → thali (word behind it at ~15vw, still sliced) → single ₹100 chip overlapping the dish → full-width WhatsApp pill → ghost pill → trust chips. Garnish reduced to the steam wisp only.
- *Why the photo moves below the text on mobile:* thumb reach and message speed. The student reads the promise while the image loads; the CTA lands mid-screen, in thumb territory.
- *Why one chip instead of two:* two chips on a 360px width forces overlap chaos; ₹100 is the sharper hook.

---

## 4. Trust strip

A single hairline-bound row, `caption` weight, items separated by small peacock feather glyphs:

`रोज़ ताज़ा ✳ शुद्ध शाकाहारी ✳ घर की रसोई ✳ समय पर डिलीवरी ✳ कोलर में डिलीवरी`

- Static, not a marquee. *Why:* the system forbids continuously animated text, and marquees read as ad-tech. A calm strip is a palate cleanser between the theatrical hero and the content sections — the references all insert a quiet band after the hero for exactly this decompression.
- *Why feather glyphs as separators:* this is the peacock motif's first appearance — introduced small, ornamentally, so its later structural uses (testimonial band, footer) feel inevitable rather than sudden.

---

## 5. आज का मेनू — the week's thalis

```
  आज का मेनू                                    01 — 07
  सोमवार से रविवार, हर दिन अलग स्वाद

  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───────
  │ (45°    │ │         │ │         │ │  ...
  │  photo) │ │         │ │         │ │
  │ सोमवार   │ │ मंगलवार  │ │ बुधवार    │ │
  │ दाल-चावल,│ │ राजमा,   │ │ कढ़ी,     │ │
  │ रोटी, सब्ज़ी│ │ रोटी...  │ │ चावल...  │ │
  └─────────┘ └─────────┘ └─────────┘ └───────
```

- Seven cards, one per weekday, horizontal snap-scroll on **all** viewports, with the "01 — 07" counter top-right updating as you swipe.
- Cards: 45° food photo (warm grade), day name in `heading-3` serif, dish list in `body`, a small peacock leaf glyph marking शुद्ध शाकाहारी.
- Entrance: cards rise-and-settle with a 70ms stagger on first scroll into view.

**Why a menu section at all** (the current site has none): food photography is the conversion engine; a tiffin service that won't show its food looks like it can't. This is the section that does the persuading the plans section will cash in.

**Why horizontal snap-scroll even on desktop:** a week is a sequence, and swiping through days is a narrative gesture ("Monday, Tuesday, …") that a 7-up grid kills. It also keeps every card at appetizing size instead of shrinking seven cards to thumbnails. The slide-counter idiom from the references finally gets *semantic* work: it literally counts the days.

**Why 45° angle here vs. top-down in the hero:** top-down is iconic but flattens depth across seven repetitive cards; 45° shows steam, height, and texture variety card-to-card. One iconic angle for the stage, one appetizing angle for the catalogue.

---

## 6. कृष्ण रसोई क्यों? — three reasons

Three cards on `cream-100`, 3-up desktop / stacked mobile. Each: line icon (rupee / dabba-with-steam / scooter-clock) in `peacock-500`, `heading-3` title, two lines of body.

1. **छात्रों के बजट में** — ₹100 से शुरू, कोई डिलीवरी चार्ज नहीं
2. **घर का असली स्वाद** — रोज़ सुबह घर की रसोई में, शुद्ध सामग्री से
3. **समय की पाबंदी** — लंच और डिनर, तय समय पर आपके दरवाज़े

**Why exactly three:** the classic objection triad (money, taste, reliability) and the widest card size that still fits one row. Four reasons would force smaller cards and a weaker claim each.

**Why line icons in peacock, not saffron:** the system reserves saffron for action/highlight; these are *assurance* items, and peacock is the trust color (it's the satvik/quality marker throughout). The icons replace today's emoji — 💰 renders as a different drawing on every cheap Android, which quietly undermines the "trust me" message of this very section.

**Why so little copy:** each card is a headline plus proof, not a paragraph. Students skim; landlords write paragraphs.

---

## 7. Plans & pricing

```
        ┌───────────────────┐   ┌───────────────────┐
        │ सिंगल टिफिन        │   │ ★ मंथली प्लान      │  ← saffron-100 wash,
        │                   │   │                   │    "सबसे किफ़ायती" badge
        │   ₹100            │   │   ₹2,700 / माह     │
        │   जब मन करे        │   │  ┌╌╌╌╌╌╌╌╌╌╌╌┐    │
        │                   │   │  ╎ = ₹90/टिफिन ╎    │  ← glass math chip
        │  ✓ दाल, सब्ज़ी...   │   │  └╌╌╌╌╌╌╌╌╌╌╌┘    │
        │  ✓ रोटी, चावल      │   │  ✓ महीने के 30 दिन │
        │                   │   │  ✓ लंच + डिनर विकल्प│
        │ [WhatsApp पर पूछें] │   │  ✓ रोज़ अलग मेनू    │
        └───────────────────┘   │ [WhatsApp पर शुरू करें]│
                                └───────────────────┘
```

- Two cards only, monthly card visually senior: saffron-100 wash, a small "सबसे किफ़ायती" badge, and slightly larger scale. Prices in serif `stat` numerals. Peacock tick-lists. Each card ends in its own WhatsApp pill (this is the one section where the green repeats — it's the conversion point).
- The monthly card carries a glass chip doing the math: **= ₹90/टिफिन**.

**Why the math chip is the star decision here:** ₹2,700 is a scary number to a student; ₹90 is *cheaper than the hero's ₹100*. Doing the division for the reader converts the monthly plan from a commitment into a discount. Borrowed directly from the inspiration's stat-chip grammar — a floating number that reframes the object under it.

**Why no comparison table:** two options don't need a matrix; tables read as fine print and fine print reads as risk.

**Why cards stay light (no inverted "premium dark" card):** dark = premium is the wrong signal for a value brand; the system reserves the dark register for testimonial gravitas, not price anchoring.

---

## 8. कैसे शुरू करें — three steps

Numbered 01 / 02 / 03 in oversized `stat` serif numerals (ornament grammar from the references), connected by a thin dotted line with a tiny feather at its end:

1. **WhatsApp पर मैसेज करें** — "Hi" भेजिए, बस
2. **अपना प्लान चुनें** — सिंगल या मंथली, आज का मेनू भी पूछ लीजिए
3. **टिफिन घर पहुँच गया** — तय समय पर, गरम और ताज़ा

**Why this section exists when ordering is one tap:** the audience includes first-time tiffin buyers who assume there's a signup, an app, an advance payment. Showing that step one is literally "send Hi" removes the invisible staircase. The oversized numerals turn a boring how-to into the page's typographic play section.

---

## 9. Testimonials — the dark band

Full-width `peacock-700`. One testimonial visible at a time, cream Fraunces/Tiro pull-quote at `heading-2` scale, student's first name + area ("रोहित, दानिश कुंज") in `caption`, prev/next as small circular ghost buttons. 2–3 quotes max, manually rotated — no autoplay.

**Why dark, and why here:** the page's single register shift lands where credibility matters most — other people's words. Dark peacock frames the quote like a chalkboard and gives the mid-scroll a dramatic beat, mirroring how ZEPHYR/FORGED use darkness for weight. Placing it after price means the doubt it answers ("is this actually good?") has just formed.

**Why the quote is set in the display serif:** a testimonial in body text is data; in serif display it's a *voice*. This is also the only place besides headings the serif appears in running size, keeping the register special.

**Why no star ratings or avatar photos:** fake-looking trust markers hurt more than help at this scale. Name + neighborhood is verifiable-feeling and hyper-local, which is the brand's whole argument.

---

## 10. Delivery area & timings

Left: heading "कोलर में डिलीवरी" + chips naming served localities (सर्वधर्म, दानिश कुंज, गेहूंखेड़ा, बीमाकुंज …). Right: two glass chips on a soft illustrated map-tint block — `लंच: 12–2 बजे` and `डिनर: 7:30–9 बजे`.

**Why locality chips instead of an embedded Google Map:** an iframe map is the heaviest thing a static page can load, and it answers a question ("where exactly is Kolar?") locals don't have. Named neighborhoods answer the real question — *do you come to MY street?* — and double as SEO surface. The map is reduced to a warm decorative tint, not an interactive tool.

**Why timing chips get the glass treatment:** timings are stats — the chip grammar has meant "hard fact" all page long, so reusing it here inherits earned trust.

---

## 11. FAQ — five questions

Accordion, hairline-divided, `title` weight questions, chevron rotates 180° in `motion-instant`. Exactly five: *रविवार को टिफिन मिलता है? · खाना कौन बनाता है? · पेमेंट कैसे? · टिफिन बॉक्स किसका? · बीच में छुट्टी ली तो?*

**Why these five:** each is a real pre-order WhatsApp question; answering them on-page shortens the chat and makes the eventual "Hi" message a purchase, not an interrogation. **Why an accordion:** five open answers would add a screen of text and dilute the final CTA below; collapsing keeps doubt-resolution opt-in.

---

## 12. Final CTA band + footer

- **CTA band:** `saffron-100` wash, `heading-2` serif "आज ही पहला टिफिन मंगवाइए", subline "कोई एडवांस नहीं — पहले खाकर देखिए", one centered WhatsApp pill. The steam wisp from the hero reappears, rising off the text.
  - *Why "no advance, taste first" is the closer:* the last objection standing is risk. Removing it in the final line is worth more than any adjective. The returning steam bookends the page — the motion metaphor opens and closes the story.
- **Footer:** `peacock-700`, dark logo variant, feather line-divider, three columns (contact + WhatsApp again, quick links, service areas), a Hindi/English sitemap line. Quiet, factual, no newsletter box (no backend, no pretense).

**WhatsApp FAB (mobile only):** appears after the hero scrolls away, bottom-right, 56px, one soft pulse on first appearance then still.
- *Why it waits for the hero to leave:* while the hero CTA is visible a FAB is duplication; after it, the FAB guarantees the conversion path is never more than one thumb-tap away — the whole page collapses to this button.

---

## 13. Motion map (entire page)

| Element | Motion | Token |
|---|---|---|
| Hero word, thali, text block | One-time rise-and-settle on load, 80ms stagger | `motion-soft` |
| Steam wisp (hero + final CTA) | Idle rise-and-fade loop | `motion-idle` 7s |
| Garnish (coriander, roti) | Idle bob ±6px, phase-shifted | `motion-idle` 6–8s |
| Menu cards, reason cards | Rise-and-settle on scroll-into-view, 70ms stagger, once | `motion-quick` |
| Buttons, chips | 2px lift + shadow deepen on hover/press | `motion-instant` |
| Accordion, counter, toggle | Simple state transitions | `motion-instant` |
| FAB | Single pulse on first appearance | `motion-quick` |

Everything else is still. `prefers-reduced-motion` kills both idle loops and converts entrances to fades. No scroll-jacking, no parallax beyond the hero's ≤8px drift, no autoplay anything.

**Why this little motion on a page inspired by animated showcases:** the references are portfolio theatre viewed on designers' MacBooks; this page is infrastructure for hungry students on budget phones and Jio data. We keep the *composition* of the showcases and spend the motion budget on two meaningful signatures (steam, garnish) instead of twenty transitions. If a visitor remembers an animation instead of the food, the page failed.

---

## 14. Performance & honesty constraints baked into the design

- All hero layers are static images (AVIF/WebP with JPEG fallback); the "video-like" feel comes from idle CSS transforms, so first paint stays under control on 3G.
- The giant word is real text, not an image — free to render, crisp on every screen, switchable by the language toggle (रसोई ↔ RASOI).
- Exactly one webfont weight-pair loads per script above the fold; display serifs load with swap so Hindi content is never invisible.
- Nothing on the page requires JavaScript to read: menu scrolls natively, accordion degrades to open text, FAB is an anchor. JS only enhances (counter, stagger, toggle).
- No fake urgency (timers, "only 3 left"), no invented ratings. The brand's argument is a mother's kitchen; borrowed dark patterns would poison it.
