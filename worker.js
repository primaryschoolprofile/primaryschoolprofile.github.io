function P(item){
  check = $("." + item + " label:contains('" + eval(item) + "') input").prop("checked");
  return check
}

onmessage = function(event) {
  array = event.data;
  id = array[0];
  district = array[1];
  net = array[2];
  subsidy = array[3];
  religion = array[4];
  connection = array[5];
  assessment = array[6];
  if (P("district") && P("net") && P("subsidy") && P("religion") && P("connection") && P("assessment")) {
    $(".s-" + id).removeClass("d-none");
  } else {
    $(".s-" + id).addClass("d-none");
  }
}
