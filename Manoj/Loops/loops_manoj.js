//FOR Loop
// print nos. that is multiple of 3 AND 5
// for (let i=1 ; i < 50 ; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//     console.log(i)
// }
// }

//FOR Loop
//for even nos.
// for (let i=1 ; i <=50 ; i++) {
//     if(i % 2 == 0 ) {
//         console.log(i)
//     }
// }

//FOR Loop
// for odd nos.
// for (let i=1 ; i <=50 ; i++) {
//     if(i % 2 == 1 ) {
//         console.log(i)
//     }
// }

//WHILE loop
// let i = 0;
// while (i < 10 ) {
//     if (i % 2 == 0 ) console.log(i);
//     i++;
// }

//PROMPT-using-WHILE only when number 10 is entered and any number below it will repeat the iteration 
// let input = 0 ;
// while (input != 10) {
//     input = parseInt(prompt("Enter a number"))
// }

//do-while loop : prints nos from 0 to 9
// let i=0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10); 


// let sum = 0;
// let n = 1;
//  let input = 4;
//  do {
//     sum += n++;
//  } while (n<=10);

//Factorial of 6 is 720
// let n = 6 ;
//  let product = 1;
//  do {
//     product = product * n ;
//     n = n-1;
//  } while (n >= 1);
//  console.log(product)


//FOR-IN Loop is used for ONLY FOR OBJECT
let gamer = {
    "name" : "manoj",
    "id" : 1,
    "age" : 23,
    "fav_games" : ["pubg","valorant","COD"]
}

for (let key_temp in gamer) {
    console.log(key_temp)
}

for (let key in gamer) {
    console.log(gamer[key])
}

//FOR-OF Loop is used for ONLY ARRAY or STRING
let game2 = {
    "name" : "manoj",
    "id" : 1,
    "age" : 23,
    "fav_games" : ["pubg","valorant","COD"]
}




