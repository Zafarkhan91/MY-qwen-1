//Type Checking और Conversion
//जांच और रूपांतरण तैप करें
 //typeof Operator ऑपरेटर का प्रकार जांचने के लिए
 // सभी types check करना
console.log(typeof "Hello");          // "string"
console.log(typeof 42);              // "number"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"  
console.log(typeof null);            // "object" (JavaScript की bug!)
console.log(typeof Symbol("id"));    // "symbol"
console.log(typeof 123n);           // "bigint"
console.log(typeof {name: "Ram"});   // "object"
console.log(typeof [1, 2, 3]);      // "object" (Array भी object है)
console.log(typeof function(){});    // "function"


//Type Conversion रूपांतरण टाइप करें
// String to Number
let strNum = "25";
let num1 = Number(strNum);          // 25
let num2 = parseInt(strNum);        // 25  
let num3 = parseFloat("25.99");     // 25.99
let num4 = +strNum;                 // 25 (Unary plus)

// Number to String
let number = 42;
let str1 = String(number);          // "42"
let str2 = number.toString();       // "42"
let str3 = number + "";             // "42" (Concatenation)

// Boolean Conversion
console.log(Boolean(1));            // true
console.log(Boolean(0));            // false
console.log(Boolean(""));           // false (Empty string)
console.log(Boolean("Hello"));      // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean([]));           // true (Empty array)
console.log(Boolean({}));           // true (Empty object)

// Automatic Type Conversion (Coercion)
console.log("5" + 3);              // "53" (String concatenation)
console.log("5" - 3);              // 2 (Number subtraction)
console.log("5" * 3);              // 15 (Number multiplication)
console.log("5" / 2);              // 2.5 (Number division)
console.log(5 + true);             // 6 (true is 1)
console.log(5 + false);            // 5 (false is 0)
console.log(5 + null);             // 5 (null is 0)
console.log(5 + undefined);        // NaN (undefined is NaN)    