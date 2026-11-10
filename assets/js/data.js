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
    title: "Software Engineer | Backend & Cloud Infrastructure | AI/ML Integration",
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
    summary: `Cloud/DevOps engineer with 4+ years of professional experience in Microsoft Azure infrastructure, Terraform-based infrastructure as code, CI/CD automation, cloud security, and production reliability. Experienced in building reusable Terraform modules, automating deployments with Jenkins and GitHub Actions, implementing Azure RBAC and Key Vault security controls, and monitoring production environments with Azure Monitor, Log Analytics, and Application Insights. Skilled in Python, PowerShell, Bash, Docker, Kubernetes, and incident troubleshooting, with a focus on secure, repeatable deployments, high availability, and operational efficiency.`,

    // Tiles size to their content, so any count from 2 to 4 looks right.
    // Delete the whole array (stats: [],) to hide the strip entirely.
    stats: [
      { value: "4+", label: "Years in cloud" },
      { value: "3", label: "Azure certs" },
    ],
  },

 
  experience: [
    {
      role: "Cloud Platform Engineer",
      company: "Community Dreams Foundation",
      period: "Aug 2026 — Present",
      current: true,
      stack: ["Azure Logic Apps", "Azure Event Hubs", "Azure Data Factory", "AKS", "GitHub Actions", "Argo CD"],
      points: [
        "Developed event-driven integrations with Azure Logic Apps and Azure Event Hubs to automate workflows, REST API integrations, and data ingestion across internal systems.",
        "Implemented a secure end-to-end CI/CD pipeline for Azure Kubernetes Service using GitHub Actions and Argo CD, integrating code scanning, branch protection, Azure Workload Identity Federation, and Helm-based deployments from Azure Container Registry.",
        "Developed and orchestrated Azure Data Factory pipelines to transfer product data between Azure SQL Database and Azure Blob Storage, configuring linked services, datasets, copy activities, and execution dependencies.",
        "Automated AWS infrastructure using Terraform and CI/CD pipelines with Jenkins and Git to streamline infrastructure deployments, validation, and release workflows.",
        "Integrated CloudWatch and Sumo Logic alerts with Python AWS Lambda to detect application issues, trigger remediation, and reduce manual intervention.",
      ],
    },
    {
      role: "Data Analyst",
      company: "California State University, Los Angeles",
      period: "Aug 2025 — May 2026",
      stack: ["Python", "Jupyter Notebook", "EDA", "Data Visualization", "Customer Analytics"],
      points: [
        "Analyzed customer purchasing patterns and buying behavior using Python in Jupyter Notebook to uncover trends in transactions, customer segments, and product demand.",
        "Cleaned, processed, and explored large customer datasets through data preprocessing and exploratory analysis to improve data quality and identify key sales drivers.",
        "Built visualizations and business-focused analyses to highlight customer segments, product affinity, and purchasing trends supporting marketing and inventory decisions.",
        "Derived actionable insights on demand forecasting, customer retention, and revenue opportunities for decision support and business strategy.",
      ],
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services",
      period: "Jul 2023 — Sep 2024",
      stack: ["Terraform", "Jenkins", "Azure Firewall", "Grafana", "Azure SQL"],
      points: [
        "Developed reusable Terraform modules with remote state and environment-specific configuration for Dev, QA/Staging, and Production, standardizing configuration management and enabling consistent deployments.",
        "Built and maintained DevSecOps CI/CD pipelines with Jenkins, Git, and Azure CLI, integrating automated testing, secret scanning, Checkov IaC checks, Terraform validation, and deployment approvals.",
        "Implemented secure Azure networking using Private Endpoints, Private DNS, hub-and-spoke VNets, subnet segmentation, VNet peering, Azure Firewall, NSGs, Application Gateway, and Load Balancer.",
        "Administered Azure SQL workloads including backup/restore, backup validation, long-term retention, and disaster recovery planning aligned to RPO/RTO requirements.",
        "Monitored Azure environments with Azure Monitor, Log Analytics, Application Insights, Prometheus, and Grafana, creating alerts and dashboards to support root-cause analysis.",
      ],
    },
    {
      role: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      period: "Jul 2022 — Jul 2023",
      stack: ["Microsoft Entra ID", "Zero Trust", "Key Vault", "Cost Management"],
      points: [
        "Optimized Azure infrastructure costs using Azure Cost Management, resource rightsizing, App Service Plan optimization, and rehosting strategies.",
        "Supported workload migration from Azure App Service Plan to the Consumption Plan, validating compatibility, scalability, networking, security, and deployment requirements.",
        "Implemented Zero Trust controls using Microsoft Entra ID, Conditional Access, MFA, PIM, RBAC, Managed Identities, and Service Principals to enforce least-privilege access.",
        "Managed Azure Key Vault and the SSL/TLS certificate lifecycle to secure application secrets and certificates.",
        "Supported Azure security posture and governance using Microsoft Defender for Cloud, Azure Policy, NSGs, and firewall controls.",
      ],
    },
    {
      role: "Assistant System Engineer Trainee",
      company: "Tata Consultancy Services",
      period: "Jul 2021 — Jul 2022",
      stack: ["ARM Templates", "Active Directory", "AWS IAM", "ITIL"],
      points: [
        "Automated Azure infrastructure deployments using ARM Templates, establishing repeatable deployment patterns.",
        "Administered Active Directory, DNS, Microsoft Entra ID, and AWS IAM to support identity, authentication, and authorization across hybrid and multi-cloud environments.",
        "Implemented security controls including RBAC, Conditional Access, MFA, NSGs, firewall rules, Azure Policy, and storage account network restrictions.",
        "Managed ITIL-based incidents, service requests, changes, and SLA requirements to support production reliability.",
      ],
    },
  ],


  projects: [
    {
      title: "AI-Native RAG Assistant",
      tag: "AI/ML",
      featured: true,
      blurb: `A Retrieval-Augmented Generation application built in Python using Llama 3.2, LangChain, and ChromaDB for semantic document retrieval and grounded answers. The system serves both a Gradio UI and a FastAPI API, with prompt design, evaluation, and safety guardrails included to keep responses accurate and controlled.`,
      highlights: [
        "Applied prompt design with system prompts, few-shot examples, citation grounding, and retrieval-aware evaluation",
        "Scored retrieval precision@k, faithfulness, and latency on a golden Q&A set while A/B testing prompt variants",
        "Added safety guardrails for PII redaction, prompt injection filtering, and out-of-scope refusals",
      ],
      stack: ["Python", "Llama 3.2", "LangChain", "ChromaDB", "FastAPI", "Docker", "RAG", "LLM Evaluation"],
      repo: "https://github.com/Yaminiiii7/AI-Native-RAG-Assistant",
    },
    {
      title: "Log Analytics & Incident Automation Platform",
      tag: "Cloud & Data",
      featured: true,
      blurb: `A distributed logging platform built with Node.js microservices, Kafka, Elasticsearch, and PostgreSQL to ingest, index, query, and analyze logs at scale. It includes search, aggregation, performance monitoring, and an alerting workflow that creates incidents in ServiceNow when error-rate spikes occur.`,
      highlights: [
        "Used Kafka event streaming to buffer bursts and decouple producers from log indexers",
        "Designed RESTful API endpoints for query, filtering, aggregation, and log analytics workflows",
        "Ran traffic capture and replay using k6 to identify latency bottlenecks and optimize p95 latency",
      ],
      stack: ["Node.js", "Kafka", "Elasticsearch", "PostgreSQL", "Express.js", "REST API", "k6"],
      repo: "https://github.com/Yaminiiii7/Log-Analytics-Incident-Automation",
    },
    {
      title: "Automated Monitoring & Self-Healing Infrastructure",
      tag: "Cloud & DevOps",
      featured: true,
      blurb: `An automated incident-response pipeline that detects performance degradation in web applications, executes a remediation runbook, and notifies stakeholders. Sumo Logic watches logs, an AWS Lambda recovers the failing EC2 instance, and SNS closes the loop to reduce manual intervention.`,
      highlights: [
        "Implemented a full detection → remediation → notification flow for slow API endpoints",
        "Defined the entire stack in Terraform for VPC, EC2, IAM, Lambda, and SNS components",
        "Improved infrastructure reliability through automation and reduced time-to-recovery",
      ],
      stack: ["Terraform", "AWS", "Lambda", "EC2", "SNS", "IAM", "Python", "Boto3", "Sumo Logic"],
      repo: "https://github.com/Yaminiiii7/Automated-Monitoring-and-Self-Healing-Infrastructure-using-Sumo-Logic-and-AWS",
    },
    {
      title: "Network Scanning & Exploitation Assessment",
      tag: "Security",
      blurb: `A manual and automated network security assessment built in a virtualized lab environment. The project covers host discovery, enumeration, vulnerability validation, and controlled exploitation, supported by a structured report with risk categorization and remediation guidance.`,
      highlights: [
        "Built a segmented VMware lab to validate findings against a known-good target environment",
        "Used Nmap, Wireshark, Nessus, and Metasploit to assess service exposure and validate vulnerabilities",
        "Documented CVSS-based findings with impact, evidence, and recommended remediation",
      ],
      stack: ["VMware", "Nmap", "Zenmap", "Wireshark", "Metasploit", "Nessus", "Snort", "CVSS"],
      repo: "https://github.com/Yaminiiii7/NetworkScanning_Exploitation",
    },
    {
      title: "Data Analytics: Customer Purchasing Patterns",
      tag: "Data Analytics",
      blurb: `An end-to-end retail analytics project that analyzed more than 264K transactions across 272 stores to uncover customer purchasing trends, demographic segments, and product affinity patterns. The work translates raw transaction data into business-ready recommendations.`,
      highlights: [
        "Processed high-volume retail data using Python and applied EDA to uncover purchase drivers and segment behavior",
        "Used Pandas, NumPy, Matplotlib, and Seaborn to surface customer retention and demand insights",
        "Translated findings to product placement and promotional strategy recommendations",
      ],
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis", "Retail Analytics"],
      repo: "https://github.com/Yaminiiii7/DataAnalytics-customerPurchasingPatterns",
    },
    {
      title: "Retrieval-Augmented Generation with Llama 3",
      tag: "AI/ML",
      blurb: `A local RAG application that answers questions about any web page. It loads content, splits it into chunks, embeds it into a vector store, and grounds an open-source Llama model against the retrieved context through a Gradio UI and local container workflow.`,
      highlights: [
        "Built a grounded question-answering workflow using LangChain and ChromaDB vector search",
        "Ran the system locally with Ollama and containerized it for deployment workflows",
        "Used retrieval context to reduce hallucination and improve answer relevance",
      ],
      stack: ["Python", "Llama 3.2", "Ollama", "LangChain", "ChromaDB", "Gradio", "Docker Compose"],
      repo: "https://github.com/Yaminiiii7/Retrieval-Augmented-Generation-with-Llama-3-and-Vector-Search",
    },
  ],

  /* ----------------------------------------------------------------- SKILLS */
  skills: [
    {
      group: "Cloud, Containers & CI/CD",
      items: ["Azure", "AWS", "Terraform", "ARM Templates", "Packer", "Docker", "Docker Compose",
              "Kubernetes", "AKS", "GitHub Actions", "Jenkins", "Git", "Bitbucket", "Azure CLI"],
    },
    {
      group: "Security & Identity",
      items: ["Azure Firewall", "NSGs", "Azure Key Vault", "Microsoft Entra ID", "RBAC",
              "Managed Identities", "Service Principals", "Conditional Access", "MFA", "PIM",
              "Zero Trust", "SSL/TLS", "Microsoft Defender for Cloud"],
    },
    {
      group: "Data & Backend",
      items: ["Python", "JavaScript", "Node.js", "Express.js", "React", "SQL", "PostgreSQL",
              "MySQL", "Azure SQL", "MongoDB", "Elasticsearch", "REST APIs", "Microservices"],
    },
    {
      group: "AI/ML & LLMs",
      items: ["LLMs", "Llama 3.2", "RAG", "LangChain", "Prompt Design", "LLM Evaluation",
              "AI Safety Guardrails", "Vector Search", "ChromaDB", "Machine Learning",
              "Hugging Face Transformers", "PyTorch", "Fine-Tuning"],
    },
    {
      group: "Observability & Reliability",
      items: ["Azure Monitor", "Log Analytics", "Application Insights", "Prometheus", "Grafana",
              "Alertmanager", "Distributed Logging", "Tracing", "Root-Cause Analysis", "Runbooks"],
    },
    {
      group: "Security Assessment & Tools",
      items: ["Nmap", "Wireshark", "Nessus", "Metasploit", "CVSS", "Threat Analysis",
              "Vulnerability Assessment", "Network Security Testing", "Kali Linux"],
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

  /* ------------------------------------------------------- CERTIFICATIONS -- */
  // Formal certifications only. Awards and competition results live in the
  // `awards` array below; colleague feedback lives in `testimonials`.
  //
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
  ],

  /* --------------------------------------------------------------- AWARDS -- */
  // Awards, competition results, and citations. These use the same card shape
  // as `testimonials` below, so each one can carry the citation text, a
  // certificate scan, and optional report links.
  //
  //   quote   the citation text. Omit it for an award with no wording —
  //           the card then shows just the trophy, name, and details.
  //   image   certificate scan; click opens it in the lightbox.
  //   links   optional [{label, url}] row, e.g. a scouting report PDF.
  awards: [
    {
      featured: true,
      quote: `Awarded for securing 1st place in The Security Hackathon 2022, conducted by
        CloudThat in partnership with Microsoft Azure.`,
      author: "The Security Hackathon 2022 — 1st Place",
      role: "Jan 2023",
      company: "CloudThat × Microsoft Azure",
      image: "assets/img/security-hackathon.png",
      alt: "CloudThat and Microsoft Azure certificate awarding M Yamini first place in The Security Hackathon 2022, dated 13 January 2023.",
    },
    {
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
      author: "Zolve Global Scholarship",
      role: "2024",
      company: "Zolve",
    },
    {
      author: "Special Recognition, Graduate Studies",
      role: "2026",
      company: "California State University, Los Angeles",
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
  // Feedback from people you've worked with — this section is only for things
  // a colleague actually said. Awards and competition results go in `awards`.
  //
  // `featured: true` makes the card span the full row with larger type.
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
