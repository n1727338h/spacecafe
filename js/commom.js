
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

window.addEventListener("scroll", observation2);

const NEWS = document.querySelector(".NEWS");

function observation2() {
  const NEWSRect = NEWS.getBoundingClientRect();

  if (NEWSRect.top < window.innerHeight && NEWSRect.bottom >= 0) {
    NEWS.classList.add("active");
  } else {
    NEWS.classList.remove("active");
  }
}

const SERVICE = document.querySelector(".SERVICE");

function observation4() {
  const SERVICERect = SERVICE.getBoundingClientRect();

  if (SERVICERect.top < window.innerHeight && SERVICERect.bottom >= 0) {
    SERVICE.classList.add("active"); 
  } else {
    SERVICE.classList.remove("active");
  }
}

window.addEventListener("scroll", observation4);

window.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelector(".stars");

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

  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

const swiper = new Swiper(".swiper", {

  direction: "horizontal",
  loop: true,


  pagination: {
    el: ".swiper-pagination",
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 4, 
  breakpoints: {
    600: {
      slidesPerView: 3,
    }
  },
  speed: 6000, 
  allowTouchMove: false, 
  autoplay: {
    delay: 0, 
  },
});
