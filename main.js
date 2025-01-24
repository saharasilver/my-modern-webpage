console.log("Welcome to My Modern Webpage");

function displayText() {
    const input = document.getElementById("textInput").value;
    const output = document.getElementById("outputText");

    output.textContent = input;
    output.style.color = "blue";
}


async function getOpenAIResponse(prompt) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer YOUR_API_KEY`,
            'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
            model: 'text-davinci-003', // You can choose the appropriate model
            prompt: prompt,
            max_tokens: 150,
        }),
    });
    const data = await response.json();
    return data.choices[0].text.trim();
}

async function fetchAIResponse() {
    const userInput = document.getElementById("userInput").value;
    const responseText = await getOpenAIResponse(userInput);
    const outputElement = document.getElementById("response");

    outputElement.textContent = responseText;
    outputElement.style.color = "blue";
}


