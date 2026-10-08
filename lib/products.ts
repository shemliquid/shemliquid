export type Product = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  href: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "lecturer-suite",
    name: "LecturerSuite",
    tagline: "Academic management without the manual work.",
    problem:
      "Repetitive academic administration scattered across files, sheets, and inboxes.",
    href: "/products/lecturer-suite",
    featured: true,
  },
  {
    slug: "driveclone-manager",
    name: "DriveClone Manager",
    tagline:
      "Turning repetitive USB copying into a fast, organized, and verifiable process.",
    problem:
      "Copying hundreds of USB drives required hundreds of repetitive manual steps.",
    href: "/products/driveclone-manager",
  },
  {
    slug: "examination-manager",
    name: "ExaminationManager",
    tagline: "Simplifying examination administration and reducing manual work.",
    problem:
      "Examination workflows slowed by paperwork, scattered records, and manual checks.",
    href: "/products/examination-manager",
  },
];

export const problemSolutionPairs = [
  { problem: "Repetitive work", solution: "Automation" },
  { problem: "Manual processes", solution: "Digital workflows" },
  { problem: "Scattered information", solution: "Centralized systems" },
  { problem: "Human error", solution: "Validation" },
  { problem: "Time-consuming tasks", solution: "Efficient processes" },
] as const;
