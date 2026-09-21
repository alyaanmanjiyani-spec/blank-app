/**
 * Ping.js — Phase 0 only.
 *
 * This file exists to prove one thing: code written on your laptop actually
 * reaches Google. Run ping() in the Apps Script editor after your first
 * `clasp push`. If the log shows your Sheet's name, the whole chain works:
 *
 *   your laptop -> git -> clasp push -> Apps Script -> your Sheet
 *
 * Phase 1 replaces this with the real schema code.
 */
function ping() {
  const ss = SpreadsheetApp.getActive();
  const msg =
    'Connected to: "' + ss.getName() + '"' +
    ' | timezone: ' + ss.getSpreadsheetTimeZone() +
    ' | tabs: ' + ss.getSheets().length;
  Logger.log(msg);
  return msg;
}
