
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));  //Or console.log(sum(numbers[0],numbers[1],numbers[2]));
  // O/p :6
//---------------------------------------------------------------------------------------------------

let arr1 = ['one','two'];
let arr2 = [...arr1,'three','four','five'];
console.log(arr2);      // O/p :  ['one', 'two', 'three', 'four', 'five']

//----------------------------------------------------------------------------------------------------