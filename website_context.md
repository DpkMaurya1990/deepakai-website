# deepakai.in — Website Context Summary
## For Claude Code Implementation

---

## 1. PROJECT STACK & STYLING GUIDELINES

### Tech Stack
- **Type:** Pure Static Website (HTML5 + CSS3 + Vanilla JS)
- **Framework:** None (no React/Vue) — keeps it simple for GitHub Pages
- **CSS Approach:** Tailwind CSS via CDN
- **Icons:** Lucide Icons via CDN or Font Awesome Free
- **Fonts:** Google Fonts — "Inter" (body) + "Poppins" (headings)
- **Hosting Target:** GitHub Pages (free, custom domain deepakai.in)
- **Structure:** Multi-page (separate HTML files per page)

### File Structure
```
deepakai-website/
├── index.html          # Home page
├── services.html       # Pricing & Plans
├── how-it-works.html   # 3-step process
├── industries.html     # Tab-based industries
├── contact.html        # Demo booking form
├── css/
│   └── style.css       # Custom CSS overrides
├── js/
│   └── main.js         # Navbar, tabs, animations
└── assets/
    └── images/         # Logo, icons
```

### Color Palette
```css
--bg-primary:     #0A0F1E   /* Dark navy — main background */
--bg-secondary:   #0D1526   /* Slightly lighter navy — cards */
--bg-card:        #111827   /* Card backgrounds */
--accent-green:   #00D084   /* Primary CTA — buttons, highlights */
--accent-green-hover: #00B872
--text-primary:   #FFFFFF   /* Main headings */
--text-secondary: #94A3B8   /* Body text, descriptions */
--text-muted:     #64748B   /* Muted/placeholder text */
--border-color:   #1E2D45   /* Card borders */
--badge-green:    #065F46   /* "Most Popular" badge bg */
--badge-text:     #00D084   /* Badge text */
```

### UI/UX Vibe
- Dark professional SaaS look (like Interakt.co / Wati.io)
- Mobile-first responsive design
- Smooth scroll behavior
- Subtle animations on scroll (fade-in)
- Green accent on all primary CTAs
- Cards with subtle border glow on hover
- Consistent navbar across all pages

### Navbar (All Pages — Fixed Top)
```
Left:  🤖 "Deepak AI" logo (green icon + white text)
Right: Home | Services | How It Works | Industries | Contact
       + "Get Free Demo" green button (CTA)
Mobile: Hamburger menu (≡)
```

### Footer (All Pages — Identical)
```
Logo + tagline: "AI-Powered WhatsApp Solutions for Indian SMBs"

Links:
  WhatsApp Us → wa.me/91YOURNUMBER
  deepak@deepakai.in
  deepakai.in

SERVICES column:
  Starter Bot | Growth Bot | Full Stack Bot | Pricing

COMPANY column:
  How It Works | Industries | Results | Contact

GET STARTED:
  "Try risk-free for 7 days. No payment needed upfront."
  [Book Free Demo] green button

Bottom bar:
  "© 2025 Deepak AI Solutions. All rights reserved."
  "deepakai.in — Smart WhatsApp Bots for Indian Businesses"
```

---

## 2. PAGE-BY-PAGE TECHNICAL SPECIFICATIONS

---

### PAGE 1: index.html — Home Page

#### Section 1: Hero
```
Layout: Full-width, centered, min-height 100vh
Background: Dark navy (#0A0F1E) with subtle grid pattern

Content:
  - Small badge: "🤖 AI-Powered WhatsApp Automation"
  - H1: "Your WhatsApp,"
        "Now Active 24/7"
  - Subtext: "AI-Powered WhatsApp Bots for Indian Businesses.
              Zero Staff. Zero Effort. Always On."
  - Primary CTA: [Get Free 7-Day Trial] — green button, large
  - Secondary CTA: [Watch Demo] — outlined white button

Below buttons — 3 trust stats in a row:
  📊 2.5x Average ROI
  ⏰ 40+ Hours Saved/Month
  ✅ 48-Hr Bot Setup

Visual Element:
  WhatsApp chat mockup (CSS-based, not image):
  Show a mock conversation:
    User: "Appointment book karni hai"
    Bot:  "Namaste ji! 9:15 AM slot available
           hai kal. Confirm karein? 🙏"
    User: "Yes"
    Bot:  "✅ Confirmed! Reminder kal aayega."
```

