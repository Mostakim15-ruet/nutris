# 🥜 NUTRIs — Complete Setup Guide

## ফাইল সমূহ
- `index.html` → Landing Page (Customer দেখবে)
- `admin.html` → Admin Dashboard (শুধু আপনি দেখবেন)
- `google-apps-script.js` → Google Sheet Backend

---

## STEP 1: GitHub এ Deploy করুন

1. [github.com](https://github.com) এ account খুলুন
2. **New Repository** → নাম দিন: `nutris`
3. **Public** সিলেক্ট করুন
4. `index.html` ও `admin.html` আপলোড করুন
5. **Settings → Pages → Branch: main → Save**
6. আপনার site হবে: `https://yourusername.github.io/nutris`

---

## STEP 2: Google Sheet Setup

1. [sheets.google.com](https://sheets.google.com) এ নতুন Sheet খুলুন
2. নাম দিন: **NUTRIs Orders**
3. URL থেকে Sheet ID কপি করুন:
   `https://docs.google.com/spreadsheets/d/**THIS_PART**/edit`

---

## STEP 3: Google Apps Script

1. Sheet এ যান → **Extensions → Apps Script**
2. `google-apps-script.js` এর সব code paste করুন
3. `SPREADSHEET_ID` এর জায়গায় আপনার Sheet ID দিন
4. **Deploy → New Deployment → Web App**
5. Execute as: **Me**
6. Who has access: **Anyone**
7. Deploy করুন → URL কপি করুন

---

## STEP 4: URL বসান

`index.html` এ খুঁজুন:
```
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```
সেখানে Apps Script URL বসান।

Admin Dashboard এ: **সেটিংস** পেজে URL বসান।

---

## STEP 5: Payment Info আপডেট করুন

`index.html` এ খুঁজুন:
```
bKash নম্বর: 01XXXXXXXXX
City Bank — A/C: XXXXXXXXXXXX
Dutch Bangla Bank — A/C: XXXXXXXXXXXX
```
আপনার আসল নম্বর বসান।

---

## Admin Dashboard Access

- URL: `https://yourusername.github.io/nutris/admin.html`
- Default Username: `admin`
- Default Password: `nutris2024`
- প্রথমে লগইন করে পাসওয়ার্ড পরিবর্তন করুন!

---

## Custom Domain (Optional)

নিজের domain (nutris.com.bd) থাকলে:
1. GitHub Pages Settings → Custom Domain
2. Domain provider এ CNAME record যোগ করুন

---

## সমস্যা হলে যোগাযোগ করুন 📞
