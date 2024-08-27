import UCSD from "./Assets/Educations/ucsd.png";
import SRU from "./Assets/Educations/sru.png";
import BOOLEAN_LAB from "./Assets/Experiences/boolean_lab.jpeg";
import GOQUANT from "./Assets/Experiences/goquant.jpg";

export const EDUCATION = [
  {
    image: UCSD,
    institution: "University of California, San Diego",
    degree: "Master of Science, Computer Science",
    duration: "Sep. 2022 - Jun. 2024",
    details: [
      "GPA: 3.8/4",
      "Worked as a Teaching Assistant for a Computer Security Course for 2 quarters",
      "Relevant Coursework: Software Engineering, Algorithm Design and Analysis, Cloud Computing, Machine Learning"
    ],
    bgColor: "#1c3b5a"
  },
  {
    image: SRU,
    institution: "Slippery Rock University of Pennsylvania",
    degree: "Bachelor of Science, Computer Science",
    duration: "Aug. 2018 - Jun. 2022",
    details: [
      "GPA: 3.65/4",
      "Relevant Coursework: OOP, Computer Networks, Computer Architecture, Operating Systems, Distributed Systems"
    ],
    bgColor: "#007054"
  }
]

export const EXPERIENCES = [
  {
    image: GOQUANT,
    company: "GoQuant",
    title: "Software Engineer Intern",
    duration: "Feb. 2024 - Jul. 2024",
    details: [
      "Improved login security by 50% by building scalable authentication microservice using FastAPI, C++, Next.js, AWS, GraphQL including features 2FA, TOTP, recovery codes, lockout mechanism, email verification, rate limiting, etc.",
      "Reduced data latency by 15% by improving digital asset trading platform responsiveness through Redis integration.",
      "70% enhancement in data retrieval speed and system performance by designing robust PostgreSQL database schema.",
      "Increased code reliability by writing comprehensive unit test cases and performing thorough testing.",
      "Managed to reduce client onboarding time by 50% through Vitepress documentation, enhancing project clarity.",
      "Collaborated cross-functionally, exhibited problem-solving skills, evaluated tradeoffs, and efficiently resolved bugs."
    ],
    bgColor: "#2C2B3B",
    borderColor: "#2C2B3B",
  },
  {
    image: BOOLEAN_LAB,
    company: "Boolean Lab, UC San Diego",
    title: "Software Engineer",
    duration: "Sep. 2022 - Jan. 2024",
    details: [
      "Achieved 90% reduction in processing time by automating FASTQ file processing with a scalable AWS based pipeline.",
      "Optimized performance by 70%, reduced biologist's time by 95%, and improved UI by building and deploying full-stack web applications using Python, Java, React, Redis, Docker, CI/CD, and AWS using best practices.",
      "Proactive team player, optimizing efficiency, reliability, and streamlined documentation.",
      "Led five-member team, cross-functional collaboration with effective communication, mentored four junior engineers."
    ],
    bgColor: "#9663AE",
    borderColor: "#9663AE",
  },
  {
    image: SRU,
    company: "Slippery Rock University",
    title: "Research Intern",
    duration: "Jan. 2021 - Dec. 2021",
    details: [
      "Enhanced 60% performance metrics by incorporating iRODS middleware to enhance user data collaborations.",
      "Built web app using Node.js, React.js, MySQL, PHP, and AWS, streamlining glycome analysis data."
    ],
    bgColor: "#007054"
  }
];

export const PROJECTS = [
  {
    image: "",
    name: "ChatWave",
    title: "Software Engineer",
    duration: "Nov. 2023 - Jan. 2024",
    technology: "JavaScript, TypeScript, React.js, Redux, Firebase",
    details: [
      "Implemented a responsive real-time chat application using JavaScript, TypeScript, React.js, Redux, and Firebase for seamless messaging, synchronized conversations, and a 40% reduction in message delivery latency."
    ],
    url: "",
    bgColor: "#212529"
  },
  {
    image: "",
    name: "PocketPulse",
    title: "Software Engineer",
    duration: "Jun. 2023 - Nov. 2023",
    technology: "React.js, Node.js, Express.js, REST APIs, Redis, MongoDB, AWS",
    details: [
      "Conceptualized microservices, user interfaces and built bug-free full-stack expense tracker web application through agile development methodologies using React.js, Node.js, Express.js, REST APIs, Redis, MongoDB, and deployed in AWS."
    ],
    url: "",
    bgColor: "#212529"
  },
  {
    image: "",
    name: "HouseNet",
    title: "Software Engineer",
    duration: "Apr. 2023 - Jun. 2023",
    technology: "GCP, Docker, Figma, React.js, Python, Flask, PostgreSQ, GitLab CI/CD",
    details: [
      "Reduced search time of rental houses by 40% by developing frontend and backend Rental Housing Applications.",
      "Deployed in GCP using Docker containers and automated with GitLab CI/CD pipelines focusing on high availability, fault tolerance, and autoscaling for UC San Diego students by using Figma, React.js, Python, Flask, and  PostgreSQL."
    ],
    url: "",
    bgColor: "#212529"
  },
  {
    image: "",
    name: "Exploring Machine Learning and Few Shot Techniques for Text Classification",
    title: "ML Engineer",
    duration: "Jan. 2023 - Apr. 2023",
    technology: "Machine Learning, Deep Learning, LLM, Few-Shot methods, SetFit",
    details: [
      "Investigated diverse Machine Learning, Deep Learning, LLM, and Few-Shot methods on Kaggle's IMDB and AG News datasets, attaining a significant 98% accuracy via Few-Shot using SetFit."
    ],
    url: "https://github.com/kunj-champaneri/Exploring-Machine-Learning-and-Few-Shot-Techniques-for-Text-Classification",
    bgColor: "#212529"
  },
];

export const SKILLS = [
  "C++", "C", "Python", "JavaScript", "TypeScript", "Java", "PHP", "Bash", "HTML", "CSS", "Bootstrap", "React", "Next.js", "Angular", "Node.js", "Express.js", "FastAPI", "Spring Boot", "SQL", "NoSQL", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Kafka", "Docker", "Kubernetes"
]

export const TOOLS = ["Visual Studio Code", "Git", " RESTful APIs", "HTTP", "Chrome DevTools", "Npm (Node Package Manager)", "Linux", "Postman", "Scikit-Learn", "Numpy", "Matplotlib", "PySwarms", "Gym", "OpenCV"]
