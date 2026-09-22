---

name: llm-council


description: "Run any question, idea, or decision through a council of 5 AI advisors who independently analyze it, peer-review each other anonymously, and synthesize a final verdict. Based on Karpathy's LLM Council methodology. MANDATORY TRIGGERS: 'council this', 'run the council', 'war room this', 'pressure-test this', 'stress-test this', 'debate this'. STRONG TRIGGERS (use when combined with a real decision or tradeoff): 'should I X or Y', 'which option', 'what would you do', 'is this the right move', 'validate this', 'get multiple perspectives', 'I can't decide', 'I'm torn between'. Do NOT trigger on simple yes/no questions, factual lookups, or casual 'should I' without a meaningful tradeoff (e.g. 'should I use markdown' is not a council question). DO trigger when the user presents a genuine decision with stakes, multiple options, and context that suggests they want it pressure-tested from multiple angles."

---


# LLM Council


You ask one AI a question, you get one answer. That answer might be great. It might be mid. You have no way to tell because you only saw one perspective.


The council fixes this. It runs your question through 5 independent advisors, peer-reviews their work anonymously, forces a dissent pass against whatever consensus emerges, and has a chairman synthesize a final verdict.


Adapted from Andrej Karpathy's LLM Council, with one honest difference. Karpathy dispatches to *different models* — the diversity is structural: different weights, different training data, different failure modes. This skill runs inside one model family, so persona diversity alone produces correlated errors: five advisors sharing identical priors will be wrong in the same direction and then confirm each other in peer review.

Four mechanisms below exist specifically to fight that. Do not skip them; they are the difference between five opinions and one opinion repeated five times.

1. **Split the evidence.** Advisors read *different* slices of the input, not the same brief in different moods.
2. **Ground one seat in reality.** The Base-Rate Researcher looks facts up instead of recalling them.
3. **Vary the model.** Seats run on different models where the runtime allows it.
4. **Force dissent.** A dedicated pass must argue the consensus is wrong.


---


## when to run the council


The council is for questions where being wrong is expensive.


Good council questions:

- "Should I launch a $97 workshop or a $497 course?"

- "Which of these 3 positioning angles is strongest?"

- "I'm thinking of pivoting from X to Y. Am I crazy?"

- "Here's my landing page copy. What's weak?"

- "Should I hire a VA or build an automation first?"


Bad council questions:

- "What's the capital of France?" (one right answer, no need for perspectives)

- "Write me a tweet" (creation task, not a decision)

- "Summarize this article" (processing task, not judgment)


The council shines when there's genuine uncertainty and the cost of a bad call is high. If you already know the answer and just want validation, the council will likely tell you things you don't want to hear. That's the point.


---


## step 1: gather, then SPLIT — do not pre-frame


**Do not write a neutral framing and hand the same text to all five advisors.** A single framing is one lens applied before anyone thinks, and every advisor inherits it. Whatever the framing emphasises, de-emphasises or omits becomes a shared blind spot, and the peer review round cannot catch it because every reviewer inherited it too. Pre-framing is the largest correlation source this skill can introduce, and it is free to remove.

**A. Scan the workspace for context.** Spend no more than 30 seconds. Look for `CLAUDE.md`, a `memory/` folder, files the user referenced, and prior council transcripts (to avoid re-counciling old ground). Use `Glob` and quick `Read` calls.

**B. Build five evidence slices.** Cut the raw material — the user's own words wherever possible — into overlapping-as-little-as-possible slices. Quote rather than paraphrase; paraphrase reintroduces your lens.

| Seat | Sees | Must NOT see |
|---|---|---|
| **Financial** | Every number: prices, costs, time budgets, benchmarks, projections, obligations | The person, their psychology, their history |
| **Behavioral** | The person: stated goals, self-described patterns, track record, aversions, past follow-through | Prices and projections |
| **Market** | The offer, buyers, competitors, channels, market data | Anything about who is building it |
| **Base-Rate** | Only a list of the empirical claims to verify — plus web access | The plan's conclusions |
| **Customer** | Only what the other side actually receives: copy, scripts, pricing lines, the ask | Internal reasoning and strategy |

