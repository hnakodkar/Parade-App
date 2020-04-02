const createUserInfosCard = () => {

    const container = document.createElement('div');

    container.classList.add('user');

    const usernameHolder = document.createElement('div');
    usernameHolder.classList.add('userName');

    const pictureHolder = document.createElement('div');
    pictureHolder.classList.add('pictureHolder');

    const nameHolder = document.createElement('div');
    const name = document.createElement('h3');
    name.classList.add('user-name')
    name.innerText = 'User Name';
    nameHolder.appendChild(name);
    const infosHolder = document.createElement('div');
    infosHolder.classList.add('userInfos');
    usernameHolder.appendChild(pictureHolder);
    usernameHolder.appendChild(nameHolder);
    container.appendChild(usernameHolder);
    container.appendChild(infosHolder);

    const info1Label = document.createElement('h3');
    info1Label.innerText = 'Info 1: ';
    const info1 = document.createElement('span');
    info1.innerText = 'Info1 Value';
    info1Label.append(info1);
    const info2Label = document.createElement('h3');
    info2Label.innerText = 'Info 2: ';
    const info2 = document.createElement('span');
    info2.innerText = 'Info2 Value';
    info2Label.append(info2);

    const info3Label = document.createElement('h3');
    info3Label.innerText = 'Info 3: ';
    const info3 = document.createElement('span');
    info3.innerText = 'Info3 Value';
    info3Label.append(info3);

    const info4Label = document.createElement('h3');
    info4Label.innerText = 'Info 4: ';
    const info4 = document.createElement('span');
    info4.innerText = 'Info4 Value';
    info4Label.append(info4);


    infosHolder.appendChild(info1Label);
    infosHolder.appendChild(info2Label);
    infosHolder.appendChild(info3Label);
    infosHolder.appendChild(info4Label);

    let isExpand = false;
    name.addEventListener('click', () => {
        if (isExpand == false) {
            container.style.height = "10rem";
        } else {
            container.style.height = "4.6rem";
        }
        isExpand = !isExpand;

    });


    return container;
}

export {
    createUserInfosCard
}