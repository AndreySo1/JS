
/*
function show (message){
    let newMessage = message+1;
    console.log(newMessage);
}
let a =3;
setTimeout(()=>{
    a=87;
    console.log(a);
    show(a);
}, 2500);
show(a);
console.log(a);
*/
//выводит вначале 3 ,а лишь спустя 2,5 секунды 87.


/*
let a =3;
let b = new Promise(function (resolve, reject) {
    setTimeout(()=>{
        resolve (a=87);
    },2500)
});

b.then(function () {
    console.log(a);
});
*/


fetch('https://swapi.co/api/planets/') //обращаемся к серверу, options пока не трогаем
    .then(function (response) {// дождись пока придет ответ с сервера, только потом преобразуй в JSON
   return response.json();
       // console.log(response);
})
    .then(function (a) { // a равен тому что вернул прошлый .then
        console.log(a.results[3].orbital_period);
    })

//тоже самое что выше в сокращенной форме

fetch('https://swapi.co/api/planets/')
.then(response => response.json())
.then(a=> console.log(a.results[3].orbital_period))

//использование метода asunc / await

// async function getPlanet() {
//     let planetsRes = await fetch('https://swapi.co/api/planets/');
//     let planetJson = await planetsRes.json();
//     let planet = planetJson.results[3].orbital_period;
//     console.log('async'+ planet);
// }
// getPlanet();
let numPlunets =5;
let keyArr = ['name', 'diameter', 'rotation_period'];

async function getPlanet() {
    let planetsRes = await fetch('https://swapi.co/api/planets/');
    let planetJson = await planetsRes.json();
    let planet = planetJson.results;

    let length = planet.length;
    let planetsArr = planet.splice(numPlunets-1, length-numPlunets);
    console.log(planetsArr);
    createTable(planetsArr);
}

function createTable(data) {
    let table =document.createElement('table');

    for(let i =0; i<keyArr.length; i++){
        let tr = document.createElement('tr');
        for(let j =0; j< data.length; j++){
            let td = document.createElement('td');
            td.innerHTML = data[j].name;
            tr.append(td);
        }
        table.append(tr);
    }

    document.body.prepend(table);
}

getPlanet();
