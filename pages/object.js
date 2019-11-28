// const name = "WFM"
// const age = 40
// const obj = {name, age}
// console.log(obj)

// const createPerson = (name, surname) => {
//     const fullname = name + ' ' + surname;
//     return {fullname, name, surname}
// }
// console.log(createPerson('WFM', 'WFM2'))

const createPerson = (name, surname, fieldName) => {
    const fullname = name + ' ' + surname;
    const persone = {
        fullname,
        name,
        surname,
        getJob(){
            return 'Front end-1'
        }
    }
    persone[fieldName] = 50
    return persone
}
const person = createPerson('WFM', 'WFM2', 'age');
console.log(person)