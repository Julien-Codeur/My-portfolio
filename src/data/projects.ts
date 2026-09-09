export type Project = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'Démo e-commerce',
    summary:
      "Boutique open-source moderne : catalogue, panier et parcours d'achat côté client.",
    problem:
      'Illustrer un flux e-commerce complet sans complexité inutile, pour montrer maîtrise React/TypeScript.',
    solution:
      "SPA responsive avec composants réutilisables, gestion d'état du panier et UI orientée conversion.",
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    image: '/images/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/Julien-Codeur',
  },
  {
    id: 'chatbot',
    title: 'Chatbot intelligent',
    summary:
      'Interface de conversation branchée sur une API generative pour des réponses fluides.',
    problem:
      "Proposer une démo interactive d'assistant conversationnel facilement déployable.",
    solution:
      "Front Next.js + intégration API Gemini, avec une UX claire pour l'historique des messages.",
    tech: ['React', 'Next.js', 'API Gemini', 'Tailwind CSS'],
    image: '/images/projects/chatbot.jpg',
    githubUrl: 'https://github.com/Julien-Codeur',
  },
  {
    id: 'gym-app',
    title: 'Gestion de salle de sport',
    summary:
      'Application desktop de gestion : membres, abonnements et indicateurs pour le gérant.',
    problem:
      'Remplacer un suivi papier par un outil local simple pour une salle de sport.',
    solution: 'App Java/Swing connectée à MySQL avec tableau de bord et opérations CRUD.',
    tech: ['Java', 'Swing', 'MySQL'],
    image: '/images/projects/gym-app.jpg',
    githubUrl: 'https://github.com/Julien-Codeur',
  },
];
