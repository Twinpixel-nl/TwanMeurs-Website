// cursor.js - EXPERT VERSIE MET VOLLEDIGE UX-PERFECTIE

(function() {
  'use strict';

  // --- CONFIGURATIE & SETUP ---
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
  let isFirstMove = true; // Houdt bij of de muis voor het eerst beweegt

  // --- DEVICE & POINTER CHECK ---
  // Stopt het script op apparaten zonder fijne pointer (muis/trackpad)
  if (window.matchMedia('(pointer: coarse)').matches) {
    console.log('Coarse pointer gedetecteerd. Custom cursor wordt uitgeschakeld.');
    return;
  }

  // --- EVENT LISTENERS ---

  // 1. EERSTE MUISBEWEGING: Maakt de cursor zichtbaar
  document.addEventListener('mousemove', e => {
    if (isFirstMove) {
      document.body.classList.add('cursor-active');
      isFirstMove = false;
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 2. VERLAAT & BETREEDT BROWSERVENSTER: Verbergt/toont de cursor
  document.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-active');
  });
  document.addEventListener('mouseenter', () => {
    document.body.classList.add('cursor-active');
  });

  // 3. KLIK-FEEDBACK: Krimpt de cursor bij een muisklik
  document.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-down');
  });
  document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-down');
  });

  // 4. HOVER-EFFECTEN: Groeien of verbergen bij specifieke elementen
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

  // 5. RIPPLE-EFFECT BIJ KLIK
  document.addEventListener('click', e => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    setTimeout(() => ripple.remove(), 600);
  });

  // --- DE ANIMATIE-LOOP ---
  const animateCursor = () => {
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    
    cursor.style.setProperty('--cursor-x', `${mouseX}px`);
    cursor.style.setProperty('--cursor-y', `${mouseY}px`);
    
    follower.style.setProperty('--follower-x', `${posX}px`);
    follower.style.setProperty('--follower-y', `${posY}px`);
    
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  console.log('Expert custom cursor & ripple effect succesvol geïnitialiseerd.');

})();