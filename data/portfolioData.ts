import { SkillCategory, Project, ExperienceItem, Certification } from '../types.ts';

export const skillData: SkillCategory[] = [
  {
    title: 'Programming & Frameworks',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'Flask', level: 75 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 80 },
      { name: 'C/C++', level: 75 },
      { name: 'Spring Boot', level: 65 },
    ],
  },
  {
    title: 'Databases & APIs',
    skills: [
      { name: 'SQL (MySQL, PostgreSQL)', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQLAlchemy', level: 70 },
      { name: 'RESTful API Development', level: 90 },
      { name: 'Authentication (JWT, OAuth)', level: 80 },
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS Basics', level: 65 },
      { name: 'Heroku', level: 70 },
      { name: 'Netlify', level: 75 },
      { name: 'CI/CD', level: 65 },
      { name: 'Linux', level: 75 },
      { name: 'Figma', level: 70 },
      { name: 'UI/UX Design', level: 65 },
    ],
  },
  {
    title: 'Consulting & Methodologies',
    skills: [
        { name: 'Agile Methodologies', level: 85 },
        { name: 'Project Planning', level: 80 },
        { name: 'Risk Assessment', level: 75 },
        { name: 'Requirement Gathering', level: 90 },
        { name: 'Stakeholder Engagement', level: 80 },
        { name: 'Technical Documentation', level: 85 },
    ],
  },
];

export const projectData: Project[] = [
    {
        title: 'Scientific Calculator',
        description: 'A web-based scientific calculator with advanced mathematical functions, built with HTML, CSS, and JavaScript.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'https://source.unsplash.com/400x300/?sleek-scientific-calculator-web-app-UI,dark-mode,glowing-buttons,browser-mockup',
        githubUrl: '#',
    },
    {
        title: 'Tic-Tac-Toe Game',
        description: 'A classic Tic-Tac-Toe game playable in the browser, featuring a clean UI and win/draw detection logic.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'https://source.unsplash.com/400x300/?minimalist-tic-tac-toe-game-UI,dark-theme,glowing-neon-grid,tablet-mockup',
        githubUrl: '#',
    },
    {
        title: 'Personal Blog',
        description: 'A personal blog site built with Astro, designed for performance and showcasing articles and thoughts.',
        tags: ['Astro', 'Markdown', 'CSS'],
        imageUrl: 'https://source.unsplash.com/400x300/?clean-personal-blog-homepage-UI,elegant-typography,article-list,macbook-mockup',
        githubUrl: '#',
    },
    {
        title: 'SecureSign System',
        description: 'A secure user authentication and sign-in system, demonstrating best practices in web security.',
        tags: ['HTML', 'JavaScript', 'Security'],
        imageUrl: 'https://source.unsplash.com/400x300/?secure-login-page-UI,web-app-authentication,two-factor-authentication,cybersecurity-theme-dark-blue',
        githubUrl: '#',
    },
    {
        title: 'File Uploader',
        description: 'A simple file upload interface with client-side validation for file type/size and preview functionality.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'https://source.unsplash.com/400x300/?modern-file-uploader-UI,drag-and-drop-interface,upload-progress-bar-list,dark-mode-component',
        githubUrl: '#',
    },
    {
        title: 'Full-Stack Portal Website',
        description: 'A feature-rich portal with user authentication, a dynamic dashboard, and content management. Built with the MERN stack (MongoDB, Express, React, Node.js) and secured with JWT for authentication.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TypeScript'],
        imageUrl: 'https://source.unsplash.com/400x300/?MERN-stack-admin-dashboard,data-visualization-charts,user-management-table,professional-web-app-UI',
        githubUrl: '#',
    },
    {
        title: 'Student Tracker App',
        description: 'A web application for tracking student information and progress.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'https://source.unsplash.com/400x300/?student-tracker-dashboard-UI,academic-progress-charts,assignment-list,education-web-app',
        githubUrl: '#',
    },
    {
        title: 'Secret Code Generator',
        description: 'A Python script to generate and manage secret codes.',
        tags: ['Python'],
        imageUrl: 'https://source.unsplash.com/400x300/?secret-code-generator-terminal-app,green-text-on-black-screen,encryption-keys,hacker-cli',
        githubUrl: '#',
    },
    {
        title: 'Command Line To-Do List Manager',
        description: 'A comprehensive command-line todo list manager built with Python, featuring task creation, management, and filtering.',
        tags: ['Python'],
        imageUrl: 'https://source.unsplash.com/400x300/?command-line-todo-list-manager,python-cli-app,terminal-screenshot,text-based-UI',
        githubUrl: '#',
    },
    {
        title: 'Shift Booking App',
        description: 'An application for managing and booking shifts, built with TypeScript.',
        tags: ['TypeScript', 'React Native'],
        imageUrl: 'https://source.unsplash.com/400x300/?shift-booking-mobile-app-UI,calendar-schedule,employee-management,iphone-mockup-dark',
        githubUrl: '#',
    },
    {
        title: 'Bank Management System',
        description: 'A system for managing bank accounts and transactions, developed in Python.',
        tags: ['Python', 'SQL'],
        imageUrl: 'https://source.unsplash.com/400x300/?online-banking-dashboard,account-summary,transaction-history-list,financial-app-UI',
        githubUrl: '#',
    },
];

