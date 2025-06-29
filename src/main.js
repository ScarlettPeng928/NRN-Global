document.addEventListener('DOMContentLoaded', () => {
  //── 1. Navbar 顏色切換 & desktop dropdown ──
  let isHoveringDropdown = false;
  const navbar         = document.getElementById("navbar");
  const desktopShop    = document.getElementById("shop-link");
  const dropdownShop   = document.getElementById("dropdown-shop");

  function handleNavbarColor() {
    if (window.scrollY > 0 || isHoveringDropdown) {
      navbar.classList.remove("absolute","bg-transparent","text-gray-800");
      navbar.classList.add("fixed","bg-white","text-black","shadow-md");
    } else {
      navbar.classList.add("absolute","bg-transparent","text-gray-800");
      navbar.classList.remove("fixed","bg-white","text-black","shadow-md");
    }
  }

  window.addEventListener("scroll", () => {
    if (!isHoveringDropdown) handleNavbarColor();
  });

  desktopShop.addEventListener("mouseenter", () => {
    isHoveringDropdown = true;
    dropdownShop.classList.remove("hidden");
    handleNavbarColor();
  });
  dropdownShop.addEventListener("mouseenter", () => {
    isHoveringDropdown = true;
    dropdownShop.classList.remove("hidden");
    handleNavbarColor();
  });
  desktopShop.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!dropdownShop.matches(":hover")) {
        isHoveringDropdown = false;
        dropdownShop.classList.add("hidden");
        handleNavbarColor();
      }
    }, 100);
  });
  dropdownShop.addEventListener("mouseleave", () => {
    isHoveringDropdown = false;
    dropdownShop.classList.add("hidden");
    handleNavbarColor();
  });

  //── 2. Mobile menu open/close ──
  const openBtn   = document.getElementById("hamburger-btn");
  const closeBtn  = document.getElementById("close-btn");
  const overlay   = document.getElementById("mobile-overlay");
  const mobileNav = document.getElementById("mobile-menu");

  function openMenu() {
    overlay.classList.remove("hidden");
    mobileNav.classList.remove("hidden");
    mobileNav.classList.replace("-translate-x-full","translate-x-0");
  }
  function closeMenu() {
    mobileNav.classList.replace("translate-x-0","-translate-x-full");
    setTimeout(() => {
      overlay.classList.add("hidden");
      mobileNav.classList.add("hidden");
    }, 300);
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  //── 3. Mobile submenu level toggle ──
  const lvl1         = document.getElementById("mobile-menu-level1");
  const lvl2         = document.getElementById("mobile-menu-level2");
  const mobileShop   = document.getElementById("mobile-shop-link");
  const mobileBack   = document.getElementById("mobile-back-btn");

  mobileShop.addEventListener("click", e => {
    e.preventDefault();
    lvl1.classList.add("hidden");
    lvl2.classList.remove("hidden");
  });
  mobileBack.addEventListener("click", () => {
    lvl2.classList.add("hidden");
    lvl1.classList.remove("hidden");
  });

  //── 4. Swiper init ──
  const swiper = new Swiper('.swiper', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
    autoplay: { delay: 4000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  });
});


