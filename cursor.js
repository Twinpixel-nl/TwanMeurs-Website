// cursor.js - FINALE, ZELFSTANDIGE VERSIE

(function() {
  'use strict';

  // Wacht tot de basis van de pagina geladen is. Een kleine vertraging kan soms helpen.
  // Als dit niet werkt, probeer de regel hieronder te vervangen door: document.addEventListener('DOMContentLoaded', () => { ... });
  window.addEventListener('load', () => {
  
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) {
      console.error('Custom cursor HTML-elementen (.cursor of .cursor-follower) zijn niet in de HTML gevonden. Script stopt.');
      return;
    }
    
    function isTouchDevice() {
      return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
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
      // Gebruik de `setProperty` methode voor de moderne CSS
      cursor.style.setProperty('--cursor-x', mouseX + 'px');
      cursor.style.setProperty('--cursor-y', mouseY + 'px');
      
      posX += (mouseX - posX) * 0.2;
      posY += (mouseY - posY) * 0.2;
      
      follower.style.setProperty('--follower-x', posX + 'px');
      follower.style.setProperty('--follower-y', posY + 'px');

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveElements = 'a, button, .btn, .timeline__content, .case-study';
    
    document.body.addEventListener('mouseover', e => {
      if (e.target.closest(interactiveElements)) {
        document.body.classList.add('cursor-grow');
      } else {
        document.body.classList.remove('cursor-grow');
      }
    });

    console.log('Custom cursor script succesvol geïnitialiseerd.');

  }); // Einde van de window.load listener

})();