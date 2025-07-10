/*
  APP.JS - State-of-the-Art Interacties & Vertalingen voor Twan Meurs
  Versie: 7.1 (Definitief & Compleet - Inclusief Mobiele Header)
*/
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
parAction: "Aanpak:",
parImpact: "Impact:",
p1Title: "Procesoptimalisatie & Strategisch Advies",
p1Client: "Rol: IT-Consultant @ Wageningen University & Research",
p1Challenge: " De universiteit had behoefte aan verbetering van IT-processen en een effectiever gebruik van beschikbare technologische middelen.",
p1Action: " Ik analyseerde en modelleerde bestaande processen, stelde concrete adviesrapporten op voor de IT-afdeling en bracht de volledige audiovisuele infrastructuur in kaart om knelpunten en optimalisaties te signaleren.",
p1Impact: " Bijgedragen aan meer efficiëntie binnen de IT-afdeling en een strategische basis gelegd voor toekomstige investeringen, tooling en procesverbeteringen.",
p2Title: "Studentvertegenwoordiging & Community Engagement",
p2Client: "Rol: Student Assessor @ Christelijke Hogeschool Ede",
p2Challenge: " De stem van studenten op bestuursniveau versterken en de verbondenheid binnen de studentengemeenschap vergroten.",
p2Action: " Ik vertegenwoordigde studenten in het College van Bestuur, leverde inhoudelijke bijdragen aan beleidsdocumenten en coördineerde grootschalige evenementen zoals het Winter Gala en de Zomernacht.",
p2Impact: " Zorgde voor directe studentbetrokkenheid bij bestuursbesluiten en versterkte de zichtbaarheid, samenhang en betrokkenheid binnen de studentengemeenschap.",

            // Loopbaan & Opleiding
            careerTitle: "Loopbaan & Opleiding",
            
           // Expertise
expertiseTitle: "Expertise",
expertise_t1_title: "Techniek & Ontwikkeling",
expertise_t1_list: `
  <li>Python, SQL, C#, Golang, HTML, CSS, JavaScript, Typescript, Vue</li>
  <li>Power BI, PowerApps, HubSpot, Netlify CMS</li>
  <li>Git, REST API’s, JSON, Markdown</li>
`,

expertise_t2_title: "Business & Projectaanpak",
expertise_t2_list: `
  <li>Agile, Scrum, Design Thinking</li>
  <li>Beleidsanalyse, Onderzoek, UX-ontwerp</li>
  <li>Lean Green Belt, Businesscase-ontwikkeling</li>
  <li>Klantgericht werken, Strategie & Planning</li>
`,

expertise_t3_title: "Leiderschap & Communicatie",
expertise_t3_list: `
  <li>Teamleiderschap & Samenwerking</li>
  <li>Publiek Spreken & Voorzitterschap</li>
  <li>Stakeholdermanagement, Verandercommunicatie</li>
  <li>Politiek bewustzijn & maatschappelijke betrokkenheid</li>
`,

// Erkenning
recognitionTitle: "Erkenning & Certificeringen",

rec_1_title: "Top 5 Finalist",
rec_1_desc: "Genomineerd voor de Student van het Jaar Award 2024, als een van de meest impactvolle studenten van Nederland.",

rec_2_title: "C2 Cambridge English",
rec_2_desc: "Engelse taalvaardigheid bewezen op het hoogste niveau (C2 CEFR – Proficiency).",

rec_3_title: "Lean Six Sigma Green Belt",
rec_3_desc: "Bekwaam in procesoptimalisatie en het toepassen van efficiënte, data-gedreven workflows met Lean Six Sigma.",

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
parAction: "Approach:",
parImpact: "Impact:",
p1Title: "Process Optimization & Strategic Advisory",
p1Client: "Role: IT-Consultant @ Wageningen University & Research",
p1Challenge: " The university needed to improve IT processes and make more strategic use of its available technological resources.",
p1Action: " I analyzed and modeled key processes, created actionable advisory reports for the IT department, and conducted a full inventory of the audiovisual infrastructure to identify bottlenecks and optimization opportunities.",
p1Impact: " Strengthened the IT department's operational efficiency and provided a strategic foundation for future investments, tooling, and process improvements.",
p2Title: "Student Governance & Community Engagement",
p2Client: "Role: Student Assessor @ CHE University of Applied Sciences",
p2Challenge: " Amplifying the student voice at the executive level while fostering community and representation across the student body.",
p2Action: " I contributed to the Executive Board as student assessor, co-authored policy documents, and coordinated flagship events such as the Winter Gala and Summer Night Gala to boost student involvement.",
p2Impact: " Drove greater student influence on university governance and improved the visibility, cohesion, and engagement of the student community.",


             // Career & Education
             careerTitle: "Career & Education",
 
             // Expertise
expertiseTitle: "Expertise",
expertise_t1_title: "Technology & Development",
expertise_t1_list: `
  <li>Python, SQL, C#, Golang, HTML, CSS, JavaScript, Typescript, Vue</li>
  <li>Power BI, PowerApps, HubSpot, Netlify CMS</li>
  <li>Git, REST APIs, JSON, Markdown</li>
`,

