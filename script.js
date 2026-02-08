document.addEventListener("DOMContentLoaded", () => {

  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
  });

  const footer = document.getElementById("footer-text");
  if (window.matchMedia("(max-width: 768px)").matches) {
    footer.innerHTML = `<marquee>${footer.innerHTML}</marquee>`;
  }

  const scrollBtn = document.querySelector(".scroll-button a");
  scrollBtn.style.display = "none";

  window.addEventListener("scroll", () => {
    scrollBtn.style.display =
      document.documentElement.scrollTop > 20 ? "block" : "none";
  });

});
