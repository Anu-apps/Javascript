// inbuilt callback functions

// setTimeout(function(){
//     console.log("Display after 2 seconds")
// }, 5000)

// setInterval(function(){
//     console.log("display every 1 sec")
// }, 1000)

// let button = document.getElementById("submitBtn")
// button.addEventListener('click', function(){

// })


// function searchResult(searchTerm){
//     if(searchTerm){
//                 // api call
//         let result = {data:[22,33,32]}
//         setTimeout(function(){
//             return result
//         }, 3000)
//     }
// }

// create your own callback Function
// function searchResult(searchTerm, responseFun){
//     if(searchTerm){
//         // api call
//         let result = {data:[22,33,32]}
//         setTimeout(function(){
//             responseFun(result)
//         }, 3000)
//     }
// }

// function showResults(response){
//     console.log(response)
// }
// //  calling the custom callback function

// searchResult("akon", function(response){

//     showResults(response)

// })

// var response = searchResult("akon")

// showResults(response)



// const inputField = document.getElementById("table")
// const btnField = document.getElementById("btn")
// const result = document.getElementById("result")

// //define Callback function
// function searchResult(data, cb){
//     if(data){
//         setTimeout(function(){

//             // calling callback function passed in search result as parameter
//             cb(data)
//         }, 3000)
//     }
// }

// function showResults(data){

// result.innerHTML= "<h1>" + data + "</h1>"

// }

// btnField.addEventListener('click', function(){
//     let inputData = inputField.value.trim()
//     //calling callback function
//     searchResult(inputData, function(data){
//     showResults(data)
//     })
// })

const inputField = document.getElementById("table")
const btnField = document.getElementById("btn")
const result = document.getElementById("result")

//defining callback function

function searchResult(data, cb){
if(data){
    setTimeout(() => {
        cb(data)
    }, 5000);
}
}

function showResults(data){
result.innerHTML = "<h1>"+ data +"</h1>"
}

btnField.addEventListener('click', function(){
    let inputData = inputField.value.trim()
    searchResult(inputData, function(data){
        showResults(data)
    })
    
})
