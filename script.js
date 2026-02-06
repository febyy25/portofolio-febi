const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* reveal */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(r => revealObserver.observe(r));

/* skill animation */
const bars = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const val = e.target.dataset.skill;
      e.target.style.width = val + "%";
    }
  });
}, { threshold: 0.4 });

bars.forEach(b => skillObserver.observe(b));

/* about me */
const photoCard = document.getElementById("photoCard");

/* nav active underline */

const navLinks = document.querySelectorAll("#navMenu .nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
