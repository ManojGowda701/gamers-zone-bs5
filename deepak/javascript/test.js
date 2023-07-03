var i = 0;
//while(i<10)
setTimeout(()=>
{
    console.log(document.getElementsByClassName(".card1"));
    console.log(document.getElementsByClassName(".card-title"));
    console.log(document.querySelectorAll(".card-title"));
    console.log(document.querySelector(".card-title"));
    document.title = "Title changed";
    document.querySelectorAll(".list-group-item")[2].style.background="red";

    
},
1000);

const employee ={
    "name":"Manoj",
    "empid":277777,
    "dept":"devops"
};

var company = {
    "name":"IBM",
    "Address":"Outer ring road Bengaluru Karnataka",
    "pincode":562107
};

let college = {
    "name":"JEC",
    "Address":"Jorhat Assam",
    "courses":{
        "branch1":"Electrical",
        "branch2":"Comp Science",
        "branch3":"Mechanical"
    }
};




