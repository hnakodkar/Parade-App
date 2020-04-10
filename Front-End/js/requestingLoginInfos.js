import {
    displayTeacherInfo
} from './app.js';
import {
    displayStudentInfo
} from './app.js';

const requestingLogingInfos = (usernameValue, passwordValue) => {

    const user = {
        "username": usernameValue,
        "password": passwordValue
    }
    let chosenData = document.querySelector('select').value;
    let endpoint = "";
    if (chosenData == "Teacher") {
        endpoint = "http://localhost:8080/login/teacher";
        fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            .then(response => response.json())
            .then(JSONresponse => console.log(JSONresponse))
            .then(JSONresponse => displayTeacherInfo(JSONresponse))
            .catch(err => console.error(err));


    } else if (chosenData == "Student") {
        endpoint = "http://localhost:8080/login/student";

        fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            .then(response => response.json())
            .then(JSONresponse => console.log(JSONresponse))
            .then(JSONresponse => displayStudentInfo(JSONresponse))
            .catch(err => console.error(err));
    }
}

export {
    requestingLogingInfos
}