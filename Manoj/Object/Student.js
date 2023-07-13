// File: student.js
const Person = require('./Person');

class Student extends Person {
    constructor(name, age, university) {
        super(name, age);
        this.university = university;
    }

    study() {
        console.log(this.name + ' is studying at ' + this.university + '.');
    }
}


module.exports = Student;