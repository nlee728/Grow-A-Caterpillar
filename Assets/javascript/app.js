      // JavaScript function that wraps everything
      $(document).ready(function() {

        var caterpillar = $(".caterpillar");

        // Size Buttons
        $(".normal-button").on("click", function() {
          caterpillar.animate({ height: "00px" });
          caterpillar.attr("src", "../Grow-A-Caterpillar/Assets/images/caterpillar.png");
        });
        $(".grow-button").on("click", function() {
          caterpillar.animate({ height: "+=50px" });
        });

        $(".meta-button").on("click", function() {
        caterpillar.attr("src", "../Grow-A-Caterpillar/Assets/images/cocoon.png");
        });
        $(".emerge-button").on("click", function() {
        caterpillar.attr("src", "../Grow-A-Caterpillar/Assets/images/butterfly.gif");
        });


        // Visibility Buttons
        $(".vis-button").on("click", function() {
          caterpillar.animate({ opacity: "1" });
        });
        $(".invis-button").on("click", function() {
          caterpillar.animate({ opacity: "0.05" });
        });

        // Move Buttons
        $(".up-button").on("click", function() {
          caterpillar.animate({ top: "-=200px" }, "normal");
        });
        $(".down-button").on("click", function() {
          caterpillar.animate({ top: "+=200px" }, "normal");
        });
        $(".left-button").on("click", function() {
          caterpillar.animate({ left: "-=200px" }, "normal");
        });
        $(".right-button").on("click", function() {
          caterpillar.animate({ left: "+=200px" }, "normal");
        });
        $(".back-button").on("click", function() {
          caterpillar.animate({ top: "50px", left: "80px" }, "fast");
        });

        // Keyboard move controls
        $(document).keyup(function(e) {
          switch (e.which) {

          // Move Buttons (Keyboard Down)
          case 40:
            caterpillar.animate({ top: "+=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Right)
          case 39:
            caterpillar.animate({ left: "+=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Up)
          case 38:
            caterpillar.animate({ top: "-=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Left)
          case 37:
            caterpillar.animate({ left: "-=200px" }, "normal");
            break;

          default:
            break;
          }
        });
      });