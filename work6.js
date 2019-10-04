// работа с DOM

console.log(document.getElementById('animal')); // выводит элемент DOM с заданым ID



let result =document.querySelectorAll('#animal p');
console.log(result); // выводит массив элементов p в заданном обекте



let cats =document.querySelectorAll('.cats');
let test =cats[0].matches('.dogs'); //сравнивает эдентичные элементы
console.log(test);




// задача умножить первый элемент одного массива на первый второго и так далее, сумму пар умножений сложить.
let arr1=[2, 3, 4, 1];
let arr2=[3, 7, 1, 1];
let arrLength = arr1.length;
let result8 = 0;
let mult= 0;
let sum =0;

for(let i=0; i<arrLength; i++){
    mult = arr1[i]*arr2[i];
    result8 += mult;
}
console.log(result8);

let elem = document.querySelector('#animal');
elem.dataset.typeAnimal = 'huge';
// elem.innerHTML = '<p>Все старое стерто</p>' // удаляет-перезаписывает содержимое элемента



// задание, добавить через jS в блок .test класс dog и в 3 пэшки засунуть значения.
let zadanie = document.querySelector('.test');
zadanie.innerHTML= `<div class="dog"> 
                        <p></p> 
                        <p></p> 
                        <p></p>
                    </div>`;

/*let punktP = document.querySelectorAll('.dog p');
punktP[0].innerHTML='Лайка';
punktP[1].innerHTML='Доберман';
punktP[2].innerHTML='Такса';*/

zadanie.querySelectorAll('p')[0].innerText='Лайка2';
zadanie.querySelectorAll('p')[1].classList.add('BigDog');
zadanie.querySelectorAll('p')[1].innerText='Доберман2';
