# Council transcript — trial 2 (v2 skill)

- **Date:** 2026-09-22
- **Skill version:** decorrelation rewrite (commit `ec6d5c2`)
- **Design:** 5 split-evidence seats, 3 models intended, 1 web-grounded seat,
  3 reviewers (reduced from 5 mid-run), 1 dissent pass
- **Question:** identical to trial 1, same brief, unedited.

## Design changes under test

1. No pre-framing — each seat received its own evidence slice, quoted from the brief.
2. Split evidence — Financial saw only numbers; Behavioral only the person;
   Market only the offer (not told who was building it); Base-Rate only a list of
   claims plus web access; Customer only what a buyer receives, answered in character.
3. Model variation across seats.
4. A dissent pass required to attack the emerging consensus.

## Run incidents

- **Fable seat failed.** `claude-fable-5-1` returned HTTP 429, "out of usage
  credits." The Market seat was re-run on Sonnet, so the run used 2 models where
  the design called for 3.
- **Reviewers cut 5 → 3** to avoid exhausting credits mid-run. This weakens the
  unanimity comparison against trial 1 and should be restored in trial 3.

---

## Advisor round

### Financial Analyst (Opus) — saw only the numbers

> **The $11,000 year is arithmetically impossible under your own constraints.** Sep 27–Aug 28 has 21 client slots (10 months × 2, Dec = 1, May = 0). At the top of your ladder — $450 — that's $9,450 maximum.
>
> **The rate column is circular.** 314 hrs ÷ 21 clients = 15 hrs/client — identical to year one. Hours per client never fall. So the climb is 100% price, and $35/hr requires $523/client. Your ladder tops at $450.
>
> **Hours exclude acquisition.** 80 emails → 1 client means ~8 hrs per client won. All-in that's 23.5 hrs for $250 = **$10.64/hr**, not $14. Every rate in the table is overstated 35–45%.
>
> **Take-home kills the benchmark claim.** $11,000 minus tooling minus SE tax = **$9,223**. A W-2 teen job at $10,920 keeps $10,085 after FICA. The job wins on dollars. You win only on hours — 314 vs 840. That's the real thesis: $29/hr vs $12/hr of life.
>
> **Sep–Dec 28: $2,500 from zero new clients.** Retainer revenue from a product that doesn't exist.
>
> **Financial aid is over-weighted.** Only Sep–Dec 2027 lands in tax year 2027 — roughly $3–4k. You never split the calendar year.
>
> **Tutoring at $25–40/hr beats every real row here, from day one, with zero acquisition cost.**

### Behavioral Analyst (Sonnet) — saw only the person

> He will not contact 100 people. He will not contact 20 people by November. The parent conversation stays "partially happened" for another month, because it's the one blocking step he can't script or automate, and it requires asking permission from people whose answer might be "not yet" — a form of rejection. Meanwhile he opens the tracking-app prompt he already wrote, because building the 8-table system is fun, safe, and measurable. This is pattern #1, enacted a fifth time in the act of writing 10,000 words instead of making one call — the planning document itself is the newest demo.
>
> The stopping rules will not fire as written. He told you why: they get renegotiated in week six when he's tired. He'll decide the Nov 20-contacts threshold "isn't really fair" because school got busy — 13 APs will make this true and convenient simultaneously.
>
> The contradiction that matters most: he wants "clients + case studies," yet has spent his effort on the one thing that isn't client contact — infrastructure. Someone optimizing for case studies front-loads conversations. He front-loaded architecture.
>
> Expect: zero contacts through October, a guilty catch-up burst in November, 1–2 conversations, then diagnosis-not-quit mode right on schedule.

### Market Analyst (Sonnet, after Fable failure) — saw only the offer, not the founder

