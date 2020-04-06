import{
    createUserInfosCard
} from './userInfos.js';

const createLogin = () => {

    const loginOption = document.createElement('select');
    loginOption.innerText = 'Choose Teacher or Student View'
    const teacherChoice = document.createElement('option');
    teacherChoice.setAttribute('value', 'Teacher');
    teacherChoice.innerText = 'Teacher';
    const studentChoice = document.createElement('option');
    studentChoice.setAttribute('value', 'Student');
    studentChoice.innerText = 'Student';
    loginOption.appendChild(teacherChoice);
    loginOption.appendChild(studentChoice);

    const loginWrapper = document.createElement('section');

    const username = document.createElement('p');
    username.innerText = 'User Name';
    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.classList.add('user-name');
    loginWrapper.appendChild(username);
    loginWrapper.appendChild(usernameInput);

    const password = document.createElement('p');
    password.innerText = 'Password';
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'text');
    passwordInput.classList.add('user-password');
    loginWrapper.appendChild(password);
    loginWrapper.appendChild(passwordInput);

    const chooseData = () => {
        const user = {
            "username": usernameInput.value, "password": passwordInput.value
        }
        let chosenData = loginOption.value;
        let endpoint = "";
        if (chosenData == "Teacher"){
            endpoint = "http://localhost:8080/login/teacher";
        } else if (chosenData == "Student"){
            endpoint = "http://localhost:8080/login/student";
        }
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
            , body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(JSONresponse => createUserInfosCard(JSONresponse))
    }

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('submit-btn');
    const loginBtn = document.createElement('button');
    loginBtn.innerText = 'Submit';
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        chooseData();
    });
    loginWrapper.appendChild(loginOption);
    btnWrapper.appendChild(loginBtn);
    loginWrapper.appendChild(btnWrapper);

    return loginWrapper;
}

export {
    createLogin
}