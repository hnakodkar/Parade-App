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
        const teacherNamewrapper = document.createElement('div');
        const teacherName = document.createElement('h3');
        teacherNamewrapper.appendChild(teacherName);

        const teachers = [{
                teacherName: 'Teacher 1',
                code: 'Teacher 1'
            }, {
                teacherName: 'Teacher 2',
                code: 'Teacher 2'
            },
            {
                teacherName: 'Teacher 3',
                code: 'Teacher 3'
            }
        ];
        const selctTeacherwrapper = document.createElement('div');
        const teacherLabel = document.createElement('p');
        teacherLabel.innerText = 'Select the Teacher';
        const teacherInput = document.createElement('select');

        for (let i = 0; i < teachers.length; i++) {
            const optionElement = document.createElement('option');

            optionElement.setAttribute('value', teachers[i].code);
            optionElement.innerText = teachers[i].teacherName;
            teacherInput.appendChild(optionElement);
        }

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

        sendingBtnWrapper.appendChild(submitBtn);
        inputWrapper.appendChild(msgInput);
        chatFooter.appendChild(inputWrapper);
        chatFooter.appendChild(sendingBtnWrapper);
        chatViewWrapper.appendChild(chatHeader);
        chatViewWrapper.appendChild(chatBody);
        chatViewWrapper.appendChild(chatFooter);


        teacherInput.addEventListener('change', (e) => {
            teacherName.innerText = e.target.value;

        });





        return chatViewWrapper;

    }


    export {
        createChatView
    }