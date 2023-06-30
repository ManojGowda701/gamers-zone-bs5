let employee = {
    name:"Huccha Venkat",
    designation:"Software Enginner",
    des_short: "SE",
    salary: 300000,
}

switch(employee.des_short) {
    case "SE":
        employee.salary *= 1.5;
        console.log(employee.name + " revised salary is " + employee.salary);
        break;
    case "SSE":
        employee.salary *= 1.4;
        console.log(employee.name + " revised salary is " + employee.salary);
        break;
    case "TL":
        employee.salary *=1.25;
        console.log(employee.name + " revised salary is " + employee.salary);
        break;
    case "TL":
        employee.salary *=1.1;
        console.log(employee.name + " revised salary is " + employee.salary);
        break;
    default:
        console.log("No Hike");
    }