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
    title: "WhisperBuds: Context-Aware Voice Interaction for Everyday Wearables",
    authors: ["Yingtian Shi", "Collaborator A", "Collaborator B"],
    venue: "UIST",
    year: 2025,
    paper: "https://example.com/paper",
    code: "https://github.com/shiyt0313",
    project: "/projects/whisperbuds",
    selected: true
  },
  {
    title: "Smart Home HAR with Adaptive Multi-Modal Sensing",
    authors: ["Yingtian Shi", "Collaborator C"],
    venue: "IMWUT / UbiComp",
    year: 2024,
    paper: "https://example.com/paper",
    project: "/research",
    selected: true
  },
  {
    title: "Human-AI Collaboration in Situated Computing Systems",
    authors: ["Yingtian Shi", "Collaborator D"],
    venue: "CHI Workshop",
    year: 2024,
    paper: "https://example.com/paper",
    selected: true,
    bibtex: "@inproceedings{shi2024hai,...}"
  },
  {
    title: "Wearable Sensing for Health-Oriented Interaction Design",
    authors: ["Yingtian Shi", "Collaborator E"],
    venue: "IEEE Pervasive Computing",
    year: 2023,
    paper: "https://example.com/paper"
  }
];
