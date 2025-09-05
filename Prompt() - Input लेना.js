/*क्या है Prompt:

User से input मांगने के लिए use होता है
Text field होता है typing के लिए
String return करता है या null (cancel पर)*/

//Basic Syntax:
let userInput = prompt("Your question", "Default value");

//सभी तरीके:
// Simple input
let name = prompt("आपका नाम?");
console.log(name); // User का input

// With default value
let age = prompt("आपकी उम्र?", "25");
console.log(age); // "25" या user input

// Number input
let score = prompt("Score enter करें:");
let numericScore = Number(score); // String को number बनाना

// Email input with validation
let email = prompt("Email address:");
if (email && email.includes("@")) {
    alert("Valid email!");
} else {
    alert("Invalid email!");
}

// Password input (limitation: visible होता है)
let password = prompt("Password:");
if (password && password.length >= 8) {
    alert("Password accepted!");
}

//Real Examples:
// User registration
function registerUser() {
    let firstName = prompt("First name:");
    let lastName = prompt("Last name:");
    let phone = prompt("Phone number:", "+91");
    
    if (firstName && lastName && phone) {
        alert(`Welcome ${firstName} ${lastName}!\nPhone: ${phone}`);
    } else {
        alert("All fields are required!");
    }
}

// Quiz game
function playQuiz() {
    let playerName = prompt("Player name:", "Player1");
    let answer1 = prompt("Capital of India?");
    let answer2 = prompt("2 + 2 = ?");
    
    let score = 0;
    if (answer1 && answer1.toLowerCase() === "delhi") score += 10;
    if (answer2 === "4") score += 10;
    
    alert(`${playerName}, your score: ${score}/20`);
}

// Shopping calculator
function calculateBill() {
    let customerName = prompt("Customer name:");
    let totalBill = 0;
    let itemCount = 0;
    
    while (true) {
        let itemPrice = prompt(`Item ${itemCount + 1} price? (0 to finish):`);
        let price = Number(itemPrice);
        
        if (price === 0) break;
        if (price > 0) {
            totalBill += price;
            itemCount++;
        }
    }
    
    alert(`${customerName}'s Bill:\nItems: ${itemCount}\nTotal: ₹${totalBill}`);
}

// ATM simulation
function atmWithdraw() {
    let pin = prompt("Enter 4-digit PIN:");
    
    if (pin === "1234") {
        let amount = prompt("Withdrawal amount:");
        let withdrawAmount = Number(amount);
        
        if (withdrawAmount > 0 && withdrawAmount <= 50000) {
            alert(`₹${withdrawAmount} withdrawn successfully!`);
        } else {
            alert("Invalid amount!");
        }
    } else {
        alert("Wrong PIN!");
    }
}

// Form builder
function createForm() {
    let fields = [];
    
    while (true) {
        let fieldName = prompt("Field name? ('done' to finish):");
        if (fieldName === "done" || fieldName === null) break;
        
        let fieldType = prompt(`${fieldName} type? (text/email/number):`, "text");
        fields.push({name: fieldName, type: fieldType});
    }
    
    alert(`Form created with ${fields.length} fields!`);
    console.log(fields);
}

//Return Values समझें:

// Different scenarios
let input1 = prompt("Test"); // User types "Hello" → returns "Hello"
let input2 = prompt("Test"); // User clicks OK without typing → returns ""
let input3 = prompt("Test"); // User clicks Cancel → returns null
let input4 = prompt("Test"); // User presses ESC → returns null

// Type checking
let userInput1 = prompt("Enter number:");
console.log(typeof userInput); // Always "string" (even if user types number)

// Conversion needed for numbers
let numString = prompt("Enter age:");
let numValue = Number(numString);
console.log(typeof numValue); // "number"

//Input Validation Examples:

// Age validation
function getValidAge() {
    let age = prompt("Age (18-100):");
    
    if (age === null) return null; // User cancelled
    
    age = Number(age);
    if (age >= 18 && age <= 100) {
        return age;
    } else {
        alert("Invalid age!");
        return getValidAge(); // Ask again
    }
}

// Email validation
function getValidEmail() {
    let email = prompt("Email address:");
    
    if (email === null) return null;
    
    if (email.includes("@") && email.includes(".")) {
        return email;
    } else {
        alert("Invalid email format!");
        return getValidEmail();
    }
}

// Non-empty input
function getNonEmptyInput(question) {
    let input = prompt(question);
    
    if (input === null) return null; // Cancelled
    
    if (input.trim() === "") {
        alert("Field cannot be empty!");
        return getNonEmptyInput(question);
    }
    
    return input;
}