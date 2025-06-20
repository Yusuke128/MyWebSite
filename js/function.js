// function.js の完成コード

$(document).ready(function () {
  // 1. 実績スライダー (既存のコード)
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    slidesToShow: 1,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  //ハンバーガーメニュー (既存のコード)
  const hum = $(".humberger");
  const header = $(".top_header");
  const body = $("body");

  hum.on("click", function () {
    header.toggleClass("open");
    body.toggleClass("no-scroll");
  });

  // SP版でナビリンククリック時にメニューを閉じる
  $(".nav_link").on("click", function () {
    if (header.hasClass("open")) {
      header.removeClass("open");
      body.removeClass("no-scroll");
    }
  });

  // 【新規追加】コンテンツのスクロールアニメーション
  const animationTargets = $(".scroll_animation");

  const animation_option = {
    root: null,
    rootMargin: "0px 0px -20% 0px", // 画面下から20%見えたら発動
    threshold: 0,
  };

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("is-visible");
        observer.unobserve(entry.target); // 一度表示したら監視を解除
      }
    });
  }, animation_option);

  animationTargets.each(function () {
    animationObserver.observe(this);
  });
});
