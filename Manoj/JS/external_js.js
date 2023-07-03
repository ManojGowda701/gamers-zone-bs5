console.log ("this is external js")
console.assert (4 > 3 , "wrong answer")
console.assert (20<15 , "wrong answer")

<<<<<<< HEAD
console.log("This is from external file")


setTimeout(() => {
    console.log(document.getElementById("fav_games"))
    console.log(document.getElementById("popular_games"))
    console.log(document.querySelector(".fav"))
    console.log(document.querySelectorAll(".card"))
    console.log(document.querySelectorAll(".fav"))
    console.log(document.querySelector(".card"))
    console.log(document.getElementsByClassName("popular_game"))
    console.log(document.getElementsByTagName("section"))

    document.getElementsByClassName("popular_game")[1].style.backgroundColor = "red"
    
    document.title = "ExcleR"

}, 1000)
=======
// console.log("This is from external file")


// setTimeout(() => {
//     console.log(document.getElementById("fav_games"))
//     console.log(document.getElementById("popular_games"))
//     console.log(document.querySelector(".fav"))
//     console.log(document.querySelectorAll(".card"))
//     console.log(document.querySelectorAll(".fav"))
//     console.log(document.querySelector(".card"))
//     console.log(document.getElementsByClassName("popular_game"))
//     console.log(document.getElementsByTagName("section"))

//     document.getElementsByClassName("popular_game")[1].style.backgroundColor = "red"
    
//     document.title = "ExcleR"

// }, 1000)
>>>>>>> ed3d880ffc6e9ed36bd8ff0ce83246be140af9e7




<<<<<<< HEAD


//Day3
=======
//DAY 2


// var name = "Manoj";
// var age = 22;
// var EligibilityForVoting = true ; // True or false
// var job = null;
// var designation;
// var company = Symbol ("ExcelR")
// console.log(name + " " + age + "voting eligibility " + EligibilityForVoting );
// console.log(job);
// console.log (company);
// console.log(designation);


// var a = 10;
// var b = 6;
// console.log(a + b)

// console.log(a - b)

// console.log(a * b)

// console.log(a / b)

function add() {
    var results = parseInt(document.getElementById("a").value) + parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;
}

function subtract() {
    var results = parseInt(document.getElementById("a").value) - parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;
}

function multiply() {
    var results = parseInt(document.getElementById("a").value) * parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;
}

function divide() {
    var results = parseInt(document.getElementById("a").value) / parseInt(document.getElementById("b").value);
    document.getElementById("results").innerHTML = results;
}


var college = {
    "name" : "Manoj",
    "courses" : ["CS","ME","EC", "EE"],
    "college" : "BNMIT",
    "area": "Banashankari"
}

function displayCollegeDetails() {
console.log(college)
}
displayCollegeDetails();
>>>>>>> ed3d880ffc6e9ed36bd8ff0ce83246be140af9e7
