// Data structures for dynamic content
const portfolioData = {
  skills: [
    // ... unchanged ...
    { name: "React", iconClass: "devicon-react-original colored", type: "devicon" },
    { name: "Next.js", iconClass: "devicon-nextjs-original-wordmark", type: "devicon" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored", type: "devicon" },
    { name: "Express", iconClass: "devicon-express-original", type: "devicon" },
    { name: "Redux", iconClass: "devicon-redux-original colored", type: "devicon" },
    { name: "Material UI", iconSrc: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg", type: "img" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored", type: "devicon" },
    { name: "React Native", iconClass: "devicon-react-original colored", type: "devicon" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored", type: "devicon" },
    { name: "Flask", iconClass: "devicon-flask-original", type: "devicon" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored", type: "devicon" },
    { name: "SQL", iconClass: "devicon-mysql-plain colored", type: "devicon" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored", type: "devicon" },
    { name: "HTML5", iconClass: "devicon-html5-plain colored", type: "devicon" },
    { name: "CSS3", iconClass: "devicon-css3-plain colored", type: "devicon" },
    { name: "Git", iconClass: "devicon-git-plain colored", type: "devicon" },
    { name: "REST APIs", iconClass: "devicon-fastapi-plain colored", type: "devicon" },
    { name: "TensorFlow", iconClass: "devicon-tensorflow-original colored", type: "devicon" },
    { name: "OPEN AI", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", type: "img" },
    { name: "Hugging Face", iconSrc: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", type: "img" },
    { name: "NumPy", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg", type: "img" },
    { name: "scikit-learn", iconSrc: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png", type: "img" },
    { name: "MobileNetV2", iconSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", type: "img" },
    { name: "GraphQL", iconClass: "devicon-graphql-plain colored", type: "devicon" }
  ],

  experiences: [
    // ... unchanged ...
    {
      company: "Imam Organization",
      title: "Software Developer",
      duration: "Nov 2024 – Jan 2025 | Remote (UK)",
      icon: "fa-solid fa-building",
      responsibilities: [
        "Built a School Management System serving users with attendance, grading, and user roles.",
        "Designed secure multi-role authentication (JWT): Admin, Teacher, Student, Family.",
        "Integrated AWS S3 & Cloudinary for scalable media delivery, reducing latency.",
        "Automated grading/reporting workflows, saving ~2 hrs/week via online test systems.",
      ],
      aosDelay: 0
    },
    {
      company: "MedEdPort",
      title: "Full Stack Developer",
      duration: "Sep 2023 – Dec 2024 | Remote (USA)",
      icon: "fa-solid fa-user-md",
      responsibilities: [
        "Architected a real-time medical portal for professionals using MERN stack and JWT auth.",
        "Optimized media architecture via Cloudinary; reduced upload latency by 40%.",
        "Set up CI/CD via Heroku; led end-to-end SDLC including planning, execution, and delivery.",
      ],
      aosDelay: 160
    },
  ],

  projects: [
    {
      title: "Planteria – AI Plant Disease Detection",
      description: "AI-powered mobile app using MobileNetV2 to identify plant diseases from images (96% accuracy). Integrated e-commerce for gardening supplies, empowering vendors and community-based micro-entrepreneurship.",
      image: "./assets/img/nature/planteria.png",
      badges: ["React Native", "Flask", "Node.js", "MongoDB", "TensorFlow", "Gemini AI"],
      featured: "🌿 Featured",
      aosDelay: 0,
      video: "https://youtu.be/uYJc3JNPHp4",
      concept:"https://youtu.be/yMqYKmechmA",
    //   link:""
    },
    {
      title: "MedEdPort – Doctors Portal",
      description: "Real-time educational portal for doctors. Implements secure JWT authentication, Cloudinary media uploads, and full CI/CD deployment for reliability.",
      image: "./assets/img/nature/meded.png",
      badges: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      aosDelay: 60,
      video:"https://youtu.be/jPUgrTiLmxM"
    },
            {
      title: "Career Navigator ",
      description: "Navigate your career path with precision using our AI-powered tools. Discover personalized roadmaps, identify skill gaps, and find your ideal role.",
      image: "./assets/img/nature/Career-Navigator.png",
      badges: ["React", "Flask", "Node.js", "MongoDB", "PyMuPDF", "Gemini AI", "RAG"],
      featured: "😉 Coming Soon",
      aosDelay: 120,
      link: "http://careernavigator.site/",
      // video: "https://youtu.be/RRopdNR0Mxg"
    },
        {
      title: "HireFlow – AI Resume Screening Platform",
      description: "SaaS tool to automate resume screening. Uses PDF parsing, RAG, and human-like summaries for candidate fit analysis—revolutionizing recruitment pipelines for modern hiring.",
      image: "./assets/img/nature/HireFlow.png",
      badges: ["React", "Flask", "Node.js", "MongoDB", "PyMuPDF", "Gemini AI", "RAG"],
      featured: "🚀 Google Developer Hackathon",
      aosDelay: 180,
    //   link: "http://careernavigator.site/",
      video: "https://youtu.be/RRopdNR0Mxg"
    },
    {
      title: "News App",
      description: "Aggregates real-time news headlines from multiple countries and categories via NewsAPI, with source/category filters, bookmarks, and read-later features.",
      image: "./assets/img/nature/news app.png",
      badges: ["React", "NewsAPI", "Bootstrap"],
      aosDelay: 240,
      video:"https://youtu.be/h_0t8CrBBTE"
    },
    {
      title: "Convo Panda",
      description: "Social messaging web app with private/group chat, friend requests, and real-time communication. Built with scalable, community-driven architecture.",
      image: "./assets/img/nature/convo-panda.jpeg",
      badges: ["React", "MongoDB", "Node.js"],
      aosDelay: 300
    },
    {
      title: "Netflix UI Clone",
      description: "Netflix UI rebuilt with browse by category, real-time previews, and movie detail modals using TMDB API and Firebase backend.",
      image: "./assets/img/nature/netflix clone.png",
      badges: ["React", "TMDB API"],
      aosDelay: 360,
      video:"https://youtu.be/yhmWcm10QKM"
    },
    {
      title: "CMS Darntl – Contact Management System",
      description: "Business contact management tool with PDF & spreadsheet report generation for actionable insights.",
      image: "./assets/img/nature/bussiness analyical.png",
      badges: ["Spring Boot", "MySQL", "React.js", "PDF Gen", "Excel Export"],
      featured: "First Freelance Project 🎉",
      aosDelay: 400
    },
  ],

  volunteer: [
    // ... unchanged ...
    {
      title: "General Secretary – Hayatian Computing Society",
      organization: "University of Gujrat",
      duration: "2024 – 2025",
      icon: "fa-solid fa-users",
      responsibilities: [
        "Led 10+ academic, tech, and social events, engaging 400+ students.",
        "Organized inter-departmental coding contests and seminars (200+ participants).",
        "Managed logistics for hackathons, FYP expos, and programming tournaments.",
      ],
      borderClass: "border-primary",
      textClass: "text-primary",
      aosDelay: 0
    },
    {
      title: "Campus Ambassador – DAIRA'25",
      organization: "FAST NUCES CFC, Faisalabad",
      duration: "April 2025",
      icon: "fa-solid fa-bolt",
      responsibilities: [
        "Lead ambassador for UOG at national tech olympiad.",
        "Managed 50+ member delegation's logistics, accommodation, and scheduling.",
        "Oversaw budgeting and seamless event registration and travel.",
      ],
      borderClass: "border-info",
      textClass: "text-info",
      aosDelay: 80
    },
  ],

  contact: [
    // ... unchanged ...
    {
      type: "Email",
      value: "zunairkhawajaa@gmail.com",
      icon: "fas fa-envelope",
      iconClass: "text-danger",
      link: "mailto:zunairkhawajaa@gmail.com",
      aosDelay: 0
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/zunair-bin-zubair9059421a3",
      icon: "fab fa-linkedin",
      iconClass: "text-primary",
      link: "https://linkedin.com/in/zunair-bin-zubair9059421a3",
      aosDelay: 60
    },
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 1000, once: true, offset: 100 });
  initNavigation();
  initSkills();
  initExperience();
  initProjects();
  initVolunteer();
  initContact();
  initLazyLoading();
});

function initNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelectorAll(".nav-link").forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.96)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.classList.add("shadow-sm");
      } else {
        navbar.style.background = "rgba(15,23,42,0.92)";
        navbar.classList.remove("shadow-sm");
      }
    }
  });

  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY + 150;
    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        let sectionId = section.getAttribute("id");
        document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add("active");
      }
    });
  });

  window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    if (hero) {
      const scrollY = window.pageYOffset;
      const translateY = scrollY * -0.25;
      hero.style.transform = `translateY(${translateY}px)`;
    }
  });

  setTimeout(function () {
    const heroTitle = document.querySelector(".hero-title .gradient-text");
    if (heroTitle) {
      typeEffect(heroTitle, "Zunair Bin Zubair", 70);
    }
  }, 800);
}

