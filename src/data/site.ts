export const site = {
  fullName: 'PITO TILARI Essoron Julien',
  shortName: 'Julien Pito',
  brand: 'Julien Codeur',
  role: 'Développeur web & mobile',
  tagline:
    'Étudiant en licence informatique à Lomé — je conçois des applications claires, performantes et utiles.',
  location: 'Lomé, Togo',
  email: 'eymardjulien58@gmail.com',
  phone: '+228 98 79 58 85',
  /** URL publique du site (OG / canonical). À renseigner après déploiement. */
  siteUrl: '',
  about: {
    title: 'À propos',
    body: "Passionné par le développement web et mobile, je mets rigueur et curiosité au service de projets concrets. Étudiant en licence informatique, spécialisé dans le développement d'applications, j'aime résoudre des problèmes techniques et livrer des interfaces lisibles.",
  },
  socials: [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/Julien-Codeur',
      label: 'GitHub',
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/julien-eymard-6b5b192b2',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-twitter',
      url: 'https://x.com/juli68803',
      label: 'X',
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/juliencodeur',
      label: 'Instagram',
    },
  ],
} as const;

export const navLinks = [
  { href: '#about', text: 'À propos' },
  { href: '#works', text: 'Projets' },
  { href: '#contact', text: 'Contact' },
] as const;
