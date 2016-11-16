$(document).ready(function(){
  var currentScore = 0;

// add by 5
  $("#increase-5").on("click", function() {
    currentScore = currentScore + 5;
    // score += 5;
    $("#score").html(currentScore);
    // + " " + "Points"
  });

// subtract by 5
  $("#decrease-5").on("click", function() {
    currentScore = currentScore - 5;
    if (currentScore < 0) {
      currentScore = 0;
      $("#score").html(0);
    } else {
      $("#score").html(currentScore);
    }
  });

// alternative approach
  //   if (currentScore > 5) {
  //   currentScore = currentScore - 5;
  //   } else {
  //   currentScore = 0;
  //   }
  //   $("#score").html(currentScore);
  // });


// set custom value
  $("#set-score").on("submit", function(event) {
    event.preventDefault();
      var  customScore = parseInt($("#custom-score").val());
      // var customScore = $("#custom-score").val();
      // var customScoreInt = parseInt(customScore);
        if (customScore >= 0) {
        currentScore = customScore;
        $("#score").html(currentScore);
      }
  });

});


// if (customScoreInt >= 0) {
//   score =customScoreInt;
//   $(#score).html(score + " Points");
//   $("#custom-score").val("");
// } else {
//   score = 0;
//   $(#score).html("0 Points");
//   alert("You can't enter a negative score!");
// }
// });
