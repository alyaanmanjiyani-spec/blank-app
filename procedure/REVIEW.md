# Technical Review of the Sweat-Patch Procedure

This is a mentor-style review of the science in `sweat-patch-procedure.md`. The humanized rewrite keeps every original value. It does **not** apply the fixes below, so you can decide on each one yourself.

Issues are ranked by how much damage they would do if left in.

---

## What's already strong (keep it)

- **All of the stoichiometry is correct.** I recalculated every stock and the Part 7 recipe: 948 mg/L Na⁺, 199 mg/L K⁺, 15.5 mg/L Mg²⁺, and 1,688 mg/L Cl⁻. All match what you wrote.
- **Acceptance criteria are set before you have data** (Steps 34, 35, 46, 52, 56). This is what separates a real experiment from "try it and see."
- **You planned for a negative result** (Step 37). That's rare and mature.
- **Bland–Altman instead of correlation** (Step 59) is the correct choice, and most adults get it wrong.
- **The 3-SD limit-of-detection rule** (Step 46) is the standard definition.
- **Step 53** separates chemical interference from a physical leak. That's good experimental design.
- **The safety thinking is well above the usual student level:** strip-only dipicrylamine, the Hg(SCN)₂ warning, keeping silver waste separate, a stopping rule, and gating real-sweat work behind approval.
- **Catching that citrate adds Na⁺** (Step 26) is a sharp observation.

---

## Critical: fix before you order anything

### 1. The Part 4 crown ether mechanism points the wrong way

15-crown-5 on gold nanoparticles is a published **potassium** sensor, not a sodium sensor. Lin et al. (2002, *Anal. Chem.* 74, 330–335) showed that 15-crown-5–AuNPs turn red→blue with K⁺, **even in excess Na⁺**. The reason is the geometry you described yourself:

- Na⁺ fits *inside* one 15-crown-5 ring, forming a 1:1 complex. One ring means no bridge, so the particles don't clump.
- K⁺ is *too big* for the ring, so it sits between two rings (a 2:1 sandwich). That bridges particles, so they clump.

The 2:1 sandwich you're counting on is the thing K⁺ does with this ring, not Na⁺. Your "excludes K⁺" argument predicts that K⁺ will be the ion that aggregates the particles. Step 35 would probably fail on potassium.

**Second problem: salt alone clumps gold nanoparticles.** Citrate-capped AuNPs lose their charge shielding and aggregate at moderate ionic strength. Sweat Na⁺ is 9–100 mM. This is likely the real reason the reference method tops out at 1 mM. Your only negative control is DI water, which has zero salt, so it can't detect salt-driven clumping.

**Fixes:**
- Make **Cu-curcumin (Chandran et al., 2022)** your *primary* sodium candidate. It has already been shown to detect Na⁺ on printed paper in the physiological range. Move the crown ether approach to backup, or drop it.
- If you keep a crown ether, add an **ionic-strength control**: the same ionic strength made with a salt the crown shouldn't bind (choline chloride is one option to look into).
- Consider pointing the crown–AuNP work at **potassium** instead. That's what the chemistry does, and sweat K⁺ (about 2–8 mM) is only a few times above the reference method's 1 mM ceiling. Sodium is 10–100× above it. You'd still need the ionic-strength control.
- Minor: amines hold onto gold much more weakly than thiols. Check how Chitbankluai anchored their crown before you assume Au–N will survive.

### 2. The Step 35 selectivity test has a sodium problem built in

Your chloride working standard is made from **NaCl**. At 2,200 mg/L Cl⁻ it contains **1,427 mg/L Na⁺**, which is more sodium than the 950 mg/L reference you compare against. Using it as the "non-target ion" means you're testing sodium against sodium. It will fail for the wrong reason.

Step 36 has the same problem on a smaller scale: 10 mM **sodium** lactate adds **230 mg/L Na⁺**, so the spiked sample no longer matches the "same concentration" standard.

**Fix:** make a chloride-only test solution from a non-sodium chloride salt (choline chloride is one option). For Step 36, either subtract the lactate's sodium from the NaCl or compare against a 1,180 mg/L Na⁺ standard.

### 3. The MQuant potassium strip's rated range mostly misses your calibration range

MQuant Potassium (1.17985) is rated for **250–1,500 mg/L K⁺**. Your K⁺ series is 80–320 mg/L. Three of your five levels (80, 150, 200) are below the strip's floor, 250 is right at the edge, and only 320 is clearly inside.

Your Step 46 LOD check would catch this, but only after you've bought strips and run the patches.

**Fix:** read the strip's insert, including any pre-treatment step it needs. Then decide whether K⁺ becomes a "threshold/semi-quantitative" zone, moves to a different chemistry (see #1), or is validated with a pocket K⁺ ion meter instead.

### 4. EBT probably gives no signal at sweat pH

