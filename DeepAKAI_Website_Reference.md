# DeepAKAI — Complete Website Reference
## deepakai.in | Last Updated: Current Session

---

## 1. PROJECT IDENTITY

| Field | Detail |
|-------|--------|
| **Brand** | DeepAKAI — Applied Knowledge & AI |
| **Tagline** | "We Deliver Real-World Intelligence into Practical AI Solutions" |
| **Product** | AI WhatsApp Bots for Indian SMBs |
| **Owner** | Deepak Maurya, Delhi |
| **Phone** | +91 9999517081 |
| **Email** | deepak@deepakai.in |
| **Live URL** | https://deepakai.in |
| **Staging** | https://deepakaiservices.netlify.app |
| **Git Repo** | github.com/DpkMaurya1990/deepakai-website |
| **Local Path** | D:\deepakai-website |

> ⚠️ **Spelling Rule:** Always `DeepAKAI` — capital D, A, K, A, I. Never "DeepakAI".

---

## 2. TECH STACK

- **Type:** Pure Static Website — HTML5 + Tailwind CSS (CDN) + Vanilla JS
- **No frameworks** — No React, Vue, or build tools
- **Fonts:** Google Fonts — Inter (body) + Poppins (headings)
- **Icons:** Inline SVG or emoji (no icon library)
- **Hosting:** GitHub Pages (production) + Netlify (staging)

---

## 3. FILE STRUCTURE

```
deepakai-website/
├── index.html                  # Home page
├── services.html               # Pricing & Plans (2 plans)
├── how-it-works.html           # 3-step process
├── industries.html             # 8-tab industry selector
├── contact.html                # Demo booking form
├── onboarding.html             # Client onboarding form
├── privacy-policy.html         # Legal page
├── admin_token_dashboard.html  # Internal — AI token usage
├── css/
│   └── style.css               # ALL custom CSS
├── js/
│   └── main.js                 # ALL JavaScript
├── update_images/
│   └── logo.png                # Logo (use absolute URL for local pages)
└── CNAME                       # = deepakai.in (DO NOT DELETE)
```

> ⚠️ For pages opened locally (e.g. onboarding.html), use absolute logo URL:
> `src="https://deepakai.in/update_images/logo.png"`

---

## 4. COLOR SYSTEM

```css
--bg-primary:     #040C1E   /* Deep navy — page background */
--bg-secondary:   #0D1526   /* Slightly lighter navy */
--bg-card:        #111827   /* Card backgrounds */
--accent:         #1E7FFF   /* PRIMARY accent — buttons, highlights, borders */
--accent-hover:   #1A6FE0   /* Hover state */
--text-primary:   #FFFFFF
--text-secondary: #94A3B8
--text-muted:     #64748B
--border-color:   #1E2D45
--badge-blue:     #0F2A5C
```

> ⚠️ Accent color is BLUE `#1E7FFF` — older docs say green `#00D084`, those are outdated.

---

## 5. CSS COMPONENT CLASSES

| Class | Purpose |
|-------|---------|
| `.btn-green` | Primary CTA button (blue despite name) |
| `.btn-green-lg` | Larger CTA variant |
| `.btn-outline` | Outlined blue button |
| `.btn-white-outline` | White-bordered ghost button |
| `.card` | Standard card (bg-card, border, hover lift) |
| `.card-popular` | Featured card (blue glow, scale-up) |
| `.badge-popular` | "MOST POPULAR" pill badge |
| `.icon-box` | 52×52 icon container with blue tint |
| `.section-label` | Uppercase pill label above headings |
| `.fade-in-up` | Scroll reveal — JS handles via IntersectionObserver |
| `.delay-100` to `.delay-600` | Stagger delays for fade-in-up |
| `.counter` | Count-up on scroll — add data-target, data-suffix |
| `.tab-btn / .tab-panel` | Industry tab system |
| `.faq-item / .faq-question / .faq-answer` | FAQ accordion |
| `.form-input` | Styled dark form inputs |
| `.wa-mockup / .wa-bubble-in / .wa-bubble-out` | WhatsApp chat mockup |
| `.whatsapp-float` | Fixed bottom-right WA button |
| `.navbar-blur` | Glassmorphism navbar backdrop |
| `.active-nav` | Active page nav link highlight |
| `.shimmer-text` | Shimmer animation (used on "Setup FREE — Limited Time" badge) |
| `.industry-chip` | Industry pill links on home page |
| `.cta-banner` | Full-width CTA section |

---

## 6. PRICING (CURRENT — services.html)

| Plan | Monthly | Setup |
|------|---------|-------|
| **Essential** | ₹2,500/mo | FREE — Limited Time 🎉 |
| **Customized** ⭐ Most Popular | ₹5,000/mo | FREE — Limited Time 🎉 |

