export type ProjectEntryType = {
  name: string;
  description: string;
  url: string;
}

export type ExperienceEntryType = {
  title: string;
  company: string;
  location: string;
  interval: string;
  description: string;
}

export const baseURL = {
    local: "http://localhost:5173/",
    deployed: "https://hevinjant.github.io/my-portfolio/",
  };
  
  export const myProjects : ProjectEntryType[] = [
    {
      name: "Portfolio Website - 2",
      description:
        "Developed portfolio website using React TypeScript and Material UI. Hosted on GitHub Pages.",
      url: "https://github.com/hevinjant/portfolio",
    },
    {
      name: "Spottem - Music Based Social Media",
      description:
        "Developed a web application social media based on music. Using Spotify API and Spotify OAuth to access user’s personal information and songs. Developed with React JavaScript, and Python Flask. The web application is deployed to Heroku and the data is managed using Atlas MongoDB database.",
      url: "https://github.com/hevinjant/spottem-reactjs",
      //url: baseURL.deployed + "spottem",
    },
    {
      name: "Messaging Mobile App",
      description:
        "Developed a real-time messaging mobile application using iOS Swift, with UIKit and MessageKit. The app uses Firebase real-time database for real-time user interaction and supports text, photo, video, and location messages.",
      url: "https://github.com/hevinjant/AntPena",
    },
    {
      name: "See You Later - One Day Hackathon Project",
      description:
        "Developed a web application to manage new year resolutions using React JavaScript. New technologies that I learned during the hackathon; integrate web application with MetaMask Crypto Wallet, create tokens and its smart contract with Ethereum BlockChain using Solidity.",
      url: "https://github.com/hevinjant/SYL-Hackathon",
    },
    {
      name: "Portfolio Website",
      description:
        "Developed portfolio website using React JavaScript and styled with CSS. Hosted on GitHub Pages.",
      url: "https://github.com/hevinjant/my-portfolio-website",
    },
    {
      name: "3D Platform Game",
      description:
        "Developed 3D game with Unity Real-Time Game Engine. Published through WebGL to Unity Play.",
      url: "https://play.unity.com/mg/other/webgl-builds-141238",
    },
    {
      name: "BMP File Compression",
      description:
        "Developed multiprocessing program in C/C++ that is able to compress or decompress BMP file using lossless bit-level Huffman encoding algorithm and encrypted using bitwise XOR operation.",
      url: "https://github.com/hevinjant/CompressBMP",
    },
    {
      name: "Simple Blog-posting Webpage",
      description:
        "Developed a blog-posting webpage through Python’s web framework, Django. The program is deployed with Heroku cloud platform and S3 file storage system from Amazon Web Service (AWS).",
      url: "https://github.com/hevinjant/TMYS",
    },
  ];
  
  const myExperiences:ExperienceEntryType[] = [
    {
      title: "Programming Tutor and Office Assistant",
      company:
        "Academic Computing Research Center at City College of San Francisco",
      location: "San Francisco, CA",
      interval: "June 2018 – May 2020",
      description:
        "Guided 7 to 10 students per day to understand programming concepts in iOS Swift, C++, C, and Python programming language.",
    },
    {
      title: "First Winner of Progress Database at API World 2018 Hackathon",
      company: "Hackathon",
      location: "San Jose, CA",
      interval: "Sept 2018",
      description:
        "Brainstormed and executed idea in a group of three people to make a mobile app in iOS Swift and used Progress Database API for the backend.",
    },
    {
      title: "Mathematics Tutor",
      company: "Learning Assistance Center at City College of San Francisco",
      location: "San Francisco, CA",
      interval: "Aug 2019 – May 2020",
      description:
        "Guided 4 to 6 students per day to improve their learning ability in advanced Algebra and Calculus.",
    },
    {
      title: "Web/Mobile App developer Intern",
      company: "PT Guna Elektro",
      location: "Jakarta, Indonesia",
      interval: "June 2021 – Aug 2021",
      description:
        "Worked in a team of three people and developed web/mobile application for internal warehouse management using Microsoft 365 platform such as SharePoint, Power Apps, and Power Automate.",
    },
    {
      title: "See You Later, Hackulator - Hackathon",
      company: "Hackathon",
      location: "Virtual",
      interval: "December 31, 2021",
      description:
        "Worked in a team of two people, exploring and learning new technologies in one day. Our group developed a website that integrates with MetaMask Crypto Wallet and created token and its smart contract with Ethereum BlockChain using Solidity.",
    },
    {
      title: "React Developer",
      company: "Cal Poly Cybersecurity Institute",
      location: "San Luis Obispo, CA",
      interval: "March 2022 - March 2023",
      description:
        "In an agile environment, working on the Space Grand Challenge website; refactoring the website from React class-based components to functional components, implementing user authentication process using AWS Cognito, and applying Material UI components to the website. Working with technologies such as JavaScript, TypeScript, and AWS.",
    },
    {
      title: "Fullstack Web Developer",
      company: "Verdant Robotics",
      location: "Hayward, CA",
      interval: "June 2022 - September 2022",
      description:
        "Working on the internal company’s web applications to automate the weeding work for agriculture. In an agile environment; I was maintaining, updating, and adding new features to the web applications that were built with React JavaScript, TypeScript, and Python Flask.",
    },
    {
      title: "IT Analyst",
      company: "PT Bank BNI New York Agency",
      location: "New York City, NY",
      interval: "April 2023 - May 2024",
      description: "Analyzing, troubleshooting, and providing technical support for various IT solutions and networks. Enhancing operational workflow by automating repetitive tasks. Developing web application to streamline and automate the process of tracking and managing employee attendance."
    },
    {
      title: "IT Associate",
      company: "Bazic Products",
      location: "El Monte, CA",
      interval: "June 2024 - Present",
      description: "Developed software to automate warehouse operation in batching orders. Developed and customized BigCommerce B2C and B2B platform. Customizing company's B2C Shopify Ecommerce platform. Analyzing, troubleshooting, and providing technical support for various IT solutions and networks."
    }
  ];
  
  export const reversedMyExperiences = myExperiences.reverse();
  
  export const aboutMe =
    "Hello, there! My name is Hevin Jantasmin. I’m a fresh graduate who is passionate about coding and software development. I’m currently focusing on web development in the front-end as well as the back-end and databases. I’m eager to learn about new things and grow in the field of software development. I received my Bachelor's degree in Computer Science from Cal Poly SLO and have already gained some experience through internships, works, and personal projects.";
  