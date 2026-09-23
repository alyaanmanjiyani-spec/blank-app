# Procedure

Step numbers match the original research plan (Steps 1–67). Every quantity, concentration, and acceptance criterion is unchanged from the original.

## Materials and Equipment

### Reagents

| Item | Specification and purpose |
|---|---|
| NaCl, reagent grade | Source of sodium and chloride for the calibration stocks. About 6 g needed. |
| KCl, reagent grade | Potassium source. About 1 g needed. |
| MgCl₂·6H₂O, reagent grade | Magnesium source. I'm using the hexahydrate because it's the common, stable form, so every calculation uses its formula mass (203.30 g/mol). About 1 g needed. |
| Deionized (or Type II) water | Solvent for every solution. Tap water can't be used because it already contains the ions I'm measuring. About 5 L. |
| 0.1 M HCl and 0.1 M NaOH | Only for adjusting pH, added a drop at a time. The target is the normal sweat range, pH 4.5–6.5. |
| Silver chloranilate, or a validated colorimetric chloride kit | Chloride reagent. Check the chemistry before ordering: some commercial chloride kits use Hg(SCN)₂, which brings a mercury hazard and its own disposal rules. |
| Pre-formulated potassium test strips (dipicrylamine-based, e.g., MQuant Potassium) | Potassium reagent. Raw dipicrylamine is a DOT Explosive 1.1D and acutely toxic, so I will not buy or handle it in that form. The manufacturer's stabilized strip is the only acceptable format. |
| Eriochrome Black T (EBT) | Magnesium indicator. It binds Mg²⁺ and changes from blue to wine red. The color change depends on pH (see the note in Part 3). |
| EGTA | Masks Ca²⁺. It has to be used any time EBT is used, because calcium would otherwise show up as a false magnesium signal. |
| Sodium reagent (candidate under evaluation) | There's no validated colorimetric sodium reagent, so I'm testing two candidates in Part 4: (a) a sodium-sized crown ether (4′-aminobenzo-15-crown-5) attached to gold nanoparticles, adapted from the design in Chitbankluai et al. (2021); and (b) Cu-curcumin nanoparticles (Chandran et al., 2022). The sodium zone only gets loaded after one of them passes Part 4. |
| 4′-Aminobenzo-15-crown-5 | Sodium-selective crown ether. The 15-crown-5 cavity (about 1.7–2.2 Å) fits Na⁺ (about 1.9 Å across) and is too small for K⁺ (about 2.7 Å). The amino group is how it attaches to gold (Au–N bond). Sold by Sigma-Aldrich and others. About 50 mg needed. |
| Gold(III) chloride trihydrate (HAuCl₄·3H₂O) | Starting material for making gold nanoparticles by citrate reduction. About 25 mg needed. Buying ready-made citrate-stabilized 15–20 nm AuNPs skips the synthesis entirely. |
| Trisodium citrate dihydrate | Reduces the gold and caps the particles during AuNP synthesis. About 100 mg needed. It also adds Na⁺ to the nanoparticle suspension, so the suspension has to be washed or dialyzed before it goes into a sodium sensor, or a citrate salt without sodium has to be used instead. |

### Equipment

| Item | Specification and purpose |
|---|---|
| Analytical balance, 0.001 g | Needed for the stock solutions. A 0.01 g balance would put more than 10% error on the smallest masses. |
| Volumetric flasks: 100 mL (×5), 1 L (×2) | Every calibration solution is made volumetrically. Graduated cylinders aren't accurate enough for the dilution series. |
| Volumetric or graduated pipettes: 5, 10, 25 mL | For diluting from stock. |
| Micropipette, 10–100 µL, with tips | For putting sample on the reaction zones. Set to 50 µL for every trial. |
| pH meter (calibrated) or narrow-range pH strips (4–7) | Check every solution before use. |
| Filter paper (Whatman No. 1 or equivalent) | Patch material. Two layers per patch. |
| Paraffin wax and heat source (iron or hot plate, ~80–100 °C) | Makes the water-repellent barriers. |
| Water bath or incubator, 30–35 °C | Stability testing at skin temperature. |
| Smartphone camera + the project's reader app | Reads the color. Camera distance and lighting stay the same for every trial. |
| Commercial sweat patch (Gatorade Gx or Nix) | Outside comparison standard for Part 9. |
| Nitrile gloves, safety glasses, labeled chemical waste container | Standard PPE and waste handling. Silver-containing waste is kept separate. |

