// 実績スライダー
$(".slider").slick({
  autoplay: true, // 自動でスクロール
  autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
  speed: 10000, // スライドが流れる速度を設定
  cssEase: "linear", // スライドの流れ方を等速に設定
  slidesToShow: 1, // 表示するスライドの数
  swipe: false, // 操作による切り替えはさせない
  arrows: false, // 矢印非表示
  pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
  pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2, // 画面幅750px以下でスライド3枚表示
      },
    },
  ],
});

const hum = document.querySelector(".humberger");
const header = document.querySelector(".top_header");

hum.addEventListener("click", () => {
  header.classList.toggle("open");
});
