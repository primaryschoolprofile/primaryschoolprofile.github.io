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
  result = "<label class='checkbox-inline pr-2 d-none'><input type='checkbox'>" + item + "</label>"
  return result
}

function gen_html_all(){
  return "<label class='checkbox-inline pr-2'><input type='checkbox' checked='checked'>全選</label>"
}

function gen_code_temp(eng, index){
  code = eng + ` = options[` + index + `];
    $(".` + eng + `").append(gen_html_all());
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
  result = `
    $('.filter').append(gen_html('` + chi + `', '` + eng + `'));
    eval(gen_code_temp('` + eng + `', '` + index + `'));`
  console.log(result);
  return result
}

function display_html(chi, index, school, i){
  var html = "";
  if (chi == "概覽") {
    html = '<div class="row"><div class="col-4 col-sm-2 col-lg-1"><h5>概覽</h5></div><div class="col-8 col-sm-10 col-lg-11"><a href="https://www.chsc.hk/psp2018/sch_detail.php?lang_id=2&sch_id=' + school[i][0] + '" target="_blank">按此</a></div></div>'
  } else {
    html = '<div class="row"><div class="col-4 col-sm-2 col-lg-1"><h5>' + chi + '</h5></div><div class="col-8 col-sm-10 col-lg-11">' + school[i][index] + '</div></div>'
  }
  return html
}

function myfunction(item){
  result = [];
  $(".filter row:contains(" + item + ") input").each(function(){
    if ($(this).prop("checked")) {
      result = result.concat([$(this).parent().text()])
    }
  });
  return result
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
  
  $.get("https://primaryschoolprofile.github.io/display.txt", function(data, status){
    school = eval(data);
    for (i = 0; i < school.length; i++) {
      $(".profile").append(`
        <div class="py-4 s-` + school[i][0] + `">
          <h3>`+ school[i][1] + `</h3>` +
          display_html("概覽", 0, school, i) + 
          display_html("地區", 3, school, i) + 
          display_html("校網", 4, school, i) + 
          display_html("類別", 5, school, i) + 
          display_html("宗教", 6, school, i) + 
          display_html("龍校", 7, school, i) + 
          display_html("直屬", 8, school, i) + 
          display_html("聯繫", 9, school, i) + 
          display_html("測驗", 10, school, i) + 
          display_html("考試", 11, school, i) + 
          display_html("分班", 12, school, i) + 
          display_html("照顧", 13, school, i) +
          display_html("融合", 14, school, i) + 
          display_html("調適", 15, school, i) + `
        </div>
      `);
    }
  });

  $(".browse").click(function(){
    if (window.Worker) {
      $.get("https://primaryschoolprofile.github.io/filter.txt", function(info, status){
        filter = eval(info);
        district_chosen = myfunction("地區");
        net_chosen = myfunction("校網");
        subsidy_chosen = myfunction("類別");
        religion_chosen = myfunction("宗教");
        connection_chosen = myfunction("中學");
        assessment_chosen = myfunction("測考");
        for (i = 0; i < filter.length; i++) {
          const w = new Worker("https://primaryschoolprofile.github.io/worker.js");
          w.postMessage([filter[i], district_chosen, net_chosen, subsidy_chosen, religion_chosen, connection_chosen, assessment_chosen]);
          w.onmessage = function(event){
            data = event.data;
            if (data[1]) {
              $(".s-" + data[0]).addClass("d-none");
              console.log("hide", data[0])
            } else {
              $(".s-" + data[0]).removeClass("d-none");
              console.log("show", data[0])
            }
          }
        }
      });
    } else {
      $(".browse").append("<div class='py-4'><h5>瀏覽器不支援</h5></div>");
    }
  });

});

function myfunction(item){
  result = [];
  $(".filter .row:contains(" + item + ") input").each(function(){
    if ($(this).prop("checked")) {
      result = result.concat([$(this).parent().text()])
    }
  });
  return result
}