---

## Part 1: Calibration Stock Solutions

*Why it's done this way:* I calibrate each ion on its own, using solutions that contain only that ion, so I can see how each reagent responds without the other ions getting in the way. The mixed synthetic sweat for cross-contamination testing is made later, in Part 7. Every working solution is diluted from a concentrated stock instead of being weighed out directly, because weighing masses under 100 mg adds too much error.

**1.** Put on PPE. Check the balance with a check mass. Rinse all volumetric glassware three times with DI water and let it drain.

### 1A: Sodium stock, 10,000 mg/L Na⁺

**2.** Work out the NaCl mass: (10,000 mg/L Na⁺) × (58.44 g/mol NaCl ÷ 22.99 g/mol Na) × (1 L) ÷ 1000 = 25.42 g NaCl per liter. For 100 mL of stock, weigh 2.542 g NaCl.

**3.** Transfer all of it into a 100 mL volumetric flask, dissolve it in about 70 mL of DI water, then fill to the mark. Invert 20 times. Label it "Na stock 10,000 mg/L, [date]."

### 1B: Chloride stock, 10,000 mg/L Cl⁻

**4.** Calculate: (10,000 mg/L Cl⁻) × (58.44 ÷ 35.45) ÷ 1000 = 16.48 g NaCl per liter, so weigh 1.648 g for 100 mL. Prepare it the same way as Step 3. This stock also contains 6,486 mg/L Na⁺. That's fine, because the chloride calibration uses a chloride-selective reagent.

### 1C: Potassium stock, 1,000 mg/L K⁺

**5.** Calculate: (1,000 mg/L K⁺) × (74.55 ÷ 39.10) ÷ 1000 = 1.907 g KCl per liter, so weigh 0.191 g for 100 mL. Prepare it the same way as Step 3.

### 1D: Magnesium stock, 100 mg/L Mg²⁺

**6.** Calculate: (100 mg/L Mg²⁺) × (203.30 ÷ 24.31) ÷ 1000 = 0.836 g MgCl₂·6H₂O per liter, so weigh 0.084 g for 100 mL. Prepare it the same way as Step 3. The stock is kept low on purpose. Sweat only has about 4–40 mg/L Mg, and a 100 mg/L stock keeps the dilution volumes practical.

### 1E: Working calibration series (five levels per ion)

**7.** For each ion, make five 100 mL working standards: pipette the stock volume listed below into a 100 mL volumetric flask and fill to the mark with DI water. The concentrations cover the normal range for human sweat.

| Ion (stock) | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|---|---|---|---|---|---|
| Sodium (10,000 mg/L) | 2.0 mL → 200 mg/L | 5.0 mL → 500 | 9.5 mL → 950 | 15.0 mL → 1,500 | 23.0 mL → 2,300 |
| Chloride (10,000 mg/L) | 4.0 mL → 400 mg/L | 9.0 mL → 900 | 15.0 mL → 1,500 | 19.0 mL → 1,900 | 22.0 mL → 2,200 |
| Potassium (1,000 mg/L) | 8.0 mL → 80 mg/L | 15.0 mL → 150 | 20.0 mL → 200 | 25.0 mL → 250 | 32.0 mL → 320 |
| Magnesium (100 mg/L) | 4.0 mL → 4 mg/L | 10.0 mL → 10 | 15.0 mL → 15 | 20.0 mL → 20 | 40.0 mL → 40 |

**8.** Adjust each working standard to pH 5.5 ± 0.5 with 0.1 M HCl or NaOH, one drop at a time. Write down the final pH. Label each flask with the ion, concentration, pH, and date.

**9.** Make one DI-water blank (0 mg/L) and adjust its pH the same way. This blank is the negative control for every ion.

**10.** Store all solutions capped at 4 °C. Throw them out and remake them after 14 days.

---

## Part 2: Patch Fabrication (two-layer design)

*Why two layers:* The patch is two sheets of filter paper stacked together. The bottom sheet touches the skin and has no reagents on it; its only job is to wick sweat upward. The top sheet holds all of the reagent zones and never touches skin. This is the main safeguard keeping reagents off the skin. Both sheets get the same wax channel pattern so the fluid paths line up when they're stacked.

