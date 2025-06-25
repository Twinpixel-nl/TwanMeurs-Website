function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  const interactiveElements = 'a, button, .btn, .timeline__content, .case-study';

  if (!cursor || !follower) return;

  if (isTouchDevice() || window.innerWidth < 768) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  // Startwaarden
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  // Cursor direct laten volgen
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  // Follower met vertraging
  function follow() {
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  }
  follow();

  // Hover effect op interactieve elementen
  document.body.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow');
    }
  });
});
