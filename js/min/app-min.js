jQuery(document).ready(function($){var e=$("body"),c=new TimelineLite;c.pause(),c.to(e,1,{backgroundColor:"#4abdac"}),$("#play").click(function(){c.play()}),$("#pause").click(function(){c.pause()}),$("#reverse").click(function(){c.reverse()})});