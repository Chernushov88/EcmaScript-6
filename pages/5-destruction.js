document.title = "5-destruction"
/*let obj = {
    name: "WFM 3",
    age: 40,
    color: 'color'
};
let {name:n, age: a} = obj;
console.log(n, a);

let array = ["WFM", 40, 'blue'];
console.log(array);
let name = array[0];
let age = array[1];
let color = array[2];
console.log(color);
let [name2, age2, color2] = array;
console.log(name2, age2, color2);

let array2 = ["WFM", 40];
console.log(array2);
let [, , color3="red"] = array2;
console.log(color3);
console.log(array2);
*/
/*****************************
 https://learn.javascript.ru/destructuring-assignment
*****************************/
/*let user = {};
console.log("Ilya Kantor".split(' '));
console.log(user);
[user.name, user.surname] = "Ilya Kantor".split(' ');
console.log(user);
console.log(user.name); // Ilya
//Цикл с .entries()
let user2 = {

    name: "Serhii",
    age: 33,
    name2: "John",
    age2: 30,
};
// цикл по ключам и значениям
console.log("цикл по ключам и значениям");
for (let [key, value] of Object.entries(user2)) {
    console.log(`${key} of ${value}`); // name:John, then age:30
}
for (let key in user2){
    console.log(`${key} in ${user2[key]}`);
}
let user3s = new Map();
user3s.set("name", "John");
user3s.set("age", "30");

for (let [key, value] of user3s) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

*/


/*
let options = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = свойство с именем title
// rest = объект с остальными свойствами
let {title, ...rest} = options;

// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
alert(title);   // 100
*/
/*
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};
function showMenu({
                      title = "Untitled",
                      width: w = 100,  // width присваиваем в w
                      height: h = 200, // height присваиваем в h
                      items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
                  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
}
showMenu(options);
*/
/********************************
 Задачи tasks
******************************** */
//Tasks1

let userTasks1 = {
    name: "John",
    years: 30
};
let {name, years: age, isAdmin = false} = userTasks1;
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
//Tasks1
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(arr){
    let max = 0;
    let maxName = null;
    for (let key in arr){
        if (max < arr[key]){
            max = arr[key];
            maxName = key;
        }
    }
    return {maxName, max};
}
console.log('topSalary', topSalary(salaries));
/**/