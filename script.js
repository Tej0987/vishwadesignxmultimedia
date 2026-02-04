// js/script.js

document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded.");

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
    } else {
      navbar.style.backgroundColor = "rgba(10, 10, 10, 0.8)";
    }
  });

  // Simple scroll reveal (optional, can be expanded with libraries like AOS or ScrollTrigger)
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll, .slide-in-left, .slide-in-right").forEach((el) => {
    observer.observe(el);
  });
});
