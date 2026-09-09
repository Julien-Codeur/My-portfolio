export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'HTML / CSS'],
  },
  {
    category: 'Mobile',
    items: ['Flutter'],
  },
  {
    category: 'Backend & data',
    items: ['Node.js', 'Python', 'MySQL'],
  },
  {
    category: 'Outils',
    items: ['Git', 'Vite', 'Figma'],
  },
];
