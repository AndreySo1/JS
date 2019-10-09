//событие на клик по элементу

let test = document.querySelector('ul');
test.addEventListener('click',function () {
    alert('Hi')
});

test.addEventListener('click', function(event) {
    console.log(event.target);
    event.target.classList.toggle('activ');
});


/////////////////////////////д3 6 вторая часть

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

let table = document.querySelector('table');
//let arr = Array.from(table.rows);
let addUser = document.querySelector('.addUser');
let oldArr = data.length;

for(let i=0; i<data.length; i++){
    table.rows[i+1].cells[0].innerHTML = data[i].firstName;
    table.rows[i+1].cells[1].innerHTML = data[i].lastName;
    table.rows[i+1].cells[2].innerHTML = data[i].age;
};

addUser.addEventListener('click', function () {
    console.log('Hi');
    data.push({
        firstName: prompt('Vvedite First Name'),
        lastName: prompt('Vvedite Last Name'),
        age: Number(prompt('vvedite vozrost'))
        }
    );
    console.log(data);
    for(let i=oldArr; i<data.length; i++){
        table.insertAdjacentHTML('beforeend', `<tr>
        <td>${data[i].firstName}</td>
        <td>${data[i].lastName}</td>
        <td>${data[i].age}</td>
    </tr>`);
    };
    oldArr++;
});

