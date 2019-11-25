/*
let set = new Set();
set.add(10);
set.add('Hello');
set.add({});
set.add(10);
console.log(set.size)
console.log(set)
let set = new Set([1,2,3,3,4,4,5,3]);
console.log(set.size)
*/

/*
let set = new Set().add(2).add(3).add(4).add(5)
console.log('set size ', set.size)
console.log('set has ', set.has(3))
console.log('set delete ', set.delete(3))
console.log('set size ', set.size)
console.log('set has ', set.has(3))
console.log('set clear ', set.clear())
console.log('set size ', set.size)
 */

/*let set = new Set()
let key = {}
set.add(key)
console.log(set.size)
key = null;
console.log(set.size)*/

let set = new WeakSet()
let key = {}
set.add(key)
console.log(set.size)
key = null;
console.log(set.size)