$(function(){
  var display;
  var filter;
  var options;
  $.post("https://primaryschoolprofile.github.io/display.txt", function(data, status){
    $(".test").html(data);
  });
  
});