function typeEffect(element, text, speed = 82) {
  let i = 0;
  element.textContent = "";
  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

function initSkills() {
  const skillsContainer = document.getElementById("skills-container");
  if (!skillsContainer) return;
  portfolioData.skills.forEach((skill, index) => {
    let iconHtml = "";
    if (skill.type === "devicon") {
      iconHtml = `<i class="${skill.iconClass}" style="font-size: 3rem;" aria-hidden="true"></i>`;
    } else if (skill.type === "img") {
      iconHtml = `<img src="${skill.iconSrc}" alt="${skill.name}" style="height: 3rem; object-fit: contain;" />`;
    }
    const delay = 40 * index;
    const skillHtml = `
      <div class="col-6 col-sm-4 col-md-2 mb-3 skill-icon" data-aos="flip-left" data-aos-delay="${delay}">
        ${iconHtml}
        <p class="mt-2 fw-semibold text-secondary">${skill.name}</p>
      </div>
    `;
    skillsContainer.innerHTML += skillHtml;
  });
}

function initExperience() {
  const experienceContainer = document.getElementById("experience-container");
  if (!experienceContainer) return;
  portfolioData.experiences.forEach(exp => {
    const responsibilitiesList = exp.responsibilities.map(resp => `<li>${resp}</li>`).join('');
    const experienceCardHtml = `
      <div class="card card-modern mb-5 p-4 text-start" data-aos="fade-up" data-aos-delay="${exp.aosDelay}">
        <div class="d-flex align-items-center mb-2">
          <i class="${exp.icon} fa-lg gradient-text me-2" aria-hidden="true"></i>
          <h4 class="fw-bold mb-0">${exp.title} – ${exp.company}</h4>
        </div>
        <div class="mb-2 text-primary fw-semibold">${exp.duration}</div>
        <ul class="mb-0">
          ${responsibilitiesList}
        </ul>
      </div>
    `;
    experienceContainer.innerHTML += experienceCardHtml;
  });
}

function initProjects() {
  const projectsContainer = document.getElementById("projects-container");
  if (!projectsContainer) return;
  projectsContainer.innerHTML = '';
  portfolioData.projects.forEach((project, idx) => {
    const badgesHtml = project.badges.map(badge =>
      `<span class="badge bg-dark">${badge}</span>`
    ).join('');
    const featuredBadge = project.featured ?
      `<span class="badge bg-gradient-primary position-absolute top-0 start-0 m-2 px-3 py-2" 
             style="background: var(--gradient-primary); color: #fff; font-weight: 600;">
        ${project.featured}
      </span>` : '';
    // Action Buttons (compact)
    let actionBtns = '';
    if (project.video && project.link) {
      actionBtns = `
        <div class="project-action-row mt-auto">
          <button class="project-action-btn" data-video="${project.video}" data-title="${project.title}" title="Project Demo">
            <i class="fa fa-play-circle"></i> Demo
          </button>
          <a href="${project.link}" class="project-action-btn" target="_blank" rel="noopener" title="Visit Live">
            <i class="fa fa-link"></i> Live
          </a>
        </div>
      `;
    }else if (project.video && project.concept) {
      actionBtns = `
        <div class="project-action-row mt-auto">
          <button class="project-action-btn" data-video="${project.video}" data-title="${project.title}" title="Project Demo">
            <i class="fa fa-play-circle"></i> Demo
          </button>
          <button class="project-action-btn" data-video="${project.demo}" data-title="${project.title}" title="Project Demo">
            <i class="fa fa-play-circle"></i> Concept
          </button>
        </div>
      `;
    }  
    else if (project.video) {
      actionBtns = `
        <div class="project-action-row mt-auto">
          <button class="project-action-btn" data-video="${project.video}" data-title="${project.title}" title="Project Demo">
            <i class="fa fa-play-circle"></i> Demo
          </button>
        </div>
      `;
    } else if (project.link) {
      actionBtns = `
        <div class="project-action-row mt-auto">
          <a href="${project.link}" class="project-action-btn" target="_blank" rel="noopener" title="Visit Live">
            <i class="fa fa-link"></i> Live
          </a>
        </div>
      `;
    }
    const projectHtml = `
      <div class="col" data-aos="zoom-in" data-aos-delay="${project.aosDelay || 0}">
        <div class="card card-modern h-100 border-0 shadow-lg position-relative d-flex flex-column">
          <div class="project-img-wrapper position-relative">
            <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                 data-src="${project.image}" alt="${project.title}"
                 class="img-fluid rounded-top lazyload">
            ${featuredBadge}
          </div>
          <div class="card-body text-start d-flex flex-column h-91">
            <h4 class="card-title fw-bold gradient-text mb-2">${project.title}</h4>
            <div class="d-flex flex-wrap gap-2 mb-2">${badgesHtml}</div>
            <p class="card-text small mb-2">${project.description}</p>
            ${actionBtns}
          </div>
        </div>
      </div>
    `;
    projectsContainer.innerHTML += projectHtml;
  });
  document.querySelectorAll('.project-action-btn[data-video]').forEach(btn => {
    btn.addEventListener('click', function () {
      const videoUrl = this.getAttribute('data-video');
      const projectTitle = this.getAttribute('data-title');
      openVideoModal(videoUrl, projectTitle);
    });
  });
}

function openVideoModal(videoUrl, title) {
  let embedUrl = '';
  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    let videoId = '';
    if (videoUrl.includes('youtu.be/')) {
      videoId = videoUrl.split('youtu.be/')[1].split(/[?&]/)[0];
    } else if (videoUrl.includes('v=')) {
      videoId = videoUrl.split('v=')[1].split('&')[0];
    }
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  } else {
    embedUrl = videoUrl;
  }
  const modalBody = document.getElementById('videoModalBody');
  modalBody.innerHTML = `
    <div class="ratio ratio-16x9">
      <iframe src="${embedUrl}" 
        frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>
    </div>
  `;
  // Set project title in modal
  document.getElementById('videoModalLabel').textContent = title || "Project Demo";
  const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
  videoModal.show();
  document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    modalBody.innerHTML = '';
    document.getElementById('videoModalLabel').textContent = '';
  }, { once: true });
}

