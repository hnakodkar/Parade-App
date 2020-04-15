import {
    displayTranslatedMessages
} from "./chatComponent.js"

const translateMessage = (baseLanguage, translatedLanguage, message) => {

    const translationEndpoint = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

    const apiKey = 'trnsl.1.1.20200331T021614Z.c694db314be5bc51.2c0c229d52f7f79b60f801b9a658e149e1b57ce7';
    const splitMessage = message.split('--');

    fetch(`${translationEndpoint}?key=${apiKey}&text=${splitMessage[1]}&lang=${baseLanguage}-${translatedLanguage}`, {
            method: "POST",
            /* headers: {
                 "Content-Type": "application/x-www-form-urlencoded"
             }*/

        })
        .then(response => response.json())
        .then(response => displayTranslatedMessages(splitMessage[0] + response.text));
}

let languagues;
const getAllThelanguages = () => {

    fetch('https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=trnsl.1.1.20200331T021614Z.c694db314be5bc51.2c0c229d52f7f79b60f801b9a658e149e1b57ce7', {
            method: 'POST'
        })

        .then(response => response.json())

        .then(response => {
            languagues = response;
        });
}




export {
    translateMessage,
    getAllThelanguages,
    languagues
}