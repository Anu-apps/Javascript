var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var city = document.getElementById("city")
var state = document.getElementById("state")
var email = document.getElementById("email")
var password = document.getElementById("password")
var registrationForm = document.getElementById("registrationForm")


registrationForm.addEventListener('submit', function(e){
    // To stop refresh the form
    e.preventDefault()

    dynamicValidations()
    
})


function dynamicValidations(){

    // remove previous errors
    let allPreviousErrors = document.getElementsByClassName("alert-danger")
    for(let i=0; i<allPreviousErrors.length; i++){
        allPreviousErrors[i].remove()
    }



    // Simple Validations
    if(firstName.value === ""){

        let errorElement = document.createElement("DIV")
        errorElement.innerHTML = "First Name is Required"
        errorElement.className = "alert alert-danger"

        firstName.parentElement.appendChild(errorElement)
        


        // firstName.parentElement.children[2].innerHTML = "First Name is Required."
        // firstName.parentElement.children[2].style.display = "block"

    }
    
    // if(lastName.value === ""){

        let errorElement2 = document.createElement("DIV")
        errorElement2.innerHTML = "Last Name is Required"
        errorElement2.className = "alert alert-danger"

        lastName.parentElement.appendChild(errorElement2)
        
        
    //     lastName.parentElement.children[2].innerHTML = "Last Name is Required."
    //     lastName.parentElement.children[2].style.display = "block"
    // }
    
   
    // if(state.value === ""){
        let errorElement3 = document.createElement("DIV")
        errorElement3.innerHTML = "State is Required"
        errorElement3.className = "alert alert-danger"

        state.parentElement.appendChild(errorElement3)
        
    //     state.parentElement.children[2].innerHTML = "State is Required."
    //     state.parentElement.children[2].style.display = "block"
    // }

    // if(city.value === ""){
        let errorElement4 = document.createElement("DIV")
        errorElement4.innerHTML = "City is Required"
        errorElement4.className = "alert alert-danger"

        city.parentElement.appendChild(errorElement4)
        
    //     city.parentElement.children[2].innerHTML = "City is Required."
    //     city.parentElement.children[2].style.display = "block"
    // }

    // if(email.value === ""){
        let errorElement5 = document.createElement("DIV")
        errorElement5.innerHTML = "Email is Required"
        errorElement5.className = "alert alert-danger"

        email.parentElement.appendChild(errorElement5)
        
    //     email.parentElement.children[2].innerHTML = "Email is Required."
    //     email.parentElement.children[2].style.display = "block"
    // }

    // if(password.value === ""){
        let errorElement6 = document.createElement("DIV")
        errorElement6.innerHTML = "Password is Required"
        errorElement6.className = "alert alert-danger"

        password.parentElement.appendChild(errorElement6)
        
    //     password.parentElement.children[2].innerHTML = "Password is Required."
    //     password.parentElement.children[2].style.display = "block"
    // }
}

function simpleValidations(){
    // Simple Validations
    if(firstName.value === ""){
        alert("First Name is required.")
    }
    
    else if(lastName.value === ""){
        alert("Last Name is required.")
    }
    
   
    else if(state.value === ""){
        alert("State is required.")
    }

    else if(city.value === ""){
        alert("City is required.")
    }

    else if(email.value === ""){
        alert("Email Address is required.")
    }

    else if(password.value === ""){
        alert("Password is required.")
    }
}