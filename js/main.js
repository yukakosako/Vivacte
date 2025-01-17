$(function () {

  $(".toggle-btn").click(function(){
    $("header").toggleClass("open");
  });

  $("#mask").click(function(){
    $("header").removeClass("open");
  });

  $(".navigation a").click(function(){
    $("header").removeClass("open");
  });

// index.html以外のtoggle-btn

  $(".toggle-btn-contact").click(function(){
    $(".header-contact").toggleClass("open");
  });

  $("#mask2").click(function(){
    $(".header-contact").removeClass("open");
  });

  $(".navigation2 a").click(function(){
    $(".header-contact").removeClass("open");
  });

  
  $(".slide-item").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 2000, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });
});
