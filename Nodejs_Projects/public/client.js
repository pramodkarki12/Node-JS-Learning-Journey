const socket = io();

let name;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message-area');


do {
    name = prompt("Please enter your name : ")
} while(!name);

textarea.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        // console.log(e.target.value);
        sendMessage(e.target.value)
    }    
});

function sendMessage(msg) {
    let msgObj = {
        user : name, 
        message : msg.trim()
    }

    // append
    appendMessage(msgObj, 'outgoing');
    textarea.value = '';
    scrollToBottom();

    // send to the server
    socket.emit('message', msgObj);
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    let className = type;

    mainDiv.classList.add(className, 'message');

    let markup = ` 
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `

    mainDiv.innerHTML = markup;

    messageArea.appendChild(mainDiv);
}

// Receive the message from the server
socket.on('sendMSGtoOtherClients', (msg) => {
    // console.log(msg);
    appendMessage(msg, 'incoming');
    scrollToBottom();
});

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}