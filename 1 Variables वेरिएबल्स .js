//  1. var (पुराना तरीका) 
var name = "राहुल";
var age = 25;

//  समस्याएं:
//पूरे function में access हो जाता है
//Redeclare हो सकता है
//Confusing होता है

//  2. let (नया और बेहतर)
let city = "दिल्ली";
let score2 = 100;

//फायदे:
//Block scope में काम करता है
//Value change कर सकते हैं
//Redeclare नहीं हो सकता

//  3. const (Constant - स्थिर)
const country = "भारत";
const pi = 3.14;

//खासियत:
//Value change नहीं हो सकती
//Declare करते समय value देनी जरूरी होती है


//Practical Examples:
//Shopping Cart App:
// const - जो change नहीं होगा

const shopName = "मेरी दुकान";
const taxRate = 0.18;

// let - जो change हो सकता है
let totalAmount = 0;
let itemCount = 0;

// Items add करते समय
let productName = "Mobile";
let price = 15000;
totalAmount = totalAmount + price;
itemCount = itemCount + 1;

//Gaming Example:
// const - Game की settings
const maxLevel = 50;
const playerName = "गेमर123";

// let - जो बदलता रहता है
let currentLevel = 1;
let health = 100;
let score = 0;

// Game play करते समय
health = health - 10;  // Damage लेने पर
score = score + 50;    // Points मिलने पर

//कब कौन सा Use करें:

//const का इस्तेमाल करो जब:
const schoolName = "ABC स्कूल";
const myBirthYear = 1998;
const colors = ["लाल", "नीला", "हरा"];

//let का इस्तेमाल करो जब:
let currentAge = 25;           // Age बढ़ता रहेगा
let bankBalance = 50000;       // Balance change होगा
let weatherToday = "धूप";      // Weather change होगा

//var को avoid करो (पुराना है)
//Real Examples:

//WhatsApp जैसी App:
// User की info - const
const userId = "user123";
const phoneNumber = "9876543210";

// Messages - let (बदलता रहता है)
let messageCount = 0;
let lastSeen = "अभी";
let onlineStatus = true;

//YouTube जैसी App
// Video की info - const
const videoTitle = "JavaScript Tutorial";
const channelName = "टेक गुरु";

// Views और likes - let
let viewCount = 1000;
let likeCount = 50;
let dislikeCount = 2;

// User action पर change
likeCount = likeCount + 1;  // Like button दबाने पर

//Error Examples:
// ❌ गलत - const को change नहीं कर सकते
const name = "राम";
name = "श्याम";  // Error आएगा!

// ✅ सही - let को change कर सकते हैं
let name = "राम";
name = "श्याम";  // ठीक है!

//सिंपल Rule:

//const = जो कभी change नहीं होगा
//let = जो change हो सकता है
//var = भूल जाओ इसे!