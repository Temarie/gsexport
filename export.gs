// spreadsheet with data
var sheetId = '#'; // paste gsheet id here

function getLocaleData() {
  var ss = SpreadsheetApp.openById(sheetId);
  var sheets = ss.getSheets();
  
  var sheet = sheets[0];
  var lastColumn = sheet.getLastColumn(),
      lastRow = sheet.getLastRow();
  
  var list = sheet.getSheetValues(1, 1, lastRow, lastColumn);
  
  var listJSON = JSON.stringify(list);
  return ContentService.createTextOutput(listJSON)
       .setMimeType(ContentService.MimeType.JSON);
}

// public
function doGet(e) {
  return getLocaleData();
}
