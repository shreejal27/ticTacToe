var value = 0;

var elements= document.querySelectorAll(".element"); //class name will give you array like object



elements.forEach(element =>{
  element.addEventListener('click', handleclick, {once:true});
});

const checkWin= ()=>{
  let boxtext =  document.getElementsByClassName("element");
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  wins.forEach(e =>{
      if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")){
        document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won";
      }
  })
}

function handleclick(e){
  const cell = e.target;
  console.log("Clicked");
  placemark(cell);
  checkWin();
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
    // cell.style.backgroundColor = "pink";
    cell.textContent= "X";
    // cell.innerHTML = '<img src="image.jpg" alt="A description of the image">';
    
  }
  else{
    // cell.style.backgroundColor = "red";
    cell.textContent= "O";

  }
}

