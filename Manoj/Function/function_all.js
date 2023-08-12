// Function Declaration

function bookCab(from, to) {
    console.log("You have booked cab from " + from + " to " + to)
}

bookCab("Indiranagar", "Koramangala");

// Function Expression Anonymous
let foodOrder = function (list) {
    console.log("You have ordered below food items");
    for (item of list) console.log(item)
}

// foodOrder(["Daal", "Roti", "Ghee Rice"])

// Function Expression Named

let buyMovieTicket = function buyTicket(movieDetail) {
    for (let prop in movieDetail) {
        console.log(prop + " : " + movieDetail[prop])
    }
}

// buyMovieTicket({ name: "KGF", timing: "9:30pm", price: 200, count: 2 })

// Fat arrow function
const getCourses = (courses) => {
    for (let course of courses) {
        let temp = ""
        for (let type in course) {
            temp += course[type] + " ";
        }
        console.log(temp)
    }
}

// getCourses([
//     { name: "Java", "duration": "6 months" },
//     { name: "Javascript", "duration": "2 months" },
//     { name: "ReactJS", "duration": "2 months" },
//     { name: "HTML", "duration": "1 month" }
// ])

const gamersZone = {
    name: "Gamers Zone",
    playGame: function () {
        console.log("Welcome to " + this.name + "!");

    }
};
// gamersZone.playGame(); // Calling the playGame method


// Function as a Constructor

function Articles(author_name, date, publisher) {
    this.author_name = author_name;
    this.date = date;
    this.publisher = publisher;
}

let art1 = new Articles("Sumanth", new Date(), "ExcelR")
let art2 = new Articles("Manoj", new Date(), "ExcelR")
let art3 = new Articles("Rakshit", new Date(), "ExcelR")
let art4 = new Articles("Vikash", new Date(), "ExcelR")
let art5 = new Articles("Deepak", new Date(), "ExcelR")

let articles = [];
articles.push(art1);
articles.push(art2);
articles.push(art3);
articles.push(art4);
articles.push(art5);

// for (let i = 0; i < articles.length; i++) {
//     console.log(articles[i].author_name)
// }

let city = "Jaipur";
// (function weather(temperature, city) {
//     console.log("temperature of " + city + " is " + temperature)
// }
// )("42", city);

// Generator function

function* notifications() {
    yield "You have visited the website first time";
    yield "You have visited the website second time";
    yield "You have visited the website third time";
}

let notifications_gen = notifications();
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)
console.log(notifications_gen.next().value)

function* notificationsUnlimited() {
    let i = 1;
    while (true) {
        yield "You have visited the website " + i++ + " time";
    }

}



let notifications_ul = notificationsUnlimited();
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)
console.log(notifications_ul.next().value)

//-----------------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function findMax(numbers) {
    return Math.max(...numbers);
}

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function objectToArray(obj) {
    return Object.entries(obj);
}

function calculateAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

function getCurrentDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function sortAlphabetically(arr) {
    return arr.sort();
}

function averageWordLength(sentence) {
    const words = sentence.split(' ');
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return totalLength / words.length;
}

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
}

function isPalindrome(str) {
    const reversed = str.split('').reverse;
}

function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseStr = str.toLowerCase();
    return [...alphabet].every(letter => lowercaseStr.includes(letter));
}

function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

function isPowerOfTwo(n) {
    return (n & (n - 1)) === 0 && n !== 0;
}

function countOccurrences(arr) {
    const count = {};
    arr.forEach(element => {
        count[element] = count[element] ? count[element] + 1 : 1;
    });
    return count;
}

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

function findSecondLargest(numbers) {
    const sorted = [...new Set(numbers)].sort((a, b) => b - a);
    return sorted[1];
}

function capitalizeSentences(paragraph) {
    return paragraph.replace(/(^\w|\.\s*\w)/g, match => match.toUpperCase());
}

function findMostFrequent(arr) {
    const count = {};
    let maxCount = 0;
    let mostFrequent;
    arr.forEach(element => {
        count[element] = count[element] ? count[element] + 1 : 1;
        if (count[element] > maxCount) {
            maxCount = count[element];
            mostFrequent = element;
        }
    });
    return mostFrequent;
}

function sumOfSquares(numbers) {
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum - actualSum;
}

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

function isPalindrome(str) {
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

function flattenArray(arr) {
    return arr.flat();
}

function objectToQueryString(obj) {
    return Object.entries(obj).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
}

function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

function isPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}

