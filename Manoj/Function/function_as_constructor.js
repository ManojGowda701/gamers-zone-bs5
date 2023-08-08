// Function as Constructor
// function Gamerzone(){               //'this' should always be used to add the property to instance(object)
//     this.name = "Manoj";
//     this.playgame = function () {        //Instance is an object with properties attached with 'this' keyword
//         console.log("Welcome" + " " + this.name +" "+ "into" + " " + this.game_name + " " + "game");   // So GameInst Instance(object) has 3 properties
//     }
//     this.game_name = "Call of Duty";        
// }
// var GameInst = new Gamerzone();     //Creating Instance(object) of Gamerzone using constructor
// GameInst.playgame();                //Invoking playgame function ie a property of GameInst instance(object)
//                                     //Constructor means used to create Instance or object

//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//PROTOTYPE INHERITANCE
function Player(fname , lname){
    this.fname = fname;
    this.lname = lname;
    this.graduation = "Engineering";
    this.details = function desc() {
        return "He is a Good Boy"
    };
}

let a = new Player("MANOJ","GOWDA");
let b = new Player("SUMANTH", "GOWDA");
// console.log(a);
// console.log(b);
Player.prototype.getFullname = function () {
    return this.fname + " " + this.lname;
}
console.log(a.getFullname())
console.log(a.details())
console.log(b.getFullname())

