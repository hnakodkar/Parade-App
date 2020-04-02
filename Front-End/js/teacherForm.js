const createTeacherForm = () => {
    const teacherFormWrapper = document.createElement('div');
    teacherFormWrapper.classList.add('form');

    const formTitle = document.createElement('h3');
    formTitle.innerText = 'Add teacher';

    const nameLabel = document.createElement('p');
    nameLabel.innerText = 'Name';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');

    const schoolIdLabel = document.createElement('p');
    schoolIdLabel.innerText = 'School ID';
    const schoolIdInput = document.createElement('input');
    schoolIdInput.setAttribute('type', 'text');

    const emailLabel = document.createElement('p');
    emailLabel.innerText = 'Email';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');


    const phoneLabel = document.createElement('p');
    phoneLabel.innerText = 'Phone';
    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'text');

    const submitBtnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.innerText = 'Submit';

    submitBtn.addEventListener('click', () => {

        collectTeacherData();

    });

    teacherFormWrapper.appendChild(formTitle);
    teacherFormWrapper.appendChild(nameLabel);
    teacherFormWrapper.appendChild(nameInput);
    teacherFormWrapper.appendChild(schoolIdLabel);
    teacherFormWrapper.appendChild(schoolIdInput);
    teacherFormWrapper.appendChild(emailLabel);
    teacherFormWrapper.appendChild(emailInput);
    teacherFormWrapper.appendChild(phoneLabel);
    teacherFormWrapper.appendChild(phoneInput);
    teacherFormWrapper.appendChild(submitBtnWrapper);


    const collectTeacherData = () => {

        const teacher = {
            "name": nameInput.value,
            "schoolId": schoolIdInput.value,
            "email": emailInput.value,
            "phone": phoneInput.value
        }

        fetch('http://localhost:8080/teachers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(teacher)
            }).then(() => console.log(teacher))
            .catch(err => console.error(err));
    }




    return teacherFormWrapper;

}

export {
    createTeacherForm
}