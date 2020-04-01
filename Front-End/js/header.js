const createHeader = () => {

    const headerElement = document.createElement('header');

    const title = document.createElement('h1');
    title.innerText = 'Parade Web App';
    headerElement.appendChild(title);
    return headerElement;

}

export {
    createHeader
}