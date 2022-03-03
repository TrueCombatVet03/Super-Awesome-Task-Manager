var nonImportantClass = "far fa-star";
var importantClass = "fas fa-star";
var isImportant = false;
var isFormVisible = true;

function toggleImportant(){
    console.log("icon clicked!");
    if(isImportant){
        isImportant = false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else{
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        isImportant = true;
    }
}

function toggleiImportant(){

}

function toggleForm(){
    if(isFormVisible){
        isFormVisible = false;
        $("#form").hide();
    }
    else{
        isFormVisible = true;
        $("#form").show();
    }
}


function saveTask(){
    console.log("Registered!")

    let title = $("#txtTitle").val();
    let contact = $("#txtContact").val();
    let location = $("#txtLocation").val();
    let date = $("#selDate").val();
    let description = $("#txtDescription").val();
    let color = $("#txtColor").val();



    if(title.length < 5){
        alert("Title should be at least 5 chars long");
        return;
    }

    if(!date){
        alert("DueDate is required");
        return;
    }

    let task = new Task(isImportant, title, date, contact, location, description, color);
    let dataStr = JSON.stringify(task);
    console.log(task);
    console.log(dataStr);

   //save the task
    $.ajax({
        type: "POST",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        data: dataStr,
        contentType: "application/json",

        success: function(data){
            console.log("Save res", data);
            let saveInfo = JSON.parse(data);

            displayTask (saveInfo);

        
        },
        error: function(error){
            console.log("Save failed", error);
        }
    });

   //display
   
   //clear the form ( create a clearForm fn)
    clearForm();

 
}

function clearForm(){
    $("#txtTitle").val("");
    $("#txtContact").val("");
    $("#txtLocation").val("");
    $("#selDate").val("");
    $("#txtDescription").val("");
    $("#txtColor").val("#000000");

}

function displayTask(task){
    //create the syntax
    let syntax = `<div id="${task._id}" class="task">

        <div class="main-info">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>   


        <label class="date">${task.dueDate}</label>

        <div class="second-info">
            <label class="location">${task.location}</label>
            <label class="contact">${task.contact}</label>
        </div>    

        <button onclick="deleteTask('${task._id}')" class="btn btn-sm btn-danger">Remove</button>
    
    </div>`;

    //append the syntax to an element on the screen
    $("#task-list").append(syntax);
}

function deleteTask(id){
    console.log("deleteting task", id);
    $("#" + id).remove();
}

function clearData(){
    $.ajax({
        type: 'DELETE',
        url: "https://fsdiapi.azurewebsites.net/api/tasks/clear/Kevin106",
        success: () => {
            console.log("Data cleared");
            $("#task-list").html("");
        },
        error: (details) => {
            console.log("Clear failed", details);
        }

    })
}

function retreiveTasks(){
    //"https://fsdiapi.azurewebsites.net/api/tasks"

    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function(data){
            let list = JSON.parse(data);// from string object.array
            for(let i=0; i< list.length; i++){
                let task = list[i];
                if (task.name === "Kevin106"){
                    displayTask(task);
                }
            }
        },
        error: function(error){
            console.log("Display failed", error);
        }
    });

}

//events, load data
function init(){
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSave").click(saveTask);
    $("#btnDeleteTasks").click(clearData);

    // load data
    retreiveTasks();
 
}

window.onload = init;