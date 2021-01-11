
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
// function clickHandler() {

    //var item = document.getElementById("item").value
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

    
    // switch(item){

        
    //         case "B":
    //             alert("Burgar would cost you Rs. 200")
    //         break;
    
    //         case "P":    
    //         alert("Pizza would cost you Rs. 450")
    //         break;
    
    //         default:
    //             alert("Sorry, You didn't place any order.")
    
    //     }





/// "this" with bind
// var obj = {
  
//     name: "Chris",
//     friends: ["matt", "james"],
//     loop : function (){
    
//     this.friends.forEach(function(friend){
    
//     console.log(this.name + " knows "+ friend);
//   }.bind(this));
//   }
//   };
//   obj.loop();

// function inside method shadow "this"
// var obj = {
  
//     name: "Chris",
//     friends: ["matt", "james"],
//     loop : function (){
    
//     this.friends.forEach(
      
//       function(friend){
    
//     console.log(this.name + " knows "+ friend);
//   }
//   );
//   }
//       };
//   obj.loop();



// function fun(){
  
//   return this;
// }


// *******instuctor experience

// fun()=== global;
// // typeof fun.call(2)=== "object";
// // fun.apply(null)=== global;
// // fun.call(undefined) === global;
// // typeof fun.bind(true)()==="object";

// let employee = {
  
//     name: "Ramesh",
//     role: "instuctor",
//     fun: function(){
    
//     console.log(this.name+" is an "+ this.role)
//   }
//   };
  
//   function detail(exp){
//     console.log(this.name+" is an "+ this.role+" has a "+exp+"+ years of experience");
//   }
  
//   detail.call(employee, 10);
//   //detail.apply(employee, [8,9,10]);
  
//   let empDetails = detail.bind(employee);
  
//   empDetails();





// Loops

//for loop

// for(var i=1; i<=10; i++){
//     console.log("Vivek Sharma", i)
// }



// for(var i=10; i>=1; i--){
//     console.log("Vivek Sharma", i)
// }


// table 

//  var table = 10;
//  var tableTill = 100;

// for(var i=1; i<=tableTill; i++){
//     console.log(table + ' X ' + i + ' = ' + table*i)
// } 

// for(var i=2; i<=tableTill; i=i+2){
//      console.log(table + ' X ' + i + ' = ' + table*i)
//  }


// nested for loop

// for(var i=1; i<=5; i++){
//     for(var j=1;j<=5;j++){
//         console.log(i, j)
//     }
// }

// var i=1
// while(i<=10){
//     console.log(i)
//     i++
// }

// do{
//     console.log(i)
//     i++
// }while(i<=10)


 //var table = 10;
 var tableTill = 100;

// for(var i=1; i<=tableTill; i++){
//     console.log(table + ' X ' + i + ' = ' + table*i)
// } 

function enterTable(){
    var table = document.getElementById("table").value

for(var i=2; i<=tableTill; i=i+2){
     console.log(table + ' X ' + i + ' = ' + table*i)
 }

}