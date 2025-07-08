// cursor.js - GEOPTIMALISEERDE VERSIE

(function() {
  'use strict';

  // --- CONFIGURATIE & SETUP ---
  const LERP_FACTOR = 0.25; // Iets responsiever gemaakt, pas naar wens aan.
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
  let lastTime = 0;
  let isFirstMove = true;

  // **OPTIMALISATIE:** Variabelen om de animatieloop te beheren
  let animationFrameId = null;
  let isAnimating = false;

  // --- DEVICE & POINTER CHECK ---
  if (window.matchMedia('(pointer: coarse)').matches) {
    console.log('Coarse pointer gedetecteerd. Custom cursor wordt uitgeschakeld.');
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  // --- EVENT LISTENERS ---
  document.addEventListener('mousemove', e => {
    if (isFirstMove) {
      // Zet de startpositie direct, om een sprong te voorkomen
      posX = e.clientX;
      posY = e.clientY;
      document.body.classList.add('cursor-active');
      isFirstMove = false;
    }
    mouseX = e.clientX;
    mouseY = e.clientY;

    // **OPTIMALISATIE:** Start de animatie alleen als deze nog niet draait
    if (!isAnimating) {
      startAnimation();
    }
  });

  // Functies voor event listeners voor de leesbaarheid
  const handleMouseLeave = () => document.body.classList.remove('cursor-active');
  const handleMouseEnter = () => document.body.classList.add('cursor-active');
  const handleMouseDown = () => document.body.classList.add('cursor-down');
  const handleMouseUp = () => document.body.classList.remove('cursor-down');

  document.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  
  document.body.addEventListener('mouseover', e => {
    const target = e.target;
    if (target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
      document.body.classList.remove('cursor-text');
    } else if (target.closest(textInputElements)) {
      document.body.classList.add('cursor-text');
      document.body.classList.remove('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow', 'cursor-text');
    }
  });

  document.addEventListener('click', e => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    setTimeout(() => ripple.remove(), 600);
  });

  // --- DE ANIMATIE-LOOP MET PAUZE-FUNCTIE ---
  const animateCursor = (timestamp) => {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    const lerpAmount = 1 - Math.exp(-LERP_FACTOR * deltaTime / 16.67);

    // Bereken de nieuwe positie
    posX += (mouseX - posX) * lerpAmount;
    posY += (mouseY - posY) * lerpAmount;
    
    // Update de CSS-variabelen
    // De 'directe' cursor hoeft niet ge-lerped te worden, die volgt de muis
    cursor.style.setProperty('--cursor-x', `${mouseX}px`);
    cursor.style.setProperty('--cursor-y', `${mouseY}px`);
    
    follower.style.setProperty('--follower-x', `${posX}px`);
    follower.style.setProperty('--follower-y', `${posY}px`);

    // **OPTIMALISATIE:** Controleer of we de animatie moeten stoppen
    const distance = Math.sqrt(Math.pow(mouseX - posX, 2) + Math.pow(mouseY - posY, 2));
    if (distance < 0.1) {
      stopAnimation();
    } else {
      animationFrameId = requestAnimationFrame(animateCursor);
    }
  };

  const startAnimation = () => {
    if (!isAnimating) {
        isAnimating = true;
        lastTime = performance.now(); // Reset de tijd om een sprong te voorkomen
        animationFrameId = requestAnimationFrame(animateCursor);
    }
  };

  const stopAnimation = () => {
    if (isAnimating) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
        isAnimating = false;
    }
  };

  console.log('Geoptimaliseerde custom cursor succesvol geïnitialiseerd.');

})();