const createFooter = () => {


    const footerLinkCreator = (portfolioLink, name) => {

        const link = document.createElement('a');
        link.classList.add('footerLink');
        link.setAttribute('href', portfolioLink);
        link.setAttribute('target', '_blank');
        link.innerText = name;
        return link;
    };

    const footerElement = document.createElement('footer');
    const footerTitle = document.createElement('h4');
    footerTitle.innerText = 'Contributors';
    footerElement.prepend(footerTitle);
    footerElement.classList.add('footer');
    const footerContent = document.createElement('div');
    const hetal = footerLinkCreator('http://hnakodkar.github.io/', 'Hetal Nakodkar');
    const abdul = footerLinkCreator('https://abdulj23.github.io/', 'Abdul Jama ');
    const daly = footerLinkCreator('http://dalytekam.github.io/', 'Daly Tekam');
    const nadir = footerLinkCreator('https://nayhova.github.io', 'Nadir Carpenter');
    const olivia = footerLinkCreator('http://oliviasmith311.github.io/', 'Olivia Smith');
    const innocent = footerLinkCreator('https://www.linkedin.com/in/mbanda-innocent-a91737aa/', 'Innocent Mbanda');

    footerContent.appendChild(hetal);
    footerContent.appendChild(abdul);
    footerContent.appendChild(daly);
    footerContent.appendChild(nadir);
    footerContent.appendChild(olivia);
    footerContent.appendChild(innocent);
    footerElement.appendChild(footerContent);



    return footerElement;
}

export {
    createFooter
}