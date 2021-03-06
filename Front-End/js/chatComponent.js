import {
    currentUser
}
from "./app.js";
import {
    translateMessage,
    translateSentMessage
} from "./translateComponent.js"

const createChatView = (color) => {
    const chatViewWrapper = document.createElement('section');
    chatViewWrapper.classList.add('chat');
    chatViewWrapper.classList.add('view');
    const chatHeader = document.createElement('div');
    chatHeader.classList.add('chat-header');
    chatHeader.classList.add('view-header');
    chatHeader.style.backgroundColor = color;
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

    fetch(currentUser.parentPhone ? 'http://localhost:8080/teachers' : 'http://localhost:8080/students')
        .then(response => response.json())
        .then(res => {
            users = res;
            renderConversation(users[0].id);


            for (let i = 0; i < users.length; i++) {
                console.log(users[i].id);
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
    chatFooter.style.borderTop = `2px solid ${color}`;
    const inputWrapper = document.createElement('div');
    const msgInput = document.createElement('input');
    msgInput.setAttribute('type', 'text');
    const sendingBtnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.style.backgroundColor = color;
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
                "content": ["|" + currentUser.username + " " + new Date().toLocaleTimeString() + " --" + msgInput.value]
            } : {
                "teacher": {
                    "id": currentUser.id
                },
                "student": {
                    "id": teacherInput.value
                },
                "content": ["|" + currentUser.username + " " + new Date().toLocaleTimeString() + " --" + msgInput.value]
            };
            if (currentUser.parentPhone) {
                fetch('http://localhost:8080/conversations')
                    .then(response => response.json())
                    .then(conversations => translateSentMessage(conversations, msgBody, teacherInput.value, currentUser.language));
                return;
            }
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
    console.log(newMessage);
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
            /* console.log('log' + JSONresponse.teacher.id);*/
            renderConversation(currentUser.parentPhone ? JSONresponse.teacher.id : JSONresponse.student.id);
        })
        .catch(err => console.error(err));
}

const renderConversation = (teacherInput) => {
    console.log(parseInt(teacherInput));
    fetch('http://localhost:8080/conversations')
        .then(response => response.json())
        .then(conversations => {
            for (let conversation of conversations) {
                if (conversation.teacher.id == teacherInput && conversation.student.id == currentUser.id) {
                    translateMessage('en', conversation.student.language, conversation.content);

                }
                if (conversation.teacher.id == currentUser.id && conversation.student.id == teacherInput) {
                    translateMessage(conversation.student.language, 'en', conversation.content);

                }
            }
        })
};


const displayTranslatedMessages = (content) => {
    const splitTranslation = content.split("|");
    splitTranslation.forEach(message => document.querySelector('.msgList').appendChild(messageContent(message)));
}


export {
    createChatView,
    displayTranslatedMessages,
    messagePostOrPatch
};