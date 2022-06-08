const listBooks = document.querySelectorAll('div.book');
const elemBody = document.querySelector('body').style
const header = listBooks[4].querySelector('h2 a');
const listLiSecondBook = listBooks[0].querySelectorAll('ul li');
const listLiFifthBook = listBooks[5].querySelectorAll('ul li');
const listUlSixthBook = listBooks[2].querySelector('ul');
const chapterSixthBook = document.createElement('li');

const sortBooks = function() {
    listBooks[0].before(listBooks[1]);
    listBooks[0].after(listBooks[4]);
    listBooks[5].after(listBooks[2]);
}

const changeBackground = function() {
    elemBody.backgroundImage = "url('./image/you-dont-know-js.jpg')";
}

const deleteAd = function() {
    document.querySelector('.adv').remove();
}

const correctHeader = function() {
    header.textContent = 'Книга 3. this и Прототипы Объектов';
}

const sortSecondBook = function() {
    listLiSecondBook[3].after(listLiSecondBook[6], listLiSecondBook[8]);
    listLiSecondBook[9].after(listLiSecondBook[2]);
}

const sortFifthBook = function() {
    listLiFifthBook[1].after(listLiFifthBook[9], listLiFifthBook[3], listLiFifthBook[4]);
    listLiFifthBook[10].before(listLiFifthBook[5], listLiFifthBook[8]);
}

const addNewChapterSixthBook = function() {
    chapterSixthBook.textContent = 'Глава 8: За пределами ES6';
    listUlSixthBook.insertAdjacentElement('beforeend', chapterSixthBook);

    const listLiSixthBook = listBooks[2].querySelectorAll('ul li');

    listLiSixthBook[9].before(listLiSixthBook[10]);
}

sortBooks();
changeBackground();
deleteAd();
correctHeader();
sortSecondBook();
sortFifthBook();
addNewChapterSixthBook();