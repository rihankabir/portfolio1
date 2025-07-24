 AOS.init();
  const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 25,
  autoplay: {
    delay: 3000, // slide every 3 seconds
    disableOnInteraction: false, // continue autoplay after user touch/click
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // small phones
    },
    576: {
      slidesPerView: 2, // larger phones
    },
    768: {
      slidesPerView: 2, // tablets
    },
    1024: {
      slidesPerView: 3, // small desktops
    },
    1200: {
      slidesPerView: 3, // wide screens
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
  const swiperEl = document.querySelector('.mySwiper');

swiperEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

swiperEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please enter a valid email.';
      return;
    }

    formMessage.style.color = '#00ff95';
    formMessage.textContent = 'Message sent successfully! (demo)';
    this.reset();
  });

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

 new WOW().init();
