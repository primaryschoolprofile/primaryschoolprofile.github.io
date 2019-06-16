function clear_all(element){
  $(element).siblings().each(function(){
    $(this).children().removeAttribute("checked");
  });
}

function wrap(item){
  result = "<label class='checkbox-inline pr-2'><input type='checkbox' checked>" + item + "</label>"
  return result
}

function gen_html_all(options, index){
  result = ""
  if (options[index].length > 3) {
    result = "<span class='pr-2' onclick='select_all(this)'>(全選)</span><span class='pr-2' onclick='clear_all(this)'>(清除)</span>"
  }
  return result
}

function gen_code_temp(eng, index){
  code = eng + ` = options[` + index + `];
    $(".` + eng + `").append(gen_html_all(options, ` + index + `));
    for (i = 0; i < ` + eng + `.length; i++) {
      $(".` + eng + `").append(wrap(` + eng + `[i]));
    }`
  return code
}

function gen_html(chi, eng){
  html = `
    <div class="row">
      <div class="col-4 col-sm-2 col-lg-1">
        <h5>` + chi + `</h5>
      </div>
      <div class="col-8 col-sm-10 col-lg-11">
        <form class="` + eng + `"></form>
      </div>
    </div>`
  return html
}

function gen_code(chi, eng, index) {
  result = "$('.filter').append(gen_html('" + chi + "', '" + eng + "')); eval(gen_code_temp('" + eng + "', '" + index + "'));"
  return result
}
  
$(function(){

  $.get("https://primaryschoolprofile.github.io/options.txt", function(data, status){
    options = eval(data);
    eval(gen_code("地區", "district", 1));
    eval(gen_code("校網", "net", 2));
    eval(gen_code("類別", "subsidy", 3));
    eval(gen_code("宗教", "religion", 4));
    eval(gen_code("中學", "connection", 5));
    eval(gen_code("測考", "assessment", 6));
  });
  
});
