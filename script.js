var value = 0;

var elements= document.querySelectorAll(".element"); //class name will give you array like object



elements.forEach(element =>{
  element.addEventListener('click', handleclick, {once:true});
});

function handleclick(e){
  console.log("Clicked");

  swapTurns();
  //place mark
  //check for win
  //check for draw
  //Switch turns
}
function swapTurns(){
  value= 1 - value;
  console.log(value);
}


