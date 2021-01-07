
// var persons = {

// name : "Bill",
// age : 20,
// gender : "M",
// weight : 76.5
// }


// console.table("Name:"+ " " + persons.name);
// console.log("Age:"+ " " + persons.age);
// console.log("Gender:"+ " " + persons.gender);
// console.log("Weight:"+ " " + persons.weight);
// //console.log(https://wassets.hscicdn.com/_next/static/runtime/polyfills-155ba294c5973be655ed.js)

// Arithmetic Operators

// +,-,*,/,%

// Logical Operator

// ||, &&, !

// Assignment Operators
// =, ==, ===, += 

// Comparison Opertors
// >, <, >=, <=, !=

// Ternary Operator

// a>b ? true : false


// Conditions

// var age = 25

// if(age>=25){
//     console.log("You are eligible!!")
// }

// example if condition


function clickHandler() {

    var item = document.getElementById("item").value
    //var ele = document.getElementsByName("gender")
    //var gender = ""

    // for (i = 0; i < ele.length; i++) {
    //     if (ele[i].checked)
    //         gender = ele[i].value;
    // }

    // Single if

    // if(age>=25)   {
    //     alert("Congrats!! You are eligible.")
    // }else{
    //     alert("Sorry, Your age should be more than 24")
    // }


    // Multiple If

    // if(age>35)
    // {
    //     alert("Congrats!! You are eligible in older category.")
    // }
    // else if(age>=25){
    //     alert("Congrats!! You are eligible in Younger category.")
    // }
    // else{
    //     alert("Sorry, You are not eligible.")
    // }


    // Nested If

    // if (gender == "male") {

    //     if (age > 35) {
    //         alert("Congrats!! Man, You are eligible in older category.")
    //     }
    //     else if (age >= 25) {
    //         alert("Congrats!! Man, You are eligible in Younger category.")
    //     }
    //     else {
    //         alert("Sorry Man, You are not eligible.")
    //     }

    // }
    // else {
    //     if (age > 30) {
    //         alert("Congrats!! Woman, You are eligible in older category.")
    //     }
    //     else if (age >= 20) {
    //         alert("Congrats!! Woman, You are eligible in Younger category.")
    //     }
    //     else {
    //         alert("Sorry Woman, You are not eligible.")
    //     }
    // }

    // switch(true){

        
    //     case +age>=35:
    //         alert("Congrats!! Woman, You are eligible in older category.")
    //     break;

    //     case +age>=25:    
    //         alert("Congrats!! Woman, You are eligible in Younger category.")
    //     break;

    //     default:
    //         alert("Sorry, You are not eligible.")

    // }

    
    switch(item){

        
            case "B":
                alert("Burgar would cost you Rs. 200")
            break;
    
            case "P":    
            alert("Pizza would cost you Rs. 450")
            break;
    
            default:
                alert("Sorry, You didn't place any order.")
    
        }

}