Free EBT is blue only from about **pH 7 to 11**. Below about pH 6.3 the free indicator is already **red**, which is the same color as its Mg complex. At pH 4.5–6.5 there is essentially no blue→red change to see. Your note says the response is "optimal near pH 10." It's worse than that: there's likely no contrast at all. Calmagite and Xylidyl Blue also need alkaline conditions.

Related issues:
- **EGTA free acid barely dissolves in plain water.** It needs base (around pH 8) to go into solution.
- **None of your test solutions contain Ca²⁺,** so you never actually test whether EGTA does its job.
- At 0.01 M, EGTA is about **16×** your mid-range Mg²⁺ (0.62 mM), and EGTA binds Mg²⁺ too, just more weakly.

**Fixes:** dry a **pH ~10 buffer** into the Mg zone together with the indicator. The zone is isolated, so the buffer's counter-ions don't matter as long as they contain no Mg or Ca. Add a physiological level of CaCl₂ to the Mg selectivity test. Also try at least two EGTA levels.

### 5. Step 66 unit error

The Baker equation (whole-body Na⁺ = 0.57x + 11.05) takes x in **mmol/L**. Your readings are in **mg/L**. Plugging in 950 mg/L gives "552 mmol/L," which is nonsense.

Correct version: 950 mg/L ÷ 22.99 = 41.3 mmol/L → 0.57 × 41.3 + 11.05 = **34.6 mmol/L** (≈ 796 mg/L).

Also:
- The equation was built from **absorbent-patch sweat analyzed in a lab** (Baker et al., 2009). Using it assumes your patch reads the way theirs does.
- Check which side of the forearm the equation used. The 2016 normative-data paper that applies it collected from the **dorsal** mid-forearm. Your Step 61 uses the **volar** side.
- If zone 4 never gets loaded, there's no Na⁺ reading to correct. Gx handles this by estimating Na⁺ from Cl⁻, and you could too, but cite the Na⁺–Cl⁻ relationship you use.

---

## Major: your results may not mean what you think

### 6. The calibration conditions don't match how the patch is worn

In the lab, you apply a 50 µL drop and read it at 60 s. On the body, sweat trickles in slowly, typically about 0.5–1.5 mg/cm²/min on the forearm during exercise, depending on the person and the heat. At that rate, 50 µL through a 1 cm inlet takes somewhere around **30–100 minutes**. The paper is uncovered at 33 °C, so evaporation concentrates the ions and **biases readings high**. In real use, "60 s" has no meaning.

