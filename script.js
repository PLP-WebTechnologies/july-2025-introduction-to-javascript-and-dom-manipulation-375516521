// Part 1: Age check
function checkAge() {
    let age = prompt("Enter your age:");
    if (age === null || age.trim() === "") {
        document.getElementById("result").innerText = "❌ Please enter a valid age!";
        return;
    }
    age = parseInt(age);
    if (isNaN(age)) {
        document.getElementById("result").innerText = "⚠️ Not a number!";
    } else if (age >= 18) {
        document.getElementById("result").innerText = "✅ You are an adult!";
    } else {
        document.getElementById("result").innerText = "👶 You are underage!";
    }
}

// Part 2: Calculate total
function calculateTotal() {
    let price = parseFloat(prompt("Enter item price:"));
    let qty = parseInt(prompt("Enter quantity:"));

    if (isNaN(price) || isNaN(qty)) {
        document.getElementById("total").innerText = "⚠️ Invalid input!";
        return;
    }

    let total = price * qty;
    document.getElementById("total").innerText = `💰 Total = $${total.toFixed(2)}`;
}

// Part 3: Countdown
function countdown() {
    let num = 5; // Starting countdown number
    let display = document.getElementById("count");

    let timer = setInterval(() => {
        display.innerText = num;
        num--;
        if (num < 0) {
            clearInterval(timer);
            display.innerText = "🚀 Countdown Complete!";
        }
    }, 1000);
}

// Part 4: DOM Manipulation
function changeColor() {
    let demo = document.getElementById("demo");
    demo.style.color = demo.style.color === "blue" ? "red" : "blue";
}

function toggleVisibility() {
    let demo = document.getElementById("demo");
    demo.style.display = demo.style.display === "none" ? "block" : "none";
}
