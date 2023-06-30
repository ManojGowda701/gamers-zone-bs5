let user = {
    name: "Manoj",
    age: 22,
    place: "Bengaluru",
    citizenship: "Indian",
}

// if(user.age >=18) {
//     user.eligibleForVoting = true;


// }else {
//     user.eligibleForVoting = false;
// }

// console.log(user);
let eligible = (user.age >= 18 )? true: false
console.log(eligible)

