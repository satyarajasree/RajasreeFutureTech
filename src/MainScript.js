import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import Swiper from "swiper";


const MainScript = () => {
  useEffect(() => {
    // Apply .scrolled class on scroll
    const toggleScrolled = () => {
      const body = document.querySelector("body");
      const header = document.querySelector("#header");
      if (
        !header?.classList.contains("scroll-up-sticky") &&
        !header?.classList.contains("sticky-top") &&
        !header?.classList.contains("fixed-top")
      )
        return;

      window.scrollY > 100
        ? body.classList.add("scrolled")
        : body.classList.remove("scrolled");
    };

    window.addEventListener("scroll", toggleScrolled);
    toggleScrolled();

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", () => {
        document.querySelector("body").classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      });
    }

    // Hide mobile nav on hash links
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          document.querySelector("body").classList.remove("mobile-nav-active");
          mobileNavToggleBtn.classList.toggle("bi-list");
          mobileNavToggleBtn.classList.toggle("bi-x");
        }
      });
    });

    // Scroll to top button
    const scrollTop = document.querySelector(".scroll-top");
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    };

    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    window.addEventListener("scroll", toggleScrollTop);
    toggleScrollTop();

    // AOS Initialization
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // GLightbox Initialization
    GLightbox({ selector: ".glightbox" });

    

    // Isotope Layout and Filters
    document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
      let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
        initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });

      isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
        filters.addEventListener("click", function () {
          isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({ filter: this.getAttribute("data-filter") });
          AOS.refresh();
        });
      });
    });

    // Swiper Sliders Initialization
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      new Swiper(swiperElement, config);
    });

    // Hash-based scrolling correction
    if (window.location.hash) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        if (section) {
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({ top: section.offsetTop - parseInt(scrollMarginTop), behavior: "smooth" });
        }
      }, 100);
    }

    // Navmenu Scrollspy
    const navmenulinks = document.querySelectorAll(".navmenu a");
    const navmenuScrollspy = () => {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } else {
          navmenulink.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", navmenuScrollspy);
    navmenuScrollspy();

    return () => {
      // Cleanup event listeners when component unmounts
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("scroll", toggleScrollTop);
      window.removeEventListener("scroll", navmenuScrollspy);
    };
  }, []);

  return null; // No UI needed, just the script execution
};

export default MainScript;
