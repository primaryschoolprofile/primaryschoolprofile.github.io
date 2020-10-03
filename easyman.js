index = "https://kwanyuen.beautysalon.hk";

$(function(){
  $(".header").html(`
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="` + index + `">
        <img width="81" height="81" src="https://www.easyman.hk/wp-content/uploads/2020/01/cropped-EAS-1-01.png" alt="Easy Man Business Solution">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="` + index + `">首頁</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="./funding">政府基金資助</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="./website">資訊科技應用</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="./accounting">財務管理策劃</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="./asia">國內東盟發展</a>
          </li>
        </ul>
      </div>
    </nav>
  `);
  $(".footer").html(`
    <div class="bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-lg-3 py-4">
            Easy Man Business Solution<br>
            商管易商業方案
          </div>
          <div class="col-12 col-sm-4 col-lg-3 py-4">
            info@easyman.hk<br>
            +852 3611 4061
          </div>
          <div class="col-12 col-sm-8 col-lg-4 py-4">
            Room 718, 7/F, New Tech Plaza,<br>
            34 Tai Yau Street, San Po Kong, HK
          </div>
          <div class="col-12 col-sm-4 col-lg-2 py-4">
            <a class="text-white" href="` + index + `">首頁</a><br>
            <a class="text-white" href="./funding">政府基金資助</a><br>
            <a class="text-white" href="./website">資訊科技應用</a><br>
            <a class="text-white" href="./accounting">財務管理策劃</a><br>
            <a class="text-white" href="./asia">國內東盟發展</a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 bg-secondary text-white text-center">
      Copyright © ` + new Date().getFullYear() + `<br>
      Easy Man Business Solution
    </div>
  `);
})
