class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello ' + this.name);
    }
}

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function greet() {
//         console.log('Hello ' + this.name);
//     }
// }
// Person.prototype.greet = function () {
//     console.log('Hello ' + this.name);
// }

// let p = new Person("Sumanth", 22)
module.exports = Person;