let welcomeMessage = document.getElementById('welcomeMessage')
let hello = ""

welcomeMessage.innerHTML = hello

if (hour < 18) {
    hello = "Welcome Enjoy Your Day"
} else {
    hello = "Welcome Enjoy Your Evening"
}