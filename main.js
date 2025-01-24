console.log("Welcome to My Modern Webpage");

function displayText() {
    const input = document.getElementById("textInput").value;
    const output = document.getElementById("outputText");

    output.textContent = input;
    output.style.color = "blue";
}


async function getOpenAIResponse(prompt) {
    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer YOUR_API_KEY`,
                'Authorization': `Bearer ssk-proj-Czsntn15PblWV8-hHQ1epkCz3NXEkwBTq4UGzWwx_h5vJOtV9XfC9nskx22-iwWhvxbPh1DbWtT3BlbkFJgLFb9WPHHwS7doCZZqfnJjaRCkFYh4h9S3CGJJg5SnTE2uUzbgxcTyWPRhsALvyWEko2lXqJ0A`,
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 150,
            }),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].text.trim();
    } catch (error) {
        console.error('Error:', error);
        return 'There was an error generating the response.';
    }
}


async function fetchAIResponse() {
    const userInput = document.getElementById("userInput").value;
    const responseText = await getOpenAIResponse(userInput);
    const outputElement = document.getElementById("response");

    outputElement.textContent = responseText;
    outputElement.style.color = "blue";
}


