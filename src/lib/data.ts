import { Github, Linkedin, Mail, Code, Server, Cog, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const aboutData = {
  name: "Shivam Ghaware",
  title: "Aspiring Full-Stack Developer",
  bio: `Hi, I’m Shivam — an IT graduate passionate about building efficient, scalable, and user-friendly applications. I enjoy working across the stack, from designing clean APIs with Spring Boot to creating seamless user interfaces with React. With hands-on experience in cloud computing and modern web technologies, I’m eager to contribute, learn, and grow as a developer. I’m currently looking for opportunities to work with a software company where I can apply my skills, collaborate with talented teams, and keep pushing my boundaries as a developer.`,
  avatar: PlaceHolderImages.find(img => img.id === 'profile-picture')
};


export const projectsData = [
  {
    id: 1,
    title: 'Product Catalog System',
    description: 'A RESTful backend application for managing product catalogs with CRUD functionality and clean architecture principles for scalability and maintainability.',
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ['Java', 'Spring Boot', 'Hibernate', 'H2 Database', 'Maven', 'React'],
    githubUrl: 'https://github.com/shivamghaware',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Box Office Collection Prediction',
    description: 'A machine learning model to predict movie revenue using Scikit-learn and NLTK, with data preprocessing, feature engineering, and NLP-based feature extraction.',
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ['Python', 'Scikit-learn', 'NLTK', 'Machine Learning'],
    githubUrl: 'https://github.com/shivamghaware',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Recipe Blog Site',
    description: 'A secure recipe management platform with authentication, authorization, and role-based access control using Flask and MongoDB.',
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ['Python', 'Flask', 'MongoDB'],
    githubUrl: 'https://github.com/shivamghaware',
    liveUrl: '#',
  },
];

export const skillsData = [
  {
    category: 'Programming Languages & Databases',
    icon: Code,
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Frameworks & Tools',
    icon: Server,
    skills: ['React', 'Spring Boot', 'Flask', 'Hibernate', 'Bootstrap', 'Git', 'GitHub', 'Docker', 'Jenkins', 'Maven','Postman']
  },
  {
    category: 'Core Competencies',
    icon: Cog,
    skills: ['OOP', 'Data Structures & Algorithms', 'REST API', 'Design Patterns','Agile', 'CI/CD', 'Cloud Computing (AWS)']
  },
  {
    category: 'Soft Skills',
    icon: Users,
    skills: ['Problem Solving', 'Quick Learning', 'Adaptability', 'Communication', 'Team Collaboration']
  }
];

export const contactData = {
  email: "shivamghaware3@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/shivamghaware", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/shivamghaware", icon: Linkedin },
  ]
};
