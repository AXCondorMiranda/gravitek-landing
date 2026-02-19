const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-desktop");
const body = document.body;

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
  body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-desktop a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.classList.remove("active");
    body.classList.remove("menu-open");
  });
});
// Reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach((reveal) => {
  observer.observe(reveal);
});
// =====================
// FILTRO DE EQUIPOS
// =====================

const filterButtons = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".equipo-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Quitar clase active a todos los botones
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Activar botón actual
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    cards.forEach(card => {

      if (filterValue === "all") {
        card.style.display = "flex";
      } else {
        if (card.classList.contains(filterValue)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      }

    });

  });
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // cerrar todos
    faqItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".faq-answer").style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});