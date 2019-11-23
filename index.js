/*
const my_const = 1;
my_const = 2;
 */
for (var a=0; a<10; a++){
    setTimeout(function() {
        a = a-1;
        console.log(a);
    }, 1000)
}
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        i = i-1;
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

for (let j=0; j<10; j++){
    setTimeout(function() {
        console.log(j);
    }, 3000)
}