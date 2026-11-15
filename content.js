// Edit this file only. All page text lives here.
// Resume/about taken from CV (Nov 2026).
window.CONTENT = {
  name: "Jonathan Beaulieu-Emond",
  role: "Applied Scientist · Machine Learning Engineer",
  tagline: "Personalization, retrieval and recommendation at work; self-hosted apps, RL and computer vision on the side. Montreal, QC.",
  about: [
    "I am an Applied Scientist with an M.Sc. in Computer Science (Machine Learning) from Mila. My work centers on query understanding, vector retrieval and recommendation models, and on getting recent research to hold up under production constraints.",
    "Outside work I build things end to end: a self-hosted finance app, a recommendation service that plugs into Jellyfin, a climbing-gym mobile app, and reinforcement-learning experiments."
  ],
  experience: [
    {
      title: "Applied Scientist",
      org: "Coveo, Montreal",
      dates: "Sep 2023 – Present",
      bullets: [
        "Building a product query understanding system: fine-tuned models for few-shot domain adaptation that parse search queries into structured output via joint NER and intent classification.",
        "Led vector retrieval with two-tower embeddings, improving relevance and personalization on sparse and long-tail queries beyond lexical search.",
        "Reduced training cost and online serving memory of deep recommendation models while keeping quality guardrails; improved generalization across heterogeneous clients.",
        "Built a standardized offline evaluation framework (splits, baselines, automated metrics reports) for reliable model comparison."
      ]
    },
    {
      title: "Applied Scientist",
      org: "CIUSSS CCSMTL, Montreal",
      dates: "May 2022 – Jan 2023",
      bullets: [
        "Implemented weakly supervised pathology detection on chest X-rays in PyTorch and set up the core training pipelines.",
        "Managed dataset and metadata pipelines in MongoDB; validated model explanations with Grad-CAM against clinical expectations."
      ]
    },
    {
      title: "Data Analysis / Software Intern",
      org: "Canadian Space Agency",
      dates: "Jul 2020 – Dec 2020",
      bullets: [
        "Built Python data pipelines and REST APIs over SQL; contributed to a CKAN data platform and satellite data dashboards (Dash, Plotly, Flask)."
      ]
    }
  ],
  education: [
    { title: "M.Sc. Computer Science, Machine Learning", org: "Mila & Université de Montréal", dates: "2022 – 2024", bullets: [] },
    { title: "B.Sc. Physics", org: "Université de Montréal", dates: "2017 – 2021", bullets: [] }
  ],
  skills: {
    "ML & Personalization": ["Fine-tuning (SFT, PEFT)", "Domain adaptation", "Cold-start", "Candidate generation & reranking"],
    "Query & Retrieval": ["Query understanding (NER)", "Two-tower embeddings", "Vector search", "Offline evaluation"],
    "LLMs & Evaluation": ["LLM-as-a-judge", "Synthetic data", "Data augmentation"],
    "Tech": ["Python", "PyTorch", "C++", "TensorFlow", "SQL", "MongoDB", "Docker", "Git"]
  },
  // earlier: true => compact card under "Earlier work".
  // logo: optional logo path shown on the card (contained, with padding).
  // featured: true => large card at top. image: optional screenshot path.
  // status: small badge text. links: add { label, url } once a repo/demo is public;
  // the badge hides itself when status is empty. Checked 2026-11-14: all four repos private/unpublished.
  projects: [
    {
      name: "Cairn",
      status: "Live · code private",
      featured: true,
      logo: "images/cairn-logo.svg",
      description: "Self-hosted, single-user personal finance app, an alternative to Monarch Money. Runs on a home server behind a Caddy reverse proxy with its own local CA, nightly encrypted backups and a background worker.",
      tags: ["Next.js 15", "TypeScript", "Postgres", "Drizzle", "Docker", "Caddy"],
      links: [{ label: "Visit live app", url: "https://budget.jbytes.synology.me" }]
    },
    {
      name: "Movie Recommendations",
      status: "Live · code private",
      featured: true,
      logo: "images/movie-recs-logo.svg",
      description: "Movie and TV recommendation service with a cascading fallback of models (collaborative filtering, then content-based, then popularity). A Jellyfin plugin reports watch events and fetches recommendations from the API.",
      tags: ["Python", "FastAPI", "Recommender systems", "Jellyfin", "OpenTelemetry"],
      links: [{ label: "Visit live app", url: "https://recs.jbytes.synology.me" }]
    },
    {
      name: "Rock Climbing Gym App",
      status: "Private repo · pre-beta",
      featured: false,
      logo: "images/climbing-logo.webp",
      description: "Mobile app where gym owners map walls and routes from photos and climbers browse an interactive gym map. Supabase backend with Row-Level Security; EAS preview builds for beta testers.",
      tags: ["Expo", "React Native", "TypeScript", "Supabase"],
      links: []
    },
    {
      name: "CARLA Driving RL",
      status: "Local only · not published",
      featured: false,
      logo: "images/carla-rl-logo.svg",
      description: "Reinforcement learning agent that follows lane routes in the CARLA simulator from a front camera, trained with PPO on Ray RLlib. Custom reward, pluggable image encoders and a simulator-free test suite.",
      tags: ["Python", "Ray RLlib", "PPO", "CARLA", "PyTorch"],
      links: []
    },
    {
      name: "RADIA: Radiologist Assistant (CheXpert)",
      status: "Public repo · CIUSSS CCSMTL internship",
      featured: false,
      image: "",
      description: "AI assistant for radiologists from my CIUSSS CCSMTL internship: weakly supervised pathology detection on chest X-rays (CheXpert), Grad-CAM explanations and conditional data augmentation for scarce medical data. Meant to support radiologists, not replace them.",
      tags: ["PyTorch", "CheXpert", "Medical imaging", "Weak supervision", "Grad-CAM"],
      links: [
        { label: "Code", url: "https://github.com/J-bytes/RADIA-Logique" },
        { label: "Paper reference", url: "https://www.overleaf.com/read/pnkdtrhqwxms#9cddfb" }
      ]
    },
    {
      name: "Gravitational Lensing Reconstruction (HPU-Net)",
      status: "Research · write-up available",
      featured: false,
      image: "",
      description: "Deep learning architectures, including HPU-Net, applied to astronomical image reconstruction of gravitational lenses.",
      tags: ["PyTorch", "HPU-Net", "Astronomy", "Image reconstruction"],
      links: [{ label: "Project document", url: "https://www.overleaf.com/read/fjhyrtzfrmfz#ebb2bb" }]
    },
    {
      name: "CKAN Data Platform & SciSat Dashboard",
      earlier: true,
      status: "Canadian Space Agency · public",
      featured: false,
      image: "",
      description: "Open-data platform and satellite telemetry dashboard built during my internship at the Canadian Space Agency.",
      tags: ["Python", "CKAN", "Dash", "Plotly", "Flask"],
      links: [
        { label: "Platform", url: "https://donnees-data.asc-csa.gc.ca/fr/dataset?science_admin=True" },
        { label: "Dashboard", url: "https://donnees-data.asc-csa.gc.ca:8888/scisat/" }
      ]
    },
    {
      name: "Query Parsing with RL",
      status: "Public repo · GPU runs pending",
      featured: false,
      image: "",
      description: "SFT, then DPO, then GRPO on Qwen2.5-0.5B to turn shopping queries into structured attributes. GRPO is written from scratch in plain PyTorch and checked numerically against TRL.",
      tags: ["Python", "PyTorch", "GRPO", "DPO", "LLM fine-tuning"],
      links: [{ label: "Code", url: "https://github.com/J-bytes/query-parsing-rl" }]
    },
    {
      name: "Animal Identification (ANDI)",
      earlier: true,
      status: "Public repo · university project",
      featured: false,
      image: "",
      description: "Team project on the Caltech Camera Traps dataset: trained VGG19, AlexNet, ResNeXt50, EfficientDet and YOLOv5 for animal classification and detection.",
      tags: ["Python", "PyTorch", "Computer vision", "YOLOv5"],
      links: [{ label: "Code", url: "https://github.com/J-bytes/IFT6759_Deep_learning" }]
    },
    {
      name: "Epidemic Simulation on Small-World Networks",
      earlier: true,
      status: "Public repo · physics thesis project",
      featured: false,
      image: "",
      description: "Interactive visualization of epidemic spread on small-world graphs, built for my physics bachelor's final project under Prof. Paul Charbonneau at Université de Montréal.",
      tags: ["Python", "Simulation", "Graph theory", "Dash"],
      links: [{ label: "Code", url: "https://github.com/J-bytes/Epidemiologic-simulation" }]
    },
    {
      name: "Adversarial Attacks on CIFAR-100",
      earlier: true,
      status: "Public repo · course project (IFT6164)",
      featured: false,
      image: "",
      description: "Course project on adversarial learning: targeted L-infinity PGD attacks against CIFAR-100 models with the robustness library, plus experiments with a small Vision Transformer.",
      tags: ["Python", "PyTorch", "Adversarial robustness", "ViT"],
      links: [{ label: "Code", url: "https://github.com/J-bytes/IFT6164_Adversarial_learning" }]
    },
    {
      name: "Kaggle arXiv Paper Classification",
      earlier: true,
      status: "Public repo · course competition (IFT3395)",
      featured: false,
      image: "",
      description: "Text classification competition: multinomial naive Bayes written from scratch reached 0.798 on the Kaggle leaderboard, compared against SVM and TensorFlow baselines.",
      tags: ["Python", "Naive Bayes", "scikit-learn", "TensorFlow"],
      links: [{ label: "Code", url: "https://github.com/J-bytes/competition3395" }]
    },
    {
      name: "Physics Simulations",
      earlier: true,
      status: "Public repos · physics coursework",
      featured: false,
      image: "",
      description: "Numerical projects from my physics degree: an Ising-model web app, Lax-Wendroff and leapfrog advection-diffusion solvers, and a neural network written in pure Python.",
      tags: ["Python", "Numerical methods", "Numba", "Dash"],
      links: [
        { label: "Ising model", url: "https://github.com/J-bytes/Ising_model" },
        { label: "Advection-diffusion", url: "https://github.com/J-bytes/Diffusion-Advection" },
        { label: "Pure-Python NN", url: "https://github.com/J-bytes/neural-network-in-pure-python--lab6-phy3075-" }
      ]
    },
    {
      name: "PyTorch Template",
      earlier: true,
      status: "Public repo",
      featured: false,
      image: "",
      description: "Reusable starting point for PyTorch projects: Timm models, Weights & Biases logging, checkpointing and training/evaluation for classification and segmentation.",
      tags: ["Python", "PyTorch", "Timm", "W&B"],
      links: [{ label: "Code", url: "https://github.com/J-bytes/PytorchTemplate" }]
    },
    {
      name: "NASA Space Apps Hackathon",
      earlier: true,
      status: "Public repo · 2020",
      featured: false,
      image: "",
      description: "Code from a 30–31 May 2020 NASA hackathon project.",
      tags: ["Hackathon", "Web"],
      links: [{ label: "Code", url: "https://github.com/J-bytes/La-Bande-Interdite" }]
    }
  ],
  contact: [
    { label: "Email", url: "mailto:jonathan.beaumond@gmail.com" },
    { label: "GitHub", url: "https://github.com/J-bytes" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jonathan-beaulieu-emond-298513159/" }
  ]
};
