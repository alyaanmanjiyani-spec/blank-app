# Business Notebook

A private notebook for running a small analytics service for local businesses:
who to contact, every call, interview notes, case studies, and numbers that
calculate themselves.

Google Sheet = the database. Google Apps Script = the app. Private to one
Google account. Free.

**Start here:** [`CLAUDE.md`](CLAUDE.md) — the spec, the data model, the funnel
definitions and the decisions log.
**Setting up a machine:** [`docs/phase-0-setup.md`](docs/phase-0-setup.md)

## Daily commands

```bash
clasp push            # send local code to Google
clasp push -w         # ...and keep pushing on every save
clasp open-script     # open the Apps Script editor in a browser
clasp show-file-status # show exactly which files would be pushed
```

## Rules

- Never edit code in the Apps Script web editor. `clasp push` overwrites it.
- Never commit `.clasp.json` or `.clasprc.json`. Both are gitignored.
- Never put a client's customer data in this Sheet.
