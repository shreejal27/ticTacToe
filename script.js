var value = 0;

var elements = document.querySelectorAll(".element"); //class name will give you array like object


elements.forEach(element => {
  element.addEventListener('click', handleclick, { once: true });
});

const checkWin = () => {
  let boxtext = document.getElementsByClassName("element");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let isWin = false;

  wins.forEach(e => {
    if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
      // document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won";
      isWin = true;
      alert("Player " + boxtext[e[0]].innerText + " Won");

    }
  });
  if (isWin) {
    gameOver();
    return true;
  }
  return false; 
};

function handleclick(e) {
  const cell = e.target;
  console.log("Clicked");
  placemark(cell);
  if (checkWin()) {
    return;
  }
  if (checkDraw()) {
    return;
  }
  swapTurns();

  //check for win
  //check for draw
  //Switch turns
}

function swapTurns() {
  value = 1 - value;
  console.log(value);
}

function placemark(cell) {
  if (value == 0) {
    // cell.style.backgroundColor = "pink";
    cell.textContent = "X";
    // cell.innerHTML = '<img src="image.jpg" alt="A description of the image">';

  }
  else {
    // cell.style.backgroundColor = "red";
    cell.textContent = "O";
  }
}

function gameOver() {
  var elements = document.querySelectorAll(".element");
  elements.forEach(element => {
    element.removeEventListener('click', handleclick);
  });
  //delay the reset board by 2 seconds
  setTimeout(resetBoard, 1500);
}

function resetBoard() {
  var elements = document.querySelectorAll(".element");
  elements.forEach(element => {
    element.textContent = "";
  });
  elements.forEach(element => {
    element.addEventListener('click', handleclick, { once: true });
  });
}

const checkDraw = () => {
  let boxtext = document.getElementsByClassName("element");
  let isDraw = true;

  for (let i = 0; i < boxtext.length; i++) {
    if (boxtext[i].innerHTML === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    alert("It's a draw!");
    gameOver();
    return true; // Return true if a draw is detected
  }
  return false; // Return false if no draw is detected
};


document.querySelectorAll('.element').forEach(element => {
  element.addEventListener('mouseover', () => {
    if (element.textContent === '') {
      element.setAttribute('data-content', value); // Set the data-content attribute for pseudo-element
    }
  });

  element.addEventListener('mouseout', () => {
    element.removeAttribute('data-content'); // Remove the data-content attribute on mouse out
  });

  // element.addEventListener('click', () => {
  //   if (element.textContent === '') {
  //     element.textContent = value;
  //   }
  // });
});
