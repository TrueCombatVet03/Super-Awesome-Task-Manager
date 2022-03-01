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
   console.log(task);

   //save the task

   //display
   displayTask(task);

   //clear the form ( create a clearForm fn)
   clearForm();

 
}

function clearForm(){
    $("#txtTitle").val("");
    $("#selDate").val("");
}

function displayTask(task){
    //create the syntax
    let syntax = `<div class="task">

        <div class="main-info">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>   


        <label class="date">${task.dueDate}</label>

        <div class="second-info">
            <label class="location">${task.location}</label>
            <label class="contact">${task.contact}</label>
        </div>    

        <button onclick="deleteTask()" class="btn btn-sm btn-danger">Remove</button>
    
    </div>`;

    //append the syntax to an element on the screen
    $("#task-list").append(syntax);
}

function deleteTask(){
    console.log("deleting task");

}

//events, load data
function init(){
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
    $("#btnSave").click(saveTask);
 
}

window.onload = init;