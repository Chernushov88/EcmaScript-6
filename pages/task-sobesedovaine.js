document.title = 'task-sobesedovaine';

let funtNumberOperation = (value) => {
    console.log(value)
    Number.prototype.plus = function (value) {
        console.log(value)
        return this + value;
    }

    Number.prototype.minus = function (value) {
        console.log(value)
        return this - value;
    }
}
console.log(funtNumberOperation(2));