import { Github, Linkedin, Mail, Code, Server, Cog, Users, FileCode, Database, CodeXml, Leaf, FlaskConical, Wind, GitMerge, Container, ServerCog, Package, Send, Blocks, Binary, Network, GalleryVerticalEnd, Workflow, RefreshCw, Cloud, Lightbulb, BrainCircuit, StretchHorizontal, MessagesSquare } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const aboutData = {
  name: "Shivam Ghaware",
  title: "Aspiring Software Developer",
  bio:`I’m Shivam, a software developer who builds full-stack apps, cloud-powered solutions, and ideas that turn into real products. I love fast UIs, secure backends, clean architecture, and anything that challenges me to grow.
If it involves creating, learning, or breaking things to rebuild them better — I’m in.`,
  //bio: `Hello, I am Shivam — an IT graduate passionate about building efficient, scalable, and user-friendly applications. I enjoy working across the stack, from designing clean APIs with Spring Boot to creating seamless user interfaces with React. With hands-on experience in cloud computing and modern web technologies, I’m eager to contribute, learn, and grow as a developer. I’m currently looking for opportunities to work with a software company where I can apply my skills, collaborate with talented teams, and keep pushing my boundaries as a developer.`,
  avatar: PlaceHolderImages.find(img => img.id === 'profile-picture')
};


export const projectsData = [
  {
    id: 0,
    title: 'BlogIn: A Full-Stack Blogging Platform',
    description: 'A full-stack blogging platform with content creation, management, secure authentication, and a responsive modern UI with light and dark themes.',
    image: PlaceHolderImages.find(img => img.id === 'project-0'),
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shivamghaware/BlogIn',
    liveUrl: 'https://blogiinn.vercel.app/',
  },
  {
    id: 1,
    title: 'Product Catalog System',
    description: 'A RESTful backend application for managing product catalogs with CRUD functionality and clean architecture principles for scalability and maintainability.',
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ['Java', 'Spring Boot', 'Hibernate', 'H2 Database', 'Maven', 'React'],
    githubUrl: 'https://github.com/shivamghaware/ProductCatalogSystem',
    liveUrl: '',
  },
  {
    id: 2,
    title: 'Box Office Collection Prediction',
    description: 'A machine learning model to predict movie revenue using Scikit-learn and NLTK, with data preprocessing, feature engineering, and NLP-based feature extraction.',
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ['Python', 'Scikit-learn', 'NLTK', 'Machine Learning'],
    githubUrl: 'https://github.com/shivamghaware/MovieRevenuePrediction',
    liveUrl: '',
  },
  {
    id: 3,
    title: 'Recipe Blog Site',
    description: 'A secure recipe management platform with authentication, authorization, and role-based access control using Flask and MongoDB.',
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ['Python', 'Flask', 'MongoDB'],
    githubUrl: 'https://github.com/shivamghaware/recipe-blog',
    liveUrl: '',
  },
];

export const skillsData = [
  {
    category: 'Programming Languages & Databases',
    icon: Code,
    skills: [
      { name: 'Java', icon: FileCode },
      { name: 'Python', icon: FileCode },
      { name: 'C++', icon: FileCode },
      { name: 'JavaScript', icon: CodeXml },
      { name: 'MySQL', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database }
    ]
  },
  {
    category: 'Frameworks & Tools',
    icon: Server,
    skills: [
      { name: 'React', icon: CodeXml },
      { name: 'Spring Boot', icon: Leaf },
      { name: 'Flask', icon: FlaskConical },
      { name: 'Hibernate', icon: Database },
      { name: 'Bootstrap', icon: Wind },
      { name: 'Git', icon: GitMerge },
      { name: 'GitHub', icon: Github },
      { name: 'Docker', icon: Container },
      { name: 'Jenkins', icon: ServerCog },
      { name: 'Maven', icon: Package },
      { name: 'Postman', icon: Send },
      { name: 'Bash Shell', icon: Binary }
    ]
  },
  {
    category: 'Core Competencies',
    icon: Cog,
    skills: [
      { name: 'Object Oriented Programming', icon: Blocks },
      { name: 'Data Structures & Algorithms', icon: Binary },
      { name: 'REST API', icon: Network },
      { name: 'Design Patterns', icon: GalleryVerticalEnd },
      { name: 'Agile', icon: Workflow },
      { name: 'CI/CD', icon: RefreshCw },
      { name: 'Cloud Computing (AWS)', icon: Cloud }
    ]
  },
  {
    category: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving', icon: Lightbulb },
      { name: 'Quick Learning', icon: BrainCircuit },
      { name: 'Adaptability', icon: StretchHorizontal },
      { name: 'Excellent Communication', icon: MessagesSquare },
      { name: 'Team Collaboration', icon: Users }
    ]
  }
];

export const contactData = {
  email: "shivamghaware3@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/shivamghaware", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/shivamghaware", icon: Linkedin },
  ]
};