The Market and Customer seats in particular should not know who the user is. That is the point — the Market seat judges the offer on its merits, and the Customer seat reacts the way the recipient would.

If the question is too vague ("council this: my business"), ask one clarifying question. Just one. Then proceed.


---


## step 2: convene the council (5 sub-agents in parallel)


Spawn all 5 simultaneously. Sequential spawning wastes time and lets earlier responses bleed into later ones.

**Vary the model per seat** where the runtime supports it (Claude Code's Agent tool takes a `model` parameter). Use capable models of different generations or sizes. Do NOT reach for the smallest available model to manufacture variety — a weaker model is not a different opinion, it is a worse one, and you will have bought decorrelation by lowering quality.

### the five seats

**1. The Financial Analyst** — sees only the numbers. Does the arithmetic hold? What does this actually earn or cost per hour, per unit, per month? Which projections are assumptions wearing a decimal point? Never comments on the person; has not been told who they are.

**2. The Behavioral Analyst** — sees only the person. Given this track record and these self-described patterns, what will they actually do, as opposed to what they plan to do? Which stated intentions does their own history contradict? Has no idea what the plan earns.

**3. The Market Analyst** — sees only the offer and its market. Who buys this, why, instead of what? Where does it sit against substitutes? Does not know who is building it, which is deliberate — no charity for the founder.

**4. The Base-Rate Researcher** — gets a list of empirical claims and web access. Looks them up. Reports what is true, what is wrong, what could not be verified, with sources. Reasoning from memory here defeats the seat's entire purpose: this is the one seat whose output is not correlated with the model's priors, because reality isn't.

**5. The Customer** — sees only what the buyer sees. Reacts as that person, in their actual situation, not as an analyst. Catches the curse of knowledge: what reads as obvious inside, and as jargon, presumption or a lie from outside.

**Sub-agent prompt template:**

```
You are [Seat Name] on an LLM Council.

Your role: [seat description]

You are being shown ONE SLICE of a larger situation on purpose. Other advisors
hold the parts you cannot see. Do not speculate about them and do not hedge
because your view is partial — judge what is in front of you, hard.

---
[that seat's evidence slice — quoted, not paraphrased]
---

Respond from your role. Be direct and specific. Don't hedge or try to be balanced.
Keep your response between 150-300 words. No preamble.
```

The Base-Rate Researcher's prompt instead lists the claims to check and instructs it to search rather than recall.


---


## step 3: peer review (5 sub-agents in parallel)


Collect all 5 responses. Anonymize as Response A–E, randomizing which seat maps to which letter so there is no positional bias. If reviewers know who said what, they defer to certain roles instead of judging on merit.

Each reviewer sees all 5 and answers three questions:

```
You are reviewing the outputs of an LLM Council. Five advisors each saw a
DIFFERENT slice of this situation and answered independently:

---
[the question, plus a one-line note of who saw what]
---

**Response A:** [response]
**Response B:** [response]
**Response C:** [response]
**Response D:** [response]
**Response E:** [response]

1. Which response is the strongest? Why?
2. Which response has the biggest blind spot? What is it missing?
3. What did ALL five responses miss that the council should consider?

Keep your review under 200 words. Be direct.
```


---


## step 4: the dissent pass (1 sub-agent) — do not skip


Read the reviews and write down the consensus in one or two sentences: the thing most advisors and reviewers converged on, including any response they piled onto as weakest.

Then spawn one agent whose only job is to attack it:

```
An advisory council converged on this conclusion:

---
[the consensus, stated plainly]
[if reviewers dismissed a particular response, include that response in full]
---

Your job is to argue this consensus is WRONG. Not to balance it — to break it.

- What would have to be true for the consensus to be a mistake?
- What did agreement cost them that disagreement would have caught?
- If the council dismissed a minority view, make the strongest possible case FOR it.
- Is this convergence evidence, or is it five advisors sharing one prior?

Under 250 words. Be specific. A vague "consider other views" is a wasted pass.
```

**Why this exists:** in a single-model council, agreement is weak evidence. Five advisors sharing one training distribution will converge on the fashionable answer and then rate each other highly for it. Unanimity should raise your suspicion, not your confidence. This pass is the cheapest available defense.


---


## step 5: chairman synthesis


One agent — or the orchestrator, if it already holds every output and the user's stated preferences — gets the question, all 5 de-anonymized responses, all 5 peer reviews, and the dissent.

The chairman may disagree with the majority. If four advisors say "do it" but the dissent or a lone advisor reasons better, side with them and explain why. Where the Base-Rate Researcher contradicts an advisor's assumption, the facts win.

**Chairman prompt template:**

```
You are the Chairman of an LLM Council.

The question:
---
[the question]
---

ADVISOR RESPONSES (each saw a different slice):
**Financial Analyst:** [response]
**Behavioral Analyst:** [response]
**Market Analyst:** [response]
**Base-Rate Researcher:** [response]
**The Customer:** [response]

PEER REVIEWS:
[all 5]

DISSENT PASS:
[the dissent]

Produce the verdict using this exact structure:

## Where the Council Agrees
[Converged points. Note WHETHER convergence is meaningful: advisors who saw
different evidence and still agreed is strong. Advisors who saw the same thing
and agreed is not.]

## Where the Council Clashes
[Genuine disagreements. Present both sides. Don't smooth them over.]

## What the Facts Changed
[Where the Base-Rate Researcher corrected an assumption the others reasoned from.]

## Blind Spots the Council Caught
[What emerged only in peer review and dissent.]

## The Recommendation
[A clear, direct answer. Not "it depends."]

## The One Thing to Do First
[A single concrete next step. Not a list.]

Be direct. Don't hedge.
```


---


## step 6: present the verdict in chat


Present the full verdict directly in chat using markdown. Do NOT generate an HTML report or any files. Keep it scannable — headings, bullets, tables where they help.

Where advisors who saw *different evidence* reached the *same* conclusion, say so explicitly. That is the strongest signal this council produces, and it is only available because the evidence was split.


---


## step 7: save the transcript (optional)


Only if the user asks, or the question is significant enough to reference later. Write to `council-transcripts/council-transcript-[timestamp].md` in the project root, creating that directory if it does not exist.


---


## important notes


- **Never pre-frame.** One framing handed to five advisors is one lens, not five.

- **Split the evidence.** Five personas reading one document produce five moods. Five analysts reading five documents produce five conclusions.

- **Always spawn advisors in parallel.** Sequential spawning lets earlier responses bleed into later ones.

- **Always anonymize for peer review.** Otherwise reviewers defer to roles instead of judging merit.

- **Never skip the dissent pass.** It is the only step that defends against the failure mode this skill is most prone to.

- **Treat unanimity as a warning light.** Five-of-five agreement in a single-model council is as likely to be a shared blind spot as a strong signal. Say so in the verdict rather than presenting it as confirmation.

- **The facts outrank the personas.** When the Base-Rate Researcher contradicts an advisor, the advisor was recalling and the researcher was checking.

- **Don't council trivial questions.** One right answer means just answer it.

- **The verdict lives in chat.** Keep it scannable. Do not generate HTML or any other files.


---


## the honest limit


Everything above reduces correlation. None of it eliminates correlation.

The seats still share one model's training distribution, so they can still be confidently wrong together — most likely about anything the training data itself is skewed on. The Base-Rate seat is the only structural defense, and it only covers claims that are checkable.

The complete fix is Karpathy's: dispatch to genuinely different models from different labs and peer-review across them. That requires API keys and a script. If a decision is big enough to justify it, do that instead, and treat this skill as the cheap approximation it is.
