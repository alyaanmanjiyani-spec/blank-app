# CLAUDE.md — Business Notebook

Read this first in every session. It is the single source of truth for this
project. Update it at the end of every phase.

---

## 1. What this is

A **private business notebook** for one person: a high-school student in the
Euless / HEB area of Texas running a small productized analytics service for
local businesses (pool, lawn, pest control, studios).

It keeps in one place: every business worth contacting, every call and email,
interview notes, case studies, a learning journal, and numbers that calculate
themselves.

**Goal is documented case studies and real experience** for a business
analytics major with a psychology minor. Money is a byproduct, not the target.

### The one non-negotiable
**Logging a call on a phone must take under 60 seconds.**
If logging is annoying, logging stops. A tracker with holes produces wrong
numbers, and wrong numbers are worse than no numbers. Every design decision
loses to this rule.

---

## 2. Stack

| Layer | Choice |
|---|---|
| Database | One Google Sheet, one tab per table |
| App | Google Apps Script web app, mobile-first HTML |
| Deployment | Execute as: **me**. Who has access: **Only myself** |
| Local dev | `clasp` (Apps Script CLI) + git, code lives in real files |

**Why:** free, works on phone and laptop, stays private inside one Google
account, no server to run — and it is the exact toolset used to build
automations for clients, so building this doubles as practice.

---

## 3. Repository layout

```
.
├── CLAUDE.md              <- this file
├── LATER.md               <- parked ideas. Never build from here without asking.
├── README.md              <- short orientation
├── .clasp.json            <- LOCAL ONLY, gitignored. Points at the script.
├── .clasp.json.example    <- template, committed
├── .claspignore           <- what clasp does NOT push to Google
├── .gitignore
├── docs/
│   └── phase-0-setup.md   <- exact setup steps
├── fixtures/              <- FAKE test data only. Never real client data.
└── src/                   <- everything here is pushed to Apps Script
    ├── appsscript.json    <- the manifest (must live at rootDir)
    └── Ping.js            <- Phase 0 connection test
```

`.clasp.json` sets `"rootDir": "src"`. Only `src/` reaches Google. Docs,
fixtures and git history stay on the laptop.

Apps Script has no folders. `src/ui/Index.html` arrives in Apps Script named
`ui/Index`. The slash is part of the name, not a real folder.

**Rule: never edit code in the Apps Script web editor.** `clasp push`
overwrites the remote copy and the edit is gone with no undo. Edit locally,
push. The only exception is running a function to test it.

---

## 4. Data model

*Filled in during Phase 1.*

---

## 5. Funnel definitions

Written down now so the math is never ambiguous later. Phase 5 must implement
exactly these and nothing else.

| Step | Definition |
|---|---|
| **Contacted** | Businesses with at least 1 **outbound** ContactLog row |
| **Responded** | Businesses with any outcome in: Replied, Talked, Interview done, Asked me to email, Follow up later, Declined |
| **Talked** | Businesses with any outcome in: Talked, Interview done |
| **Interviewed** | Businesses with at least 1 Interviews row |
| **Pitched** | Businesses with status Pitched **or later** |
| **Client** | Businesses with status Client **or later** |

Supporting definitions:

- **Response rate by channel** = outbound attempts on that channel that got a
  response ÷ all outbound attempts on that channel.
- **Interview score** = count of the 6 green flags, 0–6.
  4–6 = Strong, 2–3 = Maybe, 0–1 = Not a fit.
- **Case study Complete** = all 6 step checkboxes checked AND `limits` is
  non-empty.
- **Effective $/hour** = sum of CaseStudies `price` ÷ sum of TimeLog `minutes`/60.

**Honesty rule:** every percentage displays its `n`. Any rate with `n < 10` is
tagged "small sample". A percentage without a denominator is a lie by omission.

---

## 6. Design tokens

*Filled in during Phase 2, after the design plan is approved.*

Constraints already agreed:
- Mobile-first. Tap targets >= 44px. One-handed use.
- One hero element per screen.
- Sentence case everywhere. No ALL-CAPS labels.
- Button verb == confirmation verb ("Log call" -> "Call logged").
- Empty states say what to do next. Errors say what broke and how to fix it.
- Respect `prefers-reduced-motion`. Visible keyboard focus on laptop.
- Banned: near-black background with one bright green accent; identical
  rounded cards with identical shadows; gradient decoration.
