import {
    currentUser
}
from "./app.js";
import {
    translateMessage
} from "./translateComponent.js"

const createChatView = () => {
    const chatViewWrapper = document.createElement('section');
    chatViewWrapper.classList.add('chat');
    chatViewWrapper.classList.add('view');
    const chatHeader = document.createElement('div');
    chatHeader.classList.add('chat-header');
    chatHeader.classList.add('view-header');
    const chatTitle = document.createElement('h3');
    chatTitle.innerText = 'CHAT';
    chatHeader.appendChild(chatTitle);
    const chatBody = document.createElement('div');
    chatBody.classList.add('chat-body');
    const msgList = document.createElement('ul');
    msgList.classList.add('msgList');
    chatBody.appendChild(msgList);
    const teacherNamewrapper = document.createElement('div');
    const teacherName = document.createElement('h3');
    teacherNamewrapper.appendChild(teacherName);
    let users;
    console.log(currentUser);
    let firstId;
    fetch(currentUser.parentPhone ? 'http://localhost:8080/teachers' : 'http://localhost:8080/students')
        .then(response => response.json())
        .then(res => {
            users = res;
            renderConversation(users[0].id);
            console.log('json response');
            console.log(users[0].id);
            for (let i = 0; i < users.length; i++) {
                const optionElement = document.createElement('option');
                optionElement.setAttribute('value', users[i].id);
                optionElement.innerText = users[i].name;
                teacherInput.appendChild(optionElement);

            }
        })
        .catch(err => console.error(err));

    const selctTeacherwrapper = document.createElement('div');
    const teacherLabel = document.createElement('p');
    teacherLabel.innerText = 'Select the User';
    const teacherInput = document.createElement('select');
    selctTeacherwrapper.appendChild(teacherLabel);
    selctTeacherwrapper.appendChild(teacherInput);
    chatHeader.appendChild(selctTeacherwrapper);
    chatHeader.appendChild(teacherNamewrapper);
    const chatFooter = document.createElement('div');
    chatFooter.classList.add('chat-footer');
    const inputWrapper = document.createElement('div');
    const msgInput = document.createElement('input');
    msgInput.setAttribute('type', 'text');
    const sendingBtnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Send';


    teacherInput.addEventListener('change', (e) => {
        teacherName.innerText = e.target.options[teacherInput.selectedIndex].text;
        while (msgList.firstChild) {
            msgList.removeChild(msgList.firstChild);
        }
        renderConversation(teacherInput.value);
    });

    const sendMessage = () => {
        if (msgInput.value != '') {
            const msgBody = currentUser.parentPhone ? {
                "teacher": {
                    "id": teacherInput.value
                },
                "student": {
                    "id": currentUser.id
                },
                "content": [currentUser.username + " " + new Date().toLocaleTimeString() + " --" + msgInput.value]
            } : {
                "teacher": {
                    "id": currentUser.id
                },
                "student": {
                    "id": teacherInput.value
                },
                "content": [currentUser.username + " " + new Date().toLocaleTimeString() + " --" + msgInput.value]
            };
            fetch('http://localhost:8080/conversations')
                .then(response => response.json())

                .then(conversations => messagePostOrPatch(conversations, msgBody, teacherInput.value));

        } else {
            console.log("you need to enter a message");
        }
    }

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendMessage();
        msgInput.value = '';
    });

    sendingBtnWrapper.appendChild(submitBtn);
    inputWrapper.appendChild(msgInput);
    chatFooter.appendChild(inputWrapper);
    chatFooter.appendChild(sendingBtnWrapper);
    chatViewWrapper.appendChild(chatHeader);
    chatViewWrapper.appendChild(chatBody);
    chatViewWrapper.appendChild(chatFooter);
    renderConversation(teacherInput.value);

    return chatViewWrapper;
}

const messageContent = (msg) => {
    const msgWrapper = document.createElement('li');
    msgWrapper.classList.add('content-body');
    const uname = document.createElement('h4');
    uname.innerText = currentUser.username;
    const message = document.createElement('div');
    message.classList.add('msgText');
    message.innerText = msg;
    const timeStamp = document.createElement('div');
    timeStamp.innerText = new Date().toLocaleTimeString();
    // msgWrapper.appendChild(uname);
    msgWrapper.appendChild(message);
    // msgWrapper.appendChild(timeStamp);
    return msgWrapper;
};

const messagePostOrPatch = (conversations, newMessage, teachInput) => {
    console.log(conversations);
    const chatDisplay = document.querySelector('.msgList');
    for (let conversation of conversations) {

        if ((conversation.teacher.id == teachInput && conversation.student.id == currentUser.id) ||
            (currentUser.id == conversation.teacher.id && conversation.student.id == teachInput)) {
            console.log('PATCH');
            fetch(`http://localhost:8080/conversations/${conversation.id}`, {

                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: newMessage.content

                })
                .then(response => response.json())
                .then(JSONresponse => {
                    while (chatDisplay.firstChild) {
                        chatDisplay.removeChild(chatDisplay.firstChild);
                    }
                    renderConversation(currentUser.parentPhone ? JSONresponse.teacher.id : JSONresponse.student.id);
                }).catch(err => console.error(err));
            return;
        }
    }
    console.log('Post');
    fetch('http://localhost:8080/conversations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
        .then(response => response.json())
        .then(JSONresponse => {
            while (chatDisplay.firstChild) {
                chatDisplay.removeChild(chatDisplay.firstChild);
            }
            renderConversation(currentUser.parentPhone ? JSONresponse.teacher.id : JSONresponse.student.id);
        })
        .catch(err => console.error(err));
}

const renderConversation = (teacherInput) => {
    fetch('http://localhost:8080/conversations')
        .then(response => response.json())
        .then(conversations => {
            for (let conversation of conversations) {
                if (conversation.teacher.id == teacherInput && conversation.student.id == currentUser.id) {
                    conversation.content.forEach((content) => {
                        translateMessage('en', 'fr', content);

                    })
                }
                if (conversation.teacher.id == currentUser.id && conversation.student.id == teacherInput) {
                    conversation.content.forEach((content) => {
                        translateMessage('fr', 'en', content)
                    });
                }
            }
        })
};
const translateConvo = async(content) => { 
    const translated = []; 
    content.forEach( message => 
        translated.push(await translateMessage(message)))};



const displayTranslatedMessages = (content) => {
    document.querySelector('.msgList').appendChild(messageContent(content));
}


export {
    createChatView,
    displayTranslatedMessages
};