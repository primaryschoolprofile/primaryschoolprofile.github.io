function select_all(element){
  $(element).find("input").prop("checked", true);
  $(element).siblings().each(function(){
    $(this).find("input").prop("checked", true);
  });
  $(element).siblings(".clear").find("input").prop("checked", false);
}

function clear_all(element){
  $(element).find("input").prop("checked", true);
  $(element).siblings().each(function(){
    $(this).find("input").prop("checked", false);
  });
}

function wrap(item){
  result = `<label class='checkbox-inline pr-2 option' onclick='
    all_chosen = true;
    none_chosen = true;
    if ($(this).find("input").prop("checked")) {
      none_chosen = false;
      $(this).siblings(".option").each(function(){
        if ($(this).find("input").prop("checked") == false) {
          all_chosen = false;
        }
      });      
    } else {
      all_chosen = false;
      $(this).siblings(".option").each(function(){
        if ($(this).find("input").prop("checked") == true) {
          none_chosen = false;
        }
      });
    }
    if (all_chosen) {
      $(this).siblings(".all").find("input").prop("checked", true);
    } else {
      $(this).siblings(".all").find("input").prop("checked", false);
    }
    if (none_chosen) {
      $(this).siblings(".clear").find("input").prop("checked", true);
    } else {
      $(this).siblings(".clear").find("input").prop("checked", false);
    }'><input type='checkbox' checked='checked'>` + item + `</label>`
  return result
}

