document.title = "8-Cycles";
const array = [1,2,3,4,5,6];

for (let i = 0; i < array.length; i++){
    console.log('old for '+array[i])
}

console.log('-------------------')

array.forEach(function(item){
    console.log('forEach ',item)
})
console.log('<hr>')
for (let item of array){
    console.log('item ', item)
}
console.log('<hr>')


for (var item of "ABCDEFG"){
    console.log('item ', item)
}

/****************************
 * https://learn.javascript.ru/while-for
******************************/

let sum = 0;
while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break; // (*)
    sum += value;
}
alert( 'Сумма: ' + sum );
