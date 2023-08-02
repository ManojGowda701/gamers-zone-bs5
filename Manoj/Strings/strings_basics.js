let game1 = "Call of Duty";
// console.log(game1.length); //12
// console.log(game1[0]); //C
// console.log(game1[game1.length - 1])  //y


//-----------------------------------------------------------------------------------------------------------------


// console.log(game1.charAt());  //C coz default takes index as 0
// console.log(game1.charAt(0));  //C
// console.log(game1.charAt(1));  //a
// console.log(game1.charAt(3));  //l


let game2 = "Assassin's Creed";


let game3 = `Final Fantasy`;


// //The concat() method concatenates the string arguments to the calling string and returns a new string.
// console.log(game1.concat(game2));   //Call of DutyAssassin's Creed
// console.log(game1.concat(' ',game2));   //Call of Duty Assassin's Creed
// console.log(game1.concat(' ', game2, ' ', game3));   //Call of Duty Assassin's Creed Final Fantasy
// console.log(game1.concat(game2,game3));  //Call of DutyAssassin's CreedFinal Fantasy

//----------------------------------------------------------------------------------------------------------------

// let res = `games are = ${game1} , ${game2}, ${game3}`;
// console.log(res)

// let multi_line_str = `
// This is multi line Str
// Check it out                     //Doesn't work with "" & ''
// `;
// console.log(multi_line_str);

//---------------------------------------------------------------------------------------------------------------
// A.
// let username = "Gamer1";

// // Check minimum length
// if (username.length < 6) {
//     console.log("Username must be at least 6 characters long.");
// } else {
//     console.log("Username doesn't have minimum length");
// }

// // Check if username contains special characters
// if (username.match(/[!@#$%^&*(),.?":{}|<>]/)) {
//     console.log("Username cannot contain special characters.");
// } else {
//     console.log("Username doesnt match the given characters");
// }

// // Check uniqueness
// let isUnique = checkUsernameUniqueness(username); // Write a method to check
// if (!isUnique) {
//     console.log("Username is already taken.");
// } else {
//     console.log("Username is unique");
// }

//---------------------------------------------------------------------------------------------------------------

// // B. Game search
// let games = ["Assassin's Creed", "Call of Duty", "The Legend of Zelda", "Final Fantasy"];

// let searchQuery = "legend";

// let searchResults = games.filter(game => game.toLowerCase().includes(searchQuery.toLowerCase()));

// console.log(searchResults);
// // Output: ["The Legend of Zelda"]

//---------------------------------------------------------------------------------------------------------------

// // C. Chat Filtering
// let message = 'Hey, this game is awesome! You should try it out!';

// let bannedWords = ['awesome', 'try'];

// let isClean = !bannedWords.some(word => message.toLowerCase().includes(word));

// if (isClean) {
//     console.log('Message is clean and can be sent.');
// } else {
//     console.log('Message contains banned words and cannot be sent.');
// }

//---------------------------------------------------------------------------------------------------------------

// // D. String Formatting

// let score = 2350;
// let formattedScore = score.toLocaleString();

// console.log(`Your score: ${formattedScore}`);
// // Output: Your score: 2,350

//---------------------------------------------------------------------------------------------------------------

// // E. Password Encryption
// const bcrypt = require('bcrypt');

// let password = 'mypassword';
// let saltRounds = 10;

// bcrypt.hash(password, saltRounds, function (err, hash) {
//     // Store the hash in the database
//     console.log('Hashed password:', hash);
// });

// // Later, when verifying the password
// let hashedPassword = '...'; // Retrieved from the database
// bcrypt.compare(password, hashedPassword, function (err, result) {
//     if (result) {
//         console.log('Password matches.');
//     } else {
//         console.log('Password does not match.');
//     }
// });


//-----------------------------------------------------------------------------------------------------------------

// const str = "To be, or not to be, that is the question.";

// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be")); // false
// console.log(str.endsWith("to be", 19)); // true

//-------------------------------------------------------------------------------------------------------------------------

//The includes() method performs a case-sensitive search to determine whether one string may be found 
//within another string, returning true or false as appropriate.

