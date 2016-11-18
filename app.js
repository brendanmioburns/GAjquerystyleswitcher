$(document).ready(function() {
    // change colors
    $("#change-red").on("click", function() {
        $("#red-div").css("background-color", "red");
    });
    $("#change-green").on("click", function() {
        $("#green-div").css("background-color", "green");
    });
    $("#change-blue").on("click", function() {
        $("#blue-div").css("background-color", "blue");
    });

    // change sizes
    $("#make-big").on("click", function() {
        $("#big-div")
            .css("height", "600px")
            .css("width", "300%");
    });
    $("#make-small").on("click", function() {
        $("#small-div")
            .css("height", "100px")
            .css("width", "50%");
    });
    $("#make-animate").on("click", function() {
        $("#animate-div").addClass("animate");
    });

    // create full screen overlay
    $("#create-overlay").on("click", function() {
        $("#overlay-text").css("display", "block");
    });
});
