document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS (Animate On Scroll) library with specified settings.
    AOS.init({ duration: 1e3, once: !0, offset: 100 });

    // Smooth scrolling for navigation links and sets active state.
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", function (e) {
            const t = document.querySelector(this.getAttribute("href"));
            if (t) {
                e.preventDefault();
                t.scrollIntoView({ behavior: "smooth", block: "start" });
                document
                    .querySelectorAll(".nav-link")
                    .forEach((a) => a.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    // Dynamic Navbar styling on scroll.
    window.addEventListener("scroll", function () {
        const a = document.querySelector(".navbar");
        if (a) {
            if (window.scrollY > 50) {
                a.style.background = "rgba(255,255,255,0.96)";
                a.style.backdropFilter = "blur(20px)";
                a.classList.add("shadow-sm");
            } else {
                a.style.background = "rgba(15,23,42,0.92)";
                a.classList.remove("shadow-sm");
            }
        }
    });

    // Automatically set the active navigation link based on scroll position.
    const s = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", function () {
        let a = window.scrollY + 150;
        s.forEach((s) => {
            if (a >= s.offsetTop && a < s.offsetTop + s.offsetHeight) {
                let e = s.getAttribute("id");
                document
                    .querySelectorAll(".nav-link")
                    .forEach((a) => a.classList.remove("active"));
                document
                    .querySelector(`.nav-link[href="#${e}"]`)
                    ?.classList.add("active");
            }
        });
    });

    // Parallax effect for the hero section, active on all screen sizes.
    window.addEventListener("scroll", function () {
        const a = document.querySelector(".hero");
        if (a) {
            const e = window.pageYOffset,
                s = e * -0.25;
            a.style.transform = `translateY(${s}px)`;
        }
    });

    // Typewriter effect for the hero title.
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
    setTimeout(function () {
        const a = document.querySelector(".hero-title");
        if (a) {
            const t = "Zunair Bin Zubair";
            typeEffect(a, t, 70);
        }
    }, 800);

    // Dynamic data for Skills section.
    const skills = [
        {
            name: "React",
            iconClass: "devicon-react-original colored",
            type: "devicon",
        },
        {
            name: "Next.js",
            iconClass: "devicon-nextjs-original-wordmark",
            type: "devicon",
        },
        {
            name: "Node.js",
            iconClass: "devicon-nodejs-plain colored",
            type: "devicon",
        },
        {
            name: "Express",
            iconClass: "devicon-express-original",
            type: "devicon",
        },
        {
            name: "Redux",
            iconClass: "devicon-redux-original colored",
            type: "devicon",
        },
        {
            name: "Material UI",
            iconSrc: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
            type: "img",
        },
        {
            name: "Tailwind CSS",
            iconClass: "devicon-tailwindcss-plain colored",
            type: "devicon",
        },
        {
            name: "React Native",
            iconClass: "devicon-react-original colored",
            type: "devicon",
        },
        {
            name: "TypeScript",
            iconClass: "devicon-typescript-plain colored",
            type: "devicon",
        },
        { name: "Flask", iconClass: "devicon-flask-original", type: "devicon" },
        {
            name: "MongoDB",
            iconClass: "devicon-mongodb-plain colored",
            type: "devicon",
        },
        {
            name: "SQL",
            iconClass: "devicon-mysql-plain colored",
            type: "devicon",
        },
        {
            name: "JavaScript",
            iconClass: "devicon-javascript-plain colored",
            type: "devicon",
        },
        {
            name: "HTML5",
            iconClass: "devicon-html5-plain colored",
            type: "devicon",
        },
        {
            name: "CSS3",
            iconClass: "devicon-css3-plain colored",
            type: "devicon",
        },
        { name: "Git", iconClass: "devicon-git-plain colored", type: "devicon" },
        {
            name: "REST APIs",
            iconClass: "devicon-fastapi-plain colored",
            type: "devicon",
        },
        {
            name: "TensorFlow",
            iconClass: "devicon-tensorflow-original colored",
            type: "devicon",
        },
        {
            name: "OPEN AI",
            iconSrc:
                "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
            type: "img",
        },
        {
            name: "Hugging Face",
            iconSrc:
                "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
            type: "img",
        },
        {
            name: "NumPy",
            iconSrc:
                "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
            type: "img",
        },
        {
            name: "scikit-learn",
            iconSrc:
                "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
            type: "img",
        },
        {
            name: "MobileNetV2",
            iconSrc:
                "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
            type: "img",
        },
        {
            name: "GraphQL",
            iconClass: "devicon-graphql-plain colored",
            type: "devicon",
        },
    ];
    const skillsContainer = document.getElementById("skills-container");
    skills.forEach((skill, index) => {
        let iconHtml = "";
        if ("devicon" === skill.type) {
            iconHtml = `<i class="${skill.iconClass}" style="font-size: 3rem;"></i>`;
        } else if ("img" === skill.type) {
            iconHtml = `<img src="${skill.iconSrc}" alt="${skill.name}" style="height: 3rem; object-fit: contain;" />`;
        }
        const delay = 40 * index;
        const skillHtml = `<div class="col-6 col-sm-4 col-md-2 mb-3 skill-icon" data-aos="flip-left" data-aos-delay="${delay}">${iconHtml}<p class="mt-2 fw-semibold text-secondary">${skill.name}</p></div>`;
        skillsContainer.innerHTML += skillHtml;
    });

    // Dynamic data for Experience section.
    const experiences = [
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
        // {
        //     company: "NextGen Cure",
        //     title: "Software Developer Intern",
        //     duration: "Nov 2023 – Apr 2024 | UOG Business Incubation Center",
        //     icon: "fa-solid fa-flask",
        //     responsibilities: [
        //         "Developed React Native app screens; managed state across application.",
        //         "Created RESTful APIs in Node.js and enabled real-time frontend/backend integration.",
        //         "Collaborated on Git-based version control and contributed to QA and deployment cycles.",
        //     ],
        //     aosDelay: 80
        // },
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
    ];

    const experienceContainer = document.getElementById("experience-container");
    experiences.forEach(exp => {
        const responsibilitiesList = exp.responsibilities.map(resp => `<li>${resp}</li>`).join('');
        const experienceCardHtml = `
            <div class="card card-modern mb-5 p-4 text-start" data-aos="fade-up" data-aos-delay="${exp.aosDelay}">
                <div class="d-flex align-items-center mb-2">
                    <i class="${exp.icon} fa-lg gradient-text me-2"></i>
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

    // Lazy loading for project images.
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
});