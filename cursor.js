// cursor.js - DEFINITIEVE VERSIE, ONTWORPEN OM PERFECT SAMEN TE WERKEN MET CSS-TRANSITIES

(function() {
  'use strict';

  // --- HELPERFUNCTIE VOOR PRESTATIE-OPTIMALISATIE ---
  function debounce(func, wait = 10) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  // --- CONFIGURATIE & SETUP ---
  const LERP_FACTOR = 0.2; // Snelheid van de follower (0.1 = langzaam, 0.3 = snel)
  // Uitgebreide lijst gebaseerd op je stylesheet voor een complete ervaring
  const interactiveElements = 'a, button, .btn, .timeline__content, .case-study, .header__toggle, .lang-link, .footer__socials a, .whatsapp-btn';
  const textInputElements = 'input[type="text"], input[type="email"], input[type="search"], input[type="number"], input[type="password"], textarea';

  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');

  if (!cursor || !follower) {
    console.error('Custom cursor HTML-elementen niet gevonden.');
    return;
  }
  
  // --- STATE & VARIABELEN ---
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = window.innerWidth / 2;
  let posY = window.innerHeight / 2;
  
  let lastTime = 0;
  let isFirstMove = true;

  // --- DEVICE & POINTER CHECK ---
  if (window.matchMedia('(hover: none), (max-width: 768px)').matches) {
    return; // De CSS regelt al het verbergen, dus hier hoeft niets meer.
  }

  // --- EVENT LISTENERS ---
  document.addEventListener('mousemove', e => {
    if (isFirstMove) {
      document.body.classList.add('cursor-active');
      isFirstMove = false;
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const checkHoveredElement = debounce(e => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
      document.body.classList.remove('cursor-text');
    } else if (e.target.closest(textInputElements)) {
      document.body.classList.add('cursor-text');
      document.body.classList.remove('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow', 'cursor-text');
    }
  }, 10);

  document.body.addEventListener('mouseover', checkHoveredElement);
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));
  document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));

  document.addEventListener('click', e => {
    // Deze code is voor het 'ripple' effect. Het staat los van de cursor zelf.
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    setTimeout(() => ripple.remove(), 600);
  });

  // --- DE ANIMATIE-LOOP: HIER ZIT DE KERN ---
  const animateCursor = (timestamp) => {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    const lerpAmount = 1 - Math.exp(-LERP_FACTOR * deltaTime / 16.67);
    posX += (mouseX - posX) * lerpAmount;
    posY += (mouseY - posY) * lerpAmount;
    
    // DEZE CODE GEEFT ALLEEN DE COÖRDINATEN DOOR AAN DE CSS.
    // HET ZEGT NIET *HOE* DE CURSOR MOET BEWEGEN.
    // DIT IS DE JUISTE METHODE.
    cursor.style.setProperty('--cursor-x', `${mouseX}px`);
    cursor.style.setProperty('--cursor-y', `${mouseY}px`);
    
    follower.style.setProperty('--follower-x', `${posX}px`);
    follower.style.setProperty('--follower-y', `${posY}px`);
    
    requestAnimationFrame(animateCursor);
  };
  
  requestAnimationFrame(animateCursor);

  console.log('Custom cursor (gesynchroniseerd met CSS) succesvol geïnitialiseerd.');

})();