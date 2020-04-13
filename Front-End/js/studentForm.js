import {
    languagues
} from './translateComponent.js';

const createStudentForm = () => {

    const studentFormWrapper = document.createElement('div');
    studentFormWrapper.classList.add('form');
    const studentFormTitle = document.createElement('h3');
    studentFormTitle.innerText = 'Add Student';


    const nameLabel = document.createElement('p');
    nameLabel.innerText = 'Name';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');

    const parentLabel = document.createElement('p');
    parentLabel.innerText = 'Parent Name';
    const parentInput = document.createElement('input');
    parentInput.setAttribute('type', 'text');


    const schoolIdLabel = document.createElement('p');
    schoolIdLabel.innerText = 'School ID';
    const schoolIdInput = document.createElement('input');
    schoolIdInput.setAttribute('type', 'text');


    const parentEmailLabel = document.createElement('p');
    parentEmailLabel.innerText = 'Parent Email';
    const parentEmailInput = document.createElement('input');
    parentEmailInput.setAttribute('type', 'email');

    const parentPhoneLabel = document.createElement('p');
    parentPhoneLabel.innerText = 'Phone';
    const parentPhoneInput = document.createElement('input');
    parentPhoneInput.setAttribute('type', 'text');


    console.log(languagues);

    const parentlanguage = document.createElement('p');
    parentlanguage.innerText = 'Parent Language';
    const languageInput = document.createElement('select');

    const languageListValues = Object.values(languagues.langs);
    const languageListKeys = Object.keys(languagues.langs);
    console.log(Object.values(languageList));


    for (let i = 0; i < languageList.length; i++) {

        const optionElement = document.createElement('option');
        console.log(optionElement);
        optionElement.setAttribute('value', Object.keys(languageList)[i]);
        optionElement.innerText = Object.values(languageListValue)[i];
        languageInput.appendChild(optionElement);
    }




    const submitBtnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.innerText = 'Submit';

    submitBtn.addEventListener('click', () => {

        collectStudentData();

    });


    studentFormWrapper.appendChild(studentFormTitle);
    studentFormWrapper.appendChild(nameLabel);
    studentFormWrapper.appendChild(nameInput);
    studentFormWrapper.appendChild(parentLabel);
    studentFormWrapper.appendChild(parentInput);
    studentFormWrapper.appendChild(schoolIdLabel);
    studentFormWrapper.appendChild(schoolIdInput);
    studentFormWrapper.appendChild(parentEmailLabel);
    studentFormWrapper.appendChild(parentEmailInput);
    studentFormWrapper.appendChild(parentPhoneLabel);
    studentFormWrapper.appendChild(parentPhoneInput);
    studentFormWrapper.appendChild(parentlanguage);
    studentFormWrapper.appendChild(languageInput);
    studentFormWrapper.appendChild(submitBtnWrapper);

    const collectStudentData = () => {

        const student = {
            "name": nameInput.value,
            "parentName": parentInput.value,
            "schoolId": schoolIdInput.value,
            "parentEmail": parentEmailInput.value,
            "parentPhone": parentPhoneInput.value,
            "language": languageInput.value
        }

        fetch('http://localhost:8080/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            }).then(() => console.log(student))

            .catch(err => console.error(err));
    }




    return studentFormWrapper;

}
export {
    createStudentForm
}