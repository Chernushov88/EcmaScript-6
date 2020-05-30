document.title = "11-Map-end-WeakMap";
/*
let map = new Map();

map.set('name', "WFM");
map.set('age', 20);

let obj1 = {'obj1': 10}
let obj2 = {}
let obj3 = {}

map.set(obj1, 11)
map.set(obj2, 50)
map.set(obj3, 150)
console.log('map', map);
console.log('size', map.size);
console.log('Has', map.has(obj2));
console.log('delete', map.delete(obj2));
console.log('Has', map.has(obj2));
console.log('size', map.size);

*/

let map = new Map([
    ['name', "WFM"],
    ['age', 20]
]);
 console.log(map)
console.log('values - ', map.values());
for (let val of map.values()){
    console.log('values: ', val)
}
console.log('keys - ', map.keys());
for (let key of map.keys()){
    console.log('keys: ', key)
}
console.log('entries - ', map.entries());
for (let entr of map.entries()){
    console.log(`${entr[0]} - ${entr[1]}`)
}

let map2 = new WeakMap();
//let key = {}
let key = {name2: "test"}

// map2.set('key', key)
map2.set(key, "key")
console.log('size: ', map2.size)
// key = null
console.log('size: ', map2.size)

