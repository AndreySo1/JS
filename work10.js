//прототипы
/*
const animal={
    say: function () {
        console.log(this.name, 'goes', this.vice)
    }
};

const dog={
    name: 'dog',
    vice: 'woof',
    __proto__:animal // способ
};
const cat={
    name: 'cat',
    vice: 'maay',
    };
cat.__proto__=animal; //способ

const duk={
    name: 'duk',
    vice: 'krak',
};

const bird = Object.create(animal);
    bird.name= 'bird';
    bird.vice= '4irik';

dog.say();
cat.say();
bird.say();


Object.setPrototypeOf(duk, animal); //способ плохой нельзя

duk.say();

function createAnimal(name, vice) {
    const result = Object.create(animal);
    result.name = name;
    result.vice = vice;
    return result;
}

const lion =createAnimal( 'lion', 'rrrrr');
lion.say();*/


/*
function CreateAnimal(name, vice) {
    this.name = name;
    this.vice = vice;
}

CreateAnimal.prototype.say=function () {
    console.log(this.name, 'goes', this.vice);
}

const fish = new CreateAnimal( 'fish', 'non');

fish.say();
*/

/*
let animal ={
    say: function () {
        this.voice="kriak";
    },
    voice : "woof"
}

let cat ={
    __proto__:animal,
    voice : "miay"
}
cat.say();
console.log (cat.voice);
console.log (animal.voice);
*/


/*
class Animal {
    constructor(name, voice){
        this.name = name;
        this.voice = voice;
    }
    say(){
        console.log(this.name, "goes", this.voice);
    }
}

const dog = new Animal('dog', 'woof');



class Birds extends Animal{
    constructor(name, voice, canFly){
        super(name, voice);
        this.canFly = canFly
    }
}

const duck = new Birds('duck', 'kriak', true);


duck.say();

 */

String.prototype.show = function () {
    console.log(this);
}
let str = 'Hello';

str.show();

let mass = [1,8,5];
Array.prototype.sum = function (){
    console.log('1111');
    cont =0;
    for (let i=0; i<mass.length; i++){
        cont = cont + mass[i];
    }
    return cont;
}

mass.sum();