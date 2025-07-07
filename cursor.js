// cursor.js - EXPERT VERSIE MET DELTA TIME CORRECTIE VOOR SOEPELE ANIMATIE

(function() {
  'use strict';

  // --- CONFIGURATIE & SETUP ---
  const LERP_FACTOR = 0.2; // Snelheid van de follower (0.1 = langzaam, 0.3 = snel)
  const interactiveElements = 'a, button, .btn, .timeline__content, .case-study';
  const textInputElements = 'input[type="text"], input[type="email"], input[type="search"], input[type="number"], input[type="password"], textarea';
  
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  
  if (!cursor || !follower) {
    console.error('Custom cursor HTML-elementen niet gevonden.');
    return;
  }

  // --- STATE & VARIABELEN ---
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;
  let lastTime = 0; // Houdt de tijd van de vorige frame bij
  let isFirstMove = true;

  // --- DEVICE & POINTER CHECK ---
  if (window.matchMedia('(pointer: coarse)').matches) {
    console.log('Coarse pointer gedetecteerd. Custom cursor wordt uitgeschakeld.');
    return;
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

  document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  document.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
  document.addEventListener('mousedown', () => document.body.classList.add('cursor-down'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-down'));

  document.body.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
      document.body.classList.remove('cursor-text');
    } else if (e.target.closest(textInputElements)) {
      document.body.classList.add('cursor-text');
      document.body.classList.remove('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow');
      document.body.classList.remove('cursor-text');
    }
  });

  document.addEventListener('click', e => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    setTimeout(() => ripple.remove(), 600);
  });

  // --- DE ANIMATIE-LOOP MET DELTA TIME CORRECTIE ---
  const animateCursor = (timestamp) => {
    // timestamp wordt automatisch door requestAnimationFrame meegegeven
    if (!lastTime) {
      lastTime = timestamp;
    }
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // Pas de LERP-factor aan op basis van de verstreken tijd.
    // Dit zorgt ervoor dat de beweging consistent is, zelfs bij wisselende framerates.
    // De '16.67' is de ideale duur voor 1 frame bij 60fps.
    const lerpAmount = 1 - Math.exp(-LERP_FACTOR * deltaTime / 16.67);

    // Bereken de nieuwe positie
    posX += (mouseX - posX) * lerpAmount;
    posY += (mouseY - posY) * lerpAmount;
    
    // Update de CSS-variabelen
    cursor.style.setProperty('--cursor-x', `${mouseX}px`);
    cursor.style.setProperty('--cursor-y', `${mouseY}px`);
    
    follower.style.setProperty('--follower-x', `${posX}px`);
    follower.style.setProperty('--follower-y', `${posY}px`);
    
    // Vraag de volgende animatieframe aan
    requestAnimationFrame(animateCursor);
  };
  // Start de animatieloop
  requestAnimationFrame(animateCursor);

  console.log('Expert custom cursor (JS-driven met Delta Time) succesvol geïnitialiseerd.');

})();