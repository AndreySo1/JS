let numPlanets = +prompt('vvedite 4islo planet do 10', '5');
let keyArr = []; //'name', 'diameter', 'rotation_period'
let createTableButton = document.createElement('a');

let clearTable = document.createElement('a');

createTableButton.innerHTML = "Создать таблицу!";
clearTable.innerHTML = "Очистить таблицу.";

document.body.prepend(clearTable);
document.body.prepend(createTableButton);


fetch('https://swapi.co/api/planets/')
  .then(response => response.json())
  .then(result => {
    let planetsArr = result.results;
    let planets = planetsArr.splice(0, numPlanets);
    let table = document.createElement('table');
    let planetsKeys = Object.keys(planets[0]);
    let buttonContainer = document.createElement('div');
    document.body.prepend(buttonContainer);
    let div = document.querySelector('div');
    console.log(planets);

    planetsKeys.forEach(function(item){
      let planetButton = document.createElement('span');
      planetButton.innerHTML = item;
      buttonContainer.append(planetButton);
    })

    div.addEventListener('click', function(event){
      let target = event.target;

      if ( target.matches('span') ) {
        keyArr.push(target.innerText);
      }
      console.log(keyArr);
    });

    createTableButton.addEventListener('click', function(){
      for (let i = 0; i < planets.length; i++) { //пробегаемся по каждой планете
        let tr = document.createElement('tr');
        let trArr = [];
  
        for (let z = 0; z < keyArr.length; z++ ) {
          for (key in planets[i]) {
            if (key == keyArr[z]) {
              trArr.push(planets[i][key]);
            }
          }
        }
  
        for (let j = 0; j < keyArr.length; j++) {
          let td = document.createElement('td');
          td.innerHTML = trArr[j];
          tr.append(td);
        }
        table.append(tr);
      }
      document.body.append(table);
      let selectTable = document.querySelector('table');
      selectTable.addEventListener('click', function(){
        console.log('click');
      });
    });
    clearTable.addEventListener('click', function(){
        console.log('test');
        let clearTD = document.querySelectorAll('td');
        for( let x =0; x<clearTD.length; x++){
            clearTD[x].innerHTML= ' ';
        }
      });
  })