#### Section 2: Problem Statement
```
Background: Slightly lighter (#0D1526)
Headline: "Aapka Business Raat Ko Bhi Jaag Sakta Hai"

3 pain point cards:
  ❌ "After 8 PM enquiries? Sab miss ho jaate hain"
  ❌ "Same questions roz? Staff ka time waste"
  ❌ "No-shows? Revenue loss every week"

Arrow pointing down to solution
```

#### Section 3: Solution / Features
```
Headline: "Ek Bot. Sab Kaam."

4 feature cards in 2x2 grid:
  🕐 "24/7 Auto Replies"
     "Hindi, English, Hinglish mein"
  📅 "Smart Appointment Booking"
     "No double booking, auto reminders"
  💳 "Payment Collection"
     "Razorpay inside WhatsApp"
  📊 "Daily Reports"
     "Every night — leads, bookings, revenue"
```

#### Section 4: Social Proof Numbers
```
4 stats in a row (large numbers):
  500M+    WhatsApp Users in India
  48 Hrs   Bot Goes Live
  2.5x     Average Client ROI
  60%      Reduction in No-Shows
```

#### Section 5: Industries Served (Preview)
```
Headline: "Har Business Ke Liye"
8 industry pills/chips:
  🏥 Clinics  📚 Coaching  🍽️ Restaurants
  💆 Salons   🏠 Real Estate  📦 D2C Brands
  ⚖️ CA/Legal  🏋️ Gyms
CTA: "See How It Works For Your Industry →"
```

#### Section 6: CTA Banner
```
Full-width green-tinted section:
  "Ready to Never Miss a Customer Again?"
  [Start Free 7-Day Trial] — large green button
  "No credit card required • Setup in 48 hours • Cancel anytime"
```

---

### PAGE 2: services.html — Pricing & Plans

#### Section 1: Header
```
Green label: "PRICING & PLANS"
H1: "Simple, Transparent Pricing"
Subtext: "Three plans built for every stage of your business.
          All include a 7-day free trial — no payment option."
Badge: "✅ 7-Day Free Trial On All Plans — No Credit Card Required"
```

#### Section 2: Pricing Cards (3 cards)
```
CARD 1 — Starter Bot
  Label: "STARTER"
  Price: ₹5,999/month
  Setup: "+ ₹8,000 one-time setup fee"
  Target: "Best for local shops, tutors, freelancers, PG owners"
  Features list:
    ✅ 24/7 AI WhatsApp replies (Hindi / English / Hinglish)
    ✅ Automatic appointment booking
    ✅ Lead capture & daily summary report
    ✅ Emergency escalation to owner
    ✅ FAQ automation
  CTA: [Start Free Trial →] — outlined green button

CARD 2 — Growth Bot (MOST POPULAR)
  Badge: "MOST POPULAR" — green badge top center
  Border: green glow effect
  Price: ₹9,999/month
  Setup: "+ ₹15,000 one-time setup fee"
  Target: "Best for clinics, coaching, salons, restaurants"
  Features list:
    ✅ Everything in Starter Bot
    ✅ Razorpay payment collection inside WhatsApp
    ✅ Advance booking fee to eliminate no-shows
    ✅ Automated appointment reminders
    ✅ 30-day follow-up automation
    ✅ Google review collection
    ✅ FAQ automation
  CTA: [Start Free Trial →] — solid green button (filled)

CARD 3 — Full Stack Bot
  Label: "FULL STACK"
  Price: ₹19,999/month
  Setup: "+ ₹25,000 one-time setup fee"
  Target: "Best for multi-doctor clinics, gyms, real estate, D2C"
  Features list:
    ✅ Everything in Growth Bot
    ✅ Google Ads management
    ✅ Meta / Instagram Ads management
    ✅ Click-to-WhatsApp lead generation campaigns
    ✅ AI lead scoring (hot / warm / cold)
    ✅ Weekly ad performance reports
    ✅ Monthly strategy call
  CTA: [Start Free Trial →] — outlined green button

All 3 cards: wa.me/91YOURNUMBER link on CTA button
```

