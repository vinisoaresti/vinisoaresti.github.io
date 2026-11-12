// ===== TYPEWRITER EFFECT =====
const roles = [
    'developer back-end',
    'analista de sistemas',
    'líder técnico',
    'developer front-end',
    'Node.js & TypeScript',
    'C# & .NET',
    'Java & Spring',
    'React & Next.js',
    'cloud & DevOps',
    'Docker & CI/CD',
    'SAP HANA XS',
    'API RESTful',
    'otimizador de performance',
    'SAPUI5 developer'
];

const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 80;
const pauseBeforeDelete = 2000;
const pauseBeforeType = 500;

function typeWriter() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseBeforeDelete);
            return;
        }
        setTimeout(typeWriter, typeSpeed);
    } else {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeWriter, pauseBeforeType);
            return;
        }
        setTimeout(typeWriter, typeSpeed / 2);
    }
}

typeWriter();

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ===== PROJECT GALLERY =====
const projectsData = {
    creatis: {
        title: 'Creative Integration Suite',
        desc: 'Versão inicial do TCC: um SaaS que automatiza fluxos de ideação, desenvolvimento, correção e lançamento de conteúdo em agências de marketing. Está sendo refatorado num novo repositório para incluir responsividade e novas tecnologias.',
        image: 'assets/projects/creatis.png',
        live: 'https://creatis-ten.vercel.app/',
        repo: 'https://github.com/vinisoaresti/creativeIntegrationSuite_old'
    },
    instagram: {
        title: 'Instagram Clone',
        desc: 'Aplicação web inspirada na página de login do Instagram, com alta fidelidade visual, animações e responsividade. Desenvolvida utilizando HTML, CSS e JavaScript puro.',
        image: 'assets/projects/instagram-clone.png',
        live: 'https://vinisoaresti.github.io/instagramClone/',
        repo: 'https://github.com/vinisoaresti/instagramClone'
    },
    timbiriche: {
        title: 'Timbiriche',
        desc: 'Implementação minimalista do clássico jogo dos pontinhos (dots and boxes) em HTML, CSS e JavaScript. Explora manipulação de DOM, lógica de jogo concisa e interface clean.',
        image: 'assets/projects/timbiriche.png',
        live: 'https://vinisoaresti.github.io/timbiriche/',
        repo: 'https://github.com/vinisoaresti/timbiriche'
    }
};

function selectProject(key) {
    const project = projectsData[key];
    if (!project) return;

    // Update active thumb
    document.querySelectorAll('.project-thumb').forEach(thumb => {
        thumb.classList.toggle('active', thumb.dataset.project === key);
    });

    // Animate image transition
    const img = document.getElementById('projectImage');
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = project.image;
        img.alt = `Preview: ${project.title}`;
        img.style.opacity = '1';
    }, 250);

    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDesc').textContent = project.desc;
    document.getElementById('projectLive').href = project.live;
    document.getElementById('projectRepo').href = project.repo;
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== LANGUAGE BAR ANIMATION =====
const langBars = document.querySelectorAll('.lang-bar-fill');
const langObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const width = target.style.width;
            target.style.width = '0%';
            setTimeout(() => {
                target.style.width = width;
            }, 200);
        }
    });
}, { threshold: 0.5 });

langBars.forEach(bar => langObserver.observe(bar));
