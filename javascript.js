$(function(){
  var display;
  var filter;
  var options;
  $.post("https://primaryschoolprofile.github.io/display", function(data, status){
    $(.test).html(data);
  });
  
});
