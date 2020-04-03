const createAssignmentView = () => {

    const assignmentWrapper = document.createElement('section');
    assignmentWrapper.classList.add('view');
    assignmentWrapper.classList.add('assignment');
    const assignmentHeader = document.createElement('div');
    assignmentHeader.classList.add('assignment-header');
    assignmentHeader.classList.add('view-header');
    const assignmentTitle = document.createElement('h3');
    assignmentTitle.innerText = 'ASSIGNMENTS';
    assignmentHeader.appendChild(assignmentTitle);
    const assignmentBody = document.createElement('div');
    assignmentBody.classList.add('assignment-body');
    assignmentHeader.appendChild(assignmentTitle);
    const assignmentListElement = document.createElement('ul');




    const createSingleAssignmentView = () => {

        const createSingleAssignmentElement = document.createElement('li');
        const courseName = document.createElement('h4');

        courseName.innerText = 'Couse Name';

        const courseDescription = document.createElement('p');

        courseDescription.innerText = 'Couse Description';
        createSingleAssignmentElement.appendChild(courseName);
        createSingleAssignmentElement.appendChild(courseDescription);
        return createSingleAssignmentElement;
    }

    for (let i = 0; i < 5; i++) {
        assignmentListElement.appendChild(createSingleAssignmentView());

    }

    assignmentBody.appendChild(assignmentListElement);

    assignmentWrapper.appendChild(assignmentHeader);
    assignmentWrapper.appendChild(assignmentBody);

    return assignmentWrapper;
}

export {
    createAssignmentView
}