// обьявление стрелочная функция
/*
let fun=(a,b,c)=>a+b+c;
console.log(fun(1,2,3));
*/
let word = "Hello8";
function showNow(x){
    alert(x);
}
let timer = setTimeout(showNow, 5000, word);
