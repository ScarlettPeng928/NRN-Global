document.addEventListener("DOMContentLoaded", () => {
  //── Navbar 顏色切換 ──
  const navbar = document.getElementById("navbar");
  const desktopShop = document.getElementById("shop-link");
  const dropdownShop = document.getElementById("dropdown-shop");
  let isHoveringDropdown = false;

  function handleNavbarColor() {
    if (window.scrollY > 0 || isHoveringDropdown) {
      navbar.classList.remove("absolute", "bg-transparent", "text-gray-800");
      navbar.classList.add("fixed", "bg-white", "text-black", "shadow-md");
    } else {
      navbar.classList.add("absolute", "bg-transparent", "text-gray-800");
      navbar.classList.remove("fixed", "bg-white", "text-black", "shadow-md");
    }
  }

  window.addEventListener("scroll", () => {
    if (!isHoveringDropdown) handleNavbarColor();
  });

  if (desktopShop && dropdownShop) {
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
  }

  //── Mobile menu 開關 ──
  const openBtn = document.getElementById("hamburger-btn");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("mobile-overlay");
  const mobileNav = document.getElementById("mobile-menu");

  function openMenu() {
    overlay.classList.remove("hidden");
    mobileNav.classList.remove("hidden");
    mobileNav.classList.replace("-translate-x-full", "translate-x-0");
  }

  function closeMenu() {
    mobileNav.classList.replace("translate-x-0", "-translate-x-full");
    setTimeout(() => {
      overlay.classList.add("hidden");
      mobileNav.classList.add("hidden");
    }, 300);
  }

  if (openBtn && closeBtn && overlay && mobileNav) {
    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }

  //── Mobile 二層選單切換 ──
  const lvl1 = document.getElementById("mobile-menu-level1");
  const lvl2 = document.getElementById("mobile-menu-level2");
  const mobileShop = document.getElementById("mobile-shop-link");
  const mobileBack = document.getElementById("mobile-back-btn");

  if (mobileShop && mobileBack && lvl1 && lvl2) {
    mobileShop.addEventListener("click", (e) => {
      e.preventDefault();
      lvl1.classList.add("hidden");
      lvl2.classList.remove("hidden");
    });

    mobileBack.addEventListener("click", () => {
      lvl2.classList.add("hidden");
      lvl1.classList.remove("hidden");
    });
  }

  //── 桌機版：縮圖切換主圖 ＋ 遮罩切換 ──
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".thumb-img");

  thumbs.forEach((img) => {
    img.addEventListener("click", () => {
      const newSrc = img.getAttribute("data-image");
      if (mainImage && newSrc) {
        mainImage.src = newSrc;
      }

      // 還原所有遮罩
      document.querySelectorAll(".overlay").forEach((overlay) => {
        overlay.classList.remove("opacity-0");
        overlay.classList.add("opacity-100");
      });

      // 取消目前選中縮圖的遮罩
      const overlay = img.parentElement.querySelector(".overlay");
      if (overlay) {
        overlay.classList.remove("opacity-100");
        overlay.classList.add("opacity-0");
      }
    });
  });

  // 預設第一張縮圖取消遮罩
  const firstOverlay = document.querySelector(".overlay");
  if (firstOverlay) {
    firstOverlay.classList.remove("opacity-100");
    firstOverlay.classList.add("opacity-0");
  }

  //── Swiper 輪播初始化 ──
  new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
