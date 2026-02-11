/*
const my_const = 1;
my_const = 2;
 */
document.title = 'web-dev tasks';

const toInitial = name => name.split(' ').map(el => `${el.slice(0,1).toUpperCase()}.`).join('')

console.log(toInitial('Bill GAtes'))
console.log(toInitial('ellon mask'))


const sumDigits = number => Math.abs(number).toString().split('').reduce((sum, cur) => +sum + +cur, 0)


console.log(sumDigits(99))
console.log(sumDigits(-32))


const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]

console.log(minMax([2,9,10,25,47,1]))
console.log(minMax([2,1]))
console.log(minMax([1]))
