/**
 * All editable portfolio content lives here.
 * Update links, experience entries, and education details in this one file.
 */

export const profile = {
  name: "Mehak Zahra",
  tagline: "Bioinformatics • AI/ML • Computational Biology",
  // Replace the placeholders below with real links when available.
  links: {
    github: "https://github.com/mehak-zahra933",
    linkedin: "https://linkedin.com/in/mehak-zahra933",
    email: "mailto:mehak.zahra933@gmail.com",
  },
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  {
    title: "Bioinformatics",
    body: "Analyzing biological data using computational approaches.",
  },
  {
    title: "AI & Machine Learning",
    body: "Applying machine learning techniques to biological and healthcare problems.",
  },
  {
    title: "Programming",
    body: "Python-based data processing, analysis, and computational workflows.",
  },
  {
    title: "Problem Solving",
    body: "Building practical and user-focused solutions from complex biological datasets.",
  },
];

export const interests = [
  "Bioinformatics",
  "Computational Biology",
  "Biological Data Analysis",
  "Artificial Intelligence",
  "Machine Learning",
  "Genomics",
  "Sequence Analysis",
];

export const skillGroups = [
  {
    title: "Programming & Data",
    items: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
  },
  {
    title: "Bioinformatics",
    items: [
      "Sequence Analysis",
      "BLAST",
      "Variant Analysis",
      "FASTA",
      "DNA/RNA Analysis",
      "Gene & Protein Analysis",
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Machine Learning",
      "Random Forest",
      "Classification",
      "Data Preprocessing",
      "Model Evaluation",
      "AI-based Prediction",
    ],
  },
  {
    title: "Computational Biology",
    items: [
      "Protein Structure Analysis",
      "Protein Modeling",
      "Molecular Biology",
      "Gene Expression Analysis",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Git/GitHub", "Linux/Ubuntu", "VS Code", "Figma", "Jupyter"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "AI Fever Classifier",
    category: "AI/ML • Healthcare • Python",
    description:
      "An AI-based system designed to assist with early risk assessment by analyzing symptoms associated with conditions such as dengue, malaria, typhoid, viral fever, and heat stroke.",
    tech: ["Python", "Machine Learning", "Random Forest", "Data Analysis"],
  },
  {
    title: "Sequence Analysis & Translation GUI",
    category: "Bioinformatics • Python • GUI",
    description:
      "A Python-based graphical application for DNA/RNA sequence analysis, including sequence conversion, reverse complement, codon analysis, six-frame translation, and ORF detection.",
    tech: ["Python", "Tkinter", "Bioinformatics"],
  },
  {
    title: "Fake Job Posting Detection",
    category: "Machine Learning • NLP",
    description:
      "A machine learning project focused on identifying potentially fraudulent job postings using natural language processing and classification techniques.",
    tech: ["Python", "NLP", "Machine Learning", "Pandas", "Scikit-learn"],
  },
  {
    title: "Cancer Prediction / OncoPredict",
    category: "AI/ML • Healthcare",
    description:
      "A predictive system concept exploring how machine learning can assist in cancer risk/stage prediction using biological and clinical data.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Gene & Variant Analysis",
    category: "Bioinformatics • Genomics",
    description:
      "Projects involving gene selection, sequence analysis, genetic variants, mutation analysis, and biological interpretation.",
    tech: ["BLAST", "VEP", "Python", "Bioinformatics Tools"],
  },
];

/** Add real roles here as they become available. */
export const experiences = [
  {
    role: "Role / Internship",
    organization: "Organization name",
    period: "Start date — End date",
    description:
      "Short description of responsibilities and contributions. Replace this placeholder with details once the role is confirmed.",
  },
];

export const education = {
  degree: "BS Bioinformatics",
  institution: "COMSATS University Islamabad",
  semester: "Current semester: —", // editable
  coursework: [
    "Add relevant coursework",
    "e.g. Molecular Biology",
    "e.g. Programming Fundamentals",
  ],
  academicInterests: [
    "Genomics",
    "Sequence Analysis",
    "Machine Learning in Biology",
  ],
};

export const toolkit = [
  "BLAST",
  "FastQC",
  "Trimmomatic",
  "GATK",
  "VEP",
  "MEGA",
  "RNAfold",
  "SWISS-MODEL",
  "AlphaFold",
  "ProtParam",
  "PSIPRED",
  "Jupyter",
  "Python",
  "Linux",
];

export const services = [
  {
    title: "Biological Data Analysis",
    body: "Processing and interpreting biological datasets.",
  },
  {
    title: "Sequence & Variant Analysis",
    body: "Working with DNA/RNA sequences, genes, mutations, and variants.",
  },
  {
    title: "AI & Machine Learning",
    body: "Developing predictive models for biological and healthcare applications.",
  },
  {
    title: "Computational Solutions",
    body: "Creating practical Python-based tools for biological research.",
  },
];
