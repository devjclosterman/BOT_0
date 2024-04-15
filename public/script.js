document.getElementById('send-button').addEventListener('click', async () => {
    const input = document.getElementById('query-input');
    const query = input.value;
    const response = await fetch('/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => res.json());

    document.getElementById('response').textContent = response.message;
    input.value = ''; // Clear input after sending
})












function sendMessage() {
    let input = document.getElementById('user-input');
    let message = input.value.trim();
    if (message !== '') {
        displayMessage('user', message);
        input.value = ''; //Clear input after sending

        // Simulate a reply from the AI
        setTimeout(function() {
            displayMessage('ai', 'This is a simulated response for: ' + message);
        }, 1000);
    }
}

function displayMessage(sender, message) {
    let chatMessages = document.getElementById('chat-messages');
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}