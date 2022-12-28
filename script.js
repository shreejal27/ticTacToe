// const spaces = document.querySelectorAll('space');
var value=0;

var elements= document.getElementsByClassName("element"); //class name will give you array like object

for (var i=0; i<elements.length;i++){
  elements[i].addEventListener("click", click());
}

function click(){
  console.log("Button CLicked1");

}