document.title = '3-paramets_default';
const func = ( a = 20, b = a + 50 ) =>{
    return a + b;
};

console.log(func(undefined,80));
console.log(func(80));
console.log(func());

const c = 90;
const func2 = ( a = 20, b = a + c ) => a + b;
console.log(func2(30));

const c2 = () => 200;
const func3 = ( a = 20, b = a + c2 ) => a + b;
console.log( func3(30) );