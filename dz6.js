//задание: вывести в таблицу данные массива

let data=[
    {
        firstName: 'Andrey',
        lastName: 'Soroko',
        age: 30
    },
    {
        firstName: 'Vasya',
        lastName: 'Pypkin',
        age: 40
    },
    {
        firstName: 'Bread',
        lastName: 'Pit',
        age: 50
    },

];

function clickButton() {
        let firstName = prompt('Введите имя', '');
        let lastName = prompt('Введите фамилию', '');
        let age = Number(prompt('Введите количество лет', ''));

};

let test = document.querySelector('.table');

console.log(data.length);

for(let i=0; i< data.length; i++){
    test.insertAdjacentHTML('beforeend', `
    <ul class="ulTable">
        <li>${data[i].firstName}</li>
        <li>${data[i].lastName}</li>
        <li>${data[i].age}</li>
    </ul>`);
}