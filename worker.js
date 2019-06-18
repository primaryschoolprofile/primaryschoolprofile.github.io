function P(item){
  return eval(item + "_chosen.indexOf(" + item + ") == -1")
}

onmessage = function(event){
  data = event.data;
  array = data[0];
  district_chosen = data[1];
  net_chosen = data[2];
  subsidy_chosen = data[3];
  religion_chosen = data[4];
  connection_chosen = data[5];
  assessment_chosen = data[6]
  id = array[0];
  district = array[1];
  net = array[2].toString();
  subsidy = array[3];
  religion = array[4];
  connection = array[5];
  assessment = array[6].toString();
  postMessage([id, P("district") || P("net") || P("subsidy") || P("religion") || P("connection") || P("assessment")]);
}
© 2019 GitHub, Inc.
