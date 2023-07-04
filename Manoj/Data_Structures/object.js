// let employee = {
//     name: "Rakshith",
//     employee_id: 1,
//     reporters: [2 , 5 ,6],
//     designation: "Manager",
//     salary: 200000,
//     experience: 15,
// }

let employees = [
    {
    name: "Rakshith",
    employee_id: 1,
    reporters: [2 , 5 ,6],
    designation: "Manager",
    salary: 200000,
    experience: 15,
}, 
{
    name: "Sumanth",
    employee_id: 2,
    reporters: [3],
    designation: "TeamLead",
    salary: 150000,
    experience: 10,
},
{
    name: "Vikash",
    employee_id: 1,
    reporters: [],
    designation: "Software Engineer",
    salary: 100000,
    experience: 10,
},
{
    name: "Manoj",
    employee_id: 1,
    reporters: [],
    designation: "Software Engineer",
    salary: 100000,
    experience: 10,
},
{
    name: "Deepak",
    employee_id: 1,
    reporters: [],
    designation: "Software Engineer",
    salary: 100000,
    experience: 10,
},
{
    name: "Alayja",
    employee_id: 1,
    reporters: [],
    designation: "Software Engineer",
    salary: 100000,
    experience: 10,
}
]

for (let i=0 ; i < employees.length ; i++) {
    console.log(employees[i].name);
    console.log("No. of Reporters" , employees[i].reporters)
}

// for (let list in employees) {
//     console.log("Name="+ list.name);
// }

// for(let detail of employees) {
//     console.log("Name="+ detail.name);
// }




// let fruits = ["mango","jackfruit","orange"]
// for (let i=0 ; i<fruits.length ; i++) {
//     console.log(fruits[i]);
// }