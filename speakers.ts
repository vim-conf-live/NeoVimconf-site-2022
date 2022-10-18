export interface Talk {
  title: string;
  description: string;
  date: string;
};

export interface Speaker {
  // Personal
  name: string;
  title?: string;
  image?: string;

  // Social
  twitch?: string;
  twitter?: string;
  website?: string;
  youtube?: string;

  // Other
  talks?: Talk[];
};

const speakers: Speaker[] = [
  {
    name: "Harold",
    website: "https://en.wikipedia.org/wiki/Hide_the_Pain_Harold",
    image: "https://i0.wp.com/www.meme-arsenal.com/memes/615dc2dfdc3914c5e9d0ece48ee3c679.jpg",
      talks: [
      { "title": "Hiding the pain", description: "How to hide the pain in times of disgrace", date: "2022-01-10T09:00:00.000Z" }
    ]
  },
  {
    name: "Rick Astley",
    title: "Rickroller",
    image: "https://www.aboutmanchester.co.uk/wp-content/uploads/2020/04/DFA6B3F3-EBD2-48C4-A4C7-9BB23067CE01.jpeg",
    twitter: "https://twitter.com/rickastley",
    youtube: "https://youtu.be/dQw4w9WgXcQ",
      talks: [
      { title: "How to Rick", description: "Never gonna give you up", date: "2022-01-09T16:00:00.000Z" },
      { title: "How to Roll", description: "Never gonna let you down", date: "2022-01-09T17:00:00.000Z" }
    ]
  },
  {
    name: "The Daddygen",
    title: "CEO @ The Startup",
    image: "https://pbs.twimg.com/profile_images/1510770649559547908/zd9t45gH_400x400.jpg",
    twitter: "https://twitter.com/ThePrimeagen",
    twitch: "https://twitch.tv/ThePrimeagen",
    youtube: "https://youtube.com/ThePrimeagen",
      talks: [
      { title: "Why I use VSC***", description: "Because I love javascript and working with Electron", date: "2022-01-09T09:00:00.000Z" }
    ]
  }
];

export default speakers;
