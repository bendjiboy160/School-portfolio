import {
  mobile,
  backend,
  creator,
  volleyboll,
  book,
  stone,
  computer,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  figma,
  BonneFemme,
  Ljudbang,
  Peab,
  Web1Bild,
  Web2Bild,
  Web3Bild,
  threejs,
  Index,
  Ovning00,
  Logga,
  Ovning2,
  Ovning3,
  Ovning4a,
  Ovning4b,
  Ovning4c,
  Ovning6a,
  Ovning6b,
  Ovning7,
  Ovning8,
  Ovning9,
  Ovning10,
  Ovning11,
  Ovning12,
  Ovning13,
  Collab,
  Parralax,
  Index2,
  WebShop,
  FramtidensTeknik,
} from "../assets";

export const navLinks = [
  {
    id: "Web1",
    title: "Web1",
  },
  {
    id: "Web2",
    title: "Web2",
  },
  {
    id: "Web3",
    title: "Web3",
  },
];

const services = [
  {
    title: "Student",
    icon: book,
  },
  {
    title: "Philosopher",
    icon: stone,
  },
  {
    title: "Volleyball player",
    icon: volleyboll,
  },
  {
    title: "Software development",
    icon: computer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Prao",
    company_name: "LjudBang",
    icon: Ljudbang,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Added sound to a advertisment",

    ],
  },
  {
    title: "Prao",
    company_name: "Bonne Femme",
    icon: BonneFemme,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Baked goods",
      "Cooked food",
      "Served customer",
      "Tidying up the café",
      ,
    ],
  },
  {
    title: "Summer job",
    company_name: "Peab",
    icon: Peab,
    iconBg: "#F7F7F7",
    date: "2023",
    points: [
      "Outdoor maintenance",
      "Indoor maintenance",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Benjamin proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Benjamin does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Benjamin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Web1",
    description:
      "All exercises and project I worked on during the webutveckling 1 course",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: Web1Bild,
    source_code_link: "/Web1",
  },
  {
    name: "Web2",
    description:
      "All exercises I have made from the start of webutveckling 2 until now",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: Web2Bild,
    source_code_link: "/Web2",
  },
  {
    name: "Web3",
    description:
      "Work in Progress",
    tags: [
    
    ],
    image: Web3Bild,
    source_code_link: "Prog",
  }
];

const Web1OvningarInfo = [
  {
    name: "Index",
    description:
      "My page for webb1",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "orange-text-gradient",
      },
    ],
    image: Index,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/index.html",
  },
  {
    name: "Exercise 1",
    description:
      "My first exercise",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
      
      ],
    image: Ovning00,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/Ovning00.html",
  },
  {
    name: "Logga(Exercise 1)",
    description:
      "A loggo I made in gimp",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Gimp",
        color: "green-text-gradient",
      },
    ],
    image: Logga,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/logga.html",
  },
  {
    name: "Exercise 2",
    description:
      "Exercise 2 is about css and internet history",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: Ovning2,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning2.html",
  },
  {
    name: "Exercise 3",
    description:
      "Exercise 3 is a continue of exercise 2",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: Ovning3,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning3.html",
  },
  {
    name: "Exercise 4a",
    description:
      "Exercise 4a is about css, specifikt margin, padding and text align",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Margin, Padding, Text Align",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning4a,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning4_a.html",
  },
  {
    name: "Exercise 4b",
    description:
      "Exercise 4b is about css and 'text align' commando",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Text Align",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning4b,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning4_b.html",
  },
  {
    name: "Exercise 4c",
    description:
      "Exercise 4 c is about css and 'backgroundcolor' commando",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Backgroundcolor",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning4c,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning4_c.html",
  },
  {
    name: "Exercise 6a",
    description:
      "Exercise 6 a is about external css files and 'position' commando",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Position",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning6a,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning6a.html",
  },
  {
    name: "Exercise 6b",
    description:
      'Exercise 6b is mostly about "position" commando',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Position",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning6b,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning6b.html",
  },
  {
    name: "Exercise 7",
    description:
      'Exercise 7 is about "display flex" and alike',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "flex",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning7,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning7.html",
  },
  {
    name: "Exercise 8",
    description:
      'Exercise 9 is about grids and grid area',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "grid",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning8,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning8.html",
  },
  {
    name: "Exercise 9",
    description:
      'Exercise 9 consisted of building a webshop bilt on different "containers"',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "container",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning9,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning9.html",
  },
  {
    name: "Exercise 10",
    description:
      'On Exercise 10 I would do a "form"',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "form",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning10,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning10.html",
  },
  {
    name: "Exercise 11",
    description:
      'Exercise is about using multiple "class" on the same element',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Class",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning11,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning11.html",
  },
  {
    name: "Exercise 12",
    description:
      'Exercise 12 is about Javascript',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js, Jquery",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning12,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning12.html",
  },
  {
    name: "Exercise 13",
    description:
      'More javascript',
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "orange-text-gradient",
      },
    ],
    image: Ovning13,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/ovningar/ovning13.html",
  },
];

const Web1ProjektInfo = [
  {
    name: "Collab",
    description:
      "An attempt att making a webstore by me and my friend in the beginning of the course",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: Collab,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/collab/collab.html",
  },
  {
    name: "Parralax",
    description:
      "Tested background behind elements, kinda",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: Parralax,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/sak.html",
  },
  {
    name: "Index 2",
    description:
      "A slightly newer index page",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: Index2,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/index2.html",
  },
  {
    name: "Webshop",
    description:
      "Webshop that sells volleyball products and alike",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: WebShop,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/eget_project/index_project.html",
  },
  {
    name: "Framtidens Teknik",
    description:
      "A informative page about new technologies",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: FramtidensTeknik,
    source_code_link: "https://labb.vgy.se/~bensal23/webbutveckling1/FramtidensTeknik/Index.html",
  },
];


export { services, technologies, experiences, testimonials, projects, Web1OvningarInfo, Web1ProjektInfo };