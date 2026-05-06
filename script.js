const filterButtons = document.querySelectorAll(".filter-button");
const listings = document.querySelectorAll(".listing-card");
const searchButton = document.querySelector("#searchButton");
const contactForm = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    listings.forEach((listing) => {
      const isVisible = filter === "all" || listing.dataset.type === filter;
      listing.hidden = !isVisible;
    });
  });
});

searchButton.addEventListener("click", () => {
  document.querySelector("#listings").scrollIntoView({ behavior: "smooth" });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Thanks. We will be in touch shortly with matching properties.";
  contactForm.reset();
});
