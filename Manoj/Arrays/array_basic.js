let nums = [1, 2, 3, 4, 5];
console.log(nums);

let names = ['Manoj', 'Sumanth', 'Vikas'];
names.push('Deepak');
console.log(names); //Output : ['Manoj', 'Sumanth', 'Vikas', 'Deepak']

names.pop();
console.log(names); //Ouput : ['Manoj', 'Sumanth', 'Vikas']

names.shift();
console.log(names); //Output : ['Sumanth', 'Vikas']

names.unshift("Rakshith");
console.log(names); //Output : ['Rakshith', 'Sumanth', 'Vikas']

names.splice(0,2,"Lakshmikanth");
console.log(names); //Output : ['Lakshmikanth', 'Sumanth', 'Vikas']

names.splice(0,2,"Lakshmikanth");
console.log(names); //Output : ['Manoj', 'Vikas']


let subjects = ['Maths','Social','Science'];
subjects.push("English", 'Kananda');
console.log(subjects);  //Output : ['Maths', 'Social', 'Science', 'English', 'Kananda']

//-------------------------------------------------------------------------------------------------------

let num = [1, 2, 3, 4, 5];
let call_back = (accumulator, number) => {
    return accumulator + number ;
} 
let sum = num.reduce(call_back);
console.log(sum);   // using callback funtion outside and REDUCE ; Output: 15



let numbers = [1, 2, 3, 4, 5];
let cb2 = num => num % 2 === 0;
let first_even_number = numbers.find(cb2);
console.log(first_even_number); //using callback function outside and FIND ; Output: 2


