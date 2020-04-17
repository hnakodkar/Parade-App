const createUserInfosCard = (userResponse, color) => {
    //console.log(userResponse);
    const container = document.createElement('div');

    container.classList.add('user');
    container.style.backgroundColor = color;
    const usernameHolder = document.createElement('div');
    usernameHolder.classList.add('userName');

    const pictureHolder = document.createElement('div');
    pictureHolder.classList.add('pictureHolder');

    const nameHolder = document.createElement('div');
    const name = document.createElement('h3');
    name.classList.add('user-name');
    name.innerText = userResponse.name;
    nameHolder.appendChild(name);
    const infosHolder = document.createElement('div');
    infosHolder.classList.add('userInfos');
    usernameHolder.appendChild(pictureHolder);
    usernameHolder.appendChild(nameHolder);
    container.appendChild(usernameHolder);
    container.appendChild(infosHolder);

    const info1Label = document.createElement('h3');
    info1Label.innerText = 'Username: ';
    const info1 = document.createElement('span');
    info1.innerText = userResponse.username;
    info1Label.append(info1);
    const info2Label = document.createElement('h3');
    info2Label.innerText = 'Email: ';
    const info2 = document.createElement('span');
    info2.innerText = userResponse.parentPhone ? userResponse.parentEmail : userResponse.email;
    info2Label.append(info2);

    const info3Label = document.createElement('h3');
    info3Label.innerText = 'School Id: ';
    const info3 = document.createElement('span');
    info3.innerText = userResponse.schoolId;
    info3Label.append(info3);

    const info4Label = document.createElement('h3');
    info4Label.innerText = 'Phone: ';
    const info4 = document.createElement('span');
    info4.innerText = userResponse.parentPhone ? userResponse.parentPhone : userResponse.phone;
    info4Label.append(info4);


    infosHolder.appendChild(info1Label);
    infosHolder.appendChild(info2Label);
    infosHolder.appendChild(info3Label);
    infosHolder.appendChild(info4Label);

    let isExpand = false;
    name.addEventListener('click', () => {
        if (isExpand == false) {
            container.style.height = "16rem";
        } else {
            container.style.height = "5.5rem";
        }
        isExpand = !isExpand;

    });


    return container;
}

export {
    createUserInfosCard
}