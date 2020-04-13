import {
    currentUser
}
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
    // console.log(currentUser);
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
        uname.innerText = currentUser.username;
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
            const msgBody = currentUser.parentPhone ? {
                "teacher": {
                    "id": teacherInput.value
                },
                "student": {
                    "id": currentUser.id
                },
                "content": [msgInput.value]
            } : {
                "teacher": {
                    "id": currentUser.id
                },
                "student": {
                    "id": teacherInput.value
                },
                "content": [msgInput.value]
            };
            fetch('http://localhost:8080/conversations')
                .then(response => response.json())

                .then(conversations => submitMessageFetches(conversations, msgInput.value))

            /*   console.log(conversations);
               if (conversation.teacher.id === teacherInput.value && conversation.student.id === currentUser.id) {
                   patchMessage();*/
            /* } else {
                        fetch('http://localhost:8080/conversations', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(msgBody)
                            })
                            .then(response => response.json())
                            .then(JSONresponse => {
                                console.log(JSONresponse);
                                msgList.appendChild(messageContent(JSONresponse.content));
                            })
                            .catch(err => console.error(err));
                    }
                }).catch(err => console.error(err));*/


            teacherInput.addEventListener('change', (e) => {
                teacherName.innerText = e.target.options[teacherInput.selectedIndex].text;
            });

        } else {
            console.log("you need to enter a message");
        }
    };

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
    return chatViewWrapper;
}

const patchMessage = (id, msgContent) => {

    fetch(`http://localhost:8080/conversations/${id}`, {

            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: msgContent

        })
        .then(response => response.json())
        .then(response => {
            msgList.appendChild(messageContent(response.content));
            console.log(response.content);
        }).catch(err => console.error(err));

};



const submitMessageFetches = (conversations, msgContent) => {
    /* console.log(conversations);*/
    for (let i; i < conversations.length; i++) {

        if (conversation[i].teacher.id === teacherInput.value && conversation[i].student.id === currentUser.id) {
            patchMessage(conversation[i].id, msgContent);
        }
    }

}


export {
    createChatView
};