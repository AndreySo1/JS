
/*
//localStorage.setItem('test', 5);
//localStorage.setItem('test2', 7);
console.log(localStorage);
//localStorage.clear();
 for (let i=0; i<localStorage.length; i++){
     console.log(1);
     let key = localStorage.key(i);
     console.log(`${key}: ${localStorage.getItem(key)}`);
 };
*/

 /*for (let key in localStorage){
     console.log(key);
 }
*/

 /*
localStorage.clear();
window.onstorage = event => {
    if (event.key != 'test3') return;
    alert(event.key + ':' + event.newValue + " at " + event.url);
};

localStorage.setItem('test3', "123");
/*

  */



 /*


 //создать поле, кнопку . При вводе текста в поле и нажатии кнопки сохраняется текст в локалСторадж

let saveButton=document.querySelector('span');
let textArea= document.querySelector('textarea');


saveButton.addEventListener('click', function () {
    console.log(2);

    let textAreaValue = textArea.value;
    console.log(textAreaValue);
    localStorage.setItem('localStorageTextArea', textAreaValue);
    console.log(localStorage);
});

// теперь при обновлении страницы из локал сторадж данные заполняются в поля

textArea.value = localStorage.getItem('localStorageTextArea');

//когда мы заполняем поля данные сохраняются, и если мы вдруг закроем страницу случайно при открытии данные будет сохранены
textArea.addEventListener('input', function () {
    console.log(3);
    let textAreaValue = textArea.value;
    localStorage.setItem('localStorageTextAreaValue', textAreaValue);
});

textArea.value = localStorage.getItem('localStorageTextAreaValue');

  */





//1функция а+б через промпт; 2 функция по клику на кнопку выводит результат 2й функции (1функция + с)

let one = +prompt('VVedite a', '1');
let two = +prompt('VVedite b', '2');
let three= +prompt('VVedite c', '3');

function first() {
    let rezFirst = one +two;
    //console.log(rezFirst);
    return rezFirst;
}
let rez1first = first();
console.log(rez1first);
function second() {

}



















