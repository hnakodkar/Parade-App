import {
    createHeader
} from './header.js';
import {
    createLogin
} from './login.js';
import {
    createFooter
} from './footer.js';

const anchor = document.querySelector('.anchor');
const footerAnchor = document.querySelector('.footer-anchor');
const headerAnchor = document.querySelector('.header-anchor');

const renderLogin = () => {
    while (anchor.firstChild) {
        anchor.removeChild(anchor.firstChild);
    }
    anchor.appendChild(createLogin());
}

const displayFooter = () => {

    footerAnchor.appendChild(createFooter());
}


const displayHeader = () => {

    headerAnchor.appendChild(createHeader());
}


displayHeader();
displayFooter();

const btn = document.createElement('button');
btn.innerText = 'User Login';
anchor.appendChild(btn);
btn.addEventListener('click', () => {
    renderLogin();
});