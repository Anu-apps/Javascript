// synchronous process

// function timer1(data){
//     setTimeout(function(){
//         return 'First data'
//     }, 3000)

//     return false
// }

// function timer2(data){
//     setTimeout(function(){
//         return 'Second Data'
//     }, 5000)
// }

// function timer3(data){
//     setTimeout(function(){
//         return 'Third Data'
//     }, 2000)
// }


// callback process


// function timer1(data, cb){
//     setTimeout(function(){
//         cb('First data')
//     }, 3000)

//     return false
// }

// function timer2(data, cb){
//     setTimeout(function(){
//         cb('Second Data')
//     }, 5000)
// }

// function timer3(data, cb){
//     setTimeout(function(){
//         cb('Third Data')
//     }, 2000)
// }

// var data1 = timer1("first")
// var data2 = timer2(data1)
// var data3 = timer3(data2)

// console.log(data1)
// console.log(data2)
// console.log(data3)

// callback calling
// timer1("first", function(responseData){
//     console.log(responseData)
//     timer2(responseData, function(responseData1){
//         console.log(responseData1)
//         timer3(responseData1, function(responseData2){
//             console.log(responseData2)
//         })
//     })
// })






// promises process


function timer1(data) {

    return new Promise(function (res, rej) {

        setTimeout(function () {
            res('first data')
        }, 3000)

    })

}

function timer2(data) {

    return new Promise(function (res, rej) {

        setTimeout(function () {
            res('second data')
        }, 3000)

    })

}


function timer3(data) {

    return new Promise(function (res, rej) {

        setTimeout(function () {
            res('third data')
        }, 3000)

    })

}



// timer1("first data")
//     .then(function (res) {
//         console.log(res)
//         timer2("second data")
//             .then(function (res1) {
//                 console.log(res1)
//                 timer3("third data")
//                     .then(function (res2) {
//                         console.log(res2)
//                     })
//             })

//     })


async function callMyTimer(){

    let time1 = await timer1("first data")
    let time2 = await timer2("Second data")
    let time3 = await timer3("Third data")
    
    console.log(time1)
    console.log(time2)
    console.log(time3)
}

callMyTimer()