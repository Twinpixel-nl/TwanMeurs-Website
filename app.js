/*
  APP.JS - State-of-the-Art Interacties voor Twan Meurs
  Versie: 2.0
*/

(() => {
    'use strict';

    /**
     * INITIALISATIE
     * Wacht tot de DOM volledig is geladen en roept dan alle functies aan.
     */
    document.addEventListener('DOMContentLoaded', () => {
        initSmoothScrolling();
        initScrollAnimations();
        initActiveNavOnScroll();
        initParallax();
        initCustomCursor();
        updateFooterYear();
    });


    /**
     * FUNCTIE: SOEPEL SCROLLEN (SMOOTH SCROLLING)
     * Vangt klikken op ankerlinks op en scrollt soepel naar de sectie.
     */
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }


    /**
     * FUNCTIE: SCROLL-TRIGGERED ANIMATIONS
     * Gebruikt Intersection Observer om elementen in te faden wanneer ze in beeld komen.
     */
    function initScrollAnimations() {
        const elementsToReveal = document.querySelectorAll('.reveal');
        if (!elementsToReveal.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elementsToReveal.forEach(element => observer.observe(element));
    }


    /**
     * FUNCTIE: ACTIEVE NAVIGATIESTATUS BIJ SCROLLEN
     * Markeer de navigatielink die overeenkomt met de zichtbare sectie.
     */
    function initActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.header__nav a');
        if (!sections.length || !navLinks.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' }); // Activeert wanneer een sectie in het midden van het scherm is

        sections.forEach(section => observer.observe(section));
    }


    /**
     * FUNCTIE: GEOPTIMALISEERD PARALLAX EFFECT
     * Gebruikt requestAnimationFrame voor een soepele, performante parallax animatie.
     */
    function initParallax() {
        const heroBg = document.querySelector('.hero__bg');
        if (!heroBg) return;

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollValue = window.scrollY;
                    const parallaxFactor = 0.3;
                    // Belangrijke fix: gebruik backticks (`) voor template literals
                    heroBg.style.transform = `translateY(${scrollValue * parallaxFactor}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }


    /**
     * FUNCTIE: CUSTOM CURSOR
     * Creëert een custom cursor die de muis volgt en reageert op interactieve elementen.
     */
    function initCustomCursor() {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        const interactiveElements = document.querySelectorAll('a, .btn, button, .timeline__content, .case-study');

        if (!cursor || !follower) return;

        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        window.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const followMouse = () => {
            posX += (mouseX - posX) * 0.2;
            posY += (mouseY - posY) * 0.2;
            
// NIEUWE, GECORRIGEERDE CODE
cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
            
            requestAnimationFrame(followMouse);
        };
        
        followMouse();

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
        });
    }


    /**
     * FUNCTIE: DYNAMISCH JAARTAL IN FOOTER
     */
    function updateFooterYear() {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

})();