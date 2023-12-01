//Take an array of numbers and return the sum.
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum
}

let arr = [2,3,4,5,8];
let result =  sumArray(arr)
console.log(result)

function sumArray1(num){
    let sum=0;
    let i =0;
    while(i<num.length){
        sum +=num[i];
        i++;
    }
    return sum;
}

let ArrNumbers = [2,3,4,5,8,9];
let total =  sumArray1(ArrNumbers)
console.log(total)

function sumArray2(numbers){
    let total =0;
    for(let number of numbers){
        total +=number
    }
    return total
}

let arrayNum = [2,3,4,5,8,10];
let sum =  sumArray2(arrayNum)
console.log(sum)

function sumArray3(arr){
    let sum=0;
    arr.array.forEach(element => {
        sum +=element;
    });
    return sum;
}

let arrayNum1 = [2,3,4,5,8,10,15];
let sum1 =  sumArray2(arrayNum1)
console.log(sum1)
//Take an array of numbers and return the average.
function arraySumAverage(numbers){
    let total =0;
    numbers.forEach(element=>{
        total +=element;
    })
    return numbers.length ===0 ? 0 : total /numbers.length;
}

let arrayNum2 = [2,3,4,5,8,10,15];
let average =  arraySumAverage(arrayNum2)
console.log(average)
//Take an array of strings and return the longest string.
function findLongestString(strings) {
    let longestString = "";
    strings.forEach(string => {
        if (string.length > longestString.length) {
            longestString = string;
        }
    });

    return longestString;
}

let strArray = ['hello', 'wonderful', 'cool', 'hi', 'bye'];
let longestString = findLongestString(strArray);
console.log("Longest String:", longestString); 

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringLongerThanNum(strings, arrNumber) {
    
    let longerStrings = [];
   
    strings.forEach(string => {
        if(string.length > arrNumber)
        {
            longerStrings.push(string)
        }

    });

    return longerStrings;
}

let mixArray = stringLongerThanNum(['hello', 'wonderful', 'cool', 'hi', 'bye'],3);
console.log("Longer Strings than number:",mixArray); 

//Part2

let csvObj = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort by age
function sortedByAge(array) {
    return array.sort((a, b) => parseInt(a.age, 10) - parseInt(b.age, 10));//10 is for decimal
}

// remove ages greater than 50
function filterAge(array) {
    return array.filter(item => Number(item.age) <= 50);
}

// Map occupation to job, increment age by 1
function mapOccupationAndIncrementAge(array) {
    return array.map(item => ({
        ...item,
        job: item.occupation,
        age: String(Number(item.age) + 1)
    }));
}

// Calculate sum of ages
function sumOfAges(array) {
    let sum = 0;
    array.forEach(item => {
        sum += Number(item.age);
    });
    return sum;
}


// Calculate average age
function averageAge(array) {
    return sumOfAges(array) / array.length;
}

// Applying the functions
let sortedData = sortedByAge(csvObj);
let filteredData = filterAge(sortedData);
let mappedData = mapOccupationAndIncrementAge(filteredData);
let totalAge = sumOfAges(mappedData);
let avgAge = averageAge(mappedData);

console.log("Processed Data:", mappedData);
console.log("Total Age:", totalAge);
console.log("Average Age:", avgAge);


function incrementAge(obj) {
    // Convert the age to a number and increment it, or set it to 1 if it doesn't exist
    obj.age = obj.age ? String(Number(obj.age) + 1) : "1";
    obj.updated_at = new Date();
}

function copyAndIncrementAge(obj) {
    // Create a shallow copy of the object
    let copy = { ...obj };

    // Convert the age to a number and increment it, or set it to 1 if it doesn't exist
    copy.age = copy.age ? String(Number(copy.age) + 1) : "1";
    copy.updated_at = new Date(); // Creating a new Date object for the copy

    return copy;
}

// Example usage
csvObj.forEach(obj => incrementAge(obj));

// Creating a copy of the first object in csvObj and incrementing its age
let incrementedCopy = copyAndIncrementAge(csvObj[0]);

console.log("Original Objects after Incrementing Age:", csvObj);
console.log("Copy of First Object with Incremented Age:", incrementedCopy);
