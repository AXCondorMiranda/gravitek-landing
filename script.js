document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     HEADER SCROLL EFFECT
  ========================= */
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* =========================
     MENU HAMBURGUESA PRO
  ========================= */
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  function closeMenu() {
    toggle.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* =========================
     REVEAL ON SCROLL
  ========================= */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* =========================
     FILTRO EQUIPOS
  ========================= */
  const filterButtons = document.querySelectorAll(".filtro-btn");
  const cards = document.querySelectorAll(".equipo-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const activeBtn = document.querySelector(".filtro-btn.active");
      if (activeBtn) activeBtn.classList.remove("active");

      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block";
        } else {
          card.style.display = card.classList.contains(filter)
            ? "block"
            : "none";
        }
      });
    });
  });
});
