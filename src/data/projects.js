export const projects = [
  {
    id: 1,
    title: "Bug Tracker System",
    description: "A comprehensive bug tracking and project management system built for software development teams to efficiently track, prioritize, and resolve issues.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    category: "Full Stack Development",
    image: "/api/placeholder/400/300",
    features: [
      "Real-time bug tracking",
      "User role management",
      "Priority and status management",
      "File attachment support",
      "Email notifications"
    ],
    client: "Tech Solutions Inc.",
    duration: "3 months",
    businessChallenge:"The client was managing software defects using spreadsheets, emails, and disconnected communication channels which caused delays and reduced visibility.Development teams struggled to prioritize issues effectively, track progress, and maintain accountability across multiple projects and stakeholders.The lack of a centralized platform resulted in inefficient workflows, increased resolution times, and difficulties in project monitoring.",
    solutionDelivered:"NewProData developed a centralized bug tracking platform using React, Node.js, MongoDB, Express, and JWT authentication.The solution enabled issue creation, assignment, prioritization, workflow tracking, file attachments, and automated notifications through a user-friendly interface.Role-based access control and reporting features were implemented to improve transparency and collaboration across teams.",
    projectOutcome:"The platform significantly reduced issue resolution time and improved communication between development and testing teams.Project managers gained real-time visibility into project status, allowing faster decision-making and resource allocation.The organization achieved higher productivity, better software quality, and improved customer satisfaction.",
    overview:"The Bug Tracker System was designed to help software development teams efficiently manage, track, and resolve software defects throughout the development lifecycle.The platform provides centralized issue management, role-based access control, workflow automation, and real-time collaboration between developers, testers, and project managers.It improves project visibility, enhances team productivity, and ensures faster issue resolution through streamlined communication and reporting capabilities.",
    stats: [
  { value: "60%", label: "Faster Issue Resolution" },
  { value: "95%", label: "Tracking Accuracy" },
  { value: "5000+", label: "Issues Managed" },
  { value: "40%", label: "Productivity Increase" }
],

   timeline: [
  "Requirement Gathering with Development Teams",
  "User Role & Permission Architecture Design",
  "Bug Tracking Module Development",
  "Notification & File Attachment Integration",
  "System Testing and Production Deployment"
]
  },
  {
    id: 2,
    title: "Talent Platform",
    description: "An AI-powered talent acquisition platform that streamlines the hiring process with automated candidate screening and matching capabilities.",
    technologies: ["React", "Python", "PostgreSQL", "FastAPI", "Machine Learning"],
    category: "Machine Learning & Big Data",
    image: "/api/placeholder/400/300",
    features: [
      "AI-powered candidate matching",
      "Automated resume parsing",
      "Interview scheduling",
      "Analytics dashboard",
      "Integration with job boards"
    ],
    client: "HR Solutions Ltd.",
    duration: "6 months",
    businessChallenge:"The client received thousands of applications every month, making manual resume screening inefficient and time-consuming.Recruiters faced difficulties in identifying suitable candidates quickly while maintaining consistency in candidate evaluations.Long hiring cycles and resource-intensive recruitment activities impacted overall hiring efficiency and business growth.",
    solutionDelivered:"NewProData implemented a scalable ETL architecture using Python, Apache Airflow, PostgreSQL, AWS S3, and Pandas.The solution automated data ingestion, cleansing, validation, transformation, and reporting workflows across multiple systems.Comprehensive monitoring and auditing capabilities were incorporated to ensure compliance and operational reliability.",
    projectOutcome:"The platform improved data accuracy and reduced manual processing efforts across pharmaceutical operations.Automated workflows accelerated reporting timelines and enhanced regulatory compliance management.The client achieved better data governance, improved operational efficiency, and increased confidence in reporting outcomes.",
    overview:"The Talent Platform was developed to modernize recruitment operations through Artificial Intelligence and Machine Learning technologies.The solution automates candidate screening, skill evaluation, resume analysis, and hiring workflows, helping recruiters identify qualified candidates faster.It enables organizations to streamline recruitment processes, reduce manual effort, and improve hiring outcomes through intelligent automation.",

    stats: [
  { value: "50%", label: "Faster Hiring" },
  { value: "80%", label: "Less Manual Screening" },
  { value: "10000+", label: "Applications Processed" },
  { value: "95%", label: "Matching Accuracy" }
],

timeline: [
  "Recruitment Workflow Analysis",
  "AI Candidate Matching Model Development",
  "Resume Parsing Engine Implementation",
  "Interview Scheduling & Analytics Integration",
  "Platform Deployment and User Training"
]
  },
  {
    id: 3,
    title: "Billing Software",
    description: "A comprehensive billing and invoicing system designed for service-based businesses with automated billing cycles and payment tracking.",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Stripe API"],
    category: "Full Stack Development",
    image: "/api/placeholder/400/300",
    features: [
      "Automated billing cycles",
      "Multiple payment methods",
      "Invoice generation",
      "Payment tracking",
      "Financial reporting"
    ],
    client: "Service Corp",
    duration: "4 months",
    businessChallenge:"The client relied heavily on manual invoice generation and payment tracking, leading to billing errors and delayed payments.Managing multiple payment methods and recurring subscriptions became increasingly difficult as business operations expanded.The organization required a scalable billing platform capable of handling large transaction volumes accurately.",
    solutionDelivered:"NewProData built a comprehensive billing management system using Angular, Java, Spring Boot, MySQL, and payment gateway integrations.The solution automated invoice generation, payment reconciliation, recurring billing schedules, and financial reporting activities.Advanced reporting dashboards provided real-time insights into revenue performance and outstanding payments.",
    projectOutcome:"The client achieved faster invoice processing and improved payment collection efficiency.Automated workflows reduced operational overhead and minimized billing-related errors across departments.The organization gained better financial visibility, improved customer satisfaction, and stronger revenue management capabilities.",
    overview:"The Billing Software solution was developed to automate invoicing, payment tracking, and financial reporting processes for service-based organizations.The platform provides end-to-end billing management, reducing manual accounting efforts and ensuring accurate transaction processing.It enables businesses to manage recurring billing cycles efficiently while maintaining complete financial transparency.",
    stats: [
  { value: "70%", label: "Reduced Manual Work" },
  { value: "99%", label: "Invoice Accuracy" },
  { value: "3000+", label: "Invoices Generated" },
  { value: "45%", label: "Faster Billing" }
],

timeline: [
  "Business Process Requirement Analysis",
  "Invoice & Payment Module Design",
  "Billing Automation Development",
  "Financial Reporting Integration",
  "Production Deployment and User Acceptance Testing"
]
  },
  {
    id: 4,
    title: "Pharma Data ETL",
    description: "A robust ETL pipeline for pharmaceutical data processing, ensuring data quality and compliance with industry regulations.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "AWS S3", "Pandas"],
    category: "Data Warehousing & Integration",
    image: "/api/placeholder/400/300",
    features: [
      "Automated data validation",
      "Compliance reporting",
      "Data lineage tracking",
      "Error handling and logging",
      "Scalable processing"
    ],
    client: "PharmaTech Solutions",
    duration: "5 months",
    businessChallenge:"The client managed massive pharmaceutical datasets from multiple sources with varying formats and quality standards.Manual validation and reporting activities consumed significant time while increasing the risk of compliance issues and data inconsistencies.The organization required a reliable ETL framework capable of supporting regulatory reporting requirements efficiently.",
    solutionDelivered:"NewProData implemented a scalable ETL architecture using Python, Apache Airflow, PostgreSQL, AWS S3, and Pandas.The solution automated data ingestion, cleansing, validation, transformation, and reporting workflows across multiple systems.Comprehensive monitoring and auditing capabilities were incorporated to ensure compliance and operational reliability.",
    projectOutcome:"The platform improved data accuracy and reduced manual processing efforts across pharmaceutical operations.Automated workflows accelerated reporting timelines and enhanced regulatory compliance management.The client achieved better data governance, improved operational efficiency, and increased confidence in reporting outcomes.",
    overview:"The Pharma Data ETL platform was developed to automate pharmaceutical data extraction, transformation, validation, and reporting processes.The solution ensures regulatory compliance, improves data quality, and provides scalable processing capabilities for large healthcare datasets.It supports accurate reporting and efficient management of critical pharmaceutical information across multiple business systems.",
    stats: [
  { value: "90%", label: "Data Accuracy" },
  { value: "75%", label: "Less Manual Processing" },
  { value: "5M+", label: "Records Processed" },
  { value: "60%", label: "Reporting Efficiency" }
],

timeline: [
  "Data Source Assessment and Planning",
  "ETL Pipeline Architecture Design",
  "Data Validation and Compliance Implementation",
  "Automated Workflow Development",
  "Production Rollout and Monitoring Setup"
]
  },
  {
    id: 5,
    title: "Study Connect Dashboard",
    description: "An interactive analytics dashboard for educational institutions to track student performance and engagement metrics.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Chart.js"],
    category: "Business Analytics & Reporting",
    image: "/api/placeholder/400/300",
    features: [
      "Interactive data visualization",
      "Real-time metrics",
      "Custom report generation",
      "Student performance tracking",
      "Engagement analytics"
    ],
    client: "EduTech University",
    duration: "3 months",
    businessChallenge:"Educational administrators lacked centralized visibility into student performance, attendance, and engagement metrics.Data was scattered across multiple systems, making it difficult to generate actionable insights and monitor academic outcomes effectively.Manual reporting processes also delayed decision-making and reduced operational efficiency.",
    solutionDelivered:"NewProData developed an analytics dashboard using React, D3.js, Node.js, MongoDB, and Chart.js technologies.The platform provided real-time visualizations, performance tracking, custom reports, and engagement monitoring tools.Interactive dashboards enabled users to explore academic trends and identify areas requiring intervention.",
    projectOutcome:"The institution gained improved visibility into student performance and engagement patterns.Decision-makers were able to identify performance gaps earlier and implement targeted improvement initiatives.The dashboard enhanced reporting efficiency, improved academic planning, and supported data-driven educational strategies.",
    overview:"The Study Connect Dashboard was created to provide educational institutions with real-time insights into student performance and engagement.The platform consolidates academic data into interactive visual dashboards, enabling administrators and educators to make informed decisions.It supports performance monitoring, trend analysis, and customized reporting across multiple academic programs.",
    stats: [
  { value: "50%", label: "Better Decision Making" },
  { value: "12000+", label: "Students Tracked" },
  { value: "85%", label: "Reporting Efficiency" },
  { value: "40%", label: "Improved Engagement" }
],

timeline: [
  "Educational KPI Requirement Gathering",
  "Dashboard UI/UX Design",
  "Analytics and Visualization Development",
  "Real-Time Data Integration",
  "Deployment and Stakeholder Training"
]
  },
  {
    id: 6,
    title: "Legacy System Modernization",
    description: "Modernization of a 15-year-old inventory management system with cloud migration and API integration capabilities.",
    technologies: ["Java", "Spring Boot", "AWS", "Docker", "REST APIs"],
    category: "Legacy Software Maintenance",
    image: "/api/placeholder/400/300",
    features: [
      "Cloud migration",
      "API development",
      "Database optimization",
      "Security enhancements",
      "Performance improvements"
    ],
    client: "Retail Solutions Inc.",
    duration: "8 months",
    businessChallenge:"The client operated a legacy application that suffered from performance limitations, security concerns, and maintenance difficulties.Integration with modern business systems was challenging, limiting operational efficiency and scalability.The aging infrastructure increased operational risks and constrained future business growth opportunities.",
    solutionDelivered:"NewProData modernized the application using Java, Spring Boot, AWS, Docker, and REST API technologies.The solution included cloud migration, API development, database optimization, security enhancements, and containerized deployment.Modern architecture principles were applied to improve scalability and simplify future enhancements.",
    projectOutcome:"The organization achieved substantial improvements in system performance, reliability, and operational flexibility.Cloud migration reduced infrastructure maintenance costs while enhancing scalability and availability.The modernized platform provided a strong foundation for future innovation and digital transformation initiatives.",
    overview:"The Legacy System Modernization project focused on transforming an outdated inventory management system into a scalable cloud-enabled solution.The modernization initiative improved system performance, security, maintainability, and integration capabilities.It enabled the organization to leverage modern technologies while preserving critical business functionality.",
    stats: [
  { value: "65%", label: "Performance Improvement" },
  { value: "50%", label: "Maintenance Cost Reduction" },
  { value: "99.9%", label: "System Availability" },
  { value: "80%", label: "Faster Processing" }
],

timeline: [
  "Legacy System Assessment",
  "Cloud Migration Strategy Planning",
  "API and Database Modernization",
  "Performance & Security Optimization",
  "Deployment and Infrastructure Transition"
]
  }
  ,
  {
  id: 7,
  title: "Artemis – AI Observability Platform",
  description: "An AI-native observability platform that ingests logs, metrics, traces, and Kubernetes events, performs intelligent incident correlation, and generates AI-powered Root Cause Analysis with remediation recommendations.",
  technologies: ["React", "TypeScript", "AWS Bedrock", "Apache Flink", "PostgreSQL"],
  category: "AI & Cloud Observability",
  image: "/api/placeholder/400/300",
  features: [
    "AI-powered Root Cause Analysis",
    "Multi-signal incident correlation",
    "Kubernetes observability",
    "Real-time telemetry monitoring",
    "Automated remediation suggestions"
  ],
  client: "Enterprise Cloud Operations",
  duration: "6 months",
  businessChallenge:"The client managed large-scale cloud environments generating massive volumes of operational telemetry data.Traditional monitoring tools lacked intelligent correlation capabilities, resulting in slower incident investigation and prolonged downtime.Operations teams required a centralized platform capable of providing automated root cause analysis and remediation guidance.",
  solutionDelivered:"NewProData developed Artemis using React, TypeScript, AWS Bedrock, Apache Flink, and PostgreSQL technologies.The platform performs real-time telemetry processing, incident correlation, AI-powered root cause analysis, and automated remediation recommendations.Advanced observability features were integrated to support large-scale enterprise cloud operations efficiently.",
  projectOutcome:"The platform reduced incident resolution times and improved operational visibility across cloud environments.AI-powered insights enabled faster troubleshooting and enhanced reliability for business-critical applications.The client achieved higher system availability, reduced operational costs, and improved overall cloud management efficiency.",
  overview:"Artemis is an AI-native observability platform designed to monitor cloud infrastructure, applications, and Kubernetes environments.The solution collects logs, metrics, traces, and events in real time while providing intelligent analysis and actionable insights.It empowers operations teams to identify issues proactively and maintain high system reliability across complex environments.",
  stats: [
  { value: "70%", label: "Faster Incident Resolution" },
  { value: "90%", label: "Detection Accuracy" },
  { value: "24/7", label: "Real-Time Monitoring" },
  { value: "50%", label: "Reduced Downtime" }
],

timeline: [
  "Observability Requirements Analysis",
  "Telemetry Collection Architecture Design",
  "AI Root Cause Analysis Engine Development",
  "Incident Correlation & Monitoring Integration",
  "Enterprise Deployment and Performance Validation"
]
  }
];
