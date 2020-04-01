const createLogin = () => {

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


    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('submit-btn');
    const loginBtn = document.createElement('button');
    loginBtn.innerText = 'Submit';
    btnWrapper.appendChild(loginBtn);
    loginWrapper.appendChild(btnWrapper);

    return loginWrapper;

}

export {
    createLogin
}