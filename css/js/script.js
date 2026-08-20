/* =========================
   MOBILE MENU
========================= */

const menuToggle =
  document.getElementById("menuToggle");

const navigation =
  document.getElementById("navigation");


if (menuToggle && navigation) {

  menuToggle.addEventListener(
    "click",
    () => {

      navigation.classList.toggle("active");

      const isOpen =
        navigation.classList.contains("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

      menuToggle.textContent =
        isOpen ? "✕" : "☰";

    }
  );


  /* Close mobile menu after clicking link */

  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navigation.classList.remove(
            "active"
          );

          menuToggle.textContent = "☰";

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================
   CURRENT YEAR
========================= */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================
   HEADER SHADOW
========================= */

const header =
  document.querySelector(".header");


window.addEventListener(
  "scroll",
  () => {

    if (!header) return;

    if (window.scrollY > 20) {

      header.style.boxShadow =
        "0 8px 30px rgba(20,30,20,.08)";

    } else {

      header.style.boxShadow =
        "none";

    }

  }
);


/* =========================
   SMOOTH ANCHOR SCROLL
========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener(
      "click",
      function(event) {

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================
   IMAGE LAZY LOADING
========================= */

document
  .querySelectorAll("img")
  .forEach(image => {

    if (!image.hasAttribute("loading")) {

      image.setAttribute(
        "loading",
        "lazy"
      );

    }

  });
