/*1. Alert() - सूचना देना
क्या है Alert:

User को कोई message दिखाने के लिए use होता है
सिर्फ "OK" button होता है
Page का execution रुक जाता है जब तक user OK न दबाए*/

//Basic Syntax:
alert("Your message");

//सभी तरीके:

// Simple message
alert("नमस्ते!");

// Variable के साथ
let name = "राम";
alert("Welcome " + name);

// Template literal के साथ
let score = 95;
alert(`आपका score: ${score}%`);

// Number के साथ
let price = 1500;
alert("Total amount: ₹" + price);

// Multiple lines
alert("Line 1\nLine 2\nLine 3");

//Real Examples:

// E-commerce
let orderNumber = "ORD123456";
alert(`Order ${orderNumber} placed successfully!`);

// Gaming
let level = 5;
alert(`Congratulations! Level ${level} completed!`);

// Banking
let balance = 50000;
alert(`Your account balance: ₹${balance}`);

// Form submission
alert("Form submitted successfully!\nThank you for your feedback.");

// Error messages
alert("Error: Please fill all required fields!");

// Success messages
alert("File uploaded successfully!");

/*Important Points:
हमेशा undefined return करता है
Page को block कर देता है
Styling नहीं कर सकते
सभी browsers में काम करता है*/
//Note: Alert() का use बहुत कम होता है क्योंकि यह user experience को block कर देता है। इसके बजाय, modern web apps में custom modals या notifications use होते हैं।


//Best Practices:करें:
// Clear और specific messages
alert("Order placed successfully! Order ID: 12345");

// Input validation हमेशा करें
let age = prompt("Age:");
if (age !== null && Number(age) > 0) {
    // Valid input
}

// Default values दें
let name1 = prompt("Name:", "Guest User");

// Meaningful variable names
let confirmDelete = confirm("Delete this file?");

//न करें:

// बार-बार alerts न करें
for(let i = 0; i < 10; i++) {
    alert("Message " + i); // Annoying!
}

// बहुत लंबे messages न दें
alert("Very very very long message that goes on and on...");

// Validation skip न करें
let input = prompt("Number:");
let result = input * 2; // Error if input is not number!