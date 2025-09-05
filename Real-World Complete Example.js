//Real-World Complete Example
//वास्तविक दुनिया का संपूर्ण उत्थान
// Instagram Post Management System
const appName = "Instagram Clone";
const version = "1.0.0";
const maxPostLength = 2200;

let currentUser = {
    userId: Symbol("user123"),
    username: "tech_guru_india",
    fullName: "टेक गुरु",
    email: "techguru@gmail.com", 
    isVerified: true,
    followers: 15000,
    following: 500,
    postsCount: 0,
    bio: "Technology enthusiast 🚀\nJavaScript tutorials 💻",
    profilePicture: null,
    lastActive: undefined
};

let userPosts = [
    {
        postId: 1001n,
        caption: "JavaScript सीखने का सबसे आसान तरीका! 📚✨",
        imageUrl: "js-tutorial.jpg",
        likesCount: 250,
        commentsCount: 45,
        isLiked: false,
        timestamp: "2024-01-15",
        hashtags: ["#JavaScript", "#Programming", "#Hindi"],
        location: "भोपाल, मध्यप्रदेश"
    },
    {
        postId: 1002n, 
        caption: "Code करते समय ये mistakes avoid करो! ⚠️",
        imageUrl: "common-mistakes.jpg",
        likesCount: 180,
        commentsCount: 32,
        isLiked: true,
        timestamp: "2024-01-10",
        hashtags: ["#CodingTips", "#WebDev"],
        location: null
    }
];

// Post interaction functions
function likePost(postId) {
    let post = userPosts.find(p => p.postId === postId);
    if (post && !post.isLiked) {
        post.likesCount++;
        post.isLiked = true;
        console.log(`Post ${postId} को like किया गया! Total likes: ${post.likesCount}`);
    }
}

function addComment(postId, comment) {
    let post = userPosts.find(p => p.postId === postId);
    if (post && typeof comment === "string" && comment.length > 0) {
        post.commentsCount++;
        console.log(`Comment added: "${comment}"`);
    }
}

// Usage
likePost(1001n);                    // BigInt का use
addComment(1002n, "बहुत उपयोगी जानकारी है!");

console.log(`User: ${currentUser.fullName}`);
console.log(`Posts: ${userPosts.length}`);
console.log(`App: ${appName} v${version}`);

//Common Mistakes और Best Practices
// सामान्य गलतियाँ और सर्वोत्तम अभ्यास
  //Common Mistakes:
  // 1. var का use करना
var x = 10; // Avoid करो

// 2. Type confusion
let number = "25";
let result = number + 5; // "255" होगा, 30 नहीं!

// 3. null vs undefined confusion  
let a = null;
let b = undefined;
console.log(a == b);  // true (confusing!)

// 4. Array type checking
let arr = [];
console.log(typeof arr); // "object" (misleading!)

// 5. BigInt के साथ normal number operation
let big = 10n;
let normal = 5;
// console.log(big + normal); // Error!

//Best Practices:
// 1. const का use करो जब value change नहीं होती
const PI = 3.14159;
const API_URL = "https://api.example.com";

// 2. let का use करो जब value change होती है
let counter = 0;
let userName = "";

// 3. Descriptive names use करो
let userAge = 25;           // Good
let c = 25;                 // Bad

// 4. Type checking properly करो
Array.isArray([]);          // true
typeof null === "object";  // true (but null है)
null === null;             // true

// 5. Template literals use करो
let name = "राम";
let greeting = `नमस्ते ${name}!`; // Modern way
let oldWay = "नमस्ते " + name + "!"; // Old way