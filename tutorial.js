var a; //declaring variable

var b = 2; //variable b is being declared, then assigning value 2 to variable b

a = 7; //assigning value 7 to a, not declaring bc its already been declared

console.log(a)


var myStr = "hello, i am a \"escape character\""

console.log(myStr);

var ourStr = "I come first. " + "I come second. "


console.log(ourStr);

ourStr += "I come third." //no need to assign or declare bc ourStr already exists

console.log(ourStr);

var firstName = "Ada"
var lastName = "Lovelace"

var firstLetFirstName = firstName[0]
var lastLetLastName = lastName[lastName.length - 1]

console.log(firstLetFirstName)
console.log(lastLetLastName)

function wordBlanks(myNoun, myAdj, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))
console.log(wordBlanks("bike", "slow", "flew", "slowly"))


//arrays

var ourArray = ["John", 23];


//Arrays can be within another array (nested array or multi-dimentional array)

var myArray = [["Quincy", 1], ["Yellow", 3]]

// can use bracketted notation to find a given item

var myData = myArray[0]
console.log(myData)

// can change item within an array

myArray[1] = ["Blue", 4]
console.log(myArray)

// can get first item of first item in an array

var myName = myArray[0][0]
console.log(myName)

// add a new array to end of an array

var newArray = ["Yellow", 3]
myArray.push(newArray)
console.log(myArray)

// remove from beginning of array

myArray.shift()
console.log(myArray)

// add item to beginning of an Array

myArray.unshift(["Quincy", 1])
console.log(myArray)

//