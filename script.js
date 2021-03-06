const gameContainer = document.querySelector("div");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let targetCard=null;
let result=0;
function handleCardClick(event) {

  if(!targetCard){
    targetCard=event.target;
    event.target.style.backgroundColor=event.target.classList.value;
  }else if(event.target!==targetCard){
    event.target.style.backgroundColor=event.target.classList.value;
    if( event.target.style.backgroundColor!==targetCard.style.backgroundColor){
      setTimeout(()=>{
        targetCard.style.backgroundColor = null;
        event.target.style.backgroundColor = null;
        targetCard=null;
      },500)
    }else{
      targetCard=null;
      result+=2;
      if(result==10){
        window.alert("Game Over!");
      }
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
