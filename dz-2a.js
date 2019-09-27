/*Задание 1! Поиск данных в массиве.
Создадим массив объектов, который будет содержать данные о пользователях;
Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
Написать инструкцию поиска по массиву data, с введенными в prompt данными;
Если есть совпадение - вывести все данные этого пользователя в altert;прим:
user name: Ashton Kutcher.
user age: 40.
Если совпадения не произошло вывести alert с ошибкой:
“No results found for your request”
*/


let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];

let pr= prompt('Введите фамилию' , '');

let res = "Нет совпадений";

for (let i=0; i< data.length; i++){
    if (pr === data[i].firstName){
        alert("user name : " + data[i].firstName + " " + data[i].lastName + "     user age: " + data[i].age);
        break;
    }
    if (i==(data.length - 1)) {
        alert('Нет совпадений');
        break;
    }
};