/*क्या है Confirm:

User से Yes/No का जवाब मांगने के लिए
OK button = true return करता है
Cancel button = false return करता है*/

//Basic Syntax:
let result1 = confirm("Your question?");

//सभी तरीके:
// Simple confirmation
let result = confirm("Are you sure?");
console.log(result); // true या false

// With if-else
let logout = confirm("Do you want to logout?");
if (logout) {
    alert("Logged out successfully!");
} else {
    alert("Logout cancelled.");
}

// Delete confirmation
let deleteItem = confirm("Delete this item permanently?");
if (deleteItem) {
    // Delete का code
    console.log("Item deleted");
}

// Multiple confirmations
let step1 = confirm("Step 1: Ready to proceed?");
if (step1) {
    let step2 = confirm("Step 2: Final confirmation?");
    if (step2) {
        alert("Process completed!");
    }
}


//Real Examples:

// WhatsApp delete
function deleteMessage() {
    let confirm1 = confirm("Delete this message?");
    if (confirm1) {
        let confirm2 = confirm("Delete for everyone?");
        if (confirm2) {
            alert("Message deleted for everyone!");
        } else {
            alert("Message deleted for you only!");
        }
    }
}

// Instagram post delete
function deletePost() {
    let confirmDelete = confirm("Delete this post permanently?");
    if (confirmDelete) {
        alert("Post deleted successfully!");
        // Actual delete code here
    }
}

// Browser close confirmation
window.onbeforeunload = function() {
    return confirm("Are you sure you want to leave?");
};

// Shopping cart clear
function clearCart() {
    let items = 5;
    let confirmClear = confirm(`Clear all ${items} items from cart?`);
    if (confirmClear) {
        alert("Cart cleared successfully!");
    }
}

// Account deletion
function deleteAccount() {
    let confirm1 = confirm("⚠️ Delete account permanently?");
    if (confirm1) {
        let confirm2 = confirm("🚨 This cannot be undone! Sure?");
        if (confirm2) {
            alert("Account deleted!");
        }
    }
}

/*Return Values:

OK button दबाने पर = true
Cancel button दबाने पर = false
ESC key दबाने पर = false*/