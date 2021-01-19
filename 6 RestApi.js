// using students API made on https://mockapi.io/projects (anuvats1988 gmail login)
var getStudents = document.getElementById("getStudents")
var studentResults = document.getElementById("studentResults")

getStudents.addEventListener('click', function(){
    
    fetch("https://5fffdd12cb21e10017af8153.mockapi.io/students")
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        
        var tableData = ""

        response.map(function(student){

            tableData += `<tr>
                            <td>${student.id}</td>
                            <td>${student.firstName}</td>
                            <td>${student.lastName}</td>
                            <td>${student.age}</td>
                            <td>${student.city}</td>
                            <td>${student.createdAt}</td>
                        </tr>
                        `

        })
 

        studentResults.innerHTML = tableData

    })

})