// const str = "To be, or not to be, that is the question.";

// console.log(str.includes("To be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
// console.log(str.includes("To be", 1)); // false
// console.log(str.includes("TO BE")); // false
// console.log(str.includes("")); // true


// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);  // // 'The word "fox" is in the sentence'


//------------------------------------------------------------------------------------------------------

//The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.

// const str = "Brave new world";

// console.log(str.indexOf("w")); // 8
// console.log(str.indexOf("new")); // 6



// const myString = "brie, pepper jack, cheddar";
// const myCapString = "Brie, Pepper Jack, Cheddar";

// console.log(myString.indexOf("cheddar")); // 19
// console.log(myCapString.indexOf("cheddar")); // -1

//--------------------------------------------------------------------------------------------------------------------------

// "canal".lastIndexOf("a"); // returns 3
// "canal".lastIndexOf("a", 2); // returns 1
// "canal".lastIndexOf("a", 0); // returns -1
// "canal".lastIndexOf("x"); // returns -1
// "canal".lastIndexOf("c", -5); // returns 0
// "canal".lastIndexOf("c", 0); // returns 0
// "canal".lastIndexOf(""); // returns 5
// "canal".lastIndexOf("", 2); // returns 2


// "Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1


// const anyString = "Brave, Brave New World";

// console.log(anyString.indexOf("Brave")); // 0
// console.log(anyString.lastIndexOf("Brave")); // 7

//---------------------------------------------------------------------------------------------------------

// "abc".padEnd(10); // "abc       "
// "abc".padEnd(10, "foo"); // "abcfoofoof"
// "abc".padEnd(6, "123456"); // "abc123"
// "abc".padEnd(1); // "abc"

//-------------------------------------------------------------------------------------------------------

// "abc".padStart(10); // "       abc"
// "abc".padStart(10, "foo"); // "foofoofabc"
// "abc".padStart(6, "123465"); // "123abc"
// "abc".padStart(8, "0"); // "00000abc"
// "abc".padStart(1); // "abc"

//-------------------------------------------------------------------------------------------------------

// "abc".repeat(-1); // RangeError
// "abc".repeat(0); // ''
// "abc".repeat(1); // 'abc'
// "abc".repeat(2); // 'abcabc'
// "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1 / 0); // RangeError

// ({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// // 'abcabc' (repeat() is a generic method)


// const mood = 'Happy! ';
// console.log(`I feel ${mood.repeat(3)}`);    // "I feel Happy! Happy! Happy! "

//-------------------------------------------------------------------------------------------------------

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replace('dog', 'monkey'));  //"The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

//-------------------------------------------------------------------------------------------------------

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replaceAll('dog', 'monkey'));   //"The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

//-------------------------------------------------------------------------------------------------------

//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

// const str1 = "The morning is upon us."; // The length of str1 is 23.
// const str2 = str1.slice(1, 8);
// const str3 = str1.slice(4, -2);
// const str4 = str1.slice(12);
// const str5 = str1.slice(30);
// console.log(str2); // he morn
// console.log(str3); // morning is upon u
// console.log(str4); // is upon us.
// console.log(str5); // ""

//--------------------------------------------------------------------------------------------------------------

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);     //"fox"

// const chars = str.split('');
// console.log(chars[8]);  //"k"

// const strCopy = str.split();
// console.log(strCopy);    //Array ["The quick brown fox jumps over the lazy dog."]

//--------------------------------------------------------------------------------------------------------------

// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat')); //true

// console.log(str1.startsWith('Sat', 3)); //false

// const str = "To be, or not to be, that is the question.";

// console.log(str.startsWith("To be")); // true
// console.log(str.startsWith("not to be")); // false
// console.log(str.startsWith("not to be", 10)); // true

//--------------------------------------------------------------------------------------------------------------

// const x = new String("Hello world");
// console.log(x.valueOf()); // 'Hello world'

//-----------------------------------------------------------------------------------------------------------------------

// const str = "   foo  ";
// console.log(str.trim()); // 'foo'

//-----------------------------------------------------------------------------------------------------------------------


