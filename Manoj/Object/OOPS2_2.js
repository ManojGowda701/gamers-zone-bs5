// employee.js
class Employee {
    constructor() {
        this.employee_name = [];
    }
    addWorker(employee) {
        this.employee_name.push(employee);
    }
    
    displayDetails() {
        this.employee_name.forEach((employee) => {
            employee.displayInfo();
        });
    }
    
    searchByName(name) {
        const filteredNames = this.employee.filter((employee) =>
        employee.name.toLowerCase().includes(name.toLowerCase())
        );
    
        if (filteredNames.length === 0) {
            console.log('No company found with that name');}
            else {
                console.log(`Company found with the name' '${name}':`);
                filteredNames.forEach((employee) => {
                    employee.displayInfo();
                    
                });
            }
        }    
}



export default Employee;