### Essential Plan Features
- 24/7 AI WhatsApp Replies (Hindi/English/Hinglish)
- FAQ Automation — Most Asked Questions
- Lead Capture — Customer Details Captured
- Talk to Agent — Instant Escalation to Owner
- Callback Request — Customer can Schedule a Callback
- Business Hours Auto-Responder — Off-hours Banner
- Welcome Message — Customer Greeting with Branding
- Daily Summary Report — Business Snapshot at 9 PM
- Missed Booking Insights — Track Potential Customers
- No Cost on AI Responses — Unlimited Talk
- AI Engine — Groq → Gemini

### Customized Plan Features
- Everything in Essential Plan — PLUS
- Appointment Booking — AI-Powered Flexible Booking
- Admin Booking Controls — Confirm/Cancel via WhatsApp
- Export Data — Leads & Bookings CSV Download
- No Cost on AI Responses — Unlimited Talk
- AI Engine — Groq → Gemini

> ✅ All plans include **15-day free trial** — no credit card required.

---

## 7. INDUSTRIES (industries.html — 8 tabs)

All industries show **Customized Plan** features. Default active: Clinics.

| Industry | Key Features Shown |
|----------|-------------------|
| 🏥 Clinics & Doctors | Appointment Booking, Patient Reminders, Lead Capture, Daily Report |
| 📚 Coaching | Course Info Auto-reply, Demo Class Booking, Lead Capture, Export Data |
| 🍽️ Restaurants | Menu Sharing, Lead Capture, Callback Request, Daily Report |
| 💆 Salons & Spas | Appointment Booking, Lead Capture, Callback Request, Daily Report |
| 🏠 Real Estate | Lead Capture, FAQ Automation, Callback Request, Export Data |
| 📦 D2C Brands | Lead Capture, FAQ Automation, Callback Request, Daily Report |
| ⚖️ CA & Legal | Service Info Auto-reply, Consultation Booking, Lead Capture, Export Data |
| 🏋️ Gyms & Fitness | Membership Info Auto-reply, Trial Class Booking, Lead Capture, Export Data |

---

## 8. CONTENT RULES

- **Website content:** Simple English only — no Hinglish on the website
- **Communication with Claude:** Hinglish is fine
- **Trial period:** 15 days (not 7)
- **Setup fee:** FREE — Limited Time (shown with shimmer animation)
- **Features shown:** Only what is actually provided — no fake features

---

## 9. GIT WORKFLOW

### The 3-Stage Flow
```
Local (D:\deepakai-website)  →  Staging (Netlify)  →  Production (deepakai.in)
        develop               →       develop        →          main
```

### Standard Commit Flow
```bash
# Step 1 — Always start from develop
git checkout develop
git pull origin develop

# Step 2 — Make your changes in files

# Step 3 — Stage and commit
git add -A
git commit -m "type: short description of change"
git push origin develop

# Step 4 — Check staging
# https://deepakaiservices.netlify.app

# Step 5 — Push to production after staging confirmed
git push origin develop:main
```

### Emergency: Conflict Recovery
```bash
# If merge conflict — force develop onto main
git push origin main --force

# If local files are behind remote
git checkout -- filename.html
git pull origin develop

# If develop and main are out of sync
git push origin main:develop
```

### Golden Rules
> ✅ **Always commit to `develop` first — never `main` directly**
> ✅ **Always test on staging before production**
> ✅ `git push origin develop:main` — safest way to production
> ⚠️ If you accidentally commit to `main` — use `git push origin main` then `git push origin main:develop` to sync

---

## 10. QUICK REFERENCE URLS

| Stage | URL | Branch |
|-------|-----|--------|
| Local preview | `file:///D:/deepakai-website/index.html` | develop |
| Staging | `https://deepakaiservices.netlify.app` | develop |
| Production | `https://deepakai.in` | main |

---

## 11. ACCOUNTS & SERVICES

| Service | URL | Purpose |
|---------|-----|---------|
| GitHub | github.com/DpkMaurya1990/deepakai-website | Code repository |
| Netlify | deepakaiservices.netlify.app | Staging environment |
| Formspree | formspree.io (ID: mkoeqgzq) | Lead email backup → deepak.mau2@gmail.com |
| ImprovMX | improvmx.com | deepak@deepakai.in forwarding |
| GoDaddy | godaddy.com | Domain deepakai.in |
| WhatsApp CTA | wa.me/919999517081 | All CTA buttons link here |

---

## 12. CLAUDE INTERACTION RULES

1. **SANDWICH FORMAT** for all code changes — mandatory
2. **1-2 micro-steps at a time** — never dump all steps
3. **Hinglish** communication with Deepak
4. **Simple English** for all website content
5. **No grep/find commands** — say "file X mein section Y dhundo"
6. **No terminal/bash for code changes** — git commands are allowed
7. **Always verify** after each change — ask Deepak to paste section
8. **Always specify git branch** before commit
9. **PRs always to develop first** — then develop → main
10. **Deep business thinking** — not just code generation
11. **DeepAKAI spelling** — capital D, A, K, A, I always

---

*DeepAKAI — Applied Knowledge & AI*
*deepakai.in — Smart WhatsApp Bots for Indian Businesses*
