// YOUR CODE BELOW

let name = 'Alec'

const getGreeting = function (){
    return `Hi, my name is ${this.name}.`
}

let me = {name, getGreeting}

// This is es6 shorthand for this:
// let me = {
//     name: name,
//     getGreeting: getGreeting
// }