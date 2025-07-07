// cursor.js - EXPERT VERSIE MET DELTA TIME & 'mouseover' OPTIMALISATIE

(function() {
  'use strict';

  // --- HELPERFUNCTIE VOOR PRESTATIE-OPTIMALISATIE ---
  /**
   * Debounce-functie: Zorgt ervoor dat een functie pas wordt uitgevoerd nadat
   * er een bepaalde tijd geen nieuwe aanroep is geweest. Voorkomt overmatige
   * uitvoering van 'dure' functies, zoals die in een 'mouseover' event.
   * @param {Function} func De functie die gedebounced moet worden.
   * @param {number} [wait=10] De wachttijd in milliseconden. Een korte tijd (5-10ms) is ideaal hier.
   * @returns {Function} De nieuwe, gedebounced functie.
   */
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

  // --- OPTIMALISATIE: 'mouseover' event ---
  // De logica voor het controleren van elementen wordt in een aparte functie gezet.
  const checkHoveredElement = (e) => {
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
  };

  // We 'wrappen' de functie met onze debounce helper.
  // Dit zorgt ervoor dat de code alleen wordt uitgevoerd als de muis even stopt,
  // wat voorkomt dat de browser wordt overbelast tijdens snelle bewegingen.
  const debouncedCheckHover = debounce(checkHoveredElement, 10);

  // We koppelen de nieuwe, geoptimaliseerde functie aan de event listener.
  document.body.addEventListener('mouseover', debouncedCheckHover);
  
  // --- EINDE OPTIMALISATIE ---

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
    if (!lastTime) {
      lastTime = timestamp;
    }
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    const lerpAmount = 1 - Math.exp(-LERP_FACTOR * deltaTime / 16.67);

    posX += (mouseX - posX) * lerpAmount;
    posY += (mouseY - posY) * lerpAmount;

    cursor.style.setProperty('--cursor-x', `${mouseX}px`);
    cursor.style.setProperty('--cursor-y', `${mouseY}px`);
    follower.style.setProperty('--follower-x', `${posX}px`);
    follower.style.setProperty('--follower-y', `${posY}px`);

    requestAnimationFrame(animateCursor);
  };
  requestAnimationFrame(animateCursor);

  console.log('Geoptimaliseerde custom cursor (JS-driven met Delta Time & Debounce) succesvol geïnitialiseerd.');

})();