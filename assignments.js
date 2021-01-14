const txt = document.getElementById("txt")
const btnField = document.getElementById("btn")
const result = document.getElementById("result")

function searchResult(data, cb){
    if(data){
        setTimeout(() => {
            cb(data)
        }, 5000);
    }
    }
    

function showResults(data){
    result.innerHTML = "<h1>"+ data.charAt(0) + data.substr(1) +"</h1>"
    }
    
    btnField.addEventListener('click', function(){
        let inputData = txt.value.trim()
        searchResult(inputData, function(data){
            showResults(data)
        })
    })

/*  

Deadline to submit these assignments is Thursday 7:00pm


    abbreviate-string
    add-big-integers
    diff-array
    remove-falsy-values

adding large integers
     Source: https://stackoverflow.com/questions/4557509/javascript-summing-large-integers
    function bhash(arr) {
        for (var i = 0, L = arr.length, sum = 0; i < L; sum += Math.pow(2,i)*arr[i++]); 
        return sum;
     }


     diff arrays
     source: https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

     function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

console.log(arr_diff(['a', 'b'], ['a', 'b', 'c', 'd']));
console.log(arr_diff("abcd", "abcde"));
console.log(arr_diff("zxc", "zxc"));




to remove falsy values:
Source: https://stackoverflow.com/questions/14058193/remove-empty-properties-falsy-values-from-object-with-underscore-js

for object use delete.

for(var k in obj){

  if(obj.hasOwnProperty(k) && !obj[k]){
    delete obj[k];
  }
}

*/

