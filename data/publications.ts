export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  paper?: string;
  code?: string;
  project?: string;
  bibtex?: string;
  selected?: boolean;
};

export const publications: Publication[] = [
  {
    title: "WhisperBuds",
    authors: ["Yingtian Shi et al."],
    venue: "Research Project",
    year: 2026,
    project: "/projects/whisperbuds",
    selected: true,
    bibtex: "@misc{whisperbuds, title={WhisperBuds}}"
  },
  {
    title: "GenieWizard",
    authors: ["Yingtian Shi et al."],
    venue: "CHI",
    year: 2025,
    paper: "https://dl.acm.org/doi/full/10.1145/3706598.3714327",
    project: "/projects/geniewizard",
    selected: true
  },
  {
    title: "COMETIC",
    authors: ["Yingtian Shi et al."],
    venue: "CHI",
    year: 2025,
    paper: "https://dl.acm.org/doi/full/10.1145/3706598.3713936",
    project: "/projects/cometic",
    selected: true
  },
  {
    title: "LLMArtini",
    authors: ["Yingtian Shi et al."],
    venue: "arXiv",
    year: 2025,
    paper: "https://arxiv.org/abs/2510.19252",
    project: "/projects/llmartini",
    selected: true
  },
  {
    title: "CasualGaze",
    authors: ["Yingtian Shi et al."],
    venue: "arXiv",
    year: 2024,
    paper: "https://arxiv.org/abs/2408.12710",
    project: "/projects/casualgaze",
    selected: true
  },
  {
    title: "ReactGenie",
    authors: ["Yingtian Shi et al."],
    venue: "CHI",
    year: 2024,
    paper: "https://doi.org/10.48550/arXiv.2306.09649",
    project: "/projects/reactgenie"
  },
  {
    title: "CalibRead",
    authors: ["Yingtian Shi et al."],
    venue: "IMWUT",
    year: 2024,
    paper: "https://dl.acm.org/doi/abs/10.1145/3699737",
    project: "/projects/calibread"
  },
  {
    title: "AwareAuto",
    authors: ["Yingtian Shi et al."],
    venue: "arXiv",
    year: 2024,
    paper: "https://arxiv.org/abs/2408.12687",
    project: "/projects/awareauto"
  },
  {
    title: "Smart Home In-situ Programming",
    authors: ["Yingtian Shi et al."],
    venue: "IMWUT",
    year: 2023,
    paper: "https://dl.acm.org/doi/10.1145/3596254",
    project: "/projects/smart-home-in-situ-programming"
  },
  {
    title: "ConeSpeech",
    authors: ["Yingtian Shi et al."],
    venue: "IEEE VR",
    year: 2023,
    paper: "https://ieeexplore.ieee.org/document/10049667",
    project: "/projects/conespeech"
  },
  {
    title: "SonarWatch",
    authors: ["Yingtian Shi et al."],
    venue: "arXiv",
    year: 2023,
    paper: "https://doi.org/10.48550/arXiv.2306.09649",
    project: "/projects/sonarwatch"
  },
  {
    title: "FaceSight",
    authors: ["Yingtian Shi et al."],
    venue: "CHI",
    year: 2021,
    paper: "https://dl.acm.org/doi/10.1145/3411764.3445484",
    project: "/projects/facesight"
  },
  {
    title: "HeadCross",
    authors: ["Yingtian Shi et al."],
    venue: "IMWUT",
    year: 2020,
    paper: "https://dl.acm.org/doi/abs/10.1145/3380983",
    project: "/projects/headcross"
  },
  {
    title: "PrivateTalk",
    authors: ["Yingtian Shi et al."],
    venue: "UIST",
    year: 2019,
    paper: "https://dl.acm.org/doi/10.1145/3332165.3347950",
    project: "/projects/privatetalk"
  }
];
