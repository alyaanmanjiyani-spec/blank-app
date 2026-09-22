# Council transcripts

Runs of the `llm-council` skill (`.claude/skills/llm-council/`), kept so successive
versions of the skill can be compared on the same question.

| File | Skill version | Date | Seats | Reviewers | Notes |
|---|---|---|---|---|---|
| `2026-09-21-business-plan-v1.md` | upstream + 2 bug fixes (`f7b084f`) | 2026-09-21 | 5 personas, shared framing, 1 model | 5 | Reviewers 5/5 unanimous both questions |
| `2026-09-22-business-plan-v2.md` | decorrelation rewrite (`ec6d5c2`) | 2026-09-22 | 5 split-evidence seats, 3 models, 1 web-grounded | 3 | Reviewers split 2-1 and inverted; Fable seat died on credits |

## Trial 3 — what to change

Run the same question again on the v2 skill with the full round restored:

- **5 reviewers, not 3.** Trial 2 was cut to 3 mid-run after hitting a usage-credit
  ceiling. Unanimity is the headline metric, so the reviewer count must match
  trial 1 (5) for the comparison to be clean.
- **Replace the Fable seat.** `claude-fable-5-1` returned HTTP 429 "out of usage
  credits" in trial 2 and that seat had to be re-run on Sonnet, so trial 2 mixed
  two models where the design called for three.
- **Same input.** Do not edit the business brief between runs, or the comparison
  measures the brief instead of the skill.

## What to record each run

- Reviewer agreement: how many picked the same strongest / weakest response.
- Factual corrections produced by the Base-Rate seat.
- Whether the dissent pass changed the final recommendation.
- Any finding a later run produced that an earlier one structurally could not.