#### Section 3: Comparison Table
```
Feature comparison table — all 3 plans side by side
Rows: All features, checkmarks per plan
Last row: Price summary + CTA buttons
```

#### Section 4: FAQ
```
5 FAQs in accordion style:
  Q: "Kya mujhe technical knowledge chahiye?"
  A: "Bilkul nahi. Hum sab kuch setup karte hain..."

  Q: "Mera existing WhatsApp number use hoga?"
  A: "Haan, tumhara existing number..."

  Q: "Free trial mein kya milta hai?"
  A: "Pura bot 7 din ke liye free..."

  Q: "Agar cancel karna ho?"
  A: "Koi lock-in nahi. Kabhi bhi cancel..."

  Q: "Payment kaise hoti hai?"
  A: "Razorpay se — UPI, Card, NetBanking..."
```

---

### PAGE 3: how-it-works.html — Process Page

#### Section 1: Header
```
Green label: "HOW IT WORKS"
H1: "Live in 48 Hours."
    "Zero Tech Skills Needed."
Subtext: "From signup to a fully automated WhatsApp bot
          — in 3 simple steps. We handle everything technical."

3 trust badges in a row:
  ⚡ 48 Hr Setup
  🔧 No Tech Skills Needed
  🎁 7-Day Free Trial
```

#### Section 2: 3 Steps (CRITICAL — All 3 Must Show)
```
Layout: Vertical timeline OR 3 horizontal cards

STEP 1 — "You Sign Up & We Onboard You" ✅
  Icon: 📋 (clipboard)
  Description: "Fill our simple onboarding form — your business
                name, services, FAQs, pricing, and working hours.
                That's all we need to get started."
  Sub-points:
    ✅ Share your FAQs and pricing
    ✅ Share your WhatsApp Business API account
    ✅ No technical knowledge required from your side

STEP 2 — "We Build Your Custom Bot" ❌ (WAS MISSING — ADD THIS)
  Icon: 🤖 (robot/bot)
  Description: "Our team builds your fully customised WhatsApp
                AI bot in 48 hours. Your existing WhatsApp number.
                Custom Hindi/English/Hinglish responses. All
                technical work done by us — zero effort from you."
  Sub-points:
    ✅ Custom bot trained on YOUR business data
    ✅ Hinglish AI responses configured
    ✅ Payment integration setup (Tier A & C)
    ✅ Testing done on staging before going live

STEP 3 — "Go Live & Watch Results" ❌ (WAS MISSING — ADD THIS)
  Icon: 🚀 (rocket)
  Description: "Bot goes live on your WhatsApp number. Customers
                are automatically served 24/7. You just watch the
                results — bookings, payments, leads — all handled."
  Sub-points:
    ✅ Bot live on your existing WhatsApp number
    ✅ Daily summary report sent every night
    ✅ 7-day free trial begins from go-live date
    ✅ Ongoing support from Deepak AI team
```

#### Section 3: What You Get
```
Headline: "What Happens After Go-Live"
4 outcome cards:
  📅 Auto Appointments  — "Booked while you sleep"
  💳 Payment Collected  — "Inside WhatsApp, zero friction"
  📊 Daily Reports      — "Every night on WhatsApp"
  🌟 Google Reviews     — "Automatically requested post-visit"
```

---

### PAGE 4: industries.html — Industries Page

