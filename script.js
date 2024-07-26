let startY = 0;
let endY = 0;

const container = document.querySelector(".container");
const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  endY = event.touches[0].clientY;
}

function handleTouchEnd() {
  if (startY > endY + 50 && currentSectionIndex < sections.length - 1) {
    // Swipe up to next section
    currentSectionIndex++;
  } else if (startY < endY - 50 && currentSectionIndex > 0) {
    // Swipe down to previous section
    currentSectionIndex--;
  }
  scrollToSection(currentSectionIndex);
}

function scrollToSection(index) {
  sections[index].scrollIntoView({ behavior: "smooth" });
}

container.addEventListener("touchstart", handleTouchStart);
container.addEventListener("touchmove", handleTouchMove);
container.addEventListener("touchend", handleTouchEnd);

// Prevent click events on the container
container.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
});
