// script.js
document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".container");
  let sections = document.querySelectorAll("section");
  let currentSection = 0;
  let isScrolling = false;
  let startY;
  let endY;

  container.addEventListener("wheel", function (event) {
    if (isScrolling) return;

    if (event.deltaY > 0) {
      // Scroll down
      if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else {
      // Scroll up
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });

  container.addEventListener("touchstart", function (event) {
    startY = event.touches[0].clientY;
  });

  container.addEventListener("touchmove", function (event) {
    endY = event.touches[0].clientY;
  });

  container.addEventListener("touchend", function () {
    if (isScrolling) return;

    if (startY > endY + 50) {
      // Swipe up
      if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    } else if (startY < endY - 50) {
      // Swipe down
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    }
  });

  function scrollToSection(index) {
    isScrolling = true;
    sections[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Wait for the scroll animation to complete
  }
});
