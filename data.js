const DATA = {
  profile: {
    name: "Zunair Bin Zubair",
    brandHtml:
      '<span class="logo-bracket">&lt;</span>zunair<span class="logo-bracket"> /&gt;</span>',
    avatar: "assets/img/zunair-bin-zubair.webp",
    status: "Open to work",
  },

  nav: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#leadership", label: "Leadership" },
    { href: "#contact", label: "Contact" },
  ],

  hero: {
    titleMain: "I build software",
    titleAccent: "that scales.",
    subtitleHtml:
      'Product Engineer crafting full-stack platforms across mobile, web, and cloud. Currently scaling <a href="https://tameer.ai" target="_blank" rel="noopener" class="inline-link">Tameer.ai</a> to 1K+ users.',
    ctas: [
      { label: "See my work", href: "#work", style: "primary", arrow: "down" },
      { label: "Get in touch", href: "#contact", style: "ghost" },
    ],
    stats: [
      { count: 1000, plus: true, label: "Active users" },
      { count: 1300, plus: true, label: "Products listed" },
      { count: 4, plus: false, label: "Platforms built" },
    ],
  },

  about: {
    label: "About",
    titleHtml:
      'Not just a developer.<br><span class="text-accent">A product engineer.</span>',
    paragraphs: [
      "I don't just write code — I own products end-to-end. I built from concept to a live applications across 4 platforms: React Native mobile app, Next.js web platform, Admin CRM, and Node.js cloud infrastructure.",
      "I architect systems, manage teams, make technical decisions, and ship features that drive real business metrics. I think in user impact, not just code quality.",
    ],
    details: [
      { label: "Location", value: "Lahore, Pakistan" },
      { label: "Education", value: "BS Computer Science" },
      { label: "Focus", value: "Full-Stack & Mobile" },
      { label: "Availability", value: "Open to work", highlight: true },
    ],
    code: {
      filename: "zunair.config.ts",
      role: "Product Engineer",
      stack: ["React Native", "Next.js", "Node.js", "MongoDB", "Firebase"],
      project: {
        name: "Tameer.ai",
        users: 1000,
        platforms: 4,
        status: "scaling",
      },
      superpower: "Shipping fast",
    },
  },

  work: {
    label: "Featured work",
    titleHtml:
      'Tameer.ai<span class="text-accent"> — Construction Marketplace</span>',
    descHtml:
      "A full-stack marketplace platform, connecting builders with opportunities across Pakistan's construction industry.",
    links: [
      { icon: "↗", label: "Live site", href: "https://tameer.ai" },
      {
        icon: "▶",
        label: "Watch demo",
        href: "https://youtu.be/4qYKpLCsPv0?si=mjdCuLoFYZmyaC5J",
      },
    ],
    metrics: [
      {
        number: "1000",
        plus: true,
        label: "Active users",
        sub: "Grown from 0 in 8 months",
      },
      {
        number: "500",
        plus: true,
        label: "Marketplace profiles",
        sub: "Vendor ecosystem",
      },
      {
        number: "500",
        plus: true,
        label: "Active builders",
        sub: "Construction professionals",
      },
      {
        number: "1,200",
        plus: true,
        label: "Products listed",
        sub: "Growing marketplace",
      },
    ],
    platforms: [
      {
        icon: "📱",
        title: "Mobile app",
        desc: "Built React Native app from scratch as Lead Mobile Developer. Managed team. Cursor pagination, lazy loading, discovery features, user interaction tracking.",
        tech: ["React Native", "Redux", "Firebase"],
      },
      {
        icon: "🌐",
        title: "Web platform",
        desc: "Full-stack web application with Next.js frontend and Node.js/Express backend. Real-time data, auth, marketplace browsing, builder profiles.",
        tech: ["Next.js", "Node.js", "Express"],
      },
      {
        icon: "📊",
        title: "Admin CRM",
        desc: "Comprehensive dashboard for operations: user management, analytics, automated lead assignment, subscription management, metrics tracking.",
        tech: ["React", "Ant Design", "REST APIs"],
      },
      {
        icon: "☁️",
        title: "Cloud infrastructure",
        desc: "Node.js cloud functions, Firebase services, Bunny.net CDN for media delivery, database optimization, and infrastructure cost management.",
        tech: ["Firebase", "Bunny.net", "Node.js"],
      },
    ],
  },

  skills: {
    label: "Technical skills",
    titleHtml: 'Tools I use to <span class="text-accent">ship fast.</span>',
    marquee: [
      { cls: "devicon-react-original colored", title: "React" },
      { cls: "devicon-nextjs-plain", title: "Next.js" },
      { cls: "devicon-nodejs-plain colored", title: "Node.js" },
      { cls: "devicon-express-original", title: "Express" },
      { cls: "devicon-typescript-plain colored", title: "TypeScript" },
      { cls: "devicon-javascript-plain colored", title: "JavaScript" },
      { cls: "devicon-redux-original colored", title: "Redux" },
      { cls: "devicon-mongodb-plain colored", title: "MongoDB" },
      { cls: "devicon-mysql-plain colored", title: "MySQL" },
      { cls: "devicon-firebase-plain colored", title: "Firebase" },
      { cls: "devicon-tailwindcss-plain colored", title: "Tailwind CSS" },
      { cls: "devicon-python-plain colored", title: "Python" },
      { cls: "devicon-flask-original", title: "Flask" },
      { cls: "devicon-git-plain colored", title: "Git" },
      { cls: "devicon-graphql-plain colored", title: "GraphQL" },
      { cls: "devicon-html5-plain colored", title: "HTML5" },
      { cls: "devicon-css3-plain colored", title: "CSS3" },
    ],
    groups: [
      {
        title: "Languages",
        tags: [
          { name: "JavaScript (ES6+)" },
          { name: "TypeScript" },
          { name: "Python" },
          { name: "Java" },
        ],
      },
      {
        title: "Frontend",
        tags: [
          { name: "React.js", primary: true },
          { name: "Next.js", primary: true },
          { name: "React Native", primary: true },
          { name: "Redux Toolkit" },
          { name: "Tailwind CSS" },
          { name: "Material UI" },
          { name: "Ant Design" },
        ],
      },
      {
        title: "Backend & APIs",
        tags: [
          { name: "Node.js", primary: true },
          { name: "Express.js", primary: true },
          { name: "REST APIs" },
          { name: "GraphQL" },
          { name: "Flask" },
          { name: "Firebase" },
        ],
      },
      {
        title: "Databases",
        tags: [
          { name: "MongoDB" },
          { name: "MySQL" },
          { name: "PostgreSQL" },
          { name: "Firestore" },
        ],
      },
      {
        title: "AI / ML",
        tags: [
          { name: "TensorFlow" },
          { name: "OpenAI" },
          { name: "RAG" },
          { name: "Hugging Face" },
          { name: "scikit-learn" },
        ],
      },
      {
        title: "DevOps & tools",
        tags: [
          { name: "Git" },
          { name: "Vercel" },
          { name: "Heroku" },
          { name: "Bunny.net" },
          { name: "Cloudinary" },
          { name: "Postman" },
        ],
      },
    ],
  },

  projects: {
    label: "Selected projects",
    titleHtml: 'Things I\'ve <span class="text-accent">shipped.</span>',
    items: [
      {
        img: "assets/img/planteria.webp",
        badge: "🌿 Featured",
        type: "AI + Mobile",
        year: "2025",
        title: "Planteria",
        desc: "AI-powered plant disease detection app with a marketplace ecosystem. CNN-based Flask model at 95% accuracy, plus commission management, order tracking, and an AI chatbot.",
        tech: ["React Native", "Flask", "Node.js", "TensorFlow", "MongoDB"],
        actions: [
          { kind: "video", label: "Demo", url: "https://youtu.be/uYJc3JNPHp4" },
          {
            kind: "video",
            label: "Concept",
            url: "https://youtu.be/yMqYKmechmA",
          },
        ],
      },
      {
        img: "assets/img/hireflow.webp",
        badge: "🚀 Hackathon",
        type: "AI + HR Tech",
        year: "2025",
        title: "HireFlow",
        desc: "AI resume filtering and scoring using RAG. Built in a 24-hour Google Developer hackathon with a 3-person team — parses, ranks, and scores candidates automatically.",
        tech: ["React", "Flask", "RAG", "Gemini AI", "MongoDB"],
        actions: [
          { kind: "video", label: "Demo", url: "https://youtu.be/RRopdNR0Mxg" },
        ],
      },
      {
        img: "assets/img/career-navigator.webp",
        badge: "Coming soon",
        type: "AI + Web",
        year: "2025",
        title: "Career Navigator",
        desc: "Navigate your career with AI-powered tools — personalized roadmaps, skill-gap analysis, and curated tech courses to find your ideal role.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "TypeScript"],
        actions: [
          { kind: "link", label: "Live", url: "http://careernavigator.site/" },
        ],
      },
      {
        img: "assets/img/mededport.webp",
        type: "Streaming / Health",
        year: "2024",
        title: "MedEdPort",
        desc: "A secure streaming education portal for verified medical professionals to share video content, with engagement features like likes, unique views, and comments.",
        tech: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT"],
        actions: [
          { kind: "video", label: "Demo", url: "https://youtu.be/jPUgrTiLmxM" },
        ],
      },
      {
        img: "assets/img/cms-darntl.webp",
        badge: "🎉 First freelance",
        type: "Business Tool",
        year: "2023",
        title: "CMS Darntl",
        desc: "A contact management system for a small business — store client details and generate PDF & spreadsheet reports for actionable insight.",
        tech: ["Spring Boot", "MySQL", "React", "Java"],
      },
      {
        img: "assets/img/news-app.webp",
        type: "Web",
        year: "2023",
        title: "News App",
        desc: "Aggregates real-time news from reputable global sources across countries and categories, so users get authentic news of their choice from legit sources.",
        tech: ["React", "NewsAPI", "Bootstrap"],
        actions: [
          { kind: "video", label: "Demo", url: "https://youtu.be/h_0t8CrBBTE" },
        ],
      },
      {
        img: "assets/img/netflix-clone.webp",
        type: "Web",
        year: "2023",
        title: "Netflix Clone",
        desc: "A Netflix-inspired UI with browse-by-category, real-time trailer previews, and movie detail modals, built on The Movie DB API.",
        tech: ["React", "HTML5", "CSS3"],
        actions: [
          { kind: "video", label: "Demo", url: "https://youtu.be/yhmWcm10QKM" },
        ],
      },
      {
        img: "assets/img/convo-panda.webp",
        type: "Web",
        year: "2022",
        title: "Convo Panda",
        desc: "An experimental social messaging app — private chat, friend requests, and real-time communication.",
        tech: ["React", "Node.js", "MongoDB"],
      },
    ],
  },

  experience: {
    label: "Experience",
    titleHtml: 'Where I\'ve <span class="text-accent">built things.</span>',
    items: [
      {
        active: true,
        title: "Core Developer & Lead Mobile Developer",
        company: "Wonder Craftz — Tameer.ai",
        date: "Oct 2025 — Present",
        bullets: [
          "Built React Native mobile app from scratch, leading a 2-3 person team",
          "Scaled marketplace from 0 to 1000+ active users across 4 platforms",
          "Full-stack ownership: mobile, web (Next.js), CRM, Node.js cloud functions",
          "Partnered with sales, marketing, and leadership on product strategy",
        ],
      },
      {
        title: "Software Developer",
        company: "Imam Organization · Remote",
        date: "Nov 2024 — Jan 2025",
        bullets: [
          "Built a custom School Management System for an Islamic education org",
          "Multi-role auth (teachers, students, families, admins) with attendance & assignment tracking",
          "Integrated Cloudinary for scalable media; automated grading and reporting workflows",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "MedEdPort · Remote (USA)",
        date: "Sep 2023 — Dec 2024",
        bullets: [
          "Built core UIs with Material UI: auth, verification, admin dashboard, upload & comments",
          "Secure registration with email verification + Google login, plus an MD screening system",
          "Express REST APIs for video upload/streaming; CI/CD on Heroku across the SDLC",
        ],
      },
      {
        title: "Software Engineer (Freelance)",
        company: "Independent",
        date: "Oct 2022 — Jul 2023",
        bullets: [
          "Built full-stack web applications using the MERN stack for multiple clients",
          "Engineered JWT-based auth systems and real-time content platforms",
          "Integrated CI/CD pipelines, reducing deployment time by 50%",
        ],
      },
      {
        title: "BS Computer Science",
        company: "University of Gujrat",
        date: "2021 — May 2025",
        bullets: [
          "Web Development, Data Structures, OOP, AI/ML, Service-Oriented Architecture",
        ],
      },
    ],
  },

  leadership: {
    label: "Leadership",
    titleHtml: 'Beyond the <span class="text-accent">code.</span>',
    descHtml: "Community impact, event leadership, and team building.",
    items: [
      {
        icon: "🤝",
        title: "General Secretary",
        org: "Hayatian Computing Society · University of Gujrat",
        date: "2024 — 2025",
        bullets: [
          "Led 10+ academic, tech, and social events, engaging up to 400+ students",
          "Organized inter-departmental coding contests and seminars",
          "Managed logistics for hackathons, FYP expos, and programming tournaments",
        ],
      },
      {
        icon: "⚡",
        title: "Campus Ambassador — DAIRA'25",
        org: "FAST NUCES CFC, Faisalabad",
        date: "April 2025",
        bullets: [
          "Lead ambassador for UOG at a national tech olympiad",
          "Managed a 50+ member delegation's logistics, accommodation, and scheduling",
          "Oversaw budgeting and seamless event registration and travel",
        ],
      },
    ],
  },

  contact: {
    label: "Get in touch",
    titleHtml:
      'Let\'s build something <span class="text-accent">together.</span>',
    descHtml:
      "I'm actively looking for my next challenge — remote or onsite. If you're building something interesting, I'd love to hear about it.",
    cards: [
      {
        icon: "✉",
        type: "Email",
        value: "zunairkhawajaa@gmail.com",
        href: "mailto:zunairkhawajaa@gmail.com",
      },
      {
        icon: "in",
        type: "LinkedIn",
        value: "Connect with me",
        href: "https://www.linkedin.com/in/zunair-bin-zubair-9059421a3/",
        external: true,
      },
      {
        icon: "</>",
        type: "GitHub",
        value: "github.com/khzunair",
        href: "https://github.com/khzunair",
        external: true,
      },
      {
        icon: "☎",
        type: "Phone",
        value: "+92 332 4543705",
        href: "tel:+923324543705",
      },
    ],
    cta: { label: "Let's connect", href: "mailto:zunairkhawajaa@gmail.com" },
  },

  footer: {
    copy: "Built with late nights and strong chai. © 2026",
    links: [
      { label: "GitHub", href: "https://github.com/khzunair", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/zunair-bin-zubair-9059421a3/",
        external: true,
      },
      { label: "Email", href: "mailto:zunairkhawajaa@gmail.com" },
    ],
  },
};
