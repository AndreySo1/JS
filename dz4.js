function CreateCar(car) {
    marka= car;
    color= "black";
    koleso= 4;
    console.log("Бибип "+ marka + " едет");
}
console.log(new CreateCar("мерседес"));
console.log( zhiga = new CreateCar("жига"));
console.log(new CreateCar("вольксваген"));

zhiga.koleso=3;
console.log("колес у Жиги: " +zhiga.koleso);