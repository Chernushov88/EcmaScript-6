document.title = "6-RestSpread";
function logStrings(num, first, ...args) {
    // var args = Array.prototype.slice.call(arguments)
    console.log(num, first, args)
}
logStrings(20, "WFM", "WFM2", "WFM3", "WFM4", "WFM5")


function logStringsNew(num, ...args) {
    console.log(num, args)
}
let spreadArray = ["WFM", "WFM2", "WFM3", "WFM4", "WFM5"]
logStringsNew(20, ...spreadArray)

function foo(...args) {
    return arguments;
}
console.log(foo(1, 2, 3)); // { "0": 1, "1": 2, "2": 3 }

function sum0(x, y, z) {
    console.log(x, y, z)
    return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum0(...numbers));
// expected output: 6
console.log(sum0.apply(null, numbers));
// expected output: 6


var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);
arr.push(9);
arr.push(12);
console.log(arr)
// получить максимум из элементов arr
/*console.log( Math.max.apply(null, arr) );
console.log( Math.max( ...arr) );
console.log( Math.min.apply(null, arr) );*/
/* aply()*/
/* TASK - 1 */
console.log(`--------- sumArgs --------`)
function sumArgs() {
    // скопируем reduce из массива
    arguments.reduce = [].reduce;
    console.log('arguments',arguments);
    return arguments.reduce(function(a, b) {
        return a + b;
    });
}
console.log( sumArgs(1,2,3,4,5) ); // 15
console.log(`--------- sumArgs2 --------`)
function sumArgs2() {
    // запустим reduce из массива напрямую
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}
console.log( sumArgs2(4, 5, 6) ); // 15
/* TASK - 2 */
function sum(...arg) {
    console.log('arguments', arguments)
    console.log('arg', arg.reduce((a, b) => a + b))
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}
function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}
console.log(`--------- sum() mul() applyAll() --------`)
console.log( applyAll(sum, 1, 2, 3) ); // 6
console.log( applyAll(mul, 2, 3, 4) ); // 24
console.log( applyAll(Math.max, 2, -2, 3) ); // 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2

