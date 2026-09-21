# Phase 0 — Setup

Everything here runs **on your own laptop**, not in a cloud session.
Reason: `clasp login` saves a real Google access token to your home folder.
That token should never touch a shared or temporary machine.

Verified against clasp **3.4.1** (published 2026-08-28) by installing it and
reading its actual `--help` output — not from memory.

---

## Step 1 — Check Node.js

```bash
node -v
```

You need **v20 or newer**. The clasp README asks for v22+, so install **Node 22
LTS** to be safe. If `node -v` prints nothing or a number below 20, get Node 22
LTS from https://nodejs.org (the big green LTS button).

---

## Step 2 — Install clasp

```bash
npm install -g @google/clasp
clasp -v
```

`clasp -v` must print **3.x** (3.4.1 or newer).

If it prints 2.x you have an old copy that will make the next commands fail
with confusing errors. Fix it:

```bash
npm uninstall -g @google/clasp
npm install -g @google/clasp
```

---

## Step 3 — Turn on the Apps Script API (you do this, in a browser)

This is a one-time switch on your Google account. Without it, `clasp` gets a
403 and the error message does not say why.

1. Go to **https://script.google.com/home/usersettings**
2. Sign in with the Google account you want this notebook to live in.
   **Pick this account carefully — the Sheet, the app and all your data live
   here forever.** A personal `@gmail.com` account is right. A school-issued
   account is wrong: the school admin can read it, and you lose it at
   graduation.
3. Find **Google Apps Script API**
4. Flip the toggle to **On**

---

## Step 4 — Log in (you do this)

```bash
clasp login
```

What happens:

1. A browser tab opens on a Google sign-in page.
2. Pick the **same account** from Step 3.
3. A consent screen lists what clasp wants: manage your Apps Script projects,
   see your Drive. **Read it.** Click **Continue / Allow**.
4. The terminal prints `Authorization successful.`

Your token is now in `~/.clasprc.json`. That file is a password in disguise.
Never paste it anywhere, never commit it, never send it to anyone — including
me. It is already in `.gitignore`.

Check it worked:

```bash
clasp show-authorized-user
```

To sign out later: `clasp logout`.

---

## Step 5 — Create the Sheet and its bound script

**Decided: Option B.** You make the Sheet, clasp clones it. (Option A is kept
at the bottom as a fallback only.)

1. Go to **https://sheets.new** — a blank Google Sheet opens.
2. Click the title **"Untitled spreadsheet"** and rename it to
   **`Business Notebook`**.
3. Menu: **Extensions -> Apps Script**. A new tab opens. This script is now
   *bound* to that Sheet — it lives inside the Sheet file, not next to it.
4. Rename that project: click **"Untitled project"** at the top, type
   **`Business Notebook`**, click Rename.
5. Click the **gear icon (Project Settings)** in the left sidebar.
6. Under **IDs**, find **Script ID** and click **Copy**.
7. In your terminal, from the repo folder:

```bash
cd path/to/this/repo
clasp clone-script PASTE_SCRIPT_ID_HERE --rootDir src
```

---

## Step 6 — Put back the repo's files

Both options download Google's default files into `src/` and **overwrite the
manifest this repo already has**. Undo that:

```bash
git status
git checkout -- src/appsscript.json
rm -f src/Code.js          # Google's empty stub. Phase 1 writes the real one.
```

`git status` should now show only one new untracked file: `.clasp.json`
(which is gitignored, so it will not appear — that is correct).

Confirm `.clasp.json` looks right:

```bash
cat .clasp.json
```

It should contain your `scriptId` and `"rootDir": "src"`.

---

## Step 7 — Prove the whole chain works

```bash
clasp show-file-status
```

Should list exactly two files: `src/appsscript.json` and `src/Ping.js`.
If it lists `CLAUDE.md` or anything from `docs/`, stop and tell me.

```bash
clasp push
```

Then:

```bash
clasp open-script
```

In the Apps Script editor:
1. Pick **`ping`** from the function dropdown at the top.
2. Click **Run**.
3. First run only: an authorization prompt appears. Click **Review
   permissions**, pick your account, and allow. You may see **"Google hasn't
   verified this app"** — that is normal for a script you wrote yourself.
   Click **Advanced -> Go to Business Notebook (unsafe)**. It is your own code.
4. The **Execution log** at the bottom should print:
   `Connected to: "Business Notebook" | timezone: America/Chicago | tabs: 1`

If you see that line, setup is done. Laptop -> git -> clasp -> Google -> Sheet
all work.

---

## If something breaks

| Error | Cause | Fix |
|---|---|---|
| `User has not enabled the Apps Script API` | Step 3 skipped | Do Step 3, wait 60s, retry |
| `Could not read API credentials` | Not logged in | `clasp login` |
| `Project file (.clasp.json) already exists` | Ran create twice | `rm .clasp.json`, redo Step 5 |
| `clasp: command not found` | npm global bin not on PATH | `npm config get prefix`, add its `bin` folder to PATH |
| Pushed files include docs | `.claspignore` or `rootDir` wrong | `cat .clasp.json` — `rootDir` must be `src` |
| Wrong Google account | Logged in as school account | `clasp logout`, then `clasp login` |

---

## Daily loop from here on

```bash
# edit files in src/ on your laptop
clasp push          # send to Google
git add -A && git commit -m "what changed"
```

Never the other way around. Editing in the web editor then pushing will
silently delete your web edits.

---

## Fallback only — Option A (not chosen)

If Step 5 goes badly wrong, this makes the Sheet and the script in one command:

```bash
clasp create-script --type sheets --title "Business Notebook" --rootDir src
```

The new Sheet lands in the root of My Drive. Find it with `clasp open-container`.
Then continue from Step 6 as normal.
