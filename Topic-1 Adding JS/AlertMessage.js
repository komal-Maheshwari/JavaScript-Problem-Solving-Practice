// Use of External Javascript

function Red(){
    alert('RED Button');
}
function Blue(){
   alert('BLUE Button');
}
function Green(){
    alert('GREEN Button');
}

// Calling the Button Click With their IDS in JS File
document.getElementById("Red").onclick = Red;
document.getElementById("Blue").onclick = Blue;
document.getElementById("Green").onclick = Green;