function findCommonElements(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function removeWhitespace(str) {
    return str.replace(/\s/g, '');
}

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        const { value, symbol } = romanNumerals[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

function generateRandomIntegers(min, max, count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return result;
}

function sumOfEvens(numbers) {
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

function isValidURL(url) {
    const regex = /^(https?:\/\/)?([a-z0-9]+\.)+[a-z]{2,}(\/.*)*$/i;
    return regex.test(url);
}

function removeLastElement(arr) {
    arr.pop();
    return arr;
}

function findSmallestNumber(numbers) {
    return Math.min(...numbers);
}

function countVowels(str) {
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

function findMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
}

function reverseArray(arr) {
    return arr.reverse();
}

function isPerfectCube(num) {
    return Math.cbrt(num) % 1 === 0;
}

function dateDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffInDays;
}

function sortObjectsByProperty(arr, property) {
    return arr.sort((a, b) => a[property] - b[property]);
}

function removeFirstElement(arr) {
    arr.shift();
    return arr;
}

function findMaxNumber(numbers) {
    return Math.max(...numbers);
}

function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function findAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function sumOfOdds(numbers) {
    return numbers.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}

function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const sortedStr1 = normalize(str1).split('').sort().join('');
    const sortedStr2 = normalize(str2).split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

function findLongestWord(str) {
    const words = str.split(' ');
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function swapVariables(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

function sumMultiplesOf3And5(n) {
    let sum = 0;
    for (let i = 3; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function arrayToString(arr) {
    return arr.join('');
}

function findSecondLargestNumber(numbers) {
    const sorted = [...numbers].sort((a, b) => b - a);
    return sorted[1];
}

function isPowerOfTwo(num) {
    return (num & (num - 1)) === 0;
}

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

function isPalindrome(num) {
    const reversedNum = parseInt(String(num).split('').reverse().join(''), 10);
    return num === reversedNum;
}

function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

function generateFibonacci(limit) {
    const fibonacci = [0, 1];
    let i = 2;
    while (fibonacci[i - 1] + fibonacci[i - 2] <= limit) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }
    return fibonacci;
}

function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

function calculateExponentiation(base, exponent) {
    return Math.pow(base, exponent);
}

function countWords(str) {
    const words = str.split(' ');
    return words.length;
}

function objectToArray(obj) {
    return Object.entries(obj);
}

function averageWordLength(sentence) {
    const words = sentence.split(' ');
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return totalLength / words.length;
}

function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function findMostFrequentElement(arr) {
    const frequencyMap = new Map();
    let maxCount = 0;
    let mostFrequentElement = null;

    arr.forEach(element => {
        const count = frequencyMap.get(element) || 0;
        frequencyMap.set(element, count + 1);

        if (count + 1 > maxCount) {
            maxCount = count + 1;
            mostFrequentElement = element;
        }
    });

    return mostFrequentElement;
}

function decimalToBinary(num) {
    return num.toString(2);
}

function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

function isPalindrome(str) {
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
}

function countOccurrences(arr) {
    const frequencyMap = new Map();
    arr.forEach(element => {
        const count = frequencyMap.get(element) || 0;
        frequencyMap.set(element, count + 1);
    });
    return frequencyMap;
}

function reverseWordsInSentence(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

function sumEvenFibonacci(limit) {
    let sum = 0;
    let prev = 1;
    let curr = 1;

    while (curr <= limit) {
        if (curr % 2 === 0) {
            sum += curr;
        }
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return sum;
}

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') {
                return '';
            }
        }
    }
    return prefix;
}

function isArmstrongNumber(num) {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return num === sum;
}

function findFirstNonRepeatingChar(str) {
    const frequencyMap = new Map();
    for (const char of str) {
        const count = frequencyMap.get(char) || 0;
        frequencyMap.set(char, count + 1);
    }
    for (const char of str) {
        if (frequencyMap.get(char) === 1) {
            return char;
        }
    }
    return null;
}

function generateRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function sumOfSquares(numbers) {
    return numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}

function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseStr = str.toLowerCase();
    for (const letter of alphabet) {
        if (!lowerCaseStr.includes(letter)) {
            return false;
        }
    }
    return true;
}


function generateRandomPassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function sortByProperty(arr, property) {
    return arr.sort((a, b) => a[property] - b[property]);
}

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function findLargestSum(arr) {
    const sorted = arr.sort((a, b) => b - a);
    return sorted[0] + sorted[1];
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function removeDuplicatesByProperty(arr, property) {
    const uniqueMap = new Map();
    arr.forEach(obj => uniqueMap.set(obj[property], obj));
    return Array.from(uniqueMap.values());
}

function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        throw new Error('Strings must have equal length');
    }
    let distance = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            distance++;
        }
    }
    return distance;
}

function findSmallestCommonMultiple(a, b) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return (a * b) / gcd(a, b);
}

function generateUniqueRandomNumbers(min, max, count) {
    if (max - min + 1 < count) {
        throw new Error('Range is not large enough to generate unique random numbers');
    }
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function sumNestedArrays(arr) {
    let sum = 0;
    arr.forEach(subArray => {
        subArray.forEach(num => {
            sum += num;
        });
    });
    return sum;
}

function hasUniqueCharacters(str) {
    const charSet = new Set(str);
    return charSet.size === str.length;
}

function calculateMedian(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
}

function isAnagram(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

function sumOfPrimes(limit) {
    let sum = 0;
    for (let num = 2; num < limit; num++) {
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
}

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function countCharacterOccurrences(str, char) {
    return str.split('').filter(c => c === char).length;
}

function stringToArrayHalf(str) {
    const middle = Math.floor(str.length / 2);
    const firstHalf = str.slice(0, middle);
    const secondHalf = str.slice(middle);
    return [firstHalf, secondHalf];
}

const str = 'HelloWorld';
const result = stringToArrayHalf(str);
console.log(result); // Output: ['Hello', 'World']


