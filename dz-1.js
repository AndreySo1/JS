console.log("Hi this me");
/*
// Zadanie 1
let manager;
let name;
let currentUser;

name="Вася";

manager = name;

currentUser = manager;

console.log(currentUser);
*/

/*
// Zdanie 2
let name = "Вася";
console.log( `hello ${1}` ); //1
console.log( `hello ${"name"}` ); // Вася
console.log( `hello ${name}` );// name
*/

//zadanie 3
/*
console.log(" \n \n" - 2);
console.log(true + false);
console.log(false + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(7 / 0);
console.log(4 + 5 + "px");
console.log("" + 3 + 0);
console.log("" - 4 + 0);
console.log("!" + 2 + 5);
console.log("1" - 2);
console.log("3px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
*/


/*
-2
dz-1.js:26 1
dz-1.js:27 0
dz-1.js:28 2
dz-1.js:29 6
dz-1.js:30 Infinity
dz-1.js:31 9px
dz-1.js:32 30
dz-1.js:33 -4
dz-1.js:34 !25
dz-1.js:35 -1
dz-1.js:36 NaN
dz-1.js:37   -9  5
dz-1.js:38 -14
dz-1.js:39 1
dz-1.js:40 NaN
 */

//zadanie4
/*
console.log(2 > 4);
console.log(undefined == null);
console.log(undefined === null);
console.log(false == 0);
console.log(false == "");
console.log(false === "");

 */

/*Задание №5
1) Создать объект animal с двумя свойствами, первое свойство будет тип животного со значением dog, второе свойство вес со значением 40
2) Добавить два свойства цвет и скорость с любыми значениями
3) удалить свойство вес
4) Изменить значение свойства цвет
5) Вывести в консоль полученый объект*/

let animal={
        type: "dog",
        weight:40
};
animal.color= "black";
animal.speed = 30;
delete animal.weight;
animal.color = "white";
console.log(animal);
























