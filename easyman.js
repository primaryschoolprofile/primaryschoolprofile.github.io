index = "https://kwanyuen.beautysalon.hk";

function logo(img, heading, phase_1, phase_2, phase_3, phase_4, link="") {
  basic = `
    <div class="py-2"><img width="120" height="120" src="` + img + `"></div>
    <b class="text-primary">` + heading + `</b><br>`+ phase_1 + `<br>` + phase_2 + `<br>` + phase_3 + `<br>` + phase_4;
  if (link == "") {
    return basic
  } else {
    return basic + `
      <div class="py-2">
        <a class="btn btn-primary" href="` + link + `" role="button">
          <span class="fas fa-search"></span> 更多
        </a>
      </div>
    `
  }
}

$(function(){
  $(".header").html(`
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="` + index + `">
        <img width="80" height="80" src="https://www.easyman.hk/wp-content/uploads/2020/01/cropped-EAS-1-01.png" alt="Easy Man Business Solution">
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
        <b class="text-warning">商管易Easy Man</b>協助初創或發展中企業成長，不同行業及階段有面對不同的需要，透過面談仔細了解經營者的情況，提供全方位的商業發展領域的落地意見；包括政府基金資助、資訊科技應用、財務管理策劃、國內東盟發展、推廣策劃、品質認証、版權商標、商業融資。「商管易」專業的團隊來自多個商業領域，如企業導師、資訊科技專家、數碼營銷專家、會計師、律師等，協助您突破事業瓶頸，商管從此好容易。
      </div>
      <div class="row">
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-1.png",
          "政府基金資助",
          "科技券計劃",
          "拓展內銷專項基金",
          "中小企市場推廣基金",
          "零售業科技支援計劃",
          "./funding"
        ) + `
        </div>
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-2.png",
          "資訊科技應用",
          "ERP / CRM / POS",
          "Web & Apps開發",
          "舊系統轉換新系統",
          "IT服務支援方案",
          "./website"
        ) + `
        </div>
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-3.png",
          "財務管理策劃",
          "成立香港公司",
          "會計 / 核數 / 年報",
          "會計師稅務策劃",
          "雲端財務管理系統",
          "./accounting"
        ) + `
        </div>
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-4.png",
          "國內東盟發展",
          "成立海外公司",
          "會計 / 核數 / 年報",
          "境外推廣策劃及管理",
          "境外人才招聘或外包",
          "./asia"
        ) + `
        </div>
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-5.png",
          "推廣策劃",
          "全面市場策略",
          "網上推廣宣傳",
          "獲取市場資訊",
          "銷售系統建立"
        ) + `
        </div>
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-6.png",
          "品質認証",
          "申請ISO認証",
          "ISO核証續期",
          "各行牌照諮詢",
          "品質手冊編寫"
        ) + `
        </div>
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-7.png",
          "商標版權",
          "版權諮詢",
          "商標註冊",
          "版權申請",
          "專利申請"
        ) + `
        </div>
        <div class="col-6 col-md-3 py-4 text-center">` + logo(
          "https://www.easyman.hk/wp-content/uploads/2019/11/EAS-4_Icon_Artboard-8.png",
          "商業融資",
          "股權設計實施",
          "融資規劃實施",
          "特許經營實施",
          "企業貸款諮詢"
        ) + `
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
