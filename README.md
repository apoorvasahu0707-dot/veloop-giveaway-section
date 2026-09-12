# VELoop Rewards — Giveaway Section

A complete, polished **Giveaway experience** for VELoop Rewards, built as a
frontend development task: giveaway banner, prize cards, live countdown,
participation flow, winner announcements, previous winners archive, and a
prize-claim form — all wrapped in a premium, fintech-inspired UI.

## Project Overview

This project implements the full Giveaway Section described in the task
brief: a page where users can browse active/upcoming giveaways, see a live
countdown, join a giveaway using their in-platform balance (VEs / SVEs /
Tokens), watch a real-time social-proof winner slider, and check results in
a Winners / Previous Winners tab system.

## Giveaway Concept

VELoop's giveaways are entry-based: each giveaway has a fixed **entry fee**
paid from the user's own in-platform currency balance (never real money).
Once a giveaway's countdown reaches zero, it moves from `active` to `ended`
and winners become visible under the Winners tab.

## Features

- Premium animated giveaway banner with live countdown and CTA
- Giveaway statistics strip (total giveaways, participants, prizes won)
- Featured Giveaways grid with 7 sample prizes (iPhone, Apple Watch,
  AirPods, gift cards, and an upcoming prize)
- Entry-fee display with real-time balance verification
  (sufficient / insufficient balance states)
- Dynamic participation CTA that changes based on user state (not logged
  in / not joined / already joined / ended / upcoming)
- Horizontal, auto-scrolling **Winner Announcement Slider** (pauses on
  hover, uses masked winner IDs — no personal data)
- **Winners** tab (never shows fake winners while a giveaway is live) and
  **Previous Winners** tab (completed giveaway archive)
- Entry confirmation modal and a winner **Prize Claim** form
  (name / email / phone / shipping address + claim deadline)
- "How to Participate" step timeline
- Giveaway Rules, Trust & Transparency section, and FAQ accordion
- Fully responsive (desktop / tablet / mobile)
- Subtle Framer Motion animations (hero entrance, hover states) — no
  neon, no confetti spam, no casino-style visuals, per the design brief

## Giveaway States

| State | Behaviour |
|---|---|
| `active` | Countdown running, entry fee + balance check shown, CTA = Join |
| `ended` | Auto-triggered when countdown hits zero; CTA = View Winners |
| `upcoming` | Shows "starts in" countdown; CTA = Notify Me |

## Winner System

- Winner counts are configurable per giveaway (e.g. iPhone = 1 winner,
  Apple Watch = 3, Amazon vouchers = 10+) — driven entirely from
  `giveawayData.js`, not hardcoded in components.
- The Winners tab shows a "still live, no winners yet" state for any
  active giveaway, and only shows real results once ended.

## Prize Claim System

`PrizeClaimModal` supports two modes:
- `confirmEntry` — shown when a user joins a giveaway; summarizes the
  entry fee and confirms the (mock) balance deduction.
- `claimPrize` — the winner-specific claim form (contact + shipping
  details) with a stated claim deadline.

## Technology Stack

- React 18 + Vite
- Bootstrap (base utility layer) + CSS Modules for component-scoped styles
- React Hooks (`useState`) for all local/UI state
- React Icons (Feather set) for iconography
- Framer Motion for entrance/hover animations

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Folder Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── GiveawayHero/
│   ├── GiveawayStats/
│   ├── WinnerSlider/
│   ├── PrizeCard/
│   ├── FeaturedGiveaways/
│   ├── HowToParticipate/
│   ├── WinnersTabs/
│   ├── WinnerCard/
│   ├── PreviousWinnerCard/
│   ├── PrizeClaimModal/
│   ├── GiveawayRules/
│   ├── TrustSection/
│   ├── FAQ/
│   ├── Countdown/
│   └── Footer/
├── pages/
│   └── Giveaway/GiveawayPage.jsx
├── data/
│   └── giveawayData.js       ← all mock data lives here
├── styles/
│   └── theme.css              ← design tokens (colors, radii, shadows)
├── App.jsx
└── main.jsx
```

## Component Architecture

Every section of the page is a self-contained component with its own
CSS Module, receiving data as props from `GiveawayPage.jsx`. State
(joined giveaways, balances, active modal) is lifted to the page level
and passed down — no component reaches into global/shared state
directly, so the tree is easy to reason about and easy to wire to a
real API later (see below).

## Responsive Design

All sections use CSS Grid/Flexbox with breakpoints at `980px`, `900px`,
`768px`, and `620px`/`640px` (component-dependent) to collapse grids
from 3-4 columns down to 2 and then 1 column, and to stack the hero
layout vertically on mobile.

## Animation Details

- Hero copy/illustration fade + slide in on load (Framer Motion)
- Floating reward icons in the hero with a CSS keyframe float loop
- Winner slider uses a CSS marquee (`@keyframes scroll`) that pauses on
  hover
- Card hover states use a subtle `translateY` lift with shadow growth
- All effects are intentionally restrained — no flashing, no excess glow

## Mock Data Structure

All dummy data (`src/data/giveawayData.js`) is centralized:
- `CURRENT_USER` — login state, balances (VEs/SVEs/Tokens), joined IDs
- `GIVEAWAY_STATS` — headline stats strip
- `GIVEAWAYS` — array of giveaway objects (prize, entry fee, winner
  count, status, timestamps)
- `WINNER_TICKER` — messages for the social-proof slider
- `PREVIOUS_WINNERS` — completed giveaway results
- `HOW_TO_PARTICIPATE`, `GIVEAWAY_RULES`, `FAQ_ITEMS` — static content

Swapping this file for real API calls (e.g. `fetch("/api/giveaways")`)
is the only change needed to connect a real backend — no component
needs to change.

## Future Backend Integration

The frontend is deliberately structured so a real backend can be added
without reworking the UI:
- Entry fee amounts and balances are read from `giveawayData.js` today;
  in production these would come from a `/giveaways` and `/wallet` API.
- The entry confirmation modal already models the "deduct on confirm"
  flow — swapping the local `setBalances` call for a POST to a
  `/giveaways/:id/join` endpoint (which would perform the real
  deduction, fraud checks, and transaction log entry) is a drop-in
  change.
- Winner selection is currently client-side (triggered when the
  countdown hits zero); in production this would be replaced by a
  server-confirmed winner list fetched once the giveaway closes.

## Screenshots

Add screenshots here after running `npm run dev` and capturing:
Desktop / Tablet / Mobile views, Active / Ended / Upcoming states,
Winners tab, Previous Winners tab, Winner claim modal, Amazon
gift-card claim modal, and the non-winner (insufficient balance) state.

## Live Demo

https://veloop-giveaway-section.vercel.app/

---
Built by Apoorva Sahu — Full Stack Development Intern, VELoop Rewards.