**11.** Cut two identical 6.0 × 10.0 cm rectangles of filter paper for each patch. In pencil, label one "L" (lower, skin side, blank) and the other "U" (upper, reagents), in a corner outside the working area.

**12.** Draw the channel pattern in pencil on both sheets:

- **Inlet:** a 1.0 cm diameter circle, centered 1.0 cm from the top edge.
- **Wicking channel:** a line from the inlet down to a junction 2.5 cm from the top.
- **Four reaction zones:** 1.2 cm diameter circles centered 4.5 cm from the top, at −2.25, −0.75, +0.75, and +2.25 cm from the vertical centerline.
- **Branch lines:** from the junction to each zone.
- **Serpentine volume channel:** filling the area 7.0–9.0 cm from the top.
- **Reference rectangle:** 2.0 × 0.5 cm, centered 9.5 cm from the top.

**13.** Melt the paraffin wax. With a fine brush, paint wax along the pencil lines to make the water-repellent barriers. Leave the inlet, wicking channel, four zones, branch lines, volume channel, and reference rectangle open. Barriers should be at least 2 mm wide.

**14.** Lay parchment paper over each sheet and heat it (iron on low, or hot plate at about 90 °C) for 5–10 s, until the wax soaks all the way through the paper. Check by holding the sheet up to a light: the wax lines should look translucent through the whole thickness. If the wax only coats the surface, fluid will still wick sideways underneath it.

**15.** Barrier check: put 20 µL of dyed DI water (any food coloring) on one zone of a spare patterned sheet. Wait 2 min. Make sure no dye has crossed any wax line. If it has, reheat or add more wax before going on.

**16.** Fill the reference rectangle on the U layer with a fixed neutral gray (a printed swatch or a dried gray pigment). Record its RGB value under the standard lighting. This value goes into the reader app as the reference color.

---

## Part 3: Reagent Loading (U layer only; teacher supervision required)

Before loading anything, I go over each reagent's SDS with my supervising teacher. If any solvent other than water is used, loading happens in a fume hood.

**17.** Chloride zone (zone 1): put down 10 µL of silver chloranilate as a saturated suspension in water, or follow the kit manufacturer's instructions. Let it air-dry for at least 15 min in the dark, since chloranilate is light-sensitive.

**18.** Potassium zone (zone 2): cut a 1.0 cm disc from a commercial potassium test strip and hold it in place inside the zone with a thin edge of wax. Don't extract or reformulate the reagent.

**19.** Magnesium zone (zone 3): make EBT indicator solution at 0.5% w/v in DI water containing 0.01 M EGTA. Put down 10 µL per zone and let it air-dry for at least 15 min.

> **Note on pH:** EBT's color change with magnesium depends on pH. In classic titrations it works best near pH 10, and sweat (pH 4.5–6.5) is well below that. I'll measure how much this matters in Part 5. If the response is too weak at sweat pH, the next things to try are a buffered EBT formulation or a different indicator (Calmagite or Xylidyl Blue). This part of the design is still an open problem.

**20.** Sodium zone (zone 4): leave it empty for Parts 5–8. The sodium candidates are tested separately in Part 4 on their own test patches, and zone 4 is only loaded once a candidate meets the Part 4 acceptance criteria. Until then, write "Na zone: not loaded" on every data sheet.

**21.** Stack L underneath U with all the zones lined up. Tack the two layers together with a small dab of wax at two corners outside the working area. Write the patch ID (date + sequence number) on a corner of the U layer.

---

## Part 4: Sodium Candidate Evaluation (exploratory; crown ether–gold nanoparticle approach)

*Why sodium is the hard one:* Of the four ions, sodium is the hardest to detect by color because of its high charge density. Na⁺ is small, so its +1 charge is packed into a tiny space, and it holds its shell of water molecules more tightly than K⁺ does (hydration enthalpy about −365 vs. −295 kJ/mol). A reagent has to give Na⁺ a binding site good enough to make up for the energy it costs to strip that water off. Sodium channels in the body get their selectivity mostly from size and shape rather than binding strength: the filter is sized to let a partly hydrated Na⁺ through and keep the larger K⁺ out. Crown ethers copy that idea. They're rings with oxygen atoms pointing inward, which stand in for the water shell, and the ring size decides which ion fits. 15-crown-5 is sized for sodium, and 18-crown-6 is sized for potassium.

