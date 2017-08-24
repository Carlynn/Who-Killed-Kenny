console.log("linked");
// wait for the DOM to finish loading
$(document).ready(function() {

  //Set up jquery

  //Set variables for widths
  let cartmanSteps = 80;
  let buttersSteps = 80;
  let kennySteps = 80;
  //Determine if characters is less than the width of the screen
  let width = $(".allCharacters").width();

  //Once start button is pressed kenny moves on his own to the right of the screen
  $(".beginGame").on("click", function() {
     $(".kenny").animate({"margin-left": `${width}`-75}, 3000);
  });

  //Create keyboard functions for cartman and butters
  $(document).on("keydown", function (event) {
    // Run this if cartman is less than the total width of the screen
    if (cartmanSteps < width-100) {
      //function for keycode, right arrow
      if (event.which === 39) {
        //Move cartman right
        $(".cartman").finish().animate({"margin-left": "+=50px"});
        //Add steps to the cartmanSteps
        cartmanSteps += 50;
      };
    } else if (cartmanSteps = (width && buttersSteps < width)) {
      $(".cartmanWins").css("visibility", "visible");
      //Stop all keydown buttons from working
      $(document).off("keydown");
    };
    // Run this if butters is less than the total width of the screen
    if (buttersSteps < width-100) {
      //function for keycode, 1 number
      if (event.which === 49) {
        //Move butters right
        $(".butters").finish().animate({"margin-left": "+=50px"});
        //Add steps to the buttersSteps
        buttersSteps += 50;
      };
    } else {
      $(this).stop();
      $(".buttersWins").css("visibility", "visible");
      //Stop all keydown buttons from working
      $(document).off("keydown");
    };
  });

});


//Move kenny at random speeds?

//Show an image of who Kenny dead
//Show an image of who the winner is
