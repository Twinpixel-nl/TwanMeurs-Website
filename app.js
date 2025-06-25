/*
  APP.JS - State-of-the-Art Interacties & Vertalingen voor Twan Meurs
  Versie: 7.1 (Definitief & Compleet - Inclusief Mobiele Header)
*/
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
(() => {
    'use strict';

    /**
     * HET WOORDENBOEK
     * Bevat alle vertalingen. De sleutels komen exact overeen met de `data-lang-key` attributen in de HTML.
     */
    const languageData = {
        nl: {
            // Meta & Navigatie
            metaTitle: "Twan Meurs - Bruggenbouwer tussen IT & Bestuur",
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
            aboutSubtitle: "Technologisch scherp, bestuurlijk onderlegd.",
            aboutP1: "Ik geloof in technologie als middel - niet als doel. Als IT-consultant met ervaring binnen strategische en bestuurlijke omgevingen help ik organisaties complexe vraagstukken te vertalen naar concrete digitale oplossingen. Dat kan gaan over informatiestromen, tooling, data governance of digitale strategie.",
            aboutP2: "Wat mij uniek maakt, is mijn dubbelfocus: ik begrijp de techniek én ik spreek de taal van bestuur en beleid. Als studentassessor bij het College van Bestuur van de CHE en oprichter van studievereniging NULL weet ik hoe je mensen verbindt en draagvlak creëert. Die bestuurlijke ervaring combineer ik met projecten bij onder meer WUR, TwinPixel en externe opdrachtgevers.",
            aboutP3: "Mijn aanpak is analytisch, pragmatisch en mensgericht. Ik werk vanuit structuur, denk in mogelijkheden, en houd altijd oog voor het einddoel. Of het nu gaat om procesverbetering, AI-chatbots, systeemontwerp of verandervraagstukken - ik maak technologie begrijpelijk, bestuurbaar én strategisch waardevol.",
            aboutImageAlt: "Professioneel portret van Twan Meurs",

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
            
            // Expertise
            expertiseTitle: "Expertise",
            expertise_t1_title: "Technisch & Software",
            expertise_t1_list: `<li>Python, SQL, C#, Golang, HTML, CSS, Javascript</li><li>Power BI, PowerApps, HubSpot</li><li>Word, PowerPoint, Excel</li>`,
            expertise_t2_title: "Projectmanagement & Methoden",
            expertise_t2_list: `<li>Agile, Scrum</li><li>Beleidsanalyse, Onderzoek</li><li>Procesoptimalisatie (Lean Green Belt)</li><li>Tijdsmanagement</li>`,
            expertise_t3_title: "Communicatie & Leiderschap",
            expertise_t3_list: `<li>Teamleiderschap & Samenwerking</li><li>Publiek Spreken & Presenteren</li><li>Stakeholdermanagement</li><li>Conflictoplossing</li>`,

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
            footerCopyright: "© <span id=\"current-year\"></span> <a href=\"https://www.twinpixel.nl\" target=\"_blank\" rel=\"noopener noreferrer\">TwinPixel</a> by Twan Meurs. Alle rechten voorbehouden."
        },
        en: {
             // Meta & Navigation
             metaTitle: "Twan Meurs – Building Bridges between IT & Governance",
             metaDescription: "Twan Meurs translates complex technology into strategic governance decisions. View my projects and discover how I connect IT potential with strategic governance.",
             ogDescription: "I help governmental organizations and leading companies move forward by connecting technology with strategy.",
             navAbout: "About Me",
             navProjects: "Projects",
             navCareer: "Career & Education",
             navExpertise: "Expertise",
             navContact: "Contact",
 
             // Hero
             heroTitle: `Building bridges between IT potential <span class="text-accent">and strategic governance.</span>`,
             heroSubtitle: "I translate complex technology into clear, strategic decisions that help organizations advance.",
             heroBtn: "View my projects",
 
             // About Me
             aboutTitle: "My Approach",
             aboutSubtitle: "Technologically sharp, administratively skilled.",
             aboutP1: "I believe technology is a means - not an end. As an IT consultant with experience in strategic and administrative environments, I help organizations translate complex challenges into concrete digital solutions. This includes information flows, tooling, data governance, or digital strategy.",
             aboutP2: "What sets me apart is my dual focus: I understand the technical side and speak the language of governance and policy. As a student representative on the Executive Board of CHE and founder of the student association NULL, I know how to connect people and build support. I combine this governance experience with projects at WUR, TwinPixel, and external clients.",
             aboutP3: "My approach is analytical, pragmatic, and people-oriented. I work with structure, think in terms of opportunities, and always keep the end goal in sight. Whether it’s process improvement, AI chatbots, system design, or organizational change - I make technology understandable, governable, and strategically valuable.",
             aboutImageAlt: "Professional portrait of Twan Meurs",
 
             // Projects
             projectsTitle: "Featured Projects",
             parChallenge: "Challenge:",
             parAction: "Action:",
             parImpact: "Impact:",
             p1Title: "Process Optimization & Advisory",
             p1Client: "Role: Service Consultant @ Wageningen University",
             p1Challenge: " The need to improve various IT processes within the university and to utilize available resources more effectively.",
             p1Action: " I modeled existing processes, drafted concrete advisory reports for the IT department, and inventoried the complete audio-visual infrastructure.",
             p1Impact: " Directly contributed to the efficiency of the IT department and created a clear strategic overview for future investments and improvements.",
             p2Title: "Administrative Representation & Event Management",
             p2Client: "Role: Student Assessor @ CHE University of Applied Sciences",
             p2Challenge: " To effectively represent the student voice at the administrative level and to strengthen the student community.",
             p2Action: " I participated in the co-determination council, provided input on policy documents, and organized large-scale events such as the Winter Gala and Summer Night Gala.",
             p2Impact: " Ensured direct student influence on university policy and increased engagement and satisfaction within the student community.",
 
             // Career & Education
             careerTitle: "Career & Education",
 
             // Expertise
             expertiseTitle: "Expertise",
             expertise_t1_title: "Technical & Software",
             expertise_t1_list: `<li>Python, SQL, C#, Golang, HTML, CSS, Javascript</li><li>Power BI, PowerApps, HubSpot</li><li>Word, PowerPoint, Excel</li>`,
             expertise_t2_title: "Project Management & Methods",
             expertise_t2_list: `<li>Agile, Scrum</li><li>Policy Analysis, Research</li><li>Process Optimization (Lean Green Belt)</li><li>Time Management</li>`,
             expertise_t3_title: "Communication & Leadership",
             expertise_t3_list: `<li>Team Leadership & Collaboration</li><li>Public Speaking & Presenting</li><li>Stakeholder Management</li><li>Conflict Resolution</li>`,
             
             // Recognition
             recognitionTitle: "Recognition & Certifications",
             rec_1_title: "Top 5 Finalist",
             rec_1_desc: "Student of the Year Award 2024, for the most impactful students in the Netherlands.",
             rec_2_title: "C2 Cambridge English",
             rec_2_desc: "Proven English language proficiency at the highest achievable level (Proficiency).",
             rec_3_title: "Lean Green Belt",
             rec_3_desc: "Skilled in process optimization and creating and implementing efficient workflows.",
 
             // Footer
             footerTitle: "Let's connect.",
             footerText: "Interested in a collaboration or would you like to exchange ideas? <br>I would be happy to get in touch with you.",
             footerBtn: "Send an email",
             footerCopyright: "© <span id=\"current-year\"></span> <a href=\"https://www.twinpixel.nl\" target=\"_blank\" rel=\"noopener noreferrer\">TwinPixel</a> by Twan Meurs. All rights reserved."
        }
    };

    /**
     * INITIALISATIE
     */
    document.addEventListener('DOMContentLoaded', () => {
 initMobileNav();
    initHeaderScroll();
    initLanguageSwitcher();
    initSmoothScrolling();
    initScrollAnimations();
    initActiveNavOnScroll();
    initParallax();
    updateFooterYear();

    // DE BELANGRIJKE CHECK: Laad muis-specifieke features alleen op non-touch apparaten
    if (!isTouchDevice()) {
        document.body.classList.add('no-touch');
        initCustomCursor();
        initClickRippleEffect();
    }
});

    /**
     * FUNCTIE: Mobiele Navigatie (Hamburger Menu)
     */
    function initMobileNav() {
        const header = document.querySelector('.header');
        const toggleBtn = document.querySelector('.header__toggle');
        const navMenu = document.querySelector('.header__menu');
        if (!toggleBtn || !navMenu) return;

        toggleBtn.addEventListener('click', () => {
            const isOpen = header.classList.toggle('header--open');
            toggleBtn.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        header.classList.remove('header--open');
                        toggleBtn.setAttribute('aria-expanded', 'false');
                        document.body.style.overflow = '';
                        setTimeout(() => {
                             targetElement.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                    }
                }
            });
        });
    }

    /**
     * FUNCTIE: Dynamische Header op Scroll
     */
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    /**
     * FUNCTIE: KLIK GOLF-EFFECT (RIPPLE)
     */
    function initClickRippleEffect() {
        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            document.body.appendChild(ripple);
            ripple.style.left = `${e.clientX}px`;
            ripple.style.top = `${e.clientY}px`;
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
    
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
                const content = data[key];
                if (key.endsWith('Alt')) {
                    el.setAttribute('alt', content);
                } else if (el.tagName === 'META' || el.tagName === 'TITLE') {
                    if (el.tagName === 'TITLE') el.textContent = content;
                    else el.setAttribute('content', content);
                } else {
                    el.innerHTML = content;
                }
            }
        });
        updateTimeline(lang);
        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            }
        });
        updateFooterYear();
    }
    
    /**
     * Hulpfunctie om de tijdlijn dynamisch te vullen
     */
    function updateTimeline(lang) {
        const timelineContainer = document.querySelector('.timeline');
        if (!timelineContainer) return;
        const timelineData = [
            { nl: { title: "Medeoprichter – TwinPixel Webdesign & IT-advies", desc: "Kleinschalig bureau gestart voor het ontwikkelen van moderne websites (HTML, CSS, JS, SEO) en het realiseren van functies als chatbotintegratie en meertalige ondersteuning.", date: "maart 2025 – Heden" }, en: { title: "Co-founder – TwinPixel Webdesign & IT-advice", desc: "Started a small-scale agency for developing modern websites (HTML, CSS, JS, SEO) and implementing features like chatbot integration and multilingual support.", date: "March 2025 – Present" }},
            { nl: { title: "Lid – Studentenhogeschoolraad van de CHE", desc: "Vertegenwoordig studenten op centraal niveau binnen de medezeggenschap en denk actief mee over strategisch beleid, huisvesting en begrotingen.", date: "maart 2025 – Heden" }, en: { title: "Member – CHE Student Council", desc: "Representing students at a central level in the university's participatory bodies and actively contributing to strategic policy, housing, and budgets.", date: "March 2025 – Present" }},
            { nl: { title: "Service Consultant", company: "Wageningse Universiteit", desc: "Modelleren en verbeteren van IT-processen, opstellen van adviesrapporten en inventariseren van audiovisuele middelen.", date: "oktober 2024 – Heden" }, en: { title: "Service Consultant", company: "Wageningen University", desc: "Modeling and improving IT processes, drafting advisory reports, and inventorying audio-visual resources.", date: "October 2024 – Present" }},
            { nl: { title: "Voorzitter – Jongerenraad Wageningen", desc: "Adviseer de gemeente over jongerenbeleid, zet een nieuwe structuur op en bevorder de communicatie tussen jongeren en gemeentelijke besluitvorming.", date: "oktober 2024 – Heden" }, en: { title: "Chairman – Wageningen Youth Council", desc: "Advising the municipality on youth policy, establishing a new structure, and promoting communication between youth and municipal decision-making.", date: "October 2024 – Present" }},
            { nl: { title: "Student Assessor", company: "Christelijke Hogeschool Ede", desc: "Vertegenwoordigde studenten op bestuursniveau, leidde projecten, bevorderde duurzaamheid en organiseerde grote evenementen.", date: "april 2023 – januari 2024" }, en: { title: "Student Assessor", company: "CHE University of Applied Sciences", desc: "Represented students at the executive level, led projects, promoted sustainability, and organized large-scale events.", date: "April 2023 – January 2024" }},
            { nl: { title: "Voorzitter & Oprichter – S.V. NULL", company: "Studievereniging ICT", desc: "Vereniging opgericht voor en door ICT-studenten, bestuur geleid en 35% van de opleiding betrokken als actief lid.", date: "september 2022 – augustus 2024" }, en: { title: "Chairman & Founder – S.V. NULL", company: "ICT Study Association", desc: "Established an association for and by ICT students, led the board, and managed to involve 35% of the entire study program as active members.", date: "September 2022 – August 2024" }},
            { nl: { title: "BA IT – Christelijke Hogeschool Ede", company: "Specialisatie: IT-Consultancy", desc: "Brede basis in Development & UX-design. Leiding gegeven aan stageprojecten voor de implementatie van HubSpot en een ERP PowerApps-oplossing.", date: "september 2022 – Heden" }, en: { title: "BA IT – CHE University of Applied Sciences", company: "Specialization: IT Consultancy", desc: "Broad foundation in Development & UX design. Led internship projects for the implementation of HubSpot and an ERP PowerApps solution.", date: "September 2022 – Present" }}
        ];
        let html = '';
        timelineData.forEach((item, index) => {
            const content = item[lang] || item.nl;
            const companyHtml = content.company ? `<p class="timeline__company">${content.company}</p>` : '';
            html += `
                <div class="timeline__item reveal" style="transition-delay: ${index * 100}ms">
                    <div class="timeline__content">
                        <h3 class="timeline__title">${content.title}</h3>
                        ${companyHtml}
                        <p class="timeline__description">${content.desc}</p>
                    </div>
                    <div class="timeline__date">${content.date}</div>
                </div>
            `;
        });
        timelineContainer.innerHTML = html;
        initScrollAnimationsForTimeline();
    }
    
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
    
    /**
     * FUNCTIE: SOEPEL SCROLLEN (SMOOTH SCROLLING)
     */
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            // Negeer links in het mobiele menu, want die hebben hun eigen logica
            if (anchor.closest('.header__menu')) return; 

            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    /**
     * FUNCTIE: SCROLL-TRIGGERED ANIMATIONS (voor algemene elementen)
     */
    function initScrollAnimations() {
        const elementsToReveal = document.querySelectorAll('.reveal:not(.timeline__item)');
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
     */
    function initActiveNavOnScroll() {
        const sections = document.querySelectorAll('main section[id]');
        const navLinks = document.querySelectorAll('.header__nav a');
        if (!sections.length || !navLinks.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });
        sections.forEach(section => observer.observe(section));
    }

    /**
     * FUNCTIE: GEOPTIMALISEERD PARALLAX EFFECT
     */
    function initParallax() {
        const heroBg = document.querySelector('.hero__bg');
        if (!heroBg) return;
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollValue = window.scrollY;
                    heroBg.style.transform = `translateY(${scrollValue * 0.3}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /**
     * FUNCTIE: CUSTOM CURSOR
     */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (!cursor || !follower) return;

    // Maak de cursor-elementen zichtbaar (ze zijn standaard verborgen)
    cursor.style.display = 'block';
    follower.style.display = 'block';
    
    const interactiveElements = 'a, .btn, button, .timeline__content, .case-study';
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    const followMouse = () => {
        posX += (mouseX - posX) * 0.2;
        posY += (mouseY - posY) * 0.2;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(followMouse);
    };
    followMouse();
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveElements)) {
            document.body.classList.add('cursor-grow');
        } else {
             document.body.classList.remove('cursor-grow');
        }
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