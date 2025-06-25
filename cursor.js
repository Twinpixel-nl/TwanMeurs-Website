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

  // Belangrijke check: stop als de HTML-elementen niet bestaan
  if (!cursor || !follower) {
    console.error('Custom cursor HTML elements (.cursor or .cursor-follower) not found!');
    return;
  }

  if (isTouchDevice() || window.innerWidth < 768) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateCursor() {
    // Stel de CSS-variabelen in voor de stip
    cursor.style.setProperty('--cursor-x', mouseX + 'px');
    cursor.style.setProperty('--cursor-y', mouseY + 'px');

    // Bereken de vertraagde positie voor de follower
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    
    // Stel de CSS-variabelen in voor de follower
    follower.style.setProperty('--follower-x', posX + 'px');
    follower.style.setProperty('--follower-y', posY + 'px');

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.body.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow');
    }
  });
});