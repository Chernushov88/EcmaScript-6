document.title = '4.0-prototype';
//import 'babel-polyfill';
const person = {
    name: "Segey",
    age: 31,
    greet: function(){
        console.log('Greet!');
    }
};
console.log(person)
Object.prototype.sayHello = function(){
    console.log('Hello!')
}
person.sayHello()

var lena = Object.create(person);
console.log(lena)
lena.greet();