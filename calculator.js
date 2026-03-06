const screen = document.getElementById("screen");

function process(input){
    screen.value += input;
    
}
function answer(){
try{
    screen.value = eval(screen.value);
}
catch(error)
{
    screen.value = "ERROR            ";
}
}
function clearsc(){
    screen.value = "";
}
function sign(){
    screen.value = -(screen.value);
}
function backspace(){
    screen.value = screen.value.slice(0,-1);
}
