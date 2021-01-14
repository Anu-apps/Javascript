
//https://mockapi.io/projects/5fffdd12cb21e10017af8154

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
