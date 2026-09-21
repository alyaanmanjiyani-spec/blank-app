# LATER.md

Parked ideas. Nothing here gets built without asking first.

If an idea shows up mid-build that is not in the spec, it goes here instead of
into the code. This file is the pressure valve that keeps the build finishable.

---

## Explicitly deferred by the spec

### Auto-log sent emails from Gmail
Read the Gmail Sent folder and create ContactLog rows automatically.
**Cost:** needs the `gmail.readonly` scope — that is access to *every* email in
the account, for the sake of saving ~20 seconds per email logged.
**Decide later** whether that trade is worth it. Leaning no.

### Per-client project workspaces
A separate folder + Sheet per paying client, created from a template, deleted
when the project ends.
**Why it is parked:** it only matters once there are 2+ clients at the same
time. Building it before then is guessing.

### Anything that runs in the background
Except the one Sunday 6pm summary email in Phase 7.
Background triggers fail silently and are hard to debug. One is enough.

---

## Ideas raised during the build

*(Add here. Format: idea — why it is tempting — why it is parked.)*

### Offline draft for Quick Log
If signal drops mid-call-log, the save fails and the notes are lost.
**Tempting because:** it protects the one non-negotiable.
**Parked because:** the Apps Script HTML sandbox makes reliable offline storage
awkward, and the cheap fix (keep the form filled in and show a Retry button)
covers 90% of it. Revisit only if a save is actually lost in real use.

### Map view of businesses by city
**Parked:** ~100 businesses in one metro area. A list sorts fine. A map is
decoration.

### Automatic "you are behind" nudge notification
**Parked:** the Sunday email already carries this. Two nudges is one too many.
