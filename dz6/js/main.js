const data = [
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
const table = document.querySelector('table');
const arr = Array.from(table.rows);
const addUser = document.querySelector('.addUser');
const tdCount = 3;

/* for (let i = 0; i < data.length; i++) {
    table.rows[i+1].cells[0].innerHTML = data[i].firstName;
    table.rows[i+1].cells[1].innerHTML = data[i].lastName;
    table.rows[i+1].cells[2].innerHTML = data[i].age;
} */


arr.splice(0, 1);
arr.forEach(function(element, index){
    element.cells[0].innerHTML = data[index].firstName;
    element.cells[1].innerHTML = data[index].lastName;
    element.cells[2].innerHTML = data[index].age;
});

addUser.addEventListener('click', function(){
    const tr = document.createElement('tr');

    data.push({
        firstName: prompt('Vvedite firstName', 'Vasya'),
        lastName: prompt('Vvedite lastName', 'Pypkin'),
        age: +prompt('Vvedite age', '25'),
    });
    
    for (let i = 0; i < tdCount; i++) {
        let td = document.createElement('td');
        tr.append(td);
        console.log(tr);
    }

    table.tBodies[0].append(tr);

    table.rows[data.length].cells[0].innerHTML = data[data.length-1].firstName;
    table.rows[data.length].cells[1].innerHTML = data[data.length-1].lastName;
    table.rows[data.length].cells[2].innerHTML = data[data.length-1].age;
    
});

////////////////////////////удаление строки по клику на 3й столбец таблицы и редактирование на клик на другой столбец.

table.addEventListener('click', function (event) {
    let tr = event.target.closest('tr');
    let trIndex=tr.rowIndex;
    let lastTd = tr.cells[tdCount-1];
    if(event.target == lastTd && trIndex){
                console.log('delete');
                data.splice(trIndex-1, 1);
                tr.remove();
    } else if(trIndex){
        let newElement = {
            firstName: prompt('Vvedite firstName', 'Vasya'),
            lastName: prompt('Vvedite lastName', 'Pypkin'),
            age: +prompt('Vvedite age', '25'),
        };
            data.splice( trIndex-1, 1, newElement);
            console.log(data);
            table.rows[trIndex].cells[0].innerHTML = data[trIndex-1].firstName;
            table.rows[trIndex].cells[1].innerHTML = data[trIndex-1].lastName;
            table.rows[trIndex].cells[2].innerHTML = data[trIndex-1].age;
    };

});