var numberOptions = [];
var clicksMax = 4;
var clicksMin = 1;
var crystalValueMax = 12;
var crystalValueMin = 1;
var targetNumber = 0;
var randomClicks = 0;
var randomNumber = 0;
var lives = 0;

// Build an array of random numbers

while (numberOptions.length < 4) {
  randomNumber = Math.floor(Math.random() * crystalValueMax) + crystalValueMin;
  if (numberOptions.includes(randomNumber)) { 
    console
  }
  else {      
    numberOptions.push(randomNumber);
  }
}

console.log(numberOptions);

// Build a target number out of the point values of each crystal multiplied by a small random number 

for (var i = 0; i < 4; i++) { 
  randomClicks = Math.floor(Math.random() * clicksMax) + clicksMin;
  targetNumber += (numberOptions[i] * (randomClicks));                                            // Add Lives
  lives += randomClicks
  console.log(i + ") randomClicks: " + randomClicks + ", targetNumber: " + targetNumber+ ".");
}

console.log("The target number is: " + targetNumber)

$("#number-to-guess").html("<h1>Number to Guess: " + targetNumber + "</h1>");

var counter = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.
// We begin by expanding our array to include four options.
// Next we create a for loop to create crystals for every numberOptions.

for (var i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "assets/images/Titanium_Crystal.png");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    $("#number-to-guess").html("<h2>Number to Guess: " + targetNumber + "</h2>");

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  // alert("New score: " + counter);

  lives--; // decrement lives variable

  $("#current-number").text("Current Number: " + counter + " Lives left: " + lives); // change text in current-number tag

  if (counter === targetNumber) { // current number equals target number
    $("#game-info").html("<h1>You Win!</h1>"); // change html
  }

  else if (counter >= targetNumber || lives <= 0) { // 
    $("#game-info").html("<h1>You Lose!</h1>");
  }
});

  