> Who buys it, against what: the real competitor is the owner's own Saturday-night Excel session, or nothing. Against "nothing," $250 for a diagnosis is cheap. Against "the owner's own time," it's a wash unless the finding is large — the report's value is entirely contingent on finding something. If the 6-month pull comes back clean, the client got a 10-day wait for $250 and no reason to buy again.
>
> The counter-observation is being underweighted, not just recorded. Family and friends already run this through software — the pain hypothesis is not validated, it's assumed. Route businesses on Jobber/Housecall Pro already get per-customer revenue and late-payment data natively; the "gap" may be smaller than claimed for exactly the ICP chosen. The skip-list logic (small = willing to talk, least money) cuts against unit economics.
>
> Pricing: flat fee for a variable-value insight is the core mismatch — a $2k finding and a $200 finding both cost $250. The ramp is arbitrary, not tied to revealed value.
>
> Bottom line: sequencing is inverted — sell before building.

### Base-Rate Researcher (Opus, web access, 21 searches) — saw only claims to verify

> 1. **TEEN WAGES — UNDERSTATED.** ZipRecruiter: Dallas teen avg $16.90/hr (Jul 2026); Fort Worth $16.36. 25th–75th pct $13.56–$18.32. The $678/week BLS figure is TRUE AND CURRENT (Table 3, Q2 2026, n=1,383,000) — but $678 ÷ 40 = **$16.95/hr**, so the plan's own citation contradicts its own $12–15 assumption.
> 2. **FEDERAL AID — RESOLVES FAVORABLY.** Fall 2029 → 2027 base year confirmed. Dependent-student IPA 2026–27 = **$11,770**; student income assessed at 50% above it. FAFSA Simplification *raised* the IPA ~35%. Earnings below ~$12k are effectively invisible to need-based aid.
> 3. **TEXAS SALES TAX — TRUE, WITH A LIVE EXCEPTION.** Data processing is taxable, 20% exempt → **5% effective**. Rule 3.330 amended effective 2 April 2025: routine/repetitive manipulation taxable; discretionary-judgment services lean non-taxable. Burden of proof on the seller.
> 4. **SE TAX — TRUE.** 15.3% on net SE earnings ≥ $400. No age exemption.
> 5. **MINORS' CONTRACTS — TRUE BUT MISFRAMED.** Voidable at the *minor's* election; the adult counterparty stays bound. Risk runs toward the client. A sales objection, not a legal barrier.
> 6. **OUTREACH — HALF SUPPORTED, WRONG HALF LOAD-BEARING.** B2B cold email reply averages 3.43%; lists ≤50 average 5.8%, so 5% is defensible. The unsupported step is 4 replies → 1 client (25% close) — no benchmark found. Walk-in 30–40% rests on consumer-intercept analogues only.
> 7. **SOFTWARE ADOPTION — GAP REAL, NARROWER THAN IMPLIED.** 36% on spreadsheets, 35% fully manual (Software Advice, 6,000+ FSM buyer conversations) — but that sample was already shopping for software, so it overstates general pain. ~52% FSM adoption under 50 technicians.
> 8. **SEASONALITY — REAL AND STRONG.** Pool Q2 ≈ 33% of annual revenue vs Q4 ≈ 19% (~1.7x). Texas moderates but does not remove it.
>
> Most damaging: the funnel's unbenchmarked middle, and seasonality swamping any before/after measurement.

*Note: bls.gov, fsapartners.ed.gov and federalregister.gov were blocked by the
session egress proxy; those figures came from search-indexed extracts rather than
direct fetch.*

### The Customer (Sonnet) — in character as a 44-year-old pool-company owner

> Delete. Straight to trash — no phone number, no company name I recognize, reads like every other automated pitch. I don't reply to cold emails, period.
>
> The walk-in is different because it's a kid, in person, saying he's not selling anything. I'd give him ten minutes out of being decent. I'd answer the QuickBooks question straight — my wife does that Sunday nights, takes her 2–3 hours some months. The "how do you decide who to drop" question is where I'd get cagey; that's asking me to badmouth customers to a stranger.
>
> The guarantee — "if it's not good you don't pay" — actually works on me. I've been burned by a bookkeeper once. That's a real hook.
>
> $150 "normally $300" — I'd assume he's lying about the $300 and not care, because $150 to find out who's costing me money is cheap enough to gamble on.
>
> Sending different wording to my own customers behind their backs to run an experiment on them — **hard no. That's my name, my relationships, not his lab.**

