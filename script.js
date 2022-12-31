var value = 0;

var elements= document.querySelectorAll(".element"); //class name will give you array like object



elements.forEach(element =>{
  element.addEventListener('click', handleclick, {once:true});
});

function handleclick(e){
  const cell = e.target;
  console.log("Clicked");
  placemark(cell);
  swapTurns();

  //check for win
  //check for draw
  //Switch turns
}
function swapTurns(){
  value= 1 - value;
  console.log(value);
}

function placemark(cell){
  if(value == 0){

    cell.style.backgroundColor = "pink";
    cell.textContent= "X";
    
  }
  else{
    cell.style.backgroundColor = "red";
    cell.textContent= "O";

  }
}

