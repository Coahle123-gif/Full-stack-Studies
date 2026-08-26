$("h1").addClass("big-title jumbo");

$("h1").click(function(){
  $("h1").css("color", "purple");
});

$("button").click(function(){
  $("h1").slideUp().slideDown().animate().css("color", "Purple");
});

var text = $("h1").text();

$("input").keypress(function(event){
  console.log(event.key);
  $("h1").text(event.key + $("h1").text().after);
});

$("h1").before("<button>New</button>");