**Fixes:**
- Cover the top of the patch with clear tape so it can't evaporate. Gx is sealed for this reason.
- Add a "slow-feed" calibration: small aliquots added over time on a 33 °C plate, read at a defined point. For example, read when fluid reaches a mark in the serpentine channel. That also gives the serpentine a real job (see #10).

### 7. The skin-safety claim isn't guaranteed yet

Once both layers are wet, dissolved reagent can **diffuse back down** into L. L has open paper directly under every reagent zone, touching skin. For the patch to work there has to be a liquid path, and that path runs both ways.

**Fixes:**
- Make the skin-contact layer a medical adhesive film with **one punched hole at the inlet**, so skin only ever touches the inlet.
- **Prove the claim with an experiment:** load food dye into the U zones, wet the stack, and check whether dye shows up on the skin side of L. This takes about 20 minutes and turns a claim into evidence. SRC reviewers like that.
- Two wax dots at the corners won't keep the layers in contact across the zones. Laminate or tape the whole stack.

### 8. Adjusting the pH of unbuffered standards doesn't work as written

One drop (~0.05 mL) of 0.1 M HCl into 100 mL of unbuffered salt solution takes it to about **pH 4.3**, overshooting the whole 5.0–6.0 window. Unbuffered solutions also drift as they absorb CO₂. Good news: DI water in contact with air already sits around pH 5.6, so your standards will probably land in range without adjustment.

**Fixes:**
- Measure and record pH instead of adjusting it.
- For Part 8's pH 4.5 and 6.5 tests, you need a dilute buffer adjusted with a base that doesn't contain your analytes. MES adjusted with Tris is one combination to look into. Run the buffer alone as a blank.

### 9. Part 9 isn't an independent check

Gx uses **silver chloranilate**, the same chemistry as your chloride zone. Agreement between the two shows your *camera and app* match theirs. It doesn't independently confirm your chemistry. Gx is also designed to be filled by sweat pressure, and its app reports its own estimates, so check what number it actually gives you. Step 57 also says to apply the sample "to the chloride zone," while every other step uses the inlet.

**Fix:** use an independent reference method. Pocket ion-selective meters that measure a single drop (for example, Horiba LAQUAtwin Na-11 and K-11, a few hundred dollars each) would validate Na⁺ and K⁺ in synthetic *and* real sweat. That's a much stronger Part 9 and Part 10.

---

## Moderate: replicability and practical gaps

### 10. Parts of the patch geometry can't be reproduced
- **No channel widths are given** for the wicking channel or branch lines.
- The procedure never says **how the zones connect to the serpentine channel**, and the serpentine isn't used in any later step.
- **Zone edges are only 3 mm apart** (1.5 cm spacing minus a 1.2 cm diameter). You're asking for hand-painted barriers of at least 2 mm with wax that spreads when heated. The outer zones sit **1.5 mm** from the paper edge.
- **Step 15 tests with 20 µL**, but real samples are 50 µL.
- **60 s is timed from when the sample hits the inlet,** not from when fluid reaches the zone. Fluid has to travel about 3.5 cm and split four ways, and 50 µL may not fill all of it. Do a timed 50 µL dye run on a full patch.

**Fix:** specify channel widths, draw a dimensioned diagram, shrink zones to 1.0 cm or widen the patch, and make a stencil or stamp for the wax.

### 11. The stocks will run short
- The K⁺ series uses **100 mL of a 100 mL stock**, and you can't get every drop out of a flask. Mg²⁺ uses 89 of 100 mL. Neither leaves anything for the 14-day remake.
- The Mg stock needs **84 mg** weighed, which breaks your own "no sub-100 mg" rule.
- Volumes like 9.5, 19, 22, 23, and 32 mL can't be delivered with 5/10/25 mL volumetric pipettes.

**Fix:** make the K⁺ and Mg²⁺ stocks at 1 L (1.907 g and 0.836 g). Use a burette or 10 mL graduated pipette for the dilution series.

### 12. Missing from the equipment list
- About 25 labeled storage bottles, since 5 flasks can't store 21 standards for 14 days
- A centrifuge that reaches ≥10,000 × g (a microcentrifuge works)
- A stirring hot plate
- A fume hood
- Potassium citrate, Calmagite, and Xylidyl Blue (all named as alternatives)
- Food dye, parchment, zip bags, and a timer
- NaCl: the actual total is **6.6 g**, not about 6 g

**"Acid-washed" glassware for gold synthesis usually means aqua regia,** which is a serious hazard. Buying pre-made AuNPs avoids both that and handling HAuCl₄. I'd strongly recommend buying them.

### 13. Statistics
- **R² ≥ 0.95 doesn't prove a straight line fits.** Curved data can still score 0.95+. Look at the residual plot. Colorimetric responses usually level off, so try fitting against log(concentration).

### 14. Part 8 is called "stability" but doesn't test stability
It tests temperature and pH. It never tests **shelf life**: whether a loaded patch still works after 1, 3, or 7 days. Add that.

### 15. Part 10 details
- **"Normal physical activity" can't be replicated.** Sweat composition depends on sweat rate, so specify the exercise, duration, intensity, and room temperature.
- **Human participants:** under ISEF rules, collecting sweat during exercise is generally human-participant research, which normally needs **IRB** review and informed consent, not just SRC and an Adult Sponsor. Check the current ISEF International Rules for how self-experimentation is handled before you rely on the "self-testing policy."

---

## Minor wording and accuracy fixes

- **−365 / −295 kJ/mol** are hydration **free energies** (ΔG, Marcus), not enthalpies. The enthalpies are about −405 / −320 kJ/mol. Either relabel them or swap the numbers.
- **"No validated colorimetric sodium reagent exists"** overstates it. Clinical enzymatic sodium assays and ion-selective optodes exist. A more accurate version: "no simple, paper-ready, student-safe colorimetric sodium reagent is established."
- **Steps 20 and 31** said "single-zone test patches" and then "three zones per patch." The rewrite resolves the wording, but decide which layout you actually mean.
- **Step 50** said "all three characterized ions" and then listed four. The rewrite clarifies that the Na⁺ comes along with the NaCl.

---

## Sources checked

- Lin et al., 2002, *Anal. Chem.* 74, 330. 15-crown-5–AuNP K⁺ sensor (2:1 sandwich): https://pubs.acs.org/doi/10.1021/ac0156316
- Chitbankluai et al., 2021, *J. Phys.: Conf. Ser.* 1719, 012026 (18-crown-6, K⁺ 5–1,000 µM): https://ui.adsabs.harvard.edu/abs/2021JPhCS1719a2026C/abstract
- Chandran et al., 2022, *Sci. Rep.* 12, 6247. Cu-curcumin Na⁺ paper sensor: https://www.nature.com/articles/s41598-022-09852-z
- MQuant Potassium Test, 250–1,500 mg/L: https://www.sigmaaldrich.com/US/en/product/mm/117985
- Baker et al., 2009, *J. Appl. Physiol.* 107, 887. Regional vs. whole-body sweat Na⁺: https://journals.physiology.org/doi/full/10.1152/japplphysiol.00197.2009
- Baker et al., 2016, *J. Sports Sci.* Normative sweat Na⁺, dorsal forearm, y = 0.57x + 11.05: https://www.tandfonline.com/doi/full/10.1080/02640414.2015.1055291
- Gx patch chemistry (silver chloranilate; Na⁺ inferred from Cl⁻): https://www.gssiweb.org/sports-science-exchange/article/gx-sweat-patch-and-app-for-personalized-hydration
