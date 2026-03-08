const width = window.innerWidth;
const heroImage = document.querySelector(".js-hero-container");

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1440px)").matches) {
    heroImage.innerHTML = `
    <img
      class="hero"
      src="images/hero-desktop.jpg"
      alt="Image of mixed race woman wearing a brown button-up shirt, standing in fron of a plant."
    />
  `;
  } else if (window.matchMedia("(min-width: 768px").matches) {
    heroImage.innerHTML = `
    <img
      class="hero"
      src="images/hero-mobile.jpg"
      alt="Image of mixed race woman wearing a brown button-up shirt, standing in fron of a plant."
    />
  `;
  }
});
