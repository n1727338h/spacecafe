// // 対象の要素を取得
// const CONCEPT = document.querySelector(".concept_text");

// //　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
// function observation() {
//   // 要素の位置情報を取得
//   const CONCEPTRect = CONCEPT.getBoundingClientRect();

//   // 画面内に入っているかどうかを判定
//   if (CONCEPTRect.top < window.innerHeight && CONCEPTRect.bottom >= 0) {
//     // 画面内に入った場合、クラスを付与
//     CONCEPT.classList.add("active"); // yourClassNameは付与したいクラス名に置き換えてください
//   } else {
//     // 画面外に出た場合、クラスを除去
//     CONCEPT.classList.remove("active");
//   }
// }

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

function GlowAnimeControl() {
  const elements = document.querySelectorAll('.glowAnime');
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elemPos = element.getBoundingClientRect().top;
    const scroll = window.scrollY || window.pageYOffset;

    if (scroll >= elemPos - windowHeight) {
      element.classList.add('glow');
    } else {
      element.classList.remove('glow');
    }
  });
}

function addSpanTags() {
  const elements = document.querySelectorAll('.glowAnime');

  elements.forEach((element) => {
    const text = element.textContent.trim();
    let textbox = '';

    text.split('').forEach((char, i) => {
      if (char !== ' ') {
        const delay = i < 10 ? `.${i}s` : `${i / 10}s`;
        textbox += `<span style="animation-delay:${delay}">${char}</span>`;
      } else {
        textbox += char;
      }
    });

    element.innerHTML = textbox;
  });
}

window.addEventListener('scroll', () => {
  GlowAnimeControl();
});

window.addEventListener('load', () => {
  addSpanTags();
  GlowAnimeControl();
});

// スクロールイベントを追加
window.addEventListener("scroll", observation2);

const NEWS = document.querySelector(".NEWS");

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation2() {
  // 要素の位置情報を取得
  const NEWSRect = NEWS.getBoundingClientRect();

  // 画面内に入っているかどうかを判定
  if (NEWSRect.top < window.innerHeight && NEWSRect.bottom >= 0) {
    // 画面内に入った場合、クラスを付与
    NEWS.classList.add("active"); // yourClassNameは付与したいクラス名に置き換えてください
  } else {
    // 画面外に出た場合、クラスを除去
    NEWS.classList.remove("active");
  }
}

const SERVICE = document.querySelector(".SERVICE");

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation4() {
  // 要素の位置情報を取得
  const SERVICERect = SERVICE.getBoundingClientRect();

  // 画面内に入っているかどうかを判定
  if (SERVICERect.top < window.innerHeight && SERVICERect.bottom >= 0) {
    // 画面内に入った場合、クラスを付与
    SERVICE.classList.add("active"); // yourClassNameは付与したいクラス名に置き換えてください
  } else {
    // 画面外に出た場合、クラスを除去
    SERVICE.classList.remove("active");
  }
}

window.addEventListener("scroll", observation4);

window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars");

  // 星を生成する関数
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; // 星の最小サイズを指定
    const maxSize = 2; // 星の最大サイズを指定
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  // for文で星を生成する関数を指定した回数呼び出す
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
  slidesPerView: 4, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
});
