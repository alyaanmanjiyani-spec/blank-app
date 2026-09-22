# Reducing bias in the council — findings and next changes

Research pass run 2026-09-22 against published work on LLM-as-judge bias,
multi-agent debate, and ensemble correlation. Everything below is sourced;
where a finding contradicts advice given earlier in this repo's history, that
is stated explicitly.

---

## 1. The core problem is measured, not theoretical

**Correlated Errors in Large Language Models** (ICML 2025) tested 350+ LLMs across
three datasets and found models agree on the *wrong* answer far more often than
chance. Two results matter directly here:

- Newer models are **more** correlated with each other, not less.
- **Models from the same company are more correlated.**

That second point downgrades one of the fixes already shipped in `ec6d5c2`.
Varying seats across Opus / Sonnet / Fable is the *weakest available* form of
model diversity, because it holds company constant. It is not worthless, but it
should not be described as the main lever.

**Persona diversity fares worse.** Multiple personas on one model are prompt
variations over one set of weights: they share blind spots, anchor on the same
wrong dates, hallucinate the same citations, and miss the same structural
weakness. Independent write-ups converge on the same prescription this repo
arrived at separately — durable diversity requires *different model families +
external tool verification + an adversarial round*. Two of those three are now
implemented; the first is not.

## 2. What the v2 run got right, confirmed

| Mechanism in `ec6d5c2` | Status in the literature |
|---|---|
| Split evidence per seat | Not directly studied, but consistent with focal-diversity work: value comes from *complementary error profiles*, not differing tone |
| Web-grounded Base-Rate seat | "External tool verification" — one of the three named durable fixes |
| Dissent pass | "Adversarial round" — the second named durable fix |
| Anonymized + shuffled review | Standard position-bias mitigation |
| Treat unanimity as a warning | Matches the "tyranny of the majority" and diversity-collapse findings |

## 3. Live biases still present in the current design

### 3a. Verbosity bias — unmitigated, and self-inflicted
Judges show **15–30 points of inflated preference for verbose answers** across
GPT-4, Claude and PaLM-2 (Wang et al. 2023). The v2 run allowed the Base-Rate
seat up to 400 words while every other seat was capped at 150–300, and the two
densest responses were the two the reviewers fought over. The length asymmetry
was introduced by the prompt, not by the seats.

**Fix:** one word cap for every seat. If the Base-Rate seat needs more room,
raise the cap for everyone or have it emit a table that does not count toward
prose length.

### 3b. Position bias — only partly mitigated
Randomizing the A–E mapping helps, but the mechanism is sharper than ordering:
the first candidate sets the reference for "what a good answer looks like," and
later candidates are read as deltas — deltas read as deviations, deviations read
as flaws.

**Fix (swap augmentation):** run each reviewer twice with the response order
reversed. Count only judgments stable across both orders; record unstable ones as
ties. Doubles reviewer cost, and turns "which was strongest" into a measurement
rather than a vote.

### 3c. Sycophantic conformity in the review round
RLHF-aligned models abandon independent reasoning to adopt the modal peer answer;
homogeneous debate shows "disagreement collapse" and an "Artificial Hivemind"
effect where models converge on near-identical semantic distributions regardless
of prompting. Anonymization does not address this — the reviewer still sees four
peers and infers a modal position.

**Fix:** have reviewers rank all five rather than crown one, and ask each to name
what would change its ranking. A distribution is harder to collapse than a vote.

### 3d. Agreement type is never measured
Work on decomposing stance convergence separates three mechanisms that a raw
agreement rate conflates: spontaneous instability, stance-induced conformity, and
reasoning-induced persuasion.

**Fix:** log *why* reviewers agreed, not just that they did. Trial 1's 5/5 and
trial 2's 2–1 are currently compared as bare numbers.

## 4. A correction to earlier advice in this repo

`ec6d5c2` warns against using the smallest available model for a seat, on the
grounds that "a weaker model is not a different opinion, it is a worse one."

