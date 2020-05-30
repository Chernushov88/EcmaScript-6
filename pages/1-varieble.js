/*
const my_const = 1;
my_const = 2;
 */
document.title = '1-varievle';
for (var a=0; a<10; a++){
    // console.log(a);
    setTimeout(function() {
        //a = a - 1;
        a = --a;
        console.log('setTimeout - ', a);
    }, 1000)
}
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        i = i-1;
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 2000);
}
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 4000);
}
for (let j=0; j<10; j++){
    setTimeout(function() {
        console.log(j);
    }, 3000)
}

let aNew = 'global';
function outer() {
    let b = 'outer';
    function inner() {
        let c = 'inner'
        console.log(c);   // выдаст 'inner'
        console.log(b);   // выдаст 'outer'
        console.log(aNew);   // выдаст 'global'
    }
    console.log(aNew);     // выдаст 'global'
    console.log(b);     // выдаст 'outer'
    inner();
}
outer();
console.log(aNew);         // выдаст 'global'
