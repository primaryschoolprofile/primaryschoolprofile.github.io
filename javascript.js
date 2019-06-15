$(function(){
  
  $.get("https://primaryschoolprofile.github.io/options.txt", function(data, status){
    options = eval(data);
    district = options[1]
    for (x in district) {
      $(".district").append(x)
    }
  });
  
});
