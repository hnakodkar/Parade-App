import {
    createHeader
} from './header.js';
import {
    createLogin
} from './login.js';
import {
    createFooter
} from './footer.js';

import {
    createTeacherForm
} from './teacherForm.js';

import {
    createStudentForm
} from './studentForm.js';

import {
    createCourseForm
} from './courseForm.js';

import {
    createUserInfosCard
} from './userInfos.js';

import {
    createAssignment
} from './assignmentForm.js';

import {
    createChatView
} from './chatComponent.js';

import {
    createAssignmentView
} from './assignmentComponent.js';

const anchor = document.querySelector('.anchor');
const footerAnchor = document.querySelector('.footer-anchor');
const headerAnchor = document.querySelector('.header-anchor');
let currentUser;
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

const displayTeacherForm = () => {

    anchor.appendChild(createTeacherForm());
}

const displayStudentForm = () => {

    anchor.appendChild(createStudentForm());
}
const displayCourseForm = () => {

    anchor.appendChild(createCourseForm());
}

const displayAssignmentForm = () => {

    anchor.appendChild(createAssignment());
}

const displayChatView = () => {

    anchor.appendChild(createChatView());
}

const displayAssignmentView = () => {

    anchor.appendChild(createAssignmentView());
}
const renderLoginView = () => {
    displayHeader();
    displayFooter();
    const btn = document.createElement('button');
    btn.innerText = 'User Login';
    anchor.appendChild(btn);
    btn.addEventListener('click', () => {
        renderLogin();
    });
}

const renderTeacherView = () => {

    // displayHeader();
    // displayFooter();
    displayAssignmentView();
   
    displayStudentForm();
}

const displayTeacherInfo = (JSONresponse) => {
    currentUser = JSONresponse;
    renderTeacherView();
     

    // anchor.appendChild(createUserInfosCard(JSONresponse));
    anchor.appendChild(createChatView());

}

const displayStudentInfo = (JSONresponse) =>{
    currentUser = JSONresponse;
    renderStudentView();
}


renderLoginView();

 //displayChatView();

    // displayUserInfos();
/*displayTeacherForm();
displayCourseForm();
displayAssignmentForm();*/

export {
    currentUser,
    displayTeacherInfo,
    displayStudentInfo
}