function initVolunteer() {
  const volunteerContainer = document.getElementById("volunteer-container");
  if (!volunteerContainer) return;
  portfolioData.volunteer.forEach(volunteer => {
    const responsibilitiesList = volunteer.responsibilities.map(resp => `<li>${resp}</li>`).join('');
    const volunteerHtml = `
      <div class="card card-modern p-4 mb-5 border-start border-4 ${volunteer.borderClass} text-start" 
           data-aos="fade-up" data-aos-delay="${volunteer.aosDelay}">
        <div class="d-flex align-items-center mb-2">
          <i class="${volunteer.icon} fa-lg gradient-text me-2" aria-hidden="true"></i>
          <h4 class="fw-semibold mb-0">${volunteer.title}</h4>
        </div>
        <div class="mb-2 ${volunteer.textClass} fw-semibold">${volunteer.organization} | ${volunteer.duration}</div>
        <ul class="small ps-3 mb-0">
          ${responsibilitiesList}
        </ul>
      </div>
    `;
    volunteerContainer.innerHTML += volunteerHtml;
  });
}

function initContact() {
  const contactContainer = document.getElementById("contact-container");
  if (!contactContainer) return;
  portfolioData.contact.forEach(contact => {
    const contactHtml = `
      <div class="col-md-5" data-aos="zoom-in" data-aos-delay="${contact.aosDelay}">
        <a href="${contact.link}" target="_blank" class="text-decoration-none text-dark">
          <div class="card card-modern h-100 border-0 rounded-4 transition d-flex flex-row align-items-center gap-3 px-4 py-3">
            <i class="${contact.icon} fa-2x ${contact.iconClass}" aria-hidden="true"></i>
            <div class="text-start">
              <h5 class="mb-1 fw-semibold">${contact.type}</h5>
              <p class="mb-0 small">${contact.value}</p>
            </div>
          </div>
        </a>
      </div>
    `;
    contactContainer.innerHTML += contactHtml;
  });
}

function initLazyLoading() {
  const lazyImages = document.querySelectorAll("img.lazyload");
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const imageUrl = image.dataset.src;
        if (imageUrl) {
          image.src = imageUrl;
          image.onload = () => {
            image.classList.remove("lazyload");
          };
        }
        observer.unobserve(image);
      }
    });
  }, observerOptions);
  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
}