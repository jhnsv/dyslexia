

jQuery(document).ready(function($){

  var head = $("body");
  //instantiate a TimelineLite    
var tl = new TimelineLite();

//add a from() tween at the beginning of the timline
tl.pause();
tl.to(head, 1, {backgroundColor:"#4abdac"});
//tl.staggerFrom("li", 0.2, {scale:0, autoAlpha:0}, 0.1, "stagger");


$("#play").click(function() {
        tl.play();
});
        
$("#pause").click(function() {
        tl.pause();
});
        
$("#reverse").click(function() {
        tl.reverse();
});

});