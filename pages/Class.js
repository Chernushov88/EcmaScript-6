// function Car(name) {
//     this.name = name
// }
//
// Car.prototype.logName = function () {
//     console.log(this.name)
// }
//
// let car = new Car('Audi')
// car.logName();
/*
class Car {
    constructor (name){
        this.name = name
    }
    logName(){
        console.log(this.name)
    }
    static staticFunc() {
        console.log('I am static!')
    }
}
let car = new Car('BMW')
// car.logName()
console.log(car.logName() === Car.prototype.logName())
Car.staticFunc()
*/
class Car {
    constructor (name){
        console.log('Car constructor')
        this.name = name
    }
    logName(){
        console.log('Car name is: ', this.name)
    }
}
let car = new Car('Mersedes')
car.logName()

class BMW extends Car{
    constructor(name){
        super(name);
        console.log('BMW constructor')
    }
    logName(){
        super.logName()
        // console.log('BMW name is: ', this.name)
    }
}
let bmw = new BMW('x6')
bmw.logName()












