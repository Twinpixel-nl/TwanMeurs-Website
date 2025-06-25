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

  // Sla de muispositie op
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Functie die de animatie uitvoert
  function animateCursor() {
    // Directe cursor (kleine stip)
    // We gebruiken nu CSS variabelen voor een betere samenwerking met CSS
    cursor.style.setProperty('--cursor-x', mouseX + 'px');
    cursor.style.setProperty('--cursor-y', mouseY + 'px');

    // Follower met vertraging (grote cirkel)
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    follower.style.setProperty('--follower-x', posX + 'px');
    follower.style.setProperty('--follower-y', posY + 'px');

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect op interactieve elementen
  document.body.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow');
    }
  });
});