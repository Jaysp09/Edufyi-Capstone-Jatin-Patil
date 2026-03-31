// ============================================
// EDITABLE CONFIG FILE
// Update your personal content here
// WITHOUT touching any UI code
// ============================================

const USER_CONFIG = {
  // Personal Info
  name: "Jatin S. Patil",
  firstName: "Jatin",
  role: "AI & Full Stack Developer",
  tagline: "Building intelligent systems that bridge the gap between artificial intelligence and real-world applications.",
  bio: "Motivated Computer Science student with a strong interest in Artificial Intelligence and Full Stack Development. Passionate about creating impactful, real-world solutions through technology. Proficient in software development and data-centric tools with a keen desire to learn, grow, and contribute to meaningful projects.",
  bioExtended: "Currently pursuing a Bachelor's in Computer Science with a specialization in Artificial Intelligence at KLE Technological University. Experienced in building full-stack applications, computer vision systems, and IoT-based solutions. Always eager to explore the intersection of AI and practical engineering.",

  // Contact
  email: "02fe22bci020@kletech.ac.in",
  phone: "+91 63638176XX",
  location: "India",
  linkedin: "https://www.linkedin.com/in/jatin-patil-19b36a25a/",
  github: "https://github.com/Jaysp09",

  // Education
  education: [
    {
      degree: "BE in Computer Science (Artificial Intelligence)",
      institution: "KLE Technological University",
      location: "Belgaum, Karnataka",
      year: "2022 - Present",
      grade: "CGPA: 8.02",
      semester: "6th Semester",
    },
    {
      degree: "PUC - Science Stream",
      institution: "Bangur Nagar Junior College",
      location: "Dandeli, Karnataka",
      year: "2020 - 2022",
      grade: "Percentage: 71%",
    },
    {
      degree: "SSLC",
      institution: "St. Michael's Convent High School",
      location: "Dandeli, Karnataka",
      year: "2019 - 2020",
      grade: "Percentage: 90.56%",
    },
  ],

  // Experience
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Edufyi Tech Solutions",
      companyUrl: "https://www.edufyitechsolutions.com/",
      linkedinUrl: "https://www.linkedin.com/company/edufyi-tech-solutions/",
      duration: "Ongoing",
      status: "current",
      domain: "Full Stack Development",
      description: "Working on real-world full stack development projects, gaining hands-on experience in building scalable web applications using modern technologies and frameworks.",
    },
  ],

  // Projects (with full detail for modal)
  projects: [
    {
      title: "Elevate-AI",
      subtitle: "Smart Career Progression Platform",
      category: "Full Stack Development",
      description: "Built a full-stack AI-powered platform offering personalized career development tools such as resume builder, course recommendations, industry insights, and interview preparation.",
      fullDescription: `Elevate-AI is a comprehensive career progression platform that leverages artificial intelligence to help users advance their professional journey.

Key Features:
- AI-Powered Resume Builder — Intelligent parsing, AI-driven suggestions, ATS-friendly formatting
- Personalized Course Recommendations — Skill analysis, curated courses, learning path generation
- Industry Insights Dashboard — Real-time job market trends, salary benchmarks
- Interview Preparation — AI-generated mock interviews and feedback

Technical Architecture:
- Built with Next.js 14 for server-side rendering and optimal performance
- Prisma ORM for type-safe database operations
- NeonDB (serverless PostgreSQL) for scalable storage
- Inngest for background job processing and scheduled workflows
- Shadcn UI with dynamic animations for improved UX`,
      highlights: [
        "Implemented trend analyser for skill demands and weekly updates using Inngest workflows",
        "Designed intuitive dashboard with Shadcn UI and dynamic animations",
      ],
      tools: ["Next.js", "Tailwind CSS", "Prisma", "NeonDB", "Inngest", "TypeScript"],
      image: "https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?crop=entropy&cs=srgb&fm=jpg&w=800",
      githubLink: "https://github.com/Jaysp09/ElevateAi",
    },
    {
      title: "Autonomous Perception",
      subtitle: "Scene Understanding for Self-Driving",
      category: "Machine Learning",
      description: "Designed a multi-model framework using ResNet50 + FPN + CBAM for drivable area segmentation with uncertainty estimation via Monte Carlo Dropout.",
      fullDescription: `A cutting-edge computer vision system designed for autonomous vehicles and robotics applications.

Research Highlights:
- Published at IEEE ESCI-2025 Conference
- Multi-Model Deep Learning Framework

Architecture Details:
- Backbone Network: ResNet50 — Pre-trained on ImageNet, modified for semantic segmentation
- Feature Pyramid Network (FPN) — Multi-scale feature fusion for better spatial resolution
- CBAM Attention — Channel and spatial attention modules for enhanced feature selection
- YOLO11n Detection — Real-time object detection at 30+ FPS
- Monte Carlo Dropout — Uncertainty estimation for safer autonomous decision-making

Performance Metrics:
- mIoU: 89.56% on BDD100K dataset
- Recall: 92.34% for real-time object detection
- 30+ FPS on RTX 3080
- Pixel-level uncertainty visualization maps`,
      highlights: [
        "Integrated YOLO11n for real-time object detection, achieving 89.56% mIoU and 92.34% recall on BDD100K",
        "Visualized model confidence using pixel-level uncertainty maps",
      ],
      tools: ["PyTorch", "YOLOv11", "OpenCV", "CBAM", "ResNet50"],
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?w=800",
      githubLink: null,
    },
    {
      title: "Alert-Mate",
      subtitle: "Smart Fall & Health Monitoring",
      category: "IoT / Embedded",
      description: "Designed a Raspberry Pi 5-based offline health and safety monitoring device for elderly and high-risk users with fall detection and real-time health monitoring.",
      fullDescription: `Alert-Mate is an IoT-based intelligent health monitoring system designed to protect elderly and vulnerable individuals.

System Components:
- Hardware — Raspberry Pi 5, MPU6050 accelerometer, MAX30102 (heart rate/SpO2), DS18B20 temperature sensor
- Fall Detection — ML model with threshold-based preliminary detection using MPU6050
- Alert System — GSM-based SMS alerts with live GPS coordinates via SIM800L
- Health Monitoring — Real-time Heart Rate, SpO2, and Body Temperature tracking

Key Achievements:
- Fall detection accuracy: >90%
- False positive rate: <5%
- Alert delivery time: 5-7 seconds
- Works completely offline without internet dependency

Use Cases:
- Elderly care facilities and nursing homes
- Home alone seniors monitoring
- Post-surgery patient monitoring
- High-risk workplace safety`,
      highlights: [
        "Achieved >90% fall detection accuracy and alert delivery within 5-7 seconds",
        "Built GSM-based emergency alert system with live GPS location without internet",
      ],
      tools: ["Raspberry Pi 5", "Python", "MPU6050", "MAX30102", "SIM800L", "GPS"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800",
      githubLink: null,
    },
  ],

  // Skills (no percentages, professional categories)
  skills: {
    "Programming": ["C", "C++", "Python", "JavaScript", "TypeScript"],
    "Full Stack": ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Prisma"],
    "AI / ML": ["PyTorch", "OpenCV", "YOLOv5/v11", "CBAM", "Grad-CAM", "TensorFlow"],
    "IoT & Embedded": ["Raspberry Pi", "Sensor Integration", "GSM/GPS Modules", "Arduino"],
    "DevOps & Cloud": ["Docker", "Jenkins", "Ansible", "AWS", "Linux", "Git"],
    "Developer Tools": ["GitHub", "VS Code", "Postman", "REST APIs", "Figma"],
  },

  // Certifications
  certifications: [
    {
      title: "IEEE ESCI-2025 Conference Paper",
      issuer: "AISSMS Institute of IT / IEEE Pune Section",
      date: "March 2025",
      description: "Presented technical paper at 7th IEEE International Conference on Emerging Smart Computing & Informatics",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/qaz2td02_Scanned%20Document%202%20copy.pdf",
      type: "conference",
    },
    {
      title: "Cisco Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "November 2024",
      description: "Certified in Networking Basics by Cisco Networking Academy",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/zojsrmly_Networking_Basics_Badge20241125-28-a9well.pdf",
      badgeUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/etqdl3r2_networking-basics.png",
      type: "certification",
    },
    {
      title: "Linux for Cloud & DevOps Engineers",
      issuer: "Udemy",
      date: "April 2025",
      description: "Comprehensive Linux certification for cloud and DevOps engineering",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/x0njcntf_02FE22BCI020%28linux%29.pdf",
      type: "certification",
    },
    {
      title: "Applied Generative AI",
      issuer: "Infosys Springboard",
      date: "May 2025",
      description: "Certified in Applied Generative AI concepts and implementations",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/t4y2rxr5_02fe22bci020%28A_Genai%29.pdf",
      type: "certification",
    },
    {
      title: "Principles of Generative AI",
      issuer: "Infosys Springboard",
      date: "May 2025",
      description: "Certificate of Achievement in Principles of Generative AI",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/uxskw392_02fe22bci020%28P_Genai%29.pdf",
      type: "certification",
    },
    {
      title: "Ansible for Configuration Management",
      issuer: "Infosys Springboard",
      date: "May 2025",
      description: "Certified in Ansible automation and configuration management",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/yc7k3thh_02FE22BCI020%28Ansible%29.pdf",
      type: "certification",
    },
    {
      title: "AWS Cloud Fundamentals",
      issuer: "Infosys Springboard",
      date: "April 2025",
      description: "Certified in AWS Cloud services and architecture fundamentals",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/l5ah6jl2_02FE22BCI020%28Aws%29.pdf",
      type: "certification",
    },
    {
      title: "Dockerization - Do More with Docker",
      issuer: "Infosys Springboard",
      date: "April 2025",
      description: "Certified in Docker containerization and orchestration",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/ldf0oqvr_02FE22BCI020%28Docker%29.pdf",
      type: "certification",
    },
    {
      title: "Practical Jenkins",
      issuer: "Infosys Springboard",
      date: "April 2025",
      description: "Certified in Jenkins CI/CD pipeline automation",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/rm0s02c9_02FE22BCI020%28Jenkins%29.pdf",
      type: "certification",
    },
    {
      title: "MongoDB for SQL Experts",
      issuer: "MongoDB, Inc",
      date: "September 2025",
      description: "Proof of Completion - MongoDB for SQL Experts certification",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/tjm71qsh_jay-patil-bc32a151-0b95-4234-a37c-6699d36573bb-certificate.pdf",
      type: "certification",
    },
    {
      title: "MongoDB and the Document Model",
      issuer: "MongoDB, Inc",
      date: "September 2025",
      description: "Proof of Completion - MongoDB and the Document Model certification",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/wtqg61le_jay-patil-a6ed7be8-0579-41cc-8207-8158f8b998d0-certificate.pdf",
      type: "certification",
    },
    {
      title: "MongoDB for SQL Professionals",
      issuer: "MongoDB, Inc",
      date: "September 2025",
      description: "Proof of Completion - MongoDB for SQL Professionals certification",
      documentUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/v7fqnmo1_jay-patil-8d97cd6f-2340-49fa-8784-9652a74314ee-certificate.pdf",
      type: "certification",
    },
  ],

  // Resume
  resumeUrl: "https://customer-assets.emergentagent.com/job_dev-project-suite/artifacts/lj0o78t1_JATIN-INTERSHIP%28RESUME%29.pdf",

  // Achievements
  achievements: [
    "Achieved 89.56% mIoU and 92.34% recall on the BDD100K dataset for real-time object detection",
    "Achieved >90% fall detection accuracy and alert delivery within 5-7 seconds for ALERT-MATE system",
    "Presented technical paper at IEEE ESCI-2025 International Conference",
  ],

  // Soft Skills
  softSkills: [
    "Scalable Thinking & Problem-Solving",
    "High Productivity & Time Management",
    "Driven by Curiosity",
  ],

  // Admin credentials
  admin: {
    username: "jay",
    password: "jay09",
  },
};

export default USER_CONFIG;
