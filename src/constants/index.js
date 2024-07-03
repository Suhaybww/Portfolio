import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    freelance,
    huddled,
    RMIT,
    sag,
    pt,
    soon,
    t1,
    t2,
    t3,
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "DevOps & Cloud Solutions",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor of Computer Science",
      company_name: "RMIT University",
      icon: RMIT,
      iconBg: "#383E56",
      date: "2020 - Present",
      points: [
        "Developing comprehensive skills as a software engineer through rigorous coursework and hands-on projects.",
        "Mastering a wide range of tools and technologies including TypeScript, JavaScript, React, Express, and more.",
        "Engaging in self-directed learning to stay ahead of industry trends and emerging technologies.",
        "Participating in peer mentoring programs to enhance collaborative skills and deepen understanding of complex concepts.",
      ],
    },
    {
      title: "Full Stack Engineer Intern",
      company_name: "Huddled",
      icon: huddled,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Feb 2024",
      points: [
        "Spearheading the development of user stories and troubleshooting issues using GitHub to maintain high code standards for startup projects.",
        "Participating in weekly scrum meetings to ensure agile practices and project alignment with stakeholder objectives.",
        "Actively engaging in the production and design of application features, contributing to both strategic direction and detailed implementation.",
        "Working with the web-app and mobile team, utilizing Svelte and Firebase to create responsive and performant applications.",
      ],
    },
    {
      title: "Freelance Software Engineer",
      company_name: "Self-employed",
      icon: freelance,
      iconBg: "#383E56",
      date: "Mar 2024 - Present",
      points: [
        "Developing full-stack web applications for diverse clients, handling everything from initial consultations to final delivery.",
        "Conducting in-depth client meetings to understand product requirements and translating ideas into technical specifications.",
        "Designing and implementing responsive, user-friendly interfaces while ensuring robust backend functionality.",
        "Performing thorough code reviews and rigorous testing to deliver high-quality, scalable solutions that meet client expectations.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The SAG website has revolutionized how we manage grave subscriptions. It's user-friendly, secure, and has significantly improved our administrative efficiency.",
      name: "Gibril Farah",
      designation: "Board Member",
      company: "Somali Graves Association",
      image: t1, // Replace with actual image
    },
    {
      testimonial:
        "This website perfectly captures my professional image and has been instrumental in attracting new clients. It's both functional and aesthetically pleasing.",
      name: "Abdullahi Abdirahman",
      designation: "Professional Physiotherapist",
      company: "",
      image: t2, // Replace with actual image
    },
    {
      testimonial:
        "The online payment system has made it so much easier for our community members to manage their subscriptions. It's a game-changer for our organization's financial management.",
      name: "Fardowsa Abdirahman",
      designation: "Board Member",
      company: "Somali Graves Association",
      image: t3, // Replace with actual image
    },
  ];
  
  const projects = [
    {
      name: "Somali Graves Association",
      description:
        "A specialized website managing yearly subscription fees for graves. It features user authentication with Kinde Auth, allowing users to create accounts and sign in securely. The platform integrates Stripe for processing subscription payments, ensuring a safe and efficient financial transaction system.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "prisma", color: "green-text-gradient" },
        { name: "trpc", color: "pink-text-gradient" },
        { name: "next.js", color: "orange-text-gradient" },
        { name: "tailwind", color: "blue-text-gradient" },
        { name: "neon", color: "green-text-gradient" },
        { name: "stripe", color: "green-text-gradient" },
        { name: "kinde", color: "pink-text-gradient" },
      ],
      image: sag,
      source_code_link: "https://github.com/farah-gibril/SAG_APP/tree/main",
    },
    {
      name: "Physiotherapy Personal Website",
      description:
        "A professional website for a physiotherapist, showcasing their experience and expertise. The site highlights the therapist's work, provides information about services, and includes a contact form for potential clients.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "next.js", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: pt,
      source_code_link: "https://github.com/Suhaybww/PhysiotherapyPortfolio",
    },
    {
      name: "Clothing E-commerce Store",
      description:
        "A comprehensive e-commerce platform for a client selling dresses. Users can browse products, create accounts using Kinde Auth, make purchases via Stripe, and receive invoices. The admin interface allows for product and user management, providing a complete solution for online retail with secure authentication and payment processing.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "next.js", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
        { name: "prisma", color: "orange-text-gradient" },
        { name: "trpc", color: "blue-text-gradient" },
        { name: "neon", color: "green-text-gradient" },
        { name: "stripe", color: "green-text-gradient" },
        { name: "kinde", color: "pink-text-gradient" },
      ],
      image: soon,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };