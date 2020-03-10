document.title = "14-generator";
/*function* gen() {
    yield 11
    yield 22
    yield 33
}
let iter = gen();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

function* g1() {
    yield 1
    yield* g2()
    yield 4
}
function* g2() {
    yield 2
    yield 3
}
let iter2 = g1()
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
*/
function* g() {
    yield* [1,2,3,4,5]
}
let iter = g()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

function* getRange(start = 0, end = 100, step = 10) {
    // while (start < end) {
    //     yield start
    //     start += step
    // }
    for (start = start; start < end; start += step){
        yield start
    }
}
for (let n of getRange(10, 50, 5)){
    console.log(n)
}



let fib = {
    *[Symbol.iterator]() {
        let cur = 1, pre = 0;
        for (;;) {
            [pre, cur] = [cur, cur + pre];
            yield cur;
        }
    }
};


for (let n of fib) {
    if (n > 3000) break;
    console.log(n);
}
