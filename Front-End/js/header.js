const createHeader = () => {

    const headerElement = document.createElement('header');

    const title = document.createElement('h1');
    title.innerText = 'Our ESL Classroom';
    headerElement.appendChild(title);
    return headerElement;

}

export {
    createHeader
}