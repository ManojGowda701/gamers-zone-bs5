// function say(message) {
//     console.log(message);
//     return message;
// }

// let result = say('Hello');
// console.log('Result:', result);

//O/p:  Hello
        // Result: Hello

//-------------------------------------------------------------------------------------------------------

// function compare(a, b) {
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1;
//     }
//     return 0;
// }
// let res = compare(1,2);
// console.log(res);
//O/p: 1

//-------------------------------------------------------------------------------------------------------

// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(add(1, 2)); // 3
// console.log(add(1, 2, 3, 4, 5)); // 15

//----------------------------------------------------------------------------------------------------

// function greet(name, designation) {
//     console.log("Hello," + name + "design" + designation)
// }

// greet("Manoj","Director")
// greet("Deepak","VP")
// greet("Sumanth","Engineer")

//---------------------------------------------------------------------------------------------------

// function greet(name, designation) {
//     console.log("Hello," + name + "design" + designation)
// }

// greet("Manoj","Director")
// greet("Deepak","VP")
// greet("Sumanth","Engineer")

// const greet2 = function (name,designation) {
//     console.log("welcome" + name + "designation" + designation)
// }

//---------------------------------------------------------------------------------------------------

//Anonymous Function
// (function(a,b,c) {
//     console.log(a + b + c);
// }) (2,4,5)

//Function with Function Name
// (function addSum3(a,b,c){
//     console.log(a+b+c);
// })(2,34,6)

//-----------------------------------------------------------------------------------------------------


//IIFEE imp imp (explained by sir accurately)
let gamers =["Manoj", "Sumanth" , "Rakshith", "Vikash" , "Deepak"];

(function(arr,temp_gamers){                                 //1
    var stream = {
        name: "Mr.Lakshmikanth",
        college: "SKCH PU College",
        combination: "PCME",
        print_games: function(games){
            console.log(this.name+ "is trainer for" + " " + games)
        },
        streams_list: function (new_arr) {                  
            for (let i=0 ; i<new_arr.length ; i++){
                console.log(new_arr[i]);
            }
            console.log(this.college , "has Streams are" + " " + this.combination)
        }
    };
    stream.streams_list(arr);  //calling the streams_list Method ; 
    stream.print_games(temp_gamers) //calling the print_games Method
})(["S1","S2"],gamers);

//-----------------------------------------------------------------------------------------------------
//function examples
function greet(name, designation) {
    console.log("welcome " + name + " designation " + designation)
}

greet("Lakshmikant", "Director")
greet("Deepak", "VP")
greet("Manoj", "Engineer")

//--------------------------------------------------------------------------------------------------------
// Function Expression
const greet2 = function (name, designation) {
    console.log("welcome " + name + " designation " + designation)
}

greet2("Sumanth", "Engineer")

//--------------------------------------------------------------------------------------------------------

// Function Expression
const add = function (a, b) {
    return a + b
}

console.log(add(4, 5))
console.log(add(6, 9))

//--------------------------------------------------------------------------------------------------------

// function declaration
function sub(a, b) {
    return a - b;
}

console.log(sub(6, 2))

//--------------------------------------------------------------------------------------------------------

// arrow functions
const multiply = (x, y, z) => {
    return x * y * z;
}
console.log(multiply(3, 4, 5))

//--------------------------------------------------------------------------------------------------------

//FUNCTION HOISTING
//In JavaScript, you can use a function before declaring it. For example:
// showMe(); // a hoisting example

// function showMe(){
//     console.log('an hoisting example');
// }
