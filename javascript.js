function wrap(item){
  return "<label class='checkbox-inline pr-2'><input type='checkbox' value='' checked>" + item + "</label>"
}

function gen_html_all(options, index){
  if (options[index].length > 3) {
    return wrap("全選") + wrap("清除")
  } else {
    return ""
  }
}

function gen_code_temp(eng, index){
  code = eng + ` = options[` + index + `];
    $(".` + eng + `").append(gen_html_all(options, ` + index + `));
    for (x in ` + eng + `) {
      $(".` + eng + `").append(wrap(x))
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
  return "$('.filter').append(gen_html(chi, eng)); eval(gen_code_temp(eng, index));"
}
  
  
$(function(){

  $.get("https://primaryschoolprofile.github.io/options.txt", function(data, status){
    options = eval(data);
    eval(gen_code("地區", "district", 1));
    evel(gen_code("校網", "net", 2));
    eval(gen_code("類別", "subsidy", 3));
    eval(gen_code("宗教", "religion", 4));
    eval(gen_code("連繫", "connection", 5));
    eval(gen_code("測考", "assessment", 6));
  });
  
});
