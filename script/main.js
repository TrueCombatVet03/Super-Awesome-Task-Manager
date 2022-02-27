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

//events, load data
function init(){
    $("#iImportant").click(toggleImportant);
    $("#btnToggleForm").click(toggleForm);
 
}

window.onload = init;