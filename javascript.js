function select_all(element){
  $(element).siblings().each(function(){
    $(this).find("input").prop("checked", true);
  });
}

function clear_all(element){
  $(element).siblings().each(function(){
    $(this).find("input").prop("checked", false);
  });
}

function wrap(item){
  result = "<label class='checkbox-inline pr-2'><input type='checkbox' checked='checked'>" + item + "</label>"
  return result
}

function gen_html_all(options, index){
  result = ""
  if (options[index].length > 3){
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

function gen_code_filter(chi, eng, index){
  result = "$('.filter').append(gen_html('" + chi + "', '" + eng + "')); eval(gen_code_temp('" + eng + "', '" + index + "'));"
  return result
}

function myFunction(chi, index, school, i){
  var html = "";
  if (chi == "概覽") {
    html = '<div class="row"><div class="col-4 col-sm-2 col-lg-1"><h5>概覽</h5></div><div class="col-8 col-sm-10 col-lg-11"><a href="https://www.chsc.hk/psp2018/sch_detail.php?lang_id=2&sch_id=' + school[i][0] + '" target="_blank">按此</a></div></div>'
  } else {
    html = '<div class="row"><div class="col-4 col-sm-2 col-lg-1"><h5>' + chi + '</h5></div><div class="col-8 col-sm-10 col-lg-11">' + school[i][index] + '</div></div>'
  }
  return html
}

$(function(){

  $.get("https://primaryschoolprofile.github.io/options.txt", function(data, status){
    options = eval(data);
    eval(gen_code_filter("地區", "district", 1));
    eval(gen_code_filter("校網", "net", 2));
    eval(gen_code_filter("類別", "subsidy", 3));
    eval(gen_code_filter("宗教", "religion", 4));
    eval(gen_code_filter("中學", "connection", 5));
    eval(gen_code_filter("測考", "assessment", 6));
  });
  
  $(".browse").click(function(){
    $.get("https://primaryschoolprofile.github.io/display.txt", function(data, status){
      school = eval(data);
      for (i = 0; i < school.length; i++) {
        $(".profile").append(`
          <div class="py-4">
            <h3>`+ school[i][1] + `</h3>` +
            myFunction("概覽", 0, school, i) + 
            myFunction("地區", 3, school, i) + 
            myFunction("校網", 4, school, i) + 
            myFunction("類別", 5, school, i) + 
            myFunction("宗教", 6, school, i) + 
            myFunction("龍校", 7, school, i) + 
            myFunction("直屬", 8, school, i) + 
            myFunction("聯繫", 9, school, i) + 
            myFunction("測驗", 10, school, i) + 
            myFunction("考試", 11, school, i) + 
            myFunction("分班", 12, school, i) + 
            myFunction("照顧", 13, school, i) +
            myFunction("融合", 14, school, i) + 
            myFunction("調適", 15, school, i) + `
          </div>
        `);
      }
    });
  });
});
