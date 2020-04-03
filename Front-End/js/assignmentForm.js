   const createAssignment = () => {

       const assignmentFormWrapper = document.createElement('div');
       assignmentFormWrapper.classList.add('form');
       const assignmentFormTitle = document.createElement('h3');
       assignmentFormTitle.innerText = 'Add Assignment';

       const nameLabel = document.createElement('p');
       nameLabel.innerText = 'Name';
       const nameInput = document.createElement('input');
       nameInput.setAttribute('type', 'text');


       const courses = [{
               courseName: 'Course 1',
               code: 'c1'
           }, {
               courseName: 'Course 2',
               code: 'c2'
           },
           {
               courseName: 'Course 3',
               code: 'c3'
           }
       ];

       const assignmentLabel = document.createElement('p');
       assignmentLabel.innerText = 'Select a Course';
       const assignmentInput = document.createElement('select');

       for (let i = 0; i < courses.length; i++) {

           const optionElement = document.createElement('option');

           optionElement.setAttribute('value', courses[i].code);
           optionElement.innerText = courses[i].courseName;
           assignmentInput.appendChild(optionElement);
       }


       const descriptionLabel = document.createElement('p');
       descriptionLabel.innerText = 'Description';
       const descriptionInput = document.createElement('TEXTAREA');
       descriptionInput.setAttribute('type', 'text');

       const submitBtnWrapper = document.createElement('div');
       const submitBtn = document.createElement('button');
       submitBtnWrapper.appendChild(submitBtn);
       submitBtn.innerText = 'Submit';

       assignmentFormWrapper.appendChild(assignmentFormTitle);
       assignmentFormWrapper.appendChild(nameLabel);
       assignmentFormWrapper.appendChild(nameInput);
       assignmentFormWrapper.appendChild(assignmentLabel);

       assignmentFormWrapper.appendChild(assignmentInput);
       assignmentFormWrapper.appendChild(descriptionLabel);
       assignmentFormWrapper.appendChild(descriptionInput);

       assignmentFormWrapper.appendChild(submitBtnWrapper);

       return assignmentFormWrapper;


   }

   export {
       createAssignment
   }