expertise_t2_title: "Business & Project Approach",
expertise_t2_list: `
  <li>Agile, Scrum, Design Thinking</li>
  <li>Policy Analysis, Research, UX Design</li>
  <li>Lean Green Belt, Business Case Development</li>
  <li>Customer Focus, Strategy & Planning</li>
`,

expertise_t3_title: "Leadership & Communication",
expertise_t3_list: `
  <li>Team Leadership & Collaboration</li>
  <li>Public Speaking & Chairmanship</li>
  <li>Stakeholder Management, Change Communication</li>
  <li>Political Awareness & Social Engagement</li>
`,
// Recognition & Certifications
recognitionTitle: "Recognition & Certifications",

rec_1_title: "Top 5 Finalist",
rec_1_desc: "Nominated for the 2024 Student of the Year Award, recognizing the most impactful students in the Netherlands.",

rec_2_title: "C2 Cambridge English",
rec_2_desc: "Proven English proficiency at the highest attainable level (Proficiency – C2 CEFR).",

rec_3_title: "Lean Six Sigma Green Belt",
rec_3_desc: "Skilled in process optimization and implementing efficient, data-driven workflows using Lean Six Sigma methodology.",

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
  {
    nl: {
      title: "Co-founder – TwinPixel Webdesign & IT-consultancy",
      desc: "Oprichter van een modern bureau voor maatwerkwebsites, SEO, AI-chatbots en strategisch digitaal advies. Gericht op ondernemers en organisaties met groeiambitie.",
      date: "maart 2025 – heden"
    },
    en: {
      title: "Co-founder – TwinPixel Webdesign & IT Consultancy",
      desc: "Founder of a modern agency for custom websites, SEO, AI chatbot integration, and strategic digital advice. Focused on entrepreneurs and growth-oriented organizations.",
      date: "March 2025 – Present"
    }
  },
  {
    nl: {
      title: "Lid – Studentenhogeschoolraad CHE",
      desc: "Behartig de belangen van studenten op centraal niveau, lever inhoudelijke input op beleid, en verbind onderwijs met de studentbeleving.",
      date: "maart 2025 – heden"
    },
    en: {
      title: "Member – CHE Student Council",
      desc: "Representing students at the central level, providing substantive input on policy, and connecting education with the student experience.",
      date: "March 2025 – Present"
    }
  },
  {
    nl: {
      title: "IT Consultant",
      company: "Wageningen University & Research",
      desc: "Verbeteren van IT-processen, opstellen van strategische adviezen en visualiseren van AV-infrastructuur ter ondersteuning van besluitvorming.",
      date: "oktober 2024 – heden"
    },
    en: {
      title: "IT Consultant",
      company: "Wageningen University & Research",
      desc: "Improving IT processes, creating strategic advisory reports, and visualizing AV infrastructure to support decision-making.",
      date: "October 2024 – Present"
    }
  },
  {
    nl: {
      title: "Voorzitter – Jongerenraad Wageningen",
      desc: "Leid de raad, adviseer de gemeente over jongerenbeleid, en bouw aan een duurzame brug tussen jongeren en politiek-bestuurlijke organen.",
      date: "oktober 2024 – heden"
    },
    en: {
      title: "Chair – Wageningen Youth Council",
      desc: "Leading the council, advising the municipality on youth policy, and building a sustainable bridge between youth and political decision-makers.",
      date: "October 2024 – Present"
    }
  },
  {
    nl: {
      title: "Student Assessor",
      company: "Christelijke Hogeschool Ede",
      desc: "Schakelfiguur tussen studenten en bestuur; verantwoordelijk voor strategisch advies, beleidsinput en het opzetten van impactvolle events.",
      date: "april 2023 – januari 2024"
    },
    en: {
      title: "Student Assessor",
      company: "CHE University of Applied Sciences",
      desc: "Liaison between students and the executive board; responsible for strategic advice, policy input, and organizing impactful events.",
      date: "April 2023 – January 2024"
    }
  },
  {
    nl: {
      title: "Voorzitter & Oprichter – S.V. NULL",
      company: "Studievereniging ICT",
      desc: "ICT-vereniging opgezet vanuit niets; leidde een team, vergrootte betrokkenheid van studenten en organiseerde educatieve én sociale activiteiten.",
      date: "september 2022 – augustus 2024"
    },
    en: {
      title: "Chair & Founder – S.V. NULL",
      company: "ICT Study Association",
      desc: "Founded the ICT study association from scratch; led a team, increased student engagement, and organized both educational and social activities.",
      date: "September 2022 – August 2024"
    }
  },
  {
    nl: {
      title: "BA ICT – Christelijke Hogeschool Ede",
      company: "Specialisatie: IT-Consultancy",
      desc: "T-shaped opleiding met focus op consultancy, development en UX. Stages met o.a. implementatie van HubSpot en PowerApps binnen het mkb.",
      date: "september 2022 – heden"
    },
    en: {
      title: "BA ICT – CHE University of Applied Sciences",
      company: "Specialization: IT Consultancy",
      desc: "T-shaped program focused on consultancy, development, and UX. Internships included implementing HubSpot and PowerApps in SME environments.",
      date: "September 2022 – Present"
    }
  }
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
     * FUNCTIE: DYNAMISCH JAARTAL IN FOOTER
     */
    function updateFooterYear() {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

})();