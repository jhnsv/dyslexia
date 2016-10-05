

jQuery(document).ready(function($){

  var head = $("body");
  //instantiate a TimelineLite    
var tl = new TimelineLite({paused:true});

//add a from() tween at the beginning of the timline

tl.to(head, 0.5, {backgroundColor:"#4abdac"});
tl.staggerTo(".main .ani", 0.5, {ease: Power2.easeOut, y:"-20", autoAlpha:0}, 0.1, "-=0.5");

tl.staggerTo(".form .ani", 0.5, {ease: Power2.easeOut, y:"+20", autoAlpha:1, delay: 1}, 0.1, "stagger");


$("#play").click(function() {
        tl.play();
});
        
$("#pause").click(function() {
        tl.pause();
});
        
$(".home").click(function(e) {
        tl.reverse();
        e.preventDefault();
});

});