This part adapts a published paper-based design (Chitbankluai et al., 2021, *J. Phys.: Conf. Ser.* 1719, 012026). In that paper, 4-aminodibenzo-18-crown-6 was attached to gold nanoparticles on a wax-printed array to detect K⁺. I'm swapping in the sodium-sized crown ether. That swap is my hypothesis, not an established method, and I'll report the outcome whether it works or not.

*How the signal works:* Gold nanoparticles around 15–20 nm look red when they're spread out, because of their surface plasmon resonance near 520 nm. When Na⁺ bridges crown ethers on two neighboring particles (a 2:1 "sandwich" complex), the particles clump together, the absorption band shifts toward roughly 620–700 nm, and the color moves from red toward violet or blue. The number I measure is the ratio A₆₂₀/A₅₂₀, or in image analysis, how much red intensity is lost. In other words, the crown ether does the recognizing and the nanoparticles do the signaling.

*The concentration problem:* The reference method detected K⁺ at 5–1,000 µM in urine. Sweat Na⁺ is roughly 10–100 mM, which is 10 to 1,000 times higher. At sweat levels the original formulation would saturate, meaning every zone would be fully clumped. The authors report that sensitivity can be tuned by how much crown ether is loaded, so in Part 4C I treat crown ether loading as a variable and try to push the working range upward. Whether that retuning works is the main question of this part.

### 4A: Gold nanoparticle preparation (citrate reduction, or buy pre-made)

**22.** If buying: get citrate-stabilized AuNPs, nominal 15–20 nm, about 0.05 mg/mL in water, and skip to Step 25. If making them, follow the Turkevich method below under teacher supervision.

**23.** Make 50 mL of 0.25 mM HAuCl₄ in DI water (about 4.9 mg HAuCl₄·3H₂O in 50 mL). Bring it to a rolling boil in a clean flask while stirring. The glassware must be acid-washed, because trace contamination changes the particle size.

**24.** Quickly add 1.5 mL of 1% w/v trisodium citrate while stirring hard. Keep boiling for about 10 min. The solution goes gray/blue and then settles at a stable ruby red, which means particles of about 15–20 nm. Let it cool to room temperature.

**25.** Record the UV–Vis spectrum if a spectrophotometer is available; otherwise, photograph the suspension with the standard imaging setup. A single sharp band near 520 nm means the particles are uniform and not clumped. A shoulder above 600 nm means they've already started to aggregate; throw the batch out and remake it.

**26.** Citrate adds Na⁺, and Na⁺ is the ion I'm trying to measure, so the AuNP suspension has to be cleaned before use. Centrifuge at ≥10,000 × g for 20 min, pour off the liquid, and resuspend the particles in DI water. Repeat this wash twice. Another option is to use potassium citrate as the reducing agent, so no sodium gets in at all.

### 4B: Crown ether conjugation

**27.** Make 4′-aminobenzo-15-crown-5 at 1 mM in ethanol or DI water. Check the SDS for solubility, and if ethanol is needed, use as little as possible. Ethanol is the only non-water solvent anywhere in this procedure.

**28.** Add the crown ether solution to the cleaned AuNP suspension, starting with equal volumes (1:1). This is the first of several loadings tested in 4C. Stir gently for 30 min at room temperature. The amino group pushes citrate off the gold surface and forms Au–N bonds.

**29.** Check that the conjugation worked. The plasmon band should shift slightly (usually 2–5 nm) but stay a single sharp peak. If the peak broadens a lot or the color turns violet at this stage, the crown ether itself made the particles clump. Lower the crown ether:AuNP ratio and try again.

**30.** Make at least three crown ether loadings covering a 10-fold range, for example 0.1:1, 1:1, and 10:1 (crown ether solution : AuNP suspension, by volume). Label each one. Loading is the variable being changed in 4C.

### 4C: Retuning the range and checking selectivity

**31.** Put 10 µL of each crown ether–AuNP formulation onto the Part 4 test patches (three zones per patch, one loading per zone, the same layout as the reference array). Air-dry for 30 min. The zones should look pink-red.

**32.** Apply 50 µL of each sodium working standard (200, 500, 950, 1,500, and 2,300 mg/L Na⁺, from Part 1) to separate patches. Image at 60 s. Use n = 3 per level per loading. Record red intensity and, if a spectrophotometer is available, A₆₂₀/A₅₂₀.

