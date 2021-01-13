

const searchResult = new Promise(function(resolve, reject){

    // api call
    
    let result = {
        status: true, 
        data:[
            {
                id:1,
                name: "Ramesh"
            },
            {
                id:2,
                name:"Vivek"
            }
        ]
    }

    setTimeout(function(){
        if(result.status===true){
            resolve(result.data)
        }else{
            reject("Sorry, There is some problem with the api")
        }
    }, 3000)

  

})

//resolved and rejected in 'then'
// searchResult
// .then(function(res){
//     console.log(res)
// })
// .catch(function(error){
//     console.log(error)
// })

/*

const promiseInFunc = function(data){

    return new Promise(function(res, rej){

        if(data){
            ///appi call
            let result = {status:true, results:[]}

            if(result.status === true){
                res(result.results)
            }else{
                rej("Sorry, There is something wrong")
            }
        }

    })

}

promiseInFunc("abc")
.then(function(res){
    console.log(res)
})

*/

const promiseInFunc = function(data){

    return new Promise(function(res, rej){

        if(data){
            let result = {status: true, result:[]}

            if(result.status === true){
                res(result.results)
            }else{
                rej("sorry, there is some error")
            }
        }
    })
}

const promiseInFunc1 = function(data){

    return new Promise(function(res, rej){

        if(data){
            let result = {status: true, result:[]}

            if(result.status === true){
                res(result.results)
            }else{
                rej("sorry, there is some error")
            }
        }
    })
}

const promiseInFunc2 = function(data){

    return new Promise(function(res, rej){

        if(data){
            let result = {status: true, result:[]}

            if(result.status === true){
                res(result.results)
            }else{
                rej("sorry, there is some error")
            }
        }
    })
}

// Promises in serail wise
promiseInFunc("xyz")
.then(function(res){
    
    promiseInFunc1(res)
    .then(function(res){


        promiseInFunc2(res)
        .then(function(res){

        })

    })

})