export const experienceData: ExperienceItem[] = [
    {
        role: 'Cybersecurity Analyst Intern (Virtual)',
        company: 'Deloitte Australia',
        period: 'July 2025 – October 2025',
        description: [
            'Participated in threat modeling exercises and risk assessments for enterprise systems.',
            'Analyzed security logs to identify potential vulnerabilities and incidents.',
            'Contributed to the development of security policies and best practice documentation.'
        ],
    },
    {
        role: 'Python Programming Intern',
        company: 'VaultofCodes.in',
        period: 'August 2025 – September 2025',
        description: [
            'Developed modular Python applications, contributing to scalable and maintainable solutions.',
            'Designed and integrated REST APIs to enable seamless data flow between front-end and back-end.',
            'Optimized code performance and applied debugging strategies to improve application efficiency.'
        ],
    },
];

export const certificationData: Certification[] = [
    { name: 'AI & Machine Learning Professional Certificate', issuer: 'IBM SkillsBuild' },
    { name: 'Cybersecurity Virtual Experience Program', issuer: 'Deloitte' },
    { name: 'Machine Learning I', issuer: 'Columbia+ (Non-credit, September 2025)' },
    { name: 'Python Essentials', issuer: 'Cisco Networking Academy & Reliance Foundation' },
    { name: 'SQL (Basic & Intermediate)', issuer: 'HackerRank' },
    { name: 'Web Development & REST APIs', issuer: 'Microsoft' },
    { name: 'Python & MongoDB Fundamentals', issuer: 'SkillUp' },
    { name: 'Cybersecurity Fundamentals', issuer: 'Tech Mahindra Foundation' },
];

export const portfolioContext = `
  Ajith Kumar is a Computer Science student passionate about Artificial Intelligence, Data Structures & Algorithms, and Cybersecurity.

  Skills:
  - Programming & Frameworks: Python, JavaScript, TypeScript, Java, React.js, Node.js, Express.js, Django, Flask, HTML5, CSS3, Bootstrap, C/C++, Spring Boot.
  - Databases & APIs: SQL (MySQL, PostgreSQL), MongoDB, SQLAlchemy, RESTful API Development, Authentication (JWT, OAuth).
  - Cloud, DevOps & Tools: Git & GitHub, Docker, AWS Basics, Heroku, Netlify, CI/CD, Linux, Figma, UI/UX Design.
  - Consulting & Methodologies: Agile Methodologies, Project Planning, Risk Assessment, Requirement Gathering, Stakeholder Engagement, Technical Documentation.

  Experience:
  - Cybersecurity Analyst Intern (Virtual) at Deloitte Australia (July 2025 – October 2025): Participated in threat modeling, analyzed security logs, and contributed to security policy development.
  - Python Programming Intern at VaultofCodes.in (August 2025 – September 2025): Developed modular Python apps, integrated REST APIs, and optimized code performance.

  Projects:
  - Scientific Calculator: A web-based scientific calculator.
  - Tic-Tac-Toe Game: A classic Tic-Tac-Toe game for the browser.
  - Personal Blog: A performance-oriented blog site built with Astro.
  - SecureSign System: A secure user authentication and sign-in system.
  - File Uploader: A simple file upload interface with client-side validation.
  - Full-Stack Portal Website: A MERN stack portal with user authentication and content management.
  - Student Tracker App: A web app for tracking student information.
  - Secret Code Generator: A Python script for generating secret codes.
  - Command Line To-Do List Manager: A command-line todo list manager in Python.
  - Shift Booking App: An application for managing shifts using TypeScript and React Native.
  - Bank Management System: A system for managing bank accounts in Python and SQL.

  Certifications:
  - IBM SkillsBuild: AI & Machine Learning Professional Certificate
  - Deloitte: Cybersecurity Virtual Experience Program
  - Columbia+: Machine Learning I
  - Cisco Networking Academy & Reliance Foundation: Python Essentials
  - HackerRank: SQL (Basic & Intermediate)
  - Microsoft: Web Development & REST APIs
  - SkillUp: Python & MongoDB Fundamentals
  - Tech Mahindra Foundation: Cybersecurity Fundamentals
`;