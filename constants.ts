
import type { Project, Skill, NavLink, SocialLink, ExperienceItem } from './types';
import { LinkedinIcon, MailIcon, InstagramIcon, TelegramIcon } from './components/icons';

export const PERSONAL_INFO = {
    name: "Atul Sah",
    title: "Computer Teacher & Full Stack Developer",
    bio: "A full-stack developer and computer science educator with a passion for building elegant solutions and making complex topics accessible.",
    about: "I’m Atul — a full-stack developer with a passion for teaching. I teach students the basics of computer science in a simple, practical, and entertaining manner along with students' ability to develop entire full-stack web applications to solve real world problems.\n\nI'm a one-man stack, building clean, responsive frontends, effective backend services and well-tested, solid databases. Here is a list of my tech stack: JavaScript, Node.js, React, Express, MongoDB and whatever else the project demands.\n\nThe one thing that makes me unique is that I’m not a coder — I’m also a teacher. That opens the door for me to excel in writing clean, well-documented code and rephrasing complex ideas to be simple.\n\nWhen I’m not writing software or teaching, I’m likely exploring new technologies, debugging something for fun, or thinking of better ways to help people to make learning how to code easier.",
    email: "atulsah8873@gmail.com",
    profilePicture: 'assets/profile.png'
};

export const NAV_LINKS: NavLink[] = [
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
    {
        id: 1,
        type: 'Work',
        title: 'Faculty - Computer Science',
        institution: 'B. N. College',
        date: 'July 2025 - Present',
        description: 'Teaching computer science subjects to undergraduate students. Developing curriculum, preparing and delivering lectures, and mentoring students in their academic and career growth.'
    },
    {
        id: 2,
        type: 'Work',
        title: 'Full Stack Developer ',
        institution: 'Freelance',
        date: 'Feb 2025 - Present',
        description: 'Developing and maintaining web applications for various clients, specializing in creating responsive user interfaces with React and building robust backend services with Node.js.'
    },
    {
        id: 3,
        type: 'Work',
        title: 'Teaching Assistant',
        institution: 'Commerce Insights',
        date: 'Feb 2024 - Nov 2024',
        description: 'Aided in training CA aspirants on computer basics. Prepared study notes and teaching materials tailored for students with non-technical backgrounds. Delivered classroom coaching, resolved queries, and assisted students in learning key subjects including computer fundamentals, MS Office, and internet awareness.'
    },
];

export const EDUCATION: ExperienceItem[] = [
    {
        id: 4,
        type: 'Education',
        title: 'Master of Computer Applications',
        institution: 'Patna University',
        date: '2023 - 2025',
        description: 'Completed advanced studies in computer science, focusing on software development and application architecture.'
    },
    {
        id: 5,
        type: 'Education',
        title: 'Bachelor of Computer Applications',
        institution: 'Patna University',
        date: '2020 - 2023',
        description: 'Completed undergraduate studies with a strong foundation in programming, database management, and computer networks.'
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'Plant Diseases Detector',
        description: 'A machine learning model trained to identify various plant diseases from leaf images, aiding in early detection and treatment.',
        techStack: ['Python', 'Machine Learning', 'TensorFlow'],
    },
    {
        title: 'Fake News Detector',
        description: 'A system that uses Natural Language Processing and TF-IDF vectorization to classify news articles as genuine or fake.',
        techStack: ['Python', 'Flask', 'Machine Learning', 'TF-IDF'],
    },
    {
        title: 'Vistredge Site',
        description: 'The official website for Vistredge, a company that provides services in Finance, Marketing, and Web Development.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    },
    {
        title: 'Expenses Tracker Android App',
        description: 'An Android application built with React Native to help users monitor and manage their daily income and expenses.',
        techStack: ['Android Studio', 'React Native'],
    },
];

export const SKILLS: Skill[] = [
    { name: 'JavaScript (ES6+)' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Node.js' },
    { name: 'Tailwind CSS' },
    { name: 'Framer Motion' },
    { name: 'Git & GitHub' },
    { name: 'SQL & NoSQL Databases' },
    { name: 'PHP' },
    { name: 'Firebase' },
    { name: 'REST APIs' },
    { name: 'GraphQL' },
    { name: 'UI/UX Design' },
    { name: 'Python' },
    { name: 'React Native' },
    { name: 'Android Development' },
    { name: 'Machine Learning' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/realatulsah/', icon: LinkedinIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/realatulsah/', icon: InstagramIcon },
    { name: 'Telegram', url: 'https://t.me/realatulsah', icon: TelegramIcon },
    { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: MailIcon },
];