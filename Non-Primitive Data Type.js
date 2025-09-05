//Object (Complex Data)
// Simple Object
let student = {
    name: "प्रिया",
    age: 22,
    city: "जयपुर",
    isGraduate: true,
    subjects: ["Math", "Science", "English"], // Array inside object
    address: {                               // Nested object
        street: "MG Road",
        pincode: 302001
    }
};

// Access करने के तरीके
console.log(student.name);        // "प्रिया" (Dot notation)
console.log(student["age"]);      // 22 (Bracket notation)
console.log(student.address.street); // "MG Road" (Nested access)

// Properties add/modify करना
student.phone = "9876543210";     // New property add
student.age = 23;                 // Existing property modify
delete student.city;              // Property delete

// Object Methods
let car = {
    brand: "Maruti",
    model: "Swift",
    year: 2022,
    start: function() {
        console.log("Car started!");
    },
    getInfo: function() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};

car.start();                      // "Car started!"
console.log(car.getInfo());       // "Maruti Swift (2022)"

//Array (List of Items)
// Different ways to create arrays
let fruits = ["आम", "सेब", "केला"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["राम", 25, true, null, {name: "test"}];
let emptyArray = [];
let arrayConstructor = new Array(5); // [empty × 5]

// Array Properties and Methods
console.log(fruits.length);       // 3
console.log(fruits[0]);          // "आम" (First element)
console.log(fruits[fruits.length - 1]); // "केला" (Last element)

// Adding elements
fruits.push("अंगूर");            // End में add ["आम", "सेब", "केला", "अंगूर"]
fruits.unshift("संतरा");         // Start में add ["संतरा", "आम", "सेब", "केला", "अंगूर"]

// Removing elements  
let lastFruit = fruits.pop();     // Last element remove और return
let firstFruit = fruits.shift();  // First element remove और return

// Other useful methods
let animals = ["कुत्ता", "बिल्ली", "गाय"];
console.log(animals.includes("कुत्ता")); // true
console.log(animals.indexOf("बिल्ली"));  // 1
console.log(animals.join(" - "));        // "कुत्ता - बिल्ली - गाय"

// Array of Objects (Real example - Students data)
let studentsData = [
    {name: "राम", age: 20, marks: 85},
    {name: "सीता", age: 19, marks: 92},  
    {name: "गीता", age: 21, marks: 78}
];

console.log(studentsData[0].name);    // "राम"
console.log(studentsData.length);     // 3

