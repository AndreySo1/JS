
//домашка №6

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
// вариант 1
/*let table = document.querySelector('table');

for(let i=0; i<data.length; i++){
    table.rows[i+1].cells[0].innerHTML = data[i].firstName;
    table.rows[i+1].cells[1].innerHTML = data[i].lastName;
    table.rows[i+1].cells[2].innerHTML = data[i].age;
}*/

//вариант 2
let table = document.querySelector('table');
let arr = Array.from(table.rows); // преобразование HTML коллекции в массив
arr.splice(0,1);

arr.forEach(function (element, index){
    element.cells[0].innerHTML = data[index].firstName;
    element.cells[1].innerHTML = data[index].lastName;
    element.cells[2].innerHTML = data[index].age;
});
/*arr.forEach(element=>{
    console.log(element);
});*/ //сокращенный forEach


