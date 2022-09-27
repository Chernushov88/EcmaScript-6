document.title = "10-SetWeakSet";
/*
let set = new Set();
console.log(set.size)
set.add(10);
set.add('Hello');
set.add({});
set.add(10);
console.log(set.size)
console.log(set)
let set2 = new Set([1,2,3,3,4,4,5,3]);
console.log(set2.size)
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
/*
let set = new Set()
let key = {}
set.add(key)
console.log(set)
console.log(set.size)
key = null;
console.log(set.size)
*/
/**/
let node = document.querySelector('#node');
let setNode = new Set().add(node);
console.log(setNode.size)
console.log(setNode.has(node))
console.log('setNode', setNode)
