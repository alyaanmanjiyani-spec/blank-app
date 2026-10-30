/**
 * Ladders chart for the "Business Tracker" spreadsheet.
 *
 * Adds a "Ladders" menu with "Show chart", which opens a live chart of the
 * Ladders tab (game rows 11-15). All the math stays in the sheet's formulas;
 * this script only reads the results and hands them to Chart.html to draw.
 */

const LADDERS_SHEET = 'Ladders';
const FIRST_GAME_ROW = 11;
const MAX_GAMES = 5;
const COLUMNS = 12; // A (Game) through L (Flag)

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Ladders')
    .addItem('Show chart', 'showLaddersChart')
    .addToUi();
}

function showLaddersChart() {
  const html = HtmlService.createHtmlOutputFromFile('Chart')
    .setWidth(1100)
    .setHeight(720);
  SpreadsheetApp.getUi().showModelessDialog(html, 'Ladders');
}

/** Called by Chart.html. Returns one object per game row that has a name. */
function getLadderData() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(LADDERS_SHEET);
  if (!sheet) {
    throw new Error('No tab named "' + LADDERS_SHEET + '" was found.');
  }
  const rows = sheet.getRange(FIRST_GAME_ROW, 1, MAX_GAMES, COLUMNS).getValues();
  // Blank or text cells come back as '' — treat anything non-numeric as missing.
  const num = (v) => (typeof v === 'number' ? v : null);

  return rows
    .filter((r) => String(r[0]).trim() !== '')
    .map((r) => ({
      name: String(r[0]),
      version: String(r[1]),
      ceiling: num(r[2]),
      market: num(r[3]),
      floor: num(r[4]),
      listing: num(r[5]),
      target: num(r[6]),
      takeHome: num(r[8]),
      maxBuy: num(r[9]),
      verdict: String(r[10]),
      flag: String(r[11]),
    }));
}
