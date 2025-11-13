import { Linkedin, Mail, Trophy, Users, Briefcase, Lightbulb, Bot, Code, Palette, Server, Terminal, Wrench, Database, GitBranch, Type, CodeXml, Component, Wind, ServerCog, BookOpen } from 'lucide-react';
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
    link: "#",
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
    link: "#",
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
