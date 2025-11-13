import { Linkedin, Mail, Trophy, Users, Briefcase, Lightbulb, Bot, Code, Palette, Server, Terminal, Wrench, Database, GitBranch, Type, CodeXml, Component, Wind, ServerCog, BookOpen, Phone } from 'lucide-react';
import { Icons } from '@/components/icons';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ginim-narang-631924283', icon: Linkedin },
  { name: 'Email', href: 'mailto:ginim654@gmail.com', icon: Mail },
  { name: 'Phone', href: 'tel:9625822349', icon: Phone },
];

export const heroData = {
  name: 'Ginim Narang',
  roles: ['Software Developer', 'Tech Enthusiast', 'Problem Solver'],
};

export const aboutData = {
  name: "Ginim Narang",
  location: "New Delhi, India",
  education: "BCA Student @ BVIMR (2024–2027)",
  cgpa: "9.25",
  description: "A passionate and driven BCA student with a love for coding and building innovative projects. My journey in technology is fueled by a curiosity for system design, a competitive spirit honed in hackathons, and a dedication to crafting elegant solutions to complex problems.",
  badges: ["Hackathon Winner", "Active Coding Club Member", "Internship Completed", "Mentor for Junior Projects"],
};

export const skillsData = [
  { name: 'JavaScript', icon: Icons.JavaScript },
  { name: 'TailwindCSS', icon: Icons.TailwindCSS },
  { name: 'React', level: 'Beginner', icon: Icons.React },
  { name: 'Next.js', level: 'Beginner', icon: Icons.Nextjs },
  { name: 'Node.js', level: 'Beginner', icon: Icons.Nodejs },
  { name: 'Git', icon: GitBranch },
  { name: 'Express.js', icon: Icons.Express },
  { name: 'TypeScript', icon: Type },
  { name: 'PostgreSQL', icon: Database },
  { name: 'HTML', icon: CodeXml },
];


export const projectsData = [
  {
    title: "Quantaloop Website",
    description: "A modern and responsive website for the Quantaloop company.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://quanta-loop.vercel.app/",
    imageId: "quantaloop",
  },
  {
    title: "Attendance Monitoring",
    description: "A system to streamline and automate the process of tracking student attendance.",
    tech: ["Java", "DBMS"],
    link: "#",
    imageId: "attendance-monitoring",
  },
  {
    title: "Sales Management App",
    description: "An application designed to manage sales data, track performance, and generate reports.",
    tech: ["Python", "Financial Tools"],
    link: "https://successarrow.netlify.app",
    imageId: "sales-management",
  },
  {
    title: "Dynamic Mini Projects",
    description: "A collection of smaller, dynamic projects showcasing various programming concepts and skills.",
    tech: ["C++", "JavaScript", "HTML/CSS"],
    link: "#",
    imageId: "mini-projects",
  },
  {
    title: "Trading & Financial Tools",
    description: "Tools for analyzing market data and assisting in financial trading decisions.",
    tech: ["Python", "API"],
    link: "#",
    imageId: "trading-tools",
  },
  {
    title: "Portfolio Website",
    description: "This very website, built with Next.js, Tailwind CSS, and lots of love.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
    imageId: "portfolio",
  },
  {
    title: "Real-time Texting App",
    description: "A real-time messaging application for instant communication.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://chattingtexting.netlify.app/",
    imageId: "texting-app",
  },
];

export const achievementsData = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    date: "2025",
    description: "Achieved first place in a hackathon, developing an innovative solution for urban mobility.",
  },
  {
    icon: Users,
    title: "Organized College Tech Fest",
    date: "2025",
    description: "Led the organizing committee for our annual technical festival, coordinating multiple coding competitions and workshops.",
  },
  {
    icon: Lightbulb,
    title: "Junior Project Mentorship",
    date: "Ongoing",
    description: "Mentoring junior students on their programming projects, focusing on best practices in C++ and system design.",
  },
  {
    icon: Bot,
    title: "Regional Coding Competition Finalist",
    date: "2023",
    description: "Placed as a finalist in a competitive programming contest, solving complex algorithmic challenges under pressure.",
  },
];

export const resumeData = {
  name: 'GINIM NARANG',
  contact: {
    email: 'ginim654@gmail.com',
    phone: '+91 9625822349',
    linkedin: 'https://linkedin.com/in/ginim-narang-631924283',
  },
  education: {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'BVIMR',
    duration: '2024–2027',
    cgpa: '9.25',
    details: [
      'Active Coding Club Member',
      'Participated & Won Hackathons',
      'Completed Internship Program',
    ],
  },
  projects: [
    {
      title: 'Attendance Monitoring System',
      points: [
        'Messaging, calling & video-enabled attendance system.',
        'Role-based system for teachers, students, admins.',
        'Secure login, dashboards & real-time DB sync.',
      ],
    },
    {
      title: 'Sales Management App',
      points: [
        'Created a complete sales app with separate Retailer, Distributor, and Admin views.',
        'Enabled order creation, product listing, invoice generation & sales tracking.',
        'Added role-based authentication and clean dashboard UI for each user type.',
      ],
    },
    {
      title: 'Dynamic Mini Projects',
      points: [
        'Responsive UI/UX focused websites.',
        'Built with clean, accessible frontend architecture.',
      ],
    },
    {
      title: 'Trading & Financial Tools (Mini-Projects)',
      points: [
        'Designed micro-tools for portfolio analysis & charts.',
        'Built logic-based modules used for financial tracking.',
      ],
    },
  ],
  achievements: [
    'Participated in national & regional hackathons.',
    'Organized technical fests, coding competitions, hackathons.',
    'Mentored juniors in coding logic & project building.',
    'Built strong problem-solving & collaboration skills.',
  ],
  skills: {
    languages: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    frontend: ['HTML', 'CSS', 'JavaScript'],
    backend: ['API Integration', 'DBMS'],
    tools: ['VS Code', 'GitHub'],
    other: ['System Design', 'OOP', 'Financial Analysis'],
  },
};
