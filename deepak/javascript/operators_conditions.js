let user={
    "name":"someone",
    "age":18
};

if(user.age >= 18){
    user.IsEligibleToVote=true;
}
else{
    user.IsEligibleToVote=false;
}

console.log(user);

let employee={
    "name":"Tom",
    "years_of_service":10
};

employee.getGratuity = (employee.years_of_service > 4.5)? true:false;

if(employee.getGratuity){
    employee.gratuityAmount = 10*12*2000;
}

///////////////////
//Best way to travel from Sarjapur to ORR office
var traffic = {
    varthur:false,
    panthur:true,
};

if(!traffic.varthur)
{
    if ( !traffic.panthur)
    {
        console.log("Going via panthur bridge");
    }
    else if(traffic.varthur_village)
    {
        console.log("Going via varthur lake");
    }
    else{
        console.log("Only god can save me");
    }
}
else
{
    console.log("Working from home");
}