#### Section 1: Header
```
Green label: "INDUSTRIES"
H1: "Built for Your Business"
Subtext: "Our AI WhatsApp bots are tailored for 8 high-demand
          industries. See how we serve your specific challenges."
```

#### Section 2: Tab-Based Industry Selector
```
Tab Navigation (horizontal scrollable on mobile):
  🏥 Clinics & Doctors    [DEFAULT ACTIVE]
  📚 Coaching Institutes
  🍽️ Restaurants & Cafes
  💆 Salons & Spas
  🏠 Real Estate
  📦 D2C Brands
  ⚖️ CA & Legal Firms
  🏋️ Gyms & Fitness

Each tab panel contains:
  - Industry-specific headline
  - Pain point description
  - Proof points (3 stats)
  - Feature list relevant to that industry
  - CTA: "Get Free Demo for [Industry]"

CLINIC TAB CONTENT (default):
  Headline: "Never Miss a Patient Enquiry Again"
  Pain: "Clinics lose 30-40% of patients who WhatsApp after
         hours. Your bot handles them all — 24/7, in Hindi."
  Proof Points:
    📊 25-40 extra patients captured/month
    💰 60% reduction in no-shows
    ⏰ 40+ staff hours saved monthly
  Features:
    ✅ Appointment booking with advance payment
    ✅ Patient reminder 24hrs before visit
    ✅ Emergency escalation to doctor
    ✅ Google review collection post-visit

COACHING TAB CONTENT:
  Headline: "Convert Every Enquiry into Enrollment"
  Pain: "Students enquire at all hours. Slow response = lost
         admission. Bot responds in 2 seconds, always."
  Proof Points:
    📊 12-18 extra enrollments/month
    ⏰ 3 hrs/day saved on repetitive queries
    💰 Fee collection inside WhatsApp
  Features:
    ✅ Course info + fee structure auto-reply
    ✅ Demo class booking automation
    ✅ Full fee collection via Razorpay in chat
    ✅ Follow-up for warm leads

RESTAURANT TAB CONTENT:
  Headline: "Fill Tables. Reduce No-Shows."
  Features:
    ✅ Table reservation with advance deposit
    ✅ Menu sharing on WhatsApp
    ✅ Special event booking
    ✅ Direct orders (no Zomato commission)

SALON TAB CONTENT:
  Headline: "Zero Empty Slots. Full Revenue."
  Features:
    ✅ Appointment booking + advance payment
    ✅ Staff slot management
    ✅ Reminder 2 hrs before appointment
    ✅ Loyalty program messages

REAL ESTATE TAB CONTENT:
  Headline: "Only Talk to Hot Leads."
  Features:
    ✅ AI lead qualification (budget/location/BHK)
    ✅ Property details auto-shared
    ✅ Site visit booking
    ✅ Lead scoring — hot/warm/cold

D2C BRANDS TAB CONTENT:
  Headline: "Sell More. Inside WhatsApp."
  Features:
    ✅ Catalogue bot — browse & order in chat
    ✅ Payment collection via Razorpay
    ✅ Order status updates
    ✅ Abandoned chat recovery

CA/LEGAL TAB CONTENT:
  Headline: "Automate Client Intake. Focus on Billable Hours."
  Features:
    ✅ Service info + fee auto-reply
    ✅ Consultation booking
    ✅ Document checklist sharing
    ✅ Follow-up automation

GYMS TAB CONTENT:
  Headline: "Fill Memberships. Year Round."
  Features:
    ✅ Membership plan info + pricing
    ✅ Trial class booking
    ✅ Renewal reminders
    ✅ Targeted local ad campaigns (Tier C)
```

---

### PAGE 5: contact.html — Contact & Demo Booking

#### Section 1: Header
```
Green label: "GET STARTED"
H1: "Book Your Free Demo"
Subtext: "Fill in the form and we'll reach out within 2 hours
          to schedule your free demo and get your bot live in
          48 hours."
```

