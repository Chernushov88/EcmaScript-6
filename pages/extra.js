export let name = "WFM";
export let age = 40;
export  function func() {
    console.log('I am func');
};
// export let func = ()=> {
//     console.log('I am func');
// };
export class Car {
    constructor() {
        console.log('Car constructor!');
    }
}
export default {
    privateVariable : 42,
    log() {
        console.log(this.privateVariable)
    },
    COLOR : '#bababa',

    compute(a, b) {
        return a + b
    }
}