let startY = 0;
let endY = 0;

const container = document.querySelector(".container");

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  endY = event.touches[0].clientY;
}

function handleTouchEnd() {
  if (startY > endY + 50) {
    container.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  } else if (startY < endY - 50) {
    container.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  }
}

container.addEventListener("touchstart", handleTouchStart);
container.addEventListener("touchmove", handleTouchMove);
container.addEventListener("touchend", handleTouchEnd);
