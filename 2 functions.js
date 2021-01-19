
// function defination
function printMyName(){
    console.log("vivek sharma")
}


// function with paramters
function printMyDynamicName(name)
{
    console.log(name)
}

function capitalCase(name){
    console.log(name.toUpperCase())
}

function printEmpDetails(name)
{
    console.log(name)
}

function capitalCase(name){
    console.log(name.toUpperCase())
}


// function with return
function average(a, b, c){
    return (a+b+c) / 3
}

// function calling
// printMyName()

// var person = {
//     id: 1,
//     name: "vivek"
// }

// printMyDynamicName(person)

// capitalCase("vivek")

// var avg = average(10,20,30)
// var avg1  = average(33,32,55)

// console.log(avg)
// console.log(avg1)

// var empDetails = {
//     id: 111,
//     name: "Steve",
//     sal: "$3,200"
// }

// printEmpDetails(empDetails.name)
// printEmpDetails(empDetails.sal)

// var sum = function(a,b){
//     return a+b
// }



// (function () {
//     //write your js code here
//     console.log("e")
// })();


// console.log(sum(10, 20))




// Arrow Function

var sum = (a,b) => {
    return a+b
}

// Arrow function with one param

var printMyName = name => {
    console.log(name)
}

// Fatter function

var capitalCase = name => name.toUpperCase()



console.log(sum(299, 1))

printMyName("Remi")

var myName = capitalCase("remi")

console.log(myName)