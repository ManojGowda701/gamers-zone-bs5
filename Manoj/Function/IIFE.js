//Immediately Invoked Function Expression

//SYNTAX
// (function () {
//     function body;
// })()

//OR

// (function functionname() {
//     function body;
// })()

// (function (a,b,c){
//    console.log(a + b + c);
// })(1,2,3)



// (function multiply(a,b,c){
//     console.log(a * b * c);
//  })(1,2,4)



(function (){
    let game_details = {
        name: "Valorant",
        popularity: "#Top1",
        total_users: 2000000,
        description: function (){
            console.log("Welcome to the game called" + " " + this.name , "having" , this.total_users , "users");
        }
    };
    game_details.description();   //Invoking/calling the description method
})()
