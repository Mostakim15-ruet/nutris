// =====================================================
// NUTRIs — Google Apps Script (Backend)
// এই code টি Google Apps Script এ paste করুন
// =====================================================

const SHEET_NAME = 'Orders';
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // Sheet এর URL থেকে নিন

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    // প্রথমবার header যোগ করুন
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Order ID', 'নাম', 'মোবাইল', 'ঠিকানা',
        'প্রোডাক্ট', 'মূল্য (৳)', 'পেমেন্ট',
        'স্ট্যাটাস', 'সময়'
      ]);
    }

    sheet.appendRow([
      data.orderId,
      data.name,
      data.phone,
      data.address,
      data.product,
      data.price,
      data.payment,
      'new',
      data.timestamp || new Date().toLocaleString('bn-BD')
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, orderId: data.orderId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const action = e.parameter.action;

  if (action === 'getOrders') {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    const rows = sheet.getDataRange().getValues();
    const headers = rows[0];
    const orders = rows.slice(1).map(row => ({
      orderId: row[0],
      name: row[1],
      phone: row[2],
      address: row[3],
      product: row[4],
      price: row[5],
      payment: row[6],
      status: row[7],
      timestamp: row[8]
    }));
    return ContentService
      .createTextOutput(JSON.stringify({ orders }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'NUTRIs API running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
