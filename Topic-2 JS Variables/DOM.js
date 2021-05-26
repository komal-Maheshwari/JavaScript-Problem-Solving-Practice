
function sayHi(){
    var Name = document.getElementById("Name");
    var Number = document.getElementById("Number");
    var name = Name.value;
    var number = Number.value;

    // show pop-up
    alert("Hello  "+ name +"!!  Message has been sent to " +number +".");
    }

document.getElementById("submit").onclick = sayHi;