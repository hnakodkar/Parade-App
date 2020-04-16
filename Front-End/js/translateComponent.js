import {
    displayTranslatedMessages,
    messagePostOrPatch
} from "./chatComponent.js";

const translateMessage = (baseLanguage, translatedLanguage, message) => {

    const translationEndpoint = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

    const apiKey = 'trnsl.1.1.20200331T021614Z.c694db314be5bc51.2c0c229d52f7f79b60f801b9a658e149e1b57ce7';


    fetch(`${translationEndpoint}?key=${apiKey}&text=${message}&lang=${baseLanguage}-${translatedLanguage}`, {
            method: "POST",

        })
        .then(response => response.json())
        .then(response => response.text.forEach(translation => {
            displayTranslatedMessages(translation);
        }));


}

const translateSentMessage = (conversations, msgBody, teacherId, language) => {

    const translationEndpoint = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

    const apiKey = 'trnsl.1.1.20200331T021614Z.c694db314be5bc51.2c0c229d52f7f79b60f801b9a658e149e1b57ce7';


    fetch(`${translationEndpoint}?key=${apiKey}&text=${msgBody.content}&lang=${language}-${'en'}`, {
            method: "POST",


        })
        .then(response => response.json())
        .then(response => {
            msgBody.content = [response.text];
            msgBody.teacher.id = teacherId;
            console.log(teacherId);
            setTimeout(messagePostOrPatch(conversations, msgBody, teacherId), 1000);
        });



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
    languagues,
    translateSentMessage
}