**33.** Also run the DI-water blank (n = 3). If a zone shifts toward violet with the blank, the particles clumped for some reason other than sodium, and that loading is rejected.

**34.** Pick the loading whose color keeps changing in the same direction as sodium goes up, without maxing out, across 200–2,300 mg/L Na⁺. To pass, at least four of the five levels have to be distinguishable (mean red-intensity values more than 2 SD of the replicate noise apart), and the blank has to be distinguishable from the lowest level.

**35.** Selectivity check: on patches with the selected loading, apply 50 µL each of the potassium (320 mg/L), magnesium (40 mg/L), and chloride (2,200 mg/L) working standards, which are the top of each range. Image at 60 s. To pass, the response to each non-target ion has to be less than 20% of the response to 950 mg/L Na⁺.

**36.** Matrix check: apply 50 µL of the combined synthetic sweat (Part 7 recipe). In a separate set, apply the same synthetic sweat spiked with 5 mM urea and 10 mM sodium lactate, to get closer to the other things in real sweat. Compare the Na⁺ reading to the reading from the pure sodium standard at the same concentration. If they differ by more than 20%, something in the mixture is interfering, and that has to be worked out before the reagent is adopted.

**37.** Decision point: if a loading passes Steps 34–36, load zone 4 with it and include sodium alongside the other ions in Parts 5–8. If no loading passes, write down how it failed (saturation, not sensitive enough, interference, or clumping in the blank), leave zone 4 empty, and continue with the three working ions. Either outcome is reportable, and a well-documented negative result on this sodium candidate is still a real contribution.

### 4D: Backup candidate

**38.** If the crown ether approach fails 4C, test the Cu-curcumin nanoparticle method (Chandran et al., 2022, *Sci. Rep.* 12, 6247) using the same 4C checks. That paper reports selectivity against K⁺, Mg²⁺, and Zn²⁺, but it wasn't tested in sweat, so the 4C matrix check still applies.

---

## Part 5: Single-Ion Calibration

Each reagent is tested by itself here, with only one zone loaded per patch. These conditions stay the same for every trial: 50 µL sample, 60 s reaction time, camera 15 cm away and perpendicular to the patch, the same lighting, pH 5.5 ± 0.5, and room temperature (22 ± 2 °C).

**39.** Set up the imaging station: camera mounted 15 cm above the bench and pointing straight down, one diffuse light source, and a matte neutral background. Photograph a blank patch and check that the reference rectangle reads within ±5 RGB units of its recorded value.

**40.** Start with chloride. Pipette 50 µL of the 400 mg/L Cl⁻ standard onto the inlet and start the timer right away.

**41.** At exactly 60 s, take the picture. Name the file [ion]_[conc]_[replicate]_[date].jpg.

**42.** Repeat Steps 40–41 on two fresh patches (n = 3 per level).

**43.** Do the same for the other four chloride levels (900, 1,500, 1,900, and 2,200 mg/L), n = 3 each. That's 15 chloride patches in total.

**44.** Negative control: put 50 µL of the DI-water blank on three chloride-loaded patches and image at 60 s. Record the mean zone RGB; this is the zero-analyte baseline. If the color changes, stop and check for reagent contamination before going any further.

**45.** Run the same calibration sequence (apply, image at 60 s, n = 3, all five levels, plus the blank) for potassium (the 80–320 mg/L series) and magnesium (the 4–40 mg/L series). That's 15 patches plus 3 blanks per ion.

**46.** Low-end sensitivity check (K⁺ and Mg²⁺): run the two lowest levels of each ion again with 5 more replicates. Calculate the mean and SD of each zone's RGB distance from the blank. The lowest level only counts as detectable if its mean is more than 3 SD of the blank away from the blank (a limit-of-detection test). Record the result either way, including when a level fails.

---

## Part 6: Data Reduction and Calibration Curves

**47.** Load each image into the reader app. Mark the reagent zone and the reference rectangle. Record the app's corrected RGB output and its color-distance value for each image.

**48.** For each ion, make a table with concentration (mg/L), the color-distance values for replicates 1–3, the mean, SD, and %CV. Flag any level with a %CV above 10% for retesting.

