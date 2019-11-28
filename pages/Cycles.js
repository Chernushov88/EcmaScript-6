const array = [1,2,3,4,5,6];

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

console.log('-------------------')

array.forEach(function(item){
    console.log(item)
})
console.log('<hr>')
for (let item of array){
    console.log('item ', item)
}
console.log('<hr>')