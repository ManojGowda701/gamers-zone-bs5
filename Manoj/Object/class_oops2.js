//File: Employee
const Employee = require('./class_oops1');

class Employee extends Company {
    constructor(name,est_yr,employee_name,age){
        super(name,est_yr);
        this.employee_name = employee_name;
        this.age = age;
    }

    man() {
        console.log(this.name + "has an employee by the name" + this.employee_name + "who is" + this.age + "of age.")
    }
}

module.exports = Employee;