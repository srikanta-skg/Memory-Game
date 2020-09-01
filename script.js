const gameContainer = document.getElementById("game");

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
  "purple"
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
let first_color, secound_color, second_Conditional, current_clicks, count = 0;
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you clicked", event.target);

  if (!current_clicks) {
    this.style.backgroundColor = this.className; // this reference to current object, similar to event.target
  } else return;

  if (second_Conditional) {
    secound_color = this;
    if (secound_color.className.includes("same_color") || secound_color.className.includes("matched")) {
      return;
    }
    current_clicks = true;
    first_color.classList.remove("same_color");
    second_Conditional = false;
    if (first_color.className != secound_color.className) {
      setTimeout(function () {
        first_color.style.backgroundColor = "white";
        secound_color.style.backgroundColor = "white";
        current_clicks = false;
      }, 1000);
    } else {
      first_color.classList.add("matched");
      secound_color.classList.add("matched");
      current_clicks = false;
      count++;

      if (count === 5) {
        alert("Congratulations You Have Won");
      }

    }
  } else {
    first_color = this;
    if (first_color.className.includes("matched")) {
      return;
    }
    this.classList.add("same_color");
    second_Conditional = true;
  }
}
// when the DOM loads
createDivsForColors(shuffledColors);
