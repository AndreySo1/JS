
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





// задание ввести количество планет и вывести в таблицу информацию из базы
let numPlanets =+prompt('vvedite 4islo planet', '5');
let keyArr = ['name', 'diameter', 'rotation_period'];


fetch('https://swapi.co/api/planets/')
    .then(funResponse => funResponse.json())
    .then(funResult => {
        let planetsArr = funResult.results;
        let planets = planetsArr.splice(0, numPlanets);
        let table = document.createElement('table');
        let planetsKeys = Object.keys(planets[0]);
        console.log(planetsKeys);
        console.log(planets);
        let buttonContainer = document.createElement('div');

        planetsKeys.forEach(function (item) {
            let planetButton = document.createElement('span');
            planetButton.innerHTML = item;
            buttonContainer.append(planetButton);
        })
        document.body.prepend(buttonContainer);

        for (let i = 0; i < planets.length; i++) {
            let tr = document.createElement('tr');
            let trArr=[];
// td.innerHTML = planets[i][keyArr[j]]; //аналог ниже
            for(let z = 0; z<keyArr.length; z++) {
                for (key in planets[i]) {
                    if (key == keyArr[z]){
                        trArr.push(planets[i][key])};
                        }
            }
            console.log(trArr);

            for (let j = 0; j < keyArr.length; j++) {
                let td = document.createElement('td')


                tr.append(td);
            }
            table.append(tr);
        }
        document.body.append(table);
    })
// async function getPlanet() {
//     let planetsRes = await fetch('https://swapi.co/api/planets/');
//     let planetJson = await planetsRes.json();
//     let planet = planetJson.results;
//
//     let length = planet.length;
//     let planetsArr = planet.splice(numPlunets-1, length-numPlunets);
//     console.log(planetsArr);
//     createTable(planetsArr);
// }
//
//
//
// function createTable(data) {
//     let table =document.createElement('table');
//
//     for(let i =0; i<keyArr.length; i++){
//         let tr = document.createElement('tr');
//         for(let j =0; j< data.length; j++){
//             let td = document.createElement('td');
//             td.innerHTML = data[j].name;
//             tr.append(td);
//         }
//         table.append(tr);
//     }
//
//     document.body.prepend(table);
// }
//
//
// getPlanet();
