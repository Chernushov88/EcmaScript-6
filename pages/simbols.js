/*let s = Symbol('WFM')
let s2 = Symbol('1');
let s3 = Symbol('1');
console.log(s2 === s3)*/

/*let s = Symbol('field')
let s1 = Symbol('field')

let obj = {
    age: 20,
    [s]: 'WFM'
}
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))*/

/*let num = 1
let str = '2'
let arr = [1,2,3,4,5]
let obj = {
    name: 'WFM',
    age: 20
}

console.log('Number: ', typeof num[Symbol.iterator])
console.log('String: ', typeof str[Symbol.iterator])
console.log('Array: ', typeof arr[Symbol.iterator])
console.log('Object: ', typeof obj[Symbol.iterator])*/

/*function createIterator(arr) {
    let count = 0
    return {
        next() {
            return count < arr.length
                ? {value: arr[count++], done: false}
                : {value: undefined, done: true}
        }
    }
}
let item = createIterator([1,2,3,4])
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())
console.log(item.next())
*/


let fib = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {value: cur, done: false};
            }
        }
    }
};

for (let n of fib) {
    if (n > 1500) break;
    console.log(n);
}