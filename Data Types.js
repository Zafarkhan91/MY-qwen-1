//1. String (Text Data)
// Different ways to create strings
let name1 = "राम";           // Double quotes
let name2 = 'सीता';          // Single quotes
let name3 = `राधे राधे`;      // Backticks

// Template Literals (Backticks का magic)
let firstName = "अमित";
let lastName = "शर्मा";
let fullName = `${firstName} ${lastName}`; // "अमित शर्मा"
let age = 25;
let intro = `मेरा नाम ${fullName} है और मैं ${age} साल का हूं`;

// String Methods
let message = "JavaScript सीखना आसान है";
console.log(message.length);        // Length
console.log(message.toUpperCase()); // Uppercase
console.log(message.toLowerCase()); // Lowercase
console.log(message.includes("JavaScript")); // true

//2. Number (All Numbers)
// Integers (पूर्ण संख्या)
let age2 = 25;
let temperature = -5;
let score = 0;

// Decimals (दशमलव)
let price = 199.99;
let percentage = 85.5;
let pi = 3.14159;

// Special Number Values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN; // Not a Number

// Number Operations
let num1 = 10;
let num2 = 3;
console.log(num1 + num2);  // 13 (Addition)
console.log(num1 - num2);  // 7 (Subtraction)
console.log(num1 * num2);  // 30 (Multiplication)
console.log(num1 / num2);  // 3.333... (Division)
console.log(num1 % num2);  // 1 (Remainder/Modulus)
console.log(num1 ** num2); // 1000 (Power)

// Number Methods
let decimal = 3.14159;
console.log(decimal.toFixed(2));    // "3.14"
console.log(parseInt("25.99"));     // 25
console.log(parseFloat("25.99"));   // 25.99

//3. Boolean (True/False)
let isLoggedIn = true;
let hasPermission = false;
let isAdult = true;
let isPremium = false;

// Boolean Operations
let a = true;
let b = false;
console.log(a && b);  // false (AND)
console.log(a || b);  // true (OR)
console.log(!a);      // false (NOT)

// Real Example - User Authentication
let userEmail = "user@gmail.com";
let userPassword = "123456";
let isEmailValid = userEmail.includes("@");
let isPasswordStrong = userPassword.length >= 8;
let canLogin = isEmailValid && isPasswordStrong; // false

4. //Undefined (Value assign नहीं की गई)
let userName;              // undefined
let userAge;              // undefined
let userCity;             // undefined

console.log(userName);     // undefined
console.log(typeof userName); // "undefined"

// Function parameters भी undefined हो सकते हैं
function greet(name) {
    console.log(name);     // undefined अगर call करते समय parameter नहीं दिया
}
greet(); // undefined print होगा

//5. Null (Intentionally Empty)
let profilePicture = null;    // जानबूझकर empty
let middleName = null;        // कोई middle name नहीं
let spouse = null;           // अभी शादी नहीं हुई

// undefined vs null
let c;                    // undefined (automatically)
let d = null;            // null (intentionally)

console.log(c == d);     // true (loose equality)
console.log(c === d);    // false (strict equality)

//6. Symbol (Unique Identifier)
// हर Symbol unique होता है
let id1 = Symbol("user");
let id2 = Symbol("user");
console.log(id1 === id2);  // false (हमेशा unique)

// Real use case - Object properties में
let user = {
    name: "राम",
    age: 25
};

let uniqueId = Symbol("userId");
user[uniqueId] = "USER_123";

console.log(user); // Symbol property नहीं दिखेगा normally
console.log(user[uniqueId]); // "USER_123"

// Global Symbols
let globalSymbol1 = Symbol.for("app.user");
let globalSymbol2 = Symbol.for("app.user");
console.log(globalSymbol1 === globalSymbol2); // true (same global symbol)

//7. BigInt (Very Large Numbers)
// Normal numbers की limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt बनाने के तरीके
let bigNum1 = 1234567890123456789012345n; // 'n' suffix
let bigNum2 = BigInt("1234567890123456789012345");
let bigNum3 = BigInt(123456789);

// BigInt Operations
let big1 = 123n;
let big2 = 456n;
console.log(big1 + big2);  // 579n
console.log(big1 * big2);  // 56088n

// Normal number के साथ operation नहीं हो सकता
let normalNum = 10;
let bigIntNum = 20n;
// console.log(normalNum + bigIntNum); // Error!
console.log(normalNum + Number(bigIntNum)); // 30 (Convert करके)
console.log(BigInt(normalNum) + bigIntNum); // 30n (Convert करके)

// Real use cases
let cryptocurrencyAmount = 1000000000000000000n; // 1 ETH in Wei
let uniqueTransactionId = 987654321098765432109876n;
let bankAccountBalance = 999999999999999999n;