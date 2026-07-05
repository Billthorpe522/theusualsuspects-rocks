# The Usual Suspects — theusualsuspects.rocks

> Booker-targeted SEO sister site to [playtheusualsuspects.com](https://playtheusualsuspects.com/). This is where Frankfort/Will County bar owners land when they search "live band near me."

**Status:** 🟡 Scaffolding complete on disk; awaiting DNS propagation + repo creation + push.
**Owner:** Bill Thorpe (build); Buck Dennison (creative direction).

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Home — booker-hero, value prop, service area, recent rooms, next-step CTA |
| `setlist.html` | Full song list, categorized by genre + energy, with sample-song policy |
| `tech-rider.html` | Stage plot (text diagram), power requirements, what-we-bring-vs-what-you-provide, insurance |
| `book.html` | Phone + form + email + messenger links, all funneling to `playtheusualsuspects.com/#book` |
| `site.css` | Shared styles — matches the brand site's design language |
| `site.js` | Smooth scroll + last-updated stamp |
| `robots.txt` | Allow all + sitemap |
| `sitemap.xml` | 4 URLs |
| `CNAME` | `theusualsuspects.rocks` |

---

## What's on each page (TL;DR)

- **Home** — search-phrase H1 ("Live bands for bars, VFW halls, American Legion posts — south suburbs Chicago & NW Indiana") + value prop + service area callout + recent rooms + CTA → `playtheusualsuspects.com/#book`
- **Setlist** — ~60 songs categorized: Classic Rock, R&B/Soul, Country, Slow songs/Ballads, Holiday. Honest "we don't play" list. Set length structure. Audio samples "coming soon."
- **Tech Rider** — text stage plot, 2× 20A circuits, 90 min setup, PA-on-request $200, what-you-provide checklist, cancellation policy, COI/insurance.
- **Book** — phone (fastest) + form + email + Messenger, all converging on Buck.

---

## What's NOT on this site (per the audience split)

| Doesn't live here | Why | Where it is |
|---|---|---|
| Booking form fields | `.rocks` captures intent, `.com` captures the lead | `.com` |
| Instagram feed | Casual fans live on `.com` | `.com` |
| Full bios per member | Bookers don't need "Crash's nickname origin" | `.com` |
| Newsletter signup | Funnel fans into `.com` | `.com` |
| Gig calendar | Bookers ask "are you free Oct 11" not "your full schedule" | `.com` |
| Press kit PDF | Press inquiries route through Buck directly | `.com` |

---

## How the two sites cross-link

- `.rocks` nav has "Book the band" → `playtheusualsuspects.com/#book`
- `.com` footer will link back to `.rocks` for "See our shows and photos" (TODO — add to `.com` site in next pass)
- Every page on `.rocks` has at least one CTA back to `.com`

---

## DNS status

DNS records added to Namecheap Advanced DNS Jul 4 2026:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | billthorpe522.github.io. |

**Propagation status:** NXDOMAIN as of last check. Usually resolves within 5-30 min.

---

## Deploy checklist

- [ ] DNS propagates (Google DNS / 1.1.1.1 returns the A records)
- [ ] Create `Billthorpe522/theusualsuspects-rocks` GitHub repo (Bill's terminal)
- [ ] Initial commit + push with CNAME file (Bill's terminal — GH auth blocks Hermes)
- [ ] GitHub Pages detects custom domain, provisions Let's Encrypt SSL cert (~30 min)
- [ ] Verify `https://theusualsuspects.rocks/` returns 200 + valid SSL
- [ ] Submit to Google Search Console + Bing Webmaster Tools (Bill's browser session)
- [ ] Update `System/Live Sites Index.md` — move `.rocks` from in-flight to live
- [ ] Update `000 - Home.md` — Active Right Now reflects the new live site
- [ ] Add cross-link from `playtheusualsuspects.com` footer back to `.rocks`

---

## Open content gaps (waiting on Buck)

- [ ] Real setlist (Buck has the canonical one — this is my draft from common classic-rock-bar-band repertoire)
- [ ] Testimonials with venue names + dates (5-10 from past venue bookers)
- [ ] Real tech rider / stage plot drawn to scale (Buck has one from past gigs)
- [ ] Photos (Manteno July 17 will give us current ones)
- [ ] Promo video (1-2 min highlight reel)

---

## Brand notes

The copy throughout is **booker-direct** — answers their actual questions, not the band's self-portrait. The design matches the brand site so both feel like one band, two doors. The `.rocks` TLD was chosen because:
- Looks good on a poster (verified by Bill: "yeah, it would look good on a poster")
- On-brand for a classic rock band
- Available Jul 4 2026 (verified DNS)
- Cheap (~$15-20/yr)

---

## Connections

- [[TUS Second Site — theusualsuspects.rocks]] — vault note with full SEO strategy + audience split
- [[The Usual Suspects Band]] — parent venture
- [[TUS YouTube Channel]] — sibling project, same asset-gather timeline
- [[playtheusualsuspects.com](https://playtheusualsuspects.com/)] — brand site this site funnels bookers into

## Links

- [[000 - Home]]
- [[System/Live Sites Index]]
- [[System/Session Scan Log]]