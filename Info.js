let a = "Hi";  - обьявление переменной

const b =3; - обьявление константы она в отличие от переменной не переопределяется;

типы данных:
    вывод типа даннных в консоль
console.log(typeof b);
typeof b;
или
typeof(b);

1. Число
2. Строка обьявляется :  "" , '' , ``,
    let name = "Vasa";
let str = `privet ${name} kak dela`;
console.log(str);
Спец символы в строках:
    \n -перенос строки
3. Логический (trye-false)
4. null - ничего, пусто
5. Undifined - не определено, неизвестно (let b; x= b+3;  результат undifined)
6. Обьект.  let users = { name: "Vasa", age:19 };
name - ключ
"Vasa" - значение
7. Symbol
let name=Symbol(); //создали переменную с типом Symbol;

Преобразование типов данных

Операторы
Унарные операторы (воздействуют на один операнд)
let b=2; -b ; => b=-2
Бинарные операторы: a+b
Операторы сравнения : < , >, !=, ==, === (строгое равно)
Логические операторы: || или , хотя бы один равен тру(1) результат будет тру.
&& (и) , если все значения тру (1), то только тогда будет тру.
! (не), переворачивает лог значение.

-----------------------------
    LES2

Условия

if( условие){
    Выражение1
}
else{
    Выражение2
}

let x = (a>b) ? a=1 : a=2;
let x = (условие) ? значение1 : значение2;

let x = prompt('Введите' , 'default');

switch (выражение) {
    case значение 1:
// здесь выполняется если результат выражения равен 1
        break;
    case значение2:
// здесь выполняется если результат выражения равен 2
        break;
    default:
// здесь выполняется если результат выражения не равен ни одному из перечисленных
        break;
}

Циклы

while(условие){
///тело цикла
};

do{
//тело цикла
} while(условие);

for (let i=0; 1<4; i++){
    тело цикла
}

Перебор ключей в объекте

for( let key in object){
    alert(key);
// выводит по порядку ключи обьекта
    alert(obect[key]);
// выводит по порядку значения ключей
}

Массив

Массив - это тот же обьект , где в качестве ключей выбраны цифры.
    let mas = ["Jon", "Piter", "VAsya"];

.length - возвращает длинну массива
user.length // вернет 3 (если длинна массива 3)

    .push() / .unshift()  // добавляет данные в конец/ начало массива
    .pop() / .shift() // удаляет данные в конце / начале массива.

Обьект Math
содержит много функция смотри в интернете

    .split(string) - конвертирует строку в массив, разбивает по переданному параметру
    .join(string) - конвертирует строку из масива, разделяя элементы указанным параметром
    .splice(index, [deleteCount, PastElement]) - вырезает элементы массива, остальные элементы сдвигаются
var a =[0,1,2,3];
var b = a.splice(1,2);
// a=[0,3]
//b=[1,2]

.slice(index, copyCount) -копирует элементы массива
    .revers() - "переворачивает" массив
    .concat() - позволяет добавить в массив новые элементы
    .indexOf(elem) - возвращает порядковый номер искомого элемента в массиве(сравнение по содержимому и типу , строгое сравниение), если такой элемент отсутствует вернет -1

    .map( function( item, index, arr)) выполняет функцию для каждого элемента массива.
arr.map(function(item)){
    return item.length;
} -функция будет возвращать длинну

Перебор массива

for(let key of mass){
// будет выводить по порядку значения массива
}


---------------------Lesson3
Функции

Для повторения однотипных инструкций используются функции.

    Для обьявления:
    Ключевое слово function
Имя функции sum
Параметры a , b
Тело функции

function sum (a,b){
    let x=a+b;
    alert(x);
}

Вызов функции:
    sum(2,3);  // 5
sum(10,5); //15

Область видимости функции ограничивается только функцией, переменные объявленные в функии не будут видны за её пределами, но доступны во вложенных функциях.

    Функция может менять глобальные переменные.

    Для возврата значения в функции используется return , после return функция останавливает дальнейшую работу.

    function sum(a,b){
    return a+b;
}
let z = sum(7,1);  // z=8


можно объявить фукнкцию так, тогда до её вызова система не будет держать её в памяти:
    let name = function(a){
    };

---------------Lesson4
Стрелочные функции

let sum=()=>a+b;

эквивалент

let sum= function(){
    return a+b;
}

let sum= (a,b)=>{
    return a+b;
}

ТАймеры в JS

