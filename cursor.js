function isTouchDeviceOrSmallScreen() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth < 768
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");
  const rippleElements = document.querySelectorAll("[data-ripple]");

  if (isTouchDeviceOrSmallScreen()) {
    if (cursor) cursor.style.display = "none";
    if (follower) follower.style.display = "none";
    return;
  }

  initCustomCursor(cursor, follower);
  initClickRippleEffect();
  initElementRipple(rippleElements);
});

function initCustomCursor(cursor, follower) {
  if (!cursor || !follower) return;

  cursor.style.display = 'block';
  follower.style.display = 'block';

  let posX = 0, posY = 0;
  let mouseX = 0, mouseY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const followMouse = () => {
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(followMouse);
  };
  followMouse();

  const interactiveElements = 'a, .btn, button, .timeline__content, .case-study';
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow');
    }
  });
}

function initClickRippleEffect() {
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

function initElementRipple(elements) {
  elements.forEach(el => {
    el.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.className = "ripple-effect";
      ripple.style.top = `${e.offsetY}px`;
      ripple.style.left = `${e.offsetX}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}