---

## Peer review round (3 reviewers, anonymized A–E)

Mapping: A = Behavioral, B = Base-Rate, C = Financial, D = Customer, E = Market.

**Result: split 2–1, with the top and bottom picks exactly inverted.**

| Reviewer | Strongest | Biggest blind spot |
|---|---|---|
| 1 (Opus) | **A** (Behavioral) | **C** (Financial) — optimizes money against a stated non-money goal |
| 2 (Sonnet) | **C** (Financial) | **A** (Behavioral) — "unfalsifiable narrative dressed as diagnosis" |
| 3 (Sonnet) | **C** (Financial) | **A** (Behavioral) — "diagnosis theater… prophecy, not path" |

**All three converged on the same missed item:** nobody sized the case-study
*yield* rate. A "complete" case study needs the owner to implement a change and
enough time to pass to measure it. At ~25% completion, 6–8 case studies needs
25–30 clients; the 2/month cap allows ~21 over the runway. The plan fails its own
goal at 100% sales execution.

---

## Dissent pass (Opus)

> **The council is wrong, and the error is in the denominator.**
>
> **Wrong comparison set.** He said the goal is not money. The council then ranked options by hourly rate. Tutoring at $40/hr produces zero artifacts. The real alternative is not tutoring; it's an unpaid internship, a science-fair project, or DECA — all of which pay $0/hr. Against that field, $250/client is infinite ROI. "It loses to tutoring" is only an argument if you silently price the admissions asset at zero, which is the council's actual thesis, unstated and unargued.
>
> **Item 3 commits the sin they charged item 2 with.** The 25% completion rate is invented — no base rate, no source. And case studies don't require paid clients. Three free ones break the arithmetic instantly. The 2/month cap is his own rule, not physics.
>
> **Steelman the behavioral read:** it is the only claim with within-subject evidence — n=4 self-documented priors. A personal base rate beats a population base rate. "Planning is normal for teens" concedes the point: normal *is* abandonment.
>
> **Convergence or shared prior?** Nobody argued the price is too low, the scope too small, or that he should do it free. Three seats, one prior.
>
> **Falsifier:** 10 calls. One yes and the council is wrong.

---

## Chairman verdict (summary)

Direction unchanged from trial 1, detail sharper. Recommendation: stop pricing it
as a business, run it as a portfolio. Drop the 2/month cap (it, not the pricing,
is what makes the goal unreachable), lead with the guarantee (the only thing the
buyer said would move him), kill or redesign the customer-email experiment (vetoed
outright by the buyer), target 2–3 complete case studies rather than 6–8.

First action: ten calls, with the dissent's falsifier attached — one yes and the
council is wrong.

---

## Trial 1 → trial 2 deltas

| | Trial 1 | Trial 2 |
|---|---|---|
| Reviewer agreement | 5/5 unanimous, both questions | 2–1 split, picks inverted |
| Factual corrections | 0 | 4 premises wrong |
| Deliverable problem | named qualitatively | sized: 25–30 needed vs 21 available |
| Seasonality | named, no numbers | ~1.7x, with measurement fix |
| Customer reaction | inferred by a persona | answered in character; reversed 2 trial-1 conclusions |
| Minority view | dismissed 5/5, rescued manually | defended by a dedicated pass that found the shared bias |

**Two reversals between runs.** Trial 1 held that the "normally $300" line would
read as working an angle and cost trust; trial 2's buyer would assume it was a lie
and buy anyway. Trial 1 held that no owner hands six months of invoices to a
teenager; trial 2's buyer called $150 cheap enough to gamble on — *given a
guarantee*. Trial 2 is weighted higher on both: it reasoned from a specific person
in a specific situation rather than from a persona imagining one.
