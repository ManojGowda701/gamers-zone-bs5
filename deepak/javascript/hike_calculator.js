var emp = [
    {
    name:"tom",
    designation:"TL",
    rating:"EP",
    salary:2500000
    },
    {
        name:"harry",
        designation:"SSE",
        rating:"GP",
        salary:2000000
    },
    {
        name:"john",
        designation:"SE",
        rating:"DP",
        salary:1500000
    },
];


//calculate hike %age
for (let i = 0; i < 3; i++) {
switch(emp[i].rating){
    case "DP":
        emp[i].salary*=1.15;
        break;
    case "EP":
        emp[i].salary*=1.10;
        break;
    case "GP":
        emp[i].salary*=1.07;
        break;
    default:
        emp[i].salary*=1.03;
}
}

for (let i = 0; i < 3; i++) {
    console.log(emp[i].name + " new salary after increment is " + emp[i].salary);
}