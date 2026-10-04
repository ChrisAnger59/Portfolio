const projects = [
  {
    id: "tomtroc",
    title: "TomTroc",
    description: {
      fr: "Plateforme d'échange de livres entre particuliers : comptes, annonces, messagerie. Architecture MVC sans framework.",
      en: "Peer to peer book exchange platform: account, announcements, messaging. Layered MVC architecture built without frameworks"
    },
    categories: ["php"],
    tech: ["PHP 8", "MySQL", "PDO", "MVC"],
    link: "https://github.com/ChrisAnger59/TomTroc",
    linkLabel: {
      fr: "Code de TomTroc sur GitHub",
      en: "TomTroc source code on GitHub"
    }
  },
  {
    id: "sportsee",
    title: "SportSee",
    description: {
      fr: "Tableau de bord d'activité sportive en composants réutilisables : sessions, performances et objectifs d'un utilisateur.",
      en: "Physical activity dashboard built from reusable components: sessions, performances and goals for the user."
    },
    categories: ["react"],
    tech: ["React", "Vite", "React Router", "Recharts"],
    link: "https://github.com/ChrisAnger59/SportSee",
    linkLabel: {
      fr: "Code de SportSee sur GitHub",
      en: "SportSee source code on GitHub"
    }
  },
  {
    id: "learn-home",
    title: "Learn@Home",
    description:{
      fr: "Cadrage d'une plateforme de tutorat scolaire : veille marché et outils, diagrammes UML des cas d'usage, rédaction des user stories, maquettes Figma, Kanban.",
      en: "Project scoping for a non-profit tutoring platform: market and tech stack research, UML use-case diagrams, user stories, Figma model, Kanban."
    },
    categories: ["cadrage"],
    tech: ["Cadrage", "UML", "Figma", "Kanban"],
    link: "https://github.com/ChrisAnger59/Learn-Home",
    linkLabel: {
      fr: "Documents de Learn@Home sur GitHub",
      en: "Learn@Home documents on GitHub"
    }
  }
];

export default projects;