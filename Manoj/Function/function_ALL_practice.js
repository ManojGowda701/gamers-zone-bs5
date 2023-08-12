// Function Declaration
function declare_movie_list (first) {
    console.log(first)
}
declare_movie_list(["KGF", "Salar"]);

//Function Expresssion Anonymous
let students = function(marks) {
    for(let m of marks){
        console.log(m);
    }
    
} 
students([32,42,54]);

// Function Expression Named
let students = function subjects(marks) {
    for(let m of marks){
        console.log(m);
    }
    
} 
students([32,42,54]);

// Fat arrow function
const Movielist = (movies) => {
    
}