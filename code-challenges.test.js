// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentenceMachine", () => {
  it("makes an array with a sentence from an array of objects", () => {
    expect(sentenceMachine(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// good fail:     ReferenceError: sentenceMachine is not defined

// b) Create the function that makes the test pass.

//in - array of objects
//out - array of sentences
//process - create a function that takes in an array of objects, extracts the value using key value pairs, and interpolates it into a sentence with appropriate casing and punctuation, returning an array with each sentence as an individual value
//tools: map, string interpolation, split, join, dot notation, upcase

//create a function which takes in an array of objects
const sentenceMachine = (objectArray) => {
  //iterate through the object array
  return objectArray.map(objectArray => 
    //start a string interpolated sentence for each key/value pair. 
    //adjusting for casing: split the name on spaces and map the name to access each word
  `${objectArray.name.split(" ").map(name => 
    //for each word in a persons name, capitalize the first letter and lowercase all others, then rejoin the words into one string separated by a space. 
    //complete the sentence by also interpolating occupation.
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ")} is ${objectArray.occupation}.`)
}
    
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
    
// a) Create a test with an expect statement using the variables provided.
    
describe("sortNumsThirdEmReturnRemainders", () => {
  it("takes a varied array and sorts out numbers, then returns remainders of that number when thirded ", () => {
    expect(sortNumsThirdEmReturnRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(sortNumsThirdEmReturnRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//good fail:     ReferenceError: sortNumsThirdEmReturnRemainders is not defined

// b) Create the function that makes the test pass.

//in - array of various datatypes
//out - array with remainder of numbers from input array divided by three
//process - create a function which takes in a mixed array, filter by datatype for numbers, and use modulo operator to get remainder for each value
//tools - modulo, filter, map, typeof

//create a function which takes in an array with values of various datatypes
const sortNumsThirdEmReturnRemainders = (mixedArray) => {
  //filter to return an array with all number values from original array
  return mixedArray.filter(value => typeof value === "number")
  //map through numbers to return remainder when divided by three
  .map(number => number % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sortNumsCubeNSum", () => {
  it("takes a varied array and sorts out numbers, then returns the sum of all numbers cubed", () => {
    expect(sortNumsCubeNSum(cubeAndSum1)).toEqual(99)
    expect(sortNumsCubeNSum(cubeAndSum2)).toEqual(1125)
  })
})


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//good fail:     ReferenceError: sortNumsCubeNSum is not defined

// b) Create the function that makes the test pass.

//in - array of various datatypes
//out - number which is the sum of the cubes of numbers from the input array
//process - create a function which takes in an array, filters numbers, cubes each number, then adds together and returns the result
//tools - filter, map, **, +, reduce, isNaN, typeof, for loop

// create a function which takes in a mixed array
const sortNumsCubeNSum = (mixedArray) => {
  //make a variable called cubed. Filter numbers from mixed array and cube them by mapping numbers; store this new array of cubed numbers in cubed.
  let cubed = mixedArray.filter(value => typeof value === "number").map(number => number**3)
  //create a variable called sum to store addition of cubed values
  let sum = 0
  //iterate through cubed values 
  for (let i = 0; i < cubed.length; i++){
    //add each cubed value to the total sum 
    sum += cubed[i]
  }
  //return the sum
  return sum
}

// challenges.test.js
//   sentenceMachine
//     ✓ makes an array with a sentence from an array of objects (2 ms)
//   sortNumsThirdEmReturnRemainders
//     ✓ takes a varied array and sorts out numbers, then returns remainders of that number when thirded  (1 ms)
//   sortNumsCubeNSum
//     ✓ takes a varied array and sorts out numbers, then returns the sum of all numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
