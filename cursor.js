function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const rippleElements = document.querySelectorAll("[data-ripple]");

  if (isTouchDevice()) {
    if (cursor) cursor.style.display = "none";
    return;
  }

  // Beweeg de custom cursor
  document.addEventListener("mousemove", e => {
    if (!cursor) return;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  // Ripple effect
  rippleElements.forEach(el => {
    el.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.className = "ripple-effect";
      ripple.style.top = `${e.offsetY}px`;
      ripple.style.left = `${e.offsetX}px`;
      this.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
