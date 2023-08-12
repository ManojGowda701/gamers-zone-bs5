//Callback Function
// function myfirst(cb){
//     cb();
// }
// myfirst(mysecond);

// function mysecond(){
//     console.log("This is MY2nd");
// }


//-------------------------------------------------------------------------------------------------------------
//Callback Function using Function expression
// function myfirst(cb){
//     cb();
// }


// let f = function mysecond(){
//     console.log("This is MY2nd");
// }

// myfirst(f);            //Hoisting is taken into account

//-------------------------------------------------------------------------------------------------
//Callback Function using Arrow Function
function myfirst(cb){
    cb();
}

var f = () => {
    console.log("This is MY2nd");
}
myfirst(f);       //Hoisting is taken into account

//--------------------------------------------------------------------------------------------------------


