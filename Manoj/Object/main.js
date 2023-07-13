// File: main.js
const Person = require('./Person');
const Student = require('./Student');

const person = new Person('Jay', 30);
person.greet(); // Output: Hello Jay

// Creating a new instance of Student
const student = new Student('Amit', 20, 'VTU University');

student.greet(); // Output: Hello Amit
student.study(); // Output: Amit is studying at VTU University.
