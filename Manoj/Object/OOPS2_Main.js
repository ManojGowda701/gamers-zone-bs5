// main.js
import Company from './OOPS2_1.js';
import Employee from './OOPS2_2.js';

const myEmployee = new Employee();

const company1 = new Company(
    'ExcleR',
    '2000',
    'Bangalore',
    'It is Fortune500 company',
    );
const company2 = new Company(
    'MS.co',
    '2012',
    'chennai',
    'It is not Fortune500 company',
    );

myEmployee.addWorker(company1);
myEmployee.addWorker(company2);

// console.log(myEmployee);

// myEmployee.displayDetails();

myEmployee.searchByName('x');
