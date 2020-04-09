import{currentUser}
from "./app.js";
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

    const messageContent = (msg) => {
        const msgWrapper = document.createElement('li');
        msgWrapper.classList.add('content-body');
        const uname = document.createElement('h4');
        uname.innerText = 'User Name';
        const message = document.createElement('div');
        message.classList.add('msgText');
        message.innerText = msg;
        const timeStamp = document.createElement('div');
        timeStamp.innerText = new Date().toLocaleTimeString();
        msgWrapper.appendChild(uname);
        msgWrapper.appendChild(message);
        msgWrapper.appendChild(timeStamp);
        return msgWrapper;
    };

    const sendMessage = () => {
        if (msgInput.value != '') {
        
            const msgBody = {
                "teacher": {
                    "id": teacherInput.value
                },
                "student": {
                    "id": currentUser.id
                },
                "content": [msgInput.value]

            }
            fetch('http://localhost:8080/conversations', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(msgBody)
            })
                .then(response => response.json())
                .then(JSONresponse => {
                    msgList.appendChild(messageContent(JSONresponse.content));
                })
                .catch(err => console.error(err));

        }
    };

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendMessage();
    });

    sendingBtnWrapper.appendChild(submitBtn);
    inputWrapper.appendChild(msgInput);
    chatFooter.appendChild(inputWrapper);
    chatFooter.appendChild(sendingBtnWrapper);
    chatViewWrapper.appendChild(chatHeader);
    chatViewWrapper.appendChild(chatBody);
    chatViewWrapper.appendChild(chatFooter);

    teacherInput.addEventListener('change', (e) => {
        teacherName.innerText = e.target.options[teacherInput.selectedIndex].text;
    });

    return chatViewWrapper;
};

export {
    createChatView
};