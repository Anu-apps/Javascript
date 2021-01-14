var getEvents = document.getElementById("getEvents")
var eventResults = document.getElementById("eventResults")

getEvents.addEventListener('click', function(){

    fetch("https://5fffdd12cb21e10017af8153.mockapi.io/events")
    .then(function(response){
        return(response.json())
    })
    .then(function(response){
        
        var tableData = ""

        response.map(function(events){

            tableData += `<tr>
                            <td>${events.id}</td>
                            <td>${events.eventName}</td>
                            <td>${events.eventVenue}</td>
                            <td>${events.createdAt}</td>
                        </tr>
                        `

        })
 

        eventResults.innerHTML = tableData
    })

})

