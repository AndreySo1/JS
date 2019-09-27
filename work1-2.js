//------------Lesson1
/*
// alert("Privet");
console.log("privet2");
console.log("p2222222");
console.log("33333333");

const b=8;
// console.log(b);

console.log(typeof b);

console.log("base" / 2); //результат NaN

let x = "poidem gylat 'zzavtra' vecherom";
let y = `poidem 
gylat 
'zzavtra' vecherom
`;
console.log(y);

let name = "Vasa";
let str = `privet ${name} kak dela`;
console.log(str);

let users = { name:"Vasa", age:19, "second name": "Petrov" }; //создаем обьект
console.log(users.name);  //выводит vasa

users.weight = 70; //добавляет новый ключь к обьекту

console.log(users.weight);
delete users.age; //удаляет ключь из обьекта
users.weight=100;
console.log(users);
console.log(users["second name"]);
console.log(typeof users);
console.log(Number("2+2"));
*/
//-----------------------------lesson2

let vopros = prompt('Какой язык изучаем?', 'введи ответ');

/*
if(vopros=="js"){
    alert("molodec")
} else {
    alert("ny i zrya")
};
*/

(vopros==="js") ? alert("molodec2") : alert("ny i zrya2");  //сокращенно

console.log(vopros);


// использование SWITCH
switch (vopros) {
    case "js":
        console.log(" вы ввели верно");
        break;
    case "c++":
        console.log(" вы ввели C++");
        break;
    default:
        console.log(" вы ввели что-то другое");
        break;
}

// использование FOR

for(let i=1; i<=5; i++){
    console.log(`${vopros} ` + i); // `${переменная}+текст` -- конструкция переводит переменную в строковый формат
}

var user={
    firstName: 'Jon',
    lastName: 'Do',
    age: 13
};// создаем объект

/*
for(var key in user){
    console.log(key); // выводит по порядку ключи обьекта
    console.log(user[key]); // выводит по порядку значения ключей
}
*/
console.log(Object.keys(user)); //выводит массив ключей из указанного массива

let mas=["cat", "dog", "bird"];
for(let type of mas){
    if()
    console.log()
}


















