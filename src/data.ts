import figs from "./assets/i-hate-figs.png";
import doing from "./assets/what-was-i-doing.png";
import insecure from "./assets/insecure-app.png";

const videos = [
  {
    title: "Nancy Drew: the secret of the old clock: chapter 2",
    description: "A faithful adaptation of Carolyn Keene's seminal work",
    src: "https://www.youtube-nocookie.com/embed/KCq7qrHzQTY",

    id: 1,
  },

  {
    title: "Things I Have Lost",
    description: "Excerpts from an essay by Kaycie Hall",
    src: "https://www.youtube-nocookie.com/embed/miPxh26NHmc",
    id: 2,
  },

  {
    title: "Inside Quarantine 2020",
    description: "We held it together really well",
    src: "https://www.youtube-nocookie.com/embed/F7UZl_nfBso",
    id: 3,
  },

  {
    title: "Sk8 Lunch",
    description: "A promo video for an elite club",
    src: "https://www.youtube-nocookie.com/embed/10nN8IXQeC0",
    id: 4,
  },

  {
    title: "Makeup tutorial",
    description: "Maybe she's an influencer",
    src: "https://www.youtube-nocookie.com/embed/8CC91V0avDI",
    id: 5,
  },

  {
    title: "Crawfish Boil",
    description: "Just a video of my family at a crawfish boil",
    src: "https://www.youtube-nocookie.com/embed/Ki7xysY4uz4",
    id: 6,
  },

  {
    title: "Tasty",
    description: "It's a parody",
    src: "https://www.youtube-nocookie.com/embed/famPdZvt6bg",
    id: 7,
  },

  {
    title: "Batman: Episode 1",
    description: "A stop-motion about a hero calling himself Batman in France",
    src: "https://www.youtube-nocookie.com/embed/jEP4DDwOPGM",
    id: 8,
  },

  {
    title: "Batman: Episode 2",
    description: "The second installment of this cancelled series",
    src: "https://www.youtube-nocookie.com/embed/yjoHXnqguxo",
    id: 9,
  },
];

const comics = [
  {
    id: 1,
    url: "https://medium.com/@meryldakin/nine-ways-of-looking-at-a-fig-tree-7ede7bce9d66",
    image: figs,
    name: "Nine ways of looking at a fig tree"
  },
  {
    id: 2,
    url: "https://medium.com/@meryldakin/what-was-i-supposed-to-be-doing-again-d0577a6f2c25",
    image: doing,
    name: "A day in the life of a programmer"
  },
  {
    id: 3,
    url: "https://medium.com/@meryldakin/unsecure-insecure-c4d45c849939",
    image: insecure,
    name: "App security"
  },
];

export { videos, comics };