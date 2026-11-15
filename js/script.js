const yearElement = document.getElementById("ano");
const topButton = document.getElementById("topo");

function updateFooterYear() {
  yearElement.textContent = new Date().getFullYear();
}

function toggleTopButton() {
  const shouldShowButton = window.scrollY > 350;
  topButton.classList.toggle("show", shouldShowButton);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

updateFooterYear();
window.addEventListener("scroll", toggleTopButton);
topButton.addEventListener("click", scrollToTop);