#### Section 2: Contact Form
```
Form fields (all styled dark with green focus border):

1. Your Name *          — text input
   Placeholder: "Rajesh Kumar"

2. WhatsApp Number *    — tel input
   Placeholder: "+91 98765 43210"
   Validation: Indian 10-digit number

3. Email Address        — email input (optional)
   Placeholder: "rajesh@clinic.com"

4. Business Name *      — text input
   Placeholder: "Dr. Sharma's Clinic"

5. Industry *           — select dropdown
   Options:
     Select your industry
     Clinics & Doctors
     Coaching Institute
     Restaurant / Cafe
     Salon & Spa
     Real Estate
     D2C Brand
     CA / Legal Firm
     Gym / Fitness
     Other

6. Interested Plan      — select dropdown
   Options:
     Select a plan
     Starter Bot — ₹5,999/month
     Growth Bot — ₹9,999/month (Most Popular)
     Full Stack Bot — ₹19,999/month
     Not sure yet

7. Anything specific you'd like to automate? — textarea
   Placeholder: "e.g. I want to automate appointment booking
                 and reduce no-shows at my clinic..."

Submit Button:
  [🤖 Book My Free Demo →] — full width, green
  Below: "No payment required • 7-day free trial included
          • We'll call you within 2 hours"

Form Action: WhatsApp redirect on submit
  wa.me/91YOURNUMBER?text=New+Demo+Request...
```

#### Section 3: Contact Details Card
```
4 contact items:
  📱 Call / WhatsApp: +91 XXXXXXXXXX
  📧 Email: deepak@deepakai.in
  📍 Location: Delhi, India (Serving all of India)
  🕐 Response Time: Within 2 hours (9 AM – 9 PM IST)
```

#### Section 4: What Happens After Submit
```
5-step numbered list:
  1️⃣ We call you within 2 hours
  2️⃣ 30-min free demo of your custom bot
  3️⃣ We build your bot (Day 1-2)
  4️⃣ Bot goes live on your WhatsApp
  5️⃣ 7-day free trial begins
```

#### Section 5: Trust Badges (4 items)
```
  ✅ 7-day free trial — no payment upfront
  ✅ Bot live within 48 hours
  ✅ No lock-in — cancel anytime
  ✅ Ongoing support included
```

---

## 3. GLOBAL COMPONENTS

### WhatsApp Floating Button (All Pages)
```
Fixed bottom-right corner
Green WhatsApp icon
Link: wa.me/91YOURNUMBER
Tooltip: "Chat with us"
```

### Scroll Animations
```
All sections: fade-in-up on scroll
Cards: stagger animation (100ms delay each)
Stats: count-up animation when visible
```

### Meta Tags (All Pages)
```html
<meta name="description" content="AI-Powered WhatsApp Bots
for Indian Businesses. 24/7 automated. Zero staff needed.
Setup in 48 hours. Free 7-day trial.">
<meta name="keywords" content="WhatsApp bot India, AI chatbot,
WhatsApp automation, Indian SMB, clinic bot, coaching bot">
<meta property="og:title" content="Deepak AI — Smart WhatsApp
Bots for Indian Businesses">
<meta property="og:url" content="https://deepakai.in">
```

---

## 4. CLAUDE CODE IMPLEMENTATION STRATEGY

### MICRO-STEP 1 — Run This First in Terminal

```bash
# Activate your project environment
cd ~/
mkdir deepakai-website
cd deepakai-website

# Create file structure
mkdir css js assets assets/images

# Create all HTML files
touch index.html services.html how-it-works.html \
      industries.html contact.html \
      css/style.css js/main.js
```

### MICRO-STEP 2 — Claude Code Prompt (Paste in Terminal)

