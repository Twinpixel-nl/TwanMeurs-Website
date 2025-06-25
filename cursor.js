// cursor.js - DE CORRECTE VERSIE VOOR JOUW CSS

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

  if (!cursor || !follower) {
    console.error('Cursor elementen niet gevonden!');
    return;
  }

  // Verberg op touch devices of smalle schermen
  if (isTouchDevice() || window.innerWidth < 768) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  // Cursor (kleine stip) direct laten volgen
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Deze regel past de positie van de kleine stip direct aan
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  // Follower (grote cirkel) met vertraging
  function follow() {
    // Bereken de vertraagde positie
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    
    // Deze regel past de positie van de grote cirkel direct aan
    follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
    
    // Roep de volgende frame aan voor een soepele animatie
    requestAnimationFrame(follow);
  }
  
  // Start de animatie-loop
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