// JavaScript to handle chat interaction and communicate with Flask backend

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const messageText = userInput.value.trim();
    
    if (messageText) {
        // Display user message in the chat box
        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.innerText = `You: ${messageText}`;
        chatBox.appendChild(userMessage);
        
        // Clear input field
        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight; // Keep scroll at the bottom
        
        // Send message to Flask backend and get bot response
        fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: messageText })
        })
        
        .then(response => response.json())
        .then(data => {
            const botMessage = document.createElement("div");
            botMessage.className = "message bot";
            botMessage.innerText = `Bot: ${data.response}`;
            chatBox.appendChild(botMessage);
            
            // Scroll to show the latest bot response
            chatBox.scrollTop = chatBox.scrollHeight;
        })
        .catch(error => {
            console.error("Error:", error);
            const errorMessage = document.createElement("div");
            errorMessage.className = "message bot";
            errorMessage.innerText = "Bot: Sorry, I couldn't connect to the server.";
            chatBox.appendChild(errorMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        });
    }
}

// Optional: send message on Enter key press
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});









// // JavaScript to handle chat interaction on the front end

// function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const chatBox = document.getElementById("chat-box");
//     const messageText = userInput.value.trim();

//     if (messageText) {
//         // Display user message
//         const userMessage = document.createElement("div");
//         userMessage.className = "message user";
//         userMessage.innerText = `You: ${messageText}`;
//         chatBox.appendChild(userMessage);

//         // Clear input field
//         userInput.value = "";

//         // Scroll to the bottom of the chat box to show the latest message
//         chatBox.scrollTop = chatBox.scrollHeight;

//         // Simulate a bot response after a short delay
//         setTimeout(() => {
//             const botMessage = document.createElement("div");
//             botMessage.className = "message bot";

//             // Sample bot responses based on user input (can be extended or replaced by backend responses)
//             if (messageText.toLowerCase().includes("hello") || messageText.toLowerCase().includes("hi")) {
//                 botMessage.innerText = "Bot: Hello! How can I assist you today?";
//             } else if (messageText.toLowerCase().includes("your name")) {
//                 botMessage.innerText = "Bot: I am PyBot, your virtual assistant!";
//             } else if (messageText.toLowerCase().includes("how are you")) {
//                 botMessage.innerText = "Bot: I'm just code, but I'm here to help you!";
//             } else if (messageText.toLowerCase().includes("bye")) {
//                 botMessage.innerText = "Bot: Goodbye! Have a great day!";
//             } else {
//                 botMessage.innerText = "Bot: I'm still learning. Could you please rephrase that?";
//             }

//             chatBox.appendChild(botMessage);
//             chatBox.scrollTop = chatBox.scrollHeight; // Keep scroll at the bottom
//         }, 500); // Simulate a short delay for bot response
//     }
// }

// // Optionally, add an event listener to send a message on Enter key press
// document.getElementById("user-input").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         sendMessage();
//     }
// });
