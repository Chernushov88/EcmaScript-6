document.title = '4-object';
const name = "WFM"
const age = 40
const obj = {name, age}
console.log(obj)

const createPerson0 = (name, surname) => {
    const fullname = name + ' ' + surname;
    return {fullname, name, surname}
}
console.log(createPerson0('WFM', 'WFM2'))

const createPerson = (name, surname, fieldName) => {
    const fullname = name + ' ' + surname;
    const persone = {
        fullname,
        name,
        surname,
        getJob(){
            return 'Front end-1'
        }
    };
    persone[fieldName] = 50;

    return persone
}

const person = createPerson('WFM', 'WFM2', 'age');
console.log(person)
console.log(typeof createPerson0);
console.log(createPerson('WFM', 'WFM2', 'age'))

// var node = document.querySelector('#node a');
// var linkGoogle = document.createElement('a');
// linkGoogle.href = 'https://www.google.com/';
// linkGoogle.title = 'это ссылка';
// linkGoogle.appendChild(document.createTextNode('ссылка'));
// node.appendChild(linkGoogle);

/*
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
let user2 = [1,2,3,,,4,5,6]
for (let key in user) {
    // ключи
    console.log( key );  // name, age, isAdmin
    // значения ключей
    console.log( user[key] ); // John, 30, true
}
for (let key of user2) {
    console.log( key );
}


let user3 = { name: 'John' };
let admin = user3;
console.log(admin.name);
user3.name = 'John2';
console.log(admin.name);
admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
console.log(admin.name); // 'Pete', изменения видны по ссылке из переменной "user"
*/
//1
let user0 = {};
user0.name = "John";
user0.surname = "Smith";
user0.name = "Pete";
delete user0.name;
//2
function isEmpty(objec){
    for (proper in objec) {
        return false
    }
    return true
}
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false
//4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);
//5

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);


function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}