import { Github, Linkedin, Mail, Code, Server, Cog, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const aboutData = {
  name: "Alex Doe",
  title: "Aspiring Software Developer",
  bio: `A passionate and aspiring software developer with a knack for creating dynamic and user-friendly web applications. Eager to leverage my skills in React, Next.js, and modern web technologies to build innovative solutions. I am a quick learner and a collaborative team player, always excited to take on new challenges and grow as a developer.`,
  avatar: PlaceHolderImages.find(img => img.id === 'profile-picture')
};

export const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, user authentication, and a shopping cart, built with the MERN stack.',
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management application that allows users to create, organize, and track their daily tasks efficiently.',
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects in a sleek, modern, and interactive way.',
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui'],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
];

export const skillsData = [
    {
        category: 'Programming Languages',
        icon: Code,
        skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3/SASS']
    },
    {
        category: 'Frameworks & Libraries',
        icon: Server,
        skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Redux', 'Jest']
    },
    {
        category: 'Tools & Platforms',
        icon: Cog,
        skills: ['Git & GitHub', 'Docker', 'Webpack', 'Vercel', 'Postman', 'Figma']
    },
    {
        category: 'Soft Skills',
        icon: Users,
        skills: ['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'Effective Communication', 'Adaptability']
    }
];

export const contactData = {
    email: "alex.doe@email.com",
    socials: [
        { name: "GitHub", url: "https://github.com", icon: Github },
        { name: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin },
    ]
};
