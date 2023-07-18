let {x, y, ...z} = {x:1, y:2, a:3, b:4};
console.log(x); // O/p : 1
console.log(y); //O/p : 2
console.log(z); //O/p : {a: 3, b: 4}
 //----------------------------------------------------------------------------------
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");
 
 