function wrap(item){
  result = "<label class='checkbox-inline pr-2'><input type='checkbox' value='' checked>" + item + "</label>"
  console.log("wrap: ", result)
  return result
}

function gen_html_all(options, index){
  result = ""
  if (options[index].length > 3) {
    result = wrap("全選") + wrap("清除")
  }
  console.log("gen_html_all: ", result)
  return result
}

function gen_code_temp(eng, index){
  code = eng + ` = options[` + index + `];
    $(".` + eng + `").append(gen_html_all(options, ` + index + `));
    for (x in ` + eng + `) {
      $(".` + eng + `").append(wrap(x))
    }`
  console.log("gen_code_temp: ", code)
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
  console.log("gen_html: ", html)
  return html
}

function gen_code(chi, eng, index) {
  result = "$('.filter').append(gen_html('" + chi + "', '" + eng + "')); eval(gen_code_temp('" + eng + "', '" + index + "'));"
  console.log("gen_code: ", result)
  return result
}
  
  
$(function(){

  $.get("https://primaryschoolprofile.github.io/options.txt", function(data, status){
    options = eval(data);
    console.log("options: ", options)
    eval(gen_code("地區", "district", 1));
    //eval(gen_code("校網", "net", 2));
    //eval(gen_code("類別", "subsidy", 3));
    //eval(gen_code("宗教", "religion", 4));
    //eval(gen_code("連繫", "connection", 5));
    //eval(gen_code("測考", "assessment", 6));
  });
  
});
