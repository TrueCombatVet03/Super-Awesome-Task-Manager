function Dog(name, age){
    this.name = name;
    this.age = age;
}

class Cat {
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
}


function objects(){
    // object literal
    let d1 = {
        name: "Fido",
        age: 3
    };


   // console.log(d1);

    // object constructor
    let d3 = new Dog("Dude", 1);
    let d4 = new Dog("Pal", 3);
    //console.log(d3, d4);

    // classes
    let c1 = new Cat("Dr. Knows", 3, "white");
    let c2 = new Cat("Sir. Wiss", 2, "green");
    //console.log(c1, c2);

}

function testRequest(){
    // https://restclass.azurewebsites.net/api/test
    $.ajax({
        type: "GET",
        url: "https://restclass.azurewebsites.net/api/test",
        success: function(response){
            console.log("Server says:", response);
        },
        error: function(error){
            console.log("Req failed", error);
        }

    });
}


//execute the function
objects();

//testRequest();


// https://fsdiapi.azurewebsites.net/api/tasks/clear/<name>
