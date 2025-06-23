$(document).ready(function () {
  let slider_class = $(".website,.design");

  // 実績部分の無限スライダー
  slider_class.slick({
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
        breakpoint: 796,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // スライダーのタブによる表示切り替え
  $(".works_button").on("click", function () {
    let tabId = $(this).data("tab"); //HTMLでdata-tabで設定している値を取得
    $(".works_button").removeClass("active");
    $(this).addClass("active");
    // 一度全てのactiveクラスを削除しクリックした要素にactiveクラスを付与する

    $(".slidebox").removeClass("active");
    $("." + tabId).addClass("active");

    if ($(this).hasClass("active")) {
      slider_class.slick("slickGoTo", 0);
      slider_class.slick("setPosition");
    }
  });
  //ハンバーガーメニュー
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
  /*
  // detailタグのスムーズな開閉処理
  // アニメーションの時間とイージング
  const animTiming = {
    duration: 500,
    easing: "ease-in-out",
  };

  // アコーディオンを閉じるときのキーフレーム
  const closingAnimation = (content) => [
    {
      height: content.offsetHeight + "px",
      opacity: 1,
    },
    {
      height: 0,
      opacity: 0,
    },
  ];

  // アコーディオンを開くときのキーフレーム
  const openingAnimation = (content) => [
    {
      height: 0,
      opacity: 0,
    },
    {
      height: content.offsetHeight + "px",
      opacity: 1,
    },
  ];

  document.querySelectorAll(".skillsContentBox").forEach(function (el) {
    const summary = el.querySelector(".skills_name");
    const content = el.querySelector(".skills_content");
    summary.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();
      // detailsのopen属性を判定
      if (el.getAttribute("open") !== null) {
        // アコーディオンを閉じるときの処理
        const closingAnim = content.animate(
          closingAnimation(content),
          animTiming
        );

        closingAnim.onfinish = () => {
          // アニメーションの完了後にopen属性を取り除く
          el.removeAttribute("open");
        };
      } else {
        // open属性を付与
        el.setAttribute("open", "true");
        // アコーディオンを開くときの処理
        const openingAnim = content.animate(
          openingAnimation(content),
          animTiming
        );
      }
    });
  });*/
});
