let welcomeMessage = document.getElementById('welcomeMessage');
let greeting = ""
welcomeMessage.innerHTML = greeting

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}