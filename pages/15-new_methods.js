document.title = "15-new_methods";
let obj1 = {a: 1}
let obj2 = {b: 2, c: 3}
let obj3 = Object.assign({d: 4}, obj1, obj2)
let obj4 = {a1: 1}
let obj5 = {b1: 2, c1: 3}
let obj6 = Object.assign({}, obj3,obj4, obj5)
//Object.assign( obj4, obj5)

console.log('Oobj1', obj1)
console.log('Oobj2', obj2)
console.log('Oobj3', obj3)
console.log('Oobj4', obj4)
console.log('Oobj5', obj5)
console.log('Oobj6', obj6)



let findedItem = [0,1,2,3,4,5,6].find(x => x > 3)
console.log(findedItem)

let str = 'Hello!'

console.log('Repeat: ', str.repeat(3))
console.log('startsWith: ', str.startsWith('el', 1))
console.log('startsWith: ', str.startsWith('Hel'))
console.log('includes: ', str.includes('llo'))
console.log('includes: ', str.includes('llo', 3))