document.title = '4.0-prototype';
import 'babel-polyfill';
const person = {
    name: "Segey",
    age: 31,
    greet: function(){
        console.log('Greet!');
    }
};
person
Object.prototype.sayHello = function(){
    console.log('Hello!')
}
person.sayHello()

const lena = Object.create(persone);
lena
lena.greet();