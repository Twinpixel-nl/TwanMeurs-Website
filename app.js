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

/*
  APP.JS - State-of-the-Art Interacties & Vertalingen voor Twan Meurs
  Versie: 4.0 (CV Content Update)
*/

(() => {
    'use strict';

    /**
     * HET WOORDENBOEK
     */
    const languageData = {
        nl: {
            // Meta & Navigatie
            metaTitle: "Twan Meurs – Bruggenbouwer tussen IT & Bestuur",
            metaDescription: "Twan Meurs vertaalt complexe technologie naar strategische bestuursbeslissingen. Bekijk mijn projecten en ontdek hoe ik IT-potentieel verbind met bestuurlijke realiteit.",
            ogDescription: "Ik help bestuurlijke organisaties en toonaangevende bedrijven vooruit door technologie te verbinden met strategie.",
            navAbout: "Over Mij",
            navProjects: "Projecten",
            navCareer: "Loopbaan & Opleiding",
            navExpertise: "Expertise",
            navContact: "Contact",
            
            // Hero
            heroTitle: `Bruggenbouwer tussen IT-potentieel <span class="text-accent">en bestuurlijke realiteit.</span>`,
            heroSubtitle: "Ik vertaal complexe technologie naar heldere, strategische beslissingen die organisaties vooruithelpen.",
            heroBtn: "Bekijk mijn projecten",
            
            // Over Mij
            aboutTitle: "Mijn Aanpak",
            aboutSubtitle: "Gedreven door resultaat, geleid door verbinding.",
            aboutP1: "Op het snijvlak van technologie en organisatie voel ik mij thuis. Mijn kracht ligt in het doorgronden van complexe bestuurlijke vraagstukken en deze te vertalen naar concrete, technologische oplossingen die écht werken. Ik geloof niet in IT om de IT; ik geloof in IT als strategische motor voor vooruitgang.",
            aboutP2: "Mijn analytische blik, aangescherpt door een passie voor strategische bordspellen, helpt me om systemen en processen snel te doorzien. De discipline en het doorzettingsvermogen van het wielrennen pas ik toe op langdurige transformatieprojecten: met focus, stapsgewijs, en altijd met het einddoel voor ogen.",
            aboutImage: "Professioneel Omgevingsportret",

            // Projecten
            projectsTitle: "Uitgelichte Projecten",
            parChallenge: "Uitdaging:",
            parAction: "Actie:",
            parImpact: "Impact:",
            p1Title: "Procesoptimalisatie & Advies",
            p1Client: "Rol: Service Consultant @ Wageningse Universiteit",
            p1Challenge: " De noodzaak om diverse IT-processen binnen de universiteit te verbeteren en de beschikbare middelen effectiever in te zetten.",
            p1Action: " Ik modelleerde bestaande processen, stelde concrete adviesrapporten op voor de IT-afdeling en inventariseerde de volledige audiovisuele infrastructuur.",
            p1Impact: " Direct bijgedragen aan de efficiëntie van de IT-afdeling en een helder strategisch overzicht gecreëerd voor toekomstige investeringen en verbeteringen.",
            p2Title: "Bestuurlijke Vertegenwoordiging & Eventmanagement",
            p2Client: "Rol: Student Assessor @ Christelijke Hogeschool Ede",
            p2Challenge: " De stem van studenten effectief vertegenwoordigen op bestuursniveau en de studentengemeenschap versterken.",
            p2Action: " Ik nam deel aan de medezeggenschapsraad, leverde input op beleidsdocumenten en organiseerde grootschalige evenementen zoals het Winter Gala en Zomernacht Gala.",
            p2Impact: " Zorgde voor directe invloed van studenten op het hogeschoolbeleid en verhoogde de betrokkenheid en tevredenheid binnen de studentengemeenschap.",

            // Loopbaan & Opleiding
            careerTitle: "Loopbaan & Opleiding",
            timeline: `
                <div class="timeline__item reveal">
                    <div class="timeline__content"><h3 class="timeline__title">Medeoprichter – TwinPixel Webdesign & IT-advies</h3><p class="timeline__description">Kleinschalig bureau gestart voor het ontwikkelen van moderne websites (HTML, CSS, JS, SEO) en het realiseren van functies als chatbotintegratie en meertalige ondersteuning.</p></div><div class="timeline__date">maart 2025 – Heden</div>
                </div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Lid – Studentenhogeschoolraad van de CHE</h3><p class="timeline__description">Vertegenwoordig studenten op centraal niveau binnen de medezeggenschap en denk actief mee over strategisch beleid, huisvesting en begrotingen.</p></div><div class="timeline__date">maart 2025 – Heden</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Service Consultant</h3><p class="timeline__company">Wageningse Universiteit</p><p class="timeline__description">Modelleren en verbeteren van IT-processen, opstellen van adviesrapporten en inventariseren van audiovisuele middelen.</p></div><div class="timeline__date">oktober 2024 – Heden</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Voorzitter – Jongerenraad Wageningen</h3><p class="timeline__description">Adviseer de gemeente over jongerenbeleid, zet een nieuwe structuur op en bevorder de communicatie tussen jongeren en gemeentelijke besluitvorming.</p></div><div class="timeline__date">oktober 2024 – Heden</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Student Assessor</h3><p class="timeline__company">Christelijke Hogeschool Ede</p><p class="timeline__description">Vertegenwoordigde studenten op bestuursniveau, leidde projecten, bevorderde duurzaamheid en organiseerde grote evenementen.</p></div><div class="timeline__date">april 2023 – januari 2024</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Voorzitter & Oprichter – S.V. NULL (Studievereniging ICT)</h3><p class="timeline__description">Vereniging opgericht voor en door ICT-studenten, bestuur geleid en 35% van de opleiding betrokken als actief lid.</p></div><div class="timeline__date">september 2022 – augustus 2024</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">BA IT – Christelijke Hogeschool Ede</h3><p class="timeline__company">Specialisatie: IT-Consultancy</p><p class="timeline__description">Brede basis in Development & UX-design. Leiding gegeven aan stageprojecten voor de implementatie van HubSpot en een ERP PowerApps-oplossing.</p></div><div class="timeline__date">september 2022 – Heden</div></div>
            `,
            
            // Expertise
            expertiseTitle: "Expertise",
            expertise_t1_title: "Technisch & Software",
            expertise_t1_list: `<li>Python, SQL, C#, Golang</li><li>HTML, CSS, Javascript</li><li>Power BI, PowerApps, HubSpot</li><li>Word, PowerPoint, Excel</li>`,
            expertise_t2_title: "Projectmanagement & Methoden",
            expertise_t2_list: `<li>Agile, Scrum</li><li>Beleidsanalyse, Onderzoek</li><li>Procesoptimalisatie (Lean)</li><li>Tijdsmanagement</li>`,
            expertise_t3_title: "Communicatie & Leiderschap",
            expertise_t3_list: `<li>Teamleiderschap</li><li>Publiek Spreken & Presenteren</li><li>Stakeholdermanagement</li><li>Conflictoplossing</li>`,

            // Erkenning
            recognitionTitle: "Erkenning & Certificeringen",
            rec_1_title: "Top 5 Finalist",
            rec_1_desc: "Student van het Jaar Award 2024, voor de meest impactvolle studenten in Nederland.",
            rec_2_title: "C2 Cambridge English",
            rec_2_desc: "Bewezen Engelse taalvaardigheid op het hoogst haalbare niveau (Proficiency).",
            rec_3_title: "Lean Green Belt",
            rec_3_desc: "Bekwaam in procesoptimalisatie en het creëren en implementeren van efficiënte workflows.",

            // Footer
            footerTitle: "Laten we verbinden.",
            footerText: "Geïnteresseerd in een samenwerking of wilt u van gedachten wisselen? <br>Ik kom graag met u in contact.",
            footerBtn: "Stuur een e-mail",
            footerCopyright: "© <span id=\"current-year\"></span> Twan Meurs. Alle rechten voorbehouden."
        },
        en: {
            // English translations...
            navCareer: "Career & Education",
            navExpertise: "Expertise",
            careerTitle: "Career & Education",
            timeline: `
                <div class="timeline__item reveal">
                    <div class="timeline__content"><h3 class="timeline__title">Co-founder – TwinPixel Webdesign & IT-advice</h3><p class="timeline__description">Started a small-scale agency for developing modern websites (HTML, CSS, JS, SEO) and implementing features like chatbot integration and multilingual support.</p></div><div class="timeline__date">March 2025 – Present</div>
                </div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Member – CHE Student Council</h3><p class="timeline__description">Representing students at a central level in the university's participatory bodies and actively contributing to strategic policy, housing, and budgets.</p></div><div class="timeline__date">March 2025 – Present</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Service Consultant</h3><p class="timeline__company">Wageningen University</p><p class="timeline__description">Modeling and improving IT processes, drafting advisory reports, and inventorying audio-visual resources.</p></div><div class="timeline__date">October 2024 – Present</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Chairman – Wageningen Youth Council</h3><p class="timeline__description">Advising the municipality on youth policy, establishing a new structure, and promoting communication between youth and municipal decision-making.</p></div><div class="timeline__date">October 2024 – Present</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Student Assessor</h3><p class="timeline__company">CHE University of Applied Sciences</p><p class="timeline__description">Represented students at the executive level, led projects, promoted sustainability, and organized large-scale events.</p></div><div class="timeline__date">April 2023 – January 2024</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">Chairman & Founder – S.V. NULL (ICT Study Association)</h3><p class="timeline__description">Established an association for and by ICT students, led the board, and managed to involve 35% of the entire study program as active members.</p></div><div class="timeline__date">September 2022 – August 2024</div></div>
                <div class="timeline__item reveal"><div class="timeline__content"><h3 class="timeline__title">BA IT – CHE University of Applied Sciences</h3><p class="timeline__company">Specialization: IT Consultancy</p><p class="timeline__description">Broad foundation in Development & UX design. Led internship projects for the implementation of HubSpot and an ERP PowerApps solution.</p></div><div class="timeline__date">September 2022 – Present</div></div>
            `,
            expertiseTitle: "Expertise",
            expertise_t1_title: "Technical & Software",
            expertise_t1_list: `<li>Python, SQL, C#, Golang</li><li>HTML, CSS, Javascript</li><li>Power BI, PowerApps, HubSpot</li><li>Word, PowerPoint, Excel</li>`,
            expertise_t2_title: "Project Management & Methods",
            expertise_t2_list: `<li>Agile, Scrum</li><li>Policy Analysis, Research</li><li>Process Optimization (Lean)</li><li>Time Management</li>`,
            expertise_t3_title: "Communication & Leadership",
            expertise_t3_list: `<li>Team Leadership</li><li>Public Speaking & Presenting</li><li>Stakeholder Management</li><li>Conflict Resolution</li>`,
            recognitionTitle: "Recognition & Certifications",
            rec_1_title: "Top 5 Finalist",
            rec_1_desc: "Student of the Year Award 2024, for the most impactful students in the Netherlands.",
            rec_2_title: "C2 Cambridge English",
            rec_2_desc: "Proven English language proficiency at the highest achievable level (Proficiency).",
            rec_3_title: "Lean Green Belt",
            rec_3_desc: "Skilled in process optimization and creating and implementing efficient workflows.",
            // Other EN translations...
        }
    };
    
    // De rest van het app.js script blijft ONGEWIJZIGD!
    // ...
    // Plak de rest van het vorige app.js script hieronder.
    // ...
    
    /**
     * INITIALISATIE
     */
    document.addEventListener('DOMContentLoaded', () => {
        initLanguageSwitcher();
        initSmoothScrolling();
        initScrollAnimations();
        initActiveNavOnScroll();
        initParallax();
        initCustomCursor();
        updateFooterYear();
    });

    /**
     * FUNCTIE: TAALWISSELAAR
     */
    function initLanguageSwitcher() {
        const langLinks = document.querySelectorAll('.lang-link');
        
        langLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = link.getAttribute('data-lang');
                switchLanguage(selectedLang);
                localStorage.setItem('language', selectedLang);
            });
        });

        const storedLang = localStorage.getItem('language') || 'nl';
        switchLanguage(storedLang);
    }

    function switchLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        const data = languageData[lang] || languageData.nl;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (data[key]) {
                // Speciale behandeling voor de dynamische tijdlijn
                if (key === 'timeline') {
                    document.querySelector('.timeline').innerHTML = data[key];
                    // Her-initialiseer de animaties voor de nieuwe tijdlijn-items
                    initScrollAnimationsForTimeline(); 
                } else if (el.tagName === 'META' || el.tagName === 'TITLE') {
                    if (el.tagName === 'TITLE') el.textContent = data[key];
                    else el.setAttribute('content', data[key]);
                } else {
                    el.innerHTML = data[key];
                }
            }
        });

        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            }
        });
        
        updateFooterYear();
    }
    
    /**
     * Hulpfunctie om animaties opnieuw toe te passen na taalwissel
     */
    function initScrollAnimationsForTimeline() {
        const timelineItems = document.querySelectorAll('.timeline .reveal');
        if (!timelineItems.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        timelineItems.forEach(element => observer.observe(element));
    }
    
    // ... (rest van de functies: initSmoothScrolling, etc. ongewijzigd) ...
    // ... de overige functies uit het vorige antwoord komen hier ...

})();