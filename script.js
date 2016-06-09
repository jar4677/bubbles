//document ready for click handlers
$(document).ready(function(){
    //click handler for adding shapes
    $("#new").click(function () {
        fillWithShapes();
        $(this).hide();
    });
    
    //delegated click handler for moving shapes
    $("body").on("mouseover", ".circle", moveShape);
});

/**
 * fillWithShapes - fills the screen with shapes
 **/
function fillWithShapes(){
    for(var x = 0; x < window.innerWidth; x += 50){
        for(var y = 0; y < window.innerHeight; y += 50){
            var shape = $("<div>").addClass("circle").css({
                "background-color": randomColor(),
                "top": y,
                "left": x
            });
            $('body').append(shape);
        }
    }
}

/**
 * moveShape - randomly moves shape around the page
 **/
function moveShape(){
    var position = randomPosition();
    $(this).css({"top": position[0], "left": position[1]});
}

/**
 * randomPosition - gets random top and left positions
 * @returns {Array}
 **/
function randomPosition(){
    var top = Math.ceil(Math.random() * window.innerHeight);
    var left = Math.ceil(Math.random() * window.innerWidth);
    var position = [top, left];
    
    return position;
}

/**
 * randomColor - gets random color
 * @returns {string}
 **/
function randomColor(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    return color;
}
