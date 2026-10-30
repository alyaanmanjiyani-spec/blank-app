# Ladders chart (Google Apps Script)

A live "price ladder" chart for the **Ladders** tab of the Business Tracker sheet.
It reads game rows 11–15 (all math stays in the sheet's formulas) and draws
each game as a column: buy zone, sell range, a whisker from floor to ceiling,
dashed ceiling/floor ticks, and a dot for the current listing.

## Install

1. Open the spreadsheet, then **Extensions → Apps Script**.
2. Replace everything in `Code.gs` with this folder's `Code.gs`.
3. Click **+ → HTML**, name it `Chart` (no `.html`), and paste in `Chart.html`.
4. Click **Save**, then reload the spreadsheet tab.
5. Use the new **Ladders → Show chart** menu. The first time, Google asks you to
   authorize the script. Because you pasted it in, you are the "developer", so
   Google shows "Google hasn't verified this app": click **Advanced → Go to
   (project name) (unsafe) → Allow**. The `@OnlyCurrentDoc` line at the top of
   `Code.gs` limits the permission to this one spreadsheet.

The chart refreshes every 15 seconds while open, or press **Refresh**.