- Charts are hand-written HTML/CSS/SVG. No chart library.

---

## 7. Privacy rules

1. The Sheet and the web app are **private to one Google account**. Never
   shared, never public, never "anyone with the link".
2. This notebook stores **business-level** info (public listings) and personal
   notes. It never stores a client's *customers'* data — no customer names,
   payments, or addresses. Client data lives in separate project folders and is
   deleted when the project ends.
3. No passwords, tokens, or keys in code or in git. `.clasprc.json` and
   `.clasp.json` are gitignored.
4. Interview quotes are real people talking candidly. Anything that leaves this
   notebook (a case study, a college essay) gets the business name removed
   unless permission was given.

---

## 8. Working rules for future sessions

- Work in phases. Stop at the end of each phase and wait for approval.
- After each phase report exactly three things: **What I built**, **Why I built
  it this way**, **One thing to understand**.
- Plain, casual language. Short sentences. Add a one-line **ELI10** for any
  tricky idea.
- When there is a real choice: show 2 options + a recommendation, then wait.
- Do not build anything outside the spec. Park extra ideas in `LATER.md`.
- Commit at the end of every phase so a bad version can be rolled back.
- Check tool docs before giving commands. Tools change; memory goes stale.

---

## 9. Phase status

| Phase | What | Status |
|---|---|---|
| 0 | Setup: clasp, folders, .gitignore | Code done, waiting on Google account steps |
| 1 | Data model: the Sheet, `setup()`, CSV import, test fixture | Not started |
| 2 | Quick Log screen (built first — matters most) | Not started |
| 3 | Home: This Week | Not started |
| 4 | Pipeline, Business pages, Interview form | Not started |
| 5 | Numbers | Not started |
| 6 | Case Studies and Journal | Not started |
| 7 | Export and Sunday summary email | Not started |

---

## 10. Decisions log

Newest at the bottom. Every entry says what was decided and *why*, so a future
session does not quietly undo it.

| # | Date | Decision | Why |
|---|---|---|---|
| D-001 | 2026-09-21 | Google Sheet as the database, not a real SQL database | Free, private, editable by hand when something goes wrong, and it is the same tool used for client work. A Sheet is a spreadsheet pretending to be a database — fine at this size (hundreds of rows, one user), wrong at 100k rows. |
| D-002 | 2026-09-21 | `rootDir: "src"` — only `src/` is pushed to Google | Keeps docs, fixtures and git out of the Apps Script project. Apps Script has no folders, so a flat push would be a mess. |
| D-003 | 2026-09-21 | `.clasp.json` is gitignored; `.clasp.json.example` is committed | A scriptId is not a password, but it is a public pointer at a private Sheet. Also machine-specific. Zero cost to regenerate with `clasp clone-script`. |
| D-004 | 2026-09-21 | Web app settings live in `appsscript.json` (`executeAs: USER_DEPLOYING`, `access: MYSELF`) | The privacy rule is written into code, not into a dropdown someone forgets. Git shows if it ever changes. |
| D-005 | 2026-09-21 | Deleted the Streamlit template files (`streamlit_app.py`, `pyproject.toml`, `uv.lock`, `.python-version`) | This repo started from a blank Streamlit template. Nothing in this project is Python. Dead files confuse future sessions. Recoverable from git commit `2da4960`. |
| D-006 | 2026-09-21 | Minimal OAuth scopes: `spreadsheets.currentonly` + `script.container.ui` | Least privilege — the script can touch its own Sheet and nothing else in Drive. **Known risk:** if the Phase 2 web app throws a permission error reading the Sheet, widen to `https://www.googleapis.com/auth/spreadsheets` and record that here. Phase 7 (Sunday email + trigger) will need `script.send_mail` and `script.scriptapp` added. |
| D-007 | 2026-09-21 | clasp runs on the laptop, never in a cloud session | `clasp login` writes a real Google OAuth token to `~/.clasprc.json`. That token must never touch a shared or temporary machine. Code is written in the repo; the human pushes it. |
