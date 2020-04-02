const createCourseForm = () => {

    const courseFormWrapper = document.createElement('div');
    courseFormWrapper.classList.add('form');
    const courseFormTitle = document.createElement('h3');
    courseFormTitle.innerText = 'Add Course';


    const nameLabel = document.createElement('p');
    nameLabel.innerText = 'Name';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');

    const classTimeLabel = document.createElement('p');
    classTimeLabel.innerText = 'Class Time';
    const classTimeInput = document.createElement('input');
    classTimeInput.setAttribute('type', 'text');



    const teachers = [{
            teacherName: 'Teacher 1',
            code: 't1'
        }, {
            teacherName: 'Teacher 2',
            code: 't2'
        },
        {
            teacherName: 'Teacher 3',
            code: 't3'
        }
    ];

    const teacherLabel = document.createElement('p');
    teacherLabel.innerText = 'Select the Teacher';
    const teacherInput = document.createElement('select');

    for (let i = 0; i < teachers.length; i++) {
        const optionElement = document.createElement('option');

        optionElement.setAttribute('value', teachers[i].code);
        optionElement.innerText = teachers[i].teacherName;
        teacherInput.appendChild(optionElement);
    }


    const submitBtnWrapper = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtnWrapper.appendChild(submitBtn);
    submitBtn.innerText = 'Submit';

    submitBtn.addEventListener('click', () => {

        collectCourseData();

    });

    courseFormWrapper.appendChild(courseFormTitle);
    courseFormWrapper.appendChild(nameLabel);
    courseFormWrapper.appendChild(nameInput);
    courseFormWrapper.appendChild(classTimeLabel);
    courseFormWrapper.appendChild(classTimeInput);
    courseFormWrapper.appendChild(teacherLabel);
    courseFormWrapper.appendChild(teacherInput);
    courseFormWrapper.appendChild(submitBtnWrapper);





    const collectCourseData = () => {

        const course = {
            "name": nameInput.value,
            "classTime": classTimeInput.value,
            "teacher": teacherInput.value,
        };

        fetch('http://localhost:8080/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            }).then(() => console.log(course))

            .catch(err => console.error(err));
    }
    return courseFormWrapper;
}

export {
    createCourseForm
}