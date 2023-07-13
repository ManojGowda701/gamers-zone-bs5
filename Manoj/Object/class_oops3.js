const Company = require('./class_oops1');
const Employee = require('./class_oops2');

const company = new Company('ExcleR', 2000)
company.start();

const employee = new Employee('ExcleR','Manoj', 23);

employee.man();
employee.start();