document.title = "9-Class";

function Car0(name) {
    this.name = name
}
Car0.prototype.logName = function () {
    console.log(this.name)
}
let car0 = new Car0('Audi')
car0.logName();

class Car1 {
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
let car1 = new Car1('BMW')
// car.logName()
console.log(car1.logName === Car1.prototype.logName)
Car1.staticFunc()


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
        console.log('BMW name is: ', this.name)
    }
}
let bmw = new BMW('x6')
bmw.logName()


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' издает звук.');
    }
}
let animal = new Animal('testName');
animal.speak();
class Dog extends Animal {
    speak() {
        console.log(this.name + ' лает.');
    }
}
var d = new Dog('Митци');
d.speak();









