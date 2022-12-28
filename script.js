var elements= document.querySelectorAll(".element"); //class name will give you array like object

elements.forEach(element =>{
  element.addEventListener('click', handleclick);
});

function handleclick(e){
  console.log("Clicked");
}