function gen_html_all(options, index){
  result = `<label class='checkbox-inline pr-2 all' onclick='select_all(this)'><input type='checkbox' checked='checked'>全選</label>
            <label class='checkbox-inline pr-2 clear' onclick='clear_all(this)'><input type='checkbox'>清除</label>`
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

function display_html(chi, index, school, i){
  var html = "";
  if (chi == "概覽") {
    html = '<div class="row"><div class="col-4 col-sm-2 col-lg-1"><h5>概覽</h5></div><div class="col-8 col-sm-10 col-lg-11"><a href="https://www.chsc.hk/psp2018/sch_detail.php?lang_id=2&sch_id=' + school[i][0] + '" target="_blank">按此</a></div></div>'
  } else {
    html = '<div class="row"><div class="col-4 col-sm-2 col-lg-1"><h5>' + chi + '</h5></div><div class="col-8 col-sm-10 col-lg-11">' + school[i][index] + '</div></div>'
  }
  return html
}

function chosen(item){
  result = [];
  $(".filter .row:contains(" + item + ") input").each(function(){
    if ($(this).prop("checked")) {
      result.push($(this).parent().text())
    }
  });
  return result
}

function profile(index, school){
  i = school[0].indexOf(index);
  school_original = school[1]
  html = `
    <div class="py-4">
      <h3>`+ school[1][i][1] + `</h3>` + 
      display_html("概覽", 0, school_original, i) + 
      display_html("地區", 3, school_original, i) + 
      display_html("校網", 4, school_original, i) + 
      display_html("類別", 5, school_original, i) + 
      display_html("宗教", 6, school_original, i) + 
      display_html("龍校", 7, school_original, i) + 
      display_html("直屬", 8, school_original, i) + 
      display_html("聯繫", 9, school_original, i) + 
      display_html("測驗", 10, school_original, i) + 
      display_html("考試", 11, school_original, i) + 
      display_html("分班", 12, school_original, i) + 
      display_html("照顧", 13, school_original, i) + 
      display_html("融合", 14, school_original, i) + 
      display_html("調適", 15, school_original, i) + `
    </div>`
  return html
}

function all_selected(item){
  result = $(".filter .row:contains(" + item + ") .all input").prop("checked");
  //console.log(item, result);
  return result
}

function array_of_chosen(array){
  result = array;
  for (i = 0; i < array.length; i++) {
    result[i] = chosen(result[i]);
  }
  return result
}

function union(array_of_chosen){
  result = eval(array_of_chosen[0]);
  for (i = 1; i < array_of_chosen.length; i++) {
    result = result.concat(eval(array_of_chosen[i]));
  }
  return result
}

function intersection_of_two_arrays(array1, array2){
  result = [];
  for (i = 0; i < array1.length; i++) {
    element = array1[i];
    if (array2.indexOf(element) != -1) {
      result.push(element);
    }
  }
  return result
}

function intersection(array_of_arrays){
  sorted = array_of_arrays.sort(function(a, b){return a.length-b.length});
  result = sorted[0];
  for (i = 1; i < sorted.length; i++) {
    result = intersection_of_two_arrays(result, sorted[i]);
  }
  return result
}

function concatenate(matrix, array){
  result = "["
  for (i = 0; i < matrix.length; i++) {
    result = result + "matrix[" + i + "], "
  }
  result = result + "array]"
  return eval(result)
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
  
  $.get("display.txt", function(data, status){
    school = eval(data);
    school_original = school[1];
    for (i = 0; i < school_original.length; i++) {
      index = school_original[i][0];
      $(".profile").append(profile(index, school));
    }
    $(".browse").click(function(){
      $.get("data.txt", function(info, status){
        eval(info)
        items_chi = ["地區", "校網", "類別", "宗教", "中學", "測考"];
        items_eng = ["district", "net", "subsidy", "religion", "connection", "assessment"];
        temp1 = [];
        for (i = 0; i < items_chi.length; i++) {
          temp2 = items_chi[i];
          if (all_selected(temp2) == false) {
            temp1.push(temp2);
          }
        }
        //temp1: ["宗教", "測考"]
        if (temp1.length == 0) {
          $(".profile").html("");
          for (i = 0; i < school_original.length; i++) {
            index = school_original[i][0];
            $(".profile").append(profile(index, school));
          }
        } else {
          temp6 = []
          for (i = 0; i < temp1.length; i++) {
            temp3 = temp1[i];
            //temp3: "宗教"
            temp4 = chosen(temp3);
            //temp4: ["不適用", ...]
            temp5 = union(temp4);
            //temp5: [id_0, id_1, id_2, ...]
            temp6 = concatenate(temp6, temp5);
          }
          //temp6: [[id, id, ...], [id, id, ...], ...]
          pass = intersection(temp6);
          $(".profile").html("");
          //console.log("initial", $(".profile").html());
          //console.log(pass.length)
          console.log(0, pass[0], profile(pass[0], school));
          console.log(1, pass[1], profile(pass[1], school));
          console.log(2, pass[2], profile(pass[2], school));
          console.log(3, pass[3], profile(pass[3], school));
          console.log(4, pass[4], profile(pass[4], school));
                    console.log(5, pass[5], profile(pass[5], school));
                    console.log(6, pass[6], profile(pass[6], school));
                    console.log(7, pass[7], profile(pass[7], school));
                    console.log(8, pass[8], profile(pass[8], school));
                    console.log(9, pass[9], profile(pass[9], school));
                    console.log(10, pass[10], profile(pass[10], school));
                    console.log(11, pass[11], profile(pass[11], school));
                    console.log(12, pass[12], profile(pass[12], school));
                    console.log(13, pass[13], profile(pass[13], school));
                    console.log(14, pass[14], profile(pass[14], school));
          console.log(15, pass[15], profile(pass[15], school));
                    console.log(16, pass[16], profile(pass[16], school));
                    console.log(17, pass[17], profile(pass[17], school));
          console.log(18, pass[18], profile(pass[18], school));
                    console.log(19, pass[19], profile(pass[19], school));
                    console.log(20, pass[20], profile(pass[20], school));
                    console.log(21, pass[21], profile(pass[21], school));
                    console.log(22, pass[22], profile(pass[22], school));
                    console.log(23, pass[23], profile(pass[23], school));
                    console.log(24, pass[24], profile(pass[24], school));
          for (i = 0; i < pass.length; i++) {
            //console.log(i, pass[i], profile(pass[i], school))
            //$(".profile").append(profile(pass[i], school));
           //console.log($(".profile").html())
          }
         //console.log("final", $(".profile").html())
        }
      });
    });
  });

});