**49.** Enter each (mean color value, concentration) pair into the app's calibration table for that ion. The app fits a least-squares line and reports R². Record R². A value below 0.95 means a straight line doesn't describe that ion well over the tested range.

> **Magnesium note:** EBT changes hue (blue to red) rather than just getting lighter or darker, so a single distance-from-white number may not track concentration in a straight line. If R² for Mg comes out below 0.95, plot the R, G, and B channels against concentration separately and find the channel that changes most consistently. This is a known limitation of my current analysis method and a likely place to revise it.

---

## Part 7: Multiplexed Patch and Cross-Contamination

**50.** Make a combined synthetic sweat containing the three calibrated ions at mid-range physiological levels, plus the sodium that comes with the NaCl: 950 mg/L Na⁺, 1,500 mg/L Cl⁻, 200 mg/L K⁺, and 15 mg/L Mg²⁺. To make it, dissolve 2.41 g NaCl, 0.38 g KCl, and 0.13 g MgCl₂·6H₂O in DI water and bring the volume to 1.000 L. Because all three salts contribute chloride, total Cl⁻ actually comes out to about 1,690 mg/L. That's still within the physiological range, and I record 1,690 mg/L as the real Cl⁻ concentration.

**51.** Make three fully loaded patches (zones 1–3 loaded, zone 4 blank). Put 50 µL of the combined synthetic sweat on the inlet. Image at 60 s.

**52.** Read all of the zones in the app and compare each zone's reported concentration to the known value. To pass, each zone has to be within ±15% of its known concentration. If a zone passed in Part 5 but fails here, either the zones are interfering with each other or a barrier leaked.

**53.** If there's interference, test each zone with the multi-ion solution on single-zone patches. This separates chemical interference (a reagent reacting to the wrong ion) from a physical leak (fluid crossing a wax barrier).

---

## Part 8: Stability

**54.** Repeat the mid-range level of each ion (n = 3) on patches warmed in a 33 °C water bath (patch sealed in a zip bag and submerged for 5 min before the sample goes on). Apply the sample and image at 60 s while the patch is still at temperature.

**55.** Repeat the mid-range level (n = 3) at pH 4.5 and at pH 6.5 to cover both ends of the physiological range. Compare these with the pH 5.5 results.

**56.** Report how far each condition is from the room-temperature, pH 5.5 calibration. A difference of more than 15% means the calibration can't be used under that condition without a correction.

---

## Part 9: Comparison Against a Commercial Patch

**57.** Put 50 µL of combined synthetic sweat on the chloride zone of my patch, and at the same time put the same volume on the chloride channel of a commercial patch, following its instructions. Image both at 60 s under identical conditions.

**58.** Run both images through the reader app. Record both chloride readings next to the known value. Repeat for n = 3.

**59.** Analysis: report the absolute and percent difference of each patch from the known value, and between the two patches. For Stage 2 (real sweat, where there's no known value), the right comparison is Bland–Altman limits of agreement between the two devices. Correlation isn't the right tool there.

---

## Part 10: Stage 2, Real Sweat (only after written SRC approval)

Don't start until the Risk Assessment Form is approved and the Adult Sponsor has confirmed the self-testing policy. All Stage 2 work happens under school supervision.

**60.** Record the participant's body mass before exercise (±0.1 kg, minimal clothing, after using the bathroom).

**61.** Put the patch on the inner (volar) forearm, halfway between the wrist and elbow. Write down the time it went on. Maximum wear time is 3 h.

**62.** Put a commercial reference patch on the other forearm at the same time.

**63.** The participant does their normal physical activity. Stopping rule: any irritation, burning, or discomfort at either patch site ends the session immediately. Take off both patches, wash the skin, and report it to the Adult Sponsor.

**64.** When the session ends, record body mass again under the same conditions. Sweat volume (L) is about equal to the mass lost (kg), after correcting for anything the participant drank during the session.

**65.** Photograph both patches while they're still on the arm (forearm only in the frame) using the standard imaging setup. Run the images through the app and enter the before and after body masses.

**66.** Record all four zone readings, the reference patch reading, the calculated sweat volume, and the estimated total loss for each ion. Apply the whole-body correction (whole-body Na⁺ ≈ 0.57 × forearm reading + 11.05 mmol/L) and record both the raw and corrected values.

**67.** Dispose of all patches as chemical waste. Keep anything containing silver separate.
