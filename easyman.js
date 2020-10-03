index = "https://kwanyuen.beautysalon.hk";
funding = "https://kwanyuen.beautysalon.hk/funding";
website = "https://kwanyuen.beautysalon.hk/website";
accounting = "https://kwanyuen.beautysalon.hk/accounting";
asia ="https://kwanyuen.beautysalon.hk/asia";

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
            <a class="nav-link" href="` + funding + `">政府基金資助</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="` + website + `">資訊科技應用</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="` + accounting + `">財務管理策劃</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="` + asia + `">國內東盟發展</a>
          </li>
        </ul>
      </div>
    </nav>
  `);
  $(".index").html(`
    <div class="container">
	    <div class="py-4">
 	    	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      		<ol class="carousel-indicators">
         		<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        		<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        		<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      		</ol>
      		<div class="carousel-inner">
        		<div class="carousel-item active">
          		<img src="https://www.easyman.hk/wp-content/uploads/2020/01/EAS-4_Banner_Artboard-3.jpg" class="d-block w-100" alt="EAS-4_Banner_Artboard 3">
        		</div>
         		<div class="carousel-item">
          		<img src="https://www.easyman.hk/wp-content/uploads/2020/01/EAS-4_Banner_Artboard-2.jpg" class="d-block w-100" alt="Print">
    	    	</div>
    	    	<div class="carousel-item">
          		<img src="https://www.easyman.hk/wp-content/uploads/2020/01/EAS-4_Banner-01.jpg" class="d-block w-100" alt="Print">
        		</div>
  	    	</div>
  	    	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
        		<span class="sr-only">Previous</span>
      		</a>
      		<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        		<span class="carousel-control-next-icon" aria-hidden="true"></span>
        		<span class="sr-only">Next</span>
  	    	</a>
	    	</div>
	    </div>
	    <div class="py-4">
	    	<span class="text-warning">商管易Easy Man</span>協助初創或發展中企業成長，不同行業及階段有面對不同的需要，透過面談仔細了解經營者的情況，提供全方位的商業發展領域的落地意見；包括政府基金資助、資訊科技應用、財務管理策劃、國內東盟發展、推廣策劃、品質認証、版權商標、商業融資。「商管易」專業的團隊來自多個商業領域，如企業導師、資訊科技專家、數碼營銷專家、會計師、律師等，協助您突破事業瓶頸，商管從此好容易。
	    </div>
	    <div class="row">
	    	<div class="col-3 py-4">
	    		<a href="` + funding + `">
            
	    	</div>
	    </div>
    </div>
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
            <a class="text-white href="` + funding + `">政府基金資助</a><br>
            <a class="text-white href="` + website + `">資訊科技應用</a><br>
            <a class="text-white href="` + accounting + `">財務管理策劃</a><br>
            <a class="text-white href="` + asia + `">國內東盟發展</a>
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
