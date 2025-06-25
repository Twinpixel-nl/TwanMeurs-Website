// cursor.js - FINALE VERSIE VOOR TOUCHSCREEN LAPTOPS & DESKTOPS

(function() {
  'use strict';

  // --- SLIMME DETECTIE ---
  // Deze check kijkt of het primaire invoerapparaat 'coarse' (ruw, zoals een vinger) is.
  // Op een laptop met touchscreen is de primaire pointer 'fine' (muis/trackpad), dus dit werkt correct.
  // Op een telefoon/tablet is de pointer 'coarse', en wordt het script hier gestopt.
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  if (isCoarsePointer) {
    console.log('Primair invoerapparaat is "coarse" (touch). Custom cursor wordt niet geactiveerd.');
    return; // Stop de uitvoering van de rest van het script
  }

  // Als de check hier voorbij komt, hebben we te maken met een apparaat dat een muis/trackpad heeft.

  // --- ELEMENTEN ZOEKEN ---
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  
  // Extra veiligheidscheck voor als de HTML-elementen ontbreken.
  if (!cursor || !follower) {
    console.error('Custom cursor HTML-elementen (.cursor of .cursor-follower) niet gevonden in de DOM.');
    return;
  }
  
  // --- VARIABELEN INITIALISEREN ---
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  // --- EVENT LISTENER VOOR MUISPOSITIE ---
  // Slaat de positie van de muis op zodra deze beweegt.
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // --- DE ANIMATIE-LOOP ---
  function animateCursor() {
    // Gebruik de 'setProperty' methode die samenwerkt met de moderne CSS.
    
    // De stip volgt de muis direct.
    cursor.style.setProperty('--cursor-x', mouseX + 'px');
    cursor.style.setProperty('--cursor-y', mouseY + 'px');
    
    // De follower volgt met een "lerp" (linear interpolation) voor een soepel, vertraagd effect.
    posX += (mouseX - posX) * 0.2;
    posY += (mouseY - posY) * 0.2;
    
    follower.style.setProperty('--follower-x', posX + 'px');
    follower.style.setProperty('--follower-y', posY + 'px');

    // Roep de functie opnieuw aan voor de volgende frame voor een vloeiende animatie.
    requestAnimationFrame(animateCursor);
  }
  // Start de animatie-loop.
  animateCursor();


  // --- HOVER EFFECTEN ---
  const interactiveElements = 'a, button, .btn, .timeline__content, .case-study';
  
  // Gebruik 'mouseover' op de body om efficiënt alle hovers te vangen.
  document.body.addEventListener('mouseover', e => {
    // 'closest' controleert of het element waar de muis overheen is (of een van zijn ouders)
    // overeenkomt met de interactieve elementen.
    if (e.target.closest(interactiveElements)) {
      document.body.classList.add('cursor-grow');
    } else {
      document.body.classList.remove('cursor-grow');
    }
  });

  console.log('Custom cursor (desktop) succesvol geïnitialiseerd.');

})(); // Einde van de IIFE