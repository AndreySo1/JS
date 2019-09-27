// Функции



// function test(a,b,c) {
//     let z = a+c;
//     alert(z);
//     let y = c-b;
//     alert(y);
// }
//
// test(1,2,3);

// задание сделать функцию (a+b)/c
let pr= Number(prompt('введите а', ''));  //преобразование в число Number();

function doCalc(pr,b,c){
    return (pr+b)/c;
}

let x = doCalc (pr,4,2);
console.log(x);