```
claude "Build a complete static multi-page website for
'Deepak AI Solutions' (deepakai.in) — an AI WhatsApp
bot agency for Indian SMBs.

CRITICAL REQUIREMENTS:
- Pure HTML5 + Tailwind CSS CDN + Vanilla JS
- Dark navy theme: bg #0A0F1E, accent green #00D084
- Google Fonts: Inter + Poppins
- 5 pages: index.html, services.html, how-it-works.html,
  industries.html, contact.html
- Identical navbar + footer on all pages
- Mobile-first responsive design
- WhatsApp floating button (wa.me/91YOURNUMBER)
- Smooth scroll animations

Start with index.html (Home page) first with:
1. Fixed navbar: Logo left, nav links + CTA button right
2. Hero: H1 'Your WhatsApp, Now Active 24/7' + subtext
   + two CTA buttons + WhatsApp chat mockup (CSS only)
3. Stats bar: 2.5x ROI, 40+ hrs saved, 48-hr setup
4. Features grid: 4 cards
5. Industries preview: 8 pills
6. CTA banner
7. Footer with all links

Make it production-ready, professional, and similar to
Interakt.co or Wati.io design style."
```

### MICRO-STEP 3 — After index.html is done

```
claude "Now build services.html with:
- Same navbar + footer from index.html
- 3 pricing cards: Starter ₹5,999, Growth ₹9,999 (MOST
  POPULAR badge), Full Stack ₹19,999
- Each card: setup fee shown, full feature list,
  CTA button linking to wa.me/91YOURNUMBER
- Comparison table below cards
- FAQ accordion section"
```

### MICRO-STEP 4 — How It Works

```
claude "Build how-it-works.html with ALL 3 steps:
Step 1: You Sign Up & We Onboard You
Step 2: We Build Your Custom Bot in 48 Hours
Step 3: Go Live & Watch Results
Each step: icon + title + description + 3-4 bullet points
Timeline/vertical layout with connecting line between steps"
```

### MICRO-STEP 5 — Industries

```
claude "Build industries.html with tab-based architecture:
8 tabs: Clinics, Coaching, Restaurants, Salons,
Real Estate, D2C Brands, CA/Legal, Gyms
JS-powered tab switching
Each tab: headline + pain point + 3 proof stats + feature list
+ industry-specific CTA button"
```

### MICRO-STEP 6 — Contact

```
claude "Build contact.html with:
- Contact form: Name, WhatsApp*, Email, Business Name*,
  Industry dropdown, Plan dropdown, Textarea
- On submit: redirect to wa.me/91YOURNUMBER with pre-filled
  message containing form data
- Contact details card: phone, email, location, response time
- What Happens After Submit: 5 numbered steps
- 4 trust badges"
```

### MICRO-STEP 7 — Final Polish

```
claude "Add to all pages:
1. Floating WhatsApp button (fixed bottom-right)
2. Scroll-triggered fade-in animations (Intersection Observer)
3. Mobile hamburger menu toggle (JS)
4. Active nav link highlighting
5. All CTA buttons linking to wa.me/91YOURNUMBER
6. Meta tags for SEO
7. Verify all pages are consistent in design"
```

---

## 5. GITHUB PAGES DEPLOYMENT

### After all files are ready:

```bash
# Initialize git
cd ~/deepakai-website
git init
git add .
git commit -m "Initial website — deepakai.in"

# Push to GitHub
gh repo create deepakai-website --public
git push origin main

# Enable GitHub Pages
# GitHub → Repository → Settings →
# Pages → Source: main branch → Save
# Site live at: username.github.io/deepakai-website

# Connect custom domain deepakai.in
# Add CNAME file:
echo "deepakai.in" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push

# GoDaddy DNS settings:
# Type: CNAME | Name: www | Value: username.github.io
# Type: A | Name: @ | Value: 185.199.108.153
# Type: A | Name: @ | Value: 185.199.109.153
# Type: A | Name: @ | Value: 185.199.110.153
# Type: A | Name: @ | Value: 185.199.111.153
```

---

## 6. PERSONAL DETAILS TO REPLACE

```
Before going live — replace these placeholders:

9999517081
deepak.mau2@gmail.com
New Delhi
+91 9999517081 
```

---

*deepakai.in — Smart WhatsApp Bots for Indian Businesses*
*Context Document v1.0 — Ready for Claude Code*