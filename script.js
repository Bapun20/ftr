const directLineToken = 'XGzAUa8nhMc.azxxc_ru36z7K3kTyOHTEQNzynqPTYVT6h9NC87T0MI'; // Replace with your Direct Line token
const botContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const botConnection = new window.WebChat.createDirectLine({
    token: directLineToken
});

window.WebChat.renderWebChat({
    directLine: botConnection,
    userID: 'user',
    username: 'User',
    locale: 'en-US',
}, botContainer);

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        botConnection.postActivity({
            from: { id: 'user', name: 'User' },
            type: 'message',
            text: userMessage
        }).subscribe(() => userInput.value = '');
    }
}
