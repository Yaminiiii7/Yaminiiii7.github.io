/* ==========================================================================
   data.js — ALL WEBSITE CONTENT LIVES HERE.

   This is the ONLY file you need to edit to update your portfolio.
     • Add a project?   Scroll to `projects` and copy an existing { ... } block.
     • Change a job?    Scroll to `experience`.
     • New certificate? Scroll to `credentials`.

   Nothing in this file affects layout or styling. Keep the commas and quotes
   where they are, and you can't break anything.
   ========================================================================== */

const DATA = {

  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: "Yamini Mandadi",
    title: "Cloud Platform & Security Engineer",
    location: "Los Angeles, CA",
    email: "yaminiofficial789281@gmail.com",

  
    linkedin: "https://www.linkedin.com/in/yaminimandadi",
    github: "https://github.com/Yaminiiii7",

    // Headshot shown in the hero. Set to null to hide it and let the text
    // span the full width. A portrait (3:4) crop works best.
    photo: "assets/img/headshot.jpeg",
    photoAlt: "Yamini Mandadi",

    // Put your PDF in the assets/ folder and name it to match.
    // Set to null if you don't want a resume button.
    resume: "assets/docs/Yamini_Mandadi_Resume.pdf",

  
    // Plain text only — markdown like **bold** or # headings is NOT parsed and
    // will show up as literal characters on the page.
    summary: `Azure-focused Cloud Engineer with 4 years of experience designing, automating, and securing enterprise cloud infrastructure. Experienced in Azure networking, Terraform, CI/CD, Zero Trust security, identity and access management, private connectivity, cloud governance, monitoring, and disaster recovery. Expanding cloud expertise into modern application development and AI through hands-on experience with React, JavaScript, Node.js, REST APIs, Python, and Retrieval-Augmented Generation (RAG) using Llama 3.2, LangChain, and vector databases. Microsoft-certified in Azure administration and security, combining strong cloud infrastructure expertise with software engineering and emerging AI capabilities.`,

   
    // Tiles size to their content, so any count from 2 to 4 looks right.
    // Delete the whole array (stats: [],) to hide the strip entirely.
    stats: [
      { value: "4", label: "Years in cloud" },
      { value: "50–66%", label: "Azure spend reduced" },
      { value: "3", label: "Azure certifications" },
    ],
  },

 
  experience: [
    {
      role: "Cloud Platform Engineer",
      company: "Community Dreams Foundation",
      period: "Aug 2026 — Present",
      current: true,
      stack: ["Azure Data Factory", "Logic Apps", "Event Hubs", "SHIR"],
      points: [
        "Configured and supported Self-hosted Integration Runtime (SHIR) to securely connect Azure Data Factory with on-premises and private-network data sources, troubleshooting connectivity, authentication, and pipeline execution issues.",
        "Implemented Azure Logic Apps for event-driven workflows and system integrations, improving automation of operational processes.",
        "Configured Azure Event Hubs for event ingestion and streaming workloads, monitoring pipeline health and resolving ingestion failures.",
      ],
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services",
      period: "Jul 2023 — Sep 2024",
      stack: ["Terraform", "Jenkins", "Azure Firewall", "Grafana", "Azure SQL"],
      points: [
        "Developed modular Terraform configurations for Azure with remote state and environment-specific configurations for Dev, QA, and Production, enabling consistent and repeatable infrastructure deployments.",
        "Automated Azure infrastructure deployments through DevSecOps CI/CD pipelines using Jenkins, Terraform, Azure CLI, and Git — incorporating infrastructure validation, Terraform planning, security checks, and controlled deployments.",
        "Implemented secure Azure connectivity using Private Endpoints and Private DNS, enabling private access to Azure PaaS services while reducing public network exposure.",
        "Administered Azure SQL workloads including SQL Server backup/restore, backup validation, long-term retention, and disaster recovery planning aligned with RPO/RTO requirements.",
        "Designed and implemented Azure network security architecture using hub-and-spoke VNets, subnet segmentation, VNet peering, UDRs, Azure Firewall, NSGs, Application Gateway, and Load Balancer to support secure and resilient application connectivity.",
        "Monitored Azure environments using Azure Monitor, Log Analytics, Application Insights, Prometheus, and Grafana — creating alerts and dashboards and supporting root-cause analysis.",
        "Collaborated with application, infrastructure, DevOps, and security teams using Agile, Jira, Confluence, Bitbucket, and peer code review.",
      ],
    },
    {
      role: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      period: "Jul 2022 — Jul 2023",
      stack: ["Microsoft Entra ID", "Zero Trust", "Key Vault", "Cost Management"],
      points: [
        "Reduced Azure infrastructure costs by approximately 50–66% through Azure Cost Management, resource rightsizing, App Service Plan optimization, and rehosting strategies.",
        "Supported migration of application workloads from Azure App Service Plan to the Consumption Plan, performing proof-of-concept testing and validating application compatibility, scalability, networking, security, and deployment requirements.",
        "Supported Azure networking operations across VNets, subnets, NSGs, Azure Firewall, peering, and routing — troubleshooting connectivity and security issues for application workloads.",
        "Implemented Zero Trust security controls using Microsoft Entra ID, Conditional Access, MFA, PIM, RBAC, Managed Identities, and Service Principals to enforce least-privilege access.",
        "Managed Azure Key Vault and the SSL/TLS certificate lifecycle, supporting secure storage of and access to application secrets and certificates.",
        "Supported Azure security posture and governance using Microsoft Defender for Cloud, Azure Policy, NSGs, firewall controls, and storage network restrictions.",
      ],
    },
    {
      role: "Assistant System Engineer Trainee",
      company: "Tata Consultancy Services",
      period: "Jul 2021 — Jul 2022",
      stack: ["ARM Templates", "Active Directory", "AWS IAM", "ITIL"],
      points: [
        "Automated standardized Azure infrastructure deployments using ARM Templates, establishing repeatable infrastructure deployment patterns.",
        "Administered Active Directory, DNS, Microsoft Entra ID, and AWS IAM, supporting identity, authentication, and authorization across hybrid and multi-cloud environments.",
        "Implemented security controls including RBAC, Conditional Access, MFA, NSGs, firewall rules, Azure Policy, and Storage Account network restrictions.",
        "Managed ITIL-based incidents, service requests, changes, and SLA requirements, contributing root-cause analysis in support of reliable production operations.",
      ],
    },
  ],


  projects: [
    {
      title: "Automated Monitoring & Self-Healing Infrastructure",
      tag: "Cloud & DevOps",
      featured: true,
      blurb: `An automated incident-response pipeline that detects performance degradation
        in web applications, executes the remediation runbook, and notifies stakeholders.
        Sumo Logic watches the logs, an AWS Lambda recovers the failing EC2 instance, and
        SNS closes the loop — removing manual intervention on slow API endpoints entirely.`,
      highlights: [
        "Log monitor → alert → Lambda → EC2 recovery → SNS notification, fully automated",
        "Codified runbook response — detection through remediation to stakeholder notification with no manual step",
        "Entire stack defined in Terraform: VPC, EC2, IAM roles, Lambda, and SNS topics",
      ],
      stack: ["Terraform", "AWS", "Lambda", "EC2", "SNS", "IAM", "Python", "Boto3", "Sumo Logic"],
      repo: "https://github.com/Yaminiiii7/Automated-Monitoring-and-Self-Healing-Infrastructure-using-Sumo-Logic-and-AWS",
    },
    {
      title: "Network Scanning & Exploitation Assessment",
      tag: "Security",
      featured: true,
      blurb: `A full manual and automated network security assessment run against a
        virtualized lab I built myself — discovery, enumeration, vulnerability validation,
        and controlled exploitation — documented as a structured report a client could act
        on directly. Building the target environment first meant I knew exactly what was
        exposed and could verify every finding against ground truth.`,
      highlights: [
        "Built the target environment on VMware — virtual machines, segmented virtual networking, and snapshots to reset between test runs",
        "TCP/UDP port scanning, service enumeration, and OS fingerprinting across test subnets",
        "CVSS-based risk categorization with documented impact, evidence, and remediation guidance",
        "Controlled penetration testing to validate findings rather than forward raw scanner output",
      ],
      stack: ["VMware", "Nmap", "Zenmap", "Wireshark", "Metasploit", "Nessus", "Snort", "CVSS"],
      repo: "https://github.com/Yaminiiii7/NetworkScanning_Exploitation",
    },
    {
      title: "Retrieval-Augmented Generation with Llama 3",
      tag: "AI/ML",
      featured: true,
      blurb: `A local RAG application that answers questions about any web page. It loads
        content, splits it into chunks, embeds them into a vector store, and grounds the
        open-source llama3.2:3b model against the retrieved context — served through a
        Gradio UI with no external LLM API involved.`,
      highlights: [
        "ChromaDB vector search wired into a LangChain retrieval chain for grounded answers",
        "Runs entirely locally via Ollama; containerized and pushed to Amazon ECR by GitHub Actions",
      ],
      stack: ["Python", "Llama 3.2", "Ollama", "LangChain", "ChromaDB", "Gradio", "Docker Compose", "Amazon ECR"],
      repo: "https://github.com/Yaminiiii7/Retrieval-Augmented-Generation-with-Llama-3-and-Vector-Search",
    },
    {
      title: "Containerized ML Pipeline on Docker & K3s",
      tag: "AI/ML",
      blurb: `An end-to-end ML pipeline covering the full train → package → serve → deploy
        loop. A K-Nearest Neighbors classifier is trained on the Iris dataset, persisted
        with joblib, exposed through a FastAPI HTTP API, containerized, and deployed to a
        lightweight k3s cluster running on EC2.`,
      highlights: [
        "Model served through FastAPI + Uvicorn behind a documented REST contract",
        "Kubernetes manifests for k3s deployment, with both local and EC2 run instructions",
      ],
      stack: ["Python", "scikit-learn", "pandas", "joblib", "FastAPI", "Docker", "Kubernetes", "K3s"],
      repo: "https://github.com/Yaminiiii7/Containerized-ML-Pipeline-with-Docker-and-K3s-Iris-Classification",
    },
    {
      title: "Two-Tier Flask App with GitHub Actions CI/CD",
      tag: "Cloud & DevOps",
      blurb: `A containerized two-tier Flask + MySQL application with automated deployment
        to AWS EC2. A push to main triggers a GitHub Actions workflow that builds the
        images and brings the Compose stack up on a remote instance over SSH, eliminating
        manual deployment steps.`,
      highlights: [
        "GitHub Actions SSH deploy pipeline with local smoke tests gating the release",
        "EC2 and security groups provisioned by Terraform; application layer by Docker Compose",
      ],
      stack: ["Python", "Flask", "MySQL", "Docker Compose", "Terraform", "GitHub Actions", "AWS EC2"],
      repo: "https://github.com/Yaminiiii7/Two-Tier-Flask-App-Project-with-Github-Actions",
    },
    {
      title: "AWS AMI Automation Pipeline",
      tag: "Cloud & DevOps",
      blurb: `A golden-image build pipeline using HashiCorp Packer to bake a custom Amazon
        Machine Image preinstalled with Apache HTTPD, paired with Terraform configuration
        that launches EC2 instances from the produced AMI — repeatable image creation
        instead of hand-configured servers.`,
      highlights: [
        "Packer build with Bash provisioners, systemd service setup, and IMDSv2 enforced",
        "Terraform consumes the resulting AMI ID to stand up instances on demand",
      ],
      stack: ["Packer", "Terraform", "AWS", "EC2", "AMI", "IAM", "Bash", "Amazon Linux", "Apache HTTPD"],
      repo: "https://github.com/Yaminiiii7/AWS-AMI-Automation-Pipeline-Using-Packer-and-Terraform",
    },
    {
      title: "Elasticsearch Log Analyzer",
      tag: "Full-Stack",
      blurb: `A Node.js + Express REST API for uploading, parsing, storing, and analyzing
        web server logs with Elasticsearch. Log files are processed as background jobs,
        then exposed through search, filtering, analytics, and export endpoints behind a
        modular route-based architecture.`,
      highlights: [
        "Background job processing so large log uploads never block the request cycle",
        "Full-text search and aggregation analytics served directly from Elasticsearch",
      ],
      stack: ["JavaScript", "Node.js", "Express.js", "Elasticsearch", "REST API"],
      repo: "https://github.com/Yaminiiii7/Log-Analyze-Node-ElasticSearch",
    },
    {
      title: "Creatorverse",
      tag: "Full-Stack",
      blurb: `A full-stack CRUD application for curating a personal directory of favorite
        content creators across YouTube, Instagram, and X. Users create, browse, update,
        and delete creator entries backed by a Supabase Postgres database.`,
      highlights: [
        "React + Vite front end with React Router navigation and Tailwind styling",
        "Supabase / PostgreSQL persistence accessed over REST APIs",
      ],
      stack: ["React", "Vite", "JavaScript", "Tailwind CSS", "React Router", "Supabase", "PostgreSQL"],
      repo: "https://github.com/Yaminiiii7/CreatorverseApplication-ReactJS-Supabase",
    },
    {
      title: "Playlist Manager REST API",
      tag: "Full-Stack",
      blurb: `A modular RESTful backend built with Node.js and Express, using MongoDB and
        Mongoose for persistence. It models users, playlists, and nested track
        subdocuments as a clean reference implementation for database-driven CRUD APIs.`,
      highlights: [
        "Mongoose schemas using embedded subdocuments for nested track data",
        "ES-module project structure with environment-based configuration via dotenv",
      ],
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript", "REST API"],
      repo: "https://github.com/Yaminiiii7/Backend-REST-API-with-MongoDB-and-Mongoose",
    },
    {
      title: "Data Analytics: Customer Purchasing Patterns",
      tag: "Data Analytics",
      blurb: `An end-to-end retail analytics project that analyzed 264K+ transactions
        across 272 stores to identify customer purchasing patterns, demographic segments,
        and product affinity trends. The work turned transaction data into clear,
        action-oriented recommendations for customer targeting, product placement, and
        promotional strategy.`,
      highlights: [
        "Processed and analyzed 264K+ retail transactions with Python using Pandas, NumPy, Matplotlib, and Seaborn",
        "Segmented customer behavior by demographics and uncovered higher-value spending patterns in families and older customers",
        "Delivered data-backed recommendations for product placement and promotion strategy based on observed purchase trends",
      ],
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis", "Retail Analytics"],
      repo: "https://github.com/Yaminiiii7/DataAnalytics-customerPurchasingPatterns",
    },
  ],

  /* ----------------------------------------------------------------- SKILLS */
  skills: [
    {
      group: "Cloud Platforms",
      items: ["Azure", "AWS", "Azure Management Groups", "Azure Site Recovery",
              "VNets", "Hub-and-Spoke", "Private Endpoints", "Private DNS",
              "Azure Data Factory", "Logic Apps", "Event Hubs",
              "VMware", "Virtual Machine Lifecycle"],
    },
    {
      group: "Security & Identity",
      items: ["Azure Firewall", "NSGs", "Key Vault",
              "Microsoft Entra ID", "RBAC", "Managed Identities", "Service Principals",
              "Conditional Access", "MFA", "PIM", "Zero Trust", "SSL/TLS"],
    },
    {
      group: "Governance, Risk & Compliance",
      items: ["Azure Policy", "Microsoft Defender for Cloud", "Security Baselines",
              "CVSS Risk Scoring", "Vulnerability Assessment & Remediation Reporting",
              "IAM Governance & Least Privilege", "ITIL Incident & Change Management",
              "Disaster Recovery Planning (RPO/RTO)", "Azure Cost Governance"],
    },
    {
      group: "Infrastructure as Code & DevOps",
      items: ["Terraform", "ARM Templates", "Packer", "Jenkins", "GitHub Actions", "Azure CLI",
              "PowerShell", "Docker", "Kubernetes", "K3s", "Git", "Bitbucket"],
    },
    {
      group: "Security Assessment",
      items: ["Nmap", "Zenmap", "Nessus", "Metasploit", "Wireshark", "Snort",
              "Penetration Testing", "Network Security Testing", "Threat Analysis"],
    },
    {
      group: "Monitoring & Observability",
      items: ["Azure Monitor", "Log Analytics", "Application Insights", "Prometheus", "Grafana",
              "Alertmanager", "Sumo Logic"],
    },
    {
      group: "Programming & Data",
      items: ["Python", "C++", "C", "JavaScript", "React", "Node.js", "FastAPI", "Flask",
              "REST APIs", "MySQL", "MongoDB", "PostgreSQL", "Elasticsearch", "Boto3"],
    },
  ],

 
  education: [
    {
      degree: "Master of Science, Computer Science",
      school: "California State University, Los Angeles",
      detail: "GPA 3.9",
    },
    {
      degree: "Bachelor of Technology, Computer Science & Engineering",
      school: "Reva University",
      detail: "GPA 3.9",
    },
  ],

  /* --------------------------------------------- CERTS & ACHIEVEMENTS ----- */
  // type: "cert" gets the shield icon, "award" gets the trophy icon.
  //
  // Two optional ways to make a card open something on click:
  //   image: "assets/img/x.png"  → opens the certificate in the lightbox
  //   url:   "https://..."       → opens a link in a new tab (e.g. the
  //                                Microsoft Learn verification page)
  // A card with neither stays a plain, non-clickable card.
  credentials: [
    {
      name: "Azure Administrator Associate", sub: "AZ-104 · Microsoft Certified", type: "cert",
      image: "assets/img/az-104.png",
      alt: "Microsoft Certified: Azure Administrator Associate certificate awarded to Yamini Mandadi, earned 5 May 2023, certification number 8E2FC3-782045.",
    },
    {
      name: "Azure Security Engineer Associate", sub: "AZ-500 · Microsoft Certified", type: "cert",
      image: "assets/img/az-500-certificate.png",
      alt: "Microsoft Certified: Azure Security Engineer Associate certificate awarded to M Yamini, achieved 26 July 2022, certification number I362-3398.",
    },
    {
      name: "Azure Fundamentals", sub: "AZ-900 · Microsoft Certified", type: "cert",
      // Optional: paste your Microsoft Learn share link here to make this card
      // clickable, or add `image:` like the AZ-104 entry above. Until then it
      // renders as a plain (non-clickable) card, which is fine.
    },
    {
      name: "The Security Hackathon 2022 — 1st Place", sub: "CloudThat × Microsoft Azure · Jan 2023", type: "award",
      image: "assets/img/security-hackathon.png",
      alt: "CloudThat and Microsoft Azure certificate awarding M Yamini first place in The Security Hackathon 2022, dated 13 January 2023.",
    },
    {
      name: "National Cyber League — Fall 2024",    sub: "84th & 89th percentile · Individual & Team", type: "award",
      image: "assets/img/ncl-individual-certificate.png",
      alt: "National Cyber League certificate of participation for Yamini Mandadi, NCL Fall 2024 Individual Game.",
    },
    { name: "Zolve Global Scholarship",             sub: "2024",                         type: "award" },
    { name: "Special Recognition, Graduate Studies", sub: "2026",                        type: "award" },
    {
      name: "On the Spot (Team) Award",             sub: "TCS Gems · Aug 2024",          type: "award",
      image: "assets/img/on-the-spot-award.png",
      alt: "TCS Gems certificate awarding M Yamini the On the Spot (Team) Award, dated 19 August 2024.",
    },
  ],

  /* ----------------------------------------------------------- PUBLICATIONS */
  // Any field left as "" is simply skipped when the card renders, so you can
  // fill these in gradually. `authors` bolds your own name automatically —
  // it matches against profile.name, so no special markup needed.
  publications: [
    {
      title: "Kannada Character Recognition using Convolutional Neural Networks",

      // TODO: list every author in the order printed on the paper.
      authors: ["Yamini Mandadi"],

      venue: "Test Engineering and Management",

      // TODO: copy from the paper's title page, e.g. "Vol. 83, Issue 5-6, pp. 1234-1240".
      details: "",

      // TODO: publication year, e.g. "2020".
      year: "",

      url: "http://www.testmagzine.biz/index.php/testmagzine/article/view/8320/6294",

      // TODO: paste your actual abstract here. The line below only restates the
      // title — replace it so the card says something real about the work.
      abstract: `A convolutional neural network approach to recognizing handwritten
        Kannada characters.`,

      tags: ["Deep Learning", "CNN", "Computer Vision", "Python"],
    },
  ],

  /* ----------------------------------------------------------- TESTIMONIALS */
  // `featured: true` makes the card span the full row with larger type.
  // `award: true` styles it as a citation (trophy icon).
  // `note: true`  styles it as an appreciation note (message icon).
  // `image`       path to a certificate scan — shows as a thumbnail you can
  //               click to enlarge. Always write an `alt` describing it.
  // `links`       optional [{label, url}] row rendered under the card, for
  //               verification pages, reports, and the like.
  // Blank lines inside a quote become separate paragraphs.
  testimonials: [
    {
      featured: true,
      quote: `I wanted to take a moment to express my sincere appreciation for your hard
        work and dedication as an Azure engineer in our team. Your contributions have not
        gone unnoticed, and I want to let you know how much we valued your efforts.

        How fast you learned SCE's complex environment is applaudable. Your positive
        attitude and willingness to go above and beyond expectations have made a
        significant impact on the projects you worked on.

        Hope you get something exciting and more to learn.`,
      author: "Deepika Nehra",
      role: "Cloud Architect",
      company: "Tata Consultancy Services",
    },
    {
      award: true,
      quote: `In appreciation of your outstanding contribution to the organisation, you
        are awarded the On the Spot (Team) Award. You are an inspiring role model to your
        colleagues. Thank you for your dedication and commitment.`,
      author: "On the Spot (Team) Award",
      role: "TCS Gems · Aug 2024",
      company: "Signed by Milind Lakkad, EVP & Global Head, HR",
      image: "assets/img/on-the-spot-award.png",
      alt: "TCS Gems certificate awarding M Yamini the On the Spot (Team) Award, dated 19 August 2024.",
    },
    {
      award: true,
      quote: `Awarded for securing 1st place in The Security Hackathon 2022, conducted by
        CloudThat in partnership with Microsoft Azure.`,
      author: "The Security Hackathon 2022 — 1st Place",
      role: "Jan 2023",
      company: "CloudThat × Microsoft Azure",
      image: "assets/img/security-hackathon.png",
      alt: "CloudThat and Microsoft Azure certificate awarding M Yamini first place in The Security Hackathon 2022, dated 13 January 2023.",
    },
    {
      award: true,
      quote: `Ranked 1,392nd out of 8,484 competitors nationally — the 84th percentile —
        scoring 1,360 of 3,000 points. Strongest categories were Network Traffic Analysis
        (94th percentile), Log Analysis (88th), and Enumeration & Exploitation (85th).`,
      author: "NCL Fall 2024 — Individual Game",
      role: "84th percentile · 1,392 of 8,484",
      company: "National Cyber League · Cyber Skyline",
      image: "assets/img/ncl-individual-certificate.png",
      alt: "National Cyber League certificate of participation for Yamini Mandadi, NCL Fall 2024 Individual Game, signed by NCL Commissioner Dr. David Zeichick.",
      links: [
        { label: "Open scouting report", url: "assets/docs/ncl-fall-2024-individual-scouting-report.pdf" },
      ],
    },
    {
      award: true,
      quote: `Ranked 574th out of 4,893 nationally — the 89th percentile — scoring 1,065
        of 3,100 points. Strongest categories were Log Analysis (93rd percentile),
        Scanning & Reconnaissance (91st), and Open Source Intelligence (90th).`,
      author: "NCL Fall 2024 — Team Game",
      role: "89th percentile · 574 of 4,893",
      company: "National Cyber League · Cyber Skyline",
      image: "assets/img/ncl-team-certificate.png",
      alt: "National Cyber League certificate of participation for Yamini Mandadi, NCL Fall 2024 Team Game, signed by NCL Commissioner Dr. David Zeichick.",
      links: [
        { label: "Open scouting report", url: "assets/docs/ncl-fall-2024-team-scouting-report.pdf" },
      ],
    },
    {
      note: true,
      quote: `Congratulations on your outstanding work. We are continually impressed by
        the results you produce! You play a crucial role in our team's and the company's
        success. Thank you for doing your best every day!`,
      author: "Sreejith R.",
      role: "Appreciation · Feb 2023",
      company: "Tata Consultancy Services",
      image: "assets/img/appreciation.png",
      alt: "TCS Gems appreciation note addressed to M Yamini from Sreejith R., dated 17 February 2023.",
    },
  ],
};