setTimeout(function, delay, param1, param2,....); \\ выполняется после задержки в милисекундах.
    let timer = setTimer(function() (alert('Hello world')), 1000);

setInterval(function, delay); \\Выполняется через промежутки времени.

clearInterval(function) // сброс таймера.

Обьект  может хранить в себе функции, они называются методом обьекта

let user={
    name: "Andrey",
    age: 24,
    sayHi: function (){
        alert("Hi");
    },
    secondName: "Pupkin",
}
вызов метода:
    user.sayHi();

Ключевое слово this  в обьекте
let foo = {
    name: "Vasya",
    sayHello: function(){
        consolr.log('Hello' + this.name);
    }
};
foo.sayHello(); // HelloVasya

new в обьекте:

    function calcMass(array)={
    this.array = array;
this cur = 0;
for (let i=0; i< this.array.length; i++ ){
    this.cur += this.array[i];
}
return this.cur;
}

console.log(new calcMass[1,3,4]); //8
console.log(new calcMass[1,4]); //5


---------------Lesson6
Работа с DOM

children - свойство возвращает количество дочерних элементов
firstElementChild / lastElementChild вернет первый или последний элемент коллекции
previousElementSibling / nextElementSibling вернет соседние элементы
parentElement  возвращает всех родителей

elem.querySelector(query)  или elem.querySelectorAll(query) вернет первое совпадение (одно) или коллекцию элементов (массив)

elem.getElementBy*()
- getElementById(id) - выборка по идентификатору
- getElementByTagName( tag name)

Доступ к содержимому элементов

innertHTML возвращает и изменяет штмл разметку внутри элемента

let title = document.querySelector('.title');
title.innerHTML = '<p>Hello Vasya</p>';

value возвращает и изменяет значение атрибута value для элементов.
    Работа с атрибутами:
    elem.hasAttribut(name) - проверяет наличие атрибута
elem.getAttribut(name) - получает значение атрибута
elem.setAttribut(name value)- устанавливает аттрибут
....
Работа с классами:
    elem.classList - возвращает псевда массив классов тегов
elem.classList.toggle("class") - если класса class нет, добавляем его , если есть удаляет.
    elem.classList.add/remove("class") - добовляет удаляет класс  class

dataset - возвращает и изменяет дата-атрибуты

----------------Lesson7------------
    События браузера

click - происходит когда кликнули на элемент
mouseover - когда на элемент наводиться мышь
mousedown / mouseup - когда нажали или отжали мышь
mousemove - при движении мыши

Для того чтобы присвоить событию какойто обработчик можно использовать несколько подходов:

    Через HTML документ (плохой способ):
<div onclick ="alert('Hello world');"> Click me </div>

или (плохой):
< div onklick="say()"> Click me </div>

С помощью метода addEventListener / removeEventListener (хороший способ) :

let test = document.querySelector('p');
test.addEventListener('click',function () {
    alert('Hi')
});

й
Делегирование событий

table.addEventListener('click', function(event) {
    alert(event.target);
});

------------------Lesson 9----------------------
    Обработка данных с сервераю

При помощи чего в JS можно достигнуть асинхронности выполнения кода:

    1) setTimeout
setInterval

2) Callback(функция)
setTimeout(function(){
    x=y+2;
    showMessage(x);
    3, 2000)
})

3) Промисы / Promise
См. презентацию 9.

Очень часто используется основной метод .then
let promise = new Promise(function(resolve, reject){
    setTimeout()=>....
    promise.then(
        result = alert(result)
    )
});

Метод FETCH
JS может отправлять сетевые запросы на сервер и подгружать информацию по мере необходимости.

    Базовый синтаксис:

    let promise = fetch(url, [options])

url -для отправки запроса
Options - дополнительные параметры: метод, заголовки и т.д

Для получения тела ответа нужно использовать дополнительный вызов метода:

    response.json() - декодирует ответ в формате JSON
response.formData() - возвращает ответ как обьект FormData(для форм)
.....

мы можем выбрать только один метод чтения ответа.

    Метод Async/await

Ключевое слово  async перед функцией гарантиирует, что эта функция в любом случае вернет promis/
Ключевое слово await  скажет JS ждать до тех пор, пока promis справа от await не выполниться. После чего вернет результат и выполнение кода продолжиться., может использоваться только внутри async.
    Пример:
async function getPlanets(){
    let planetResponse = await fetch('https:// ....');
    let planetJson = await planetResponse.json();
    console.log();
}




