**That is right for advisor seats and wrong for judge seats.** The PoLL work
(*Replacing Judges with Juries*, arXiv 2404.18796) finds that a panel of several
*smaller* models drawn from **disjoint families** outperforms a single large
judge, costs roughly 7x less, and specifically **reduces intra-model bias**,
because each model's self-preference cancels against the others'.

**Revised guidance:**
- **Advisor seats:** capability matters — use strong models.
- **Reviewer seats:** family diversity matters more than size — prefer several
  smaller models from different vendors over one large judge.

## 5. The uncomfortable finding

*The Cost of Consensus: Isolated Self-Correction Prevails Over Unguided
Homogeneous Multi-Agent Debate* (arXiv 2605.00914) reports that for
single-model-family setups, isolated self-correction **beats** unguided debate.

Read honestly against the v2 run: the two seats that carried it were the
web-grounded researcher and the dissent pass — neither of which is debate. The
persona structure contributed comparatively little, and the round that produced
the trial-1 failure (five reviewers agreeing with each other) is exactly the round
this paper says degrades homogeneous systems.

**Implication:** the council's value here is coming from *tool grounding* and
*forced adversarial review*, not from the multi-advisor format. If forced to cut
cost, cut advisor seats before cutting the Base-Rate seat or the dissent pass.

## 6. Priority list for trial 3 and beyond

**Free, do in trial 3:**
1. Equal word caps across all seats (kills verbosity bias).
2. Restore 5 reviewers, so unanimity is comparable to trial 1.
3. Reviewers rank all five instead of crowning one.
4. Every seat states one falsifier — "what would change my mind."
5. Log agreement *type*, not just agreement rate.

**Cheap, do next:**
6. Swap augmentation in the review round (2x reviewer calls).
7. Reviewer seats on smaller, more varied models; advisor seats on strong ones.

**Costs money, the actual fix:**
8. Cross-vendor advisors and reviewers. Same-company mixing holds constant the
   variable that matters most. Everything above reduces correlation; only this
   removes the shared training distribution.

---

## Sources

- Correlated Errors in Large Language Models — ICML 2025 — https://icml.cc/virtual/2025/poster/44225
- Replacing Judges with Juries: Evaluating LLM Generations with a Panel of Diverse Models — https://arxiv.org/abs/2404.18796
- Self-Preference Bias in LLM-as-a-Judge — https://arxiv.org/pdf/2410.21819
- Justice or Prejudice? Quantifying Biases in LLM-as-a-Judge — https://arxiv.org/pdf/2410.02736
- A Systematic Study of Position Bias in LLM-as-a-Judge — https://aclanthology.org/2025.ijcnlp-long.18.pdf
- Judging the Judges: A Systematic Evaluation of Bias Mitigation Strategies in LLM-as-a-Judge Pipelines — https://arxiv.org/pdf/2604.23178
- The Cost of Consensus: Isolated Self-Correction Prevails Over Unguided Homogeneous Multi-Agent Debate — https://arxiv.org/pdf/2605.00914
- Diversity Collapse in Multi-Agent LLM Systems — https://arxiv.org/pdf/2604.18005
- Not All Flips Are Conformity: Decomposing Stance Convergence in Multi-Agent LLM Debate — https://arxiv.org/abs/2606.00820
- Demystifying Multi-Agent Debate: The Role of Confidence and Diversity — https://arxiv.org/html/2601.19921v3
- ReConcile: Round-Table Conference Improves Reasoning via Consensus among Diverse LLMs — https://arxiv.org/pdf/2309.13007
- LLM-Judge Bias Mitigation (2026): Detect, Measure, Fix — https://futureagi.com/blog/evaluating-llm-judge-bias-mitigation-2026/
- Do Multiple Personas on One LLM Give Real Diversity? — https://dev.to/hexisteme/do-multiple-personas-on-one-llm-give-real-diversity-or-do-you-need-different-model-families-1l9m
