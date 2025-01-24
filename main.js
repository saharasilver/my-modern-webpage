console.log("Welcome to My Modern Webpage");

function displayText() {
    const input = document.getElementById("textInput").value;
    const output = document.getElementById("outputText");

    output.textContent = input;
    output.style.color = "blue";
}
